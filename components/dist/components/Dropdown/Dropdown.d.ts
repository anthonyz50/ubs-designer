import { default as React } from 'react';

/** A dropdown option. */
export interface DropdownOption {
    /** Display label. */
    label: string;
    /** The option value. */
    value: string;
    /** Whether this option is disabled. */
    disabled?: boolean;
}
/** A group of dropdown options. */
export interface DropdownOptionGroup {
    /** Group label. */
    label: string;
    /** Options within this group. */
    options: DropdownOption[];
}
/** Dropdown size options. */
export type DropdownSize = 'small' | 'medium' | 'large';
export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Options, either flat or grouped. */
    options: (DropdownOption | DropdownOptionGroup)[];
    /** Current selected value. */
    value?: string;
    /** Change handler. */
    onChange?: (value: string) => void;
    /** Placeholder text when no value is selected. */
    placeholder?: string;
    /** Whether the dropdown is disabled. */
    disabled?: boolean;
    /** Size of the dropdown. @default 'medium' */
    size?: DropdownSize;
    /** Error message. Displays red border and error text. */
    error?: string;
    /** Label text displayed above the dropdown. */
    label?: string;
    /** Helper text displayed below the dropdown. */
    helperText?: string;
}
/**
 * UBS Design System Dropdown component.
 *
 * A custom-styled select dropdown supporting flat and grouped options.
 * Built with full keyboard navigation and ARIA listbox pattern for
 * accessibility compliance.
 *
 * @example
 * ```tsx
 * <Dropdown
 *   label="Currency"
 *   placeholder="Select currency"
 *   options={[
 *     { label: 'Major', options: [
 *       { label: 'USD', value: 'usd' },
 *       { label: 'EUR', value: 'eur' },
 *     ]},
 *     { label: 'Other', options: [
 *       { label: 'CHF', value: 'chf' },
 *     ]},
 *   ]}
 *   value="usd"
 *   onChange={(val) => setCurrency(val)}
 * />
 * ```
 */
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;
