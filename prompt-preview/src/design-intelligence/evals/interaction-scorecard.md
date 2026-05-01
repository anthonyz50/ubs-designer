# Interaction Scorecard

## Purpose

The Interaction Scorecard evaluates the quality of interactive behaviour in UBS interfaces. It assesses state coverage, feedback timing, error recovery, and navigation clarity. Use it to ensure every user action receives an appropriate response and every edge case is handled gracefully.

## Scoring Scale

| Range | Rating | Meaning |
|-------|--------|---------|
| 1-3 | Poor | Missing or broken interactions. Users encounter dead ends or unexplained behaviour. |
| 4-6 | Acceptable | Core interactions work but edge cases are unhandled. Feedback is inconsistent. |
| 7-8 | Good | Comprehensive state coverage. Feedback is timely and contextual. |
| 9-10 | Excellent | Every interaction is polished. Edge cases are anticipated. Experience feels seamless. |

## Categories

### 1. State Coverage (Weight: 25%)

**What it measures:** Whether all necessary states are defined for every interactive component and page.

**Required states for every data-driven view:**
- **Loading**: Skeleton screen for initial load, spinner for refreshes
- **Empty**: Explanation of what belongs here plus a suggested next action
- **Error**: What went wrong, what to do, and a retry option
- **Success**: Confirmation of the completed action with a suggested next step
- **Partial**: Handling for when some data loads and some fails

**Specific checks:**
- Every page defines a loading state
- Every list or table defines an empty state
- Every form defines validation error states (inline and summary)
- Every submission defines success and failure states
- Skeleton screens match the layout of the incoming content
- Empty states include a primary action for creating the first item

**Scoring:**
- 1-3: Two or more standard states are missing. Users see blank screens or unhandled errors.
- 4-6: Core states exist but some views lack empty or error states. Skeleton screens are missing.
- 7-8: All standard states are defined. Skeleton screens match layout. Empty states guide users.
- 9-10: Every conceivable state is handled, including partial loads, timeout recovery, and session expiry.

### 2. Transition Smoothness (Weight: 15%)

**What it measures:** How cleanly the interface moves between states and pages.

**Specific checks:**
- Page transitions do not cause layout shift
- Loading to content transitions are smooth (skeleton morphs into content)
- Modal enter and exit animations follow UBS motion guidelines (200-250ms)
- List item additions and removals are animated naturally
- State changes within a component (e.g., button default to loading) are immediate and visible
- No flicker between states (e.g., briefly showing empty state before content loads)

**Scoring:**
- 1-3: Jarring transitions. Layout shifts when content loads. States flash briefly before settling.
- 4-6: Most transitions are acceptable but some cause layout shift or flicker.
- 7-8: Smooth transitions throughout. No layout shift. State changes are clean.
- 9-10: Transitions feel polished and intentional. Motion communicates relationships between states.

### 3. Feedback Timing (Weight: 20%)

**What it measures:** Whether user actions receive immediate, appropriate feedback.

**Timing standards:**
| Action | Expected feedback | Maximum delay |
|--------|------------------|---------------|
| Button click | Visual press state | Immediate (under 100ms) |
| Form field validation | Inline error or success | On blur |
| Form submission | Loading indicator or success | Within 1 second |
| Data save | Confirmation toast | Within 2 seconds |
| Search input | Results update | 300ms debounce, then immediate |
| Long process | Progress indicator | Show within 200ms if incomplete |

**Specific checks:**
- Every button shows a visual response on click (press state or loading spinner)
- Form validation appears on blur, not on every keystroke
- Saving actions show a confirmation within 2 seconds
- Long-running processes display a progress indicator with status text
- Processes longer than 5 seconds include a time estimate
- Processes longer than 10 seconds offer a cancellation option

**Scoring:**
- 1-3: Actions produce no visible feedback. Users click repeatedly because nothing appears to happen.
- 4-6: Primary actions have feedback but secondary actions are silent. Timing is inconsistent.
- 7-8: All actions produce timely feedback. Users always know the system is responding.
- 9-10: Feedback is immediate, contextual, and informative. Long processes communicate progress clearly.

### 4. Error Recovery (Weight: 20%)

**What it measures:** How well the interface helps users recover from errors and return to a productive state.

**Specific checks:**
- Every error message includes a clear recovery action (retry, edit, go back)
- Form errors do not clear user input (preserve what was entered)
- Network errors offer a retry button
- Session timeout saves drafts and offers resumption
- Navigation errors (404, broken links) provide a path back
- Failed submissions preserve the full form state
- Multi-step processes allow backwards navigation without data loss
- Partial failures explain what succeeded and what failed

**Scoring:**
- 1-3: Errors are dead ends. User input is lost. No retry options are available.
- 4-6: Retry is available for some errors but data preservation is inconsistent.
- 7-8: All errors offer recovery. User input is preserved. Retry is always available.
- 9-10: Error recovery is seamless. Drafts are auto-saved. Users never lose meaningful work.

### 5. Progressive Disclosure (Weight: 10%)

**What it measures:** Whether information is revealed at the right time, in the right amount.

**Specific checks:**
- Dashboards show summary metrics first, detail is one click deeper
- Forms collapse advanced options by default
- Tables show key columns, with full details available on row expansion or navigation
- Error messages show the problem briefly, with "Learn more" linking to detail
- Tooltips provide supplementary information without cluttering the interface
- Expandable sections remember their state within a session

**Scoring:**
- 1-3: Everything is shown at once. Pages are overwhelming. No information hierarchy.
- 4-6: Some progressive disclosure but inconsistent. Some sections are too dense, others too sparse.
- 7-8: Information is layered effectively. Users see what they need when they need it.
- 9-10: Disclosure is intuitive. Advanced users can access depth quickly. New users are not overwhelmed.

### 6. Confirmation Patterns (Weight: 10%)

**What it measures:** Whether destructive or consequential actions are properly guarded.

**Actions that require confirmation:**
- Deleting data that cannot be recovered
- Submitting requests that trigger workflows
- Actions that affect other users
- Bulk operations on more than five items

**Actions that should not require confirmation:**
- Saving changes
- Navigating away from unchanged content
- Toggling reversible settings
- Single-item non-destructive actions

**Specific checks:**
- Destructive actions show a confirmation dialog with specific consequences
- Confirmation dialogs use the action verb as the primary button label (e.g., "Remove", not "OK")
- Confirmation dialogs include a "Cancel" option
- Non-destructive actions proceed without unnecessary confirmation
- Bulk operations show the count of affected items in the confirmation

**Scoring:**
- 1-3: Destructive actions have no confirmation. Or, non-destructive actions are over-confirmed.
- 4-6: Most destructive actions are confirmed but dialog content is vague ("Are you sure?").
- 7-8: Correct actions are confirmed with specific, helpful dialog content.
- 9-10: Confirmation patterns are consistent and contextual. Dialogs clearly state consequences.

## Overall Score Calculation

```
Overall = (State Coverage × 0.25) + (Transition Smoothness × 0.15) +
          (Feedback Timing × 0.20) + (Error Recovery × 0.20) +
          (Progressive Disclosure × 0.10) + (Confirmation Patterns × 0.10)
```

| Overall | Rating |
|---------|--------|
| 1.0-3.9 | Poor: Users will encounter significant friction and dead ends. |
| 4.0-5.9 | Acceptable: Core flows work but edge cases cause frustration. |
| 6.0-7.9 | Good: Interactions are solid with minor opportunities for polish. |
| 8.0-10.0 | Excellent: Interactions are comprehensive, responsive, and user-friendly. |

## Recommendations Format

1. **Critical gaps** (scores 1-3): Missing states or interactions that block users. Specify the page, component, and missing state.
2. **Improvements** (scores 4-6): Incomplete interactions that cause friction. Include the specific scenario and suggested fix.
3. **Polish** (scores 7-8): Refinements for a smoother experience. Actionable and specific.
4. **Strengths** (scores 9-10): Effective interaction patterns to replicate across the product.
