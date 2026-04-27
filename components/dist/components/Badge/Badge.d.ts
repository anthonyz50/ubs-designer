import { ReactNode, HTMLAttributes } from 'react';

/** Visual variant of the badge. */
export type BadgeVariant = 'default' | 'red' | 'success' | 'warning';
/** Badge size. */
export type BadgeSize = 'sm' | 'md';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** Colour variant. Defaults to `'default'` (gray). */
    variant?: BadgeVariant;
    /** Size of the badge. Defaults to `'md'`. */
    size?: BadgeSize;
    /** When true renders a dot-only indicator with no text. */
    dot?: boolean;
    /** Badge label content. Ignored when `dot` is true. */
    children?: ReactNode;
}
/**
 * Badge — small status/label indicator.
 *
 * Adheres to UBS brand colour tokens and WCAG 2.2 AA contrast requirements.
 */
export declare const Badge: import('react').ForwardRefExoticComponent<BadgeProps & import('react').RefAttributes<HTMLSpanElement>>;
export default Badge;
