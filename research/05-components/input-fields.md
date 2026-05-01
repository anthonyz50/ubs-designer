# UBS Standard Component: Input Fields

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=1-103&mode=design
> React (UWR): AmountInput, AmountInputDropdown, ComboBox, CodeInput, CountryCodeInput, DatePicker, DoubleInput, Input, MaskedInput, PasswordInput, SearchInput, TextArea

## Usage

Input fields are form elements that allow collection of information from the user. All are based on the core Input component, inheriting its behaviour and states.

**Synonyms:** entry fields, text fields, form elements

---

## Anatomy

| # | Element | Required |
|---|---------|----------|
| 1 | Label | Yes |
| 2 | Asterisk | Optional (marks required fields) |
| 3 | Value | Yes |
| 4 | Information tooltip | Optional |

---

## Types

### 1. Basic Input
The foundation component. All other input types inherit from this.

### 2. Specific Data Input
Specialised variants for particular data types:
- **Date picker** - calendar-based date selection
- **Amount input** - numeric/currency entry
- **Code input** - structured code entry
- **Password input** - masked text entry
- **Search input** - search-specific field with clear action
- **Masked input** - formatted input (phone numbers, etc.)

### 3. Combined Input
Composite fields combining multiple elements:
- **Combo box** - input with dropdown selection
- **Country code input** - country selector with phone prefix
- **Amount input dropdown** - amount field with currency selector

### 4. Textarea
Multi-line text entry for longer content.

### 5. Double Input
Two inputs displayed side by side for related values.

---

## States (11 Total)

| # | State | Description |
|---|-------|-------------|
| 1 | Default (initial) | Empty, unfocused resting state |
| 2 | Hovered | Mouse cursor over the field |
| 3 | Focused | Field is active and ready for input |
| 4 | While typing | User is entering text |
| 5 | Filled | Contains a value, unfocused |
| 6 | Validation error | Invalid input with error message |
| 7 | Keyboard focus | Focus via keyboard navigation |
| 8 | Disabled filled | Contains value but non-interactive |
| 9 | Autofilled | Browser-autofilled value |
| 10 | Read-only filled | Displays value, not editable |
| 11 | Read-only empty | No value, not editable |

---

## Space-saving Input Fields

All types except Double input, Combo box, and Code input have space-saving variants. These are designed for use in limited spaces.

**Important:** Space-saving input fields cannot be mixed with normal-size input fields on the same form. Choose one size and use it consistently.

---

## Behaviour Rules

- Input fields always appear in forms
- Users may enter text, numbers, or mixed-format types
- Always be concise and precise with labels
- Colour contrast of Labels and Values: minimum **4.5:1** ratio
- Placeholder text should not exceed expected value length by a factor of 2
- For longer descriptions: use descriptive text underneath the field, or an info icon with tooltip

---

## Do's and Don'ts

### Do's
- ✅ Label should **ALWAYS** be visible to the user
- ✅ Use field length as affordance (match expected content length)
- ✅ Denote optional fields only (when the majority of fields are required)
- ✅ All asterisks in disabled state inherit the same grey colour as input text
- ✅ Maintain consistent field sizing within a form
- ✅ Use appropriate input type for the data being collected

### Don'ts
- ❌ Replace label with placeholder text
- ❌ Stretch fields that have a defined character count (e.g. postal codes)
- ❌ Use too many asterisks (mark the minority, whether required or optional)
- ❌ Never mix disabled field states with required states
- ❌ Mix space-saving and standard-size inputs on the same form

---

## React Components Reference

| Component | Use Case |
|-----------|----------|
| `Input` | Basic text input |
| `AmountInput` | Numeric/currency values |
| `AmountInputDropdown` | Amount with currency selector |
| `ComboBox` | Input with dropdown options |
| `CodeInput` | Structured code entry |
| `CountryCodeInput` | Country/phone prefix selection |
| `DatePicker` | Calendar-based date selection |
| `DoubleInput` | Two related inputs side by side |
| `MaskedInput` | Formatted input patterns |
| `PasswordInput` | Masked password entry |
| `SearchInput` | Search field with clear action |
| `TextArea` | Multi-line text entry |

---

## Accessibility Notes

- Labels must always be present and visible (never rely on placeholder alone)
- Maintain 4.5:1 colour contrast ratio for all text
- Error states must be clearly communicated both visually and to screen readers
- Keyboard navigation must work across all states
