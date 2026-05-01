import React, { forwardRef, useState, useRef, useEffect, useCallback, useId, useMemo } from 'react';
import styles from './ContextSelector.module.css';

/** A context option. */
export interface ContextSelectorOption {
  /** Display label. */
  label: string;
  /** The option value. */
  value: string;
  /** Optional description or subtitle. */
  description?: string;
  /** Optional icon or avatar element. */
  icon?: React.ReactNode;
  /** Whether this option is disabled. */
  disabled?: boolean;
}

export interface ContextSelectorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Available context options. */
  options: ContextSelectorOption[];
  /** Currently selected value. */
  value?: string;
  /** Change handler. */
  onChange?: (value: string) => void;
  /** Label text displayed above the selector. */
  label?: string;
  /** Icon element shown alongside the current selection. */
  icon?: React.ReactNode;
  /** Whether the options list is searchable. @default true */
  searchable?: boolean;
  /** Whether the selector is disabled. */
  disabled?: boolean;
  /** Placeholder text when no value is selected. */
  placeholder?: string;
}

/**
 * UBS Design System ContextSelector component.
 *
 * A dropdown for switching contexts such as accounts, workspaces, or
 * portfolios. Displays the current selection with an optional icon/avatar
 * and supports search within the options list.
 *
 * @example
 * ```tsx
 * <ContextSelector
 *   label="Account"
 *   options={[
 *     { label: 'Personal', value: 'personal', description: 'CH-1234' },
 *     { label: 'Business', value: 'business', description: 'CH-5678' },
 *   ]}
 *   value="personal"
 *   onChange={(val) => setAccount(val)}
 *   searchable
 * />
 * ```
 */
export const ContextSelector = forwardRef<HTMLDivElement, ContextSelectorProps>(
  (
    {
      options,
      value,
      onChange,
      label,
      icon,
      searchable = true,
      disabled = false,
      placeholder = 'Select context...',
      className,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const autoId = useId();
    const listId = `ubs-context-list-${autoId}`;
    const triggerId = `ubs-context-trigger-${autoId}`;

    const selectedOption = options.find(o => o.value === value);

    const filteredOptions = useMemo(() => {
      if (!searchable || !query.trim()) return options;
      const lowerQuery = query.toLowerCase();
      return options.filter(
        opt =>
          opt.label.toLowerCase().includes(lowerQuery) ||
          opt.description?.toLowerCase().includes(lowerQuery)
      );
    }, [options, query, searchable]);

    const close = useCallback(() => {
      setOpen(false);
      setQuery('');
      setFocusedIndex(-1);
    }, []);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          close();
        }
      };
      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open, close]);

    useEffect(() => {
      if (open && searchable) {
        setTimeout(() => searchRef.current?.focus(), 0);
      }
    }, [open, searchable]);

    useEffect(() => {
      if (open && focusedIndex >= 0 && listRef.current) {
        const items = listRef.current.querySelectorAll('[role="option"]');
        (items[focusedIndex] as HTMLElement)?.scrollIntoView({ block: 'nearest' });
      }
    }, [focusedIndex, open]);

    const handleToggle = () => {
      if (disabled) return;
      if (open) close();
      else {
        setOpen(true);
        setFocusedIndex(-1);
      }
    };

    const handleSelect = (optValue: string) => {
      onChange?.(optValue);
      close();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!open) {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOpen(true);
          setFocusedIndex(0);
        }
        return;
      }

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
      }
    };

    const containerClassNames = [
      styles.container,
      disabled ? styles.disabled : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={containerClassNames} {...rest}>
        {label && <span className={styles.label}>{label}</span>}
        <div ref={containerRef} className={styles.wrapper}>
          <button
            type="button"
            id={triggerId}
            className={[styles.trigger, open ? styles.triggerOpen : ''].filter(Boolean).join(' ')}
            disabled={disabled}
            aria-disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={open ? listId : undefined}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
          >
            {(icon || selectedOption?.icon) && (
              <span className={styles.triggerIcon}>
                {selectedOption?.icon ?? icon}
              </span>
            )}
            <span className={styles.triggerContent}>
              {selectedOption ? (
                <>
                  <span className={styles.triggerLabel}>{selectedOption.label}</span>
                  {selectedOption.description && (
                    <span className={styles.triggerDescription}>{selectedOption.description}</span>
                  )}
                </>
              ) : (
                <span className={styles.triggerPlaceholder}>{placeholder}</span>
              )}
            </span>
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
          </button>
          {open && (
            <div className={styles.dropdown}>
              {searchable && (
                <div className={styles.searchWrapper}>
                  <svg
                    className={styles.searchIcon}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <input
                    ref={searchRef}
                    type="text"
                    className={styles.search}
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setFocusedIndex(-1);
                    }}
                    onKeyDown={handleKeyDown}
                    aria-label="Search options"
                    aria-controls={listId}
                  />
                </div>
              )}
              <ul
                ref={listRef}
                id={listId}
                role="listbox"
                className={styles.listbox}
                aria-label={label ?? 'Context options'}
                aria-activedescendant={
                  focusedIndex >= 0 ? `${listId}-option-${focusedIndex}` : undefined
                }
              >
                {filteredOptions.length === 0 ? (
                  <li className={styles.noResults} role="presentation">
                    No results found
                  </li>
                ) : (
                  filteredOptions.map((opt, index) => {
                    const isSelected = opt.value === value;
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
                        {opt.icon && (
                          <span className={styles.optionIcon}>{opt.icon}</span>
                        )}
                        <span className={styles.optionContent}>
                          <span className={styles.optionLabel}>{opt.label}</span>
                          {opt.description && (
                            <span className={styles.optionDescription}>{opt.description}</span>
                          )}
                        </span>
                        {isSelected && (
                          <svg
                            className={styles.checkmark}
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
);

ContextSelector.displayName = 'ContextSelector';
