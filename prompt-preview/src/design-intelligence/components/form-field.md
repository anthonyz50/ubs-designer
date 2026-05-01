# Form Field

## Purpose

Form fields are the fundamental input components for collecting user data. Each form field wraps an input control with its label, helper text, validation messages, and required/optional indicators in a consistent layout.

## Variants

### Text input
- Single-line text entry
- Used for names, emails, short text, codes, reference numbers

### Textarea
- Multi-line text entry with adjustable height
- Used for descriptions, comments, notes, long-form content
- Shows character count when a maximum is set

### Select (dropdown)
- Single selection from a predefined list
- Used for 4-15 options
- Includes a default empty option: "Select..."

### Searchable select
- Select with a text filter for large option sets
- Used for 15+ options
- Filters options as the user types

### Checkbox
- Binary toggle or multi-select within a group
- Single checkbox for boolean values (opt-in, agreement)
- Checkbox group for selecting multiple items

### Radio group
- Mutually exclusive selection
- Used for 2-6 options
- Pre-select a default when one exists

### Date picker
- Date selection via calendar or direct text input
- Format: DD/MM/YYYY
- Optional time picker extension

### File upload
- File attachment with drag-and-drop zone
- Shows accepted types, size limits, and upload progress

## Props / Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | — | Visible label text (required) |
| name | string | — | Form field name (required) |
| type | string | `text` | Input type (text, email, password, number, tel, url) |
| placeholder | string | — | Placeholder hint text |
| helperText | string | — | Persistent guidance below the input |
| required | boolean | `false` | Marks the field as required |
| disabled | boolean | `false` | Disables the field |
| readOnly | boolean | `false` | Displays value as read-only |
| error | string | — | Error message (shown on validation failure) |
| maxLength | number | — | Maximum character count |
| autoComplete | string | — | HTML autocomplete attribute |
| prefix | string/node | — | Content before the input (e.g., currency symbol) |
| suffix | string/node | — | Content after the input (e.g., unit label) |

## States

### Default
- Label above the input (Neutral-70, 14px)
- Input with 1px Neutral-20 border, 12px padding, Neutral-90 text
- Helper text below (Neutral-50, 12px)
- Placeholder text (Neutral-30, 14px)

### Focus
- Border colour changes to Lagoon `#009BD2`
- 2px border width (expands inward, no layout shift)
- 2px Lagoon outline with 2px offset (consistent with other components)
- Label remains in position

### Filled
- User-entered text in Neutral-90
- Placeholder hidden
- Valid state: same visual as default (no success styling until submission)

### Error
- Border colour: Error `#BD000C`
- Error message appears below the input (Error colour, 12px)
- Error icon (alert circle) appears inside the input, right-aligned
- `aria-invalid="true"` and `aria-describedby` pointing to the error message
- Label and helper text remain visible

### Disabled
- Background: Neutral-05
- Text: Neutral-30
- Border: Neutral-10
- Cursor: not-allowed
- Tooltip explaining why (when contextually helpful)

### Read-only
- No border, no background
- Text displayed as static content
- Visually distinct from editable fields
- Used in review/summary screens

### Loading
- Input shows a subtle inline spinner (for async validation or data fetch)
- Field remains interactive but submission is prevented

## Sizing

| Size | Input height | Font size | Label size |
|------|-------------|-----------|------------|
| Small | 32px | 14px | 12px |
| Medium | 40px | 16px | 14px |
| Large | 48px | 16px | 14px |

- Default: medium
- Textarea: minimum height 80px, resizable vertically
- Full-width by default within their container
- Maximum width: 600px for standard inputs, 400px for short fields (dates, codes)

## Spacing

- Label to input: 4px
- Input to helper/error text: 4px
- Between stacked form fields: 16px
- Input internal padding: 12px horizontal, 8px vertical
- Prefix/suffix to input text: 8px
- Checkbox/radio to label text: 8px
- Between checkbox/radio options in a group: 8px

## Colour Usage

| Element | State | Colour |
|---------|-------|--------|
| Label | Default | Neutral-70 `#4D4D4D` |
| Label | Error | Neutral-70 (does not change) |
| Input border | Default | Neutral-20 `#CCCCCC` |
| Input border | Focus | Lagoon `#009BD2` |
| Input border | Error | Error `#BD000C` |
| Input text | Default | Neutral-90 `#1A1A1A` |
| Placeholder | Default | Neutral-30 `#B3B3B3` |
| Helper text | Default | Neutral-50 `#808080` |
| Error text | Error | Error `#BD000C` |
| Disabled bg | Disabled | Neutral-05 `#F5F5F5` |

## Accessibility

- Every input has a visible `<label>` with `for`/`htmlFor` matching the input `id`
- Required fields include "(required)" in the label text and `aria-required="true"` on the input
- Error messages use `aria-describedby` to associate with the input
- Helper text also uses `aria-describedby` (combine IDs when both helper and error are present)
- Error state sets `aria-invalid="true"` on the input
- Checkbox and radio groups use `<fieldset>` and `<legend>`
- Select dropdowns are keyboard-navigable (arrow keys, type-ahead)
- File upload zones accept keyboard activation (Enter/Space to open file dialog)
- Character count is announced to screen readers: "[count] of [max] characters used"
- `autocomplete` attributes are set for personal data fields (name, email, address, phone)

## Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Move focus to the next field |
| `Shift+Tab` | Move focus to the previous field |
| `Enter` | Submit the form (from text inputs) |
| `Space` | Toggle checkbox, select radio |
| `Arrow Up/Down` | Navigate radio options, adjust number inputs |
| `Escape` | Close open dropdowns/date pickers |

## Usage Guidelines

### Label best practices
- Always visible, positioned above the input
- Sentence case: "Email address" not "Email Address"
- Concise: 1-3 words for common fields
- Descriptive: explain what to enter, not how

### Required vs optional
- Mark the minority: if most fields are required, mark optional ones "(optional)"
- If most fields are optional, mark required ones "(required)"
- Never use asterisk (*) as the sole required indicator

### Validation timing
- **On blur**: validate when the user leaves the field (primary approach)
- **On submit**: validate all fields and show error summary
- **On change**: use only for real-time format guidance (password strength, character count)

### Helper text
- Provide format hints: "DD/MM/YYYY"
- Explain constraints: "Must be at least 8 characters"
- Add context: "This will be visible to your team"

## Do

- Use visible labels for every input
- Validate on blur for individual fields
- Show error messages inline, below the field
- Use appropriate input types (email, tel, url) for mobile keyboard optimisation
- Set autocomplete attributes for personal data fields

## Don't

- Use placeholder text as the only label
- Validate on every keystroke (except format guidance)
- Use red for labels in error state (only the border and message change)
- Mix label positions (always above, never inline or to the side)
- Disable fields without explanation
- Use custom-styled native controls that lose accessibility
