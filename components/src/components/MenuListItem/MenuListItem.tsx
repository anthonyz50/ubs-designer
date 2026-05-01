import React, { forwardRef } from 'react';
import styles from './MenuListItem.module.css';

export interface MenuListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Primary label text. */
  label: string;
  /** Optional description text displayed below the label. */
  description?: string;
  /** Optional icon element rendered before the label. */
  icon?: React.ReactNode;
  /** Optional badge or count element rendered on the trailing side. */
  badge?: React.ReactNode;
  /** Whether this item is currently active/selected. @default false */
  active?: boolean;
  /** Whether this item is disabled. @default false */
  disabled?: boolean;
  /** Click handler for the menu item. */
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
}

/**
 * UBS Design System MenuListItem component.
 *
 * Individual menu item for navigation lists. Supports icon, label,
 * description, and badge/count. Includes default, hover, active,
 * and disabled states.
 *
 * @example
 * ```tsx
 * <MenuListItem
 *   label="Dashboard"
 *   description="View your portfolio overview"
 *   icon={<DashboardIcon />}
 *   badge={<Badge>3</Badge>}
 *   active
 *   onClick={handleClick}
 * />
 * ```
 */
export const MenuListItem = forwardRef<HTMLLIElement, MenuListItemProps>(
  (
    {
      label,
      description,
      icon,
      badge,
      active = false,
      disabled = false,
      onClick,
      className,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      styles.menuListItem,
      active ? styles.active : '',
      disabled ? styles.disabled : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
      if (disabled) return;
      onClick?.(event);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
      if (disabled) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick?.(event as unknown as React.MouseEvent<HTMLLIElement>);
      }
    };

    return (
      <li
        ref={ref}
        className={classNames}
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-current={active ? 'page' : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}
        <span className={styles.content}>
          <span className={styles.label}>{label}</span>
          {description && (
            <span className={styles.description}>{description}</span>
          )}
        </span>
        {badge && (
          <span className={styles.badge}>{badge}</span>
        )}
      </li>
    );
  }
);

MenuListItem.displayName = 'MenuListItem';
