# UBS Standard Component: Checkbox

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=1-102&mode=design
> React (UWR): Checkbox, CheckboxGroup

## Usage

Allow users to select **multiple options** from a list. Checking one checkbox does not uncheck others.

**Related:** Radio buttons, Button select, Drop-down button, Drop-down

---

## Anatomy

| # | Element | Description |
|---|---------|-------------|
| 1 | Checkbox selected | Checked state with tick mark |
| 2 | Checkbox unselected | Empty checkbox |
| 3 | Label | Text describing the option |

---

## States

| # | State | Description |
|---|-------|-------------|
| 1 | Initial (unselected) | Default empty state |
| 2 | Hover | Mouse cursor over checkbox or label |
| 3 | Focus | Keyboard focus indicator |
| 4 | Selected | Checked with tick mark |
| 5 | Disabled | Greyed out, non-interactive |
| 6 | Ambiguous | Partial/indeterminate state (e.g. parent checkbox when some children are selected) |

### Error States

Checkboxes can require at least one option to be selected. If none are selected when required, an error message appears.

- Error state: red outline on the checkbox group
- Validation error message: displayed below the group

---

## Rules

- Always use concise and precise labels
- Both the checkbox **AND** its label are selection triggers (clicking either toggles the state)
- Use checkboxes for **multiple selection**; use radio buttons for **single mutually exclusive** selection
- A checkbox group is a form element and requires a **submit button** to confirm the selection

---

## Selection vs Action

Checkboxes are for **selection** and require a button to confirm the choice. They represent a state that is applied when the form is submitted.

For immediate **on/off toggling** (where the action takes effect instantly), use a **Switch** component instead.

| Scenario | Component |
|----------|-----------|
| Select multiple items, then submit | Checkbox |
| Toggle a setting on/off immediately | Switch |
| Select one option from mutually exclusive list | Radio button |

---

## Do's and Don'ts

### Do's
- ✅ Use for multi-selection scenarios
- ✅ Use with a submit button to confirm selections
- ✅ Make both checkbox and label clickable
- ✅ Use the ambiguous/indeterminate state for parent checkboxes
- ✅ Provide clear, descriptive labels

### Don'ts
- ❌ Use for single mutually exclusive selection (use radio buttons)
- ❌ Use checkboxes without a submit button (use Switch for immediate toggle)
- ❌ Use vague or overly long labels
- ❌ Disable individual checkboxes without explanation

---

## Implementation Notes

- React components: `Checkbox` and `CheckboxGroup` (from UWR library)
- `CheckboxGroup` manages the group state and validation
- Ensure the indeterminate state is properly handled for parent/child relationships
- All checkboxes must be keyboard accessible (Space to toggle)
- Error messages should be associated via `aria-describedby`
- Label association must use proper `htmlFor`/`id` pairing or wrapping
