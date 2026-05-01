# UBS Standard Component: Form Validation

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=2635-1381&mode=design
> React: N/A (built into form elements)

## Usage

Form validation is a specific case of Message box. It is part of every form element with validation logic. Provides the reason why input is not valid and how to correct it.

**Related:** Message box, Snackbar, Overlay message
**Synonyms:** Error, Notification

---

## Anatomy

| # | Element | Description |
|---|---------|-------------|
| 1 | Form element | e.g. Input field with outline indicating severity |
| 2 | Message box | Small size, displayed below the field |
| 3 | Icon | Indicates severity level |
| 4 | Description | Error message text only |

---

## Types

### 1. Inline Form Validation
The primary type, mainly used within forms. The error message expands below the form element, pushing content down.

### 2. Floating Form Validation
Used only when there is no space to expand the form layout. Typical use case: editable table cells where inline expansion would disrupt the table structure.

---

## Behaviour

Of the four severity levels available in the design system (confirmation, error, information, warning), form elements only support **error**.

- A **dark red outline** highlights the element containing the error
- After the user corrects the input, both the outline and error message disappear
- Validation is triggered on field blur or form submission (depending on implementation)

### Other Severity Levels
For confirmation, information, or warning messages related to form elements, use a **minimal Message box** placed below the element. Do not use the native form validation for non-error severities.

---

## Rules

- Message should be **clear and convey the essence** of the error and how to fix it
- Form validation message itself is **NOT clickable**
- Only the form element is in focus for correction
- Don't mix inline and floating validation on one page
- Error messages should be specific: "Please enter a valid email address" not "Invalid input"
- Keep messages concise but actionable

---

## Do's and Don'ts

### Do's
- ✅ Use the native validation error function built into form elements
- ✅ Use the same type of form validation throughout a page/form (all inline OR all floating)
- ✅ Provide clear, actionable error messages
- ✅ Remove error state immediately after correction
- ✅ Use dark red outline to highlight error elements

### Don'ts
- ❌ Replace error validation with warning styling
- ❌ Mix different validation types (inline and floating) on the same page
- ❌ Make validation messages clickable
- ❌ Use vague error messages ("Something went wrong")
- ❌ Use form validation for non-error severity levels

---

## Severity Levels Reference

| Severity | Supported in Form Validation | Alternative |
|----------|------------------------------|-------------|
| Error | ✅ Yes (dark red outline) | N/A |
| Warning | ❌ No | Minimal Message box below element |
| Information | ❌ No | Minimal Message box below element |
| Confirmation | ❌ No | Minimal Message box below element |

---

## Implementation Notes

- Form validation is not a standalone React component. It is built into the individual form element components (Input, Dropdown, etc.)
- Ensure error messages are associated with their fields via `aria-describedby` for accessibility
- Screen readers should announce error messages when they appear
- Validation timing (on blur vs on submit) should be consistent within a form
- For floating validation in tables, ensure the tooltip/popover does not obscure adjacent cells
