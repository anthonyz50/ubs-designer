import React, { forwardRef, useState, useRef, useEffect, useCallback, useId, useMemo } from 'react';
import styles from './ComboBox.module.css';

/** A ComboBox option. */
export interface ComboBoxOption {
  /** Display label. */
  label: string;
  /** The option value. */
  value: string;
  /** Whether this option is disabled. */
  disabled?: boolean;
}

export interface ComboBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Available options. */
  options: ComboBoxOption[];
  /** Current selected value(s). String for single, string[] for multiple. */
  value?: string | string[];
  /** Change handler. */
  onChange?: (value: string | string[]) => void;
  /** Placeholder text for the input. */
  placeholder?: string;
  /** Whether multiple options can be selected. @default false */
  multiple?: boolean;
  /** Whether the options list is searchable/filterable. @default true */
  searchable?: boolean;
  /** Whether options are currently loading. @default false */
  loading?: boolean;
  /** Text shown when no results match the search. @default 'No results found' */
  noResultsText?: string;
  /** Whether the combobox is disabled. */
  disabled?: boolean;
  /** Error message. Displays red border and error text. */
  error?: string;
  /** Label text displayed above the combobox. */
  label?: string;
}

/**
 * UBS Design System ComboBox component.
 *
 * A searchable dropdown that combines a text input with a filterable
 * options list. Supports single and multi-select modes with typeahead
 * autocomplete functionality.
 *
 * @example
 * ```tsx
 * <ComboBox
 *   label="Country"
 *   placeholder="Search countries..."
 *   options={[
 *     { label: 'United Kingdom', value: 'gb' },
 *     { label: 'Switzerland', value: 'ch' },
 *     { label: 'Germany', value: 'de' },
 *   ]}
 *   value="gb"
 *   onChange={(val) => setCountry(val as string)}
 * />
 * ```
 */
export const ComboBox = forwardRef<HTMLDivElement, ComboBoxProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Search...',
      multiple = false,
      searchable = true,
      loading = false,
      noResultsText = 'No results found',
      disabled = false,
      error,
      label,
      className,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const autoId = useId();
    const listId = `ubs-combobox-list-${autoId}`;
    const inputId = `ubs-combobox-input-${autoId}`;

    const selectedValues: string[] = Array.isArray(value)
      ? value
      : value !== undefined
        ? [value]
        : [];

    const filteredOptions = useMemo(() => {
      if (!searchable || !query.trim()) return options;
      const lowerQuery = query.toLowerCase();
      return options.filter(opt => opt.label.toLowerCase().includes(lowerQuery));
    }, [options, query, searchable]);

    const close = useCallback(() => {
      setOpen(false);
      setFocusedIndex(-1);
    }, []);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          close();
          if (!multiple && selectedValues.length > 0) {
            const selected = options.find(o => o.value === selectedValues[0]);
            setQuery(selected?.label ?? '');
          } else if (!multiple) {
            setQuery('');
          }
        }
      };
      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open, close, multiple, selectedValues, options]);

    useEffect(() => {
      if (open && focusedIndex >= 0 && listRef.current) {
        const items = listRef.current.querySelectorAll('[role="option"]');
        const target = items[focusedIndex] as HTMLElement;
        target?.scrollIntoView({ block: 'nearest' });
      }
    }, [focusedIndex, open]);

    // Sync display value for single select
    useEffect(() => {
      if (!multiple && !open && selectedValues.length > 0) {
        const selected = options.find(o => o.value === selectedValues[0]);
        if (selected) setQuery(selected.label);
      }
    }, [value, options, multiple, open, selectedValues]);

    const handleSelect = (optValue: string) => {
      if (!onChange) return;
      if (multiple) {
        const newValues = selectedValues.includes(optValue)
          ? selectedValues.filter(v => v !== optValue)
          : [...selectedValues, optValue];
        onChange(newValues);
        setQuery('');
        inputRef.current?.focus();
      } else {
        onChange(optValue);
        const selected = options.find(o => o.value === optValue);
        setQuery(selected?.label ?? '');
        close();
      }
    };

    const handleRemoveTag = (optValue: string) => {
      if (!onChange || disabled) return;
      onChange(selectedValues.filter(v => v !== optValue));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      if (!open) setOpen(true);
      setFocusedIndex(-1);
    };

    const handleInputFocus = () => {
      if (!disabled) setOpen(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!open && (e.key === 'ArrowDown' || e.key === 'Enter')) {
        e.preventDefault();
        setOpen(true);
        setFocusedIndex(0);
        return;
      }

      if (!open) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          break;
        case 'Enter': {
          e.preventDefault();
          const opt = filteredOptions[focusedIndex];
          if (opt && !opt.disabled) {
            handleSelect(opt.value);
          }
          break;
        }
        case 'Escape':
          e.preventDefault();
          close();
          break;
        case 'Backspace':
          if (multiple && !query && selectedValues.length > 0) {
            handleRemoveTag(selectedValues[selectedValues.length - 1]);
          }
          break;
      }
    };

    const containerClassNames = [
      styles.container,
      disabled ? styles.disabled : '',
      error ? styles.error : '',
      open ? styles.open : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={containerClassNames} {...rest}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div
          className={styles.inputWrapper}
          ref={containerRef}
          onClick={() => inputRef.current?.focus()}
        >
          {multiple && selectedValues.length > 0 && (
            <div className={styles.tags}>
              {selectedValues.map(val => {
                const opt = options.find(o => o.value === val);
                return (
                  <span key={val} className={styles.tag}>
                    <span className={styles.tagLabel}>{opt?.label ?? val}</span>
                    <button
                      type="button"
                      className={styles.tagRemove}
                      aria-label={`Remove ${opt?.label ?? val}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveTag(val);
                      }}
                      tabIndex={-1}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                  </span>
                );
              })}
            </div>
          )}
          <input
            ref={inputRef}
            id={inputId}
            type="text"
            className={styles.input}
            role="combobox"
            aria-expanded={open}
            aria-controls={open ? listId : undefined}
            aria-autocomplete="list"
            aria-activedescendant={
              focusedIndex >= 0 ? `${listId}-option-${focusedIndex}` : undefined
            }
            aria-invalid={!!error}
            placeholder={multiple && selectedValues.length > 0 ? '' : placeholder}
            value={query}
            disabled={disabled}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onKeyDown={handleKeyDown}
            readOnly={!searchable}
          />
          <svg
            className={styles.chevron}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {open && (
            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              className={styles.listbox}
              aria-multiselectable={multiple}
              aria-label={label ?? 'Options'}
            >
              {loading ? (
                <li className={styles.loading} role="presentation">
                  <span className={styles.spinner} aria-hidden="true" />
                  Loading...
                </li>
              ) : filteredOptions.length === 0 ? (
                <li className={styles.noResults} role="presentation">
                  {noResultsText}
                </li>
              ) : (
                filteredOptions.map((opt, index) => {
                  const isSelected = selectedValues.includes(opt.value);
                  return (
                    <li
                      key={opt.value}
                      id={`${listId}-option-${index}`}
                      role="option"
                      className={[
                        styles.option,
                        isSelected ? styles.optionSelected : '',
                        opt.disabled ? styles.optionDisabled : '',
                        focusedIndex === index ? styles.optionFocused : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      aria-selected={isSelected}
                      aria-disabled={opt.disabled}
                      onClick={() => {
                        if (!opt.disabled) handleSelect(opt.value);
                      }}
                    >
                      {multiple && (
                        <span className={styles.checkbox} aria-hidden="true">
                          {isSelected && (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                      )}
                      <span className={styles.optionLabel}>{opt.label}</span>
                    </li>
                  );
                })
              )}
            </ul>
          )}
        </div>
        {error && <span className={styles.errorText} role="alert">{error}</span>}
      </div>
    );
  }
);

ComboBox.displayName = 'ComboBox';
