/**
 * UBS Design System — Typography Tokens
 *
 * All typography values from the UBS brand guidelines as typed constants.
 * Source: ubs.frontify.com
 *
 * @remarks
 * Frutiger is the UBS corporate typeface, licensed through Monotype.
 * Arial is the mandatory fallback when Frutiger is unavailable.
 * Red highlighting in messages is no longer permitted for accessibility.
 */
/** UBS corporate typeface. Licensed through Monotype. */
export declare const FONT_FAMILY_PRIMARY: "Frutiger";
/** Replaces Frutiger when not technically possible. */
export declare const FONT_FAMILY_FALLBACK: "Arial";
/** CSS font-family stack for UBS typography. */
export declare const FONT_STACK: "\"Frutiger\", Arial, sans-serif";
/**
 * UBS font weight definitions.
 * Only these five weights are permitted in UBS communications.
 */
export declare const FONT_WEIGHTS: {
    /** General use. Default weight for body text. */
    readonly light: "Frutiger 45 Light";
    /** Call-outs within body copy. */
    readonly lightItalic: "Frutiger 45 Light Italic";
    /** Specific highlights only. */
    readonly lightBold: "Frutiger 45 Light Bold";
    /** Extra-small text sizes for improved legibility. */
    readonly roman: "Frutiger 55 Roman";
    /** Additional weight for diagrams only. */
    readonly lightCondensed: "Frutiger 47 Light CN";
};
/** Type representing a valid UBS font weight key. */
export type UBSFontWeight = keyof typeof FONT_WEIGHTS;
/** A single level in the UBS type hierarchy. */
export interface TypographyLevel {
    /** Font size in points. Undefined for keyline/infoline (free selectable). */
    readonly fontSize?: string;
    /** Line spacing in points. Undefined for keyline/infoline. */
    readonly lineSpacing?: string;
    /** Line spacing multiplier (keyline/infoline only). */
    readonly lineSpacingMultiplier?: number;
    /** Font weight key from FONT_WEIGHTS. */
    readonly fontWeight: string;
    /** Permitted colour(s). */
    readonly colour: string;
    /** Usage description. */
    readonly description: string;
}
/**
 * Complete UBS type hierarchy (16 levels).
 *
 * @remarks
 * Keyline and infoline sizes are free-selectable; keyline must be at least
 * 2x the infoline size. All other levels have fixed point sizes.
 */
export declare const TYPOGRAPHY_HIERARCHY: Record<string, TypographyLevel>;
/** All valid hierarchy level names. */
export type TypographyLevelName = keyof typeof TYPOGRAPHY_HIERARCHY;
/**
 * Web-optimised typography sizes.
 * Use these for digital/screen implementations instead of print point sizes.
 */
export declare const WEB_TYPOGRAPHY: {
    /** Minimum accessible font size (10.5pt). */
    readonly minimumFontSizePx: 14;
    /** Recommended body text size (12pt). */
    readonly bodyFontSizePx: 16;
    /** Recommended line height for body text (17pt). */
    readonly bodyLineHeightPx: 22;
    /** Threshold above which text qualifies as "large text" for WCAG contrast. */
    readonly largeTextThresholdPx: 25;
};
/** Font mapping for a non-Latin script. */
export interface NonLatinFontMapping {
    /** Primary font for this script. */
    readonly primary: string;
    /** Fallback font when primary is unavailable. */
    readonly fallback?: string;
    /** Bold variant (if different from primary bold). */
    readonly bold?: string;
    /** macOS light variant. */
    readonly macLight?: string;
    /** macOS keyline variant. */
    readonly macKeyline?: string;
    /** macOS bold variant. */
    readonly macBold?: string;
    /** macOS universal variant. */
    readonly macAll?: string;
}
/**
 * Non-Latin font family mappings.
 *
 * @remarks
 * Each script has specific font requirements. Fall back to these when
 * content includes non-Latin characters. Mac variants may differ from
 * Windows/Linux defaults.
 */
export declare const NON_LATIN_FONTS: Record<string, NonLatinFontMapping>;
/** All supported non-Latin script names. */
export type NonLatinScript = keyof typeof NON_LATIN_FONTS;
/**
 * Typography rules as boolean flags.
 *
 * @remarks
 * All rules are `true` meaning the restriction is active.
 * Red highlighting in messages is no longer permitted for accessibility.
 */
export declare const TYPOGRAPHY_RULES: {
    /** Never use UBS Red for numbers. */
    readonly noRedForNumbers: true;
    /** Never apply opacity/transparency to text. */
    readonly noOpacity: true;
    /** Small caps are not permitted in UBS typography. */
    readonly noSmallCaps: true;
    /** Never justify text. Always left-aligned (or right-aligned for RTL). */
    readonly noJustification: true;
    /** Right-aligned text is not permitted (except RTL scripts). */
    readonly noRightAligned: true;
    /** No drop shadows on text. */
    readonly noShadow: true;
    /** No centred text blocks. */
    readonly noCentredBlock: true;
    /** No staircase/stepped text layouts. */
    readonly noStairs: true;
    /** Never mix different font sizes within one sentence. */
    readonly noDifferentSizesInOneSentence: true;
    /** No text wrapping around objects. */
    readonly noWrap: true;
    /** Red highlighting in messages no longer permitted for accessibility. */
    readonly noHighlightingInUBSRed: true;
};
/** Type representing a typography rule key. */
export type TypographyRule = keyof typeof TYPOGRAPHY_RULES;
