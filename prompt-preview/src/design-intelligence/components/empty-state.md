# Empty State

## Purpose

Empty states appear when there is no content to display. They prevent user confusion, provide context about what belongs in the area, and guide users toward their next action. A well-designed empty state turns a dead end into a starting point.

## Variants

### First-use empty state
- Appears when a user has never created content in this area
- Warm and encouraging tone
- Focuses on guiding the user to take their first action
- Example: "No requests yet. Create your first request to get started."

### No results empty state
- Appears when a search or filter returns no matches
- Helpful and constructive tone
- Suggests modifications to the query or offers to clear filters
- Example: "No results match your search. Try different keywords or clear your filters."

### Error empty state
- Appears when content fails to load
- Empathetic and solution-oriented tone
- Includes a retry action
- Example: "We couldn't load your data. Check your connection and try again."

### Cleared empty state
- Appears when all items have been completed or removed
- Celebratory or neutral tone
- No action needed; acknowledges completion
- Example: "You're all caught up. No pending approvals."

## Props / Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `first-use` \| `no-results` \| `error` \| `cleared` | `first-use` | Context of the empty state |
| icon | ReactNode | — | Illustration or icon (optional) |
| title | string | — | Primary message (required) |
| description | string | — | Supporting text (optional) |
| action | object | — | `{ label: string, onClick: function, variant: string }` primary CTA |
| secondaryAction | object | — | Optional secondary action |

## States

### Default
- Centred within the content area
- Visible illustration/icon, title, description, and action button
- Surrounding UI (headers, navigation, filters) remains visible for context

### Loading (transitional)
- Skeleton content shown before determining empty state
- Empty state appears only after confirming no data exists
- Transition: skeleton fades out, empty state fades in (200ms)

## Sizing

| Element | Value |
|---------|-------|
| Icon/illustration | 120x120px (max), 80x80px (compact) |
| Title | H3 (20px Light 300) |
| Description | Body M (14px Regular 400) |
| Max content width | 400px (centred) |
| Action button | Medium size |

## Spacing

- Icon to title: 16px
- Title to description: 8px
- Description to action button: 24px
- Action button to secondary action: 12px
- Empty state container: centred horizontally and vertically within the content area
- Minimum vertical padding: 48px above and below

## Colour Usage

| Element | Colour |
|---------|--------|
| Icon/illustration | Neutral-30 `#B3B3B3` (line drawings) or pastel palette (colour illustrations) |
| Title | Neutral-80 `#333333` |
| Description | Neutral-50 `#808080` |
| Action button | Primary variant (UBS Red background, white text) |
| Secondary action | Tertiary variant (UBS Red text, no background) |

## Accessibility

- Empty state content is within the main content landmark
- Title uses an appropriate heading level consistent with the page hierarchy
- Action buttons are keyboard-focusable with clear labels
- Screen readers announce the empty state when the view loads: use `role="status"` or place the empty state in an `aria-live` region for dynamic content
- Illustrations use `alt=""` (decorative) or descriptive alt text if meaningful
- If the empty state replaces a table or list, include context: "Requests list: no requests to display"

## Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Focus moves to the action button |
| `Enter` / `Space` | Activate the action button |

## Usage Guidelines

### Content formula

**First-use:** [What would be here] + [How to get started]
```
Title: "No requests yet"
Description: "Create a request to track work across your team."
Action: "Create request"
```

**No results:** [What happened] + [What to try instead]
```
Title: "No results found"
Description: "We couldn't find anything matching 'quarterly report' with your current filters."
Action: "Clear filters"
Secondary: "Search all categories"
```

**Error:** [What went wrong] + [What to do]
```
Title: "Something went wrong"
Description: "We couldn't load your requests. This might be a temporary issue."
Action: "Try again"
Secondary: "Contact support"
```

**Cleared:** [What happened] + [Optional next step]
```
Title: "All caught up"
Description: "You have no pending approvals."
```

### Placement
- Empty states occupy the same space as the content they replace
- Headers, navigation, filters, and other chrome remain visible
- The empty state is centred within the content area
- On tables: the empty state replaces the table body, headers remain visible

### Illustrations
- Use simple, consistent illustrations that match the UBS visual style
- Line-drawing style in neutral colours for general empty states
- Slightly more expressive illustrations for first-use states to encourage action
- Keep illustrations small (80-120px) to avoid dominating the space
- Always optional; a simple icon works well for compact contexts

### Tone
- **Encouraging** for first-use: welcome the user, make the first step obvious
- **Helpful** for no results: acknowledge the attempt, suggest alternatives
- **Empathetic** for errors: take responsibility, provide a clear path forward
- **Neutral/positive** for cleared: acknowledge completion without overplaying it

## Do

- Always provide a clear title explaining what would normally appear here
- Include an action button to guide the user forward
- Keep surrounding navigation and chrome visible for context
- Match the tone to the context (encouraging, helpful, empathetic)
- Use consistent illustration style across all empty states

## Don't

- Show a completely blank area with no guidance
- Use technical language ("No records found in table X")
- Show an empty state while data is still loading (show skeleton first)
- Use generic messages ("Nothing here") without context
- Add animations or attention-grabbing effects to empty states
- Use different illustration styles across the application
