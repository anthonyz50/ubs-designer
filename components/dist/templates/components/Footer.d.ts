import { default as React } from 'react';

/** A single footer link. */
export interface FooterLink {
    /** Display label. */
    label: string;
    /** Link URL. */
    href: string;
}
/** A group of footer links with a heading. */
export interface FooterLinkGroup {
    /** Group heading. */
    group: string;
    /** Links within this group. */
    items: FooterLink[];
}
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    /** Link groups rendered in columns. */
    links?: FooterLinkGroup[];
    /** Copyright text rendered at the bottom. */
    copyright?: string;
    /** Whether to show the UBS logo. @default true */
    showLogo?: boolean;
}
/**
 * Footer — UBS branded page footer with multi-column links.
 */
export declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;
