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
/**
 * Logo positioning for static social media content.
 *
 * @remarks
 * Right-aligned Logo Tab in the bottom-right corner.
 * No logo on gallery uploads where cropped in preview.
 * Logo on first and last image of slider content.
 */
export declare const STATIC_CONTENT: {
    /** Logo position for static posts. */
    readonly logoPosition: "right-aligned Logo Tab (bottom-right corner)";
    /** No logo on gallery uploads where cropped in preview. */
    readonly logoOnGallery: "No logo on gallery uploads where cropped in preview";
    /** Logo on first and last image of slider content. */
    readonly logoOnSlider: "Logo on first and last image";
};
/**
 * Logo positioning for animated/video social media content.
 *
 * @remarks
 * Left-aligned Logo Tab animation with watermark in the top-left corner.
 * Every video must end with a logo outro with sound.
 */
export declare const ANIMATED_CONTENT: {
    /** Logo position for animated content. */
    readonly logoPosition: "left-aligned Logo Tab animation with watermark (top-left corner)";
    /** Logo outro with sound per motion design guidelines. */
    readonly logoOutro: "Logo outro with sound per motion design guidelines";
};
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
export declare const SOCIAL_MEDIA_COLOUR_DIRECTIONS: Record<string, SocialMediaColourDirection>;
/**
 * Supported social media platforms and their content formats.
 *
 * @remarks
 * Each platform has specific content types available for UBS branded content.
 */
export declare const PLATFORM_SPECS: Record<string, readonly string[]>;
/** All supported social media platform names. */
export type SocialMediaPlatform = keyof typeof PLATFORM_SPECS;
/**
 * Available template aspect ratios for social media content.
 */
export declare const TEMPLATE_FORMATS: readonly ["Square 1:1", "Portrait 4:5", "Vertical 9:16", "Wide 16:9"];
/** Type representing a valid template format. */
export type TemplateFormat = typeof TEMPLATE_FORMATS[number];
/**
 * Social media usage rules. All restrictions are active (true).
 *
 * @remarks
 * These rules ensure brand consistency across social media platforms.
 */
export declare const SOCIAL_MEDIA_RULES: {
    /** Logo Tab must not be cropped in gallery previews. */
    readonly noCroppedLogoTabInGallery: true;
    /** Watermarks are only for animated/video content, never static. */
    readonly noWatermarkOnStaticContent: true;
    /** Logo Tab must not appear on multiple images in a set. */
    readonly noLogoTabOnMultipleImages: true;
    /** Content must not overlay permanent navigation elements. */
    readonly noOverlayOfPermanentNavElements: true;
    /** No collage-style layouts. */
    readonly noCollageLayouts: true;
    /** Source attribution must not connect to the Impulse. */
    readonly noSourceConnectedToImpulse: true;
};
/** Type representing a social media rule key. */
export type SocialMediaRule = keyof typeof SOCIAL_MEDIA_RULES;
