import { default as React } from 'react';

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
export declare const Snackbar: React.ForwardRefExoticComponent<SnackbarProps & React.RefAttributes<HTMLDivElement>>;
