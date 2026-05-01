import React, { forwardRef, useState, useCallback, useRef, useEffect } from 'react';
import styles from './Filter.module.css';

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
export const FilterGroup = forwardRef<HTMLDivElement, FilterGroupProps>(
  (
    {
      filters,
      onFilterChange,
      onReset,
      variant = 'standalone',
      showReset = true,
      searchPlaceholder = 'Search...',
      searchValue,
      onSearchChange,
      maxVisible = 4,
      className,
      ...rest
    },
    ref
  ) => {
    const [openFilterKey, setOpenFilterKey] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);
    const filterBarRef = useRef<HTMLDivElement>(null);

    const classNames = [
      styles.filter,
      styles[variant],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const hasActiveFilters = filters.some((f) => {
      if (Array.isArray(f.value)) return f.value.length > 0;
      return f.value !== undefined && f.value !== '';
    });

    const visibleFilters =
      variant === 'complex' && !showAll
        ? filters.slice(0, maxVisible)
        : filters;

    const hiddenCount =
      variant === 'complex' && !showAll
        ? Math.max(0, filters.length - maxVisible)
        : 0;

    const toggleFilter = useCallback((key: string) => {
      setOpenFilterKey((prev) => (prev === key ? null : key));
    }, []);

    const handleOptionSelect = useCallback(
      (filterItem: FilterItem, optionValue: string) => {
        if (filterItem.multiple) {
          const currentValues = Array.isArray(filterItem.value)
            ? filterItem.value
            : filterItem.value
            ? [filterItem.value]
            : [];

          const newValues = currentValues.includes(optionValue)
            ? currentValues.filter((v) => v !== optionValue)
            : [...currentValues, optionValue];

          onFilterChange?.(filterItem.key, newValues);
        } else {
          onFilterChange?.(filterItem.key, optionValue);
          setOpenFilterKey(null);
        }
      },
      [onFilterChange]
    );

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (filterBarRef.current && !filterBarRef.current.contains(event.target as Node)) {
          setOpenFilterKey(null);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getSelectedLabel = (filterItem: FilterItem): string | null => {
      if (!filterItem.value) return null;
      if (Array.isArray(filterItem.value)) {
        if (filterItem.value.length === 0) return null;
        if (filterItem.value.length === 1) {
          const opt = filterItem.options.find((o) => o.value === filterItem.value![0]);
          return opt?.label ?? null;
        }
        return `${filterItem.value.length} selected`;
      }
      const opt = filterItem.options.find((o) => o.value === filterItem.value);
      return opt?.label ?? null;
    };

    const isOptionSelected = (filterItem: FilterItem, optionValue: string): boolean => {
      if (Array.isArray(filterItem.value)) {
        return filterItem.value.includes(optionValue);
      }
      return filterItem.value === optionValue;
    };

    return (
      <div ref={ref} className={classNames} {...rest}>
        <div className={styles.filterBar} ref={filterBarRef}>
          {/* Search input for withSearch variant */}
          {variant === 'withSearch' && (
            <div className={styles.searchWrapper}>
              <span className={styles.searchIcon} aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M11 11L14 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                type="search"
                className={styles.searchInput}
                placeholder={searchPlaceholder}
                value={searchValue ?? ''}
                onChange={(e) => onSearchChange?.(e.target.value)}
                aria-label="Search filters"
              />
            </div>
          )}

          {/* Filter items */}
          <div className={styles.filterItems} role="toolbar" aria-label="Filters">
            {visibleFilters.map((filterItem) => {
              const isOpen = openFilterKey === filterItem.key;
              const selectedLabel = getSelectedLabel(filterItem);

              return (
                <div key={filterItem.key} className={styles.filterItemWrapper}>
                  <button
                    type="button"
                    className={[
                      styles.filterTrigger,
                      selectedLabel ? styles.filterTriggerActive : '',
                      isOpen ? styles.filterTriggerOpen : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() => toggleFilter(filterItem.key)}
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                  >
                    <span className={styles.filterLabel}>
                      {filterItem.label}
                      {selectedLabel && (
                        <span className={styles.filterValue}>: {selectedLabel}</span>
                      )}
                    </span>
                    <span className={styles.filterChevron} aria-hidden="true">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 3.75L5 6.25L7.5 3.75"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Dropdown popover */}
                  {isOpen && (
                    <div className={styles.filterDropdown} role="listbox" aria-label={filterItem.label}>
                      {filterItem.options.map((option) => {
                        const selected = isOptionSelected(filterItem, option.value);
                        return (
                          <button
                            key={option.value}
                            type="button"
                            className={[
                              styles.filterOption,
                              selected ? styles.filterOptionSelected : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                            role="option"
                            aria-selected={selected}
                            onClick={() => handleOptionSelect(filterItem, option.value)}
                          >
                            {filterItem.multiple && (
                              <span
                                className={[
                                  styles.checkbox,
                                  selected ? styles.checkboxChecked : '',
                                ]
                                  .filter(Boolean)
                                  .join(' ')}
                                aria-hidden="true"
                              >
                                {selected && (
                                  <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2 5L4 7L8 3"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
                              </span>
                            )}
                            <span className={styles.filterOptionLabel}>{option.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Show more / collapse for complex variant */}
            {variant === 'complex' && hiddenCount > 0 && (
              <button
                type="button"
                className={styles.showMoreButton}
                onClick={() => setShowAll(true)}
              >
                +{hiddenCount} more
              </button>
            )}
            {variant === 'complex' && showAll && filters.length > maxVisible && (
              <button
                type="button"
                className={styles.showMoreButton}
                onClick={() => setShowAll(false)}
              >
                Show less
              </button>
            )}
          </div>

          {/* Reset button */}
          {showReset && hasActiveFilters && (
            <button
              type="button"
              className={styles.resetButton}
              onClick={onReset}
              aria-label="Reset all filters"
            >
              <span className={styles.resetIcon} aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4L10 10M10 4L4 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              Reset
            </button>
          )}
        </div>
      </div>
    );
  }
);

FilterGroup.displayName = 'FilterGroup';
