# UBS Standard Component: Panel

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=412-3645&mode=design
> React (UWR): Panel

## Usage
Panels hide and show content; provide more space. Elements within a list. Help user navigate among important sections while quickly browsing subsection titles.
Related: Accordion, Tile
Synonyms: Expandable panel, Floating accordion

## Anatomy
1. Collapsed panel
2. Button with optional actions
3. Expanded panel
4. Expanded panel header
5. Close button to collapse panel
6. Panel content
7. Action bar for buttons

## States
### Collapsed Panel
1. Collapsed (default)
2. Focus
3. Hover
4. Pressed

### Expanded Panel
- Header and footer are STICKY to browser window (always visible)
- May contain extensive information

## Behaviour
- Used to replace main static content with dynamic overview list
- For overview list inside main content, use Accordion instead

### Rules
- Only ONE panel can be expanded at a time
- Panels in one group should share same logical context
- Panel group can have a headline (e.g. "Accounts for paying")

## Do's and Don'ts
- DO: Use sticky header for quick access to actions
- DO: Use sticky footer for quick access to actions
- DON'T: Hide access to actions
