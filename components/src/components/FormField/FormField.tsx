import React, { forwardRef } from 'react';
import styles from './FormField.module.css';

export interface FormFieldProps {
  /** Label text displayed above the field. */
  label?: string;
  /** Error message displayed below the field. Takes precedence over helperText. */
  error?: string;
  /** Helper text displayed below the field when there is no error. */
  helperText?: string;
  /** Whether the field is required. Appends an asterisk to the label. */
  required?: boolean;
  /** The form control(s) to wrap. */
  children: React.ReactNode;
  /** The `id` of the associated form element, used for the label's `htmlFor`. */
  htmlFor?: string;
  /** Whether the field should span the full width of its container. */
  fullWidth?: boolean;
  /** Additional CSS class name. */
  className?: string;
  /** ID for the error message element (used for aria-describedby). */
  errorId?: string;
  /** ID for the helper text element (used for aria-describedby). */
  helperTextId?: string;
}

/**
 * UBS Design System FormField wrapper component.
 *
 * Provides consistent label, error, and helper text layout for any form input.
 * Used internally by all form components and also exported for custom fields.
 *
 * @example
 * ```tsx
 * <FormField label="Email" error="Please enter a valid email" required>
 *   <input type="email" />
 * </FormField>
 * ```
 */
export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      label,
      error,
      helperText,
      required = false,
      children,
      htmlFor,
      fullWidth = false,
      className,
      errorId,
      helperTextId,
    },
    ref
  ) => {
    const classNames = [
      styles.formField,
      fullWidth ? styles.fullWidth : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames}>
        {label && (
          <label
            htmlFor={htmlFor}
            className={`${styles.label}${required ? ` ${styles.required}` : ''}`}
          >
            {label}
          </label>
        )}

        {children}

        {error ? (
          <p id={errorId} className={styles.errorText} role="alert">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperTextId} className={styles.helperText}>
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
