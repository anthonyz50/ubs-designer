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
/**
 * Calculate contrast check result without React.
 * Useful for build-time validation and testing.
 */
export declare function checkContrast(foreground: string, background: string): ContrastCheckResult;
/**
 * Hook that validates colour contrast against WCAG 2.2 AA.
 *
 * @param foreground - Foreground colour in hex (e.g. '#000000')
 * @param background - Background colour in hex (e.g. '#FFFFFF')
 * @returns ContrastCheckResult with ratio and pass/fail for each threshold
 */
export declare function useContrastCheck(foreground: string, background: string): ContrastCheckResult;
