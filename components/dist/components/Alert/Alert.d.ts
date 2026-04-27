import { default as React } from 'react';

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
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
