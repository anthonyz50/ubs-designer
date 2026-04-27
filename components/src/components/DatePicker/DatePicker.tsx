import React, { forwardRef, useId } from 'react';
import { FormField } from '../FormField';
import styles from './DatePicker.module.css';

/** Date display format. */
export type DateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';

export interface DatePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange' | 'min' | 'max' | 'size'> {
  /** Label text displayed above the date picker. */
  label?: string;
  /** The selected date value, or null for no selection. */
  value?: Date | null;
  /** Change handler providing the new Date or null. */
  onChange?: (date: Date | null) => void;
  /** Error message. Displays red border and error text below. */
  error?: string;
  /** Helper text displayed below the date picker when there is no error. */
  helperText?: string;
  /** Whether the date picker is disabled. */
  disabled?: boolean;
  /** Whether the date picker is required. */
  required?: boolean;
  /** Minimum selectable date. */
  min?: Date;
  /** Maximum selectable date. */
  max?: Date;
  /** Display format. @default 'DD/MM/YYYY' */
  format?: DateFormat;
  /** Whether the wrapper should be full width. */
  fullWidth?: boolean;
}

/**
 * Formats a Date to YYYY-MM-DD for the native date input value attribute.
 */
function toInputValue(date: Date | null | undefined): string {
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * UBS Design System DatePicker component.
 *
 * Uses a native date input with custom styling, calendar icon, and consistent
 * error/focus/disabled patterns following UBS brand guidelines. Defaults to
 * DD/MM/YYYY format for UK locale.
 *
 * @example
 * ```tsx
 * <DatePicker
 *   label="Date of birth"
 *   value={dob}
 *   onChange={setDob}
 *   max={new Date()}
 *   required
 * />
 * ```
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      label,
      value,
      onChange,
      error,
      helperText,
      disabled = false,
      required = false,
      min,
      max,
      format: _format = 'DD/MM/YYYY',
      fullWidth = false,
      className,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const inputId = providedId ?? `ubs-datepicker-${autoId}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperTextId = helperText && !error ? `${inputId}-helper` : undefined;
    const describedBy =
      [errorId, helperTextId].filter(Boolean).join(' ') || undefined;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (!val) {
        onChange?.(null);
        return;
      }
      // Native date input gives YYYY-MM-DD
      const parsed = new Date(val + 'T00:00:00');
      onChange?.(isNaN(parsed.getTime()) ? null : parsed);
    };

    const inputClassNames = [
      styles.input,
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
        htmlFor={inputId}
        fullWidth={fullWidth}
        errorId={errorId}
        helperTextId={helperTextId}
      >
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            id={inputId}
            type="date"
            className={inputClassNames}
            value={toInputValue(value)}
            onChange={handleChange}
            disabled={disabled}
            required={required}
            min={min ? toInputValue(min) : undefined}
            max={max ? toInputValue(max) : undefined}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            {...rest}
          />
          <span className={styles.calendarIcon} aria-hidden="true">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="4"
                width="16"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M2 8H18" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M14 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      </FormField>
    );
  }
);

DatePicker.displayName = 'DatePicker';
