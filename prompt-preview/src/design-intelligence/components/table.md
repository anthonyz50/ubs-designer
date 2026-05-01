# Table

## Purpose

Tables display structured data in rows and columns, enabling users to scan, compare, sort, and act on information efficiently. Use tables for any data where comparison across multiple attributes is the primary user need.

## Variants

### Standard table
- Full-featured table with sorting, optional row selection, and actions
- Used for primary data views (request lists, user directories, transaction logs)

### Compact table
- Reduced row height and padding for dense data
- Used for secondary data views, embedded widgets, and read-only reference data

### Striped table
- Alternating row backgrounds (Neutral-00 and Neutral-05)
- Used when tables have many columns or rows to aid horizontal scanning

## Props / Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| columns | ColumnDef[] | — | Column definitions (required) |
| data | Row[] | — | Row data (required) |
| sortable | boolean | `false` | Enables column sorting |
| selectable | boolean | `false` | Enables row checkbox selection |
| variant | `standard` \| `compact` \| `striped` | `standard` | Visual density |
| pagination | boolean \| PaginationConfig | `false` | Enables pagination |
| loading | boolean | `false` | Shows skeleton rows |
| emptyState | ReactNode | — | Content when data is empty |
| onRowClick | function | — | Row click handler (navigates to detail) |
| stickyHeader | boolean | `false` | Header stays visible when scrolling |

### Column definition

| Prop | Type | Description |
|------|------|-------------|
| key | string | Data field key |
| label | string | Column header text |
| sortable | boolean | Column is sortable |
| align | `left` \| `right` \| `center` | Text alignment |
| width | string | Fixed or min/max width |
| priority | `critical` \| `important` \| `supplementary` | Responsive visibility |
| render | function | Custom cell renderer |

## States

### Default
- Table renders with all visible columns, default sort applied
- Header row is visually distinct (bold text, bottom border)

### Sorted
- Active sort column header shows direction arrow (↑ or ↓)
- Active sort column header text is bold
- Inactive sortable columns show a neutral sort icon (↕)
- Clicking sorted column toggles direction; clicking a new column sorts ascending first

### Selected
- Selected rows have Neutral-05 background
- Checkbox in the row is checked
- Bulk action toolbar appears above the table showing selected count
- Header checkbox: unchecked (none), checked (all), indeterminate (some)

### Loading
- Skeleton rows matching the table layout (5-10 rows)
- Column headers remain visible
- Skeleton cells pulse with animation

### Empty (no data)
- Table headers remain visible
- Empty state content centred in the body area
- Message + optional illustration + CTA button
- "No requests yet. Create your first one."

### Empty (filtered/searched)
- "No results match your criteria. Try adjusting your filters or search terms."
- Active filters visible with "Clear all" action

### Error
- "We couldn't load this data. [Try again]"
- Centred in the body area, headers visible

### Hover
- Row background: Neutral-05
- Cursor: pointer (if onRowClick is set)

## Sizing

### Standard variant
| Element | Value |
|---------|-------|
| Row height | 48px |
| Header height | 48px |
| Cell padding | 12px horizontal, 8px vertical |
| Font size (body) | 14px |
| Font size (header) | 14px, bold |

### Compact variant
| Element | Value |
|---------|-------|
| Row height | 36px |
| Header height | 40px |
| Cell padding | 8px horizontal, 4px vertical |
| Font size (body) | 12px |
| Font size (header) | 12px, bold |

## Spacing

- Table to adjacent content: 24px vertical margin
- Between table header toolbar and table: 12px
- Pagination footer to table body: 12px
- Column minimum width: 80px (prevents content crushing)

## Colour Usage

| Element | Colour |
|---------|--------|
| Header background | Neutral-05 `#F5F5F5` |
| Header text | Neutral-80 `#333333` |
| Body background | White `#FFFFFF` |
| Body text | Neutral-70 `#4D4D4D` |
| Stripe row | Neutral-05 `#F5F5F5` |
| Hover row | Neutral-05 `#F5F5F5` |
| Selected row | Info `#3A5A88` at 8% opacity |
| Border (rows) | Neutral-10 `#E5E5E5` |
| Sort icon (active) | Neutral-90 `#1A1A1A` |
| Sort icon (inactive) | Neutral-30 `#B3B3B3` |

## Accessibility

- Use semantic `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` elements
- Column headers use `<th scope="col">`
- Row headers (when applicable) use `<th scope="row">`
- Include a `<caption>` (visually hidden if needed) describing the table purpose
- Sort buttons within headers announce state: "Name, sorted ascending, activate to sort descending"
- Row selection checkboxes are labelled: "Select [row identifier]"
- Header checkbox: "Select all rows" / "Deselect all rows"
- Pagination is keyboard-navigable with clear labels ("Page 1 of 25", "Next page", "Previous page")
- `aria-live="polite"` announces result count changes after sort, filter, or search
- If the table scrolls horizontally, announce this to screen readers and provide a keyboard mechanism to scroll
- Sticky headers maintain their `<th>` association with body cells

## Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Move focus through interactive elements (sort buttons, checkboxes, links, action menus) |
| `Enter` | Activate sort button, open action menu, follow link |
| `Space` | Toggle checkbox, activate sort button |
| `Arrow Up/Down` | Navigate between rows (when row navigation is enabled) |
| `Escape` | Close open action menus |

## Usage Guidelines

### Column alignment
- Left-align: text, names, descriptions, categories
- Right-align: numbers, currency, percentages, dates
- Centre-align: status indicators, boolean values, single icons

### Column ordering
1. Selection checkbox (if selectable)
2. Primary identifier (name, title, ID)
3. Key attributes in order of importance
4. Status
5. Date/time
6. Actions (overflow menu)

### Responsive column priority
- **Critical** (always visible): Primary identifier, status, action
- **Important** (tablet+): Date, assignee, category
- **Supplementary** (desktop only): Secondary metadata, reference numbers

### Row actions
- 1-2 frequent actions: show as inline icon buttons
- 3+ actions: use overflow menu (⋮)
- Destructive actions appear last in the overflow menu and use error colour
- Maximum 5 items in the overflow menu

## Do

- Use semantic HTML table elements
- Right-align numeric data for easy comparison
- Show sort direction clearly on the active column
- Maintain headers during loading and empty states
- Provide a text alternative for icon-only actions

## Don't

- Use tables for non-tabular data (use card lists)
- Show more than 8 visible columns on desktop
- Enable horizontal scrolling on desktop viewports
- Sort by hidden columns
- Remove pagination for datasets over 50 rows
- Use tables on mobile for fewer than 3 columns (use cards instead)
