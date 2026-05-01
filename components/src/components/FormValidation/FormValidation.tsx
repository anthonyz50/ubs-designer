import React, { forwardRef } from 'react';
import styles from './FormValidation.module.css';

/** Display variant for form validation messages. */
export type FormValidationVariant = 'summary' | 'inline';

export interface FormValidationError {
  /** Name of the field that has an error. */
  field: string;
  /** Human-readable error message. */
  message: string;
}

export interface FormValidationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of field-level errors. */
  errors: FormValidationError[];
  /** Display variant. @default 'summary' */
  variant?: FormValidationVariant;
  /** Optional title. @default 'Please correct the following errors' */
  title?: string;
  /** Callback when a field link is clicked (e.g. to focus the field). */
  onFieldClick?: (field: string) => void;
}

/**
 * FormValidation — Form-level validation message display.
 *
 * Shows a summary of form errors or inline field-level error highlighting.
 * Supports clickable field names to scroll/focus the offending input.
 *
 * @example
 * ```tsx
 * <FormValidation
 *   errors={[
 *     { field: 'email', message: 'Email is required' },
 *     { field: 'password', message: 'Password must be at least 8 characters' },
 *   ]}
 *   onFieldClick={(field) => document.getElementById(field)?.focus()}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <FormValidation
 *   variant="inline"
 *   errors={[{ field: 'amount', message: 'Must be a positive number' }]}
 * />
 * ```
 */
export const FormValidation = forwardRef<HTMLDivElement, FormValidationProps>(
  (
    {
      errors,
      variant = 'summary',
      title = 'Please correct the following errors',
      onFieldClick,
      className,
      ...rest
    },
    ref,
  ) => {
    if (!errors || errors.length === 0) return null;

    if (variant === 'inline') {
      return (
        <div
          ref={ref}
          className={[styles.inlineContainer, className].filter(Boolean).join(' ')}
          {...rest}
        >
          {errors.map((error, i) => (
            <p
              key={`${error.field}-${i}`}
              className={styles.inlineError}
              role="alert"
              aria-live="polite"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={styles.inlineIcon}
              >
                <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" />
              </svg>
              <span className={styles.inlineMessage}>{error.message}</span>
            </p>
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="assertive"
        className={[styles.summary, className].filter(Boolean).join(' ')}
        {...rest}
      >
        <div className={styles.summaryHeader}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className={styles.summaryIcon}
          >
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" />
          </svg>
          <p className={styles.summaryTitle}>{title}</p>
        </div>
        <ul className={styles.errorList}>
          {errors.map((error, i) => (
            <li key={`${error.field}-${i}`} className={styles.errorItem}>
              {onFieldClick ? (
                <button
                  type="button"
                  className={styles.fieldLink}
                  onClick={() => onFieldClick(error.field)}
                  aria-label={`Go to ${error.field}: ${error.message}`}
                >
                  <span className={styles.fieldName}>{error.field}:</span>{' '}
                  <span className={styles.errorMessage}>{error.message}</span>
                </button>
              ) : (
                <>
                  <span className={styles.fieldName}>{error.field}:</span>{' '}
                  <span className={styles.errorMessage}>{error.message}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  },
);

FormValidation.displayName = 'FormValidation';
