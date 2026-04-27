"use strict";
/**
 * UBS colour palette utilities.
 * Hex normalisation, palette validation, and nearest colour suggestion.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRADING_COLOURS = exports.UBS_RED_COLOURS = exports.UBS_ALL_COLOURS = exports.UBS_CHART_SEQUENCE = exports.UBS_PALETTE = void 0;
exports.normaliseHex = normaliseHex;
exports.isInPalette = isInPalette;
exports.nearestPaletteColour = nearestPaletteColour;
exports.isUbsRed = isUbsRed;
exports.isTradingColour = isTradingColour;
exports.extractHexColours = extractHexColours;
/** Core UBS palette colours (uppercase, 6-digit hex). */
exports.UBS_PALETTE = [
    // Primary
    '#FFFFFF', '#E60000', '#000000',
    // Neutrals
    '#CCCABC', '#B8B3A2', '#8E8D83', '#7A7870', '#5A5D5C', '#404040',
    // Red scale
    '#BD000C', '#8A000A', '#620004',
    // Gold scale
    '#B98E2C', '#946F29', '#6C5312',
    // Warm neutrals
    '#ECEBE4', '#F5F0E1',
    // Signal reds
    '#D83B31', '#FE6F5D',
    // Signal misc
    '#E4A911', '#6F7A1A',
    // Trading / status
    '#498100', '#C81219', '#BEBEBE',
];
/** UBS chart colour sequence (20 colours, must be used in order). */
exports.UBS_CHART_SEQUENCE = [
    '#AF8626', '#00759E', '#879420', '#4B2D58', '#9F8865',
    '#2E476B', '#469A6C', '#AD3E4A', '#8489BD', '#0C7EC6',
    '#654D16', '#804C95', '#45999C', '#4972AC', '#CC707A',
    '#295B40', '#545A9C', '#785E4A', '#07476F',
];
/** Full palette including chart colours. */
exports.UBS_ALL_COLOURS = [
    ...exports.UBS_PALETTE,
    ...exports.UBS_CHART_SEQUENCE,
];
/** UBS Red variants used for the "no red numbers" rule. */
exports.UBS_RED_COLOURS = [
    '#E60000', '#D83B31', '#FE6F5D',
];
/** Trading colours that require explicit region context. */
exports.TRADING_COLOURS = [
    '#498100', '#C81219',
];
/**
 * Normalise a hex colour string to uppercase 6-digit form.
 * Accepts 3-digit shorthand (#F00 → #FF0000) and mixed case.
 * Returns null if the input is not a valid hex colour.
 */
function normaliseHex(hex) {
    const match = hex.match(/^#([0-9a-fA-F]{3,8})$/);
    if (!match)
        return null;
    const raw = match[1].toUpperCase();
    if (raw.length === 3) {
        // Expand shorthand: #ABC → #AABBCC
        return `#${raw[0]}${raw[0]}${raw[1]}${raw[1]}${raw[2]}${raw[2]}`;
    }
    if (raw.length === 6) {
        return `#${raw}`;
    }
    if (raw.length === 8) {
        // 8-digit hex (with alpha); return just the RGB portion
        return `#${raw.slice(0, 6)}`;
    }
    return null;
}
/**
 * Check whether a normalised hex colour is in the UBS palette.
 */
function isInPalette(hex) {
    const norm = normaliseHex(hex);
    if (!norm)
        return false;
    return exports.UBS_ALL_COLOURS.includes(norm);
}
/**
 * Parse a hex colour to [R, G, B].
 */
function hexToRgb(hex) {
    const norm = normaliseHex(hex);
    if (!norm)
        return null;
    const r = parseInt(norm.slice(1, 3), 16);
    const g = parseInt(norm.slice(3, 5), 16);
    const b = parseInt(norm.slice(5, 7), 16);
    return [r, g, b];
}
/**
 * Euclidean distance between two RGB colours.
 */
function colourDistance(a, b) {
    return Math.sqrt((a[0] - b[0]) ** 2 +
        (a[1] - b[1]) ** 2 +
        (a[2] - b[2]) ** 2);
}
/**
 * Find the nearest UBS palette colour to the given hex.
 * Returns the palette hex string.
 */
function nearestPaletteColour(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb)
        return null;
    let best = null;
    let bestDist = Infinity;
    for (const candidate of exports.UBS_ALL_COLOURS) {
        const candidateRgb = hexToRgb(candidate);
        if (!candidateRgb)
            continue;
        const dist = colourDistance(rgb, candidateRgb);
        if (dist < bestDist) {
            bestDist = dist;
            best = candidate;
        }
    }
    return best;
}
/**
 * Check if a hex colour is one of the UBS red variants.
 */
function isUbsRed(hex) {
    const norm = normaliseHex(hex);
    if (!norm)
        return false;
    return exports.UBS_RED_COLOURS.includes(norm);
}
/**
 * Check if a hex colour is a trading colour.
 */
function isTradingColour(hex) {
    const norm = normaliseHex(hex);
    if (!norm)
        return false;
    return exports.TRADING_COLOURS.includes(norm);
}
/**
 * Extract all hex colour literals from a string.
 */
function extractHexColours(text) {
    const matches = text.match(/#[0-9a-fA-F]{3,8}\b/g);
    return matches ?? [];
}
