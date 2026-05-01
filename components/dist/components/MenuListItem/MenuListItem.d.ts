import { default as React } from 'react';

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
export declare const MenuListItem: React.ForwardRefExoticComponent<MenuListItemProps & React.RefAttributes<HTMLLIElement>>;
