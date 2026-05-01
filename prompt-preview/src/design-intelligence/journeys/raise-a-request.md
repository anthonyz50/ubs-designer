# Journey: Raise a Request

## Overview

The "Raise a Request" journey allows a user to submit a support or service request for something they cannot self-serve. This is a structured workflow covering category selection, detail capture, review, submission, and tracking.

## Entry Conditions

- User needs something that requires action from another team or system
- User has the appropriate permissions to raise requests
- User may enter from: navigation menu, dashboard quick action, service catalogue, or notification prompt

## Steps

### Step 1: Select category

**Page name:** Choose request type
**User intent:** Identify what kind of request to raise
**Primary action:** Select a category and proceed
**Secondary action:** Search for a category

**Content:**
- Category cards arranged in a grid, each with an icon, title, and short description
- Search input for filtering categories
- Recently used categories shown at the top for returning users

**States:**
- Default: Category grid with search bar
- Search active: Filtered results matching the search term
- Empty search: "No matching categories. Try a different search term or browse all categories."
- Loading: Skeleton category cards
- Error: "We couldn't load the request categories. [Try again]"

**Transitions:**
- On category selection → Step 2: Provide details
- If the category has sub-categories → Intermediate sub-category selection, then Step 2

### Step 2: Provide details

**Page name:** Request details
**User intent:** Describe what is needed, when, and how urgently
**Primary action:** Review request
**Secondary action:** Back to category selection

**Content varies by category, but typically includes:**
- **Summary**: Short description of the request (required)
- **Description**: Detailed explanation with rich text support (required)
- **Urgency**: Dropdown with options (Low, Medium, High, Critical) and expected response times shown beside each option
- **Preferred date**: Date picker for when the request should be fulfilled (optional)
- **Attachments**: File upload area for supporting documents or screenshots (optional)
- **Affected service or system**: Dropdown pre-populated from the service catalogue (when applicable)
- **On behalf of**: Option to raise on behalf of another person (when permitted)

**States:**
- Default: Form with sensible defaults pre-populated (urgency defaults to Medium)
- Validation error: Inline errors beneath invalid fields, error summary at the top of the form
- Partially complete: Save as draft available after the first field is completed
- Loading: Skeleton form fields while category-specific fields load

**Transitions:**
- On "Review request" → Step 3: Review and confirm
- On "Back" → Step 1: Select category (preserves entered data)
- On "Save as draft" → Draft saved, returns to request list with draft visible

### Step 3: Review and confirm

**Page name:** Review your request
**User intent:** Verify all details are correct before submitting
**Primary action:** Submit request
**Secondary action:** Edit details (returns to Step 2)

**Content:**
- Read-only summary of all entered details
- Category and sub-category displayed at the top
- Attachments listed with file names and sizes
- Expected response time based on urgency and category
- Notification preferences: "We'll email you at [address] when there's an update."

**States:**
- Default: All details displayed, submit button enabled
- Submitting: Button shows loading state, form is disabled
- Error: "We couldn't submit your request. Your details are saved. [Try again]"

**Transitions:**
- On "Submit request" → Step 4: Submission progress
- On "Edit details" → Step 2: Provide details (preserves all data)

### Step 4: Submission progress

**Page name:** Submitting your request
**User intent:** Understand the request is being processed
**Primary action:** None (automatic progression)

**Content:**
- Progress indicator with contextual status text
- "Creating your request...", "Assigning to the right team...", "Sending confirmation..."

**States:**
- Processing: Animated progress indicator with status messages
- Error: "Something went wrong during submission. Your request details are saved. [Try again]"

**Transitions:**
- On completion → Step 5: Confirmation (automatic, typically within 2 to 3 seconds)
- On error → Retry from Step 3 with all data preserved

### Step 5: Confirmation

**Page name:** Request submitted
**User intent:** Confirm the request was received and know what happens next
**Primary action:** View request
**Secondary action:** Raise another request

**Content:**
- Success banner with confirmation message
- Reference number displayed prominently (e.g., "REQ-2025-04821")
- Summary of expected next steps: "The [team name] team will review your request within [SLA timeframe]."
- Notification details: "You'll receive email updates at [address]."
- Quick actions: "View request", "Raise another request", "Return to dashboard"

**States:**
- Default: Confirmation displayed with reference number and next steps
- Copy reference: Clicking the reference number copies it to clipboard with "Copied" feedback

**Transitions:**
- On "View request" → Request detail page (Step 6)
- On "Raise another request" → Step 1: Select category
- On "Return to dashboard" → Main dashboard

### Step 6: Track request

**Page name:** Request detail
**User intent:** Follow the progress of the submitted request
**Primary action:** Depends on status (add comment, cancel request)
**Secondary action:** Return to request list

**Content:**
- Request summary with current status badge
- Timeline of events (submitted, assigned, in progress, resolved)
- Comments section: user can add notes or respond to questions from the assigned team
- Attachments section: option to add further documents
- SLA tracker showing time remaining against the target response time
- Assigned team or person (when available)

**States:**
- Pending: Request submitted, awaiting assignment
- In progress: Assigned and being worked on, timeline shows updates
- On hold: Awaiting information from the requester, with a prompt to respond
- Resolved: Resolution details shown, with option to confirm or re-open
- Cancelled: Cancellation reason displayed, read-only

**Transitions:**
- On "Add comment" → Comment form inline, submit returns to timeline
- On "Cancel request" → Confirmation dialog, then status changes to Cancelled
- On status change (by the team) → Timeline updates, notification sent to user

## Error Handling

| Error scenario | Response |
|---------------|----------|
| Category list fails to load | "We couldn't load request categories. [Try again] or [Contact support]" |
| Form validation errors | Inline errors on each field plus summary at the top with anchor links |
| Submission fails | "We couldn't submit your request. Your details are saved. [Try again]" |
| Draft save fails | Toast: "We couldn't save your draft. Check your connection and try again." |
| Duplicate request detected | "A similar request already exists: [REQ-number]. [View existing request] or [Continue with new request]" |
| Session timeout during form | Draft auto-saved; on return, prompt: "You have an unsaved draft. [Continue] or [Start fresh]" |
| Attachment upload fails | Inline error beneath the upload area: "This file couldn't be uploaded. Check the file size (max 25MB) and try again." |

## Escalation Paths

- **During tracking**: "Escalate this request" creates a priority flag and notifies the team lead
- **SLA breach approaching**: System automatically escalates and notifies the user
- **Unresolved after re-open**: Second re-open triggers automatic escalation to management
- All escalations include the full request history and timeline

## Success Criteria

- The user successfully submits a well-categorised request with all necessary details
- A unique reference number is assigned and communicated
- The request is routed to the correct team within the SLA window
- The user can track progress and communicate with the assigned team

## Analytics Events

| Event | Trigger | Properties |
|-------|---------|-----------|
| `request.started` | User begins the request journey | `source` (where they entered from) |
| `request.category_selected` | Category chosen | `categoryId`, `categoryName` |
| `request.details_completed` | Details form submitted for review | `categoryId`, `urgency`, `hasAttachments` |
| `request.submitted` | Request successfully submitted | `requestId`, `categoryId`, `urgency` |
| `request.submission_failed` | Submission error occurred | `errorType`, `categoryId` |
| `request.draft_saved` | User saved a draft | `categoryId`, `completionPercent` |
| `request.viewed` | User views a submitted request | `requestId`, `currentStatus` |
| `request.comment_added` | User adds a comment to a request | `requestId`, `currentStatus` |
| `request.escalated` | User escalates a request | `requestId`, `reason` |
| `request.cancelled` | User cancels a request | `requestId`, `stageAtCancellation` |
