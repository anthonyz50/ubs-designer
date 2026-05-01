import { default as React } from 'react';

/** A ComboBox option. */
export interface ComboBoxOption {
    /** Display label. */
    label: string;
    /** The option value. */
    value: string;
    /** Whether this option is disabled. */
    disabled?: boolean;
}
export interface ComboBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Available options. */
    options: ComboBoxOption[];
    /** Current selected value(s). String for single, string[] for multiple. */
    value?: string | string[];
    /** Change handler. */
    onChange?: (value: string | string[]) => void;
    /** Placeholder text for the input. */
    placeholder?: string;
    /** Whether multiple options can be selected. @default false */
    multiple?: boolean;
    /** Whether the options list is searchable/filterable. @default true */
    searchable?: boolean;
    /** Whether options are currently loading. @default false */
    loading?: boolean;
    /** Text shown when no results match the search. @default 'No results found' */
    noResultsText?: string;
    /** Whether the combobox is disabled. */
    disabled?: boolean;
    /** Error message. Displays red border and error text. */
    error?: string;
    /** Label text displayed above the combobox. */
    label?: string;
}
/**
 * UBS Design System ComboBox component.
 *
 * A searchable dropdown that combines a text input with a filterable
 * options list. Supports single and multi-select modes with typeahead
 * autocomplete functionality.
 *
 * @example
 * ```tsx
 * <ComboBox
 *   label="Country"
 *   placeholder="Search countries..."
 *   options={[
 *     { label: 'United Kingdom', value: 'gb' },
 *     { label: 'Switzerland', value: 'ch' },
 *     { label: 'Germany', value: 'de' },
 *   ]}
 *   value="gb"
 *   onChange={(val) => setCountry(val as string)}
 * />
 * ```
 */
export declare const ComboBox: React.ForwardRefExoticComponent<ComboBoxProps & React.RefAttributes<HTMLDivElement>>;
