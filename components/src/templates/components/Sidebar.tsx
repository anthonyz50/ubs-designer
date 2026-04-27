/**
 * @module Sidebar
 * @description Reusable sidebar navigation for page templates.
 *
 * Collapsible with icons-only mode. Active item uses UBS Red left border.
 *
 * @example
 * ```tsx
 * <Sidebar
 *   items={[
 *     { label: 'Dashboard', href: '/', icon: <DashIcon />, active: true },
 *     { label: 'Settings', href: '/settings', badge: '3' },
 *   ]}
 *   collapsed={false}
 *   onToggle={() => {}}
 * />
 * ```
 */
import React, { forwardRef } from 'react';
import { Badge } from '../../components/Badge/Badge';
import styles from './Sidebar.module.css';

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
export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ items, collapsed = false, onToggle, className, ...rest }, ref) => {
    const classes = [
      styles.sidebar,
      collapsed ? styles.collapsed : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <aside ref={ref} className={classes} aria-label="Sidebar navigation" {...rest}>
        <button
          type="button"
          className={styles.toggleButton}
          onClick={onToggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <span className={styles.toggleIcon} aria-hidden="true">
            {collapsed ? '›' : '‹'}
          </span>
        </button>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {items.map((item) => {
              const itemClasses = [
                styles.navItem,
                item.active ? styles.navItemActive : '',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={itemClasses}
                    aria-current={item.active ? 'page' : undefined}
                    title={collapsed ? item.label : undefined}
                  >
                    {item.icon && (
                      <span className={styles.navItemIcon}>{item.icon}</span>
                    )}
                    {!collapsed && (
                      <span className={styles.navItemLabel}>{item.label}</span>
                    )}
                    {item.badge && !collapsed && (
                      <Badge variant="red" size="sm">
                        {item.badge}
                      </Badge>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    );
  },
);

Sidebar.displayName = 'Sidebar';
