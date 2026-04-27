import { default as React } from 'react';

/** A single breadcrumb item. */
export interface BreadcrumbItem {
    /** Display label for the breadcrumb. */
    label: string;
    /** URL the breadcrumb links to. Omit for the current page. */
    href?: string;
}
/**
 * Props for the {@link Breadcrumbs} component.
 */
export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
    /** Ordered list of breadcrumb items. The last item is treated as the current page. */
    items: BreadcrumbItem[];
    /** Separator element rendered between items. @default "/" */
    separator?: React.ReactNode;
    /** Maximum number of visible items before collapsing middle items. */
    maxItems?: number;
}
/**
 * Breadcrumb navigation following UBS brand guidelines.
 *
 * Collapses middle items with an ellipsis button when `maxItems` is exceeded.
 *
 * @example
 * ```tsx
 * <Breadcrumbs
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: 'Widget' },
 *   ]}
 *   maxItems={3}
 * />
 * ```
 */
export declare const Breadcrumbs: React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLElement>>;
