/**
 * UBS colour palette utilities.
 * Hex normalisation, palette validation, and nearest colour suggestion.
 */
/** Core UBS palette colours (uppercase, 6-digit hex). */
export declare const UBS_PALETTE: readonly string[];
/** UBS chart colour sequence (20 colours, must be used in order). */
export declare const UBS_CHART_SEQUENCE: readonly string[];
/** Full palette including chart colours. */
export declare const UBS_ALL_COLOURS: readonly string[];
/** UBS Red variants used for the "no red numbers" rule. */
export declare const UBS_RED_COLOURS: readonly string[];
/** Trading colours that require explicit region context. */
export declare const TRADING_COLOURS: readonly string[];
/**
 * Normalise a hex colour string to uppercase 6-digit form.
 * Accepts 3-digit shorthand (#F00 → #FF0000) and mixed case.
 * Returns null if the input is not a valid hex colour.
 */
export declare function normaliseHex(hex: string): string | null;
/**
 * Check whether a normalised hex colour is in the UBS palette.
 */
export declare function isInPalette(hex: string): boolean;
/**
 * Find the nearest UBS palette colour to the given hex.
 * Returns the palette hex string.
 */
export declare function nearestPaletteColour(hex: string): string | null;
/**
 * Check if a hex colour is one of the UBS red variants.
 */
export declare function isUbsRed(hex: string): boolean;
/**
 * Check if a hex colour is a trading colour.
 */
export declare function isTradingColour(hex: string): boolean;
/**
 * Extract all hex colour literals from a string.
 */
export declare function extractHexColours(text: string): string[];
