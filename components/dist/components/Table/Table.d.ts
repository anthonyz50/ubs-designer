import { HTMLAttributes, ReactNode } from 'react';

/** Column sort direction. */
export type SortDirection = 'asc' | 'desc';
/** Column alignment. */
export type ColumnAlign = 'left' | 'center' | 'right';
/** Column definition for the Table component. */
export interface TableColumn<T> {
    /** Unique key matching a property in the data row. */
    key: string;
    /** Column header text. */
    header: ReactNode;
    /** Custom cell renderer. Receives the cell value and the full row. */
    render?: (value: T[keyof T], row: T, rowIndex: number) => ReactNode;
    /** Whether this column is sortable. */
    sortable?: boolean;
    /** Fixed width (CSS value). */
    width?: string;
    /** Text alignment. Defaults to `'left'`. */
    align?: ColumnAlign;
}
export interface TableProps<T extends Record<string, unknown> = Record<string, unknown>> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Column definitions. */
    columns: TableColumn<T>[];
    /** Array of data rows. */
    data: T[];
    /** Currently sorted column key. */
    sortBy?: string;
    /** Current sort direction. */
    sortDirection?: SortDirection;
    /** Callback when a sortable column header is clicked. */
    onSort?: (key: string, direction: SortDirection) => void;
    /** Enable row selection with checkboxes. */
    selectable?: boolean;
    /** Set of selected row indices. */
    selectedRows?: Set<number>;
    /** Callback when row selection changes. */
    onSelectionChange?: (selectedRows: Set<number>) => void;
    /** Alternating row background colours. */
    striped?: boolean;
    /** Show cell borders. */
    bordered?: boolean;
    /** Reduced padding mode. */
    compact?: boolean;
    /** Highlight rows on hover. */
    hoverable?: boolean;
    /** Make header sticky on scroll. */
    stickyHeader?: boolean;
    /** Message shown when data is empty. Defaults to `'No data available'`. */
    emptyMessage?: string;
    /** Show loading skeleton rows. */
    loading?: boolean;
    /** Number of skeleton rows to display. Defaults to `5`. */
    skeletonRows?: number;
}
/**
 * Table — comprehensive data table for financial dashboards.
 *
 * Supports sorting, selection, multiple visual variants, sticky headers,
 * custom cell renderers, loading states, and empty states.
 */
export declare const Table: <T extends Record<string, unknown> = Record<string, unknown>>(props: TableProps<T> & {
    ref?: React.Ref<HTMLDivElement>;
}) => React.ReactElement | null;
export default Table;
