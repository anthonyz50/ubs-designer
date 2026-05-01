# Accessibility

## Standard

All UBS digital products conform to **WCAG 2.2 Level AA**. This is the minimum requirement, not the aspiration. Where Level AAA criteria can be met without compromising usability, apply them.

## Colour and Contrast

### Contrast ratios
| Element | Minimum ratio | Standard |
|---------|--------------|----------|
| Standard text (below 18px) | 4.5:1 | WCAG AA |
| Large text (18px+ or 14px bold) | 3:1 | WCAG AA |
| UI components and icons | 3:1 | WCAG AA |
| Focus indicators | 3:1 | WCAG AA |
| Decorative elements | No requirement | N/A |

### Colour usage rules
- Never use colour as the sole means of conveying information
- Pair every status colour with an icon and text label
- Error states use icon + colour + descriptive text
- Links must be distinguishable from surrounding text by more than colour alone (use underline)
- Ensure sufficient contrast between text and its background in all states (default, hover, focus, active)

### Testing
- Test all colour combinations with a contrast checker before implementation
- Simulate colour blindness (protanopia, deuteranopia, tritanopia) using browser dev tools
- Verify charts and data visualisations are distinguishable without colour (use patterns or labels)

## Focus Management

### Focus indicator
- **Colour**: Lagoon `#009BD2`
- **Style**: 2px solid outline with 2px offset
- **Visibility**: Focus indicators must be visible in all contexts. Never suppress the default focus ring without providing a custom one.

```css
:focus-visible {
  outline: 2px solid #009BD2;
  outline-offset: 2px;
}
```

### Focus order
- Focus order follows the visual reading order (left to right, top to bottom for LTR layouts)
- Modal and dialog focus is trapped within the overlay until dismissed
- When a modal closes, focus returns to the element that triggered it
- Skip navigation link is provided as the first focusable element on every page
- After page navigation, focus moves to the main content area or the page heading

### Focus management for dynamic content
- When content is added to the page (e.g., validation errors, new list items), move focus to the new content or announce it via live region
- When content is removed, move focus to the nearest logical element
- Loading states should announce completion to screen readers

## Keyboard Navigation

### All interactive elements must be keyboard accessible
- Buttons: `Enter` or `Space` to activate
- Links: `Enter` to follow
- Checkboxes: `Space` to toggle
- Radio buttons: Arrow keys to navigate within group, `Space` to select
- Tabs: Arrow keys to navigate, `Enter` or automatic activation
- Dropdowns: Arrow keys to navigate options, `Enter` to select, `Escape` to close
- Modals: `Escape` to close, `Tab` to cycle through focusable elements within

### Keyboard shortcuts
- Avoid single-key shortcuts (they conflict with screen readers)
- If keyboard shortcuts are provided, make them discoverable and dismissable
- Provide a shortcut reference accessible via `?` key or help menu

### Tab order
- Tab order follows a logical sequence
- Use `tabindex="0"` for custom interactive elements
- Avoid `tabindex` values greater than 0 (they disrupt natural flow)
- Use `tabindex="-1"` for programmatic focus targets that should not be in the tab order

## Touch Targets

### Minimum size
- **44x44px** minimum touch target for all interactive elements
- This applies to buttons, links, checkboxes, radio buttons, icon buttons, and any other tappable element
- If the visual element is smaller than 44px, extend the hit area using padding

### Spacing between targets
- Minimum 8px gap between adjacent touch targets
- For critical actions (submit, delete), use 16px minimum gap to prevent accidental taps

## Semantic HTML

### Use the right element
- Buttons for actions: `<button>`
- Links for navigation: `<a href>`
- Headings in order: `<h1>` through `<h6>` (never skip levels)
- Lists for groups: `<ul>`, `<ol>`, `<dl>`
- Tables for tabular data: `<table>` with `<thead>`, `<tbody>`, `<th scope>`
- Forms with labels: every `<input>` has an associated `<label>`

### Landmarks
Every page includes these ARIA landmarks:
- `<header>` or `role="banner"`: Site header
- `<nav>` or `role="navigation"`: Primary navigation
- `<main>` or `role="main"`: Primary content
- `<footer>` or `role="contentinfo"`: Site footer
- `<aside>` or `role="complementary"`: Supporting content

### ARIA usage
- Prefer semantic HTML over ARIA attributes
- Use ARIA only when native HTML cannot achieve the required semantics
- Never use `role="presentation"` or `aria-hidden="true"` on focusable elements
- All custom components must have appropriate ARIA roles, states, and properties

## Screen Reader Support

### Live regions
- Use `aria-live="polite"` for non-urgent updates (status messages, progress)
- Use `aria-live="assertive"` for critical updates (errors, session timeouts)
- Use `role="alert"` for error messages that need immediate attention
- Use `role="status"` for non-critical status updates

### Labels and descriptions
- All form inputs have visible labels (not placeholder-only)
- Complex components use `aria-describedby` for supplementary instructions
- Icon-only buttons use `aria-label` to describe the action
- Decorative images use `alt=""`
- Meaningful images use descriptive `alt` text
- Group related form fields with `<fieldset>` and `<legend>`

### Tables
- Data tables include `<caption>` describing the table content
- Column and row headers use `<th>` with appropriate `scope` attribute
- Complex tables use `headers` and `id` attributes for cell associations
- Avoid layout tables; use CSS Grid or Flexbox instead

## Motion and Animation

### Preferences
- Respect `prefers-reduced-motion` media query
- When reduced motion is preferred, replace animations with instant state changes
- Default animation duration: 200-300ms for micro-interactions
- No animation should flash more than 3 times per second

### Essential motion
- Loading spinners and progress bars are acceptable even with reduced motion preference
- Provide text alternatives alongside animated content (e.g., "Loading..." text with spinner)

## Forms

### Labels
- Every input has a visible label positioned above or to the left
- Required fields are marked with "(required)" text, not asterisk alone
- Optional fields may be marked with "(optional)" when most fields are required

### Validation
- Inline validation appears on blur, not on every keystroke
- Error messages appear below the input, associated via `aria-describedby`
- Error messages explain what went wrong and what to do
- Form-level error summary appears at the top of the form, with links to each error
- Focus moves to the error summary when the form is submitted with errors

### Autocomplete
- Use appropriate `autocomplete` attributes for personal data fields
- Support browser autofill for name, email, address, phone, and payment fields

## Testing Checklist

1. Navigate the entire interface using only a keyboard
2. Test with at least two screen readers (VoiceOver + NVDA or JAWS)
3. Verify all colour contrast ratios meet minimums
4. Check focus order follows visual layout
5. Confirm all images have appropriate alt text
6. Validate HTML for semantic correctness
7. Test with 200% browser zoom
8. Test with text-only zoom at 200%
9. Verify touch targets meet 44x44px minimum
10. Check `prefers-reduced-motion` behaviour
11. Test with voice control software
12. Verify form error handling and focus management

## Do

- Use semantic HTML as the foundation
- Test with real assistive technology
- Provide text alternatives for all non-text content
- Maintain logical focus order
- Make all functionality available via keyboard

## Don't

- Rely on colour alone to convey meaning
- Suppress focus indicators
- Use `tabindex` values greater than 0
- Auto-play audio or video
- Create keyboard traps (except intentional modal traps with escape route)
- Hide content visually that screen reader users need
