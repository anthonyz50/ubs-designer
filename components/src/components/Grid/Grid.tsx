import React, { forwardRef } from 'react';
import styles from './Grid.module.css';

/** Responsive column configuration. */
export interface GridColumns {
  /** Columns on mobile (≥320px). @default 1 */
  mobile?: number;
  /** Columns on tablet (≥768px). @default 2 */
  tablet?: number;
  /** Columns on desktop (≥1024px). @default 3 */
  desktop?: number;
  /** Columns on wide screens (≥1440px). @default 4 */
  wide?: number;
}

/** Gap sizes. */
export type GridGap = 'none' | 'small' | 'medium' | 'large';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns. Can be a number (applies to all breakpoints)
   * or a responsive object.
   * @default { mobile: 1, tablet: 2, desktop: 3, wide: 4 }
   */
  columns?: number | GridColumns;
  /** Gap between grid items. @default 'medium' */
  gap?: GridGap;
  /** Grid content (children become grid items). */
  children?: React.ReactNode;
}

/**
 * UBS Design System Grid component.
 *
 * A responsive CSS Grid layout following UBS breakpoints:
 * - Mobile: ≥320px
 * - Tablet: ≥768px
 * - Desktop: ≥1024px
 * - Wide: ≥1440px
 *
 * @example
 * ```tsx
 * <Grid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="medium">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Grid>
 *
 * <Grid columns={4} gap="large">
 *   {items.map(item => <Card key={item.id}>{item.name}</Card>)}
 * </Grid>
 * ```
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns = { mobile: 1, tablet: 2, desktop: 3, wide: 4 },
      gap = 'medium',
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const resolvedColumns: GridColumns =
      typeof columns === 'number'
        ? { mobile: columns, tablet: columns, desktop: columns, wide: columns }
        : {
            mobile: columns.mobile ?? 1,
            tablet: columns.tablet ?? 2,
            desktop: columns.desktop ?? 3,
            wide: columns.wide ?? 4,
          };

    const cssVars = {
      '--grid-cols-mobile': resolvedColumns.mobile,
      '--grid-cols-tablet': resolvedColumns.tablet,
      '--grid-cols-desktop': resolvedColumns.desktop,
      '--grid-cols-wide': resolvedColumns.wide,
      ...style,
    } as React.CSSProperties;

    const classNames = [
      styles.grid,
      styles[`gap-${gap}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        style={cssVars}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';
