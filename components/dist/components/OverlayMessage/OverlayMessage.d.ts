import { default as React } from 'react';

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
export declare const OverlayMessage: React.ForwardRefExoticComponent<OverlayMessageProps & React.RefAttributes<HTMLDivElement>>;
