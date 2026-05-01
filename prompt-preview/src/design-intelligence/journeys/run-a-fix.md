# Journey: Run a Fix

## Overview

The "Run a Fix" journey allows a user to initiate and track a corrective action (fix) against a known issue or defect. This is a structured workflow for applying pre-defined or custom remediation steps, tracking execution, and confirming resolution.

## Entry Conditions

- User has identified an issue that needs remediation
- User has the appropriate permissions to initiate a fix
- The issue is in a fixable state (not already resolved or under active remediation)
- User may enter from: incident detail page, service status page, alert notification, or direct navigation

## Steps

### Step 1: Select issue

**Page name:** Select issue
**User intent:** Identify the specific issue to fix
**Primary action:** Select an issue and proceed
**Secondary action:** Create a new issue (if the problem is not yet logged)

**States:**
- Default: List of open issues with search and filters (by category, severity, service)
- Empty: "No open issues found. [Create a new issue] to log the problem first."
- Loading: Skeleton table rows
- Error: "We couldn't load the issue list. [Try again]"

**Transitions:**
- On issue selection → Step 2: Choose fix type
- On "Create new issue" → Redirects to issue creation form, then returns

### Step 2: Choose fix type

**Page name:** Choose fix
**User intent:** Select the appropriate remediation approach
**Primary action:** Select a fix type and continue
**Secondary action:** Request a custom fix (escalates to specialist)

**Fix type options:**
- **Standard fix**: Pre-defined remediation from the fix catalogue
- **Guided fix**: Step-by-step wizard with manual verification at each stage
- **Automated fix**: Script-based remediation that runs without manual intervention
- **Custom fix**: Freeform fix with manual steps defined by the user

**States:**
- Default: Fix type cards with descriptions and estimated duration
- Loading: Skeleton cards
- Restricted: Some fix types greyed out with tooltip "Requires [permission level] access"

**Transitions:**
- On fix type selection → Step 3: Configure parameters
- On "Request custom fix" → Step 3 with freeform configuration

### Step 3: Configure parameters

**Page name:** Configure fix
**User intent:** Set the parameters for the selected fix
**Primary action:** Review configuration
**Secondary action:** Back to fix selection

**Content varies by fix type:**
- Standard: Select from pre-populated parameter sets
- Guided: Review the step sequence, adjust parameters per step
- Automated: Select environment, schedule (now or deferred), notification preferences
- Custom: Define steps, assign owners, set expected duration

**States:**
- Default: Configuration form with sensible defaults pre-populated
- Validation error: Inline errors on invalid parameters
- Loading: Field values loading from the fix catalogue

**Transitions:**
- On "Review" → Step 4: Review and confirm
- On "Back" → Step 2: Choose fix type (preserves selections)

### Step 4: Review and confirm

**Page name:** Review fix
**User intent:** Verify all details before execution
**Primary action:** Run fix
**Secondary action:** Edit (returns to Step 3)

**Content:**
- Issue summary (title, severity, affected service)
- Fix type and parameters in a read-only summary
- Estimated duration and impact
- Notification recipients
- Confirmation checkbox: "I understand this fix will [impact description]"

**States:**
- Default: All details displayed, "Run fix" button enabled after confirmation checkbox
- Loading: Submitting the fix request
- Error: "We couldn't start the fix. [Try again]"

**Transitions:**
- On "Run fix" → Step 5: Monitor execution
- On "Edit" → Step 3: Configure parameters

### Step 5: Monitor execution

**Page name:** Fix progress
**User intent:** Track the fix as it runs and intervene if needed
**Primary action:** Complete (when fix finishes)
**Secondary action:** Abort fix (with confirmation)

**Content:**
- Progress stepper showing fix stages
- Real-time log output (for automated fixes)
- Manual step checklist (for guided/custom fixes)
- Elapsed time and estimated remaining time
- Current status: Running / Paused / Awaiting confirmation

**States:**
- Running: Progress stepper advances, log updates in real time
- Paused: Awaiting user confirmation for the next manual step
- Success: All steps complete, success banner displayed
- Failure: Error at a specific step, with details and "Retry step" or "Abort" options
- Aborted: Fix cancelled by user, partial state documented

**Transitions:**
- On success → Step 6: Confirm resolution
- On abort → Returns to issue detail with fix attempt logged
- On failure → Retry current step or abort

### Step 6: Confirm resolution

**Page name:** Confirm resolution
**User intent:** Verify the fix resolved the original issue
**Primary action:** Confirm resolved
**Secondary action:** Mark as unresolved (re-opens the issue)

**Content:**
- Fix execution summary (steps completed, duration, any warnings)
- Verification checklist: user confirms the issue is resolved
- Option to add notes or attach evidence
- Feedback: "Was this fix effective?" (thumbs up/down + optional comment)

**States:**
- Default: Verification form displayed
- Success: Issue marked as resolved, redirects to issue detail
- Unresolved: Issue re-opened with fix attempt documented

**Transitions:**
- On "Confirm resolved" → Issue detail page (status: Resolved)
- On "Mark as unresolved" → Issue detail page (status: Open, fix attempt logged)

## Error Handling

| Error scenario | Response |
|---------------|----------|
| Issue not found | "This issue no longer exists or has been resolved. [Return to issues]" |
| Fix catalogue unavailable | "Fix options are temporarily unavailable. [Try again] or [Contact support]" |
| Parameter validation failure | Inline errors on the configuration form, submit blocked |
| Fix execution failure | Stop at the failed step, show error details, offer "Retry" or "Abort" |
| Session timeout during fix | Preserve fix state server-side; user can resume from the monitoring page |
| Permission denied | "You don't have permission to run this fix type. [Request access]" |

## Escalation Paths

- **During fix selection**: "Request custom fix" creates a specialist ticket
- **During execution failure**: "Escalate to engineering" creates a priority incident
- **After resolution failure**: "Re-open and escalate" flags the issue for senior review
- All escalations include the full context of the fix attempt (parameters, logs, duration)

## Success Criteria

- The user successfully selects, configures, runs, and confirms a fix
- The original issue is marked as resolved
- The fix is documented in the issue history for future reference
- Average fix completion time is reduced through standard/automated fix options

## Analytics Events

| Event | Trigger | Properties |
|-------|---------|-----------|
| `fix.started` | User begins the fix journey | `issueId`, `source` (how they entered) |
| `fix.type_selected` | Fix type chosen | `fixType`, `issueId` |
| `fix.configured` | Parameters confirmed | `fixType`, `parameterCount` |
| `fix.executed` | Fix run initiated | `fixType`, `estimatedDuration` |
| `fix.step_completed` | Each fix step finishes | `stepNumber`, `stepName`, `duration` |
| `fix.aborted` | User aborts the fix | `fixType`, `stageAborted`, `reason` |
| `fix.completed` | Fix finishes execution | `fixType`, `totalDuration`, `success` |
| `fix.resolution_confirmed` | User confirms the fix resolved the issue | `fixType`, `issueId`, `effective` |
| `fix.escalated` | User escalates during any step | `stage`, `reason` |
