import React, { forwardRef, useState, useCallback } from 'react';
import styles from './MessageBox.module.css';

/** MessageBox variant types. */
export type MessageBoxVariant = 'info' | 'warning' | 'error' | 'success';

export interface MessageBoxAction {
  /** Button label. */
  label: string;
  /** Click handler. */
  onClick: () => void;
  /** Whether this is the primary action. @default false */
  primary?: boolean;
}

export interface MessageBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant/severity. @default 'info' */
  variant?: MessageBoxVariant;
  /** Prominent title text. */
  title?: string;
  /** Message body content. */
  children?: React.ReactNode;
  /** Optional action buttons. */
  actions?: MessageBoxAction[];
  /** Custom icon element. If omitted, a default icon per variant is used. */
  icon?: React.ReactNode;
  /** Whether the message box can be closed. @default false */
  closable?: boolean;
  /** Callback when the close button is clicked. */
  onClose?: () => void;
}

/**
 * Default variant icons (inline SVG, no external deps).
 */
const DefaultIcon: React.FC<{ variant: MessageBoxVariant }> = ({ variant }) => {
  const iconProps = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true as const,
    className: styles.icon,
  };

  switch (variant) {
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
    case 'success':
      return (
        <svg {...iconProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
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
 * MessageBox — Prominent inline message/notification box.
 *
 * More visually prominent than Alert; used for important messages
 * that require user attention within a page flow.
 *
 * @example
 * ```tsx
 * <MessageBox variant="warning" title="Account suspended">
 *   Your account has been temporarily suspended. Contact support for assistance.
 * </MessageBox>
 * ```
 *
 * @example
 * ```tsx
 * <MessageBox
 *   variant="error"
 *   title="Payment failed"
 *   closable
 *   onClose={() => dismiss()}
 *   actions={[
 *     { label: 'Retry', onClick: retry, primary: true },
 *     { label: 'Cancel', onClick: cancel },
 *   ]}
 * >
 *   We could not process your payment. Please try again.
 * </MessageBox>
 * ```
 */
export const MessageBox = forwardRef<HTMLDivElement, MessageBoxProps>(
  (
    {
      variant = 'info',
      title,
      children,
      actions,
      icon,
      closable = false,
      onClose,
      className,
      ...rest
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(true);

    const handleClose = useCallback(() => {
      setVisible(false);
      onClose?.();
    }, [onClose]);

    if (!visible) return null;

    const roleMap: Record<MessageBoxVariant, string> = {
      error: 'alert',
      warning: 'alert',
      success: 'status',
      info: 'status',
    };

    return (
      <div
        ref={ref}
        role={roleMap[variant]}
        aria-live={variant === 'error' || variant === 'warning' ? 'assertive' : 'polite'}
        className={[styles.messageBox, styles[variant], className].filter(Boolean).join(' ')}
        {...rest}
      >
        <span className={styles.iconWrapper}>
          {icon ?? <DefaultIcon variant={variant} />}
        </span>

        <div className={styles.content}>
          {title && <p className={styles.title}>{title}</p>}
          {children && <div className={styles.description}>{children}</div>}
          {actions && actions.length > 0 && (
            <div className={styles.actions}>
              {actions.map((action, i) => (
                <button
                  key={i}
                  type="button"
                  className={[styles.actionButton, action.primary ? styles.actionPrimary : styles.actionSecondary].join(' ')}
                  onClick={action.onClick}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {closable && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close message"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M12.207 4.793a1 1 0 0 0-1.414 0L8 7.586 5.207 4.793a1 1 0 1 0-1.414 1.414L6.586 9l-2.793 2.793a1 1 0 1 0 1.414 1.414L8 10.414l2.793 2.793a1 1 0 0 0 1.414-1.414L9.414 9l2.793-2.793a1 1 0 0 0 0-1.414z" />
            </svg>
          </button>
        )}
      </div>
    );
  },
);

MessageBox.displayName = 'MessageBox';
