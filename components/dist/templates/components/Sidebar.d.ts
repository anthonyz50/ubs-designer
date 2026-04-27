import { default as React } from 'react';

/** Single sidebar navigation item. */
export interface SidebarItem {
    /** Display label for the nav link. */
    label: string;
    /** URL the nav link points to. */
    href: string;
    /** Optional icon element rendered before the label. */
    icon?: React.ReactNode;
    /** Whether this item represents the current page. */
    active?: boolean;
    /** Optional badge text (e.g. notification count). */
    badge?: string;
}
export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    /** Navigation items to render. */
    items: SidebarItem[];
    /** Whether the sidebar is collapsed to icons-only mode. @default false */
    collapsed?: boolean;
    /** Callback to toggle collapsed state. */
    onToggle?: () => void;
}
/**
 * Sidebar — collapsible navigation for dashboard and settings templates.
 */
export declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLElement>>;
