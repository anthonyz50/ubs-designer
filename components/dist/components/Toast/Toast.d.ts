import { default as React } from 'react';

/** Toast visual variant based on RAG colours. */
export type ToastVariant = 'success' | 'error' | 'warning' | 'info';
/** Optional action button within a toast. */
export interface ToastAction {
    /** Button label. */
    label: string;
    /** Callback fired when the action button is clicked. */
    onClick: () => void;
}
/**
 * Props for a single toast notification.
 */
export interface ToastProps {
    /** Message content displayed in the toast. */
    message: string;
    /** Visual variant controlling the colour scheme. @default 'info' */
    variant?: ToastVariant;
    /** Auto-dismiss duration in milliseconds. Set to 0 to disable auto-dismiss. @default 5000 */
    duration?: number;
    /** Callback fired when the toast is dismissed. */
    onClose?: () => void;
    /** Optional action button rendered inside the toast. */
    action?: ToastAction;
}
interface ToastContextValue {
    /** Imperatively show a toast notification. */
    show: (props: ToastProps) => string;
    /** Dismiss a toast by id. */
    dismiss: (id: string) => void;
}
/**
 * Hook providing imperative toast control. Must be used inside a {@link ToastProvider}.
 *
 * @example
 * ```tsx
 * const toast = useToast();
 * toast.show({ message: 'Saved!', variant: 'success' });
 * ```
 */
export declare function useToast(): ToastContextValue;
/**
 * Props for the {@link ToastProvider} component.
 */
export interface ToastProviderProps {
    /** Application content. */
    children: React.ReactNode;
}
/**
 * Context provider for the toast notification system.
 *
 * Wrap your application with `<ToastProvider>` to enable imperative toast
 * notifications via the `useToast()` hook.
 *
 * @example
 * ```tsx
 * <ToastProvider>
 *   <App />
 * </ToastProvider>
 * ```
 */
export declare function ToastProvider({ children }: ToastProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
