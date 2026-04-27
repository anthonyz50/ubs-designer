import React, { forwardRef, useId } from 'react';
import { FormField } from '../FormField';
import styles from './Select.module.css';

/** Select size options. */
export type SelectSize = 'sm' | 'md' | 'lg';

/** A single option in the select dropdown. */
export interface SelectOption {
  /** The option value. */
  value: string;
  /** The displayed label. */
  label: string;
  /** Whether this option is disabled. */
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'size' | 'multiple'
  > {
  /** Label text displayed above the select. */
  label?: string;
  /** Available options. */
  options: SelectOption[];
  /** Controlled value (string for single, string[] for multiple). */
  value?: string | string[];
  /** Change handler. */
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  /** Error message. Displays red border and error text below. */
  error?: string;
  /** Helper text displayed below the select when there is no error. */
  helperText?: string;
  /** Whether the select is disabled. */
  disabled?: boolean;
  /** Whether the select is required. */
  required?: boolean;
  /** Placeholder text shown as the first unselectable option. */
  placeholder?: string;
  /** Size of the select. @default 'md' */
  size?: SelectSize;
  /** Whether to allow multiple selections. */
  multiple?: boolean;
  /** Whether the wrapper should be full width. */
  fullWidth?: boolean;
}

/**
 * UBS Design System Select component.
 *
 * A native select element with custom styling, chevron icon, and consistent
 * error/focus/disabled states following UBS brand guidelines.
 *
 * @example
 * ```tsx
 * <Select
 *   label="Country"
 *   placeholder="Select a country"
 *   options={[
 *     { value: 'gb', label: 'United Kingdom' },
 *     { value: 'ch', label: 'Switzerland' },
 *   ]}
 *   required
 * />
 * ```
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      value,
      onChange,
      error,
      helperText,
      disabled = false,
      required = false,
      placeholder,
      size = 'md',
      multiple = false,
      fullWidth = false,
      className,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const selectId = providedId ?? `ubs-select-${autoId}`;
    const errorId = error ? `${selectId}-error` : undefined;
    const helperTextId = helperText && !error ? `${selectId}-helper` : undefined;
    const describedBy =
      [errorId, helperTextId].filter(Boolean).join(' ') || undefined;

    const selectClassNames = [
      styles.select,
      styles[size],
      multiple ? styles.multiple : '',
      error ? styles.error : '',
      disabled ? styles.disabled : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <FormField
        label={label}
        error={error}
        helperText={helperText}
        required={required}
        htmlFor={selectId}
        fullWidth={fullWidth}
        errorId={errorId}
        helperTextId={helperTextId}
      >
        <div className={styles.selectWrapper}>
          <select
            ref={ref}
            id={selectId}
            className={selectClassNames}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            multiple={multiple}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled className={styles.placeholder}>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          {!multiple && (
            <span className={styles.chevron} aria-hidden="true">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </div>
      </FormField>
    );
  }
);

Select.displayName = 'Select';
