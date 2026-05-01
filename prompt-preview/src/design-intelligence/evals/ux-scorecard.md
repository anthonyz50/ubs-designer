# UX Scorecard

## Purpose

The UX Scorecard provides a structured evaluation framework for assessing the quality of UBS interface designs. Use it to score generated designs, identify areas for improvement, and track quality over time. Each category is scored from 1 to 10, with a weighted average producing the overall score.

## Scoring Scale

| Range | Rating | Meaning |
|-------|--------|---------|
| 1-3 | Poor | Significant issues that block usability or violate UBS standards |
| 4-6 | Acceptable | Functional but with clear opportunities for improvement |
| 7-8 | Good | Meets UBS standards with minor refinements possible |
| 9-10 | Excellent | Exemplary implementation that could serve as a reference |

## Categories

### 1. Clarity (Weight: 15%)

**What it measures:** How easily a user can understand the purpose, content, and available actions on each page.

**Scoring rubric:**
- 1-3: Purpose of the page is unclear. Users cannot determine what to do without external guidance. Labels are ambiguous or missing.
- 4-6: Purpose is understandable but requires effort. Some labels are vague. Information hierarchy is inconsistent.
- 7-8: Purpose is immediately clear. Labels are descriptive and specific. Users can scan and understand the page quickly.
- 9-10: Every element communicates its purpose instantly. Copy is benefit-led. Zero ambiguity in any label, heading, or instruction.

**Specific checks:**
- Page title describes the user's task or context
- Headings are descriptive and benefit-oriented
- Action labels use verb-first, specific wording
- Instructions are concise and jargon-free
- The most important information is visually prominent

**Example:**
- Good: Page titled "Monitor your active requests" with actions like "Create request" and "Export report"
- Needs improvement: Page titled "Requests" with actions like "Submit" and "Go"

### 2. Visual Hierarchy (Weight: 15%)

**What it measures:** How effectively size, weight, colour, and spacing guide the user's eye through the content.

**Scoring rubric:**
- 1-3: No clear hierarchy. Competing elements fight for attention. Layout feels flat or cluttered.
- 4-6: Some hierarchy exists but is inconsistent. Multiple focal points compete. Spacing is uneven.
- 7-8: Clear primary, secondary, and tertiary levels. Consistent spacing. One focal point per view.
- 9-10: Hierarchy is intuitive and effortless. Eye flow follows the intended path naturally. White space is used masterfully.

**Specific checks:**
- Single focal point per view
- Heading levels follow a logical sequence (no skipped levels)
- White space separates content groups effectively
- Colour is used sparingly and purposefully
- Typography weight and size create clear distinctions
- One primary button per view, maximum three button types

**Example:**
- Good: Dashboard with a clear metric summary at top, detail table below, and single primary action
- Needs improvement: Dashboard with three equally prominent sections and two primary-styled buttons

### 3. Accessibility (Weight: 15%)

**What it measures:** Compliance with WCAG 2.2 Level AA and UBS accessibility standards.

**Scoring rubric:**
- 1-3: Critical accessibility failures. Missing labels, insufficient contrast, no keyboard support.
- 4-6: Basic accessibility addressed but gaps remain. Some missing ARIA attributes or inconsistent focus management.
- 7-8: Meets WCAG AA across all criteria. Proper semantic structure, keyboard navigation, and screen reader support.
- 9-10: Exceeds AA requirements. Comprehensive ARIA implementation, excellent focus management, reduced-motion support.

**Specific checks:**
- Colour contrast meets 4.5:1 for standard text, 3:1 for large text
- All interactive elements are keyboard accessible
- Focus order follows visual layout
- Images have appropriate alt text
- Form inputs have visible labels
- Status information uses icon and text, not colour alone
- Touch targets meet 44x44px minimum

**Example:**
- Good: Error state using red icon, "Error" label, and descriptive text
- Needs improvement: Error indicated only by a red border

### 4. Interaction Quality (Weight: 15%)

**What it measures:** Completeness and quality of interactive states, transitions, and feedback patterns.

**Scoring rubric:**
- 1-3: Missing states for common scenarios. No loading, error, or empty states defined. No feedback for user actions.
- 4-6: Core states exist but some are missing or inconsistent. Feedback is sometimes delayed or unclear.
- 7-8: All standard states covered (loading, empty, error, success). Feedback is immediate and contextual.
- 9-10: Every edge case is handled. Transitions are smooth and purposeful. Progressive disclosure is well-implemented.

**Specific checks:**
- Loading states use skeleton screens for initial loads
- Empty states guide the user with a clear next action
- Error states explain what happened and what to do
- Success feedback confirms the completed action
- Destructive actions require confirmation
- Long-running processes show progress and allow cancellation

**Example:**
- Good: Table with skeleton loading, "No results" empty state with filter suggestions, and inline error with retry
- Needs improvement: Table that shows a spinner and displays "Error" on failure

### 5. Content Quality (Weight: 10%)

**What it measures:** Quality of written content including labels, messages, headings, and instructional text.

**Scoring rubric:**
- 1-3: Content is technical, vague, or unhelpful. Error messages show codes. Labels are generic.
- 4-6: Content is functional but could be more user-friendly. Some labels lack specificity.
- 7-8: Content is clear, benefit-led, and consistent. Error messages are helpful. Labels are specific.
- 9-10: Content is exemplary. Every message anticipates user needs. Tone is warm, direct, and confident.

**Specific checks:**
- Headings describe what the user will find or accomplish
- Error messages follow the formula: what happened + what to do + reassurance
- Empty states explain and suggest next actions
- Action labels are verb-first and specific
- No jargon or unexplained acronyms
- Consistent terminology throughout

**Example:**
- Good: "We couldn't save your changes. Check your connection and try again. Your draft is safe."
- Needs improvement: "Save failed. Error 500."

### 6. UBS Style Consistency (Weight: 10%)

**What it measures:** Adherence to UBS visual principles, colour system, typography, and spacing standards.

**Scoring rubric:**
- 1-3: Significant deviations from UBS standards. Wrong colours, incorrect typography, misused brand elements.
- 4-6: Generally follows UBS style but with inconsistencies. Some non-standard colours or spacing.
- 7-8: Consistently follows UBS visual principles. Correct colour usage, typography hierarchy, and spacing grid.
- 9-10: Perfect adherence. UBS Red used only for brand moments. Neutral palette applied correctly. 4px grid respected throughout.

**Specific checks:**
- UBS Red (#E60000) used only for brand moments, never for data or status
- Neutral palette applied correctly for text, borders, and backgrounds
- Status colours match the defined palette
- Typography follows the 16-level hierarchy
- Spacing follows the 4px grid
- Elevation uses the 3-level system
- No gradients, no dark mode elements

**Example:**
- Good: Error alert using #BD000C with error icon, card with Level 1 elevation, 16px gutters
- Needs improvement: Error text in UBS Red, card with custom drop shadow, 15px spacing

### 7. Mobile Behaviour (Weight: 10%)

**What it measures:** How well the design adapts to smaller viewports and touch interaction.

**Scoring rubric:**
- 1-3: No consideration for mobile. Fixed layouts, tiny touch targets, horizontal scroll required.
- 4-6: Basic responsiveness but with compromises. Some elements are too small or overflow.
- 7-8: Clean mobile adaptation. Tables become cards or scroll horizontally. Touch targets are adequate.
- 9-10: Mobile-first thinking. Every element adapts gracefully. Navigation, forms, and tables are optimised for touch.

**Specific checks:**
- Navigation collapses to a mobile pattern below 768px
- Tables convert to card layout or provide horizontal scroll
- Side panels become full-screen overlays
- Multi-column forms stack to single column below 640px
- Touch targets meet 44x44px minimum
- No horizontal scroll on the main content area

**Example:**
- Good: Data table that switches to a card list on mobile with the primary action accessible via swipe or button
- Needs improvement: Data table that requires horizontal scrolling with no column prioritisation

### 8. Code Readiness (Weight: 10%)

**What it measures:** How implementation-ready the design specification is, including component usage, state definitions, and technical detail.

**Scoring rubric:**
- 1-3: Design is a visual concept only. No component specifications, no state definitions, no technical guidance.
- 4-6: Components are identified but states or specifications are incomplete. Some ambiguity for developers.
- 7-8: Clear component specifications with all states defined. Developers can implement without guesswork.
- 9-10: Fully specified with edge cases, responsive behaviour, ARIA attributes, and analytics events documented.

**Specific checks:**
- Components are identified by name from the design system
- All interactive states are specified (default, hover, focus, active, disabled, loading, error)
- Data formats and constraints are defined
- Responsive breakpoints and behaviour are documented
- Accessibility requirements are specified per component
- Analytics events are defined with properties

**Example:**
- Good: Button specified as "primary, label: 'Submit request', loading state: spinner replaces label, disabled until form valid"
- Needs improvement: "Submit button" with no state or behaviour detail

## Overall Score Calculation

The overall score is a weighted average of all eight categories:

```
Overall = (Clarity × 0.15) + (Visual Hierarchy × 0.15) + (Accessibility × 0.15) +
          (Interaction Quality × 0.15) + (Content Quality × 0.10) +
          (UBS Style × 0.10) + (Mobile Behaviour × 0.10) + (Code Readiness × 0.10)
```

| Overall | Rating |
|---------|--------|
| 1.0-3.9 | Poor: Requires significant rework |
| 4.0-5.9 | Acceptable: Functional but needs improvement |
| 6.0-7.9 | Good: Meets standards, minor refinements |
| 8.0-10.0 | Excellent: High quality, ready for implementation |

## Recommendations Format

After scoring, provide recommendations in this structure:

1. **Critical issues** (scores 1-3): Must fix before implementation. List each issue with the specific category and a concrete suggestion.
2. **Improvements** (scores 4-6): Should address before final review. Prioritised by category weight.
3. **Polish** (scores 7-8): Optional refinements for excellence. Specific, actionable suggestions.
4. **Strengths** (scores 9-10): Highlight what works well. Reinforce good practices.

Each recommendation should be specific and actionable:
- ❌ "Improve accessibility"
- ✅ "Add visible labels to the three filter dropdowns. Currently they rely on placeholder text only, which disappears on selection and is not announced by screen readers."
