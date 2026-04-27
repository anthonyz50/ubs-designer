import { default as React } from 'react';

/** Tooltip position relative to the trigger element. */
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
/**
 * Props for the {@link Tooltip} component.
 */
export interface TooltipProps {
    /** Content displayed inside the tooltip. */
    content: React.ReactNode;
    /** Position of the tooltip relative to the trigger. @default 'top' */
    position?: TooltipPosition;
    /** Delay in milliseconds before the tooltip appears. @default 300 */
    delay?: number;
    /** Trigger element the tooltip is attached to. */
    children: React.ReactElement;
}
/**
 * Tooltip component following UBS brand guidelines.
 *
 * Shows on hover or focus with a configurable delay.
 * Uses a dark background with white text and an arrow pointing at the trigger.
 *
 * @example
 * ```tsx
 * <Tooltip content="More information" position="top">
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */
export declare function Tooltip({ content, position, delay, children, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
