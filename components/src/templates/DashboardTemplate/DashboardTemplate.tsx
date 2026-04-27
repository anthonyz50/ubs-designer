/**
 * @module DashboardTemplate
 * @description Full-page dashboard layout composing UBS Design System components.
 *
 * Features a Navbar at top with logo and user avatar, collapsible sidebar,
 * stats grid, charts row, recent activity list, and action bar.
 *
 * @example
 * ```tsx
 * <DashboardTemplate
 *   title="Portfolio Dashboard"
 *   user={{ name: 'John Doe' }}
 *   stats={[
 *     { label: 'Total Assets', value: '1,234,567', prefix: '$', change: { value: 2.3, direction: 'up' } },
 *   ]}
 *   charts={[{ type: 'donut', data: chartData }]}
 *   recentActivity={{ items: [{ primary: 'Trade executed', secondary: '10:30 AM' }] }}
 *   notifications={{ count: 5 }}
 * />
 * ```
 */
import React, { forwardRef, useState, useCallback } from 'react';
import {
  Navbar,
  Logo,
  Avatar,
  Badge,
  Grid,
  Stat,
  DataViz,
  List,
  ActionBar,
  type StatProps,
  type DataVizProps,
  type ListItem,
  type ActionBarAction,
  type NavbarItem,
} from '../../components';
import { Sidebar, type SidebarItem } from '../components/Sidebar';
import styles from './DashboardTemplate.module.css';

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
export const DashboardTemplate = forwardRef<HTMLDivElement, DashboardTemplateProps>(
  (
    {
      title,
      user,
      stats = [],
      charts = [],
      recentActivity,
      notifications,
      sidebarItems = [],
      navItems = [],
      primaryAction,
      secondaryAction,
      className,
      ...rest
    },
    ref,
  ) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const toggleSidebar = useCallback(() => {
      setSidebarCollapsed((prev) => !prev);
    }, []);

    const toggleMobileSidebar = useCallback(() => {
      setMobileSidebarOpen((prev) => !prev);
    }, []);

    const classes = [styles.dashboard, className ?? ''].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...rest}>
        {/* ─── Navbar ─── */}
        <Navbar
          logo={<Logo variant="full" colour="black" size={80} />}
          items={navItems}
          sticky
          actions={
            <div className={styles.navbarActions}>
              {notifications && notifications.count > 0 && (
                <span className={styles.notificationBadge}>
                  <Badge variant="red" size="sm">
                    {notifications.count}
                  </Badge>
                </span>
              )}
              <span className={styles.userName}>{user.name}</span>
              <Avatar
                name={user.name}
                src={user.avatar}
                size="sm"
              />
            </div>
          }
        />

        {/* ─── Body: Sidebar + Main ─── */}
        <div className={styles.body}>
          {/* Mobile sidebar toggle */}
          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={toggleMobileSidebar}
            aria-label="Toggle sidebar"
          >
            ☰
          </button>

          {/* Sidebar */}
          {sidebarItems.length > 0 && (
            <>
              {/* Mobile overlay */}
              {mobileSidebarOpen && (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div
                  className={styles.sidebarOverlay}
                  onClick={toggleMobileSidebar}
                  aria-hidden="true"
                />
              )}
              <div className={`${styles.sidebarWrapper} ${mobileSidebarOpen ? styles.sidebarOpen : ''}`}>
                <Sidebar
                  items={sidebarItems}
                  collapsed={sidebarCollapsed}
                  onToggle={toggleSidebar}
                />
              </div>
            </>
          )}

          {/* ─── Main Content ─── */}
          <main className={styles.main}>
            <h1 className={styles.pageTitle}>{title}</h1>

            {/* Stats row */}
            {stats.length > 0 && (
              <section className={styles.statsSection} aria-label="Key statistics">
                <Grid columns={{ mobile: 1, tablet: 2, desktop: 4 }} gap="medium">
                  {stats.map((stat, index) => (
                    <div key={index} className={styles.statCard}>
                      <Stat {...stat} />
                    </div>
                  ))}
                </Grid>
              </section>
            )}

            {/* Charts row */}
            {charts.length > 0 && (
              <section className={styles.chartsSection} aria-label="Charts">
                <Grid
                  columns={{ mobile: 1, tablet: 1, desktop: Math.min(charts.length, 3) as 1 | 2 | 3 }}
                  gap="medium"
                >
                  {charts.map((chart, index) => (
                    <div key={index} className={styles.chartCard}>
                      <DataViz {...chart} />
                    </div>
                  ))}
                </Grid>
              </section>
            )}

            {/* Recent activity */}
            {recentActivity && recentActivity.items.length > 0 && (
              <section className={styles.activitySection} aria-label="Recent activity">
                <h2 className={styles.sectionTitle}>Recent Activity</h2>
                <List
                  items={recentActivity.items}
                  variant="divided"
                  hoverable
                />
              </section>
            )}

            {/* Action bar */}
            {primaryAction && (
              <ActionBar
                primaryAction={primaryAction}
                secondaryAction={secondaryAction}
                sticky
              />
            )}
          </main>
        </div>
      </div>
    );
  },
);

DashboardTemplate.displayName = 'DashboardTemplate';
