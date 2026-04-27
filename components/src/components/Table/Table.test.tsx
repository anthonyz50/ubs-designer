import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Table, type TableColumn } from './Table';

type Row = { ticker: string; price: number };

const columns: TableColumn<Row>[] = [
  { key: 'ticker', header: 'Ticker', sortable: true },
  { key: 'price', header: 'Price', align: 'right' },
];

const data: Row[] = [
  { ticker: 'UBSG', price: 28.43 },
  { ticker: 'CSGN', price: 3.14 },
];

describe('Table', () => {
  // ── Headers and rows ─────────────────────────────────────────────
  it('renders column headers', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText('Ticker')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
  });

  it('renders data rows', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText('UBSG')).toBeInTheDocument();
    expect(screen.getByText('28.43')).toBeInTheDocument();
    expect(screen.getByText('CSGN')).toBeInTheDocument();
    expect(screen.getByText('3.14')).toBeInTheDocument();
  });

  // ── Sortable columns ────────────────────────────────────────────
  it('fires onSort when a sortable header is clicked', async () => {
    const user = userEvent.setup();
    const onSort = vi.fn();
    render(<Table columns={columns} data={data} onSort={onSort} />);
    await user.click(screen.getByText('Ticker'));
    expect(onSort).toHaveBeenCalledWith('ticker', 'asc');
  });

  it('toggles sort direction from asc to desc', async () => {
    const user = userEvent.setup();
    const onSort = vi.fn();
    render(
      <Table
        columns={columns}
        data={data}
        onSort={onSort}
        sortBy="ticker"
        sortDirection="asc"
      />,
    );
    await user.click(screen.getByText('Ticker'));
    expect(onSort).toHaveBeenCalledWith('ticker', 'desc');
  });

  it('has aria-sort on sortable headers', () => {
    render(
      <Table
        columns={columns}
        data={data}
        sortBy="ticker"
        sortDirection="asc"
      />,
    );
    const tickerHeader = screen.getByText('Ticker').closest('th');
    expect(tickerHeader).toHaveAttribute('aria-sort', 'ascending');
  });

  // ── Row selection ────────────────────────────────────────────────
  it('renders row selection checkboxes', () => {
    const onSelectionChange = vi.fn();
    render(
      <Table
        columns={columns}
        data={data}
        selectable
        selectedRows={new Set()}
        onSelectionChange={onSelectionChange}
      />,
    );
    // "Select all" + one per row
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(3);
  });

  it('fires onSelectionChange when a row checkbox is clicked', async () => {
    const user = userEvent.setup();
    const onSelectionChange = vi.fn();
    render(
      <Table
        columns={columns}
        data={data}
        selectable
        selectedRows={new Set()}
        onSelectionChange={onSelectionChange}
      />,
    );
    const rowCheckboxes = screen.getAllByRole('checkbox', {
      name: /Select row/,
    });
    await user.click(rowCheckboxes[0]);
    expect(onSelectionChange).toHaveBeenCalledWith(new Set([0]));
  });

  // ── Select all ───────────────────────────────────────────────────
  it('selects all rows when "Select all" checkbox is clicked', async () => {
    const user = userEvent.setup();
    const onSelectionChange = vi.fn();
    render(
      <Table
        columns={columns}
        data={data}
        selectable
        selectedRows={new Set()}
        onSelectionChange={onSelectionChange}
      />,
    );
    const selectAll = screen.getByRole('checkbox', {
      name: 'Select all rows',
    });
    await user.click(selectAll);
    expect(onSelectionChange).toHaveBeenCalledWith(new Set([0, 1]));
  });

  // ── Striped ──────────────────────────────────────────────────────
  it('applies striped class when striped=true', () => {
    render(<Table columns={columns} data={data} striped />);
    const table = screen.getByRole('table');
    expect(table.className).toContain('striped');
  });

  // ── Empty state ──────────────────────────────────────────────────
  it('shows default empty state message', () => {
    render(<Table columns={columns} data={[]} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('shows custom empty message', () => {
    render(
      <Table columns={columns} data={[]} emptyMessage="Nothing to show" />,
    );
    expect(screen.getByText('Nothing to show')).toBeInTheDocument();
  });

  // ── Region label ─────────────────────────────────────────────────
  it('has an accessible region label', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByRole('region', { name: 'Data table' })).toBeInTheDocument();
  });
});
