import { default as React } from 'react';

/** A single sidebar navigation item. */
export interface SidebarItem {
    /** Unique identifier for the item. */
    id: string;
    /** Display label. */
    label: string;
    /** Optional icon element. */
    icon?: React.ReactNode;
    /** Nested child items for tree navigation. */
    children?: SidebarItem[];
    /** Whether the item is disabled. */
    disabled?: boolean;
}
/** Visual variant of the sidebar. */
export type SidebarVariant = 'light' | 'dark';
/**
 * Props for the {@link Sidebar} component.
 */
export interface SidebarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
    /** Tree of navigation items. */
    items: SidebarItem[];
    /** ID of the currently active item. */
    activeId?: string;
    /** Callback fired when a navigation item is selected. */
    onSelect?: (id: string) => void;
    /** Whether the sidebar is in collapsed (icon-only) mode. @default false */
    collapsed?: boolean;
    /** Callback fired when the collapse state changes. */
    onCollapse?: (collapsed: boolean) => void;
    /** Width of the sidebar in pixels. @default 260 */
    width?: number;
    /** Visual variant. @default 'light' */
    variant?: SidebarVariant;
}
/**
 * Side navigation panel component with collapsible tree navigation.
 *
 * Uses proper ARIA navigation roles and keyboard support.
 *
 * @example
 * ```tsx
 * <Sidebar
 *   items={navItems}
 *   activeId="dashboard"
 *   onSelect={handleNav}
 *   collapsed={isMobile}
 *   variant="dark"
 * />
 * ```
 */
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLElement>>;
export { Sidebar };
