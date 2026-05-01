# Form Patterns

## When to Use

Forms collect structured data from users. Use forms for creating, editing, or filtering content, submitting requests, configuring settings, and any scenario requiring user input.

## Layout Structure

### Single-column forms (default)
The primary form layout. Labels above inputs, full-width fields. This is the fastest to scan and the most accessible.

```
┌───────────────────────────────────────┐
│ Form title                            │
│ Form description                      │
├───────────────────────────────────────┤
│ Section heading                       │
│                                       │
│ Label                                 │
│ ┌───────────────────────────────────┐ │
│ │ Input                             │ │
│ └───────────────────────────────────┘ │
│ Helper text                           │
│                                       │
│ Label                                 │
│ ┌───────────────────────────────────┐ │
│ │ Input                             │ │
│ └───────────────────────────────────┘ │
│                                       │
│ Label                                 │
│ ┌───────────────────────────────────┐ │
│ │ Textarea                          │ │
│ │                                   │ │
│ └───────────────────────────────────┘ │
│                                       │
├───────────────────────────────────────┤
│               [Cancel]  [Submit]      │
└───────────────────────────────────────┘
```

### Two-column forms
Use only when fields are logically paired (e.g., first name / last name, start date / end date). Maximum two columns. Collapses to single column on mobile.

### Multi-step forms
Use when the form exceeds 8-10 fields or when sections have logical groupings that benefit from sequential completion. Always show a progress stepper.

### Form width
- Maximum input width: 600px (reading comfort)
- Short inputs (dates, codes): 200px
- Medium inputs (names, emails): 400px
- Long inputs (descriptions, addresses): 600px

## Key Components

### Text inputs
- Label above the field (always visible, never placeholder-only)
- Placeholder text for format hints (e.g., "DD/MM/YYYY")
- Helper text below for additional guidance
- Character count for limited fields

### Select / dropdown
- Use for 4-15 options
- For fewer than 4 options, use radio buttons
- For more than 15 options, use a searchable select
- Include a default empty option: "Select..."

### Checkboxes
- Use for multiple selections from a group
- Use a single checkbox for boolean toggles (terms acceptance, opt-ins)
- Each option has its own label

### Radio buttons
- Use for mutually exclusive choices (2-6 options)
- Always pre-select a default when a sensible default exists
- Group with `<fieldset>` and `<legend>`

### Date picker
- Allow both manual text entry and calendar picker
- Display format: DD/MM/YYYY
- Validate on blur
- For date ranges, ensure end date is after start date

### File upload
- Clearly state accepted file types and size limits
- Show upload progress
- Allow removal of uploaded files
- Preview uploaded files where possible (images, PDFs)

## Interaction Flow

1. User opens the form; focus moves to the first input (or page heading)
2. User completes fields top to bottom
3. Inline validation on blur highlights issues per field
4. On submit: validate all fields; if errors exist, show error summary at top and focus it
5. On success: show confirmation and navigate to the appropriate next view

## States

### Default
- All fields are editable with visible labels
- Required fields marked with "(required)" text
- Optional fields may show "(optional)" when most fields are required

### Validation
- **On blur**: Validate the field when the user leaves it. Show inline error below the field.
- **On submit**: Validate all fields. Show error summary at the top with links to each errored field.
- **Real-time**: Use only for format guidance (e.g., password strength meter)

### Loading / submitting
- Disable the submit button and show an inline spinner
- Replace button label with "Submitting..." or equivalent
- Keep form fields visible but non-editable during submission

### Success
- Show success message (inline or toast depending on context)
- Navigate to the relevant list or detail view
- Provide a link to "Create another" if appropriate

### Error (submission failure)
- Re-enable the submit button
- Show an error banner at the top explaining what happened
- Preserve all user input (never clear the form on error)

### Disabled
- Grey out fields that cannot be edited
- Provide a tooltip or footnote explaining why the field is disabled
- Never disable the entire form without explanation

## Responsive Behaviour

| Breakpoint | Behaviour |
|-----------|-----------|
| Desktop (768px+) | Two-column pairs stay side by side; max width 600px for fields |
| Mobile (below 768px) | All fields stack single column; full width minus padding |

- Action buttons become full-width and stack vertically on mobile (primary above secondary)
- Sticky footer for action buttons on long mobile forms

## Accessibility

- Every input has a visible `<label>` with `for` attribute matching the input `id`
- Required fields use `aria-required="true"` and "(required)" text in the label
- Error messages are associated with inputs via `aria-describedby`
- Error summary at form top uses `role="alert"` and receives focus on submission error
- `<fieldset>` and `<legend>` group related fields (radio groups, address blocks)
- `autocomplete` attributes on personal data fields
- Form submission works with `Enter` key from any text input

## Example Structure

```
<form aria-label="Create request">
  <h1>Create a new request</h1>
  <p>Fill in the details below to submit your request.</p>

  <div role="alert" aria-live="assertive">
    <!-- Error summary appears here on failed submission -->
  </div>

  <fieldset>
    <legend>Request details</legend>

    <FormField
      label="Title"
      required
      placeholder="Brief description of your request"
      maxLength={100}
    />

    <FormField
      label="Category"
      type="select"
      required
      options={categories}
      placeholder="Select a category"
    />

    <FormField
      label="Description"
      type="textarea"
      required
      rows={4}
      maxLength={2000}
      helper="Include any relevant details or reference numbers"
    />

    <FormField
      label="Priority"
      type="radio"
      required
      options={['Low', 'Medium', 'High', 'Critical']}
      defaultValue="Medium"
    />

    <FormField
      label="Attachments"
      type="file"
      accept=".pdf,.png,.jpg,.docx"
      maxSize="10MB"
      helper="PDF, PNG, JPG, or DOCX. Maximum 10MB per file."
    />
  </fieldset>

  <footer>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary" type="submit">Submit request</Button>
  </footer>
</form>
```

## Do

- Use single-column layout as the default
- Label every field visibly (above the input)
- Validate on blur for individual fields
- Show an error summary at the top on submission failure
- Preserve user input on error
- Mark required fields clearly

## Don't

- Use placeholder text as the only label
- Validate every keystroke (except for format guidance)
- Clear the form after a failed submission
- Use more than two columns for form fields
- Disable the submit button before the user has attempted to fill in fields
- Use asterisks (*) as the sole indicator of required fields
