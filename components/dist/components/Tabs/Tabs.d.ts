import { default as React } from 'react';

/** A single tab definition. */
export interface TabItem {
    /** Display label for the tab. */
    label: string;
    /** Unique value identifying this tab. */
    value: string;
    /** Whether the tab is disabled and cannot be selected. */
    disabled?: boolean;
    /** Optional icon element rendered before the label. */
    icon?: React.ReactNode;
}
/** Visual variant of the tabs. */
export type TabsVariant = 'underline' | 'contained';
/**
 * Props for the {@link Tabs} component.
 */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Array of tab definitions. */
    tabs: TabItem[];
    /** Currently active tab value. */
    activeTab: string;
    /** Callback fired when a tab is selected. */
    onChange: (value: string) => void;
    /** Visual variant. @default 'underline' */
    variant?: TabsVariant;
    /** Whether tabs should stretch to fill the container width. @default false */
    fullWidth?: boolean;
}
/**
 * Tabbed navigation component following UBS brand guidelines.
 *
 * Supports keyboard navigation (Arrow keys, Home, End) and
 * proper ARIA roles for accessibility.
 *
 * @example
 * ```tsx
 * <Tabs
 *   tabs={[
 *     { label: 'Overview', value: 'overview' },
 *     { label: 'Details', value: 'details' },
 *   ]}
 *   activeTab="overview"
 *   onChange={setActiveTab}
 * />
 * ```
 */
export declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
