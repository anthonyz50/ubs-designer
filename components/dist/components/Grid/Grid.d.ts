import { default as React } from 'react';

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
export declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
