# UBS Standard Component: Tabs

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=888-54441&mode=design
> React (UWR): Tabs

## Usage

Break information into logical sections for better readability. Clicking a tab reveals its content without navigating away from the current page.

**Related:** Accordion, Expandable panel, Tabs navigation

---

## Anatomy

| # | Element | Required |
|---|---------|----------|
| 1 | Label | Yes |
| 2 | Active tab | Yes |
| 3 | Alert | Optional (notification badge on tab) |
| 4 | Vertical divider | Contextual |
| 5 | Content of the tab | Yes |

---

## Types

### 1. Standard (Shadowed)
Used on grey backgrounds. Emphasises the content area below with a shadow effect.

### 2. Boxed
Used on white backgrounds. Available in two sizes:
- **Standard** size
- **Small** size

### 3. Muted
For very limited space contexts. No container styling. Works on both white and concrete (grey) backgrounds.

### 4. Ghost
**ONLY** for nesting inside boxed components (tiles, overlays, expandable panels). Never used standalone below the masthead.

### 5. Ghost Distributed
Used only in narrow boxed components where tab labels are of equal length. Tabs distribute evenly across the available width.

### Tab Type Selection Guide

| Context | Recommended Type |
|---------|-----------------|
| Grey background, main content | Standard (Shadowed) |
| White background, main content | Boxed |
| Limited space, no container needed | Muted |
| Inside tiles, overlays, panels | Ghost |
| Narrow boxed component, equal labels | Ghost Distributed |

---

## States

| # | State | Description |
|---|-------|-------------|
| 1 | Initial | Default unselected tab |
| 2 | Hover | Mouse cursor over the tab |
| 3 | Pressed | Active click/tap state |
| 4 | Keyboard focus | Focus via keyboard navigation |
| 5 | Disabled | Greyed out, non-interactive |
| 6 | Selected | Currently active tab |

---

## Behaviour Rules

- Use when large content can be separated into logical sections
- Different tabs should be **logically related but mutually exclusive**
- Content is accessible without page reload (client-side switching)
- Pay attention to label legibility, especially with many tabs
- The tab label acts as the headline for the tab content
- Tab content without a label is **NOT possible**
- Motion: standard UBS easing values for transitions between tabs

---

## Nesting Rules

Tabs can be nested, but with specific constraints:

| Nesting | Allowed |
|---------|---------|
| Ghost tabs inside Highlighted/Boxed tabs | ✅ Yes |
| Highlighted tabs inside Highlighted tabs | ❌ No |
| Ghost tabs standalone (below masthead) | ❌ No |

---

## Do's and Don'ts

### Do's
- ✅ Apply padding to tab content area
- ✅ Nest Ghost tabs inside Highlighted tabs when needed
- ✅ Always **left-align** tabs
- ✅ Labels must be legible, related, and mutually exclusive
- ✅ Use tab labels as content headlines
- ✅ Keep label text concise

### Don'ts
- ❌ Compromise legibility of tab labels
- ❌ Nest Highlighted tabs inside Highlighted tabs
- ❌ Centre-align tabs
- ❌ Use Ghost tabs as standalone (outside boxed components)
- ❌ Create tabs without labels
- ❌ Use too many tabs (consider alternative navigation if more than 6-8)

---

## Implementation Notes

- React component: `Tabs` (from UWR library)
- Ensure proper ARIA roles: `tablist`, `tab`, `tabpanel`
- Keyboard navigation: arrow keys between tabs, Enter/Space to select
- Tab panels should use `aria-labelledby` referencing their tab
- Only the selected tab panel should be visible; others should be hidden but may be kept in DOM
- Transitions between tabs should use standard UBS easing values
- Alert badges on tabs should be accessible to screen readers
