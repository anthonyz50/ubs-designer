import { ReactNode, HTMLAttributes } from 'react';

/** Pattern fill variant (component-level). */
export type PatternComponentVariant = 'solid' | 'outline';
/** Colour direction determines the foreground/background pair (component-level). */
export type PatternColourDirection = 'gray' | 'bordeaux' | 'bronze';
export interface PatternProps extends HTMLAttributes<HTMLDivElement> {
    /** Fill variant. `solid` fills the key shape, `outline` strokes it. Defaults to `'solid'`. */
    variant?: PatternComponentVariant;
    /** Colour direction. Determines the foreground/background pair. Defaults to `'gray'`. */
    colourDirection?: PatternColourDirection;
    /** Enable subtle drift animation. Defaults to `false`. */
    animated?: boolean;
    /**
     * Aspect ratio string. Clamped between min 1/3 and max 3.
     * Pass as a CSS aspect-ratio value, e.g. `'16 / 9'`, `'1 / 1'`.
     * Defaults to `'16 / 9'`.
     */
    ratio?: string;
    /** Content rendered above the pattern. */
    children?: ReactNode;
}
/**
 * Pattern — UBS key symbol pattern background.
 *
 * Renders a repeating SVG pattern of the UBS key symbol with enforced
 * colour pair combinations. Content can be placed above the pattern.
 */
export declare const Pattern: import('react').ForwardRefExoticComponent<PatternProps & import('react').RefAttributes<HTMLDivElement>>;
export default Pattern;
