# Interaction Principles

## Core Philosophy

UBS interactions are **predictable, efficient, and respectful of the user's time**. Every interaction should feel purposeful. If an element looks interactive, it behaves interactively. If something changes, the user understands why.

## Feedback

### Every action gets a response
Users should never wonder "did that work?" Every interaction produces visible, immediate feedback.

| Action | Feedback | Timing |
|--------|----------|--------|
| Button click | Visual press state + loading indicator | Immediate |
| Form submission | Success message or error summary | Within 1 second |
| Data save | Confirmation toast | Within 2 seconds |
| Background process | Progress indicator with status text | Continuous |
| Destructive action | Confirmation dialog before execution | Immediate |

### Feedback hierarchy
1. **Inline feedback** for field-level responses (validation, character counts)
2. **Component-level feedback** for local state changes (button loading, card updates)
3. **Page-level feedback** for global actions (toast notifications, banners)
4. **Overlay feedback** for critical confirmations (modals for destructive actions)

## Progressive Disclosure

### Show what matters, reveal on demand
Present the essential information first. Allow users to drill into details when they choose to.

- Dashboard shows summary metrics; detail tables are one click deeper
- Form sections expand progressively; advanced options are collapsed by default
- Table rows show key columns; full details appear in a side panel or detail view
- Error messages show the problem; "Learn more" links to resolution steps

### Rules for progressive disclosure
- Default state shows the minimum viable information for the user to make a decision
- Expanding content does not shift the user's scroll position unexpectedly
- Collapsed content is discoverable (clear expand/collapse affordance)
- State of expanded/collapsed sections persists within a session

## Navigation

### Consistent and predictable
- Primary navigation remains visible and in the same position across all pages
- Breadcrumbs show the user's location in hierarchical structures
- The current page/section is visually highlighted in navigation
- Back navigation always returns to the previous meaningful state (not a loading screen)

### Wayfinding
- Page titles clearly describe the current context
- Section headings create a scannable structure
- Active filters and search terms are visible and clearable
- Multi-step processes show progress (stepper with current position)

## Loading States

### Skeleton screens over spinners
For initial page loads and major content areas, use skeleton screens that mirror the layout of the incoming content. This reduces perceived loading time and prevents layout shift.

### Spinner usage
Reserve spinners for:
- Button loading states (inline, replacing the button label)
- Small component updates (refreshing a single card or widget)
- Background processes where layout is already established

### Loading rules
- Show skeleton screens within 200ms if content has not loaded
- Show a spinner for actions that take longer than 300ms
- Provide time estimates for processes longer than 5 seconds
- Allow cancellation for processes longer than 10 seconds
- Never block the entire page for a partial content load

## Empty States

### Guide, don't abandon
Empty states occur when there is no data to display. Use them as opportunities to guide the user.

Every empty state includes:
1. **Illustration or icon** (optional, for visual warmth)
2. **Headline** explaining what belongs here
3. **Description** with one sentence of context
4. **Primary action** to create or add the first item

Example structure:
```
[Icon/Illustration]
No requests yet
Create a request to track work across your team.
[Create request]  (primary button)
```

### Contextual empty states
- **Search with no results**: Suggest query modifications or alternative actions
- **Filtered list with no results**: Show active filters with a "Clear filters" action
- **New user with no data**: Onboarding guidance with a clear first step
- **Error-caused empty state**: Error message with retry action

## Error Handling

### Prevention first
- Validate inputs before submission where possible
- Use constrained inputs (dropdowns, date pickers) to prevent invalid entries
- Disable submit buttons until minimum required fields are complete
- Show character limits and format hints proactively

### Recovery second
- Error messages explain what happened in plain language
- Every error includes a clear next step
- Inline errors appear next to the relevant field
- Form-level errors summarise all issues at the top with anchor links
- Retry actions are prominent and easy to find
- Support fallback: if retry fails, offer an alternative path (e.g., "Contact support")

### Error message formula
**What happened** + **Why** (if helpful) + **What to do next**

- ✅ "We couldn't save your changes. Your session may have expired. Sign in again to continue."
- ❌ "Error 403"

## Confirmation and Destructive Actions

### When to confirm
- Deleting data that cannot be recovered
- Submitting a request that triggers a workflow
- Actions that affect other users
- Bulk operations on more than 5 items

### When not to confirm
- Saving changes (save automatically or with simple confirmation)
- Navigation away from unchanged content
- Toggling settings that can be easily reversed
- Single-item non-destructive actions

### Confirmation dialog structure
1. **Title**: Action being confirmed (e.g., "Remove team member?")
2. **Description**: Consequence of the action
3. **Primary action**: Destructive verb matching the title (e.g., "Remove")
4. **Secondary action**: "Cancel" (always available)

## Responsive Interaction

### Touch and pointer
- All hover states have equivalent focus or active states for touch devices
- Hover-revealed content (tooltips) is also accessible via tap/focus
- Swipe gestures always have button alternatives
- Long-press actions always have visible alternatives

### Viewport adaptation
- Navigation collapses to hamburger menu below 768px
- Tables switch to card layout or horizontal scroll on mobile
- Side panels become full-screen overlays on mobile
- Multi-column forms stack to single column below 640px

## Transitions and Motion

### Purposeful animation
Motion communicates relationships and state changes. It is never decorative.

| Purpose | Duration | Easing |
|---------|----------|--------|
| Micro-interactions (button, toggle) | 150-200ms | ease-out |
| Component state changes | 200-300ms | ease-in-out |
| Page transitions | 300-400ms | ease-in-out |
| Modal enter/exit | 200-250ms | ease-out / ease-in |

### Motion principles
- Elements enter from the direction of their trigger
- Elements exit in the reverse direction of their entry
- Staggered animations for lists: 50ms delay between items, max 5 items
- Respect `prefers-reduced-motion`: replace all animation with instant transitions

## Data Interaction

### Tables
- Sortable columns show sort direction indicator
- Current sort column is visually highlighted
- Clicking a sorted column toggles direction
- Default sort order is established per context (most recent first, alphabetical, etc.)

### Filters
- Active filters are visible as removable chips/tags
- "Clear all" is available when any filter is active
- Filter changes apply immediately (no separate "Apply" button) for small datasets
- For large datasets with expensive queries, use an "Apply filters" button
- Filter state persists within a session

### Search
- Search input is clearly labelled and positioned consistently
- Results update as the user types (debounced at 300ms)
- Recent searches are available on focus
- "No results" state includes suggestions

## Do

- Provide immediate feedback for every user action
- Use skeleton screens for initial content loads
- Guide users through empty states with clear next steps
- Confirm only destructive or consequential actions
- Maintain consistent navigation across all views

## Don't

- Leave users wondering if their action worked
- Block the full page while a single component loads
- Show technical error codes without human-readable context
- Require confirmation for trivially reversible actions
- Use animation purely for decoration
- Create hover-only interactions without keyboard/touch alternatives
