/**
 * Unit conversion utilities for CSS values
 * Handles px, pt, rem, em conversions
 */

/** Default base font size for rem calculations (browser default) */
const BASE_FONT_SIZE_PX = 16;

/** Points to pixels conversion factor */
const PT_TO_PX = 96 / 72; // 1pt = 1.333...px

export interface ParsedValue {
  value: number;
  unit: string;
}

/**
 * Parse a CSS value string into a number and unit.
 * Returns null if the value cannot be parsed.
 */
export function parseValue(input: string): ParsedValue | null {
  const trimmed = input.trim().toLowerCase();
  const match = trimmed.match(/^(-?[\d.]+)\s*(px|pt|rem|em|%)$/);
  if (!match) return null;

  const value = parseFloat(match[1]);
  if (isNaN(value)) return null;

  return { value, unit: match[2] };
}

/**
 * Convert a parsed CSS value to pixels.
 * Uses default base font size for rem/em calculations.
 */
export function toPx(parsed: ParsedValue, baseFontSizePx: number = BASE_FONT_SIZE_PX): number {
  switch (parsed.unit) {
    case 'px':
      return parsed.value;
    case 'pt':
      return parsed.value * PT_TO_PX;
    case 'rem':
      return parsed.value * baseFontSizePx;
    case 'em':
      return parsed.value * baseFontSizePx;
    case '%':
      return (parsed.value / 100) * baseFontSizePx;
    default:
      return parsed.value;
  }
}

/**
 * Convert a CSS value string to pixels.
 * Returns null if the value cannot be parsed.
 */
export function valueToPx(input: string, baseFontSizePx: number = BASE_FONT_SIZE_PX): number | null {
  const parsed = parseValue(input);
  if (!parsed) return null;
  return toPx(parsed, baseFontSizePx);
}

/**
 * Convert pixels to rem.
 */
export function pxToRem(px: number, baseFontSizePx: number = BASE_FONT_SIZE_PX): number {
  return px / baseFontSizePx;
}

/**
 * Convert pixels to points.
 */
export function pxToPt(px: number): number {
  return px / PT_TO_PX;
}

/**
 * Check if a pixel value aligns to a given grid.
 */
export function isOnGrid(px: number, gridValues: readonly number[]): boolean {
  return gridValues.includes(px);
}

/**
 * Find the nearest grid value to a given pixel value.
 */
export function nearestGridValue(px: number, gridValues: readonly number[]): number {
  let nearest = gridValues[0];
  let minDiff = Math.abs(px - nearest);

  for (const gridVal of gridValues) {
    const diff = Math.abs(px - gridVal);
    if (diff < minDiff) {
      minDiff = diff;
      nearest = gridVal;
    }
  }

  return nearest;
}

/**
 * Parse individual values from a shorthand property (e.g., margin: 8px 16px).
 * Returns an array of individual value strings.
 */
export function parseShorthandValues(value: string): string[] {
  return value
    .trim()
    .split(/\s+/)
    .filter((v) => v.length > 0);
}
