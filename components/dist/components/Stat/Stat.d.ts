import { HTMLAttributes } from 'react';

/** Direction of change. */
export type ChangeDirection = 'up' | 'down' | 'flat';
/** Change indicator configuration. */
export interface StatChange {
    /** Percentage or absolute change value. */
    value: number;
    /** Direction: up (green), down (red), or flat (grey). */
    direction: ChangeDirection;
}
/** Stat display size. */
export type StatSize = 'sm' | 'md' | 'lg';
export interface StatProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Label text above the value (e.g. "Net Asset Value"). */
    label: string;
    /** The displayed value. */
    value: string | number;
    /** Change indicator with direction and value. */
    change?: StatChange;
    /** Text before the value (e.g. "$", "£"). */
    prefix?: string;
    /** Text after the value (e.g. "%", "bps"). */
    suffix?: string;
    /** Display size. Defaults to `'md'`. */
    size?: StatSize;
    /** Show loading skeleton state. */
    loading?: boolean;
}
/**
 * Stat — large numeric display for financial dashboards and KPIs.
 */
export declare const Stat: import('react').ForwardRefExoticComponent<StatProps & import('react').RefAttributes<HTMLDivElement>>;
export default Stat;
