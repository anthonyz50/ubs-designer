# UBS Standard Components: Section Block

> Source: UBS Frontify Portal, Standard Components (Document 17)

## Usage
Complex component containing expandable panels combined into sections/groups.

**React (UWR):** SectionBlock

## Anatomy
1. Content block
2. Header
3. Description (optional)
4. Expandable panel

## States
- Focus
- Hover
- Pressed
- Collapsed / Expanded

### Collapsed vs Expanded
- Click collapsed panel to expand it
- Previous expanded panel auto-collapses
- ONLY ONE panel can be expanded at a time

## Behaviour

### Rules
- Only one panel expanded at a time
- Panels in one group share same logical context
- Should NOT stretch to full screen width (all 12 columns)
- Combine with sidebar in 9:3 or 8:4 proportions

### Responsiveness
- Min size: 640px
- Max size: 996px

### Do's and Don'ts
- DO: Follow max character per line from Typography page
- DON'T: Stretch text content to full component width
