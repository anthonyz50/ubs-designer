/**
 * UBS Colour Palette utilities
 * Hex normalisation, RGB parsing, and palette lookup
 */

/** Complete UBS brand colour palette (uppercase, 6-digit hex) */
export const UBS_PALETTE: ReadonlySet<string> = new Set([
  // Core
  '#FFFFFF', '#E60000', '#000000',
  // Neutrals
  '#CCCABC', '#B8B3A2', '#8E8D83', '#7A7870', '#5A5D5C', '#404040',
  // Dark reds
  '#BD000C', '#8A000A', '#620004',
  // Golds
  '#B98E2C', '#946F29', '#6C5312',
  // Warm neutrals
  '#ECEBE4', '#F5F0E1',
  // Accent reds/oranges
  '#D83B31', '#FE6F5D',
  // Accent yellows/greens
  '#E4A911', '#6F7A1A',
  // Additional brand
  '#498100', '#C81219',
  // Grey
  '#BEBEBE',
  // Chart palette
  '#AF8626', '#00759E', '#879420', '#4B2D58', '#9F8865', '#2E476B',
  '#469A6C', '#AD3E4A', '#8489BD', '#0C7EC6', '#654D16', '#804C95',
  '#45999C', '#4972AC', '#CC707A', '#295B40', '#545A9C', '#785E4A',
  '#07476F',
]);

/** Keywords that are always allowed in colour contexts */
export const ALLOWED_COLOUR_KEYWORDS: ReadonlySet<string> = new Set([
  'transparent',
  'inherit',
  'initial',
  'unset',
  'revert',
  'revert-layer',
  'currentcolor',
]);

/** CSS properties that accept colour values */
export const COLOUR_PROPERTIES: ReadonlySet<string> = new Set([
  'color',
  'background-color',
  'border-color',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',
  'outline-color',
  'fill',
  'stroke',
  'text-decoration-color',
  'column-rule-color',
  'caret-color',
  'flood-color',
  'lighting-color',
  'stop-color',
]);

/**
 * Normalise a hex colour to uppercase 6-digit format.
 * Handles 3-digit shorthand (#ABC → #AABBCC) and mixed case.
 * Returns null if not a valid hex colour.
 */
export function normaliseHex(value: string): string | null {
  const trimmed = value.trim();
  const match = trimmed.match(/^#([0-9a-fA-F]{3,8})$/);
  if (!match) return null;

  const hex = match[1].toUpperCase();

  if (hex.length === 3) {
    // Expand shorthand: #ABC → #AABBCC
    return `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  if (hex.length === 6) {
    return `#${hex}`;
  }

  // 4-digit (#RGBA) or 8-digit (#RRGGBBAA) — extract the RGB portion
  if (hex.length === 4) {
    return `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  if (hex.length === 8) {
    return `#${hex.substring(0, 6)}`;
  }

  return null;
}

/**
 * Parse an rgb() or rgba() function call to a normalised hex value.
 * Returns null if not a valid rgb/rgba expression.
 */
export function parseRgbToHex(value: string): string | null {
  const trimmed = value.trim().toLowerCase();
  const match = trimmed.match(
    /^rgba?\(\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*(?:[,/]\s*[\d.]+%?\s*)?\)$/
  );
  if (!match) return null;

  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);

  if (r > 255 || g > 255 || b > 255) return null;

  const toHex = (n: number) => n.toString(16).toUpperCase().padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Extract colour values from a CSS value string.
 * Returns an array of raw colour tokens found.
 */
export function extractColourValues(value: string): string[] {
  const colours: string[] = [];
  const trimmed = value.trim();

  // Match hex colours
  const hexMatches = trimmed.match(/#[0-9a-fA-F]{3,8}\b/g);
  if (hexMatches) {
    colours.push(...hexMatches);
  }

  // Match rgb/rgba functions
  const rgbMatches = trimmed.match(/rgba?\([^)]+\)/gi);
  if (rgbMatches) {
    colours.push(...rgbMatches);
  }

  // Match hsl/hsla functions
  const hslMatches = trimmed.match(/hsla?\([^)]+\)/gi);
  if (hslMatches) {
    colours.push(...hslMatches);
  }

  // Match named CSS colours (common ones that might slip through)
  const namedColourPattern = /\b(red|blue|green|yellow|orange|purple|pink|brown|grey|gray|white|black|aqua|teal|navy|maroon|olive|lime|fuchsia|silver)\b/gi;
  const namedMatches = trimmed.match(namedColourPattern);
  if (namedMatches) {
    colours.push(...namedMatches);
  }

  return colours;
}

/**
 * Check if a colour value is in the UBS palette.
 * Handles hex (3/6/8 digit), rgb(), and keyword values.
 */
export function isInPalette(value: string): boolean {
  const trimmed = value.trim().toLowerCase();

  // Check allowed keywords
  if (ALLOWED_COLOUR_KEYWORDS.has(trimmed)) {
    return true;
  }

  // Check CSS custom properties with ubs prefix
  if (/^var\(--ubs-/.test(trimmed)) {
    return true;
  }

  // Check any var() with custom properties
  if (/^var\(--/.test(trimmed)) {
    // Only allow --ubs-* prefixed custom properties by default
    return false;
  }

  // Try hex normalisation
  const normalisedHex = normaliseHex(value);
  if (normalisedHex && UBS_PALETTE.has(normalisedHex)) {
    return true;
  }

  // Try RGB parsing
  const rgbHex = parseRgbToHex(value);
  if (rgbHex && UBS_PALETTE.has(rgbHex)) {
    return true;
  }

  return false;
}

/**
 * Check if a value is a CSS custom property reference.
 */
export function isCustomProperty(value: string): boolean {
  return /^var\(--/.test(value.trim().toLowerCase());
}

/**
 * Check if a value is a UBS-namespaced custom property.
 */
export function isUbsCustomProperty(value: string): boolean {
  return /^var\(--ubs-/.test(value.trim().toLowerCase());
}
