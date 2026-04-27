/**
 * UBS Design System — Data Visualisation Tokens
 *
 * Chart colour sequences, gap specs, emphasis options, motion rules, and constraints.
 * Source: ubs.frontify.com
 *
 * @remarks
 * All charts must be 2D. Donut is preferred over pie.
 * UBS Red (#E60000) is the highlight colour; when used, do not also use Bordeaux I.
 * Never rely on colour alone to convey meaning.
 */

// ─── General ─────────────────────────────────────────────────────────

/** Charts must always be rendered in 2D. */
export const CHART_DIMENSION = 'always 2D' as const;

/** Donut charts are preferred over pie charts. */
export const CIRCULAR_PREFERENCE = 'donut over pie' as const;

/** Highlight colour for data visualisations. Always UBS Red. */
export const HIGHLIGHT_COLOUR = '#E60000' as const;

// ─── Gap Specifications ──────────────────────────────────────────────

/**
 * Minimum gap/separator between chart segments.
 *
 * @remarks
 * Gaps ensure accessibility when adjacent segments lack sufficient colour contrast (below 3:1).
 */
export const CHART_GAPS = {
  /** Minimum gap for print media. */
  print: '1.5pt',
  /** Minimum gap for screen/digital media. */
  screen: '2px',
} as const;

// ─── Colour Sequences ────────────────────────────────────────────────

/**
 * Monochrome colour sequence.
 *
 * @remarks
 * Standard/default. One colour plus UBS Red for highlights.
 * Use for simple charts with few data points.
 */
export const COLOUR_SEQUENCE_MONOCHROME = {
  description: 'Standard. One colour + UBS Red for highlights.',
  usage: 'Default for simple charts',
} as const;

/**
 * Polychrome colour sequence.
 *
 * @remarks
 * Gray III–VI and Black (up to 5 blocks) plus UBS Red for highlights.
 * Arranged light to dark. Standard for multi-segment charts.
 */
export const COLOUR_SEQUENCE_POLYCHROME = {
  description: 'Gray III-VI and Black (up to 5 blocks) + UBS Red for highlights.',
  colours: ['#8E8D83', '#7A7870', '#5A5D5C', '#404040', '#000000'] as const,
  arrangement: 'light to dark',
  usage: 'Standard for multi-segment charts',
} as const;

/**
 * Multichrome colour sequence.
 *
 * @remarks
 * Gray III–VI + Black, Bordeaux I–III, Bronze I–III mixed. Up to 9 blocks.
 * Use when polychrome is insufficient for the number of data points.
 */
export const COLOUR_SEQUENCE_MULTICHROME = {
  description: 'Gray III-VI + Black, Bordeaux I-III, Bronze I-III mixed. Up to 9 blocks.',
  usage: 'Extended palette when polychrome insufficient',
} as const;

/**
 * Complex colour sequence.
 *
 * @remarks
 * 20 additional chart colours. Use only when more colours are needed
 * and all information carries equal weight. Must follow defined sequence order.
 */
export const COLOUR_SEQUENCE_COMPLEX = {
  description: '20 additional chart colours. Use only when more colours needed and info is equal weight.',
  usage: 'Special cases only. Must follow defined sequence order.',
} as const;

/**
 * All colour sequence types mapped by name.
 */
export const COLOUR_SEQUENCES = {
  monochrome: COLOUR_SEQUENCE_MONOCHROME,
  polychrome: COLOUR_SEQUENCE_POLYCHROME,
  multichrome: COLOUR_SEQUENCE_MULTICHROME,
  complex: COLOUR_SEQUENCE_COMPLEX,
} as const;

/** Type representing a valid colour sequence name. */
export type ColourSequenceName = keyof typeof COLOUR_SEQUENCES;

// ─── Insight Flag ────────────────────────────────────────────────────

/**
 * Insight flag specification.
 *
 * @remarks
 * A red arrow pointing to an insight with a summary in plain language.
 */
export const INSIGHT_FLAG = {
  /** Visual element used for the insight flag. */
  element: 'red arrow',
  /** Purpose of the insight flag. */
  purpose: 'Point to an insight with summary in plain language',
} as const;

// ─── Typography ──────────────────────────────────────────────────────

/**
 * Typography within data visualisations.
 *
 * @remarks
 * Primary font is Frutiger Light. Alternatives are Frutiger Bold
 * and Frutiger Light Condensed. Never mix weights within one visualisation.
 */
export const DATA_VIZ_TYPOGRAPHY = {
  /** Primary font for data visualisations. */
  primary: 'Frutiger Light',
  /** Alternative fonts (use only one per visualisation). */
  alternative: ['Frutiger Bold', 'Frutiger Light Condensed'] as const,
  /** Never mix font weights within one visualisation. */
  rule: "Don't mix within one visualisation",
} as const;

// ─── Lines ───────────────────────────────────────────────────────────

/**
 * Line specifications for data visualisations.
 */
export const DATA_VIZ_LINES = {
  /** Line weight ratio for icons and arrows. */
  ratio: '1:2',
  /** Maximum arrow angle. */
  arrowAngle: 'maximum 90 degrees',
  /** Divider lines must have sufficient contrast against chart lines. */
  sufficientContrastBetweenDividerAndChartLines: true,
} as const;

// ─── Emphasis Options ────────────────────────────────────────────────

/**
 * Available emphasis techniques for data visualisations.
 *
 * @remarks
 * Use these to draw attention to key data points or insights
 * without relying on colour alone.
 */
export const EMPHASIS_OPTIONS = [
  'colour',
  'contrast',
  'stroke contrast',
  'scale',
  'proximity',
  'negative space',
  'repetition',
  'dashed/dotted lines',
  'big numbers',
] as const;

/** Type representing a valid emphasis technique. */
export type EmphasisOption = typeof EMPHASIS_OPTIONS[number];

// ─── Motion ──────────────────────────────────────────────────────────

/**
 * Motion/animation specifications for data visualisations.
 *
 * @remarks
 * Motion must add meaning, not embellishment. Transitions use
 * opacity, scale, colour, and position. Consistent timing throughout.
 */
export const DATA_VIZ_MOTION = {
  /** Changes of acceleration for realism. No abrupt starts/stops. */
  easing: 'Changes of acceleration for realism. No abrupt starts/stops.',
  /** Straight, concise paths. No curved/organic motion. */
  direction: 'Straight, concise paths. No curved/organic.',
  /** Transitions add meaning, not embellishment. Opacity, scale, colour, position. */
  transitions: 'Add meaning, not embellishment. Opacity, scale, colour, position.',
  /** Consistent timing. Define smallest duration and multiply. */
  pace: 'Consistent timing. Define smallest duration and multiply.',
} as const;

// ─── Rules ───────────────────────────────────────────────────────────

/**
 * Data visualisation rules. All restrictions are active (true).
 *
 * @remarks
 * When using UBS Red for highlighting, do not also use Bordeaux I.
 * Use the next darker shade instead.
 */
export const DATA_VIZ_RULES = {
  /** Only use UBS-approved icons in visualisations. */
  noNonUBSIcons: true,
  /** No drop shadows in charts. */
  noShadows: true,
  /** Highlight colour (Red) must not dominate the visualisation. */
  noDominantHighlightColour: true,
  /** Do not mix light-to-dark and dark-to-light colour directions. */
  noMixedColourDirections: true,
  /** No gradient fills in chart elements. */
  noGradients: true,
  /** No angled or tilted chart elements. */
  noAngles: true,
  /** Only use UBS corporate colours. */
  noNonCorporateColours: true,
  /** Charts must always be 2D. */
  no3D: true,
  /** Contrast ratios must meet WCAG requirements. */
  noWrongContrastRatio: true,
} as const;

/** Type representing a data visualisation rule key. */
export type DataVizRule = keyof typeof DATA_VIZ_RULES;
