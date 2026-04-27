import React, { forwardRef, useId } from 'react';
import { FormField } from '../FormField';
import styles from './Input.module.css';

/** Input size options. */
export type InputSize = 'sm' | 'md' | 'lg';

/** Supported input types. */
export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Label text displayed above the input. */
  label?: string;
  /** Placeholder text. */
  placeholder?: string;
  /** Controlled value. */
  value?: string | number;
  /** Change handler. */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Error message. Displays red border and error text below. */
  error?: string;
  /** Helper text displayed below the input when there is no error. */
  helperText?: string;
  /** Whether the input is disabled. */
  disabled?: boolean;
  /** Whether the input is required. */
  required?: boolean;
  /** Whether the input is read-only. */
  readOnly?: boolean;
  /** Size of the input. @default 'md' */
  size?: InputSize;
  /** Input type. @default 'text' */
  type?: InputType;
  /** Icon rendered on the left side of the input. */
  iconLeft?: React.ReactNode;
  /** Icon rendered on the right side of the input. */
  iconRight?: React.ReactNode;
  /** Whether to show a clear button when the input has a value. */
  clearable?: boolean;
  /** Callback when the clear button is clicked. */
  onClear?: () => void;
  /** Whether the wrapper should be full width. */
  fullWidth?: boolean;
}

/**
 * UBS Design System Input component.
 *
 * A text input with label, error, helper text, icons, and clear functionality.
 * Follows UBS brand guidelines with proper accessibility support.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   error="Please enter a valid email address"
 *   required
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      error,
      helperText,
      disabled = false,
      required = false,
      readOnly = false,
      size = 'md',
      type = 'text',
      iconLeft,
      iconRight,
      clearable = false,
      onClear,
      fullWidth = false,
      className,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const inputId = providedId ?? `ubs-input-${autoId}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperTextId = helperText && !error ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperTextId].filter(Boolean).join(' ') || undefined;

    const showClear = clearable && value && !disabled && !readOnly;
    const hasRightAddon = iconRight || showClear;

    const inputClassNames = [
      styles.input,
      styles[size],
      iconLeft ? styles.hasIconLeft : '',
      hasRightAddon ? styles.hasIconRight : '',
      error ? styles.error : '',
      disabled ? styles.disabled : '',
      readOnly ? styles.readonly : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const handleClear = () => {
      onClear?.();
    };

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
          {iconLeft && (
            <span className={styles.iconLeft} aria-hidden="true">
              {iconLeft}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            type={type}
            className={inputClassNames}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            {...rest}
          />

          {showClear ? (
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              aria-label="Clear input"
              tabIndex={-1}
            >
              ✕
            </button>
          ) : iconRight ? (
            <span className={styles.iconRight} aria-hidden="true">
              {iconRight}
            </span>
          ) : null}
        </div>
      </FormField>
    );
  }
);

Input.displayName = 'Input';
