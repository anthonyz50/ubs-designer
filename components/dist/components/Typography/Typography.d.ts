import { default as React } from 'react';

/**
 * UBS Typography hierarchy variants.
 * Maps to the 16-level UBS type system defined in the brand guidelines.
 */
export type TypographyVariant = 'keyline' | 'infoline' | 'subheadline1' | 'subheadline2' | 'subheadline3' | 'subheadline4' | 'leadText1' | 'leadText2' | 'quotes' | 'subtitles' | 'copyText' | 'pageNumbers' | 'senderInfo' | 'smallCopyText' | 'environmentalInfo' | 'captions' | 'footnote';
/** Allowed font weights per UBS guidelines: light, roman, bold. */
export type TypographyWeight = 300 | 400 | 700 | 'light' | 'roman' | 'bold';
/** Polymorphic element type for Typography. */
export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label' | 'figcaption' | 'blockquote' | 'cite' | 'small' | 'strong' | 'em';
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    /** Typography variant from the UBS type hierarchy. @default 'copyText' */
    variant?: TypographyVariant;
    /** Polymorphic element to render as. Defaults based on variant. */
    as?: TypographyElement;
    /** Text colour. Must be a valid CSS colour value. UBS Red must NOT be used for numbers. */
    colour?: string;
    /** Font weight: 300 (light), 400 (roman), 700 (bold). Overrides the variant default. */
    weight?: TypographyWeight;
    /** Content. */
    children?: React.ReactNode;
}
/**
 * UBS Design System Typography component.
 *
 * Implements the complete UBS 16-level type hierarchy with brand enforcement:
 * - Font: Frutiger (fallback Arial)
 * - Weights: light (300), roman (400), bold (700)
 * - Red is never applied to numbers (dev warning)
 * - No text shadows, no justified or right-aligned text
 * - WCAG 2.2 AA contrast compliant
 *
 * @example
 * ```tsx
 * <Typography variant="keyline">Welcome to UBS</Typography>
 * <Typography variant="copyText" weight="bold">Important notice</Typography>
 * <Typography variant="quotes" as="p" colour="#404040">
 *   "Excellence in everything we do."
 * </Typography>
 * ```
 */
export declare const Typography: React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<HTMLElement>>;
