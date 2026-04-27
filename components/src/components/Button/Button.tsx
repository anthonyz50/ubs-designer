import React, { forwardRef } from 'react';
import styles from './Button.module.css';

/**
 * Button variant options following UBS brand guidelines.
 * - `primary`: UBS Red background with white text
 * - `secondary`: Black background with white text
 * - `outline`: Transparent with border
 * - `ghost`: No border or background
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

/** Button size options. */
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button. @default 'primary' */
  variant?: ButtonVariant;
  /** Size of the button. @default 'medium' */
  size?: ButtonSize;
  /** Whether the button is in a loading state. Shows spinner and disables interaction. */
  loading?: boolean;
  /** Whether the button should take up the full width of its container. */
  fullWidth?: boolean;
  /** Optional icon element rendered before the children. */
  icon?: React.ReactNode;
  /** Button content. */
  children?: React.ReactNode;
}

/**
 * UBS Design System Button component.
 *
 * Implements all UBS brand rules:
 * - Primary variant uses UBS Red (#E60000) with white text
 * - Secondary variant uses UBS Black with white text
 * - WCAG 2.2 AA compliant contrast ratios (4.5:1 minimum)
 * - Uses Frutiger font family (fallback Arial)
 * - No text shadows
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium" onClick={handleClick}>
 *   Submit
 * </Button>
 *
 * <Button variant="outline" loading>
 *   Processing...
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      loading = false,
      fullWidth = false,
      disabled = false,
      icon,
      children,
      className,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const classNames = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth ? styles.fullWidth : '',
      loading ? styles.loading : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={classNames}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...rest}
      >
        {loading && (
          <span className={styles.spinner} aria-hidden="true">
            <svg
              className={styles.spinnerIcon}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="50.265"
                strokeDashoffset="25.133"
              />
            </svg>
          </span>
        )}
        {icon && !loading && <span className={styles.icon}>{icon}</span>}
        {children && <span className={styles.label}>{children}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
