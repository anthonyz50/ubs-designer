/**
 * @module TradingIndicator
 * @description Shows positive/negative value with correct regional colour mapping.
 *
 * **Regional colour rules (UBS mandatory):**
 * - EMEA / US: green = positive, red = negative
 * - APAC: red = positive, green = negative (REVERSED)
 *
 * Trading Green: #498100
 * Trading Red: #C81219
 *
 * @example
 * ```tsx
 * <TradingIndicator value={1.25} region="emea" size="md" />
 * <TradingIndicator value={-0.5} region="apac" size="lg" />
 * ```
 */
import { forwardRef, type CSSProperties, type HTMLAttributes } from 'react';
import styles from './TradingIndicator.module.css';

const TRADING_GREEN = '#498100';
const TRADING_RED = '#C81219';

/** Supported trading regions. */
export type TradingRegion = 'emea' | 'us' | 'apac';

/** Display size. */
export type TradingIndicatorSize = 'sm' | 'md' | 'lg';

export interface TradingIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  /** Numeric value to display. Sign determines colour direction. */
  value: number;
  /** Region determines colour mapping. APAC reverses green/red. Defaults to `'emea'`. */
  region?: TradingRegion;
  /** Display size. Defaults to `'md'`. */
  size?: TradingIndicatorSize;
  /** Number of decimal places. Defaults to `2`. */
  decimals?: number;
  /** Whether to show the arrow indicator. Defaults to `true`. */
  showArrow?: boolean;
  /** Whether to show a + prefix for positive values. Defaults to `true`. */
  showSign?: boolean;
  /** Whether to show as percentage. Defaults to `false`. */
  asPercentage?: boolean;
}

/**
 * Resolves trading colours based on region.
 * EMEA/US: green=positive, red=negative.
 * APAC: red=positive, green=negative (reversed).
 */
function getTradingColours(region: TradingRegion) {
  if (region === 'apac') {
    return { positive: TRADING_RED, negative: TRADING_GREEN };
  }
  return { positive: TRADING_GREEN, negative: TRADING_RED };
}

/** Up arrow SVG path */
const ArrowUp = () => (
  <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 1.5L10.5 8.5H1.5L6 1.5Z" />
  </svg>
);

/**
 * TradingIndicator — displays a value with directional colour coding.
 *
 * Strictly follows UBS regional trading colour rules:
 * - EMEA/US: green (#498100) positive, red (#C81219) negative
 * - APAC: red (#C81219) positive, green (#498100) negative (REVERSED)
 */
export const TradingIndicator = forwardRef<HTMLSpanElement, TradingIndicatorProps>(
  (
    {
      value,
      region = 'emea',
      size = 'md',
      decimals = 2,
      showArrow = true,
      showSign = true,
      asPercentage = false,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const colours = getTradingColours(region);
    const isPositive = value > 0;
    const isNegative = value < 0;
    const isNeutral = value === 0;

    const direction = isPositive ? 'positive' : isNegative ? 'negative' : 'neutral';

    const colourValue = isPositive
      ? colours.positive
      : isNegative
        ? colours.negative
        : undefined;

    const formattedValue = Math.abs(value).toFixed(decimals);
    const prefix = isPositive && showSign ? '+' : isNegative ? '−' : '';
    const suffix = asPercentage ? '%' : '';
    const displayText = `${prefix}${formattedValue}${suffix}`;

    const classes = [
      styles.indicator,
      styles[size],
      styles[direction],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const customStyle: CSSProperties = {
      '--trading-positive': colours.positive,
      '--trading-negative': colours.negative,
      ...style,
    } as CSSProperties;

    return (
      <span
        ref={ref}
        className={classes}
        style={customStyle}
        aria-label={`${isPositive ? 'positive' : isNegative ? 'negative' : 'neutral'} ${formattedValue}${asPercentage ? ' percent' : ''}`}
        {...rest}
      >
        {showArrow && !isNeutral && (
          <span className={`${styles.arrow} ${isNegative ? styles.arrowDown : ''}`}>
            <ArrowUp />
          </span>
        )}
        <span>{displayText}</span>
      </span>
    );
  },
);

TradingIndicator.displayName = 'TradingIndicator';

export default TradingIndicator;
