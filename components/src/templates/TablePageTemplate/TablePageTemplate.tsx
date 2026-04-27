/**
 * @module TablePageTemplate
 * @description Full-page data table layout with PageHeader, filter bar, sorting,
 * selection, pagination, export button, and bulk action bar.
 *
 * @example
 * ```tsx
 * <TablePageTemplate
 *   title="Transactions"
 *   breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Transactions' }]}
 *   columns={[
 *     { key: 'date', header: 'Date', sortable: true },
 *     { key: 'amount', header: 'Amount', align: 'right', sortable: true },
 *   ]}
 *   data={transactions}
 *   filters={[
 *     { label: 'Status', options: [{ value: 'all', label: 'All' }, { value: 'pending', label: 'Pending' }] },
 *   ]}
 *   onExport={() => downloadCSV()}
 * />
 * ```
 */
import React, { forwardRef, useState, useCallback, useMemo } from 'react';
import {
  PageHeader,
  Table,
  Select,
  Button,
  Pagination,
  type PageHeaderBreadcrumb,
  type TableColumn,
  type SortDirection,
  type SelectOption,
  type ActionBarAction,
} from '../../components';
import styles from './TablePageTemplate.module.css';

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

export interface TablePageTemplateProps<T extends Record<string, unknown> = Record<string, unknown>>
  extends React.HTMLAttributes<HTMLDivElement> {
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
export const TablePageTemplate = forwardRef<HTMLDivElement, TablePageTemplateProps>(
  (
    {
      title,
      breadcrumbs,
      columns,
      data,
      filters = [],
      actions = [],
      onExport,
      headerActions,
      pageSize = 20,
      loading = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const [sortBy, setSortBy] = useState<string | undefined>(undefined);
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const [filterValues, setFilterValues] = useState<Record<string, string>>({});

    const handleSort = useCallback((key: string, direction: SortDirection) => {
      setSortBy(key);
      setSortDirection(direction);
    }, []);

    const handleFilterChange = useCallback((label: string, value: string) => {
      setFilterValues((prev) => ({ ...prev, [label]: value }));
      setCurrentPage(1);
    }, []);

    // Paginate data
    const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
    const paginatedData = useMemo(() => {
      const start = (currentPage - 1) * pageSize;
      return data.slice(start, start + pageSize);
    }, [data, currentPage, pageSize]);

    const hasSelection = selectedRows.size > 0;

    const classes = [styles.tablePage, className ?? ''].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...rest}>
        {/* ─── Page Header ─── */}
        <PageHeader
          title={title}
          breadcrumbs={breadcrumbs}
          actions={
            <div className={styles.headerActionsRow}>
              {headerActions}
              {onExport && (
                <Button variant="outline" size="small" onClick={onExport}>
                  Export
                </Button>
              )}
            </div>
          }
        />

        {/* ─── Filter Bar ─── */}
        {filters.length > 0 && (
          <div className={styles.filterBar} role="toolbar" aria-label="Table filters">
            {filters.map((filter) => (
              <div key={filter.label} className={styles.filterItem}>
                <Select
                  label={filter.label}
                  options={filter.options}
                  value={filterValues[filter.label] ?? ''}
                  onChange={(e) => handleFilterChange(filter.label, e.target.value)}
                  size="sm"
                  placeholder={`All ${filter.label}`}
                />
              </div>
            ))}
          </div>
        )}

        {/* ─── Bulk Action Bar ─── */}
        {hasSelection && actions.length > 0 && (
          <div className={styles.bulkActionBar} role="toolbar" aria-label="Bulk actions">
            <span className={styles.selectionCount}>
              {selectedRows.size} row{selectedRows.size !== 1 ? 's' : ''} selected
            </span>
            <div className={styles.bulkActions}>
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant ?? 'outline'}
                  size="small"
                  onClick={() => action.onClick(selectedRows)}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* ─── Table ─── */}
        <div className={styles.tableWrapper}>
          <Table
            columns={columns}
            data={paginatedData}
            sortBy={sortBy}
            sortDirection={sortDirection}
            onSort={handleSort}
            selectable
            selectedRows={selectedRows}
            onSelectionChange={setSelectedRows}
            striped
            hoverable
            stickyHeader
            loading={loading}
          />
        </div>

        {/* ─── Pagination ─── */}
        {totalPages > 1 && (
          <div className={styles.paginationWrapper}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    );
  },
) as <T extends Record<string, unknown> = Record<string, unknown>>(
  props: TablePageTemplateProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => React.ReactElement | null;

(TablePageTemplate as { displayName?: string }).displayName = 'TablePageTemplate';
