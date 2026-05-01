# UBS Standard Component: Accordion

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=1430-16190&mode=design
> React (UWR): Accordion

## Usage
Hide or display additional sections of information within page content. For text content only; for sophisticated usage, check Expandable panels. Minimum 2 items (headers).
Use when giving user overview of same-tier categories to decide whether to view details. Example: FAQ page with questions as headers, answers hidden.
Related: Link (Expandable), Expandable panel

## Anatomy
1. Collapsed header
2. Expanded header
3. Chevron (expand/collapse indicator)
4. Expanded content

## Types
One type only. Header and content adjust to fit content.

## States
1. Collapsed
2. Hover
3. Pressed
4. Focus (keyboard)

## Rules
- Minimum 2 headers per accordion
- Use to simplify content and reduce scrolling
- Don't hide important or critical information
- Keep accordion count per page to minimum

## Do's and Don'ts
- DO: Use concise titles
- DON'T: Full sentences or variable title length

## Accessibility

### WCAG Criteria
| Criteria | Level |
|----------|-------|
| 1.4.13 Content on Hover or Focus | AA |
| 2.4.7 Focus Visible | AA |
| 2.1.1 Keyboard | A |
| 4.1.2 Name, Role, Value | A |

### Keyboard Interaction
| Key | Action |
|-----|--------|
| Enter/Space | Expand/collapse focused panel. If only one panel allowed, collapses other. |
| Tab | Move to next focusable element (all accordion elements in page tab sequence) |
| Shift+Tab | Move to previous focusable element |
| Down Arrow (optional) | Move focus to next header (wraps or stops at last) |
| Up Arrow (optional) | Move focus to previous header (wraps or stops at first) |
| Home (optional) | Move focus to first header |
| End (optional) | Move focus to last header |

### ARIA Requirements
- Header title in element with role="button"
- Button wrapped in element with role="heading" and appropriate aria-level
- Button is ONLY element inside heading element
- Visible panel: button has aria-expanded="true"; hidden: "false"
- Button has aria-controls pointing to panel content ID
- If panel visible and can't be collapsed: button has aria-disabled="true"
- Optional: panel container has role="region" and aria-labelledby
- Avoid region role if more than ~6 expandable panels (landmark proliferation)
