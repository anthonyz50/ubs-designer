import { default as React } from 'react';

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
declare const Overlay: React.ForwardRefExoticComponent<OverlayProps & React.RefAttributes<HTMLDivElement>>;
export { Overlay };
