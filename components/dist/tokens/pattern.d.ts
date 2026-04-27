/**
 * UBS Design System — Pattern Tokens
 *
 * Variants, ratio specs, colour combinations, material applications, and constraints.
 * Source: ubs.frontify.com
 *
 * @remarks
 * UBS patterns are inspired by the key symbol.
 * Patterns always measure against the short side of the format.
 * Never combine two colour directions in one application.
 */
/**
 * Available pattern variants.
 *
 * @remarks
 * Each variant can be used independently. Never combine multiple variations.
 */
export declare const PATTERN_VARIANTS: readonly ["solid", "outline", "solid animated", "outline animated"];
/** Type representing a valid pattern variant. */
export type PatternVariant = typeof PATTERN_VARIANTS[number];
/**
 * Pattern ratio constraints.
 *
 * @remarks
 * Always measure against the short side of the format.
 * h = height of the base element.
 */
export declare const PATTERN_RATIO: {
    /** Always measure against the short side of the format. */
    readonly description: "Always measure against the short side of the format.";
    /** Maximum pattern element size: 3h (h = height of base element). */
    readonly maximum: "3h";
    /** Minimum pattern element size: ⅓h. */
    readonly minimum: "⅓h";
};
/** A colour pair for pattern application [pattern colour, background colour]. */
export type PatternColourPair = readonly [string, string];
/**
 * Gray colour direction pattern pairs.
 *
 * @remarks
 * Standard colour direction. Lighter pattern on next-tone background.
 * Pairs progress from light to dark.
 */
export declare const PATTERN_COLOURS_GRAY: readonly PatternColourPair[];
/**
 * Bordeaux colour direction pattern pairs.
 */
export declare const PATTERN_COLOURS_BORDEAUX: readonly PatternColourPair[];
/**
 * Bronze colour direction pattern pairs.
 */
export declare const PATTERN_COLOURS_BRONZE: readonly PatternColourPair[];
/**
 * All pattern colour combinations keyed by colour direction.
 */
export declare const PATTERN_COLOURS: {
    readonly gray: readonly PatternColourPair[];
    readonly bordeaux: readonly PatternColourPair[];
    readonly bronze: readonly PatternColourPair[];
};
/** A colour direction specification. */
export interface ColourDirection {
    /** Display name of the colour direction. */
    readonly name: string;
    /** Available colour names in this direction. */
    readonly colours: readonly string[];
}
/**
 * Pattern colour directions.
 *
 * @remarks
 * Basis (Gray) is the default. Specific I (Bordeaux) and Specific II (Bronze)
 * add accent colours. Never combine two colour directions.
 */
export declare const COLOUR_DIRECTIONS: Record<string, ColourDirection>;
/** Type representing a valid colour direction key. */
export type ColourDirectionName = keyof typeof COLOUR_DIRECTIONS;
/**
 * Pattern application techniques by material.
 *
 * @remarks
 * When applying the UBS pattern to physical materials, use the specified technique.
 */
export declare const MATERIAL_APPLICATIONS: Record<string, string>;
/**
 * Pattern usage rules. All restrictions are active (true).
 *
 * @remarks
 * Patterns must maintain integrity: no distortion, rotation, mirroring, or
 * combination with other visual elements.
 */
export declare const PATTERN_RULES: {
    /** Never distort the pattern. */
    readonly noDistortion: true;
    /** No Logo Tab on white backgrounds. */
    readonly noLogoTabOnWhiteBackground: true;
    /** Key symbol must not appear on top of patterns. */
    readonly noKeySymbolOnPattern: true;
    /** Pattern ratio must match format specifications. */
    readonly noWrongFormatRatio: true;
    /** No front page layout or Impulse on patterns. */
    readonly noFrontPageAndImpulseOnPattern: true;
    /** Do not use multiple pattern variations together. */
    readonly noMultipleVariations: true;
    /** Never mirror the pattern. */
    readonly noMirroring: true;
    /** Patterns must not be used as backgrounds for portrait photography. */
    readonly noBackgroundForPortraitPhotography: true;
    /** Only use UBS palette colours. */
    readonly noOtherColours: true;
    /** Never combine two colour directions. */
    readonly noCombinationOfTwoColourDirections: true;
    /** Never rotate the pattern. */
    readonly noRotation: true;
    /** No icons, illustrations, or charts placed on patterns. */
    readonly noIconIllustrationChartOnPattern: true;
    /** Pattern must not bleed on one, two, or three sides only. */
    readonly noBleedingOnOneTwoThreeSides: true;
    /** Colour contrast must meet accessibility requirements. */
    readonly noWrongColourContrast: true;
};
/** Type representing a pattern rule key. */
export type PatternRule = keyof typeof PATTERN_RULES;
