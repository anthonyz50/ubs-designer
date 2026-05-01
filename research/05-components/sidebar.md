# UBS Standard Component: Sidebar

> Source: UBS Frontify Portal, Standard Components (Document 17)

## Usage
Displays various forms of information on the RIGHT side of an application/desktop UI.
Synonyms: Drawer, Inspector panel

## Types
### 1. Standard Sidebar
For displaying details (accounts, portfolios). Usually triggered from table item.
Anatomy: Title area, Close button, Content space, Action bar

### 2. Large Sidebar
Wider than standard. Covers more of the page below.

### 3. Content Scrolling Sidebar
For bigger amounts of data. Visually different with greyish header.

## Behaviour

### Events
- Triggered from any interactive element on content area
- Stays on TOP of all other elements (even above fixed header/footer)
- Sticks to right edge of browser window
- Covers content behind
- Closes on: click close icon OR click partially-visible main content

### Motion
- **Showing**: ease-out (starts suddenly, progressively slows)
- **Hiding**: ease-in (starts slowly, progressively speeds up, stops suddenly)
- Hiding transition is QUICKER than revealing

### Rules
- Positioned on RIGHT side of screen
- Content should be SECONDARY to main page content
- Main content remains visually underneath
- Tapping/clicking partially-visible main content closes sidebar
- Do NOT oversize the sidebar

## Related
- Overlays
- Accordions
