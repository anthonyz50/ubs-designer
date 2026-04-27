/**
 * @module Pattern
 * @description UBS key symbol pattern background component.
 *
 * Renders SVG patterns based on the UBS key symbol shape with enforced
 * colour pair combinations per colour direction.
 *
 * **Colour directions:**
 * - `gray` — Gray V (#5A5D5C) foreground on Gray VI (#404040) background
 * - `bordeaux` — Bordeaux II (#8A000A) foreground on Bordeaux III (#620004) background
 * - `bronze` — Bronze II (#946F29) foreground on Bronze III (#6C5312) background
 *
 * **Rules:**
 * - Ratio: min 1/3 height, max 3x height
 * - Variant: solid or outline
 * - Animated: subtle drift animation
 *
 * @example
 * ```tsx
 * <Pattern colourDirection="bordeaux" variant="solid" animated>
 *   <h1>Welcome</h1>
 * </Pattern>
 * ```
 */
import { forwardRef, type ReactNode, type HTMLAttributes, type CSSProperties, useId } from 'react';
import styles from './Pattern.module.css';

/** Pattern fill variant (component-level). */
export type PatternComponentVariant = 'solid' | 'outline';

/** Colour direction determines the foreground/background pair (component-level). */
export type PatternColourDirection = 'gray' | 'bordeaux' | 'bronze';

export interface PatternProps extends HTMLAttributes<HTMLDivElement> {
  /** Fill variant. `solid` fills the key shape, `outline` strokes it. Defaults to `'solid'`. */
  variant?: PatternComponentVariant;
  /** Colour direction. Determines the foreground/background pair. Defaults to `'gray'`. */
  colourDirection?: PatternColourDirection;
  /** Enable subtle drift animation. Defaults to `false`. */
  animated?: boolean;
  /**
   * Aspect ratio string. Clamped between min 1/3 and max 3.
   * Pass as a CSS aspect-ratio value, e.g. `'16 / 9'`, `'1 / 1'`.
   * Defaults to `'16 / 9'`.
   */
  ratio?: string;
  /** Content rendered above the pattern. */
  children?: ReactNode;
}

/**
 * Colour pair mapping per direction.
 * Each direction has a background colour and a foreground (pattern) colour.
 */
const COLOUR_PAIRS: Record<PatternColourDirection, { bg: string; fg: string }> = {
  gray: { bg: '#404040', fg: '#5A5D5C' },       // Gray VI bg, Gray V fg
  bordeaux: { bg: '#620004', fg: '#8A000A' },    // Bordeaux III bg, Bordeaux II fg
  bronze: { bg: '#6C5312', fg: '#946F29' },      // Bronze III bg, Bronze II fg
};

/**
 * UBS key symbol SVG path (simplified representation).
 * The three crossed keys motif.
 */
const KEY_SYMBOL_PATH =
  'M20 5L25 10L20 15L15 10ZM10 15L15 20L10 25L5 20ZM30 15L35 20L30 25L25 20Z' +
  'M20 25L25 30L20 35L15 30ZM12 8L17 13L12 18L7 13ZM28 8L33 13L28 18L23 13Z';

/**
 * Pattern — UBS key symbol pattern background.
 *
 * Renders a repeating SVG pattern of the UBS key symbol with enforced
 * colour pair combinations. Content can be placed above the pattern.
 */
export const Pattern = forwardRef<HTMLDivElement, PatternProps>(
  (
    {
      variant = 'solid',
      colourDirection = 'gray',
      animated = false,
      ratio = '16 / 9',
      children,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const patternId = useId();
    const colours = COLOUR_PAIRS[colourDirection];

    const containerClasses = [
      styles.pattern,
      animated ? styles.animated : undefined,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const containerStyle: CSSProperties = {
      backgroundColor: colours.bg,
      aspectRatio: ratio,
      ...style,
    };

    const pathProps =
      variant === 'solid'
        ? { fill: colours.fg, stroke: 'none' }
        : { fill: 'none', stroke: colours.fg, strokeWidth: 1 };

    return (
      <div ref={ref} className={containerClasses} style={containerStyle} {...rest}>
        <svg
          className={styles.patternSvg}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id={patternId}
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d={KEY_SYMBOL_PATH} {...pathProps} opacity={0.3} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>

        {children && <div className={styles.content}>{children}</div>}
      </div>
    );
  },
);

Pattern.displayName = 'Pattern';

export default Pattern;
