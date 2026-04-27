import { default as React } from 'react';
import { StatProps, DataVizProps, ListItem, ActionBarAction, NavbarItem } from '../../components';
import { SidebarItem } from '../components/Sidebar';

/** User information for the navbar. */
export interface DashboardUser {
    /** Display name. */
    name: string;
    /** Optional avatar image URL. */
    avatar?: string;
}
/** Recent activity section configuration. */
export interface DashboardActivity {
    /** List items to display. */
    items: ListItem[];
}
/** Notification badge configuration. */
export interface DashboardNotifications {
    /** Number of unread notifications. */
    count: number;
}
export interface DashboardTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Page title shown in the header area. */
    title: string;
    /** Current user information (name, avatar). */
    user: DashboardUser;
    /** Array of stat card configurations. */
    stats?: StatProps[];
    /** Array of chart configurations. */
    charts?: DataVizProps[];
    /** Recent activity list section. */
    recentActivity?: DashboardActivity;
    /** Notification count for the badge in the navbar. */
    notifications?: DashboardNotifications;
    /** Sidebar navigation items. */
    sidebarItems?: SidebarItem[];
    /** Navbar navigation items. */
    navItems?: NavbarItem[];
    /** Primary action for the bottom action bar. */
    primaryAction?: ActionBarAction;
    /** Secondary action for the bottom action bar. */
    secondaryAction?: ActionBarAction;
}
/**
 * DashboardTemplate — full-page dashboard layout with sidebar, stats, charts, and activity.
 */
export declare const DashboardTemplate: React.ForwardRefExoticComponent<DashboardTemplateProps & React.RefAttributes<HTMLDivElement>>;
