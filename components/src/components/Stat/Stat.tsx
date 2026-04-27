/**
 * @module Stat
 * @description Financial statistic display component following UBS brand guidelines.
 *
 * Designed for dashboards showing KPIs, prices, P&L, and other numeric metrics
 * with optional change indicators.
 *
 * @example
 * ```tsx
 * <Stat
 *   label="Portfolio Value"
 *   value="1,234,567"
 *   prefix="$"
 *   change={{ value: 2.34, direction: 'up' }}
 *   size="lg"
 * />
 * ```
 */
import { forwardRef, type HTMLAttributes } from 'react';
import styles from './Stat.module.css';

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

const CHANGE_CLASS: Record<ChangeDirection, string> = {
  up: styles.changeUp,
  down: styles.changeDown,
  flat: styles.changeFlat,
};

const CHANGE_ARROW: Record<ChangeDirection, string> = {
  up: '▲',
  down: '▼',
  flat: '–',
};

/**
 * Stat — large numeric display for financial dashboards and KPIs.
 */
export const Stat = forwardRef<HTMLDivElement, StatProps>(
  (
    {
      label,
      value,
      change,
      prefix,
      suffix,
      size = 'md',
      loading = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = [styles.stat, styles[size], className].filter(Boolean).join(' ');

    if (loading) {
      return (
        <div ref={ref} className={classes} aria-busy="true" {...rest}>
          <div className={`${styles.skeleton} ${styles.skeletonLabel}`} />
          <div className={`${styles.skeleton} ${styles.skeletonValue}`} />
          <div className={`${styles.skeleton} ${styles.skeletonChange}`} />
        </div>
      );
    }

    return (
      <div ref={ref} className={classes} {...rest}>
        <span className={styles.label}>{label}</span>
        <span className={styles.valueRow}>
          {prefix && <span className={styles.prefix}>{prefix}</span>}
          <span className={styles.value}>{value}</span>
          {suffix && <span className={styles.suffix}>{suffix}</span>}
        </span>
        {change && (
          <span className={`${styles.change} ${CHANGE_CLASS[change.direction]}`}>
            <span className={styles.arrow} aria-hidden="true">
              {CHANGE_ARROW[change.direction]}
            </span>
            <span>
              {change.value > 0 ? '+' : ''}
              {change.value}%
            </span>
          </span>
        )}
      </div>
    );
  },
);

Stat.displayName = 'Stat';

export default Stat;
