# Data Table Patterns

## When to Use

Data tables display structured information in rows and columns, enabling users to scan, compare, sort, and act on records. Use tables for lists of entities (requests, users, transactions), log/audit data, and any content where comparison across multiple attributes matters.

## Layout Structure

### Standard table layout
```
┌─────────────────────────────────────────────────┐
│ Table title          [Search] [Filter] [Export]  │
├─────────────────────────────────────────────────┤
│ Active filters: Category: Finance  ✕  | Clear all│
├────┬──────────┬──────────┬────────┬─────────────┤
│ ☐  │ Name ↕   │ Status   │ Date ↓ │ Actions     │
├────┼──────────┼──────────┼────────┼─────────────┤
│ ☐  │ Item 1   │ ● Active │ 15 Jan │ ⋮           │
│ ☐  │ Item 2   │ ○ Draft  │ 14 Jan │ ⋮           │
│ ☐  │ Item 3   │ ● Active │ 13 Jan │ ⋮           │
├────┴──────────┴──────────┴────────┴─────────────┤
│ Showing 1-10 of 247     [◄] [1] [2] [3] [►]    │
└─────────────────────────────────────────────────┘
```

### Table anatomy
1. **Header bar**: Table title, search, filters, bulk actions, export
2. **Active filters**: Visible chips showing applied filters with remove buttons
3. **Column headers**: Sortable columns with directional indicators
4. **Table body**: Data rows with consistent column alignment
5. **Footer**: Pagination controls and result count

## Key Components

### Column headers
- Left-align text columns
- Right-align numeric columns
- Centre-align status indicators and actions
- Sortable columns show a sort icon; active sort shows direction (↑ ascending, ↓ descending)
- Default sort order matches the most common user need (usually most recent first)

### Row selection
- Checkbox in the first column for multi-select
- Header checkbox selects/deselects all visible rows
- Selected row count shown in toolbar when items are selected
- Bulk actions appear in the header bar when rows are selected

### Row actions
- Overflow menu (⋮) in the last column for per-row actions
- Maximum 5 actions in the overflow menu
- Destructive actions appear last and use error colour
- If there are 1-2 common actions, show them as inline icon buttons alongside the overflow

### Pagination
- Show current range and total: "Showing 1-10 of 247"
- Page size selector: 10, 25, 50, 100
- Previous/next buttons
- Direct page number links (show max 5 page numbers with ellipsis)

### Search
- Searches across all visible columns by default
- Results update as the user types (debounced 300ms)
- Search term is highlighted in results
- Clear button inside the search field

### Filters
- Filter button opens a filter panel or popover
- Each filter is a dropdown, date range, or checkbox group
- Active filters appear as removable chips above the table
- "Clear all" removes all active filters
- Filter count badge on the filter button when filters are active

## Interaction Flow

1. User sees the table with default sort and no filters
2. User searches or applies filters to narrow results
3. Active filters appear as chips; table updates in place
4. User sorts by clicking column headers
5. User selects rows via checkboxes for bulk operations
6. User clicks a row to navigate to the detail view, or uses the overflow menu for quick actions
7. Pagination controls allow navigation through result pages

## States

### Loading
- Skeleton rows matching the table structure (5-10 rows)
- Column headers remain visible during loading
- Loading spinner in the table body area for subsequent page loads

### Empty (no data)
- Message centred in the table body area
- "No [items] yet. [Create your first one]."
- Table headers remain visible for context

### Empty (no results)
- "No results match your search. Try different keywords or [clear filters]."
- Table headers remain visible
- Active filters shown with "Clear all" action

### Error
- "We couldn't load this data. [Try again]"
- Centred in the table body area
- Headers remain visible

### Selected state
- Selected rows have a subtle background highlight (Neutral-05)
- Selection count and bulk action toolbar appear in the header bar
- "3 items selected [Deselect all] [Export] [Delete]"

## Responsive Behaviour

| Breakpoint | Behaviour |
|-----------|-----------|
| Desktop (1024px+) | Full table with all columns visible |
| Tablet (768-1023px) | Priority columns visible; secondary columns in expandable row detail |
| Mobile (below 768px) | Card layout replacing table rows |

### Column priority
Assign priority to columns. On smaller screens, lower-priority columns hide first:
1. **Critical**: Always visible (name/title, status, primary action)
2. **Important**: Visible on tablet and above (date, assignee)
3. **Supplementary**: Desktop only (category, reference number, secondary metrics)

### Mobile card layout
Each table row becomes a card:
```
┌─────────────────────────────┐
│ Item name              ⋮    │
│ Status: ● Active            │
│ Date: 15 Jan 2025           │
│ Category: Finance           │
└─────────────────────────────┘
```

## Accessibility

- Use `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` semantic elements
- Column headers use `<th scope="col">`
- Row headers (if applicable) use `<th scope="row">`
- Include a `<caption>` element describing the table (can be visually hidden)
- Sort buttons within `<th>` announce current sort state: "Name, sorted ascending"
- Row selection checkboxes have labels: "Select [item name]"
- Header checkbox is labelled: "Select all rows"
- Pagination controls are keyboard navigable
- `aria-live="polite"` region announces result count changes after filtering/searching
- Row actions in overflow menus are keyboard accessible
- Mobile card layout maintains the same information and interaction capabilities

## Example Structure

```
<section aria-label="Requests list">
  <header>
    <h2>Requests</h2>
    <SearchInput label="Search requests" />
    <FilterButton activeCount={2} />
    <ExportButton />
  </header>

  <ActiveFilters>
    <FilterChip label="Category: Finance" onRemove={...} />
    <FilterChip label="Status: Open" onRemove={...} />
    <Button variant="text" onClick={clearAll}>Clear all</Button>
  </ActiveFilters>

  <table aria-label="Requests">
    <caption className="visually-hidden">
      List of requests, sortable by name, status, and date
    </caption>
    <thead>
      <tr>
        <th><Checkbox label="Select all" /></th>
        <th scope="col"><SortButton column="name" /></th>
        <th scope="col"><SortButton column="status" /></th>
        <th scope="col"><SortButton column="date" direction="desc" active /></th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {rows.map(row => (
        <tr key={row.id}>
          <td><Checkbox label={`Select ${row.name}`} /></td>
          <td><Link to={`/requests/${row.id}`}>{row.name}</Link></td>
          <td><StatusLabel status={row.status} /></td>
          <td>{formatDate(row.date)}</td>
          <td><OverflowMenu items={rowActions} /></td>
        </tr>
      ))}
    </tbody>
  </table>

  <footer>
    <span>Showing 1-10 of 247</span>
    <Pagination currentPage={1} totalPages={25} />
  </footer>
</section>
```

## Do

- Right-align numeric columns for easy comparison
- Show active filters as removable chips
- Maintain column headers during loading and empty states
- Provide keyboard access to all sorting, filtering, and row actions
- Use semantic table markup

## Don't

- Show more than 8 columns on desktop (prioritise and hide secondary columns)
- Use table layout for non-tabular data (use card lists instead)
- Remove pagination in favour of infinite scroll for large datasets
- Require horizontal scrolling on desktop viewports
- Sort by a column that is not visible
