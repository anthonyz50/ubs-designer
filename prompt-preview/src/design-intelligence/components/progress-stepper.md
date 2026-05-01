# Progress Stepper

## Purpose

Progress steppers guide users through multi-step processes by showing the sequence of steps, the current position, and completion status. They provide orientation and set expectations about the journey ahead.

## Variants

### Horizontal stepper
- Steps displayed left to right in a single row
- Best for 3-5 steps with short labels
- Default for desktop layouts

### Vertical stepper
- Steps displayed top to bottom
- Best for 5+ steps or when step descriptions are needed
- Default for mobile layouts and sidebar timelines (e.g., approval flows)

### Compact stepper
- Minimal display: "Step 2 of 5" with a progress bar
- Used in constrained spaces (mobile headers, embedded forms)
- Labels visible only for the current step

## Props / Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| steps | StepDef[] | — | Step definitions (required) |
| currentStep | number | `0` | Active step index (zero-based) |
| orientation | `horizontal` \| `vertical` | `horizontal` | Layout direction |
| variant | `default` \| `compact` | `default` | Display density |
| allowNavigation | boolean | `false` | Allows clicking completed steps to navigate back |
| onStepClick | function | — | Called when a completed step is clicked |

### Step definition

| Prop | Type | Description |
|------|------|-------------|
| label | string | Step name (required) |
| description | string | Short description (optional, vertical only) |
| status | `complete` \| `current` \| `upcoming` \| `error` | Step state |
| optional | boolean | Whether this step can be skipped |

## States

### Complete
- Filled circle with checkmark icon
- Success colour `#6F7A1A` for the icon
- Connector line is solid
- If `allowNavigation` is true, step is clickable

### Current
- Filled circle with step number
- Info colour `#3A5A88` for the circle
- Label is bold
- Connector line to the next step is dashed or lighter

### Upcoming
- Outlined circle with step number
- Neutral-30 for the circle and connector
- Label in Neutral-50

### Error
- Filled circle with alert icon
- Error colour `#BD000C`
- Error description visible below the label
- User must resolve the error before proceeding

### Optional step
- "(optional)" text below the step label
- Can be skipped without preventing progression

## Sizing

### Horizontal stepper
| Element | Value |
|---------|-------|
| Circle diameter | 32px |
| Icon size | 16px |
| Label font | 14px |
| Description font | 12px |
| Connector height | 2px |
| Total height | ~64px (without descriptions) |

### Vertical stepper
| Element | Value |
|---------|-------|
| Circle diameter | 32px |
| Icon size | 16px |
| Label font | 14px |
| Description font | 12px |
| Connector width | 2px |
| Step row height | 48-64px (depending on description) |

### Compact stepper
| Element | Value |
|---------|-------|
| Progress bar height | 4px |
| Label font | 14px |
| Total height | ~32px |

## Spacing

- Circle to label: 8px (horizontal: below; vertical: to the right)
- Label to description: 4px
- Between step circles (horizontal): flexible, distributed evenly
- Between step rows (vertical): 24px
- Stepper to form/content: 32px
- Connector extends between circle centres

## Colour Usage

| Element | Complete | Current | Upcoming | Error |
|---------|----------|---------|----------|-------|
| Circle fill | Success `#6F7A1A` | Info `#3A5A88` | Transparent | Error `#BD000C` |
| Circle border | Success `#6F7A1A` | Info `#3A5A88` | Neutral-20 | Error `#BD000C` |
| Icon/number | White | White | Neutral-40 | White |
| Label | Neutral-80 | Neutral-90 (bold) | Neutral-50 | Error `#BD000C` |
| Connector | Success `#6F7A1A` | Neutral-20 (dashed) | Neutral-20 | Error `#BD000C` |

## Accessibility

- The stepper uses `role="group"` with `aria-label="Progress: Step [current] of [total]"`
- Each step uses `aria-current="step"` for the active step
- Completed steps that allow navigation use `<button>` or `<a>` elements
- Upcoming steps are not interactive (`aria-disabled="true"` if focusable)
- Step status is announced: "Step 1: Account details, complete" / "Step 2: Request details, current" / "Step 3: Review, upcoming"
- Error steps announce: "Step 2: Request details, error: Please complete the required fields"
- Compact stepper announces: "Step 2 of 5: Request details"
- When the step changes, the new step is announced via `aria-live="polite"`

## Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Move focus to the next interactive step (completed steps with navigation) |
| `Enter` / `Space` | Navigate to a completed step |
| `Arrow Left/Right` | Navigate between steps (horizontal) |
| `Arrow Up/Down` | Navigate between steps (vertical) |

## Usage Guidelines

### Step labels
- Keep labels short: 2-4 words
- Use nouns or noun phrases: "Account details", "Review", "Confirmation"
- Avoid numbering in the label (the stepper provides numbers visually)

### Step count
- Minimum: 3 steps (fewer than 3 does not warrant a stepper)
- Maximum: 7 steps (more than 7 is overwhelming; reconsider the flow)
- Ideal: 4-5 steps

### Navigation behaviour
- Linear steppers: users must complete steps in order
- Non-linear steppers: users can jump to completed or unlocked steps
- Always allow backward navigation to completed steps
- Forward navigation requires completing the current step

### Form integration
```
┌─────────────────────────────────────────┐
│ ① Details  ② Review  ③ Confirm          │
│ ────────── ●──────── ○─────────         │
├─────────────────────────────────────────┤
│                                         │
│ [Form fields for the current step]      │
│                                         │
├─────────────────────────────────────────┤
│ [Back]                    [Continue]    │
└─────────────────────────────────────────┘
```

- "Back" and "Continue" buttons below the form content
- "Continue" validates the current step before advancing
- "Back" preserves the current step's data
- Final step shows "Submit" or "Confirm" instead of "Continue"

### Responsive behaviour
| Breakpoint | Behaviour |
|-----------|-----------|
| Desktop (768px+) | Horizontal stepper with full labels |
| Mobile (below 768px) | Compact stepper ("Step 2 of 5: Review") or vertical stepper |

## Do

- Show all steps upfront so users know the full journey
- Allow backward navigation to completed steps
- Preserve data when navigating between steps
- Show the current step prominently
- Use the compact variant on mobile

## Don't

- Use a stepper for fewer than 3 steps
- Use more than 7 steps (simplify the flow)
- Allow forward navigation past incomplete steps
- Use a stepper for non-sequential processes (use a checklist instead)
- Hide step labels entirely (always show at least the current step name)
