import { default as React } from 'react';

export interface TreeNodeItem {
    /** Unique identifier for this tree node. */
    id: string;
    /** Display label. */
    label: string;
    /** Optional icon element. */
    icon?: React.ReactNode;
    /** Child nodes. */
    children?: TreeNodeItem[];
    /** Whether this node is disabled. */
    disabled?: boolean;
}
export interface TreeNavigationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
    /** Tree structure of navigation items. */
    items: TreeNodeItem[];
    /** Currently active/selected item ID. */
    activeId?: string;
    /** Callback when a node is selected. */
    onSelect?: (id: string) => void;
    /** Set of currently expanded node IDs (controlled). */
    expandedIds?: Set<string>;
    /** Set of initially expanded node IDs (uncontrolled). */
    defaultExpandedIds?: Set<string>;
    /** Callback when expanded state changes. */
    onExpandChange?: (expandedIds: Set<string>) => void;
}
/**
 * UBS Design System TreeNavigation component.
 *
 * Hierarchical tree menu for sidebar navigation with
 * expandable/collapsible nodes and active item highlighting.
 *
 * @example
 * ```tsx
 * <TreeNavigation
 *   items={[
 *     {
 *       id: 'portfolio',
 *       label: 'Portfolio',
 *       children: [
 *         { id: 'overview', label: 'Overview' },
 *         { id: 'holdings', label: 'Holdings' },
 *       ],
 *     },
 *     { id: 'transactions', label: 'Transactions' },
 *   ]}
 *   activeId="overview"
 *   onSelect={(id) => console.log('Selected:', id)}
 * />
 * ```
 */
export declare const TreeNavigation: React.ForwardRefExoticComponent<TreeNavigationProps & React.RefAttributes<HTMLElement>>;
