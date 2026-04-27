import { HTMLAttributes } from 'react';

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
 * TradingIndicator — displays a value with directional colour coding.
 *
 * Strictly follows UBS regional trading colour rules:
 * - EMEA/US: green (#498100) positive, red (#C81219) negative
 * - APAC: red (#C81219) positive, green (#498100) negative (REVERSED)
 */
export declare const TradingIndicator: import('react').ForwardRefExoticComponent<TradingIndicatorProps & import('react').RefAttributes<HTMLSpanElement>>;
export default TradingIndicator;
