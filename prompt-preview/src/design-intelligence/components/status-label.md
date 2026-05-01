# Status Label

## Purpose

Status labels are compact visual indicators that communicate the current state of an item. They combine colour, icon, and text to convey status at a glance in tables, cards, lists, and detail views.

## Variants

### Standard label
- Coloured background (subtle tint) with text and optional icon
- Used in tables, lists, and cards

### Outlined label
- Transparent background with coloured border and text
- Used when space is tight or the background tint would clash with the container

### Dot label
- Small coloured dot followed by text
- Used in compact contexts or inline within text

### Icon-only indicator
- Coloured icon without text
- Used only in very tight spaces where the column header or context provides meaning
- Must have `aria-label` for accessibility

## Props / Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| status | string | — | Status key (determines colour and icon) |
| label | string | — | Display text |
| variant | `standard` \| `outlined` \| `dot` \| `icon-only` | `standard` | Visual style |
| size | `small` \| `medium` | `medium` | Label size |
| icon | boolean | `true` | Show status icon |

## Status Definitions

| Status | Colour | Icon | Example labels |
|--------|--------|------|---------------|
| Active / Open | Info `#3A5A88` | Circle filled | "Active", "Open", "In progress" |
| Pending | Warning `#E4A911` | Clock | "Pending", "Awaiting approval", "On hold" |
| Approved / Success | Success `#6F7A1A` | Checkmark | "Approved", "Completed", "Resolved" |
| Rejected / Failed | Error `#BD000C` | Cross | "Rejected", "Failed", "Overdue" |
| Draft | Neutral-40 `#999999` | Circle outline | "Draft", "Not started" |
| Cancelled | Neutral-40 `#999999` | Slash | "Cancelled", "Archived" |

### Custom statuses
For domain-specific statuses, map them to the closest semantic colour:
- Positive outcomes → Success
- Negative outcomes → Error
- In-progress/waiting → Warning or Info
- Inactive/neutral → Neutral

## States

### Default
- Displays the status with appropriate colour, icon, and text
- Non-interactive (read-only indicator)

### In a table
- Left-aligned within the status column
- Vertically centred within the row

### In a card
- Positioned in the card header, top-right corner
- Or inline within card content

### Hover (when part of an interactive element)
- Status label itself is not interactive
- When within a clickable row or card, the label inherits the parent hover state

## Sizing

### Medium (default)
| Element | Value |
|---------|-------|
| Height | 24px |
| Padding | 4px 8px |
| Font size | 12px |
| Icon size | 14px |
| Border radius | 12px (pill) |

### Small
| Element | Value |
|---------|-------|
| Height | 20px |
| Padding | 2px 6px |
| Font size | 11px |
| Icon size | 12px |
| Border radius | 10px (pill) |

### Dot variant
| Element | Value |
|---------|-------|
| Dot diameter | 8px |
| Gap (dot to text) | 6px |
| Font size | 14px (inherits body text) |

## Spacing

- Status label to adjacent content: 8px
- Multiple status labels (if needed): 4px gap
- In tables: centred vertically within the row, left-aligned in the column
- In cards: 8px from the card edge when positioned in the header

## Colour Usage

### Standard variant
| Status | Background | Text | Icon |
|--------|-----------|------|------|
| Active/Open | Info at 12% opacity | Info `#3A5A88` | Info `#3A5A88` |
| Pending | Warning at 12% opacity | Warning darkened `#9E7600` | Warning `#E4A911` |
| Success | Success at 12% opacity | Success `#6F7A1A` | Success `#6F7A1A` |
| Error | Error at 12% opacity | Error `#BD000C` | Error `#BD000C` |
| Neutral | Neutral-10 | Neutral-60 `#666666` | Neutral-40 `#999999` |

### Outlined variant
- Background: transparent
- Border: 1px solid in the status colour
- Text and icon: status colour

### Dot variant
- Dot: solid status colour
- Text: Neutral-70 (inherits body text colour)

## Accessibility

- Status labels use colour, icon, and text together; never colour alone
- Icon is decorative (`aria-hidden="true"`) when text is present
- Icon-only variant requires `aria-label` describing the status
- In tables, the column header "Status" provides context for screen readers
- Status labels should not be focusable unless they are interactive
- Ensure text contrast meets 4.5:1 against the tinted background
- For the warning status, use a darkened text colour (`#9E7600`) to meet contrast requirements against the yellow-tinted background

## Keyboard Support

Status labels are non-interactive and do not receive keyboard focus. When used within interactive elements (clickable rows, buttons), the parent element handles keyboard interaction.

## Usage Guidelines

### Consistent status vocabulary
Define a fixed set of statuses for each domain and use them consistently:

```
Request lifecycle:  Draft → Submitted → Pending → Approved / Rejected → Completed
Incident lifecycle: New → Triaging → In progress → Resolved → Closed
User status:        Active → Suspended → Deactivated
```

### Label text
- Use short, clear words: "Active" not "Currently active"
- Sentence case: "In progress" not "In Progress"
- Maximum 2 words for standard labels
- Match the label to the status column header's domain

### Placement patterns
```
In a table row:
│ Request title │ ● Pending │ 15 Jan 2025 │

In a card header:
┌─────────────────────────────┐
│ Request title     [Approved]│
│ ...                         │

Inline in text:
"This request is currently ● In progress"
```

### When to use each variant
- **Standard**: Default choice. Use in tables, cards, and detail views.
- **Outlined**: When the container background is not white, or in dense layouts.
- **Dot**: Inline within text or in very compact lists.
- **Icon-only**: Table cells where column headers provide context and space is extremely limited.

## Do

- Use consistent status colours across the entire application
- Combine colour, icon, and text for every status
- Map custom statuses to semantic colours (success, error, warning, info, neutral)
- Use the same label text for the same status everywhere

## Don't

- Create more than 6-7 distinct statuses per entity type
- Use colour alone to convey status
- Use UBS Red for status labels (use the defined status colours)
- Invent new colours for custom statuses (map to existing palette)
- Make status labels interactive (they are read-only indicators)
- Use long multi-word labels ("Pending final review and approval")
