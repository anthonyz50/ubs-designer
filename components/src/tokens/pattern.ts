/**
 * UBS Design System — Pattern Tokens
 *
 * Variants, ratio specs, colour combinations, material applications, and constraints.
 * Source: ubs.frontify.com
 *
 * @remarks
 * UBS patterns are inspired by the key symbol.
 * Patterns always measure against the short side of the format.
 * Never combine two colour directions in one application.
 */

// ─── Variants ────────────────────────────────────────────────────────

/**
 * Available pattern variants.
 *
 * @remarks
 * Each variant can be used independently. Never combine multiple variations.
 */
export const PATTERN_VARIANTS = [
  'solid',
  'outline',
  'solid animated',
  'outline animated',
] as const;

/** Type representing a valid pattern variant. */
export type PatternVariant = typeof PATTERN_VARIANTS[number];

// ─── Ratio Specifications ────────────────────────────────────────────

/**
 * Pattern ratio constraints.
 *
 * @remarks
 * Always measure against the short side of the format.
 * h = height of the base element.
 */
export const PATTERN_RATIO = {
  /** Always measure against the short side of the format. */
  description: 'Always measure against the short side of the format.',
  /** Maximum pattern element size: 3h (h = height of base element). */
  maximum: '3h',
  /** Minimum pattern element size: ⅓h. */
  minimum: '⅓h',
} as const;

// ─── Colour Combinations ─────────────────────────────────────────────

/** A colour pair for pattern application [pattern colour, background colour]. */
export type PatternColourPair = readonly [string, string];

/**
 * Gray colour direction pattern pairs.
 *
 * @remarks
 * Standard colour direction. Lighter pattern on next-tone background.
 * Pairs progress from light to dark.
 */
export const PATTERN_COLOURS_GRAY: readonly PatternColourPair[] = [
  ['#FFFFFF', '#ECEBE4'],
  ['#ECEBE4', '#CCCABC'],
  ['#CCCABC', '#B8B3A2'],
  ['#B8B3A2', '#8E8D83'],
  ['#8E8D83', '#7A7870'],
  ['#7A7870', '#5A5D5C'],
  ['#5A5D5C', '#404040'],
] as const;

/**
 * Bordeaux colour direction pattern pairs.
 */
export const PATTERN_COLOURS_BORDEAUX: readonly PatternColourPair[] = [
  ['#E60000', '#BD000C'],
  ['#BD000C', '#8A000A'],
  ['#8A000A', '#620004'],
] as const;

/**
 * Bronze colour direction pattern pairs.
 */
export const PATTERN_COLOURS_BRONZE: readonly PatternColourPair[] = [
  ['#FFFFFF', '#F5F0E1'],
  ['#B98E2C', '#946F29'],
  ['#946F29', '#6C5312'],
] as const;

/**
 * All pattern colour combinations keyed by colour direction.
 */
export const PATTERN_COLOURS = {
  gray: PATTERN_COLOURS_GRAY,
  bordeaux: PATTERN_COLOURS_BORDEAUX,
  bronze: PATTERN_COLOURS_BRONZE,
} as const;

// ─── Colour Directions ───────────────────────────────────────────────

/** A colour direction specification. */
export interface ColourDirection {
  /** Display name of the colour direction. */
  readonly name: string;
  /** Available colour names in this direction. */
  readonly colours: readonly string[];
}

/**
 * Pattern colour directions.
 *
 * @remarks
 * Basis (Gray) is the default. Specific I (Bordeaux) and Specific II (Bronze)
 * add accent colours. Never combine two colour directions.
 */
export const COLOUR_DIRECTIONS: Record<string, ColourDirection> = {
  /** Default colour direction using grays. */
  basis: {
    name: 'Gray',
    colours: ['White', 'Pastel I', 'Gray I', 'Gray II', 'Gray III', 'Gray IV', 'Gray V', 'Gray VI', 'Black'],
  },
  /** Bordeaux accent colour direction. */
  specificI: {
    name: 'Bordeaux',
    colours: ['White', 'Pastel I', 'Gray I', 'Gray II', 'Gray III', 'Gray IV', 'Gray V', 'Gray VI', 'Black', 'UBS Red', 'Bordeaux I', 'Bordeaux II', 'Bordeaux III'],
  },
  /** Bronze accent colour direction. */
  specificII: {
    name: 'Bronze',
    colours: ['White', 'Gray I', 'Gray II', 'Gray III', 'Gray IV', 'Gray V', 'Gray VI', 'Black', 'Pastel I', 'Bronze I', 'Bronze II', 'Bronze III'],
  },
} as const;

/** Type representing a valid colour direction key. */
export type ColourDirectionName = keyof typeof COLOUR_DIRECTIONS;

// ─── Material Applications ───────────────────────────────────────────

/**
 * Pattern application techniques by material.
 *
 * @remarks
 * When applying the UBS pattern to physical materials, use the specified technique.
 */
export const MATERIAL_APPLICATIONS: Record<string, string> = {
  /** Stainless steel: engraving. */
  stainlessSteel: 'engraving',
  /** Stone: embossing. */
  stone: 'embossing',
  /** Leather: embossing. */
  leather: 'embossing',
  /** Fabric: embroidery. */
  fabric: 'embroidery',
  /** Cardboard: wrapping. */
  cardboard: 'wrapping',
  /** Foil/glass: wrapping. */
  foilGlass: 'wrapping',
  /** Wood: milling. */
  wood: 'milling',
  /** Paper: watermarking. */
  paper: 'watermarking',
} as const;

// ─── Rules ───────────────────────────────────────────────────────────

/**
 * Pattern usage rules. All restrictions are active (true).
 *
 * @remarks
 * Patterns must maintain integrity: no distortion, rotation, mirroring, or
 * combination with other visual elements.
 */
export const PATTERN_RULES = {
  /** Never distort the pattern. */
  noDistortion: true,
  /** No Logo Tab on white backgrounds. */
  noLogoTabOnWhiteBackground: true,
  /** Key symbol must not appear on top of patterns. */
  noKeySymbolOnPattern: true,
  /** Pattern ratio must match format specifications. */
  noWrongFormatRatio: true,
  /** No front page layout or Impulse on patterns. */
  noFrontPageAndImpulseOnPattern: true,
  /** Do not use multiple pattern variations together. */
  noMultipleVariations: true,
  /** Never mirror the pattern. */
  noMirroring: true,
  /** Patterns must not be used as backgrounds for portrait photography. */
  noBackgroundForPortraitPhotography: true,
  /** Only use UBS palette colours. */
  noOtherColours: true,
  /** Never combine two colour directions. */
  noCombinationOfTwoColourDirections: true,
  /** Never rotate the pattern. */
  noRotation: true,
  /** No icons, illustrations, or charts placed on patterns. */
  noIconIllustrationChartOnPattern: true,
  /** Pattern must not bleed on one, two, or three sides only. */
  noBleedingOnOneTwoThreeSides: true,
  /** Colour contrast must meet accessibility requirements. */
  noWrongColourContrast: true,
} as const;

/** Type representing a pattern rule key. */
export type PatternRule = keyof typeof PATTERN_RULES;
