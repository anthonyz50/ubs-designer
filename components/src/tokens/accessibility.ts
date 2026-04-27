/**
 * UBS Design System — Accessibility Tokens
 *
 * WCAG 2.2 Level AA compliance requirements.
 * Source: ubs.frontify.com
 *
 * @remarks
 * All UBS digital and print communications must meet WCAG 2.2 Level AA.
 * Colour alone must never be used to convey meaning.
 */

// ─── Standard ────────────────────────────────────────────────────────

/** The WCAG standard UBS adheres to. */
export const ACCESSIBILITY_STANDARD = 'WCAG 2.2 Level AA' as const;

// ─── Contrast Ratios ─────────────────────────────────────────────────

/**
 * Minimum contrast ratios for WCAG 2.2 Level AA compliance.
 *
 * @remarks
 * Text contrast is 4.5:1 for standard text, 3:1 for large text (over 18pt / 25px).
 * Icons and graphic objects require 3:1 against background or adjacent colours.
 */
export const CONTRAST_RATIOS = {
  /** Minimum contrast ratio for standard text against background. */
  text: 4.5,
  /** Minimum contrast ratio for text over 18pt (25 CSS px). */
  largeText: 3.0,
  /** Minimum contrast ratio for icons and graphic objects against background or adjacent colours. */
  iconsAndGraphics: 3.0,
} as const;

/**
 * Minimum chart separator/gap when colour contrast between adjacent segments is below 3:1.
 */
export const CHART_SEPARATOR_MIN = '2px' as const;

// ─── Typography Constraints ──────────────────────────────────────────

/**
 * Accessible typography size constraints.
 *
 * @remarks
 * These are the web-accessible equivalents of print sizes.
 * Content must support enlargement up to 400% without loss of functionality.
 */
export const ACCESSIBLE_TYPOGRAPHY = {
  /** Minimum accessible font size: 10.5pt (14 CSS px). */
  minimumFontSize: '10.5pt',
  /** Minimum font size in CSS pixels. */
  minimumFontSizePx: 14,
  /** Recommended body font size: 12pt (16 CSS px). */
  recommendedFontSize: '12pt',
  /** Recommended font size in CSS pixels. */
  recommendedFontSizePx: 16,
  /** Recommended line height for 12pt body text: 17pt (22 CSS px). */
  recommendedLineHeight: '17pt',
  /** Recommended line height in CSS pixels. */
  recommendedLineHeightPx: 22,
  /** PDF content must work for enlargement up to this percentage. */
  pdfReflowMaxZoom: 400,
} as const;

// ─── Chart Gap Specifications ────────────────────────────────────────

/**
 * Minimum gap/separator between chart segments for accessibility.
 *
 * @remarks
 * Gaps must be applied when adjacent chart segments have insufficient colour contrast (below 3:1).
 * Always use 2D charts; never 3D. Different line types required for monochrome sequences.
 */
export const CHART_GAP_SPECS = {
  /** Minimum gap for print media. */
  print: '1.5pt',
  /** Minimum gap for screen/digital media. */
  screen: '2px',
  /** Charts must always be 2D, never 3D. */
  dimension: 'always 2D, never 3D',
  /** Never rely on colour alone to convey meaning in charts. */
  neverRelyOnColourAlone: true,
  /** Use different line types for complex line charts and monochrome sequences. */
  useLineTypes: 'Different line types for complex line charts and monochrome sequences',
} as const;

// ─── Accessibility Rules ─────────────────────────────────────────────

/**
 * General accessibility rules as boolean flags and string constraints.
 *
 * @remarks
 * All boolean rules are `true` meaning the requirement is active.
 * Colourblind users need additional design features beyond colour alone.
 */
export const ACCESSIBILITY_RULES = {
  /** Avoid placing text within images wherever possible. */
  avoidTextInImages: true,
  /** If text must appear in images, minimum contrast is 4.5:1. */
  textInImagesMinContrast: '4.5:1',
  /** All non-decorative images must have alternative text. */
  alternativeTextRequired: true,
  /** Colourblind users need additional design features beyond colour alone. */
  noColourAlone: true,
  /** Documents must have a logical heading structure. */
  logicalHeadingStructure: true,
  /** Documents must have a meaningful title. */
  documentTitle: true,
  /** Documents must declare their language. */
  documentLanguage: true,
} as const;

/** Type representing an accessibility rule key. */
export type AccessibilityRule = keyof typeof ACCESSIBILITY_RULES;

// ─── Recommended Tools ───────────────────────────────────────────────

/**
 * UBS-recommended accessibility testing tools.
 */
export const ACCESSIBILITY_TOOLS = {
  /** Desktop contrast checker application. */
  desktop: 'Colour Contrast Analyser (Paciello Group)',
  /** Online contrast checker. */
  online: 'contrastchecker.com',
} as const;
