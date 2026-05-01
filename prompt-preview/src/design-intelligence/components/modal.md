# Modal

## Purpose

Modals are overlay dialogs that focus the user's attention on a specific task, decision, or piece of information. They interrupt the current workflow intentionally and require the user to interact before returning to the underlying page.

## Variants

### Confirmation modal
- Short, focused dialog for confirming an action
- Title + description + action buttons
- Used for destructive actions, irreversible decisions, or consequential changes

### Form modal
- Contains a form for creating or editing content
- Used when the form is short (3-5 fields) and contextually tied to the current view
- For longer forms, navigate to a dedicated page instead

### Informational modal
- Displays important information the user must acknowledge
- Dismissible with a single "Close" or "Got it" button
- Used for legal notices, first-time guidance, or critical announcements

### Full-screen modal (mobile)
- On viewports below 768px, modals expand to full screen
- Includes a close button in the top-left and clear title

## Props / Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | `false` | Controls visibility |
| title | string | — | Modal heading (required) |
| description | string | — | Supporting text below title |
| size | `small` \| `medium` \| `large` | `medium` | Width of the modal |
| onClose | function | — | Called when the modal is dismissed |
| closeOnOverlayClick | boolean | `true` | Closes when clicking the backdrop |
| closeOnEscape | boolean | `true` | Closes on Escape key |
| preventClose | boolean | `false` | Disables all close mechanisms (use sparingly) |

## States

### Closed
- Modal is not rendered in the DOM (or rendered with `display: none` / `aria-hidden="true"`)
- Focus remains on the page

### Opening
- Backdrop fades in (200ms, ease-out)
- Modal scales up from 95% to 100% and fades in (200ms, ease-out)
- Focus moves to the first focusable element within the modal (or the close button)
- Page scroll is locked
- Underlying content receives `aria-hidden="true"` and `inert`

### Open
- Backdrop: semi-transparent black overlay (`rgba(0,0,0,0.5)`)
- Modal: centred vertically and horizontally, Level 2 elevation shadow
- Focus is trapped within the modal (Tab cycles through modal content only)

### Closing
- Modal fades out and scales down (150ms, ease-in)
- Backdrop fades out (150ms, ease-in)
- Focus returns to the element that triggered the modal
- Page scroll is restored
- `aria-hidden` and `inert` are removed from underlying content

### Loading (within modal)
- Form modals may show a loading state during submission
- Primary action button shows loading spinner
- Modal remains open until the operation completes or fails

## Sizing

| Size | Width | Use case |
|------|-------|----------|
| Small | 400px | Confirmations, simple decisions |
| Medium | 560px | Short forms, detailed confirmations |
| Large | 720px | Complex forms, content previews |

- Maximum height: 80vh (scrollable body when content overflows)
- Mobile: all sizes become full-screen below 768px
- Minimum margin from viewport edges: 24px

## Spacing

- Modal padding: 24px
- Title to description: 8px
- Description to body content: 16px
- Body to footer: 24px
- Between footer buttons: 12px
- Scrollable body has 24px padding that accounts for scroll inset

## Colour Usage

| Element | Colour |
|---------|--------|
| Backdrop | `rgba(0,0,0,0.5)` |
| Background | White `#FFFFFF` |
| Shadow | Level 2: `0 4px 12px rgba(0,0,0,0.15)` |
| Title | Neutral-90 `#1A1A1A` |
| Description | Neutral-60 `#666666` |
| Divider (header/footer) | Neutral-10 `#E5E5E5` |

## Accessibility

- Modal uses `role="dialog"` and `aria-modal="true"`
- `aria-labelledby` points to the modal title element
- `aria-describedby` points to the modal description (when present)
- Focus is trapped within the modal when open
- `Escape` closes the modal (unless `preventClose` is true)
- On close, focus returns to the trigger element
- Underlying page content receives `inert` attribute to prevent interaction
- Close button has `aria-label="Close dialog"`
- All modal content is reachable via keyboard Tab navigation

## Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Move focus to the next focusable element within the modal |
| `Shift+Tab` | Move focus to the previous focusable element within the modal |
| `Escape` | Close the modal |
| `Enter` | Activate the focused button |

## Usage Guidelines

### Modal anatomy
```
┌────────────────────────────────────┐
│ Title                          ✕   │
│ Description text                   │
├────────────────────────────────────┤
│                                    │
│ Body content (scrollable if long)  │
│                                    │
├────────────────────────────────────┤
│               [Cancel]  [Confirm]  │
└────────────────────────────────────┘
```

### When to use a modal
- Confirming destructive actions ("Delete this item?")
- Quick creation/editing that benefits from staying in context
- Displaying critical information that requires acknowledgement
- Collecting a small amount of input (1-5 fields)

### When NOT to use a modal
- Complex forms with more than 5 fields (use a dedicated page)
- Displaying large amounts of content (use a new page or side panel)
- Non-critical information (use a toast or inline message)
- Nested modals (never open a modal from within a modal)

### Confirmation modal structure
```
Title: "[Action] [object]?"
Description: "This will [consequence]. This action cannot be undone."
Actions: [Cancel] [Action verb]
```

Example:
```
Title: "Remove team member?"
Description: "Alex Johnson will lose access to all team resources immediately."
Actions: [Cancel] [Remove]
```

### Footer button alignment
- Buttons are right-aligned in the footer
- Primary/destructive action is rightmost
- Cancel/secondary action is to the left
- On mobile (full-screen modal), buttons stack vertically with primary on top

## Do

- Use modals for focused, interruptive tasks that require completion or dismissal
- Return focus to the trigger element when the modal closes
- Trap focus within the modal
- Provide a clear, descriptive title
- Always include a way to dismiss (close button, Escape, backdrop click)
- Lock page scroll when modal is open

## Don't

- Nest modals (never open a modal from within another modal)
- Use modals for content that could be inline
- Use modals for complex multi-step processes
- Remove the close button or disable all close mechanisms without strong justification
- Auto-open modals on page load (except for critical legal/compliance notices)
- Use modals for error messages (use inline alerts or toasts)
