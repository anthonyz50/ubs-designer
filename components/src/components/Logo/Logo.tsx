import React, { forwardRef } from 'react';
import styles from './Logo.module.css';

/** Logo display variant. */
export type LogoVariant = 'full' | 'symbol' | 'wordmark';

/** Logo colour options per UBS guidelines. */
export type LogoColour = 'black' | 'white' | 'gray';

export interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
  /**
   * Size of the logo in pixels (width).
   * Can also accept an ISO format string like 'A4' for proportional sizing.
   * @default 120
   */
  size?: number | string;
  /** Logo variant: full (keys + wordmark), symbol (keys only), wordmark (text only). @default 'full' */
  variant?: LogoVariant;
  /** Colour scheme. @default 'black' */
  colour?: LogoColour;
  /**
   * Tab variant: adds a semi-transparent background tab for use over images.
   * @default false
   */
  tab?: boolean;
}

/** Map ISO format strings to approximate widths. */
const ISO_SIZES: Record<string, number> = {
  A0: 400,
  A1: 320,
  A2: 240,
  A3: 180,
  A4: 140,
  A5: 110,
  A6: 80,
  A7: 60,
  A8: 48,
};

/** Map colour prop to fill value. */
const COLOUR_MAP: Record<LogoColour, string> = {
  black: '#000000',
  white: '#FFFFFF',
  gray: '#7A7870',
};

/**
 * UBS three keys symbol SVG path.
 * Simplified representation of the iconic UBS three-keys logo.
 */
const ThreeKeysSymbol: React.FC<{ fill: string }> = ({ fill }) => (
  <g fill={fill}>
    {/* Key 1 (left) */}
    <path d="M4 2C4 0.9 4.9 0 6 0C7.1 0 8 0.9 8 2C8 2.74 7.6 3.39 7 3.73V8H5V3.73C4.4 3.39 4 2.74 4 2ZM5.5 8.5H6.5V10H5.5V8.5ZM5 10.5H7V12H5V10.5Z" />
    {/* Key 2 (centre) */}
    <path d="M11 2C11 0.9 11.9 0 13 0C14.1 0 15 0.9 15 2C15 2.74 14.6 3.39 14 3.73V8H12V3.73C11.4 3.39 11 2.74 11 2ZM12.5 8.5H13.5V10H12.5V8.5ZM12 10.5H14V12H12V10.5Z" />
    {/* Key 3 (right) */}
    <path d="M18 2C18 0.9 18.9 0 20 0C21.1 0 22 0.9 22 2C22 2.74 21.6 3.39 21 3.73V8H19V3.73C18.4 3.39 18 2.74 18 2ZM19.5 8.5H20.5V10H19.5V8.5ZM19 10.5H21V12H19V10.5Z" />
  </g>
);

/**
 * UBS wordmark "UBS" in Frutiger Bold.
 * Rendered as text for sharp rendering at all sizes.
 */
const UBSWordmark: React.FC<{ fill: string; x: number }> = ({ fill, x }) => (
  <text
    x={x}
    y="10"
    fill={fill}
    fontFamily="'Frutiger', Arial, sans-serif"
    fontWeight="700"
    fontSize="14"
    letterSpacing="0.1em"
    dominantBaseline="central"
    textAnchor="start"
  >
    UBS
  </text>
);

/**
 * UBS Design System Logo component.
 *
 * Renders the UBS logo as an SVG following brand guidelines:
 * - Three keys symbol + "UBS" wordmark (full variant)
 * - Symbol only or wordmark only variants
 * - Clear space: minimum 1/3 of the symbol height (k) on all sides
 * - Available in black, white, or gray
 * - Optional tab variant for use over photographs
 *
 * @example
 * ```tsx
 * <Logo variant="full" colour="black" size={120} />
 * <Logo variant="symbol" colour="white" size="A4" tab />
 * ```
 */
export const Logo = forwardRef<SVGSVGElement, LogoProps>(
  (
    {
      size = 120,
      variant = 'full',
      colour = 'black',
      tab = false,
      className,
      ...rest
    },
    ref
  ) => {
    // Resolve size
    const resolvedWidth = typeof size === 'string'
      ? (ISO_SIZES[size.toUpperCase()] ?? 120)
      : size;

    const fill = COLOUR_MAP[colour];

    // Calculate dimensions based on variant
    // Symbol viewBox: 26 x 12, Wordmark needs additional ~30 units
    let viewBoxWidth: number;
    let viewBoxHeight: number;

    switch (variant) {
      case 'symbol':
        viewBoxWidth = 26;
        viewBoxHeight = 12;
        break;
      case 'wordmark':
        viewBoxWidth = 34;
        viewBoxHeight = 20;
        break;
      case 'full':
      default:
        viewBoxWidth = 60;
        viewBoxHeight = 20;
        break;
    }

    // Clear space: 1/3 k minimum (k = symbol height)
    const clearSpace = viewBoxHeight / 3;
    const paddedViewBoxWidth = viewBoxWidth + clearSpace * 2;
    const paddedViewBoxHeight = viewBoxHeight + clearSpace * 2;

    const aspectRatio = paddedViewBoxHeight / paddedViewBoxWidth;
    const resolvedHeight = Math.round(resolvedWidth * aspectRatio);

    const classNames = [
      styles.logo,
      tab ? styles.tab : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <svg
        ref={ref}
        className={classNames}
        width={resolvedWidth}
        height={resolvedHeight}
        viewBox={`0 0 ${paddedViewBoxWidth} ${paddedViewBoxHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="UBS Logo"
        {...rest}
      >
        {tab && (
          <rect
            x="0"
            y="0"
            width={paddedViewBoxWidth}
            height={paddedViewBoxHeight}
            fill={colour === 'white' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.85)'}
            className={styles.tabBackground}
          />
        )}

        <g transform={`translate(${clearSpace}, ${clearSpace})`}>
          {(variant === 'full' || variant === 'symbol') && (
            <g transform={variant === 'full' ? `translate(0, ${(viewBoxHeight - 12) / 2})` : undefined}>
              <ThreeKeysSymbol fill={fill} />
            </g>
          )}

          {(variant === 'full' || variant === 'wordmark') && (
            <UBSWordmark
              fill={fill}
              x={variant === 'full' ? 28 : 0}
            />
          )}
        </g>
      </svg>
    );
  }
);

Logo.displayName = 'Logo';
