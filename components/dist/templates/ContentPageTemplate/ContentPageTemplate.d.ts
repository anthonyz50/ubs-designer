import { default as React } from 'react';
import { PageHeaderBreadcrumb } from '../../components';

/** Related content item. */
export interface ContentRelatedItem {
    /** Item title. */
    title: string;
    /** Link URL. */
    href: string;
    /** Short description. */
    description?: string;
}
export interface ContentPageTemplateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
    /** Page title. */
    title: string;
    /** Page subtitle. */
    subtitle?: string;
    /** Optional hero image URL for the full-width hero section. */
    heroImage?: string;
    /** Breadcrumb trail. */
    breadcrumbs?: PageHeaderBreadcrumb[];
    /** Main content area (ReactNode). */
    content: React.ReactNode;
    /** Optional sidebar content. */
    sidebar?: React.ReactNode;
    /** Related items displayed below the main content. */
    relatedItems?: ContentRelatedItem[];
}
/**
 * ContentPageTemplate — content-focused layout with hero, sidebar, and related items.
 */
export declare const ContentPageTemplate: React.ForwardRefExoticComponent<ContentPageTemplateProps & React.RefAttributes<HTMLDivElement>>;
