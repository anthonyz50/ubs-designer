# Accessibility Scorecard

## Purpose

The Accessibility Scorecard evaluates compliance with WCAG 2.2 Level AA and UBS accessibility standards. Use it to audit generated designs and implementations for accessibility issues before they reach users.

## Scoring Scale

| Range | Rating | Meaning |
|-------|--------|---------|
| 1-3 | Poor | Critical accessibility barriers. Users with disabilities cannot complete tasks. |
| 4-6 | Acceptable | Basic accessibility met but gaps remain. Some users will experience difficulty. |
| 7-8 | Good | Meets WCAG 2.2 AA. Most users can access all functionality without barriers. |
| 9-10 | Excellent | Exceeds AA requirements. Inclusive, robust, and thoroughly tested. |

## Categories

### 1. Colour Contrast (Weight: 20%)

**Standard:** WCAG 2.2 Success Criteria 1.4.3, 1.4.6, 1.4.11

**Requirements:**
- Standard text (below 18px or below 14px bold): minimum 4.5:1 contrast ratio against background
- Large text (18px and above, or 14px bold and above): minimum 3:1 contrast ratio
- UI components and graphical objects: minimum 3:1 contrast ratio against adjacent colours
- Focus indicators: minimum 3:1 contrast ratio against surrounding content

**Specific checks:**
- Body text on white background meets 4.5:1
- Placeholder text meets 4.5:1 (or 3:1 for large text)
- Disabled element text is distinguishable from enabled text
- Status colours meet contrast requirements against their background
- Button text meets requirements against the button fill colour
- Link text is distinguishable from surrounding body text (colour and underline)
- Icon contrast meets 3:1 against background

**Scoring:**
- 1-3: Multiple contrast failures on primary content. Users with low vision cannot read key information.
- 4-6: Most text passes but some elements fail (e.g., placeholder text, secondary labels, disabled states).
- 7-8: All text and UI elements pass AA requirements. Edge cases handled.
- 9-10: Meets AAA contrast where possible (7:1 standard text, 4.5:1 large text). Tested across all states.

### 2. Keyboard Navigation (Weight: 20%)

**Standard:** WCAG 2.2 Success Criteria 2.1.1, 2.1.2, 2.4.3, 2.4.7

**Requirements:**
- All functionality is operable via keyboard
- No keyboard traps (except intentional modal traps with Escape exit)
- Focus order follows the visual reading order
- Focus indicators are visible on all interactive elements

**Specific checks:**
- Tab moves through all interactive elements in logical order
- Shift+Tab moves backwards through the same order
- Enter or Space activates buttons
- Arrow keys navigate within grouped controls (tabs, radio buttons, menus)
- Escape closes modals, dropdowns, and popover elements
- Skip navigation link is the first focusable element
- Focus moves to main content after skip link activation
- Modal focus is trapped within the modal until dismissed
- Focus returns to the trigger element when a modal closes
- Custom components (accordions, sliders, date pickers) are fully keyboard operable

**Scoring:**
- 1-3: Critical interactive elements are unreachable by keyboard. Focus traps exist without escape.
- 4-6: Primary paths work but some features are keyboard-inaccessible. Focus order has inconsistencies.
- 7-8: All functionality is keyboard accessible. Focus order is logical. Focus indicators are visible.
- 9-10: Keyboard experience is smooth and efficient. Shortcuts are provided for power users. Focus management is seamless across all dynamic content.

### 3. Screen Reader Support (Weight: 20%)

**Standard:** WCAG 2.2 Success Criteria 1.3.1, 4.1.2, 4.1.3

**Requirements:**
- Semantic HTML is used as the foundation
- ARIA roles, states, and properties are correct and complete
- Live regions announce dynamic content changes
- All content is accessible to screen reader users

**Specific checks:**
- Page uses landmark regions (banner, navigation, main, contentinfo)
- Headings follow a logical hierarchy (h1 through h6, no skipped levels)
- Tables use proper header markup (`<th>` with `scope`)
- Form inputs have associated `<label>` elements
- Icon-only buttons have `aria-label` descriptions
- Decorative images use `alt=""`
- Meaningful images have descriptive alt text
- Status changes use `aria-live` regions (polite for updates, assertive for errors)
- Error messages are associated with their fields via `aria-describedby`
- Custom components have correct ARIA roles (e.g., `role="dialog"` for modals, `role="tablist"` for tabs)
- Dynamic content additions are announced appropriately
- Page title updates reflect the current context

**Scoring:**
- 1-3: Screen reader users cannot determine page structure or complete tasks. Missing landmarks, labels, and roles.
- 4-6: Basic structure is present but dynamic content is not announced. Some labels are missing or unhelpful.
- 7-8: Comprehensive screen reader support. All landmarks, labels, and live regions are implemented.
- 9-10: Screen reader experience is seamless. Announcements are well-timed and descriptive. Complex widgets are fully accessible.

### 4. Touch Targets (Weight: 10%)

**Standard:** WCAG 2.2 Success Criterion 2.5.8

**Requirements:**
- All interactive elements have a minimum touch target of 44x44px
- Sufficient spacing between adjacent targets to prevent accidental activation

**Specific checks:**
- Buttons meet 44x44px minimum (including padding for hit area)
- Icon buttons have adequate touch area (pad smaller icons to meet minimum)
- Checkbox and radio button targets include the label area
- Link text targets are large enough on mobile
- Close buttons on modals and dismissible elements meet minimum size
- Adjacent interactive elements have at least 8px spacing
- Critical actions (submit, delete) have at least 16px spacing from other targets

**Scoring:**
- 1-3: Multiple targets below minimum. Users frequently activate the wrong element.
- 4-6: Most targets meet minimum but some small or closely spaced elements remain.
- 7-8: All targets meet 44x44px. Spacing between targets is adequate.
- 9-10: Generous touch targets throughout. Critical actions have extra spacing. Tested on real touch devices.

### 5. Motion and Animation (Weight: 10%)

**Standard:** WCAG 2.2 Success Criteria 2.3.1, 2.3.3

**Requirements:**
- Respect the `prefers-reduced-motion` media query
- No content flashes more than three times per second
- Motion is purposeful, not decorative

**Specific checks:**
- `prefers-reduced-motion` query is implemented and tested
- When reduced motion is preferred, animations are replaced with instant transitions
- Loading indicators work with reduced motion (static or minimal animation)
- Auto-playing content can be paused or stopped
- No parallax scrolling or large-scale motion without user opt-in
- Transition durations are reasonable (150ms to 400ms for standard interactions)

**Scoring:**
- 1-3: No reduced-motion support. Content flashes or auto-plays without controls.
- 4-6: Some reduced-motion support but not comprehensive. Some animations persist regardless.
- 7-8: Full `prefers-reduced-motion` support. All animations respect the preference.
- 9-10: Thoughtful motion design. Animations enhance understanding when present and degrade gracefully when not.

### 6. Form Accessibility (Weight: 20%)

**Standard:** WCAG 2.2 Success Criteria 1.3.5, 3.3.1, 3.3.2, 3.3.3, 3.3.4

**Requirements:**
- All inputs have visible, persistent labels
- Required fields are clearly indicated
- Error messages are descriptive, visible, and programmatically associated
- Autocomplete attributes are used for personal data fields

**Specific checks:**
- Every input has a `<label>` element (not placeholder-only)
- Labels are positioned consistently (above or to the left of inputs)
- Required fields use "(required)" text, not asterisk alone
- Error messages appear below the field and are linked via `aria-describedby`
- Error messages explain what went wrong and what to do
- Form-level error summary appears at the top with links to each error
- Focus moves to the error summary on form submission with errors
- Input purpose is identified with `autocomplete` attributes
- Validation occurs on blur, not on each keystroke
- Fieldsets group related inputs with a descriptive `<legend>`
- Select elements have a default "Choose an option" placeholder
- Multi-step forms show progress and allow backwards navigation

**Scoring:**
- 1-3: Missing labels on key inputs. No error messages or only generic ones. No focus management for errors.
- 4-6: Labels present but some accessibility gaps. Error messages exist but are not programmatically linked.
- 7-8: All labels, error messages, and associations are correct. Focus management for errors works.
- 9-10: Exemplary form accessibility. Autocomplete attributes, fieldsets, and error handling are comprehensive. Tested with screen readers.

## Overall Score Calculation

```
Overall = (Colour Contrast × 0.20) + (Keyboard Navigation × 0.20) +
          (Screen Reader × 0.20) + (Touch Targets × 0.10) +
          (Motion × 0.10) + (Form Accessibility × 0.20)
```

| Overall | Rating |
|---------|--------|
| 1.0-3.9 | Poor: Critical barriers. Must fix before release. |
| 4.0-5.9 | Acceptable: Usable for many but excludes some users. Address before final review. |
| 6.0-7.9 | Good: Meets WCAG AA. Minor improvements possible. |
| 8.0-10.0 | Excellent: Inclusive and robust. Ready for release. |

## Automated Checks

Where possible, validate these programmatically:

- Contrast ratios: Use a contrast checking tool against all text/background combinations
- Heading hierarchy: Verify no skipped heading levels in the DOM
- Image alt text: Check all `<img>` elements for alt attributes
- Form labels: Verify every input has an associated label
- ARIA attributes: Validate ARIA roles, states, and properties against the WAI-ARIA specification
- Touch target size: Measure rendered dimensions of interactive elements
- Focus order: Tab through the interface and compare to visual order

## Recommendations Format

Report findings grouped by severity:

1. **Blockers** (scores 1-3): Must fix. List each failing criterion with the specific element and required change.
2. **Issues** (scores 4-6): Should fix. Prioritised by impact and user group affected.
3. **Enhancements** (scores 7-8): Nice to improve. Specific, actionable suggestions.
4. **Strengths** (scores 9-10): Highlight good practices to reinforce and replicate.
