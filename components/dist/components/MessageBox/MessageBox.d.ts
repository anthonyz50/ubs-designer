import { default as React } from 'react';

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
export declare const MessageBox: React.ForwardRefExoticComponent<MessageBoxProps & React.RefAttributes<HTMLDivElement>>;
