# Alert

## Purpose

Alerts communicate important messages to users. They convey status, provide feedback, or draw attention to conditions that affect the user's workflow. Alerts are inline, contextual components that appear within the page content.

## Variants

### Success
- Confirms a completed action or positive outcome
- Background: tinted success, Icon: checkmark circle
- Example: "Your changes have been saved"

### Error
- Communicates a failure or problem that needs resolution
- Background: tinted error, Icon: alert circle
- Example: "We couldn't process your request. Check the highlighted fields and try again."

### Warning
- Alerts the user to a potential issue or consequence
- Background: tinted warning, Icon: alert triangle
- Example: "Your session expires in 5 minutes. Save your work to avoid losing changes."

### Info
- Provides neutral, supplementary information
- Background: tinted info, Icon: info circle
- Example: "Scheduled maintenance is planned for Saturday 20 Jan, 02:00-06:00 CET"

## Props / Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `success` \| `error` \| `warning` \| `info` | `info` | Visual style and semantics |
| title | string | — | Bold headline (optional) |
| children | ReactNode | — | Alert body content |
| dismissible | boolean | `false` | Shows a close button |
| onDismiss | function | — | Called when dismiss button is clicked |
| action | object | — | `{ label: string, onClick: function }` for an inline action button |
| icon | boolean | `true` | Shows the variant icon |

## States

### Default
- Visible with full styling per variant
- Icon, title (optional), description, and action (optional) displayed

### Dismissed
- Alert is removed from the DOM or visually hidden
- Smooth fade-out transition (200ms)
- Space collapses; no empty gap left behind

### Persistent (non-dismissible)
- No close button
- Remains visible until the condition it describes is resolved
- Used for errors and warnings that require user action

### With action
- Includes a text button or secondary button for a follow-up action
- Action is right-aligned or below the description depending on available space

## Sizing

- Full width of the parent container
- Minimum height: 48px
- Padding: 16px on all sides
- Border radius: 4px
- Icon size: 20px
- Title font: 14px, Bold (700)
- Body font: 14px, Regular (400)

## Spacing

- Icon to content: 12px
- Title to body: 4px
- Body to action button: 12px
- Alert to adjacent content: 16px vertical margin
- Multiple alerts stack with 8px gap between them

## Colour Usage

| Variant | Background | Border (left, 4px) | Icon colour | Text colour |
|---------|-----------|-------------------|-------------|-------------|
| Success | `#6F7A1A` at 8% opacity | `#6F7A1A` | `#6F7A1A` | Neutral-90 |
| Error | `#BD000C` at 8% opacity | `#BD000C` | `#BD000C` | Neutral-90 |
| Warning | `#E4A911` at 8% opacity | `#E4A911` | `#E4A911` | Neutral-90 |
| Info | `#3A5A88` at 8% opacity | `#3A5A88` | `#3A5A88` | Neutral-90 |

- Text colour is always Neutral-90 for readability
- Left border (4px) provides a strong visual anchor matching the variant colour
- Background uses the variant colour at very low opacity for subtlety

## Accessibility

- Success/info alerts use `role="status"` for polite announcement
- Error alerts use `role="alert"` for immediate screen reader announcement
- Warning alerts use `role="alert"` when the warning is urgent, `role="status"` otherwise
- Icon is decorative (`aria-hidden="true"`); meaning is conveyed through text and role
- Dismiss button has `aria-label="Dismiss alert"`
- Action buttons within alerts have clear, descriptive labels
- Alert text maintains 4.5:1 contrast ratio against the tinted background
- Alerts that appear dynamically are announced via their ARIA role

## Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Move focus to the dismiss button or action button within the alert |
| `Enter` / `Space` | Activate the focused button |
| `Escape` | Dismiss the alert (if dismissible and focused) |

## Usage Guidelines

### Placement
- **Page-level alerts**: Top of the main content area, below the header, above the page title
- **Section-level alerts**: Top of the relevant section, below the section heading
- **Form-level alerts**: Top of the form, above the first field (for error summaries)
- **Inline alerts**: Adjacent to the relevant content or component

### Content guidelines
- **Title** (optional): Brief summary, 3-8 words. Use when the alert body is more than one sentence.
- **Body**: One or two sentences. State what happened and what to do next.
- **Action**: Single action button when the user can take a specific step.

### Stacking
When multiple alerts are active, stack them in this order (top to bottom):
1. Error
2. Warning
3. Info
4. Success

Maximum 3 visible alerts at once. If more are needed, consolidate into a summary alert.

### Alert anatomy
```
┌─────────────────────────────────────────────────┐
│ [Icon]  Title (optional)                    [✕] │
│         Body text describing the situation       │
│         and what the user should do next.        │
│                                    [Action btn]  │
└─────────────────────────────────────────────────┘
```

## Do

- Use alerts for messages that are contextually relevant to the current view
- Include clear, actionable guidance in error and warning alerts
- Place alerts near the content they relate to
- Use the appropriate variant for the message type
- Make error alerts non-dismissible until the error is resolved

## Don't

- Use alerts for transient confirmations (use toast notifications instead)
- Stack more than 3 alerts on one page
- Use alerts for marketing messages or non-essential promotions
- Use the error variant for non-critical information
- Rely on the alert colour alone to convey meaning (always include icon + text)
- Place alerts inside modals (use inline text instead)
