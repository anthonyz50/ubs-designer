# Button

## Purpose

Buttons trigger actions. They are the primary mechanism for users to submit forms, navigate workflows, confirm decisions, and interact with the interface.

## Variants

### Primary
- UBS Red `#E60000` background, white text
- Used for the single most important action on a page
- **One primary button per view**
- Examples: "Submit request", "Confirm", "Save changes"

### Secondary
- Transparent background with Neutral-80 border, Neutral-80 text
- Used for supporting actions alongside a primary button
- Examples: "Cancel", "Back", "Save as draft"

### Tertiary (text button)
- No background, no border, UBS Red text
- Used for low-emphasis actions, inline actions, and navigation-like actions
- Examples: "Learn more", "View details", "Clear all"

### Destructive
- Error `#BD000C` background, white text
- Used exclusively for irreversible or high-impact actions
- Always preceded by a confirmation dialog
- Examples: "Delete", "Remove", "Revoke access"

### Icon button
- Icon only, no visible text
- Must include `aria-label` for accessibility
- Used only for universally understood actions: close, search, menu, refresh
- Minimum touch target: 44x44px

## Props / Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `primary` \| `secondary` \| `tertiary` \| `destructive` | `secondary` | Visual style |
| size | `small` \| `medium` \| `large` | `medium` | Button size |
| disabled | boolean | `false` | Disables interaction |
| loading | boolean | `false` | Shows loading spinner, disables click |
| icon | ReactNode | — | Optional leading icon |
| iconPosition | `left` \| `right` | `left` | Icon placement |
| fullWidth | boolean | `false` | Stretches to container width |
| type | `button` \| `submit` \| `reset` | `button` | HTML button type |

## States

### Default
- Resting visual appearance per variant
- Cursor: pointer

### Hover
- Primary: darken background by 10%
- Secondary: light grey background fill (Neutral-05)
- Tertiary: underline text
- Destructive: darken background by 10%

### Active (pressed)
- Primary: darken background by 20%
- Secondary: Neutral-10 background
- Tertiary: darken text colour
- Destructive: darken background by 20%

### Focus
- 2px solid Lagoon `#009BD2` outline with 2px offset
- Applied on `:focus-visible` (keyboard focus only)
- Consistent across all variants

### Disabled
- Opacity: 0.4
- Cursor: not-allowed
- No hover or active state changes
- Tooltip explaining why the button is disabled (when contextually helpful)

### Loading
- Replace button text with a spinner + "Loading..." text
- Button remains the same width (prevent layout shift)
- Pointer events disabled
- Example: "Submit request" becomes "[spinner] Submitting..."

## Sizing

| Size | Height | Padding (horizontal) | Font size | Icon size |
|------|--------|---------------------|-----------|-----------|
| Small | 32px | 12px | 14px | 16px |
| Medium | 40px | 16px | 16px | 20px |
| Large | 48px | 24px | 16px | 20px |

- Minimum width: 80px (to prevent tiny buttons with short labels)
- Touch target: all sizes meet 44x44px minimum (use padding to extend hit area if visual size is smaller)

## Spacing

- Between buttons in a group: 12px horizontal gap
- Icon to text: 8px gap
- Button group alignment: right-aligned for form actions, centred for single-action contexts

## Colour Usage

| Variant | Background | Text | Border |
|---------|-----------|------|--------|
| Primary | UBS Red `#E60000` | White `#FFFFFF` | None |
| Secondary | Transparent | Neutral-80 `#333333` | 1px Neutral-20 `#CCCCCC` |
| Tertiary | Transparent | UBS Red `#E60000` | None |
| Destructive | Error `#BD000C` | White `#FFFFFF` | None |

## Accessibility

- All buttons use the `<button>` element (not `<a>` or `<div>`)
- Icon-only buttons require `aria-label` describing the action
- Loading state uses `aria-busy="true"` and announces "Loading" to screen readers
- Disabled buttons use `aria-disabled="true"` (prefer this over `disabled` attribute to keep buttons focusable for screen readers)
- Button text describes the action: "Submit request" not "Submit" or "Go"
- Colour contrast: all variants meet 4.5:1 for text against background

## Keyboard Support

| Key | Action |
|-----|--------|
| `Enter` | Activate the button |
| `Space` | Activate the button |
| `Tab` | Move focus to the next focusable element |
| `Shift+Tab` | Move focus to the previous focusable element |

## Usage Guidelines

### Button hierarchy per page
- **Maximum one primary button** per view/section
- **Maximum three button variants** per page (e.g., primary + secondary + tertiary)
- If more than three actions are needed, use an overflow menu for lower-priority actions

### Button labels
- Use verb + noun format: "Create request", "Download report", "Save changes"
- Keep labels under 3 words when possible
- Sentence case: "Submit request" not "Submit Request"
- Match the label to the action precisely: "Remove member" not "OK"

### Button placement
- **Forms**: Right-aligned, primary rightmost. Cancel/secondary to the left.
- **Modals**: Right-aligned in the footer. Destructive action right, cancel left.
- **Cards**: Bottom of the card, left-aligned or full-width.
- **Toolbars**: Grouped logically, primary action rightmost.

### Confirmation buttons in dialogs
- Destructive actions: button label matches the action ("Delete", "Remove"), not generic ("OK", "Yes")
- Non-destructive: use specific labels ("Save changes", "Submit")
- Cancel is always available

## Do

- Use one primary button per view
- Write clear, action-oriented labels
- Show loading state for async actions
- Provide focus indicators on keyboard navigation
- Use the destructive variant with a confirmation dialog

## Don't

- Use more than three button variants on one page
- Use a button when a link is more appropriate (navigation to a new page)
- Disable a button without explaining why
- Use "Click here" or "Submit" as standalone labels
- Use UBS Red for destructive actions (use Error colour)
- Stack more than 2 buttons vertically (use horizontal layout or overflow menu)
