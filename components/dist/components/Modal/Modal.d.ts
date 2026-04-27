import { default as React } from 'react';

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
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
