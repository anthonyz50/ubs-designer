/**
 * UBS Design System — useContrastCheck Hook
 *
 * Validates colour contrast against WCAG 2.2 AA requirements:
 * - Normal text (<25px / <18.7px bold): 4.5:1 ratio
 * - Large text (≥25px / ≥18.7px bold): 3:1 ratio
 * - Non-text graphics & UI components: 3:1 ratio
 *
 * Uses the relative luminance formula from WCAG 2.2.
 *
 * @example
 * ```tsx
 * import { useContrastCheck } from '@ubs/design-system';
 *
 * function MyComponent() {
 *   const result = useContrastCheck('#E60000', '#FFFFFF');
 *   // result.ratio ≈ 4.0
 *   // result.passesNormalText === false
 *   // result.passesLargeText === true
 *   // result.passesGraphics === true
 * }
 * ```
 */

import { useMemo } from 'react';

// ─── Colour Parsing ──────────────────────────────────────────────────

interface RGB {
  r: number;
  g: number;
  b: number;
}

/**
 * Parse a hex colour string to RGB values (0-255).
 * Supports #RGB, #RRGGBB, #RGBA, #RRGGBBAA formats.
 */
function parseHex(hex: string): RGB {
  let clean = hex.replace('#', '');

  // Expand shorthand (#RGB → #RRGGBB)
  if (clean.length === 3 || clean.length === 4) {
    clean = clean
      .split('')
      .map((c) => c + c)
      .join('');
  }

  // Take only RGB, ignore alpha
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    throw new Error(`Invalid hex colour: ${hex}`);
  }

  return { r, g, b };
}

// ─── WCAG Luminance Calculation ──────────────────────────────────────

/**
 * Convert an sRGB channel value (0-255) to linear RGB.
 * Per WCAG 2.2 relative luminance spec.
 */
function sRGBtoLinear(value: number): number {
  const normalised = value / 255;
  return normalised <= 0.04045
    ? normalised / 12.92
    : Math.pow((normalised + 0.055) / 1.055, 2.4);
}

/**
 * Calculate relative luminance of a colour.
 * WCAG 2.2 definition: L = 0.2126 * R + 0.7152 * G + 0.0722 * B
 */
function relativeLuminance(rgb: RGB): number {
  const r = sRGBtoLinear(rgb.r);
  const g = sRGBtoLinear(rgb.g);
  const b = sRGBtoLinear(rgb.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculate the contrast ratio between two colours.
 * Returns a value between 1 (identical) and 21 (black on white).
 */
function contrastRatio(lum1: number, lum2: number): number {
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

// ─── WCAG AA Thresholds ──────────────────────────────────────────────

const WCAG_AA_NORMAL_TEXT = 4.5;
const WCAG_AA_LARGE_TEXT = 3;
const WCAG_AA_GRAPHICS = 3;

// ─── Types ───────────────────────────────────────────────────────────

export interface ContrastCheckResult {
  /** The calculated contrast ratio (e.g. 4.53) */
  ratio: number;
  /** Rounded ratio for display (e.g. "4.53:1") */
  ratioString: string;
  /** Passes WCAG 2.2 AA for normal text (4.5:1) */
  passesNormalText: boolean;
  /** Passes WCAG 2.2 AA for large text ≥25px or ≥18.7px bold (3:1) */
  passesLargeText: boolean;
  /** Passes WCAG 2.2 AA for non-text graphics and UI components (3:1) */
  passesGraphics: boolean;
  /** The foreground colour as provided */
  foreground: string;
  /** The background colour as provided */
  background: string;
  /** WCAG AA compliance level */
  level: 'AAA' | 'AA' | 'AA-large' | 'fail';
}

// ─── Standalone Utility ──────────────────────────────────────────────

/**
 * Calculate contrast check result without React.
 * Useful for build-time validation and testing.
 */
export function checkContrast(
  foreground: string,
  background: string,
): ContrastCheckResult {
  const fgRGB = parseHex(foreground);
  const bgRGB = parseHex(background);

  const fgLum = relativeLuminance(fgRGB);
  const bgLum = relativeLuminance(bgRGB);

  const ratio = contrastRatio(fgLum, bgLum);
  const roundedRatio = Math.round(ratio * 100) / 100;

  const passesNormalText = ratio >= WCAG_AA_NORMAL_TEXT;
  const passesLargeText = ratio >= WCAG_AA_LARGE_TEXT;
  const passesGraphics = ratio >= WCAG_AA_GRAPHICS;

  let level: ContrastCheckResult['level'];
  if (ratio >= 7) {
    level = 'AAA';
  } else if (ratio >= WCAG_AA_NORMAL_TEXT) {
    level = 'AA';
  } else if (ratio >= WCAG_AA_LARGE_TEXT) {
    level = 'AA-large';
  } else {
    level = 'fail';
  }

  return {
    ratio: roundedRatio,
    ratioString: `${roundedRatio}:1`,
    passesNormalText,
    passesLargeText,
    passesGraphics,
    foreground,
    background,
    level,
  };
}

// ─── React Hook ──────────────────────────────────────────────────────

/**
 * Hook that validates colour contrast against WCAG 2.2 AA.
 *
 * @param foreground - Foreground colour in hex (e.g. '#000000')
 * @param background - Background colour in hex (e.g. '#FFFFFF')
 * @returns ContrastCheckResult with ratio and pass/fail for each threshold
 */
export function useContrastCheck(
  foreground: string,
  background: string,
): ContrastCheckResult {
  return useMemo(
    () => checkContrast(foreground, background),
    [foreground, background],
  );
}
