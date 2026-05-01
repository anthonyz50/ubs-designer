import React, { forwardRef, useEffect, useCallback } from 'react';
import styles from './OverlayMessage.module.css';

/** OverlayMessage variant types. */
export type OverlayMessageVariant = 'success' | 'error' | 'info' | 'warning';

export interface OverlayMessageAction {
  /** Button label. */
  label: string;
  /** Click handler. */
  onClick: () => void;
  /** Whether this is the primary action. @default false */
  primary?: boolean;
}

export interface OverlayMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant/severity. @default 'info' */
  variant?: OverlayMessageVariant;
  /** Prominent title text. */
  title?: string;
  /** Message body text. */
  message?: string;
  /** Custom icon element. If omitted, a default variant icon is shown. */
  icon?: React.ReactNode;
  /** Optional action buttons. */
  actions?: OverlayMessageAction[];
  /** Whether the overlay is visible. @default false */
  open?: boolean;
  /** Callback when the overlay requests to close (backdrop click or Escape). */
  onClose?: () => void;
}

/**
 * Default variant icons.
 */
const DefaultIcon: React.FC<{ variant: OverlayMessageVariant }> = ({ variant }) => {
  const iconProps = {
    width: 48,
    height: 48,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true as const,
    className: styles.icon,
  };

  switch (variant) {
    case 'success':
      return (
        <svg {...iconProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      );
    case 'error':
      return (
        <svg {...iconProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      );
    case 'warning':
      return (
        <svg {...iconProps}>
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        </svg>
      );
    case 'info':
    default:
      return (
        <svg {...iconProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z" />
        </svg>
      );
  }
};

/**
 * OverlayMessage — Full-screen or centred overlay message.
 *
 * Used for important notifications, confirmations, or error states
 * that require the user's full attention before proceeding.
 *
 * @example
 * ```tsx
 * <OverlayMessage
 *   open={showSuccess}
 *   variant="success"
 *   title="Transfer complete"
 *   message="Your funds have been transferred successfully."
 *   actions={[{ label: 'Done', onClick: () => setShowSuccess(false), primary: true }]}
 *   onClose={() => setShowSuccess(false)}
 * />
 * ```
 */
export const OverlayMessage = forwardRef<HTMLDivElement, OverlayMessageProps>(
  (
    {
      variant = 'info',
      title,
      message,
      icon,
      actions,
      open = false,
      onClose,
      className,
      ...rest
    },
    ref,
  ) => {
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose?.();
        }
      },
      [onClose],
    );

    useEffect(() => {
      if (open) {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
      }
    }, [open, handleKeyDown]);

    if (!open) return null;

    return (
      <div
        className={styles.backdrop}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose?.();
        }}
        aria-hidden="true"
      >
        <div
          ref={ref}
          role="alertdialog"
          aria-modal="true"
          aria-labelledby={title ? 'ubs-overlay-title' : undefined}
          aria-describedby={message ? 'ubs-overlay-message' : undefined}
          className={[styles.overlay, styles[variant], className].filter(Boolean).join(' ')}
          {...rest}
        >
          <span className={styles.iconWrapper}>
            {icon ?? <DefaultIcon variant={variant} />}
          </span>

          {title && (
            <h2 id="ubs-overlay-title" className={styles.title}>
              {title}
            </h2>
          )}

          {message && (
            <p id="ubs-overlay-message" className={styles.message}>
              {message}
            </p>
          )}

          {actions && actions.length > 0 && (
            <div className={styles.actions}>
              {actions.map((action, i) => (
                <button
                  key={i}
                  type="button"
                  className={[
                    styles.actionButton,
                    action.primary ? styles.actionPrimary : styles.actionSecondary,
                  ].join(' ')}
                  onClick={action.onClick}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },
);

OverlayMessage.displayName = 'OverlayMessage';
