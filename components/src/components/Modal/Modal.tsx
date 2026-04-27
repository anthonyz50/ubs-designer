import React, {
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  useId,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

/** Modal size variant. */
export type ModalSize = 'sm' | 'md' | 'lg' | 'fullscreen';

/**
 * Props for the {@link Modal} component.
 */
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the modal is visible. */
  isOpen: boolean;
  /** Callback fired when the modal should close. */
  onClose: () => void;
  /** Title displayed in the modal header. */
  title?: string;
  /** Content rendered in the modal body. */
  children?: React.ReactNode;
  /** Footer content (typically action buttons). */
  footer?: React.ReactNode;
  /** Size variant controlling the modal width. @default 'md' */
  size?: ModalSize;
  /** Whether clicking the overlay backdrop closes the modal. @default true */
  closeOnOverlay?: boolean;
  /** Whether pressing Escape closes the modal. @default true */
  closeOnEscape?: boolean;
}

/**
 * Modal dialog following UBS brand guidelines.
 *
 * Features focus trapping, scroll locking, animated transitions,
 * and portal rendering.
 *
 * @example
 * ```tsx
 * <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm">
 *   <p>Are you sure?</p>
 * </Modal>
 * ```
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  {
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'md',
    closeOnOverlay = true,
    closeOnEscape = true,
    className,
    ...rest
  },
  ref,
) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  /* Open animation */
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setVisible(true);
      /* Trigger CSS transition by deferring the "open" class */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });
    } else {
      setAnimating(false);
      const timer = setTimeout(() => {
        setVisible(false);
        previousFocusRef.current?.focus();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  /* Scroll lock */
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  /* Focus first focusable on open */
  useEffect(() => {
    if (!visible || !animating) return;
    const el = dialogRef.current;
    if (!el) return;

    const focusable = el.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length > 0) {
      focusable[0].focus();
    }
  }, [visible, animating]);

  /* Escape key */
  useEffect(() => {
    if (!visible || !closeOnEscape) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [visible, closeOnEscape, onClose]);

  /* Focus trap */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const el = dialogRef.current;
      if (!el) return;

      const focusable = el.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [],
  );

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (closeOnOverlay && e.target === e.currentTarget) {
        onClose();
      }
    },
    [closeOnOverlay, onClose],
  );

  if (!visible) return null;

  const dialog = (
    <div
      className={[styles.backdrop, animating ? styles.backdropOpen : '']
        .filter(Boolean)
        .join(' ')}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      aria-hidden={!isOpen}
    >
      <div
        ref={(node) => {
          (dialogRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={[styles.dialog, styles[size], className ?? '']
          .filter(Boolean)
          .join(' ')}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        {...rest}
      >
        {title && (
          <div className={styles.header}>
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close dialog"
            >
              &#10005;
            </button>
          </div>
        )}
        <div className={styles.body}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? createPortal(dialog, document.body)
    : null;
});
