import { default as React } from 'react';

/** Select size options. */
export type SelectSize = 'sm' | 'md' | 'lg';
/** A single option in the select dropdown. */
export interface SelectOption {
    /** The option value. */
    value: string;
    /** The displayed label. */
    label: string;
    /** Whether this option is disabled. */
    disabled?: boolean;
}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'multiple'> {
    /** Label text displayed above the select. */
    label?: string;
    /** Available options. */
    options: SelectOption[];
    /** Controlled value (string for single, string[] for multiple). */
    value?: string | string[];
    /** Change handler. */
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    /** Error message. Displays red border and error text below. */
    error?: string;
    /** Helper text displayed below the select when there is no error. */
    helperText?: string;
    /** Whether the select is disabled. */
    disabled?: boolean;
    /** Whether the select is required. */
    required?: boolean;
    /** Placeholder text shown as the first unselectable option. */
    placeholder?: string;
    /** Size of the select. @default 'md' */
    size?: SelectSize;
    /** Whether to allow multiple selections. */
    multiple?: boolean;
    /** Whether the wrapper should be full width. */
    fullWidth?: boolean;
}
/**
 * UBS Design System Select component.
 *
 * A native select element with custom styling, chevron icon, and consistent
 * error/focus/disabled states following UBS brand guidelines.
 *
 * @example
 * ```tsx
 * <Select
 *   label="Country"
 *   placeholder="Select a country"
 *   options={[
 *     { value: 'gb', label: 'United Kingdom' },
 *     { value: 'ch', label: 'Switzerland' },
 *   ]}
 *   required
 * />
 * ```
 */
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
