import React, { forwardRef, useState, useRef, useEffect, useCallback, useId, useMemo } from 'react';
import styles from './Dropdown.module.css';

/** A dropdown option. */
export interface DropdownOption {
  /** Display label. */
  label: string;
  /** The option value. */
  value: string;
  /** Whether this option is disabled. */
  disabled?: boolean;
}

/** A group of dropdown options. */
export interface DropdownOptionGroup {
  /** Group label. */
  label: string;
  /** Options within this group. */
  options: DropdownOption[];
}

/** Dropdown size options. */
export type DropdownSize = 'small' | 'medium' | 'large';

export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Options, either flat or grouped. */
  options: (DropdownOption | DropdownOptionGroup)[];
  /** Current selected value. */
  value?: string;
  /** Change handler. */
  onChange?: (value: string) => void;
  /** Placeholder text when no value is selected. */
  placeholder?: string;
  /** Whether the dropdown is disabled. */
  disabled?: boolean;
  /** Size of the dropdown. @default 'medium' */
  size?: DropdownSize;
  /** Error message. Displays red border and error text. */
  error?: string;
  /** Label text displayed above the dropdown. */
  label?: string;
  /** Helper text displayed below the dropdown. */
  helperText?: string;
}

/**
 * UBS Design System Dropdown component.
 *
 * A custom-styled select dropdown supporting flat and grouped options.
 * Built with full keyboard navigation and ARIA listbox pattern for
 * accessibility compliance.
 *
 * @example
 * ```tsx
 * <Dropdown
 *   label="Currency"
 *   placeholder="Select currency"
 *   options={[
 *     { label: 'Major', options: [
 *       { label: 'USD', value: 'usd' },
 *       { label: 'EUR', value: 'eur' },
 *     ]},
 *     { label: 'Other', options: [
 *       { label: 'CHF', value: 'chf' },
 *     ]},
 *   ]}
 *   value="usd"
 *   onChange={(val) => setCurrency(val)}
 * />
 * ```
 */
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Select...',
      disabled = false,
      size = 'medium',
      error,
      label,
      helperText,
      className,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const autoId = useId();
    const listId = `ubs-dropdown-list-${autoId}`;
    const triggerId = `ubs-dropdown-trigger-${autoId}`;
    const labelId = `ubs-dropdown-label-${autoId}`;

    // Flatten grouped options into a single list for keyboard navigation
    const flatOptions = useMemo(() => {
      const flat: DropdownOption[] = [];
      for (const item of options) {
        if ('options' in item) {
          flat.push(...item.options);
        } else {
          flat.push(item);
        }
      }
      return flat;
    }, [options]);

    const selectedOption = flatOptions.find(o => o.value === value);

    const close = useCallback(() => {
      setOpen(false);
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
      if (open && focusedIndex >= 0 && listRef.current) {
        const items = listRef.current.querySelectorAll('[role="option"]');
        (items[focusedIndex] as HTMLElement)?.scrollIntoView({ block: 'nearest' });
      }
    }, [focusedIndex, open]);

    const handleToggle = () => {
      if (disabled) return;
      if (open) {
        close();
      } else {
        setOpen(true);
        const currentIdx = flatOptions.findIndex(o => o.value === value);
        setFocusedIndex(currentIdx >= 0 ? currentIdx : 0);
      }
    };

    const handleSelect = (optValue: string) => {
      onChange?.(optValue);
      close();
    };

    const actionableIndices = flatOptions
      .map((opt, i) => ({ opt, index: i }))
      .filter(({ opt }) => !opt.disabled);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!open) {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          const curIdx = actionableIndices.findIndex(a => a.index === focusedIndex);
          const next = actionableIndices[(curIdx + 1) % actionableIndices.length];
          if (next) setFocusedIndex(next.index);
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          const curIdx = actionableIndices.findIndex(a => a.index === focusedIndex);
          const prev = actionableIndices[(curIdx - 1 + actionableIndices.length) % actionableIndices.length];
          if (prev) setFocusedIndex(prev.index);
          break;
        }
        case 'Enter':
        case ' ': {
          e.preventDefault();
          const opt = flatOptions[focusedIndex];
          if (opt && !opt.disabled) {
            handleSelect(opt.value);
          }
          break;
        }
        case 'Escape':
          e.preventDefault();
          close();
          break;
        case 'Tab':
          close();
          break;
        case 'Home': {
          e.preventDefault();
          const first = actionableIndices[0];
          if (first) setFocusedIndex(first.index);
          break;
        }
        case 'End': {
          e.preventDefault();
          const last = actionableIndices[actionableIndices.length - 1];
          if (last) setFocusedIndex(last.index);
          break;
        }
      }
    };

    const containerClassNames = [
      styles.container,
      styles[size],
      disabled ? styles.disabled : '',
      error ? styles.error : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    let flatIndex = 0;

    const renderOption = (opt: DropdownOption) => {
      const currentFlatIndex = flatIndex++;
      const isSelected = opt.value === value;
      return (
        <li
          key={opt.value}
          id={`${listId}-option-${currentFlatIndex}`}
          role="option"
          className={[
            styles.option,
            isSelected ? styles.optionSelected : '',
            opt.disabled ? styles.optionDisabled : '',
            focusedIndex === currentFlatIndex ? styles.optionFocused : '',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-selected={isSelected}
          aria-disabled={opt.disabled}
          onClick={() => {
            if (!opt.disabled) handleSelect(opt.value);
          }}
        >
          <span className={styles.optionLabel}>{opt.label}</span>
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
    };

    return (
      <div ref={ref} className={containerClassNames} {...rest}>
        {label && (
          <label id={labelId} className={styles.label}>
            {label}
          </label>
        )}
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
            aria-labelledby={label ? `${labelId} ${triggerId}` : undefined}
            aria-invalid={!!error}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
          >
            <span className={selectedOption ? styles.triggerValue : styles.triggerPlaceholder}>
              {selectedOption?.label ?? placeholder}
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
            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              className={styles.listbox}
              aria-label={label ?? 'Options'}
              aria-activedescendant={
                focusedIndex >= 0 ? `${listId}-option-${focusedIndex}` : undefined
              }
              onKeyDown={handleKeyDown}
              tabIndex={-1}
            >
              {options.map((item, i) => {
                if ('options' in item) {
                  return (
                    <li key={i} role="presentation">
                      <span className={styles.groupLabel}>{item.label}</span>
                      <ul role="group" aria-label={item.label} className={styles.group}>
                        {item.options.map(renderOption)}
                      </ul>
                    </li>
                  );
                }
                return renderOption(item);
              })}
            </ul>
          )}
        </div>
        {error && <span className={styles.errorText} role="alert">{error}</span>}
        {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
