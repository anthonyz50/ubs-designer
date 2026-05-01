import React, { forwardRef, useEffect, useState, useCallback, useRef } from 'react';
import styles from './Snackbar.module.css';

/** Snackbar variant types. */
export type SnackbarVariant = 'info' | 'success' | 'error' | 'warning';

/** Snackbar screen position. */
export type SnackbarPosition = 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface SnackbarAction {
  /** Button label. */
  label: string;
  /** Click handler. */
  onClick: () => void;
}

export interface SnackbarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'action'> {
  /** Notification message text. */
  message: string;
  /** Visual variant. @default 'info' */
  variant?: SnackbarVariant;
  /** Auto-dismiss duration in milliseconds. Set to 0 to disable. @default 5000 */
  duration?: number;
  /** Optional action button. */
  action?: SnackbarAction;
  /** Callback when the snackbar closes (auto-dismiss or manual). */
  onClose?: () => void;
  /** Screen position. @default 'bottom-left' */
  position?: SnackbarPosition;
  /** Whether the snackbar is open/visible. @default true */
  open?: boolean;
}

/**
 * Snackbar — Temporary notification that auto-dismisses.
 *
 * Appears at the bottom of the screen to provide brief feedback
 * about an operation. Supports an optional action button.
 *
 * @example
 * ```tsx
 * <Snackbar
 *   message="Document saved successfully"
 *   variant="success"
 *   duration={4000}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Snackbar
 *   message="Connection lost"
 *   variant="error"
 *   duration={0}
 *   action={{ label: 'Retry', onClick: reconnect }}
 *   position="bottom-center"
 * />
 * ```
 */
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  (
    {
      message,
      variant = 'info',
      duration = 5000,
      action,
      onClose,
      position = 'bottom-left',
      open = true,
      className,
      ...rest
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(open);
    const [exiting, setExiting] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleClose = useCallback(() => {
      setExiting(true);
      setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, 200);
    }, [onClose]);

    useEffect(() => {
      setVisible(open);
      setExiting(false);
    }, [open]);

    useEffect(() => {
      if (visible && duration > 0) {
        timerRef.current = setTimeout(handleClose, duration);
        return () => {
          if (timerRef.current) clearTimeout(timerRef.current);
        };
      }
    }, [visible, duration, handleClose]);

    if (!visible) return null;

    const positionClass =
      position === 'bottom-center'
        ? styles.bottomCenter
        : position === 'bottom-right'
          ? styles.bottomRight
          : styles.bottomLeft;

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={[
          styles.snackbar,
          styles[variant],
          positionClass,
          exiting ? styles.exit : styles.enter,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        <span className={styles.message}>{message}</span>

        {action && (
          <button
            type="button"
            className={styles.actionButton}
            onClick={(e) => {
              action.onClick();
              handleClose();
            }}
          >
            {action.label}
          </button>
        )}

        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Dismiss notification"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M12.207 4.793a1 1 0 0 0-1.414 0L8 7.586 5.207 4.793a1 1 0 1 0-1.414 1.414L6.586 9l-2.793 2.793a1 1 0 1 0 1.414 1.414L8 10.414l2.793 2.793a1 1 0 0 0 1.414-1.414L9.414 9l2.793-2.793a1 1 0 0 0 0-1.414z" />
          </svg>
        </button>
      </div>
    );
  },
);

Snackbar.displayName = 'Snackbar';
