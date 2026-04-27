import React, { forwardRef, useState, useCallback } from 'react';
import styles from './Alert.module.css';

/** Alert variant based on RAG status colours. */
export type AlertVariant = 'error' | 'warning' | 'success' | 'info';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alert severity/type. @default 'info' */
  variant?: AlertVariant;
  /** Optional title displayed prominently. */
  title?: string;
  /** Whether the alert can be dismissed. @default false */
  dismissible?: boolean;
  /** Callback fired when the alert is dismissed. */
  onDismiss?: () => void;
  /** Alert message content. */
  children?: React.ReactNode;
}

/**
 * Alert icon SVGs per variant.
 */
const AlertIcon: React.FC<{ variant: AlertVariant }> = ({ variant }) => {
  const iconProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 20 20',
    fill: 'currentColor',
    'aria-hidden': true as const,
    className: styles.icon,
  };

  switch (variant) {
    case 'error':
      return (
        <svg {...iconProps}>
          <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z" />
        </svg>
      );
    case 'warning':
      return (
        <svg {...iconProps}>
          <path d="M1 17h18L10 1 1 17zm10-2H9v-2h2v2zm0-4H9V7h2v4z" />
        </svg>
      );
    case 'success':
      return (
        <svg {...iconProps}>
          <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM8 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z" />
        </svg>
      );
    case 'info':
    default:
      return (
        <svg {...iconProps}>
          <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z" />
        </svg>
      );
  }
};

/**
 * UBS Design System Alert component.
 *
 * RAG (Red/Amber/Green) status indicator following UBS brand guidelines:
 * - Error: RAG Red (#BD000C) — critical problems
 * - Warning: RAG Amber (#E4A911) — needs attention
 * - Success: RAG Green (#6F7A1A) — on track
 * - Info: Gray IV (#7A7870) — neutral information
 *
 * Meets WCAG 2.2 AA contrast requirements.
 * Does not rely on colour alone (uses icons + text).
 *
 * @example
 * ```tsx
 * <Alert variant="error" title="Transaction Failed">
 *   Please check your account details and try again.
 * </Alert>
 *
 * <Alert variant="success" dismissible onDismiss={() => setShow(false)}>
 *   Your transfer has been completed successfully.
 * </Alert>
 * ```
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      title,
      dismissible = false,
      onDismiss,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const [dismissed, setDismissed] = useState(false);

    const handleDismiss = useCallback(() => {
      setDismissed(true);
      onDismiss?.();
    }, [onDismiss]);

    if (dismissed) return null;

    const classNames = [
      styles.alert,
      styles[variant],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        role="alert"
        aria-live={variant === 'error' ? 'assertive' : 'polite'}
        {...rest}
      >
        <AlertIcon variant={variant} />
        <div className={styles.content}>
          {title && <div className={styles.title}>{title}</div>}
          {children && <div className={styles.message}>{children}</div>}
        </div>
        {dismissible && (
          <button
            type="button"
            className={styles.dismiss}
            onClick={handleDismiss}
            aria-label="Dismiss alert"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.7 4.7l-1.4-1.4L8 6.6 4.7 3.3 3.3 4.7 6.6 8l-3.3 3.3 1.4 1.4L8 9.4l3.3 3.3 1.4-1.4L9.4 8l3.3-3.3z" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
