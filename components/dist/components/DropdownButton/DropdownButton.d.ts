import { default as React } from 'react';

/** A dropdown menu item. */
export interface DropdownButtonItem {
    /** Display label. */
    label: string;
    /** Optional icon element. */
    icon?: React.ReactNode;
    /** Click handler. */
    onClick?: () => void;
    /** Whether this item is disabled. */
    disabled?: boolean;
    /** Whether this item acts as a visual divider. */
    divider?: boolean;
}
/** DropdownButton variant options. */
export type DropdownButtonVariant = 'primary' | 'secondary' | 'outline';
/** DropdownButton size options. */
export type DropdownButtonSize = 'small' | 'medium' | 'large';
/** DropdownButton placement options. */
export type DropdownButtonPlacement = 'bottom-start' | 'bottom-end';
export interface DropdownButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    /** Button label text. */
    label: string;
    /** Array of dropdown menu items. */
    items: DropdownButtonItem[];
    /** Visual variant. @default 'primary' */
    variant?: DropdownButtonVariant;
    /** Size of the button. @default 'medium' */
    size?: DropdownButtonSize;
    /** Dropdown placement relative to the button. @default 'bottom-start' */
    placement?: DropdownButtonPlacement;
    /** Whether the button is disabled. */
    disabled?: boolean;
}
/**
 * UBS Design System DropdownButton component.
 *
 * A button that reveals a dropdown menu of secondary actions. Similar to
 * MenuButton but specifically designed for "more actions" patterns with
 * configurable dropdown placement.
 *
 * @example
 * ```tsx
 * <DropdownButton
 *   label="More actions"
 *   placement="bottom-end"
 *   items={[
 *     { label: 'Export as PDF', onClick: handleExport },
 *     { label: 'Print', onClick: handlePrint },
 *     { divider: true, label: '' },
 *     { label: 'Archive', onClick: handleArchive },
 *   ]}
 * />
 * ```
 */
export declare const DropdownButton: React.ForwardRefExoticComponent<DropdownButtonProps & React.RefAttributes<HTMLButtonElement>>;
