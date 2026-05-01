# UBS Feedback Components Overview

> Source: UBS Frontify Portal, Standard Components (Document 17)

## Component Selection Guide

Use the right feedback component for the right context:

| Component | Purpose | Persistence | Clickable? |
|-----------|---------|-------------|------------|
| Alert | Draw attention to pending items | Until resolved | No (click through for details) |
| Empty state | Show when content unavailable | Persistent | Actions available |
| Message box | Inform about action result/process state | Persistent | Buttons only |
| Form validation | Show why input is invalid | Until corrected | No (form element in focus) |
| Snackbar | System status changes | Temporary (auto-dismiss) | No |
| Overlay message | Immediate decisions needed | Until dismissed | Yes (action buttons) |
| Progress/activity | Show ongoing operations | During operation | No |
| Skeleton | Loading placeholder | During load | No |
| Tag | Categorise/label items | Persistent | Optional |

## Severity Levels (shared across Message box, Form validation, Snackbar, Overlay message)
1. **Confirmation** (green) - success
2. **Error** (red) - error occurred
3. **Information** (blue) - informational
4. **Warning** (amber/yellow) - warning

## Key Principles
- Don't overuse feedback components; users will start ignoring them
- Messages should be clear, short, and actionable
- Help users resolve issues, don't just state facts
- Match icon to severity level
- Don't mix sizes or types on the same page
