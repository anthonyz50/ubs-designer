# UBS Standard Component: Progress and Activity

> Source: UBS Frontify Portal, Standard Components (Document 17)
> React (UWR): SpinningWheel

## Overview
When data/process outcomes aren't instant, inform users the system is working (not hanging). Show action is in progress.
Synonyms: Progress bar, Loading, Loading page, Spinning wheel, Empty screen, Spinner

## Indicator Types

### Determinate vs Indeterminate
- **Determinate**: indicates how long operation will take (percentage detectable)
- **Indeterminate**: requests user wait while something finishes (duration unknown)
Both linear and circular can be either.

### Circular Indicators
1. Determinate (shows percentage)
2. Indeterminate (spinning)

### Linear Indicators
1. Determinate (filling bar 0% to 100%)
2. Buffering (partial loading)
3. Two-phase query and determined

Linear rules:
- Always fill 0% to 100%, never decrease
- Represented by bars on edge of header/component
- For multiple sequential operations, represent progress as a whole

## Usage
Use when process suspends interface significantly (loading, saving, data transmission).
Can show generic info ("Loading data. Please wait...") or specific ("Loading client data (2 of 10)").

## Rules
- Display EITHER a refreshing bar OR activity circle, never both
- Show current subprocesses and completion when possible
- For multiple sequential operations, use ONE indicator for overall progress

## Do's and Don'ts
- DON'T: Circular indicator larger than its container component
- DO: Show on solid, light background with enough contrast
- DON'T: Show on coloured background (visibility suffers)

## Related Loading Pattern: Skeleton State
Blank pages progressively populated with content (text, images) as they become available.

## Related Components
- Progress bar (native)
- Upload pattern (native)
- Skeleton state
