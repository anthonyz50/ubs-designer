# UBS Standard Component: Masthead Navigation

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=959-37218&mode=design
> React (UWR): MastheadNavigation

## Usage
Contains links to main sections (domains) of application/platform. Always combined with Header component. Up to three levels of navigation depending on complexity.
Related: Header

## Anatomy
1. Navigation items
2. Navigation background
3. Right-aligned navigation items (optional)

## Types

### Single-level Navigation
Simplest navigation. Quick switching between pages. Shows user current location.

### Double-level Navigation
Two rows of navigation. Second row underneath. Current tab in second row: bold text (not red bottom border).

### Multi-level Navigation
Two or three levels. Second and third levels as dropdowns. Dropdowns always open to the RIGHT side.

### Mega Drop-down Navigation
Special menu type. Can contain quick links and message boxes with status information.

## Navigation Item Types
Standard items redirect users to pages/sections on click.
- Internal pages: open in SAME browser tab
- External apps: open in NEW tab

### Item Variants
1. Standard
2. With alert
3. With icon
4. More menu button

### Menu Item Variants
1. Standard
2. With alert

## States
### Navigation Items
1. Basic
2. Current
3. Focus
4. Hover
5. Pressed
6. Selected

### Menu Items
1. Basic
2. Active (current)
3. Focus
4. Hover
5. Pressed

## Responsive Breakpoints
| Size | Width | Notes |
|------|-------|-------|
| Large | >1280px | Full masthead |
| Medium | >1024px | Shortened components (icons only) |
| Small | >600px | Items under More menu |
| Extra small | >320px | Hamburger menu |

### Responsive Rules
When scaling down:
1. Use shortened components (icons only instead of icons + labels)
2. Hide first-level items that don't fit under "More" menu button
3. Hide app sub-context (if applicable)
4. Hide all navigation items under hamburger menu button

## Rules
- Masthead stretches inside content with defined maximum width
- Always provides at least one level of navigation
- Must be consistent across all application pages

## Do's and Don'ts
- DO: Use proper masthead type for screen resolution
- DON'T: Use masthead type for different (bigger/smaller) resolution
- DO: Stick to predefined patterns
- DON'T: Use components/patterns other than predefined
