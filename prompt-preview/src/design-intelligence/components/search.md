# Search

## Purpose

Search allows users to find content by entering text queries. It provides quick access to information across the application, filtering large datasets and surfacing relevant results efficiently.

## Variants

### Global search
- Available in the application header
- Searches across all content types (requests, users, articles, settings)
- Results grouped by content type
- Accessed via click or keyboard shortcut (Ctrl/Cmd + K)

### Contextual search
- Embedded within a specific view (table, list, panel)
- Searches within the current dataset only
- Results update inline, replacing the current view content

### Search with filters
- Combines text search with structured filter controls
- Filters narrow the search scope before or after querying
- Active filters shown as removable chips

## Props / Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | string | `"Search..."` | Placeholder text |
| label | string | — | Accessible label (required, can be visually hidden) |
| variant | `global` \| `contextual` | `contextual` | Search scope |
| debounceMs | number | `300` | Delay before triggering search |
| minChars | number | `2` | Minimum characters before searching |
| showRecent | boolean | `true` | Show recent searches on focus |
| maxRecent | number | `5` | Maximum recent search items |
| onSearch | function | — | Search handler |
| onClear | function | — | Clear handler |

## States

### Default (empty)
- Search icon (left-aligned) + placeholder text
- On focus: border transitions to Lagoon, recent searches appear in dropdown

### Active (typing)
- User input replaces placeholder
- Clear button (✕) appears on the right
- After debounce, results begin loading

### Loading
- Inline spinner replaces the search icon while results load
- Previous results remain visible (not cleared)

### Results
- Results appear below the search input
- Grouped by type (for global search)
- Search term highlighted in bold within results
- Result count displayed: "12 results for 'quarterly report'"

### No results
- "No results for '[query]'"
- Suggestions: "Try different keywords" or specific alternative queries
- Link to support or help if applicable

### Error
- "Search is temporarily unavailable. Try again in a moment."
- Previous results cleared
- Retry action available

### Focused (empty, with recent searches)
```
┌──────────────────────────────────┐
│ 🔍 Search...                     │
├──────────────────────────────────┤
│ Recent searches                  │
│   quarterly report           ✕   │
│   John Smith                 ✕   │
│   access request             ✕   │
│ ──────────────────────────────── │
│ Clear recent searches            │
└──────────────────────────────────┘
```

## Sizing

| Context | Height | Width | Font size |
|---------|--------|-------|-----------|
| Global (header) | 40px | 320-480px (expandable) | 16px |
| Contextual (inline) | 40px | Full width of container | 14px |

- Search icon: 20px
- Clear button: 20px (44x44px touch target via padding)
- Results dropdown: matches input width, max height 400px (scrollable)

## Spacing

- Search icon to text: 8px
- Text to clear button: 8px
- Input to results dropdown: 4px
- Between result items: 0px (items have internal padding of 12px vertical)
- Between result groups (global): 8px with group label

## Colour Usage

| Element | Colour |
|---------|--------|
| Input border | Neutral-20 `#CCCCCC` |
| Input border (focus) | Lagoon `#009BD2` |
| Search icon | Neutral-40 `#999999` |
| Placeholder text | Neutral-30 `#B3B3B3` |
| Input text | Neutral-90 `#1A1A1A` |
| Highlight in results | Bold weight (no colour change) |
| Result item hover | Neutral-05 `#F5F5F5` |
| Clear button | Neutral-40 `#999999` |
| No results text | Neutral-50 `#808080` |

## Accessibility

- Search input has a visible or visually hidden `<label>`: "Search" or "Search [context]"
- Uses `role="search"` on the containing `<form>` or `<div>`
- `role="combobox"` on the input with `aria-expanded` indicating dropdown visibility
- Results list uses `role="listbox"` with `role="option"` for each result
- `aria-activedescendant` tracks the currently highlighted result
- Clear button has `aria-label="Clear search"`
- Search icon is decorative: `aria-hidden="true"`
- Result count announced via `aria-live="polite"`: "12 results found"
- No results state announced: "No results for [query]"
- Keyboard shortcut (Ctrl/Cmd + K) announced in tooltip or help

## Keyboard Support

| Key | Action |
|-----|--------|
| `Ctrl/Cmd + K` | Focus the global search input |
| `Escape` | Clear input and close results (if open); if already clear, blur the input |
| `Arrow Down` | Move to the next result item |
| `Arrow Up` | Move to the previous result item |
| `Enter` | Navigate to the highlighted result, or submit the search query |
| `Tab` | Move focus to the next element (closes results) |

## Usage Guidelines

### Global search placement
- Right side of the application header
- Expands on focus to accommodate longer queries
- Collapses to icon-only on mobile; tap to expand

### Result item anatomy
```
┌──────────────────────────────────┐
│ [Icon]  Result title             │
│         Description snippet...   │
│         Category · Date          │
└──────────────────────────────────┘
```

### Performance
- Debounce search input by 300ms to prevent excessive API calls
- Show cached results instantly while fetching fresh data
- Minimum 2 characters before triggering a search
- Cancel in-flight requests when the user modifies the query

### Recent searches
- Store the last 5 search queries locally
- Display on focus when the input is empty
- Each recent item has a remove button (✕)
- "Clear recent searches" link at the bottom

### Search results grouping (global)
```
Requests (4)
  Request #123: Quarterly report
  Request #456: Access provision

Users (2)
  John Smith - Engineering
  Jane Doe - Finance

Articles (6)
  How to submit a request
  Quarterly report FAQ
```

## Do

- Debounce search input to optimise performance
- Highlight the search term in results
- Show recent searches for quick repeat queries
- Provide a clear button to reset the search
- Announce result counts to screen readers

## Don't

- Require the user to press Enter before showing results (search as you type)
- Clear previous results while new results are loading
- Show a blank dropdown while results load (show a spinner)
- Return more than 10 results per group in the dropdown (link to full results page)
- Use search as the only way to find content (provide browsing/navigation alternatives)
