import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.css';

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

/* ── Internal toast instance ──────────────── */

interface ToastInstance extends ToastProps {
  id: string;
  createdAt: number;
}

/* ── Toast item component ─────────────────── */

function ToastItem({
  toast,
  onRemove,
}: {
  toast: ToastInstance;
  onRemove: (id: string) => void;
}) {
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(100);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const duration = toast.duration ?? 5000;

  const dismiss = useCallback(() => {
    setExiting(true);
    setTimeout(() => {
      onRemove(toast.id);
      toast.onClose?.();
    }, 200);
  }, [onRemove, toast]);

  useEffect(() => {
    if (duration <= 0) return;

    const start = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      if (remaining <= 0) {
        clearInterval(timerRef.current);
        dismiss();
      }
    }, 50);

    return () => clearInterval(timerRef.current);
  }, [duration, dismiss]);

  const variant = toast.variant ?? 'info';

  return (
    <div
      className={[
        styles.toast,
        styles[variant],
        exiting ? styles.toastExiting : '',
      ]
        .filter(Boolean)
        .join(' ')}
      role="alert"
      aria-live="polite"
    >
      <div className={styles.content}>
        <div className={styles.message}>{toast.message}</div>
        {toast.action && (
          <button
            type="button"
            className={styles.action}
            onClick={toast.action.onClick}
          >
            {toast.action.label}
          </button>
        )}
      </div>
      <button
        type="button"
        className={styles.close}
        onClick={dismiss}
        aria-label="Dismiss notification"
      >
        &#10005;
      </button>
      {duration > 0 && (
        <div
          className={styles.progress}
          style={{ width: `${progress}%`, transitionDuration: '50ms' }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

/* ── Context & Provider ───────────────────── */

interface ToastContextValue {
  /** Imperatively show a toast notification. */
  show: (props: ToastProps) => string;
  /** Dismiss a toast by id. */
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

/**
 * Hook providing imperative toast control. Must be used inside a {@link ToastProvider}.
 *
 * @example
 * ```tsx
 * const toast = useToast();
 * toast.show({ message: 'Saved!', variant: 'success' });
 * ```
 */
export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within a <ToastProvider>');
  }
  return ctx;
}

/**
 * Props for the {@link ToastProvider} component.
 */
export interface ToastProviderProps {
  /** Application content. */
  children: React.ReactNode;
}

let toastCounter = 0;

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
export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastInstance[]>([]);

  const show = useCallback((props: ToastProps): string => {
    const id = `toast-${++toastCounter}`;
    setToasts((prev) => [...prev, { ...props, id, createdAt: Date.now() }]);
    return id;
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const value = useMemo(() => ({ show, dismiss }), [show, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {typeof document !== 'undefined' &&
        createPortal(
          <div className={styles.container} aria-label="Notifications">
            {toasts.map((toast) => (
              <ToastItem key={toast.id} toast={toast} onRemove={dismiss} />
            ))}
          </div>,
          document.body,
        )}
    </ToastContext.Provider>
  );
}
