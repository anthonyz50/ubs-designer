/**
 * @module Amount
 * @description Formatted currency/number display following UBS brand guidelines.
 *
 * Renders monetary values with proper formatting, currency symbols, and
 * trend indicators. Supports positive/negative styling for trading contexts.
 *
 * @example
 * ```tsx
 * <Amount value={1234567.89} currency="USD" showCurrency trend="up" />
 * <Amount value={-523.40} currency="GBP" showSign size="large" trend="down" />
 * ```
 */
import React, { forwardRef, useMemo } from 'react';
import styles from './Amount.module.css';

/** Size of the amount display. */
export type AmountSize = 'small' | 'medium' | 'large';

/** Trend direction for the value. */
export type AmountTrend = 'up' | 'down' | 'neutral';

/**
 * Props for the {@link Amount} component.
 */
export interface AmountProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Numeric value to display. */
  value: number;
  /** ISO 4217 currency code (e.g. 'USD', 'GBP', 'CHF'). */
  currency?: string;
  /** BCP 47 locale string for number formatting. @default 'en-GB' */
  locale?: string;
  /** Whether to show +/- sign for the value. @default false */
  showSign?: boolean;
  /** Whether to display the currency symbol/code. @default false */
  showCurrency?: boolean;
  /** Size variant. @default 'medium' */
  size?: AmountSize;
  /** Trend direction affecting colour styling. @default 'neutral' */
  trend?: AmountTrend;
}

/**
 * Currency/number display component with trend indicators and proper formatting.
 *
 * Uses `Intl.NumberFormat` for locale-aware formatting and supports
 * WCAG 2.2 AA compliant colour contrast for trend indicators.
 *
 * @example
 * ```tsx
 * <Amount value={42000} currency="CHF" showCurrency size="large" trend="up" />
 * ```
 */
const Amount = forwardRef<HTMLSpanElement, AmountProps>(
  (
    {
      value,
      currency,
      locale = 'en-GB',
      showSign = false,
      showCurrency = false,
      size = 'medium',
      trend = 'neutral',
      className,
      ...rest
    },
    ref,
  ) => {
    const formatted = useMemo(() => {
      const options: Intl.NumberFormatOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      };

      if (showCurrency && currency) {
        options.style = 'currency';
        options.currency = currency;
      }

      const absValue = Math.abs(value);
      return new Intl.NumberFormat(locale, options).format(absValue);
    }, [value, currency, locale, showCurrency]);

    const sign = useMemo(() => {
      if (!showSign) return '';
      if (value > 0) return '+';
      if (value < 0) return '\u2212'; // minus sign
      return '';
    }, [value, showSign]);

    const rootClass = [
      styles.root,
      styles[size],
      styles[trend],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const trendIcon =
      trend === 'up' ? (
        <svg
          className={styles.trendIcon}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 2L10 7H2L6 2Z"
            fill="currentColor"
          />
        </svg>
      ) : trend === 'down' ? (
        <svg
          className={styles.trendIcon}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 10L2 5H10L6 10Z"
            fill="currentColor"
          />
        </svg>
      ) : null;

    const ariaLabel = [
      trend !== 'neutral' ? `${trend === 'up' ? 'Positive' : 'Negative'} trend` : '',
      sign,
      formatted,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span
        ref={ref}
        className={rootClass}
        aria-label={ariaLabel}
        {...rest}
      >
        {trendIcon}
        {sign && <span className={styles.sign}>{sign}</span>}
        <span className={styles.value}>{formatted}</span>
      </span>
    );
  },
);

Amount.displayName = 'Amount';

export { Amount };
