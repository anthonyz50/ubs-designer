import { default as React } from 'react';

/** Menu item configuration. */
export interface MenuItem {
    /** Display label for the menu item. */
    label: string;
    /** Optional icon element rendered before the label. */
    icon?: React.ReactNode;
    /** Click handler for the menu item. */
    onClick?: () => void;
    /** Whether this item acts as a visual divider. */
    divider?: boolean;
    /** Whether this item is disabled. */
    disabled?: boolean;
}
/** MenuButton variant options. */
export type MenuButtonVariant = 'primary' | 'secondary' | 'outline';
/** MenuButton size options. */
export type MenuButtonSize = 'small' | 'medium' | 'large';
export interface MenuButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    /** Button label text. */
    label: string;
    /** Array of menu items to display in the dropdown. */
    items: MenuItem[];
    /** Visual variant of the button. @default 'primary' */
    variant?: MenuButtonVariant;
    /** Size of the button. @default 'medium' */
    size?: MenuButtonSize;
    /** Whether the button is disabled. */
    disabled?: boolean;
}
/**
 * UBS Design System MenuButton component.
 *
 * A button that opens a dropdown menu when clicked. Includes a chevron
 * indicator and supports keyboard navigation through menu items.
 *
 * @example
 * ```tsx
 * <MenuButton
 *   label="Actions"
 *   variant="primary"
 *   items={[
 *     { label: 'Edit', icon: <EditIcon />, onClick: handleEdit },
 *     { divider: true, label: '' },
 *     { label: 'Delete', onClick: handleDelete },
 *   ]}
 * />
 * ```
 */
export declare const MenuButton: React.ForwardRefExoticComponent<MenuButtonProps & React.RefAttributes<HTMLButtonElement>>;
