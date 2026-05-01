# UBS Standard Component: Data Table

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=1430-16275&mode=design
> React (UWR): DataTable

## Usage

Display dense and recurring information compactly. Each object occupies a horizontal row, with attributes in columns.

**Synonyms:** database, tabular data, spreadsheet, Excel

Data tables are **interactive** (users can edit data). For display-only data without editing, use **Simple Table** instead.

---

## Construction (Anatomy)

A minimal table consists of a header row and data rows. All other elements are optional.

| # | Element | Required |
|---|---------|----------|
| 1 | Search bar | Optional |
| 2 | Number of rows | Optional |
| 3 | Table settings | Optional |
| 4 | Filter toggle | Optional |
| 5 | Sorting tool | Optional |
| 6 | Filtering tool | Optional |
| 7 | Regular row | Yes |
| 8 | Hovered row | Interaction state |
| 9 | Column header | Yes |
| 10 | Table cell | Yes |
| 11 | Pagination | Optional |
| 12 | Row counter | Optional |

---

## Features

### Search
Filters the **whole data set**, not just the currently displayed selection.

### Column Settings
Show/hide columns. Start with a smaller default column set and let advanced users customise their view.

### Column Filtering
Filter columns with optional logic operators for advanced data selection.

### Zebra Stripes
Alternating row backgrounds help users orient while scanning across rows horizontally.

### Column Dragging
Users can rearrange columns to match their preferences.

### Row Dragging
Users can change row order. **Only available if the table is NOT sorted.** Sorting and manual row ordering are mutually exclusive.

---

## Table Cells (14 Types)

| # | Cell Type | Description |
|---|-----------|-------------|
| 1 | Regular values | Standard text/number display |
| 2 | Regular values with icon | Value with an accompanying icon |
| 3 | Badge values | Value displayed as a badge |
| 4 | Value with tertiary colour | Colour-coded value |
| 5 | Link | Clickable text link |
| 6 | Link with icon | Link accompanied by an icon |
| 7 | Button | Action button within a cell |
| 8 | Button icon | Icon-only action button |
| 9 | Checkbox | Selection checkbox |
| 10 | Badge | Status/category badge |
| 11 | Positive amounts | Green-tinted positive values |
| 12 | Negative amounts | Red-tinted negative values |
| 13 | Custom cell with sparkline | Inline mini chart |
| 14 | Custom cell with tooltip | Value with hover tooltip |

---

## Editable Cells

- Double-click to enter edit mode
- Display an edit icon to identify which cells are editable
- Use the edit icon approach if fewer than 20% of columns are editable
- States: Default → Hover → Edit → Edit icon
- Editing can be applied to the whole table or selected columns only

---

## Density (3 Levels)

| Level | Use Case |
|-------|----------|
| **Small** | Complex applications with many data points |
| **Medium** | Default usage for most scenarios |
| **Large** | Wide displays and mobile devices |

---

## Rules

### Alignment
- Amounts: **right-aligned**
- Text: **left-aligned**
- Headers: aligned with their data
- Avoid centre alignment

### Grouping
Group similar columns together for clarity and logical scanning.

### Titling
Always give the table a title for context and citation. Users should understand what data the table represents.

### Units
Include units only in the header row (the most repeated part). Do not repeat units in every cell.

### Warning/Error Cells
Cells with warnings or errors must include an error message explaining the issue.

### Colouring
- White card on Alabaster background
- Use zebra-stripe rows for horizontal scanning orientation

---

## Do's and Don'ts

### Do's
- ✅ Checkbox to select row always on the **LEFT** side
- ✅ Countable numbers always **RIGHT-aligned**
- ✅ Row actions always on the **RIGHT** side
- ✅ Group related columns together
- ✅ Always provide a table title
- ✅ Use zebra striping for readability

### Don'ts
- ❌ Checkbox on the right side
- ❌ Mix data alignment across the table
- ❌ Place destructive options in the middle of the table
- ❌ Repeat units in every cell (header only)
- ❌ Allow row dragging on sorted tables

---

## Responsive Tables

On mobile, use **lists** to display entries with the most important information. Tables on mobile are inherently challenging due to limited horizontal space.

### Exceptions

| Scenario | Approach |
|----------|----------|
| Tight budget + read-only table | Scrollable data table on mobile is acceptable (UX will suffer) |
| All other cases | Reproduce table content as card/list layout |

---

## Implementation Notes

- React component: `DataTable` (from UWR library)
- Simple Table is a separate component for non-interactive, display-only use
- Consider density levels based on the target device and data complexity
- Editable cells should provide clear visual affordance of editability
- Ensure keyboard navigation works across all interactive cell types
