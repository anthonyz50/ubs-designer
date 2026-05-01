# UBS Standard Component: Radio Buttons

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=2-14055&mode=design
> React (UWR): RadioButtonGroup

## Usage
Allow users to select ONE option at a time from a list. Mutually exclusive selection.
Related: Checkboxes, Button select, Drop-down button, Drop-down

## Anatomy
1. Selected radio button
2. Unselected radio button
3. Label

## States
1. Default (unselected)
2. Hover
3. Focus
4. Pressed
5. Selected
6. Disabled
7. Read-only

### Error States
If none selected, error message appears requiring selection to continue.

## When to Use
- Mutually exclusive options requiring exactly one choice
- For long lists, use dropdown instead
- Clicking non-selected radio deselects previously selected one

## Rules
- Use mutually exclusive wording for labels
- Both radio button AND label are triggers
- Only one selection at a time; use checkboxes for multiple selection
- Radio button group is a form element requiring submit button
- More than one radio button allowed in a group

## Do's and Don'ts
- DO: One selection possible
- DON'T: Multiple selection not possible (use checkboxes)
