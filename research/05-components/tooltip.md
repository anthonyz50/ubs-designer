# UBS Standard Component: Tooltip

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=1029-837&mode=design
> React (UWR): Tooltip

## Usage
Small boxes with information appearing on hover or focus. Ideal for defining words/functions, explaining icons, and giving info on data points in charts. Essential and legal information MUST be shown outside tooltips.
Synonyms: Flyout, Popover, Hover help, Info tip, Helper text, Hint, Tip

## Anatomy
1. Trigger (any object needing explanation)
2. Tooltip message

## Types
One type only. Any object can trigger a tooltip. Provide users with tooltip indicator (truncation or dotted underlining of text).

### Trigger Examples
- Tooltip on slider
- Tooltip on button select
- Tooltip on icon
- Tooltip on icon button
- Text segment with tooltip

## Rules
- Use for additional, non-crucial information only
- Message should be clear and convey the essence
- Remember tooltips disappear (not for persistent info)
- Use only for additional information

## Do's and Don'ts
- DO: Use only for additional information
- DO: Provide only additional (not crucial) info
- DO: If multiple tooltips near each other, keep same direction (spike)
- DO: Stick to predefined colours and styles
- DON'T: Place essential or legal information in tooltips
- DON'T: Use for crucial info (calculations, instructions, field requirements)
- DON'T: Mix tooltip directions
- DON'T: Use colours/styles different from predefined
