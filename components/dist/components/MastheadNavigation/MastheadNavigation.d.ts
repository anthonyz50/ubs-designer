import { default as React } from 'react';

/** Masthead navigation variant. */
export type MastheadVariant = 'primary' | 'secondary';
export interface MastheadChild {
    /** Display label. */
    label: string;
    /** Link destination. */
    href: string;
    /** Optional description text. */
    description?: string;
}
export interface MastheadNavItem {
    /** Display label. */
    label: string;
    /** Link destination (required for items without children). */
    href?: string;
    /** Whether this item is currently active. */
    active?: boolean;
    /** Child items for mega-menu dropdown. */
    children?: MastheadChild[];
}
export interface MastheadNavigationProps extends React.HTMLAttributes<HTMLElement> {
    /** Navigation items. */
    items: MastheadNavItem[];
    /** Visual variant. @default 'primary' */
    variant?: MastheadVariant;
}
/**
 * UBS Design System MastheadNavigation component.
 *
 * Primary horizontal navigation bar for top-level site navigation.
 * Supports active item indicators, hover states, and mega-menu
 * dropdowns for items with children.
 *
 * @example
 * ```tsx
 * <MastheadNavigation
 *   items={[
 *     { label: 'Home', href: '/', active: true },
 *     {
 *       label: 'Services',
 *       children: [
 *         { label: 'Wealth Management', href: '/wealth', description: 'Private banking solutions' },
 *         { label: 'Investment Banking', href: '/ib', description: 'Capital markets' },
 *       ],
 *     },
 *     { label: 'About', href: '/about' },
 *   ]}
 *   variant="primary"
 * />
 * ```
 */
export declare const MastheadNavigation: React.ForwardRefExoticComponent<MastheadNavigationProps & React.RefAttributes<HTMLElement>>;
