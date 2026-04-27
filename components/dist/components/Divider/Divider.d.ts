import { HTMLAttributes } from 'react';

/** Divider orientation. */
export type DividerOrientation = 'horizontal' | 'vertical';
export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
    /** Direction of the divider. Defaults to `'horizontal'`. */
    orientation?: DividerOrientation;
    /** Line colour. Defaults to Gray I (#CCCABC). */
    colour?: string;
    /** Line thickness in pixels. Defaults to `1`. */
    thickness?: number;
    /** Spacing (margin) on both sides in pixels. Defaults to `16`. */
    spacing?: number;
}
/**
 * Divider — horizontal or vertical separator.
 *
 * Uses UBS Gray I as the default colour. Renders as a semantic `<hr>` element
 * with appropriate ARIA attributes for vertical orientation.
 */
export declare const Divider: import('react').ForwardRefExoticComponent<DividerProps & import('react').RefAttributes<HTMLHRElement>>;
export default Divider;
