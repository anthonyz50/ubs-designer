# Journey: Incident Triage

## Overview

The "Incident Triage" journey guides users through assessing, categorising, and routing an IT incident from detection through to resolution and post-incident review. This workflow ensures incidents are handled consistently, communicated clearly, and resolved within SLA targets.

## Entry Conditions

- An incident has been detected by monitoring, reported by a user, or escalated from a request
- The user has incident management permissions
- User may enter from: monitoring alert, incident queue, email notification, service status page, or direct navigation

## Steps

### Step 1: Assess the incident

**Page name:** Incident assessment
**User intent:** Understand the scope and severity of the incident
**Primary action:** Complete assessment and proceed to categorisation
**Secondary action:** Merge with existing incident (if duplicate)

**Content:**
- **Source**: How the incident was detected (monitoring alert, user report, escalation)
- **Initial description**: Pre-populated from the alert or report, editable
- **Severity selection**: Critical, High, Medium, Low, with clear definitions beside each option
  - Critical: Complete service loss, all users affected
  - High: Major feature unavailable, large user group affected
  - Medium: Partial degradation, limited user impact
  - Low: Minor issue, workaround available
- **Impact scope**: Affected services (multi-select from service catalogue), affected regions, estimated user count
- **Timeline**: When the incident began (auto-populated from monitoring if available, editable)
- **Related incidents**: System suggests similar open or recent incidents for potential merge

**States:**
- Default: Assessment form with auto-populated fields from the source alert
- Pre-filled: When entered from a monitoring alert, severity and impact are suggested based on rules
- Duplicate detected: Banner showing a similar open incident with "Merge" and "Continue as new" options
- Loading: Skeleton form while alert data loads
- Error: "We couldn't load the alert details. Complete the assessment manually or [Try again]."

**Transitions:**
- On "Continue" → Step 2: Categorise and route
- On "Merge" → Existing incident detail page with this report appended

### Step 2: Categorise and route

**Page name:** Categorise incident
**User intent:** Classify the incident and assign it to the right team
**Primary action:** Assign and begin response
**Secondary action:** Back to assessment

**Content:**
- **Category**: Dropdown or search (Infrastructure, Application, Network, Security, Data, Access)
- **Sub-category**: Contextual dropdown based on category selection
- **Priority**: Auto-calculated from severity and impact, displayed as a read-only badge with the formula shown (e.g., "Priority 1: Critical severity + High impact")
- **Assigned team**: Auto-suggested based on category and affected service, with option to override
- **Assigned individual**: Optional, dropdown of team members from the assigned team
- **Communication plan**: Checkbox options for automatic notifications
  - Notify affected users
  - Notify management
  - Post to service status page

**States:**
- Default: Categorisation form with auto-suggested values
- Validation error: Inline errors on required fields
- Team unavailable: Warning when the suggested team is at capacity, with alternative suggestions
- Loading: Skeleton fields while catalogue data loads

**Transitions:**
- On "Assign" → Step 3: Initial response
- On "Back" → Step 1: Assess the incident (preserves entered data)

### Step 3: Initial response

**Page name:** Incident response [INC-number]
**User intent:** Take the first response actions, communicate status, and begin investigation
**Primary action:** Post an update
**Secondary action:** Escalate

**Content:**
- Incident header: ID, title, severity badge, priority badge, elapsed time
- **Response checklist**: Category-specific initial steps (e.g., "Confirm monitoring is active", "Verify backup availability", "Check recent changes")
- **Communication panel**: Draft and send status updates to affected users and stakeholders
- **Investigation notes**: Rich text area for documenting findings as the investigation progresses
- **Actions taken**: Log of response actions with timestamps and owners
- **Runbook link**: If a relevant runbook exists, link displayed prominently

**States:**
- Active: Checklist in progress, investigation ongoing
- Awaiting escalation: Escalation requested, waiting for next-level response
- Workaround applied: Temporary fix in place, indicated by a status change
- Loading: Skeleton content while incident data loads
- Error: "We couldn't load the incident details. [Try again]"

**Transitions:**
- On "Post update" → Update added to timeline, notifications sent per communication plan
- On "Escalate" → Step 4: Escalation
- On "Resolve" → Step 5: Resolution

### Step 4: Escalation

**Page name:** Escalate incident
**User intent:** Hand off or involve additional expertise for an incident that cannot be resolved at the current level
**Primary action:** Confirm escalation
**Secondary action:** Cancel (return to response)

**Content:**
- **Escalation level**: Current level displayed, next level pre-selected
- **Escalation target**: Suggested team or individual based on incident category and current level
- **Reason for escalation**: Required text field
- **Context summary**: Auto-generated from the incident timeline and investigation notes
- **Urgency**: Option to mark as immediate (triggers instant notifications)

**States:**
- Default: Escalation form with pre-populated context
- Confirmation: "Escalate to [Team/Person]? They will receive an immediate notification."
- Success: "Incident escalated to [Team]. They have been notified."
- Error: "We couldn't complete the escalation. [Try again] or contact the team directly."

**Transitions:**
- On "Confirm" → Returns to Step 3 with escalation logged in the timeline
- On "Cancel" → Returns to Step 3

### Step 5: Resolution

**Page name:** Resolve incident
**User intent:** Confirm the incident is resolved and document the resolution
**Primary action:** Mark as resolved
**Secondary action:** Return to response (if not yet resolved)

**Content:**
- **Resolution summary**: Description of what fixed the issue (required)
- **Root cause**: Dropdown (Known error, Configuration change, Infrastructure failure, Third-party issue, Unknown) with optional detail text
- **Resolution type**: Permanent fix, Temporary workaround, or Service restored (root cause pending)
- **Verification**: Checklist confirming the service is restored
  - Service health checks passing
  - Affected users confirmed access
  - Monitoring returning to normal thresholds
- **Follow-up actions**: Option to create follow-up tasks (e.g., post-incident review, permanent fix implementation)

**States:**
- Default: Resolution form with pre-populated fields from the incident timeline
- Incomplete verification: Warning banner if not all verification checks are ticked
- Success: "Incident resolved. Affected users have been notified."
- Error: "We couldn't update the incident status. [Try again]"

**Transitions:**
- On "Mark as resolved" → Step 6: Post-incident review prompt
- On "Return to response" → Step 3 (if more work is needed)

### Step 6: Post-incident review

**Page name:** Post-incident review
**User intent:** Document lessons learned and prevent recurrence
**Primary action:** Complete review
**Secondary action:** Schedule for later

**Content:**
- **Incident summary**: Auto-generated from the timeline (editable)
- **Timeline of key events**: Condensed from the full timeline, highlighting detection, response, escalation, and resolution milestones
- **What went well**: Text area
- **What could be improved**: Text area
- **Action items**: Table for follow-up tasks with assignee, due date, and status
- **Prevention measures**: Recommended changes to prevent recurrence

**States:**
- Default: Review form with auto-populated timeline
- Scheduled: Review saved as draft with a due date, appears in the owner's task list
- Complete: Review published and linked to the incident record
- Error: "We couldn't save the review. [Try again]"

**Transitions:**
- On "Complete review" → Incident record updated, review published, linked from service history
- On "Schedule for later" → Draft saved, reminder created for the specified date

## Error Handling

| Error scenario | Response |
|---------------|----------|
| Alert data fails to load | "We couldn't load the alert details. Complete the assessment manually or [Try again]." |
| Service catalogue unavailable | "Service list is temporarily unavailable. Type the service name manually." |
| Team assignment fails | "We couldn't assign this incident. [Try again] or assign manually from the team directory." |
| Status update fails to send | "Your update was saved but notifications failed. [Retry notifications]" |
| Escalation fails | "We couldn't complete the escalation. [Try again] or contact the team directly." |
| Resolution save fails | "We couldn't update the incident. Your changes are preserved. [Try again]" |

## Escalation Paths

- **Severity upgrade**: If impact grows during investigation, severity can be upgraded, triggering re-routing and expanded notifications
- **Time-based**: Auto-escalation rules trigger if the incident is not acknowledged within SLA (e.g., P1 within 15 minutes, P2 within 1 hour)
- **Management escalation**: For P1 incidents, management is auto-notified at detection and at 30-minute intervals until resolution
- All escalations carry the full incident context and timeline

## Success Criteria

- The incident is assessed, categorised, and assigned within the SLA response window
- Affected users are notified promptly with accurate status updates
- The incident is resolved and verified, with a clear resolution summary
- A post-incident review captures lessons learned and assigns follow-up actions

## Analytics Events

| Event | Trigger | Properties |
|-------|---------|-----------|
| `incident.created` | Incident record created | `incidentId`, `source`, `severity` |
| `incident.assessed` | Assessment completed | `incidentId`, `severity`, `impactScope` |
| `incident.categorised` | Category and team assigned | `incidentId`, `category`, `assignedTeam`, `priority` |
| `incident.update_posted` | Status update sent | `incidentId`, `updateType`, `audienceSize` |
| `incident.escalated` | Incident escalated | `incidentId`, `fromLevel`, `toLevel`, `reason` |
| `incident.resolved` | Incident marked resolved | `incidentId`, `resolutionType`, `totalDuration` |
| `incident.review_completed` | Post-incident review published | `incidentId`, `actionItemCount` |
| `incident.reopened` | Resolved incident reopened | `incidentId`, `reason` |
| `incident.sla_breached` | SLA response or resolution time exceeded | `incidentId`, `slaType`, `exceededBy` |
