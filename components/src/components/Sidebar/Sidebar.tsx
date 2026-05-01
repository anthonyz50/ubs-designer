/**
 * @module Sidebar
 * @description Side navigation panel following UBS brand guidelines.
 *
 * A collapsible side navigation with hierarchical menu items, sections,
 * and active state management. Suitable for application-level navigation.
 *
 * @example
 * ```tsx
 * <Sidebar
 *   items={[
 *     {
 *       id: 'dashboard',
 *       label: 'Dashboard',
 *       icon: <DashboardIcon />,
 *     },
 *     {
 *       id: 'portfolio',
 *       label: 'Portfolio',
 *       icon: <PortfolioIcon />,
 *       children: [
 *         { id: 'overview', label: 'Overview' },
 *         { id: 'holdings', label: 'Holdings' },
 *       ],
 *     },
 *   ]}
 *   activeId="overview"
 *   onSelect={(id) => navigate(id)}
 * />
 * ```
 */
import React, { forwardRef, useState, useCallback } from 'react';
import styles from './Sidebar.module.css';

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
 * Check if an item or any of its children match the active ID.
 */
function isItemActive(item: SidebarItem, activeId?: string): boolean {
  if (item.id === activeId) return true;
  if (item.children) {
    return item.children.some((child) => isItemActive(child, activeId));
  }
  return false;
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
const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      items,
      activeId,
      onSelect,
      collapsed = false,
      onCollapse,
      width = 260,
      variant = 'light',
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const [expandedGroups, setExpandedGroups] = useState<Set<string>>(() => {
      // Auto-expand groups containing the active item
      const expanded = new Set<string>();
      const findParents = (items: SidebarItem[]) => {
        for (const item of items) {
          if (item.children && isItemActive(item, activeId)) {
            expanded.add(item.id);
            findParents(item.children);
          }
        }
      };
      findParents(items);
      return expanded;
    });

    const toggleGroup = useCallback((id: string) => {
      setExpandedGroups((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    }, []);

    const handleSelect = useCallback(
      (id: string) => {
        onSelect?.(id);
      },
      [onSelect],
    );

    const handleCollapseToggle = useCallback(() => {
      onCollapse?.(!collapsed);
    }, [collapsed, onCollapse]);

    const rootClass = [
      styles.root,
      styles[variant],
      collapsed ? styles.collapsed : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const rootStyle: React.CSSProperties = {
      ...style,
      width: collapsed ? 64 : width,
    };

    const renderItem = (item: SidebarItem, depth: number = 0) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedGroups.has(item.id);
      const isActive = item.id === activeId;
      const isGroupActive = hasChildren && isItemActive(item, activeId);

      const itemClass = [
        styles.item,
        isActive ? styles.itemActive : '',
        isGroupActive && !isActive ? styles.itemGroupActive : '',
        item.disabled ? styles.itemDisabled : '',
      ]
        .filter(Boolean)
        .join(' ');

      const paddingLeft = collapsed ? 0 : 16 + depth * 16;

      return (
        <li key={item.id} className={styles.listItem} role="none">
          <button
            className={itemClass}
            type="button"
            style={{ paddingLeft }}
            onClick={() => {
              if (item.disabled) return;
              if (hasChildren) {
                toggleGroup(item.id);
              } else {
                handleSelect(item.id);
              }
            }}
            aria-current={isActive ? 'page' : undefined}
            aria-expanded={hasChildren ? isExpanded : undefined}
            aria-disabled={item.disabled || undefined}
            title={collapsed ? item.label : undefined}
            role="menuitem"
          >
            {item.icon && (
              <span className={styles.icon} aria-hidden="true">
                {item.icon}
              </span>
            )}
            {!collapsed && (
              <span className={styles.label}>{item.label}</span>
            )}
            {!collapsed && hasChildren && (
              <svg
                className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ''}`}
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {/* Children */}
          {hasChildren && isExpanded && !collapsed && (
            <ul className={styles.subList} role="menu">
              {item.children!.map((child) => renderItem(child, depth + 1))}
            </ul>
          )}
        </li>
      );
    };

    return (
      <nav
        ref={ref}
        className={rootClass}
        style={rootStyle}
        aria-label="Sidebar navigation"
        {...rest}
      >
        {/* Collapse toggle */}
        {onCollapse && (
          <button
            className={styles.collapseToggle}
            type="button"
            onClick={handleCollapseToggle}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg
              className={`${styles.collapseIcon} ${collapsed ? styles.collapseIconFlipped : ''}`}
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 4L6 8L10 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <ul className={styles.list} role="menu">
          {items.map((item) => renderItem(item))}
        </ul>
      </nav>
    );
  },
);

Sidebar.displayName = 'Sidebar';

export { Sidebar };
