import { ReactNode, HTMLAttributes } from 'react';

/** Frame opacity variant. */
export type MovingFrameVariant = 'transparent' | 'opaque';
export interface MovingFrameProps extends HTMLAttributes<HTMLDivElement> {
    /** Overlay variant. `transparent` = 80% white, `opaque` = 100% white. Defaults to `'transparent'`. */
    variant?: MovingFrameVariant;
    /**
     * Maximum width of the frame as a CSS value.
     * For portrait/square images: max 50% width.
     * For landscape images: max 50% height.
     * Defaults to `'50%'`.
     */
    maxWidth?: string;
    /**
     * Background image source URL.
     * If not provided, expects `backgroundElement` or styles the container without a background.
     */
    backgroundSrc?: string;
    /** Alt text for the background image. Required when `backgroundSrc` is provided. */
    backgroundAlt?: string;
    /** Custom background element (e.g. <video>, <picture>). Takes precedence over `backgroundSrc`. */
    backgroundElement?: ReactNode;
    /** Aspect ratio of the container. Defaults to `'16 / 9'`. */
    aspectRatio?: string;
    /**
     * Enable animated entrance. When true, the frame slides in from the right
     * with spring easing (600ms) and content fades in after a 200ms delay.
     * Defaults to `false`.
     */
    animated?: boolean;
    /** Frame overlay content. */
    children?: ReactNode;
}
/**
 * MovingFrame — UBS distinctive content overlay on images.
 *
 * Enforces right-alignment, margin from edges, and correct opacity per variant.
 * Never allows centred or left-aligned placement.
 * When animated, uses CSS animations for entrance effect with spring easing.
 */
export declare const MovingFrame: import('react').ForwardRefExoticComponent<MovingFrameProps & import('react').RefAttributes<HTMLDivElement>>;
export default MovingFrame;
