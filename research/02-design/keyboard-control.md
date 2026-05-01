# UBS Standard: Keyboard Control

> Source: UBS Frontify Portal, Standard Basics (Document 365)

## Core Navigation Keys
- **Tab** - jump to next interactive element or group
- **Shift + Tab** - jump to previous interactive element or group
- **Enter** - open link, select dropdown option, activate button
- **Spacebar** - scroll page, check/uncheck checkbox, expand dropdown

Reference: WAI-ARIA Authoring Practices (w3.org/TR/wai-aria-practices-1.1/)

## Best Practices
- Interaction must be intuitive and easily understood
- Must be visually obvious which element has keyboard focus (most UBS components use browser focus, some have custom style)
- When using JavaScript, ensure accessibility: items that cannot receive native keyboard focus use `tabindex="0"`
- Determine logical and intuitive focus order: left to right, top to bottom, header first → main navigation → page navigation → footer

## Component Keyboard Control Areas
1. Scrolling, moving between components, selecting, exiting
2. Dropdowns, search, checkboxes, radio buttons
3. Menu and tabs
4. Masthead
