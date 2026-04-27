/**
 * contrast-check: WCAG 2.2 AA contrast validation.
 *
 * Implements relative luminance and contrast ratio calculations.
 * Checks foreground/background colour pairs found in CSS declarations.
 */
import { Rule } from '../core/types';
/**
 * Calculate WCAG relative luminance for an RGB colour.
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
export declare function relativeLuminance(r: number, g: number, b: number): number;
/**
 * Calculate WCAG contrast ratio between two luminance values.
 */
export declare function contrastRatio(l1: number, l2: number): number;
export declare const contrastCheck: Rule;
//# sourceMappingURL=contrast-check.d.ts.map