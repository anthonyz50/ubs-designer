/**
 * UBS Design System — Layout Tokens
 *
 * Grid, margin, impulse, logo, key symbol, and moving frame specifications.
 * Source: ubs.frontify.com
 *
 * @remarks
 * All margin and impulse values are keyed by ISO format (A0–A8).
 * The Impulse is UBS's distinctive red vertical line alongside text.
 */

// ─── ISO Format Margins ──────────────────────────────────────────────

/** Margin specification for an ISO paper format. */
export interface ISOMarginSpec {
  /** ISO format dimensions (e.g. "210x297mm"). */
  readonly format: string;
  /** Page margin value. */
  readonly margin: string;
}

/**
 * Margins by ISO format.
 *
 * @remarks
 * Space of one key symbol height (k) between text/image and text/margin.
 */
export const ISO_MARGINS: Record<string, ISOMarginSpec> = {
  A8:    { format: '52x74mm',   margin: '6.0mm' },
  A7:    { format: '74x105mm',  margin: '9.0mm' },
  A6:    { format: '105x148mm', margin: '11.0mm' },
  'A6-5': { format: '105x210mm', margin: '12.5mm' },
  A5:    { format: '148x210mm', margin: '12.5mm' },
  A4:    { format: '210x297mm', margin: '15.5mm' },
  A3:    { format: '297x420mm', margin: '22.1mm' },
  A2:    { format: '420x594mm', margin: '31.0mm' },
  A1:    { format: '594x841mm', margin: '44.2mm' },
  A0:    { format: '841x1189mm', margin: '62.1mm' },
} as const;

/** All supported ISO format keys. */
export type ISOFormat = keyof typeof ISO_MARGINS;

// ─── Impulse ─────────────────────────────────────────────────────────

/**
 * Impulse colour. Always UBS Red.
 *
 * @remarks
 * The Impulse is UBS's distinctive red vertical line alongside text.
 */
export const IMPULSE_COLOUR = '#E60000' as const;

/**
 * Impulse stroke width by ISO format.
 *
 * @remarks
 * If undefined for a custom format, use 2x key stalk width.
 */
export const IMPULSE_WIDTH: Record<string, string> = {
  A8:    '1.2pt',
  A7:    '1.9pt',
  A6:    '2.6pt',
  'A6-5': '2.6pt',
  A5:    '3.2pt',
  A4:    '4.5pt',
  A3:    '6.7pt',
  A2:    '9.0pt',
  A1:    '12.7pt',
  A0:    '18.0pt',
} as const;

/**
 * Distance between Impulse and text by ISO format.
 *
 * @remarks
 * If undefined for a custom format, use half key symbol height.
 */
export const IMPULSE_SPACE: Record<string, string> = {
  A8:    '1.8mm',
  A7:    '2.4mm',
  A6:    '3.0mm',
  'A6-5': '3.5mm',
  A5:    '4.9mm',
  A4:    '7.0mm',
  A3:    '9.9mm',
  A2:    '14.0mm',
  A1:    '19.8mm',
  A0:    '28.0mm',
} as const;

/**
 * Impulse height rules.
 *
 * @remarks
 * Height depends on whether the layout uses keyline-only or keyline+infoline.
 */
export const IMPULSE_HEIGHT = {
  /** Cap height of first word to baseline of last line. Last line left blank. */
  keylineOnly: 'Cap height of first word to baseline of last line. Last line left blank.',
  /** Cap height of first keyline word to baseline of infoline. First infoline line left blank. */
  keylineAndInfoline: 'Cap height of first keyline word to baseline of infoline. First infoline line left blank.',
} as const;

/**
 * Impulse placement and usage rules.
 *
 * @remarks
 * On gray/bordeaux/bronze backgrounds, Impulse is allowed on Pastel I and Pastel II only.
 */
export const IMPULSE_RULES = {
  /** Impulse must not extend beyond the baseline of the second message. */
  noLongerThanBaselineOfSecondMessage: true,
  /** Never centre text alongside an Impulse with a keyline. */
  noCentreWithKeyline: true,
  /** Multiple Impulses cannot be used together. */
  noMultipleUseTogether: true,
  /** On gray/bordeaux/bronze: Impulse allowed on Pastel I and Pastel II only. */
  onGrayBordeauxBronze: 'Impulse allowed on Pastel I and Pastel II only',
  /** No red highlighting on front pages. */
  noRedHighlightOnFrontPages: true,
} as const;

// ─── Logo ────────────────────────────────────────────────────────────

/**
 * Logo size (scale percentage) by ISO format.
 *
 * @remarks
 * Scale from the original logo asset using this percentage.
 */
export const LOGO_SIZE: Record<string, string> = {
  A8:    '10%',
  A7:    '15%',
  A6:    '18%',
  'A6-5': '21%',
  A5:    '21%',
  A4:    '26%',
  A3:    '37%',
  A2:    '52%',
  A1:    '74%',
  A0:    '104%',
} as const;

/**
 * Logo positioning rules.
 *
 * @remarks
 * Standard position is bottom-right. Alternative is top-left.
 * Always align to page margin with clear space equal to key symbol height.
 */
export const LOGO_POSITION = {
  /** Default logo placement. */
  standard: 'bottom-right',
  /** Alternative logo placement. */
  alternative: 'top-left',
  /** Logo must align to the page margin. */
  marginAlignment: 'Align to page margin',
  /** Clear space from key to upper/lower edge of format. */
  clearSpace: 'Height of Key Symbol (k) from key to upper/lower edge of format',
} as const;

/**
 * Logo Tab specification.
 *
 * @remarks
 * White background area ensuring contrast and visibility for the logo.
 */
export const LOGO_TAB = {
  /** Standard tab position. */
  standard: 'bottom-right-aligned',
  /** Alternative tab position. */
  alternative: 'top-left-aligned',
} as const;

// ─── Key Symbol ──────────────────────────────────────────────────────

/**
 * Key Symbol specifications.
 *
 * @remarks
 * The three-key icon is the most recognisable part of the UBS logo.
 * It must never be altered, deconstructed, or separated.
 */
export const KEY_SYMBOL = {
  /** Minimum clear space around the key symbol. k = height of Key Symbol. */
  clearSpace: '⅓k minimum',
  /** Permitted colours for the key symbol. */
  colours: ['black', 'white', 'gray'] as const,
  /** Accent colours permitted for the key symbol. */
  accentColours: ['bordeaux', 'bronze'] as const,
} as const;

/**
 * Key Symbol rules. All restrictions are active (true).
 *
 * @remarks
 * The key symbol is sacrosanct. Never modify it in any way.
 */
export const KEY_SYMBOL_RULES = {
  /** Never alter the key symbol design. */
  neverAlter: true,
  /** Never deconstruct the key symbol. */
  neverDeconstruct: true,
  /** Never separate the three keys. */
  neverSeparateKeys: true,
  /** No drop shadows. */
  noShadow: true,
  /** No outlines or strokes. */
  noOutline: true,
  /** No rotation of any kind. */
  noRotation: true,
  /** Only use approved colours. */
  noUnapprovedColours: true,
} as const;

// ─── Moving Frame ────────────────────────────────────────────────────

/**
 * Moving Frame specifications.
 *
 * @remarks
 * The Moving Frame is a dynamic content area overlaid on images.
 * It provides a branded text overlay with controlled opacity.
 */
export const MOVING_FRAME = {
  /** Opacity for transparent variant. */
  transparentOpacity: '80%',
  /** Opacity for opaque variant. */
  opaqueOpacity: '100%',
  /** Maximum frame size relative to the image. */
  maxSize: {
    /** Portrait and square images: max half the width. */
    portraitAndSquare: 'max half the width',
    /** Landscape images: max half the height. */
    landscape: 'max half the height',
  },
  /** Spacing: half the height of Key Symbol (k). */
  spacing: 'half the height of Key Symbol (k)',
  /** Frame is right-aligned at variable height. */
  position: 'right-aligned at variable height',
} as const;

/**
 * Moving Frame rules. All restrictions are active (true).
 */
export const MOVING_FRAME_RULES = {
  /** Never place the Moving Frame in the centre. */
  noCentredPlacement: true,
  /** No left-aligned logo when using Moving Frame. */
  noLeftAlignedLogo: true,
  /** Frame must not bleed to the edge of the format. */
  noBleedingToEdge: true,
  /** No red highlighting within the Moving Frame. */
  noRedHighlighting: true,
  /** Opacity must not be below 80%. */
  noOpacityBelow80: true,
  /** No transparency on monochrome backgrounds. */
  noTransparencyOnMonochrome: true,
  /** No transparency on pattern backgrounds. */
  noTransparencyOnPatterns: true,
} as const;

// ─── Grid ────────────────────────────────────────────────────────────

/**
 * Available grid types for page layouts.
 */
export const GRID_TYPES = [
  'coverAndBackPage',
  'insidePage',
  'insidePageWithAdditionalMargin',
] as const;

/** Type representing a valid grid type. */
export type GridType = typeof GRID_TYPES[number];

/**
 * Preferred image treatment.
 *
 * @remarks
 * Full-bleed images are always preferred whenever possible.
 */
export const IMAGE_PREFERENCE = 'full-bleed whenever possible' as const;

/**
 * Available layout options for page composition.
 *
 * @remarks
 * "Full bleed with Moving Frame" is the recommended default.
 */
export const LAYOUT_OPTIONS = [
  'Full bleed with Moving Frame (recommended)',
  'Full bleed with Logo Tab',
  'Vertical two-thirds',
  'Vertical half',
  'Vertical one-thirds',
  'Without image',
] as const;

/** Type representing a valid layout option. */
export type LayoutOption = typeof LAYOUT_OPTIONS[number];

/**
 * Grid rules. All restrictions are active (true).
 */
export const GRID_RULES = {
  /** Margins should not appear on more than two sides. */
  noMarginOnMoreThanTwoSides: true,
  /** No frameless white box on layouts. */
  noFramelessWhiteBox: true,
  /** Images must not originate from another corner. */
  noImageFromAnotherCorner: true,
  /** No diagonal image cropping. */
  noDiagonalImageCrop: true,
} as const;
