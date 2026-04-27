/**
 * @module SocialMediaTemplate
 * @description Template wrapper for UBS social media content.
 *
 * Automatically applies platform-specific formatting and logo positioning:
 * - **Static content:** Right-aligned UBS Logo Tab
 * - **Animated content:** Left-aligned UBS Logo
 *
 * **Platform rules enforced:**
 * - Instagram: square (1:1), portrait (4:5), vertical (9:16)
 * - Facebook: square (1:1), wide (16:9)
 * - YouTube: wide (16:9)
 * - X (Twitter): square (1:1), wide (16:9)
 * - LinkedIn: square (1:1), wide (16:9)
 *
 * @example
 * ```tsx
 * <SocialMediaTemplate platform="instagram" format="square" variant="static">
 *   <h2>Market Update</h2>
 *   <p>Key insights from our CIO.</p>
 * </SocialMediaTemplate>
 * ```
 */
import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import styles from './SocialMediaTemplate.module.css';

/** Supported social media platforms. */
export type SocialPlatform = 'instagram' | 'facebook' | 'youtube' | 'x' | 'linkedin';

/** Content format/aspect ratio. */
export type SocialFormat = 'square' | 'portrait' | 'vertical' | 'wide';

/** Static or animated content. Determines logo positioning. */
export type SocialVariant = 'static' | 'animated';

/** Valid format combinations per platform. */
const PLATFORM_FORMATS: Record<SocialPlatform, readonly SocialFormat[]> = {
  instagram: ['square', 'portrait', 'vertical'],
  facebook: ['square', 'wide'],
  youtube: ['wide'],
  x: ['square', 'wide'],
  linkedin: ['square', 'wide'],
} as const;

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
 * Validates format is valid for the given platform.
 * Falls back to first valid format if the combo is invalid.
 */
function resolveFormat(platform: SocialPlatform, format: SocialFormat): SocialFormat {
  const validFormats = PLATFORM_FORMATS[platform];
  if (validFormats.includes(format)) {
    return format;
  }
  if (typeof console !== 'undefined') {
    console.warn(
      `[UBS SocialMediaTemplate] Format "${format}" is not valid for platform "${platform}". ` +
      `Valid formats: ${validFormats.join(', ')}. Falling back to "${validFormats[0]}".`,
    );
  }
  return validFormats[0];
}

/**
 * SocialMediaTemplate — wrapper for UBS social media content.
 *
 * Enforces platform-specific format rules and auto-positions the UBS logo
 * based on whether the content is static or animated.
 */
export const SocialMediaTemplate = forwardRef<HTMLDivElement, SocialMediaTemplateProps>(
  (
    {
      platform,
      format = 'square',
      variant = 'static',
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const resolvedFormat = resolveFormat(platform, format);

    const isStatic = variant === 'static';
    const logoPositionClass = isStatic ? styles.logoRight : styles.logoLeft;

    const classes = [
      styles.template,
      styles[resolvedFormat],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classes}
        data-platform={platform}
        data-format={resolvedFormat}
        data-variant={variant}
        {...rest}
      >
        {/* UBS Logo Tab */}
        <div className={`${styles.logoTab} ${logoPositionClass}`}>
          <span className={styles.logoText}>UBS</span>
        </div>

        {/* Content area with safe zone */}
        <div className={styles.content}>
          <div className={styles.safeZone}>
            {children}
          </div>
        </div>
      </div>
    );
  },
);

SocialMediaTemplate.displayName = 'SocialMediaTemplate';

export default SocialMediaTemplate;
