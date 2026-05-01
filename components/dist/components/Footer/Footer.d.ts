import { default as React } from 'react';

/** Footer visual variant. */
export type FooterVariant = 'standard' | 'minimal';
export interface PageFooterLink {
    /** Link display text. */
    label: string;
    /** Link destination URL. */
    href: string;
    /** Whether the link opens in a new tab. @default false */
    external?: boolean;
}
export interface FooterColumn {
    /** Column heading. */
    title: string;
    /** Links within this column. */
    links: PageFooterLink[];
}
export interface PageFooterProps extends React.HTMLAttributes<HTMLElement> {
    /** Logo element to display in the footer. */
    logo?: React.ReactNode;
    /** Array of link columns for the main footer area. */
    columns?: FooterColumn[];
    /** Legal text displayed in the bottom bar. */
    legal?: React.ReactNode;
    /** Copyright text displayed in the bottom bar. */
    copyright?: string;
    /** Visual variant of the footer. @default 'standard' */
    variant?: FooterVariant;
}
/**
 * UBS Design System Footer component.
 *
 * Standard page footer with logo, link columns, legal text,
 * and copyright information. Supports standard and minimal variants.
 *
 * @example
 * ```tsx
 * <Footer
 *   logo={<Logo variant="keys" />}
 *   columns={[
 *     {
 *       title: 'Services',
 *       links: [
 *         { label: 'Wealth Management', href: '/wealth' },
 *         { label: 'Investment Banking', href: '/ib' },
 *       ],
 *     },
 *   ]}
 *   legal="This is for informational purposes only."
 *   copyright="© 2024 UBS Group AG. All rights reserved."
 * />
 * ```
 */
export declare const PageFooter: React.ForwardRefExoticComponent<PageFooterProps & React.RefAttributes<HTMLElement>>;
