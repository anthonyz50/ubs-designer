import React, { forwardRef, useId, useEffect, useRef } from 'react';
import styles from './Checkbox.module.css';

/** Checkbox size options. */
export type CheckboxSize = 'sm' | 'md';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Label text displayed beside the checkbox. */
  label: string;
  /** Whether the checkbox is checked. */
  checked?: boolean;
  /** Change handler. */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Whether the checkbox is disabled. */
  disabled?: boolean;
  /** Whether the checkbox is in an indeterminate state. */
  indeterminate?: boolean;
  /** Error message displayed below the checkbox. */
  error?: string;
  /** Size of the checkbox. @default 'md' */
  size?: CheckboxSize;
}

/**
 * UBS Design System Checkbox component.
 *
 * A custom-styled checkbox with UBS Red checkmark, Black border,
 * indeterminate state, and 44px minimum touch target.
 *
 * @example
 * ```tsx
 * <Checkbox
 *   label="Accept terms and conditions"
 *   checked={accepted}
 *   onChange={(e) => setAccepted(e.target.checked)}
 * />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked = false,
      onChange,
      disabled = false,
      indeterminate = false,
      error,
      size = 'md',
      className,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const checkboxId = providedId ?? `ubs-checkbox-${autoId}`;

    // Internal ref to handle indeterminate (not exposed via HTML attribute)
    const internalRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const setRefs = (el: HTMLInputElement | null) => {
      internalRef.current = el;
      if (typeof ref === 'function') {
        ref(el);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
      }
    };

    const containerClassNames = [
      styles.container,
      styles[size],
      disabled ? styles.disabled : '',
      indeterminate ? styles.indeterminate : '',
      error ? styles.error : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const content = (
      <label htmlFor={checkboxId} className={containerClassNames}>
        <input
          ref={setRefs}
          id={checkboxId}
          type="checkbox"
          className={styles.nativeInput}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!error}
          {...rest}
        />
        <span className={styles.box} aria-hidden="true">
          <span className={styles.checkIcon}>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8L6.5 11.5L13 4.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={styles.indeterminateIcon}>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </span>
        <span className={styles.label}>{label}</span>
      </label>
    );

    if (error) {
      return (
        <div className={styles.errorWrapper}>
          {content}
          <p className={styles.errorText} role="alert">
            {error}
          </p>
        </div>
      );
    }

    return content;
  }
);

Checkbox.displayName = 'Checkbox';
