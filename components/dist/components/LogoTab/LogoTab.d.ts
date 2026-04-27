import { HTMLAttributes, ReactNode } from 'react';

/** Logo tab position. */
export type LogoTabPosition = 'top-left' | 'bottom-right';
/** Logo tab variant. */
export type LogoTabVariant = 'standard' | 'partnership';
export interface LogoTabProps extends HTMLAttributes<HTMLDivElement> {
    /** Corner position. Defaults based on animation state: `'top-left'` when animated, `'bottom-right'` when static. */
    position?: LogoTabPosition;
    /** Enable slide-in animation on mount. Defaults to `false`. */
    animated?: boolean;
    /** Watermark mode: semi-transparent, stays visible. Defaults to `false`. */
    watermark?: boolean;
    /** Variant. Defaults to `'standard'`. */
    variant?: LogoTabVariant;
    /** Partner logo element for partnership variant. */
    partnerLogo?: ReactNode;
    /** Custom UBS logo element. If not provided, renders the default UBS keys SVG. */
    customLogo?: ReactNode;
}
/**
 * LogoTab — Animated UBS logo overlay for video/motion content.
 */
export declare const LogoTab: import('react').ForwardRefExoticComponent<LogoTabProps & import('react').RefAttributes<HTMLDivElement>>;
export default LogoTab;
