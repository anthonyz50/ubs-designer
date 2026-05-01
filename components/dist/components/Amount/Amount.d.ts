import { default as React } from 'react';

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
declare const Amount: React.ForwardRefExoticComponent<AmountProps & React.RefAttributes<HTMLSpanElement>>;
export { Amount };
