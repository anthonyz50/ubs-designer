/**
 * UBS Design System — Social Media Tokens
 *
 * Platform specifications, template formats, logo rules, and colour directions.
 * Source: ubs.frontify.com
 *
 * @remarks
 * Static content uses right-aligned Logo Tab (bottom-right).
 * Animated content uses left-aligned Logo Tab animation with watermark (top-left)
 * plus a logo outro with sound per motion design guidelines.
 */

// ─── Static Content ──────────────────────────────────────────────────

/**
 * Logo positioning for static social media content.
 *
 * @remarks
 * Right-aligned Logo Tab in the bottom-right corner.
 * No logo on gallery uploads where cropped in preview.
 * Logo on first and last image of slider content.
 */
export const STATIC_CONTENT = {
  /** Logo position for static posts. */
  logoPosition: 'right-aligned Logo Tab (bottom-right corner)',
  /** No logo on gallery uploads where cropped in preview. */
  logoOnGallery: 'No logo on gallery uploads where cropped in preview',
  /** Logo on first and last image of slider content. */
  logoOnSlider: 'Logo on first and last image',
} as const;

// ─── Animated Content ────────────────────────────────────────────────

/**
 * Logo positioning for animated/video social media content.
 *
 * @remarks
 * Left-aligned Logo Tab animation with watermark in the top-left corner.
 * Every video must end with a logo outro with sound.
 */
export const ANIMATED_CONTENT = {
  /** Logo position for animated content. */
  logoPosition: 'left-aligned Logo Tab animation with watermark (top-left corner)',
  /** Logo outro with sound per motion design guidelines. */
  logoOutro: 'Logo outro with sound per motion design guidelines',
} as const;

// ─── Colour Directions ───────────────────────────────────────────────

/** A social media colour direction specification. */
export interface SocialMediaColourDirection {
  /** Display name of the colour direction. */
  readonly name: string;
  /** Available colours/accents. */
  readonly colours: readonly string[];
}

/**
 * Colour directions for social media content.
 *
 * @remarks
 * Basis (Gray) is the default. Specific I (Bordeaux) and Specific II (Bronze)
 * add warmth and accent colours respectively.
 */
export const SOCIAL_MEDIA_COLOUR_DIRECTIONS: Record<string, SocialMediaColourDirection> = {
  /** Default warm gray colour direction. */
  basis: {
    name: 'Gray',
    colours: ['Warm Gray', 'Pastel I'],
  },
  /** Bordeaux accent colour direction. */
  specificI: {
    name: 'Bordeaux',
    colours: ['Warm Gray', 'Bordeaux accents', 'Pastel I or Pastel II'],
  },
  /** Bronze accent colour direction. */
  specificII: {
    name: 'Bronze',
    colours: ['Warm Gray', 'Bronze accents', 'Pastel II'],
  },
} as const;

// ─── Platform Specifications ─────────────────────────────────────────

/**
 * Supported social media platforms and their content formats.
 *
 * @remarks
 * Each platform has specific content types available for UBS branded content.
 */
export const PLATFORM_SPECS: Record<string, readonly string[]> = {
  instagram: [
    'Feed',
    'Feed with source',
    'Story',
    'Story with source',
    'Reel with source',
    'Paid ad',
    'Reel with chart',
  ],
  facebook: [
    'Cover',
    'Post',
    'Video',
    'Carousel',
    'Gallery',
    'Single image',
  ],
  youtube: [
    'Video',
    'Short',
    'Thumbnail',
  ],
  x: [
    'Single image',
    'Multiple images',
  ],
  linkedin: [
    'Post',
    'Gallery',
    'Single image',
    'Slideshow',
  ],
} as const;

/** All supported social media platform names. */
export type SocialMediaPlatform = keyof typeof PLATFORM_SPECS;

// ─── Template Formats ────────────────────────────────────────────────

/**
 * Available template aspect ratios for social media content.
 */
export const TEMPLATE_FORMATS = [
  'Square 1:1',
  'Portrait 4:5',
  'Vertical 9:16',
  'Wide 16:9',
] as const;

/** Type representing a valid template format. */
export type TemplateFormat = typeof TEMPLATE_FORMATS[number];

// ─── Rules ───────────────────────────────────────────────────────────

/**
 * Social media usage rules. All restrictions are active (true).
 *
 * @remarks
 * These rules ensure brand consistency across social media platforms.
 */
export const SOCIAL_MEDIA_RULES = {
  /** Logo Tab must not be cropped in gallery previews. */
  noCroppedLogoTabInGallery: true,
  /** Watermarks are only for animated/video content, never static. */
  noWatermarkOnStaticContent: true,
  /** Logo Tab must not appear on multiple images in a set. */
  noLogoTabOnMultipleImages: true,
  /** Content must not overlay permanent navigation elements. */
  noOverlayOfPermanentNavElements: true,
  /** No collage-style layouts. */
  noCollageLayouts: true,
  /** Source attribution must not connect to the Impulse. */
  noSourceConnectedToImpulse: true,
} as const;

/** Type representing a social media rule key. */
export type SocialMediaRule = keyof typeof SOCIAL_MEDIA_RULES;
