# Filter

## Purpose

Filters allow users to narrow down a dataset by specific criteria, making it easier to find relevant items in lists, tables, and search results. Filters reduce cognitive load by hiding irrelevant content and surfacing what matters.

## Variants

### Filter bar
- Horizontal row of filter controls above the content area
- Each filter is a dropdown button showing the current selection
- Best for 2-5 filter dimensions

### Filter panel
- Vertical panel (sidebar or slide-over) with all filter options
- Used for complex filtering with 6+ dimensions
- Collapsible sections for each filter group

### Filter chips
- Inline removable tags showing active filter values
- Always paired with either a filter bar or filter panel
- Provide a "Clear all" action when any filter is active

### Quick filters
- Pre-defined filter combinations as toggle buttons
- Examples: "My items", "Overdue", "Pending approval"
- One click applies multiple filter criteria simultaneously

## Props / Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| filters | FilterDef[] | — | Filter definitions (required) |
| values | object | `{}` | Current filter values |
| onChange | function | — | Called when filters change |
| applyMode | `immediate` \| `manual` | `immediate` | Apply on change or on button click |
| showChips | boolean | `true` | Display active filters as removable chips |
| showClearAll | boolean | `true` | Show "Clear all" when filters are active |

### Filter definition

| Prop | Type | Description |
|------|------|-------------|
| key | string | Filter identifier |
| label | string | Display label |
| type | `select` \| `multiselect` \| `dateRange` \| `toggle` \| `search` | Filter type |
| options | Option[] | Predefined choices (for select/multiselect) |
| defaultValue | any | Initial value |

## States

### Default (no filters applied)
- All filter controls show their default/empty state
- No active filter chips visible
- Content shows the full unfiltered dataset

### Active filters
- Filter controls show selected values
- Active filter chips appear between the filter bar and the content
- Badge count on filter button (panel variant): "Filters (3)"
- "Clear all" link is visible

### Filtered with results
- Content updates to show matching items
- Result count reflects filtered total: "Showing 12 of 247 requests"
- Active filters displayed as chips

### Filtered with no results
- Empty state: "No results match your filters"
- Active filter chips remain visible with "Clear all" action
- Suggest removing specific filters: "Try removing 'Category: Finance' to see more results"

### Loading
- Content area shows loading state (skeleton or spinner)
- Filter controls remain interactive (user can adjust while loading)
- Previous results cleared or dimmed while new results load

## Sizing

### Filter bar
- Filter button height: 36px
- Filter button padding: 8px horizontal, 4px vertical
- Gap between filter buttons: 8px
- Bar to content spacing: 16px

### Filter panel
- Panel width: 280px (sidebar), 360px (slide-over)
- Section padding: 16px
- Option row height: 36px
- Checkbox/radio size: 20px

### Filter chips
- Chip height: 28px
- Chip padding: 4px 8px
- Gap between chips: 8px
- Chip row to content: 12px

## Spacing

- Filter bar to active chips: 8px
- Active chips to content: 12px
- Between filter sections (panel): 16px
- Filter label to options: 8px
- Between filter options: 4px

## Colour Usage

| Element | Colour |
|---------|--------|
| Filter button (default) | Neutral-80 text, Neutral-10 border |
| Filter button (active) | Info `#3A5A88` background at 10%, Info border, Info text |
| Filter chip background | Neutral-05 `#F5F5F5` |
| Filter chip text | Neutral-80 `#333333` |
| Filter chip remove icon | Neutral-40 `#999999` |
| Clear all link | UBS Red `#E60000` |
| Badge count | UBS Red `#E60000` background, white text |

## Accessibility

- Filter controls use appropriate ARIA roles: `role="listbox"` for selects, `role="checkbox"` for checkboxes
- Filter bar has `role="group"` with `aria-label="Filters"`
- Active filter chips use `role="status"` to announce changes
- Each chip's remove button has `aria-label="Remove filter: [label]: [value]"`
- "Clear all" is keyboard-accessible and labelled
- Filter changes announce the new result count via `aria-live="polite"`
- Filter panel (slide-over) traps focus when open and returns focus on close
- All filter interactions work via keyboard

## Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Navigate between filter controls |
| `Enter` / `Space` | Open filter dropdown, toggle selection |
| `Arrow Up/Down` | Navigate options within an open dropdown |
| `Escape` | Close open dropdown |
| `Delete` / `Backspace` | Remove a focused filter chip |

## Usage Guidelines

### Apply mode
- **Immediate** (default): Filters apply as soon as the user makes a selection. Best for small to medium datasets where response is fast.
- **Manual**: Filters apply only when the user clicks "Apply filters". Best for large datasets with expensive queries or server-side filtering.

### Filter ordering
- Order filters by frequency of use (most used first)
- Place the most selective filter (the one that narrows results most) first
- Group related filters (e.g., date range start and end together)

### Default state
- No filters active by default (show all data)
- Exception: quick filters like "My items" may be active by default for personalisation

### Filter bar anatomy
```
┌──────────────────────────────────────────────────────┐
│ [Category ▾] [Status ▾] [Date range ▾] [+ More] │
├──────────────────────────────────────────────────────┤
│ Category: Finance ✕  Status: Open ✕   | Clear all   │
└──────────────────────────────────────────────────────┘
```

### Filter counts
Show the number of options and results:
- Option counts: "Finance (24)" in the dropdown
- Result count: "Showing 12 of 247" after filtering
- Badge count on the filter button: "Filters (3)"

## Do

- Show active filters as removable chips for transparency
- Provide a "Clear all" action when any filter is active
- Show result counts after filtering
- Apply filters immediately for responsive datasets
- Persist filter state within a session

## Don't

- Apply filters on every keystroke for text-based filters (debounce)
- Hide active filters from the user
- Require more than 3 clicks to apply a single filter
- Reset filters on page navigation without warning
- Show empty filter options (hide or disable options with 0 results)
