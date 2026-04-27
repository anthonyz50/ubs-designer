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

// ─── Font Families ───────────────────────────────────────────────────

/** UBS corporate typeface. Licensed through Monotype. */
export const FONT_FAMILY_PRIMARY = 'Frutiger' as const;

/** Replaces Frutiger when not technically possible. */
export const FONT_FAMILY_FALLBACK = 'Arial' as const;

/** CSS font-family stack for UBS typography. */
export const FONT_STACK = `"Frutiger", Arial, sans-serif` as const;

// ─── Font Weights ────────────────────────────────────────────────────

/**
 * UBS font weight definitions.
 * Only these five weights are permitted in UBS communications.
 */
export const FONT_WEIGHTS = {
  /** General use. Default weight for body text. */
  light: 'Frutiger 45 Light',
  /** Call-outs within body copy. */
  lightItalic: 'Frutiger 45 Light Italic',
  /** Specific highlights only. */
  lightBold: 'Frutiger 45 Light Bold',
  /** Extra-small text sizes for improved legibility. */
  roman: 'Frutiger 55 Roman',
  /** Additional weight for diagrams only. */
  lightCondensed: 'Frutiger 47 Light CN',
} as const;

/** Type representing a valid UBS font weight key. */
export type UBSFontWeight = keyof typeof FONT_WEIGHTS;

// ─── Typography Hierarchy ────────────────────────────────────────────

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
export const TYPOGRAPHY_HIERARCHY: Record<string, TypographyLevel> = {
  /** Free selectable size. Minimum 2x the infoline size. */
  keyline: {
    lineSpacingMultiplier: 1.05,
    fontWeight: 'light',
    colour: 'black',
    description: 'Free selectable size. Minimum 2x the infoline size.',
  },
  /** Free selectable size. Max half the keyline size. */
  infoline: {
    lineSpacingMultiplier: 1.2,
    fontWeight: 'light',
    colour: 'black',
    description: 'Free selectable size. Max half the keyline size.',
  },
  subheadline1: {
    fontSize: '20pt',
    lineSpacing: '24pt',
    fontWeight: 'light',
    colour: 'black',
    description: 'Primary subheadline.',
  },
  subheadline2: {
    fontSize: '13.5pt',
    lineSpacing: '16pt',
    fontWeight: 'light',
    colour: 'black',
    description: 'Secondary subheadline.',
  },
  subheadline3: {
    fontSize: '9.5pt',
    lineSpacing: '12pt',
    fontWeight: 'bold',
    colour: 'black',
    description: 'Tertiary subheadline. Bold weight.',
  },
  subheadline4: {
    fontSize: '9.5pt',
    lineSpacing: '12pt',
    fontWeight: 'bold',
    colour: 'red',
    description: 'Quaternary subheadline. Bold weight, UBS Red.',
  },
  leadText1: {
    fontSize: '20pt',
    lineSpacing: '24pt',
    fontWeight: 'light',
    colour: 'black',
    description: 'Primary lead text. Same spec as subheadline1.',
  },
  leadText2: {
    fontSize: '13.5pt',
    lineSpacing: '16pt',
    fontWeight: 'light',
    colour: 'black',
    description: 'Secondary lead text. Same spec as subheadline2.',
  },
  quotes: {
    fontSize: '13.5pt',
    lineSpacing: '16pt',
    fontWeight: 'light',
    colour: 'black',
    description: 'Pull quotes and quotations.',
  },
  subtitles: {
    fontSize: '9.5pt',
    lineSpacing: '12pt',
    fontWeight: 'bold',
    colour: 'black or red',
    description: 'Subtitles. Can be black or UBS Red.',
  },
  copyText: {
    fontSize: '9.5pt',
    lineSpacing: '12pt',
    fontWeight: 'light',
    colour: 'black',
    description: 'Standard body copy.',
  },
  pageNumbers: {
    fontSize: '9.5pt',
    lineSpacing: '12pt',
    fontWeight: 'light',
    colour: 'black',
    description: 'Page numbering.',
  },
  senderInfo: {
    fontSize: '9.5pt',
    lineSpacing: '12pt',
    fontWeight: 'light',
    colour: 'black',
    description: 'Sender information blocks.',
  },
  smallCopyText: {
    fontSize: '8pt',
    lineSpacing: '10pt',
    fontWeight: 'light',
    colour: 'black',
    description: 'Smaller body copy for secondary content.',
  },
  environmentalInfo: {
    fontSize: '8pt',
    lineSpacing: '10pt',
    fontWeight: 'light',
    colour: 'black',
    description: 'Environmental and regulatory information.',
  },
  captions: {
    fontSize: '7.5pt',
    lineSpacing: '9.5pt',
    fontWeight: 'light',
    colour: 'black or red',
    description: 'Image and figure captions. Can be black or UBS Red.',
  },
  footnote: {
    fontSize: '6.5pt',
    lineSpacing: '7.5pt',
    fontWeight: 'light',
    colour: 'black',
    description: 'Footnotes and legal disclaimers.',
  },
} as const;

/** All valid hierarchy level names. */
export type TypographyLevelName = keyof typeof TYPOGRAPHY_HIERARCHY;

// ─── Web-Optimised Sizes ─────────────────────────────────────────────

/**
 * Web-optimised typography sizes.
 * Use these for digital/screen implementations instead of print point sizes.
 */
export const WEB_TYPOGRAPHY = {
  /** Minimum accessible font size (10.5pt). */
  minimumFontSizePx: 14,
  /** Recommended body text size (12pt). */
  bodyFontSizePx: 16,
  /** Recommended line height for body text (17pt). */
  bodyLineHeightPx: 22,
  /** Threshold above which text qualifies as "large text" for WCAG contrast. */
  largeTextThresholdPx: 25,
} as const;

// ─── Non-Latin Font Mappings ─────────────────────────────────────────

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
export const NON_LATIN_FONTS: Record<string, NonLatinFontMapping> = {
  arabic: {
    primary: 'Frutiger Arabic',
    fallback: 'Segoe UI Semilight',
  },
  cyrillic: {
    primary: 'Frutiger Cyrillic',
    fallback: 'Segoe UI Semilight',
  },
  greek: {
    primary: 'Frutiger Greek',
    fallback: 'Segoe UI Semilight',
  },
  hebrew: {
    primary: 'Segoe UI Semilight',
    bold: 'Segoe UI Semibold',
  },
  japanese: {
    primary: 'MS P Gothic',
    macLight: 'Hiragino Kaku Gothic ProN W2',
    macKeyline: 'Hiragino Kaku Gothic ProN W4',
    macBold: 'Hiragino Kaku Gothic ProN W6',
  },
  korean: {
    primary: 'Gulim',
    macAll: 'DFKGothic W5',
    macBold: 'DFKGothic W7',
  },
  simplifiedChinese: {
    primary: 'DFP Hei',
    macLight: 'DFP Hei W3',
    macBold: 'DFP Hei W5',
    fallback: 'STXihei',
  },
  traditionalChinese: {
    primary: 'DF Hei',
    macLight: 'DF Hei W3',
    macBold: 'DF Hei W5',
  },
  thai: {
    primary: 'Leelawadee',
    macAll: 'Lily UPC',
  },
} as const;

/** All supported non-Latin script names. */
export type NonLatinScript = keyof typeof NON_LATIN_FONTS;

// ─── Typography Rules ────────────────────────────────────────────────

/**
 * Typography rules as boolean flags.
 *
 * @remarks
 * All rules are `true` meaning the restriction is active.
 * Red highlighting in messages is no longer permitted for accessibility.
 */
export const TYPOGRAPHY_RULES = {
  /** Never use UBS Red for numbers. */
  noRedForNumbers: true,
  /** Never apply opacity/transparency to text. */
  noOpacity: true,
  /** Small caps are not permitted in UBS typography. */
  noSmallCaps: true,
  /** Never justify text. Always left-aligned (or right-aligned for RTL). */
  noJustification: true,
  /** Right-aligned text is not permitted (except RTL scripts). */
  noRightAligned: true,
  /** No drop shadows on text. */
  noShadow: true,
  /** No centred text blocks. */
  noCentredBlock: true,
  /** No staircase/stepped text layouts. */
  noStairs: true,
  /** Never mix different font sizes within one sentence. */
  noDifferentSizesInOneSentence: true,
  /** No text wrapping around objects. */
  noWrap: true,
  /** Red highlighting in messages no longer permitted for accessibility. */
  noHighlightingInUBSRed: true,
} as const;

/** Type representing a typography rule key. */
export type TypographyRule = keyof typeof TYPOGRAPHY_RULES;
