import { default as React } from 'react';

/** Dropdown item for the split button menu. */
export interface SplitButtonItem {
    /** Display label. */
    label: string;
    /** Optional icon element. */
    icon?: React.ReactNode;
    /** Click handler. */
    onClick?: () => void;
    /** Whether this item is disabled. */
    disabled?: boolean;
}
/** SplitButton variant options. */
export type SplitButtonVariant = 'primary' | 'secondary' | 'outline';
/** SplitButton size options. */
export type SplitButtonSize = 'small' | 'medium' | 'large';
export interface SplitButtonProps {
    /** Label for the primary action button. */
    label: string;
    /** Click handler for the primary action. */
    onClick?: () => void;
    /** Array of dropdown menu items. */
    items: SplitButtonItem[];
    /** Visual variant. @default 'primary' */
    variant?: SplitButtonVariant;
    /** Size of the button. @default 'medium' */
    size?: SplitButtonSize;
    /** Whether the entire split button is disabled. */
    disabled?: boolean;
    /** Additional CSS class name. */
    className?: string;
}
/**
 * UBS Design System SplitButton component.
 *
 * A dual-action button combining a primary action (left) with a dropdown
 * toggle (right). The left side triggers the main action while the right
 * side opens a menu of secondary actions.
 *
 * @example
 * ```tsx
 * <SplitButton
 *   label="Save"
 *   onClick={handleSave}
 *   items={[
 *     { label: 'Save as draft', onClick: handleSaveDraft },
 *     { label: 'Save and close', onClick: handleSaveClose },
 *   ]}
 * />
 * ```
 */
export declare const SplitButton: React.ForwardRefExoticComponent<SplitButtonProps & React.RefAttributes<HTMLDivElement>>;
