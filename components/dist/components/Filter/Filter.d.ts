import { default as React } from 'react';

/** Filter group variant. */
export type FilterVariant = 'standalone' | 'withSearch' | 'complex';
export interface FilterOption {
    /** Unique value for this option. */
    value: string;
    /** Display label. */
    label: string;
}
export interface FilterItem {
    /** Unique key for this filter. */
    key: string;
    /** Display label for the filter trigger. */
    label: string;
    /** Available options for this filter. */
    options: FilterOption[];
    /** Currently selected value(s). */
    value?: string | string[];
    /** Whether multiple selections are allowed. @default false */
    multiple?: boolean;
}
export interface FilterGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Array of filter configurations. */
    filters: FilterItem[];
    /** Callback when a filter value changes. */
    onFilterChange?: (key: string, value: string | string[]) => void;
    /** Callback when the reset button is clicked. */
    onReset?: () => void;
    /** Visual variant. @default 'standalone' */
    variant?: FilterVariant;
    /** Whether to show the reset button. @default true */
    showReset?: boolean;
    /** Placeholder text for the search input (withSearch variant). */
    searchPlaceholder?: string;
    /** Search input value (withSearch variant). */
    searchValue?: string;
    /** Callback when search value changes (withSearch variant). */
    onSearchChange?: (value: string) => void;
    /** Maximum number of visible filters before "Show more" (complex variant). */
    maxVisible?: number;
}
/**
 * UBS Design System Filter (FilterGroup) component.
 *
 * Horizontal filter bar with filter items that open popover dropdowns
 * with selectable options. Supports standalone, search-with-filters,
 * and complex (show more/collapse) variants.
 *
 * @example
 * ```tsx
 * <Filter
 *   filters={[
 *     {
 *       key: 'region',
 *       label: 'Region',
 *       options: [
 *         { value: 'emea', label: 'EMEA' },
 *         { value: 'apac', label: 'APAC' },
 *         { value: 'americas', label: 'Americas' },
 *       ],
 *       value: 'emea',
 *     },
 *     {
 *       key: 'type',
 *       label: 'Asset Type',
 *       options: [
 *         { value: 'equity', label: 'Equity' },
 *         { value: 'fixed-income', label: 'Fixed Income' },
 *       ],
 *     },
 *   ]}
 *   onFilterChange={(key, value) => console.log(key, value)}
 *   onReset={() => console.log('Reset')}
 *   variant="standalone"
 * />
 * ```
 */
export declare const FilterGroup: React.ForwardRefExoticComponent<FilterGroupProps & React.RefAttributes<HTMLDivElement>>;
