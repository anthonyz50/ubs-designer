import { ReactNode, HTMLAttributes } from 'react';

/** Supported social media platforms. */
export type SocialPlatform = 'instagram' | 'facebook' | 'youtube' | 'x' | 'linkedin';
/** Content format/aspect ratio. */
export type SocialFormat = 'square' | 'portrait' | 'vertical' | 'wide';
/** Static or animated content. Determines logo positioning. */
export type SocialVariant = 'static' | 'animated';
export interface SocialMediaTemplateProps extends HTMLAttributes<HTMLDivElement> {
    /** Target platform. Determines valid formats. */
    platform: SocialPlatform;
    /** Content format. Must be valid for the chosen platform. Defaults to `'square'`. */
    format?: SocialFormat;
    /** Static (right-aligned logo tab) or animated (left-aligned logo). Defaults to `'static'`. */
    variant?: SocialVariant;
    /** Template content. */
    children?: ReactNode;
}
/**
 * SocialMediaTemplate — wrapper for UBS social media content.
 *
 * Enforces platform-specific format rules and auto-positions the UBS logo
 * based on whether the content is static or animated.
 */
export declare const SocialMediaTemplate: import('react').ForwardRefExoticComponent<SocialMediaTemplateProps & import('react').RefAttributes<HTMLDivElement>>;
export default SocialMediaTemplate;
