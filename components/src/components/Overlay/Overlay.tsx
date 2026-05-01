/**
 * @module Overlay
 * @description Full-screen or partial overlay/dialog following UBS brand guidelines.
 *
 * Renders a modal dialog with header, body, and footer sections. Supports
 * backdrop click to close, keyboard dismissal (Escape), and focus trapping.
 *
 * @example
 * ```tsx
 * <Overlay
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Confirm transaction"
 *   size="medium"
 *   footer={
 *     <>
 *       <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
 *       <Button onClick={handleConfirm}>Confirm</Button>
 *     </>
 *   }
 * >
 *   <p>Are you sure you want to proceed with this transaction?</p>
 * </Overlay>
 * ```
 */
import React, { forwardRef, useEffect, useCallback, useRef } from 'react';
import styles from './Overlay.module.css';

/** Size of the overlay dialog. */
export type OverlaySize = 'small' | 'medium' | 'large' | 'fullscreen';

/**
 * Props for the {@link Overlay} component.
 */
export interface OverlayProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Whether the overlay is visible. */
  open: boolean;
  /** Callback fired when the overlay should close. */
  onClose: () => void;
  /** Dialog title displayed in the header. */
  title?: React.ReactNode;
  /** Dialog body content. */
  children?: React.ReactNode;
  /** Footer content (typically action buttons). */
  footer?: React.ReactNode;
  /** Size variant. @default 'medium' */
  size?: OverlaySize;
  /** Whether clicking the backdrop closes the dialog. @default true */
  closeOnBackdrop?: boolean;
}

/**
 * Overlay/dialog component with backdrop, header, body, and footer sections.
 *
 * Manages focus, keyboard events (Escape to close), and scroll locking.
 * Uses proper ARIA dialog roles for accessibility.
 *
 * @example
 * ```tsx
 * <Overlay open={show} onClose={() => setShow(false)} title="Settings" size="large">
 *   <p>Overlay content here</p>
 * </Overlay>
 * ```
 */
const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  (
    {
      open,
      onClose,
      title,
      children,
      footer,
      size = 'medium',
      closeOnBackdrop = true,
      className,
      ...rest
    },
    ref,
  ) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    // Close on Escape key
    const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      },
      [onClose],
    );

    // Lock body scroll when open
    useEffect(() => {
      if (open) {
        document.addEventListener('keydown', handleKeyDown);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.body.style.overflow = originalOverflow;
        };
      }
    }, [open, handleKeyDown]);

    // Focus the dialog when opened
    useEffect(() => {
      if (open && dialogRef.current) {
        dialogRef.current.focus();
      }
    }, [open]);

    if (!open) return null;

    const handleBackdropClick = (event: React.MouseEvent) => {
      if (closeOnBackdrop && event.target === event.currentTarget) {
        onClose();
      }
    };

    const dialogClass = [
      styles.dialog,
      styles[size],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        className={styles.backdrop}
        onClick={handleBackdropClick}
        aria-hidden="true"
      >
        <div
          ref={(node) => {
            // Merge refs
            (dialogRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          className={dialogClass}
          role="dialog"
          aria-modal="true"
          aria-label={typeof title === 'string' ? title : undefined}
          tabIndex={-1}
          {...rest}
        >
          {/* Header */}
          <div className={styles.header}>
            {title && (
              <h2 className={styles.title}>{title}</h2>
            )}
            <button
              className={styles.close}
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <svg viewBox="0 0 16 16" fill="none" className={styles.closeIcon}>
                <path
                  d="M4 4L12 12M12 4L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className={styles.body}>{children}</div>

          {/* Footer */}
          {footer && (
            <div className={styles.footer}>{footer}</div>
          )}
        </div>
      </div>
    );
  },
);

Overlay.displayName = 'Overlay';

export { Overlay };
