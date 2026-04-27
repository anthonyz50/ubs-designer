/**
 * UBS Design System — Illustration Tokens
 *
 * Style specifications, colour layering, animation rules, and constraints.
 * Source: ubs.frontify.com
 *
 * @remarks
 * UBS illustrations are hand-drawn in character but created digitally.
 * Human proportions are deliberately non-realistic: small head, short torso,
 * long legs, large feet. No facial expressions.
 * White is always the dominant colour.
 */

// ─── Style ───────────────────────────────────────────────────────────

/**
 * Illustration style specifications.
 *
 * @remarks
 * Technique: hand-drawn characteristics created digitally.
 * Line weight is a firm pen stroke, minimum 1px in digital, optically adjusted when scaling.
 * Abstract where possible, accurate where appropriate. Grasp the essence.
 */
export const ILLUSTRATION_STYLE = {
  /** Hand-drawn characteristics created digitally. */
  technique: 'Hand-drawn characteristics created digitally',
  /** Firm pen stroke. Minimum 1px in digital. Optically adjust when scaling. */
  lineWeight: 'Firm pen stroke. Minimum 1px in digital. Optically adjust when scaling.',
  /** Abstract where possible, accurate where appropriate. Grasp the essence. */
  levelOfDetail: 'Abstract where possible, accurate where appropriate. Grasp the essence.',
  /** NOT realistic: small head, short torso, long legs, large feet. */
  humanProportions: 'NOT realistic: small head, short torso, long legs, large feet',
  /** Illustrations must not include facial expressions. */
  noFacialExpressions: true,
} as const;

// ─── Colour Layering ─────────────────────────────────────────────────

/**
 * Colour layering system for illustrations.
 *
 * @remarks
 * Apply layers in order, building up from simple to complex.
 * White is always the dominant colour.
 * Bordeaux II (#8A000A) may be used at ~10% for large/complex illustrations.
 */
export const COLOUR_LAYERS = [
  'Black lines with accent Red lines',
  'Black lines with accent Red fill',
  'Black lines, Red accent fill, Black fill',
  'Black lines, Red accent fill, Black and Warm Grays fill',
] as const;

/** Type representing a valid colour layer level (1-indexed). */
export type ColourLayerLevel = 1 | 2 | 3 | 4;

/** The dominant colour in all UBS illustrations. Always white. */
export const ILLUSTRATION_DOMINANT_COLOUR = 'white' as const;

/**
 * Additional colour for large/complex illustrations.
 *
 * @remarks
 * Bordeaux II is used at approximately 10% of the illustration area.
 * Only for large or complex illustrations.
 */
export const ILLUSTRATION_ADDITIONAL_COLOUR = {
  /** Colour name in the UBS palette. */
  name: 'Bordeaux II',
  /** Hex value. */
  hex: '#8A000A',
  /** Target usage as percentage of illustration area. */
  usage: '~10% of illustration. For large/complex illustrations only.',
} as const;

// ─── Animation ───────────────────────────────────────────────────────

/**
 * Illustration animation specifications.
 *
 * @remarks
 * 2D animation that maintains the flat illustration style.
 * Movement must be natural and human-like, never stiff or cartoonish.
 * Speed variation creates realistic movement. Subtle boiling line effect for hand-drawn charm.
 */
export const ILLUSTRATION_ANIMATION = {
  /** 2D animation maintaining flat illustration style. */
  style: '2D animation maintaining flat illustration style',
  /** Natural, human-like movement. No stiffness or cartoonish behaviour. */
  movement: 'Natural, human-like. No stiffness or cartoonish.',
  /** Vary speed for realistic movement. */
  easing: 'Vary speed for realistic movement',
  /** Subtle effect for hand-drawn charm. */
  boilingLineEffect: 'Subtle, for hand-drawn charm',
} as const;

/**
 * Illustration animation rules. All restrictions are active (true).
 */
export const ILLUSTRATION_ANIMATION_RULES = {
  /** Animation must not disrupt the shape of illustrated objects. */
  noDisruptionOfShape: true,
  /** Movement must not be cartoonish or exaggerated. */
  noCartoonishMovement: true,
  /** Avoid overcomplicated animation sequences. */
  noOvercomplicatedAnimation: true,
  /** Only animate elements that are essential to the message. */
  animateOnlyEssential: true,
} as const;

// ─── Illustration Rules ──────────────────────────────────────────────

/**
 * Illustration usage rules. All restrictions are active (true).
 *
 * @remarks
 * These rules ensure visual consistency across all UBS illustrations.
 * Line width, colour palette, level of detail, and composition must
 * remain consistent with the brand.
 */
export const ILLUSTRATION_RULES = {
  /** Do not overuse colours beyond the layering system. */
  noOveruseOfColours: true,
  /** Avoid too many filled areas; white should dominate. */
  noTooManyFilledAreas: true,
  /** Only use colours from the UBS palette. */
  noOtherColoursBeyondPalette: true,
  /** Lines must not be too thin and rigid. */
  noTooThinAndRigid: true,
  /** Lines must not be too thick and rigid. */
  noTooThickAndRigid: true,
  /** Lines must not be too wobbly. */
  noTooWobbly: true,
  /** Maintain consistent line width throughout. */
  noDifferentLineWidths: true,
  /** Avoid excessive detail; grasp the essence. */
  noTooManyDetails: true,
  /** Style must not become too cartoonish. */
  noTooCartoonish: true,
  /** Do not fill backgrounds with colour. */
  noFilledWithBackgroundColour: true,
  /** No close-up compositions. */
  noCloseUps: true,
  /** No obvious 3D effects. */
  noObvious3D: true,
  /** Never combine illustrations with photography. */
  noCombinationWithPhotography: true,
  /** Illustrations must not be used as icons. */
  noIllustrationsAsIcons: true,
  /** Style must not be too sketchy. */
  noTooSketchy: true,
} as const;

/** Type representing an illustration rule key. */
export type IllustrationRule = keyof typeof ILLUSTRATION_RULES;
