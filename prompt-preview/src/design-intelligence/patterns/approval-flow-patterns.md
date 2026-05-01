# Approval Flow Patterns

## When to Use

Approval flows manage requests that require one or more authorised persons to review and approve, reject, or return an item before it can proceed. Use for budget approvals, access requests, change management, document sign-offs, and any workflow requiring human authorisation.

## Layout Structure

### Request with approval timeline
```
┌─────────────────────────────────────────────────┐
│ Request title                    Status: Pending │
│ Submitted by: Name | Date: 15 Jan 2025          │
├──────────────────────────┬──────────────────────┤
│ Request details          │ Approval timeline    │
│                          │                      │
│ Category: Access         │ ① Submitted    ✓     │
│ Priority: High           │ ② Manager      ●     │
│ Description: ...         │ ③ Security     ○     │
│ Attachments: 2 files     │ ④ Completed    ○     │
│                          │                      │
│                          │ Current approver:    │
│                          │ Jane Smith           │
│                          │ Assigned: 15 Jan     │
├──────────────────────────┴──────────────────────┤
│ Comments and activity log                        │
│ [Add comment]                                    │
├─────────────────────────────────────────────────┤
│ [Return for changes]  [Reject]  [Approve]       │
└─────────────────────────────────────────────────┘
```

### Approval queue (approver's view)
```
┌─────────────────────────────────────────────────┐
│ Pending approvals (7)       [Filter] [Sort]     │
├─────┬────────────┬──────────┬─────────┬─────────┤
│ Pri │ Request    │ Requester │ Waiting │ Action  │
├─────┼────────────┼──────────┼─────────┼─────────┤
│ !!! │ Access req │ J. Smith  │ 2 days  │ [Review]│
│ !!  │ Budget app │ A. Brown  │ 1 day   │ [Review]│
│ !   │ Change req │ M. Lee    │ 3 hours │ [Review]│
└─────┴────────────┴──────────┴─────────┴─────────┘
```

## Key Components

### Status indicators
| Status | Colour | Icon | Description |
|--------|--------|------|-------------|
| Draft | Neutral-40 | Circle outline | Not yet submitted |
| Pending | Warning `#E4A911` | Clock | Awaiting approval |
| In review | Info `#3A5A88` | Eye | Currently being reviewed |
| Approved | Success `#6F7A1A` | Checkmark | Approved by all required approvers |
| Rejected | Error `#BD000C` | Cross | Rejected by an approver |
| Returned | Warning `#E4A911` | Arrow back | Returned to requester for changes |
| Cancelled | Neutral-40 | Slash | Cancelled by requester |

### Approval timeline / stepper
- Vertical stepper showing each approval stage
- Completed steps: filled checkmark, success colour
- Current step: filled circle, info colour, with approver name and date assigned
- Future steps: outline circle, neutral colour
- Rejected/returned steps: filled icon in error/warning colour

### Action buttons (approver view)
- **Approve** (primary): Moves the request to the next stage or completes it
- **Reject** (destructive): Ends the workflow with a required reason
- **Return for changes** (secondary): Sends back to the requester with comments
- All actions require a confirmation step with optional comment field

### Comment thread
- Chronological activity log combining system events and user comments
- System events: "Submitted", "Assigned to Jane Smith", "Approved by Jane Smith"
- User comments: Freeform text with timestamp and author
- Add comment field at the bottom of the thread

### Delegation
- Approvers can delegate to a colleague when unavailable
- Delegation shows in the timeline: "Delegated from Jane Smith to John Doe"
- Original approver is notified of the outcome

## Interaction Flow

### Requester flow
1. User creates a request (form pattern)
2. User reviews and submits; status changes to "Pending"
3. System identifies the approval chain and notifies the first approver
4. User can track progress via the approval timeline
5. If returned, user edits and resubmits
6. On approval: user is notified and the request is fulfilled
7. On rejection: user is notified with the reason

### Approver flow
1. Approver receives a notification (email, in-app, or both)
2. Approver opens the request from their approval queue or notification
3. Approver reviews the request details, attachments, and comments
4. Approver chooses: Approve, Reject, or Return for changes
5. System prompts for a comment (required for reject/return, optional for approve)
6. Confirmation dialog shows the action and its consequence
7. On confirm: status updates, next approver is notified (if applicable), requester is notified

## States

### Loading
- Request detail: skeleton layout matching the two-column structure
- Approval queue: skeleton table rows

### Empty
- Approval queue (no pending items): "No pending approvals. You're all caught up."
- Comment thread (no comments): "No comments yet. Add a comment to discuss this request."

### Error
- Failed to load request: "We couldn't load this request. [Try again]"
- Failed to submit approval: "Your approval couldn't be processed. [Try again]"
- Preserve the approver's comment on submission failure

### Success
- Approval submitted: toast notification "Request #12345 approved" with link to the request
- Rejection submitted: toast notification "Request #12345 rejected"
- Timeline updates in real time to reflect the new status

### Overdue
- Requests waiting longer than the SLA threshold show a warning indicator
- Overdue items float to the top of the approval queue
- Escalation notification sent to the approver's manager after the configured threshold

## Responsive Behaviour

| Breakpoint | Behaviour |
|-----------|-----------|
| Desktop (1024px+) | Two-column layout: details left, timeline right |
| Tablet (768-1023px) | Single column: details, then timeline below |
| Mobile (below 768px) | Single column, action buttons sticky at bottom |

- Approval queue uses card layout on mobile (one card per request)
- Action buttons (Approve/Reject/Return) are always visible without scrolling (sticky footer on mobile)
- Comment thread collapses to most recent 3 entries with "Show all" on mobile

## Accessibility

- Approval timeline uses `aria-current="step"` for the active approval stage
- Status labels pair colour with icon and text
- Action buttons have clear, descriptive labels ("Approve request", "Reject request")
- Confirmation dialogs trap focus and return focus to the trigger on close
- Comment thread is navigable via keyboard; "Add comment" textarea is labelled
- Time-sensitive information (overdue indicators) is announced via `aria-live` regions
- Approval queue table follows data table accessibility patterns (semantic markup, sort announcements)

## Example Structure

```
<main aria-label="Request details">
  <header>
    <h1>Access request: Production database</h1>
    <StatusLabel status="pending" />
    <p>Submitted by John Smith on 15 Jan 2025</p>
  </header>

  <div class="two-column">
    <section aria-label="Request information">
      <dl>
        <dt>Category</dt><dd>Access management</dd>
        <dt>Priority</dt><dd>High</dd>
        <dt>Description</dt><dd>Requesting read access to...</dd>
        <dt>Attachments</dt><dd><FileList files={attachments} /></dd>
      </dl>
    </section>

    <aside aria-label="Approval progress">
      <h2>Approval timeline</h2>
      <ProgressStepper>
        <Step label="Submitted" status="complete" date="15 Jan 2025" />
        <Step label="Manager approval" status="current" assignee="Jane Smith" date="15 Jan 2025" />
        <Step label="Security review" status="pending" />
        <Step label="Completed" status="pending" />
      </ProgressStepper>
    </aside>
  </div>

  <section aria-label="Comments and activity">
    <h2>Activity</h2>
    <ActivityLog entries={comments} />
    <CommentInput label="Add a comment" onSubmit={addComment} />
  </section>

  <footer class="action-bar">
    <Button variant="secondary">Return for changes</Button>
    <Button variant="destructive">Reject</Button>
    <Button variant="primary">Approve</Button>
  </footer>
</main>
```

## Do

- Show the complete approval chain so requesters and approvers have full visibility
- Require a reason for rejections and returns
- Notify all relevant parties at each status change
- Surface overdue approvals prominently in the approver's queue
- Allow delegation when an approver is unavailable

## Don't

- Allow approvals without reviewing the request details (avoid one-click approve from a list)
- Hide the approval history or comments from the requester
- Auto-approve requests that have exceeded a timeout (escalate instead)
- Show action buttons (Approve/Reject) to users who are not the current approver
- Remove cancelled or rejected requests from history
