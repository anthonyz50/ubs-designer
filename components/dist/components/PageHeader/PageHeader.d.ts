import { default as React } from 'react';

/** Breadcrumb item definition. */
export interface PageHeaderBreadcrumb {
    /** Display label. */
    label: string;
    /** Optional URL. Last item is treated as current page (no link). */
    href?: string;
}
/** PageHeader visual variant. */
export type PageHeaderVariant = 'default' | 'impulse';
export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
    /** Page title, rendered at keyline size. */
    title: string;
    /** Optional subtitle, rendered at infoline size. */
    subtitle?: string;
    /** Breadcrumb trail above the title. */
    breadcrumbs?: PageHeaderBreadcrumb[];
    /** Actions area (buttons, etc.) aligned to the right. */
    actions?: React.ReactNode;
    /** Visual variant. 'impulse' adds the UBS Red left border. @default 'default' */
    variant?: PageHeaderVariant;
}
/**
 * UBS Design System PageHeader component.
 *
 * A composite layout pattern for page-level headers combining:
 * - Breadcrumb navigation
 * - Keyline title + infoline subtitle
 * - Optional impulse line (UBS Red left border)
 * - Right-aligned actions area
 *
 * @example
 * ```tsx
 * <PageHeader
 *   title="Portfolio Overview"
 *   subtitle="Your current holdings and performance"
 *   variant="impulse"
 *   breadcrumbs={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Wealth Management', href: '/wm' },
 *     { label: 'Portfolio Overview' },
 *   ]}
 *   actions={<Button variant="primary">New Transaction</Button>}
 * />
 * ```
 */
export declare const PageHeader: React.ForwardRefExoticComponent<PageHeaderProps & React.RefAttributes<HTMLElement>>;
