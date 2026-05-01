# Journey: Approval

## Overview

The "Approval" journey covers both requesting and granting approvals. When an action requires authorisation, this workflow captures the request, routes it to the appropriate approver, supports review and decision-making, and confirms the outcome. It handles single-level and multi-level approval chains.

## Entry Conditions

### As a requester
- A user action triggers an approval requirement (e.g., access request, budget expenditure, change deployment)
- User may enter from: inline prompt during another workflow, approval request form, or notification to complete a pending submission

### As an approver
- An approval request has been assigned to the user
- User may enter from: email notification, in-app notification, approval queue, or dashboard widget

## Steps

### Step 1: Request submission

**Page name:** Request approval
**User intent:** Submit a request that requires authorisation
**Primary action:** Submit for approval
**Secondary action:** Save as draft

**Content:**
- **Request type**: Pre-selected based on the triggering workflow (editable if entered directly)
- **Title**: Short summary of what is being requested (required)
- **Justification**: Why this is needed, with guidance text on what approvers look for (required)
- **Details**: Structured fields specific to the request type (e.g., budget amount, access level, deployment window)
- **Supporting documents**: File upload for evidence or documentation
- **Urgency**: Standard or Urgent (urgent requests notify approvers immediately)
- **Approval chain**: Read-only preview showing who will review at each level

**States:**
- Default: Form with contextual fields based on request type
- Pre-filled: When triggered from another workflow, relevant details are auto-populated
- Validation error: Inline errors on required fields
- Draft saved: Confirmation toast, draft appears in the user's request list
- Loading: Skeleton form while request type configuration loads

**Transitions:**
- On "Submit for approval" → Step 2: Awaiting approval (requester view)
- On "Save as draft" → Request list with draft status
- If triggered inline from another workflow → Returns to the original workflow in a "pending approval" state

### Step 2: Awaiting approval (requester view)

**Page name:** Approval status
**User intent:** Track the progress of the submitted request
**Primary action:** None (waiting state)
**Secondary action:** Withdraw request

**Content:**
- Request summary with current status badge (Pending, In review, Approved, Rejected, Withdrawn)
- **Approval chain progress**: Visual stepper showing each approval level, who is assigned, and their status
- **Current approver**: Name, role, and how long the request has been with them
- **Timeline**: Log of events (submitted, viewed by approver, comments, decisions)
- **Comments**: Section for communication between requester and approver(s)
- **Estimated completion**: Based on average approval times for this request type

**States:**
- Pending: Awaiting first approver, stepper shows first level active
- In review: Approver has viewed the request, status updated
- Partially approved: In a multi-level chain, some levels approved, next level pending
- Approved: All levels approved, success banner with next steps
- Rejected: Rejection banner with feedback, option to revise and resubmit
- Conditionally approved: Approved with conditions, conditions displayed in a highlight box
- Withdrawn: Requester cancelled, read-only view

**Transitions:**
- On "Withdraw" → Confirmation dialog, then status changes to Withdrawn
- On "Revise and resubmit" (after rejection) → Step 1 with previous data pre-filled
- On approval completion → Notification and redirect to the next action (if part of a larger workflow)

### Step 3: Approval queue (approver view)

**Page name:** Approvals
**User intent:** Review and act on pending approval requests
**Primary action:** Select a request to review
**Secondary action:** Filter or sort the queue

**Content:**
- List of pending requests assigned to the user
- Each row shows: request title, requester name, request type, urgency badge, time in queue, SLA status
- Sort options: newest first, oldest first, urgency, approaching deadline
- Filter options: request type, urgency
- Summary counts: total pending, approaching deadline, overdue

**States:**
- Default: List of pending approvals sorted by urgency and age
- Empty: "No pending approvals. You're all caught up."
- Filtered: Results narrowed by request type or urgency
- Loading: Skeleton table rows
- Error: "We couldn't load your approval queue. [Try again]"

**Transitions:**
- On request selection → Step 4: Review and decide

### Step 4: Review and decide

**Page name:** Review approval [REQ-number]
**User intent:** Evaluate the request and make a decision
**Primary action:** Approve
**Secondary action:** Reject or Return for changes

**Content:**
- **Request summary**: Type, title, requester, submission date, urgency
- **Justification**: The requester's explanation, highlighted for quick reading
- **Details**: All structured fields from the request, displayed read-only
- **Supporting documents**: Attached files with preview capability
- **Approval history**: Previous approver decisions in the chain (if multi-level)
- **Comments**: Thread of communication, with option to add a comment or ask a question
- **Decision buttons**: Approve, Approve with conditions, Reject, Return for changes

**Decision options:**
- **Approve**: Request proceeds to the next level or is completed
- **Approve with conditions**: Approval granted with stipulations the requester must fulfil
- **Reject**: Request denied with mandatory feedback
- **Return for changes**: Request sent back to the requester for modification

**States:**
- Default: Review page with all details and decision buttons
- Comment pending: Approver has asked a question, waiting for requester response
- Decision confirmation: "Approve this request?" or "Reject this request?" with consequence summary
- Loading: Skeleton content while request details load
- Error: "We couldn't load this request. [Try again]"

**Transitions:**
- On "Approve" → Confirmation dialog, then approval recorded, next level notified (or request completed)
- On "Approve with conditions" → Conditions text field, then approval recorded with conditions visible to requester
- On "Reject" → Mandatory feedback field, then rejection recorded, requester notified
- On "Return for changes" → Feedback field, then request returned to requester for revision
- On "Add comment" → Comment posted, requester notified

### Step 5: Completion

**Page name:** Approval complete
**User intent:** Confirm the outcome and understand next steps
**Primary action:** Proceed with the approved action (requester) or return to queue (approver)

**Content (requester view):**
- Success banner: "Your request has been approved" or rejection notice with feedback
- **Decision summary**: Who approved, when, any conditions attached
- **Next steps**: What happens now (e.g., "Access will be provisioned within 2 hours", "Your budget has been allocated")
- **Conditions** (if applicable): Listed with status tracking for fulfilment

**Content (approver view):**
- Confirmation: "Your decision has been recorded"
- **Next in queue**: Link to the next pending approval (if any)
- **Return to queue**: Link back to the approval list

**States:**
- Approved: Success state with next steps for the requester
- Conditionally approved: Approval with visible conditions and fulfilment tracking
- Rejected: Rejection notice with feedback and option to revise
- Error: "We couldn't record your decision. [Try again]"

**Transitions:**
- Requester: Proceeds to the action enabled by the approval, or revises and resubmits
- Approver: Returns to the approval queue or navigates elsewhere

## Timeout Handling

| Scenario | Response |
|----------|----------|
| Approver has not acted within 48 hours | Reminder notification sent to the approver |
| Approver has not acted within 72 hours | Escalation to the approver's manager, requester notified |
| Approver has not acted within 5 business days | Auto-escalation to the next level or department head |
| Urgent request not acted on within 4 hours | Immediate escalation and requester notification |
| Approver is out of office | Auto-delegate to the configured backup approver |
| Request expired (configurable per type) | Request auto-withdrawn with notification to the requester |

## Error Handling

| Error scenario | Response |
|---------------|----------|
| Submission fails | "We couldn't submit your request. Your details are saved. [Try again]" |
| Approval queue fails to load | "We couldn't load your approvals. [Try again]" |
| Decision save fails | "We couldn't record your decision. [Try again]" |
| Notification delivery fails | Decision is recorded; "Notifications couldn't be sent. The requester can check their request status." |
| Approval chain configuration missing | "This request type doesn't have an approval chain configured. [Contact your administrator]" |
| Approver no longer has permission | "You can no longer approve this request type. It has been reassigned." |

## Escalation Paths

- **Requester**: "Escalate" option available after the request has been pending beyond SLA
- **System**: Auto-escalation rules based on timeout thresholds (see Timeout Handling)
- **Approver**: "Delegate" option to reassign to a colleague with equivalent authority
- All escalations and delegations are logged in the approval timeline

## Success Criteria

- Requests are submitted with sufficient justification for approvers to make informed decisions
- Approvers can review and decide on requests efficiently from a centralised queue
- Decisions are communicated to requesters promptly with clear next steps
- Timeout and escalation rules ensure no request is left unattended
- The full approval trail is documented for audit purposes

## Analytics Events

| Event | Trigger | Properties |
|-------|---------|-----------|
| `approval.requested` | Request submitted for approval | `requestId`, `requestType`, `urgency` |
| `approval.viewed` | Approver opens a request for review | `requestId`, `approverLevel`, `timeInQueue` |
| `approval.approved` | Request approved | `requestId`, `approverLevel`, `decisionTime` |
| `approval.conditionally_approved` | Request approved with conditions | `requestId`, `conditionCount` |
| `approval.rejected` | Request rejected | `requestId`, `approverLevel`, `reason` |
| `approval.returned` | Request returned for changes | `requestId`, `approverLevel` |
| `approval.withdrawn` | Requester withdraws the request | `requestId`, `stageAtWithdrawal` |
| `approval.escalated` | Request escalated due to timeout | `requestId`, `escalationLevel`, `timeOverdue` |
| `approval.delegated` | Approver delegates to another person | `requestId`, `fromApprover`, `toApprover` |
| `approval.completed` | Full approval chain completed | `requestId`, `totalDuration`, `levelCount` |
