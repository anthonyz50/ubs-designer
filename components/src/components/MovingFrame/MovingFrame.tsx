/**
 * @module MovingFrame
 * @description UBS's distinctive "Moving Frame" design element.
 *
 * A dynamic content overlay positioned on images. Right-aligned with variable height.
 *
 * **UBS Rules enforced:**
 * - No centred placement (always right-aligned)
 * - No left-aligned logo
 * - No bleeding to edge (always has margin)
 * - Transparent variant: 80% opacity white
 * - Opaque variant: 100% white
 * - Max half width for portrait/square images
 * - Max half height for landscape images
 *
 * **Animation (when `animated` prop is true):**
 * - Frame slides in from the right with spring easing (600ms)
 * - Content fades in with 200ms delay after frame settles
 * - Respects prefers-reduced-motion
 *
 * @example
 * ```tsx
 * <MovingFrame
 *   variant="transparent"
 *   backgroundSrc="/hero.jpg"
 *   backgroundAlt="UBS headquarters"
 *   animated
 * >
 *   <h2>Our commitment</h2>
 *   <p>Building the future of wealth management.</p>
 * </MovingFrame>
 * ```
 */
import { forwardRef, type ReactNode, type HTMLAttributes, type CSSProperties } from 'react';
import styles from './MovingFrame.module.css';

/** Frame opacity variant. */
export type MovingFrameVariant = 'transparent' | 'opaque';

export interface MovingFrameProps extends HTMLAttributes<HTMLDivElement> {
  /** Overlay variant. `transparent` = 80% white, `opaque` = 100% white. Defaults to `'transparent'`. */
  variant?: MovingFrameVariant;
  /**
   * Maximum width of the frame as a CSS value.
   * For portrait/square images: max 50% width.
   * For landscape images: max 50% height.
   * Defaults to `'50%'`.
   */
  maxWidth?: string;
  /**
   * Background image source URL.
   * If not provided, expects `backgroundElement` or styles the container without a background.
   */
  backgroundSrc?: string;
  /** Alt text for the background image. Required when `backgroundSrc` is provided. */
  backgroundAlt?: string;
  /** Custom background element (e.g. <video>, <picture>). Takes precedence over `backgroundSrc`. */
  backgroundElement?: ReactNode;
  /** Aspect ratio of the container. Defaults to `'16 / 9'`. */
  aspectRatio?: string;
  /**
   * Enable animated entrance. When true, the frame slides in from the right
   * with spring easing (600ms) and content fades in after a 200ms delay.
   * Defaults to `false`.
   */
  animated?: boolean;
  /** Frame overlay content. */
  children?: ReactNode;
}

/**
 * MovingFrame — UBS distinctive content overlay on images.
 *
 * Enforces right-alignment, margin from edges, and correct opacity per variant.
 * Never allows centred or left-aligned placement.
 * When animated, uses CSS animations for entrance effect with spring easing.
 */
export const MovingFrame = forwardRef<HTMLDivElement, MovingFrameProps>(
  (
    {
      variant = 'transparent',
      maxWidth = '50%',
      backgroundSrc,
      backgroundAlt = '',
      backgroundElement,
      aspectRatio = '16 / 9',
      animated = false,
      children,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const containerStyle: CSSProperties = {
      aspectRatio,
      ...style,
    };

    const frameStyle: CSSProperties = {
      maxWidth,
    };

    const containerClasses = [styles.container, className].filter(Boolean).join(' ');
    const frameClasses = [
      styles.frame,
      styles[variant],
      animated ? styles.animated : '',
    ]
      .filter(Boolean)
      .join(' ');

    const contentClasses = [
      styles.content,
      animated ? styles.contentAnimated : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={containerClasses} style={containerStyle} {...rest}>
        {/* Background layer */}
        <div className={styles.background} aria-hidden="true">
          {backgroundElement || (
            backgroundSrc ? (
              <img src={backgroundSrc} alt={backgroundAlt} loading="lazy" />
            ) : null
          )}
        </div>

        {/* Overlay frame — always right-aligned, never centred, never bleeding to edge */}
        <div className={frameClasses} style={frameStyle}>
          <div className={contentClasses}>
            {children}
          </div>
        </div>
      </div>
    );
  },
);

MovingFrame.displayName = 'MovingFrame';

export default MovingFrame;
