# Notification Patterns

## When to Use

Notifications inform users about events, status changes, or actions that require their attention. Use notifications for system alerts, task updates, approval requests, error feedback, and any event the user should know about.

## Types of Notification

### Toast notifications
Temporary, non-blocking messages that appear and auto-dismiss.

- **Purpose**: Confirm completed actions, show non-critical information
- **Position**: Top-right corner of the viewport, stacked vertically
- **Duration**: 5 seconds for informational, 8 seconds for warnings, persistent until dismissed for errors
- **Auto-dismiss**: Yes (except errors)
- **Max visible**: 3 stacked toasts; older toasts are queued

```
┌──────────────────────────────┐
│ ✓ Request submitted          │ ✕
│   Reference: #12345          │
└──────────────────────────────┘
```

### Inline alerts / banners
Contextual messages embedded within the page content.

- **Purpose**: Page-level or section-level status, warnings, important information
- **Position**: Top of the relevant section or page, below the header
- **Persistence**: Remains visible until the condition is resolved or the user dismisses it
- **Dismissable**: Informational and success alerts can be dismissed. Error and warning alerts persist until resolved.

```
┌─────────────────────────────────────────────┐
│ ⚠ Your session expires in 5 minutes.        │
│   Save your work or extend your session.    │
│                          [Extend session]   │
└─────────────────────────────────────────────┘
```

### Notification centre
A persistent list of all notifications, accessible from the header.

- **Purpose**: Historical log of all notifications, read/unread management
- **Access**: Bell icon in the header with unread count badge
- **Content**: Grouped by date, most recent first
- **Actions**: Mark as read, mark all as read, navigate to related content

### Badge indicators
Numeric or dot indicators on navigation items or icons.

- **Purpose**: Signal new or unread items without interrupting
- **Placement**: Top-right of the associated icon or navigation item
- **Format**: Numeric for counts (max "99+"), dot for boolean (new/updated)

## Layout Structure

### Toast position and stacking
```
                          ┌────────────────┐
                          │ Toast 1 (newest)│ ✕
                          └────────────────┘
                          ┌────────────────┐
                          │ Toast 2         │ ✕
                          └────────────────┘
                          ┌────────────────┐
                          │ Toast 3 (oldest)│ ✕
                          └────────────────┘
```

### Notification centre panel
```
┌─────────────────────────────────┐
│ Notifications      [Mark all read]│
├─────────────────────────────────┤
│ Today                           │
│ ┌─────────────────────────────┐ │
│ │ ● Request #456 approved     │ │
│ │   2 hours ago               │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ ○ Report ready to download  │ │
│ │   5 hours ago               │ │
│ └─────────────────────────────┘ │
│ Yesterday                       │
│ ┌─────────────────────────────┐ │
│ │ ○ New team member added     │ │
│ │   Yesterday at 16:30        │ │
│ └─────────────────────────────┘ │
├─────────────────────────────────┤
│ View all notifications          │
└─────────────────────────────────┘
```

## Key Components

### Toast anatomy
1. **Status icon**: Colour-coded icon matching the notification type (success, error, warning, info)
2. **Title**: Brief summary of the event (mandatory)
3. **Description**: Additional context, one line (optional)
4. **Action**: A single text button for relevant follow-up (optional)
5. **Dismiss**: Close button (always present)

### Alert/banner anatomy
1. **Status icon**: Left-aligned, colour-coded
2. **Title**: Bold, brief summary
3. **Description**: Supporting text with details
4. **Action**: Button for resolution or navigation (optional)
5. **Dismiss**: Close button (when dismissible)

### Notification types and colours

| Type | Icon | Colour | Auto-dismiss | Use case |
|------|------|--------|-------------|----------|
| Success | Checkmark | Success `#6F7A1A` | Yes (5s) | Action completed |
| Error | Alert circle | Error `#BD000C` | No | Action failed, requires attention |
| Warning | Alert triangle | Warning `#E4A911` | No | Potential issue, caution needed |
| Info | Info circle | Info `#3A5A88` | Yes (5s) | Neutral update, FYI |

## Interaction Flow

### Toast flow
1. Action triggers a toast notification
2. Toast slides in from the top-right
3. Progress bar (subtle) shows remaining display time
4. User can dismiss early by clicking close
5. User can click the action button for follow-up
6. Toast auto-dismisses after the set duration
7. Hovering over a toast pauses the auto-dismiss timer

### Notification centre flow
1. User sees badge count on the bell icon
2. User clicks the bell to open the notification panel
3. Notifications are listed chronologically, grouped by date
4. Clicking a notification navigates to the related content and marks it as read
5. "Mark all as read" clears the unread state for all notifications
6. "View all notifications" opens a full-page notification history

## States

### Loading
- Notification centre shows skeleton list items
- Badge shows a subtle pulse while checking for updates

### Empty
- Notification centre: "You're all caught up. No new notifications."
- Include a subtle illustration for visual warmth

### Error
- Failed to load notifications: "Couldn't load notifications. [Try again]"
- Failed toast delivery: fall back to inline alert on the relevant page

## Responsive Behaviour

| Breakpoint | Behaviour |
|-----------|-----------|
| Desktop (1024px+) | Toasts in top-right; notification centre as dropdown panel |
| Tablet (768-1023px) | Toasts in top-right; notification centre as slide-over panel |
| Mobile (below 768px) | Toasts full-width at top; notification centre as full-screen overlay |

- Toast width: 360px on desktop, full-width minus margins on mobile
- Notification centre panel: 400px wide on desktop, full-screen on mobile

## Accessibility

- Toast notifications use `role="status"` and `aria-live="polite"` for non-critical messages
- Error toasts use `role="alert"` for immediate announcement
- Toasts are keyboard dismissible (focus moves to toast on appearance, `Escape` to dismiss)
- Notification centre is accessible via keyboard (`Enter` to open, `Escape` to close)
- Each notification in the centre has a clear label for screen readers including title, time, and read/unread state
- Badge counts are announced: "Notifications: 3 unread"
- Auto-dismiss duration is sufficient for users to read the content (minimum 5 seconds)
- Users can pause auto-dismiss by hovering or focusing

## Example Structure

```
<!-- Toast notification -->
<div role="status" aria-live="polite" class="toast toast--success">
  <SuccessIcon aria-hidden="true" />
  <div>
    <strong>Request submitted</strong>
    <p>Reference: #12345</p>
  </div>
  <Button variant="text" onClick={viewRequest}>View</Button>
  <Button variant="icon" aria-label="Dismiss" onClick={dismiss}>✕</Button>
</div>

<!-- Inline alert -->
<div role="alert" class="alert alert--warning">
  <WarningIcon aria-hidden="true" />
  <div>
    <strong>Session expiring</strong>
    <p>Your session expires in 5 minutes. Save your work or extend.</p>
  </div>
  <Button variant="secondary" onClick={extend}>Extend session</Button>
</div>

<!-- Notification centre trigger -->
<Button
  aria-label="Notifications: 3 unread"
  aria-expanded={isOpen}
  onClick={togglePanel}
>
  <BellIcon />
  <Badge count={3} />
</Button>
```

## Do

- Use toasts for confirming completed actions
- Use inline alerts for persistent page-level messages
- Provide a notification centre for historical reference
- Auto-dismiss informational toasts after 5 seconds
- Keep error notifications visible until the user dismisses them

## Don't

- Stack more than 3 toasts simultaneously
- Use toasts for critical errors (use inline alerts or modals)
- Auto-dismiss error notifications
- Show notifications without a clear icon and text label
- Rely solely on colour to differentiate notification types
- Play sounds for notifications without user consent
