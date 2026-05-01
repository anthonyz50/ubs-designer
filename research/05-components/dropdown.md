# UBS Standard Component: Dropdown

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=597-28295&mode=design
> React (UWR): Dropdown

## Usage

Allow users to select from a pre-defined list (functionally similar to radio buttons but more compact). Dropdowns hide the options from first view, requiring an extra click to reveal them.

---

## Anatomy

| # | Element | Required |
|---|---------|----------|
| 1 | Initial dropdown | Yes |
| 2 | Expanded dropdown | Interaction state |
| 3 | Label | Yes |
| 4 | Value (selected item) | Yes (after selection) |
| 5 | Group title | Optional (for grouped options) |
| 6 | Asterisk | Optional (marks required fields) |
| 7 | Info tooltip | Optional |

---

## Types

### 1. Standard Dropdown
Pre-defined list of options. The most common dropdown variant.

### 2. Dropdown with Search
For longer lists. Includes a dynamic search field that reacts to every letter typed, filtering options in real time.

### 3. Space-saving Dropdown
Compact variant for use in limited space contexts.

### 4. Dropdown with Multiple Selection
Allows users to select several options from the list. Combines dropdown compactness with multi-select functionality.

---

## States

| # | State | Description |
|---|-------|-------------|
| 1 | Initial | Default closed state |
| 2 | Hover | Mouse cursor over the dropdown |
| 3 | Filled | A value has been selected, dropdown closed |
| 4 | Focus | Keyboard-only focus indicator |
| 5 | Disabled | Greyed out, non-interactive |
| 6 | Read-only | Displays value but cannot be changed |
| 7 | Validation error | Required dropdown with no selection |

---

## When to Use

### Option Count Guidelines

| Scenario | Recommendation |
|----------|----------------|
| Fewer than 5-7 options | Consider radio buttons, segmented controls, or checkboxes instead |
| 5-9 options | Standard dropdown works well |
| More than 9-10 options | Include a search field |

### Best Practices

- If the list is taller than the dropdown container, it should scroll internally
- Labels must be meaningful and clear: use "Destination" not "Please select"
- Keep option text short and clear
- For long lists (e.g. countries), group the most-used options at the top
  - Example: Australia, Hong Kong, Singapore, Switzerland, UK, USA covers approximately 90% of UBS users
- No read-only mode exists that hides the dropdown. If a user has only one option, still let them open it to see there's only one choice (transparency)

---

## Motion

The dropdown uses a smooth **scale and fade-in transition** with a rotating triangle indicator when expanding/collapsing.

---

## Do's and Don'ts

### Do's
- ✅ Options list appears **BEHIND** the dropdown trigger (layered below in z-order, expanding downward)
- ✅ Display only options in the list (no duplicated labels)
- ✅ Options always remain visible within the browser window (reposition if needed)
- ✅ Use search for lists with more than 9-10 items
- ✅ Group frequently used options at the top of long lists
- ✅ Use meaningful, descriptive labels

### Don'ts
- ❌ Appear **BELOW** the trigger (as a separate disconnected element)
- ❌ Duplicate the list label as an option within the list
- ❌ Let the dropdown get cut off by the browser window edge
- ❌ Use dropdowns for fewer than 5 options (use radio buttons instead)
- ❌ Use vague labels like "Please select" or "Choose one"

---

## Implementation Notes

- React component: `Dropdown` (from UWR library)
- Ensure dropdown repositions automatically to stay within viewport bounds
- Search filtering should be case-insensitive and support partial matching
- For multi-select dropdowns, show selected items as tags/chips or a comma-separated list
- Keyboard navigation: arrow keys to move through options, Enter to select, Escape to close
- The rotating triangle animation should use standard UBS easing values
