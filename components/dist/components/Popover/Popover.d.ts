import { default as React } from 'react';

/** Popover position relative to the trigger element. */
export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';
/**
 * Props for the {@link Popover} component.
 */
export interface PopoverProps {
    /** Content rendered inside the popover panel. */
    content: React.ReactNode;
    /** Trigger element that toggles the popover. */
    trigger: React.ReactNode;
    /** Position of the popover relative to the trigger. @default 'bottom' */
    position?: PopoverPosition;
    /** Controlled open state. When provided, the component becomes controlled. */
    isOpen?: boolean;
    /** Callback fired when the open state should change. */
    onOpenChange?: (open: boolean) => void;
}
/**
 * Popover component following UBS brand guidelines.
 *
 * Opens on click (not hover), closes on outside click or Escape.
 * Uses a white background with Gray II border and a directional arrow.
 *
 * @example
 * ```tsx
 * <Popover
 *   trigger={<button>Open</button>}
 *   content={<p>Popover content here</p>}
 *   position="bottom"
 * />
 * ```
 */
export declare function Popover({ content, trigger, position, isOpen: controlledOpen, onOpenChange, }: PopoverProps): import("react/jsx-runtime").JSX.Element;
