# UBS Standard Component: Switch

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=2-14057&mode=design
> React (UWR): Switch

## Usage
Controller of ON/OFF binary state. Either selected or deselected, toggles between two opposite states.
Related: Radio buttons, Button select

## Anatomy
1. Track
2. Pointer
3. Switch label

## Types
1. **Basic** - standard toggle
2. **High emphasis** - prominent toggle
3. **Show/Hide** - for form elements only

## States
Two states: Off and On

## Rules
- Icon always shows CURRENT state (not what happens if clicked)
- Provide clear, relevant label description
- Effect is IMMEDIATE and autosaved; no loading, confirmation, or saving needed

## Do's and Don'ts
- DO: Follow specifications
- DO: Always use with explanatory text
- DON'T: Custom combinations with different text styles/spacings
- DON'T: Standalone switch without label
