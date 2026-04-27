import { SVGAttributes } from 'react';

export interface CTAArrowProps extends SVGAttributes<SVGSVGElement> {
    /** Icon size in pixels. Defaults to 16. */
    size?: number;
    /**
     * Stroke width of the arrow lines.
     * Should match the visual weight of the accompanying text.
     * Defaults to 2.
     */
    strokeWidth?: number;
    /** Arrow colour. Defaults to 'currentColor'. */
    colour?: string;
}
/**
 * CTAArrow — UBS 90-degree arrow icon for CTA components.
 *
 * Renders a right-angle arrow (→ with 90° corner) using SVG lines.
 * The arrow is aligned to the x-height of text when used inline.
 */
export declare const CTAArrow: import('react').ForwardRefExoticComponent<CTAArrowProps & import('react').RefAttributes<SVGSVGElement>>;
export default CTAArrow;
