/**
 * @module Table
 * @description Data table component for financial applications, following UBS brand guidelines.
 *
 * Features sortable columns, row selection, striped/bordered/compact variants,
 * sticky header, custom cell renderers, loading skeletons, and empty states.
 *
 * @example
 * ```tsx
 * <Table
 *   columns={[
 *     { key: 'ticker', header: 'Ticker', sortable: true },
 *     { key: 'price', header: 'Price', align: 'right', render: (v) => `$${v.toFixed(2)}` },
 *   ]}
 *   data={[{ ticker: 'UBSG', price: 28.43 }]}
 *   striped
 *   hoverable
 * />
 * ```
 */
import {
  forwardRef,
  useCallback,
  useMemo,
  type HTMLAttributes,
  type ReactNode,
  type ChangeEvent,
} from 'react';
import styles from './Table.module.css';

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

export interface TableProps<T extends Record<string, unknown> = Record<string, unknown>>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
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
export const Table = forwardRef<HTMLDivElement, TableProps>(
  (
    {
      columns,
      data,
      sortBy,
      sortDirection,
      onSort,
      selectable = false,
      selectedRows,
      onSelectionChange,
      striped = false,
      bordered = false,
      compact = false,
      hoverable = false,
      stickyHeader = false,
      emptyMessage = 'No data available',
      loading = false,
      skeletonRows = 5,
      className,
      ...rest
    },
    ref,
  ) => {
    const selected = selectedRows ?? new Set<number>();

    const allSelected = useMemo(
      () => data.length > 0 && selected.size === data.length,
      [data.length, selected.size],
    );

    const someSelected = useMemo(
      () => selected.size > 0 && selected.size < data.length,
      [data.length, selected.size],
    );

    const handleSelectAll = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (!onSelectionChange) return;
        if (e.target.checked) {
          onSelectionChange(new Set(data.map((_, i) => i)));
        } else {
          onSelectionChange(new Set());
        }
      },
      [data, onSelectionChange],
    );

    const handleSelectRow = useCallback(
      (index: number) => {
        if (!onSelectionChange) return;
        const next = new Set(selected);
        if (next.has(index)) {
          next.delete(index);
        } else {
          next.add(index);
        }
        onSelectionChange(next);
      },
      [selected, onSelectionChange],
    );

    const handleSort = useCallback(
      (key: string) => {
        if (!onSort) return;
        const nextDirection: SortDirection =
          sortBy === key && sortDirection === 'asc' ? 'desc' : 'asc';
        onSort(key, nextDirection);
      },
      [onSort, sortBy, sortDirection],
    );

    const getAriaSortValue = (col: TableColumn<Record<string, unknown>>): 'ascending' | 'descending' | 'none' => {
      if (sortBy !== col.key) return 'none';
      return sortDirection === 'asc' ? 'ascending' : 'descending';
    };

    const wrapperClasses = [
      styles.wrapper,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const tableClasses = [
      styles.table,
      striped ? styles.striped : undefined,
      bordered ? styles.bordered : undefined,
      compact ? styles.compact : undefined,
      hoverable ? styles.hoverable : undefined,
      stickyHeader ? styles.stickyHeader : undefined,
    ]
      .filter(Boolean)
      .join(' ');

    const totalColumns = columns.length + (selectable ? 1 : 0);

    const renderSortIndicator = (col: TableColumn<Record<string, unknown>>) => {
      const isActive = sortBy === col.key;
      return (
        <span className={styles.sortIndicator} aria-hidden="true">
          <span
            className={`${styles.sortArrow} ${isActive && sortDirection === 'asc' ? styles.sortArrowActive : ''}`}
          >
            ▲
          </span>
          <span
            className={`${styles.sortArrow} ${isActive && sortDirection === 'desc' ? styles.sortArrowActive : ''}`}
          >
            ▼
          </span>
        </span>
      );
    };

    const renderHeader = () => (
      <thead className={styles.thead}>
        <tr>
          {selectable && (
            <th className={`${styles.th} ${styles.checkboxCell}`} scope="col">
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={allSelected}
                ref={(el) => {
                  if (el) el.indeterminate = someSelected;
                }}
                onChange={handleSelectAll}
                aria-label="Select all rows"
              />
            </th>
          )}
          {columns.map((col) => {
            const alignClass = col.align === 'center'
              ? styles.alignCenter
              : col.align === 'right'
                ? styles.alignRight
                : '';

            if (col.sortable) {
              return (
                <th
                  key={col.key}
                  scope="col"
                  className={`${styles.th} ${styles.sortableHeader} ${alignClass}`}
                  style={col.width ? { width: col.width } : undefined}
                  aria-sort={getAriaSortValue(col)}
                  tabIndex={0}
                  role="columnheader"
                  onClick={() => handleSort(col.key)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSort(col.key);
                    }
                  }}
                >
                  <span className={styles.headerContent}>
                    {col.header}
                    {renderSortIndicator(col)}
                  </span>
                </th>
              );
            }

            return (
              <th
                key={col.key}
                scope="col"
                className={`${styles.th} ${alignClass}`}
                style={col.width ? { width: col.width } : undefined}
              >
                {col.header}
              </th>
            );
          })}
        </tr>
      </thead>
    );

    const renderSkeletonBody = () => (
      <tbody className={styles.tbody}>
        {Array.from({ length: skeletonRows }, (_, rowIdx) => (
          <tr key={`skeleton-${rowIdx}`} className={`${styles.row} ${styles.skeletonRow}`}>
            {selectable && (
              <td className={`${styles.td} ${styles.checkboxCell}`}>
                <div className={styles.skeletonCell} style={{ width: 16, height: 16 }} />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className={styles.td}>
                <div
                  className={styles.skeletonCell}
                  style={{ width: `${60 + Math.random() * 30}%` }}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );

    const renderEmptyBody = () => (
      <tbody className={styles.tbody}>
        <tr className={styles.emptyRow}>
          <td className={styles.td} colSpan={totalColumns}>
            {emptyMessage}
          </td>
        </tr>
      </tbody>
    );

    const renderDataBody = () => (
      <tbody className={styles.tbody}>
        {data.map((row, rowIndex) => {
          const isSelected = selected.has(rowIndex);
          const rowClasses = [styles.row, isSelected ? styles.rowSelected : undefined]
            .filter(Boolean)
            .join(' ');

          return (
            <tr key={rowIndex} className={rowClasses}>
              {selectable && (
                <td className={`${styles.td} ${styles.checkboxCell}`}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={isSelected}
                    onChange={() => handleSelectRow(rowIndex)}
                    aria-label={`Select row ${rowIndex + 1}`}
                  />
                </td>
              )}
              {columns.map((col) => {
                const value = row[col.key as keyof typeof row];
                const alignClass = col.align === 'center'
                  ? styles.alignCenter
                  : col.align === 'right'
                    ? styles.alignRight
                    : '';

                return (
                  <td
                    key={col.key}
                    className={`${styles.td} ${alignClass}`}
                    style={col.width ? { width: col.width } : undefined}
                  >
                    {col.render ? col.render(value as never, row as never, rowIndex) : String(value ?? '')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );

    return (
      <div ref={ref} className={wrapperClasses} role="region" aria-label="Data table" {...rest}>
        <table className={tableClasses}>
          {renderHeader()}
          {loading ? renderSkeletonBody() : data.length === 0 ? renderEmptyBody() : renderDataBody()}
        </table>
      </div>
    );
  },
) as <T extends Record<string, unknown> = Record<string, unknown>>(
  props: TableProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => React.ReactElement | null;

(Table as { displayName?: string }).displayName = 'Table';

export default Table;
