import { default as React } from 'react';

/** Logo display variant. */
export type LogoVariant = 'full' | 'symbol' | 'wordmark';
/** Logo colour options per UBS guidelines. */
export type LogoColour = 'black' | 'white' | 'gray';
export interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
    /**
     * Size of the logo in pixels (width).
     * Can also accept an ISO format string like 'A4' for proportional sizing.
     * @default 120
     */
    size?: number | string;
    /** Logo variant: full (keys + wordmark), symbol (keys only), wordmark (text only). @default 'full' */
    variant?: LogoVariant;
    /** Colour scheme. @default 'black' */
    colour?: LogoColour;
    /**
     * Tab variant: adds a semi-transparent background tab for use over images.
     * @default false
     */
    tab?: boolean;
}
/**
 * UBS Design System Logo component.
 *
 * Renders the UBS logo as an SVG following brand guidelines:
 * - Three keys symbol + "UBS" wordmark (full variant)
 * - Symbol only or wordmark only variants
 * - Clear space: minimum 1/3 of the symbol height (k) on all sides
 * - Available in black, white, or gray
 * - Optional tab variant for use over photographs
 *
 * @example
 * ```tsx
 * <Logo variant="full" colour="black" size={120} />
 * <Logo variant="symbol" colour="white" size="A4" tab />
 * ```
 */
export declare const Logo: React.ForwardRefExoticComponent<LogoProps & React.RefAttributes<SVGSVGElement>>;
