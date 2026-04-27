import { default as React } from 'react';
import { PageHeaderBreadcrumb, TableColumn, SelectOption } from '../../components';

/** Filter configuration for the filter bar. */
export interface TablePageFilter {
    /** Filter label. */
    label: string;
    /** Filter select options. */
    options: SelectOption[];
}
/** Bulk action configuration. */
export interface TablePageBulkAction {
    /** Action label. */
    label: string;
    /** Click handler. Receives selected row indices. */
    onClick: (selectedRows: Set<number>) => void;
    /** Optional variant for the button. */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}
export interface TablePageTemplateProps<T extends Record<string, unknown> = Record<string, unknown>> extends React.HTMLAttributes<HTMLDivElement> {
    /** Page title. */
    title: string;
    /** Breadcrumb trail. */
    breadcrumbs?: PageHeaderBreadcrumb[];
    /** Table column definitions. */
    columns: TableColumn<T>[];
    /** Table data rows. */
    data: T[];
    /** Optional filter bar configuration. */
    filters?: TablePageFilter[];
    /** Bulk actions available when rows are selected. */
    actions?: TablePageBulkAction[];
    /** Callback for the export button. */
    onExport?: () => void;
    /** Page header actions (buttons on the right). */
    headerActions?: React.ReactNode;
    /** Page size for pagination. @default 20 */
    pageSize?: number;
    /** Whether data is loading. */
    loading?: boolean;
}
/**
 * TablePageTemplate — data table page with filters, sorting, selection, and pagination.
 */
export declare const TablePageTemplate: <T extends Record<string, unknown> = Record<string, unknown>>(props: TablePageTemplateProps<T> & {
    ref?: React.Ref<HTMLDivElement>;
}) => React.ReactElement | null;
