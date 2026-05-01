# Content Scorecard

## Purpose

The Content Scorecard evaluates the quality of written content in UBS interfaces. It assesses clarity, tone alignment, label quality, and helpfulness of messages. Use it to ensure all user-facing text is clear, benefit-led, and consistent with UBS tone of voice.

## Scoring Scale

| Range | Rating | Meaning |
|-------|--------|---------|
| 1-3 | Poor | Content is confusing, technical, or unhelpful. Users struggle to understand the interface. |
| 4-6 | Acceptable | Content is functional but lacks warmth, specificity, or consistency. |
| 7-8 | Good | Content is clear, direct, and aligned with UBS tone. Minor refinements possible. |
| 9-10 | Excellent | Content is exemplary. Every word earns its place. Users feel guided and confident. |

## Categories

### 1. Clarity of Language (Weight: 20%)

**What it measures:** Whether content is immediately understandable without re-reading or external context.

**Specific checks:**
- Sentences average 15 to 20 words
- No complex or compound sentences where two simple sentences would be clearer
- Technical terms are avoided or explained on first use
- Acronyms are expanded on first use
- Instructions are concrete and actionable
- Passive voice is avoided ("You can filter results" not "Results can be filtered")

**Scoring:**
- 1-3: Content requires specialist knowledge to understand. Dense, technical, or ambiguous.
- 4-6: Generally understandable but some sentences are too long or use unexplained terms.
- 7-8: Clear and accessible to the target audience. Jargon is explained. Sentences are concise.
- 9-10: Every sentence is immediately clear. Language is simple without being simplistic.

**Example:**
- Good: "Select the services you want to monitor. You'll receive alerts when their status changes."
- Needs improvement: "Configure monitoring subscriptions for the selected service entities to enable push-based status change notifications."

### 2. Benefit-led Headings (Weight: 15%)

**What it measures:** Whether headings describe what the user gains or accomplishes rather than labelling system objects.

**Specific checks:**
- Page titles describe the user's task or context
- Section headings explain what the user will find
- Headings use sentence case
- Headings are eight words or fewer where possible
- No system-oriented labels ("Data View", "Input Form", "Module")

**Scoring:**
- 1-3: Headings are system labels with no user context ("Requests Table", "Form Input").
- 4-6: Some headings are user-oriented but others are generic or system-focused.
- 7-8: Headings consistently describe user benefit or context. Sentence case is used throughout.
- 9-10: Every heading helps the user understand where they are and what they can do.

**Example:**
- Good: "Track your open requests"
- Needs improvement: "Request List View"

### 3. Action Label Quality (Weight: 15%)

**What it measures:** Whether buttons and link labels are specific, verb-first, and clearly describe the outcome.

**Specific checks:**
- Labels start with a verb ("Create request", "Download report", "Remove member")
- Labels are specific to the action (not generic "Submit", "Go", "OK")
- Labels match the confirmation message (button says "Remove member", toast says "Member removed")
- Destructive action labels name the destructive verb ("Delete", "Remove", "Cancel")
- Labels are two to four words
- No ambiguous labels ("Click here", "Proceed", "Continue" without context)

**Scoring:**
- 1-3: Labels are generic or ambiguous. Multiple buttons say "Submit" or "OK" on the same page.
- 4-6: Primary actions are labelled well but secondary actions use generic text.
- 7-8: All labels are verb-first and specific. Labels match their confirmation messages.
- 9-10: Labels are concise, precise, and consistent. Users know exactly what will happen before clicking.

**Example:**
- Good: "Export as PDF", "Clear all filters", "Assign to team"
- Needs improvement: "Submit", "Go", "Process", "Execute"

### 4. Error Message Helpfulness (Weight: 15%)

**What it measures:** Whether error messages explain what happened, what to do, and reassure the user.

**Formula:** What happened + What to do next + Reassurance (when appropriate)

**Specific checks:**
- Error messages use plain language, not codes or technical identifiers
- Every error includes a next step (retry, edit, contact support)
- Inline errors explain the specific problem ("Enter a valid email address")
- Form-level summaries link to each field with an error
- Network errors offer retry
- User input is never blamed ("We couldn't save" not "You entered invalid data")
- When data is preserved, the message says so

**Scoring:**
- 1-3: Errors show codes or generic messages ("Error", "Something went wrong", "400 Bad Request").
- 4-6: Errors explain the problem but lack a clear next step or reassurance.
- 7-8: Errors are clear, helpful, and include recovery actions. User input is preserved and acknowledged.
- 9-10: Errors feel human. Users feel guided rather than stuck. Complex failures are explained simply.

**Example:**
- Good: "We couldn't load your requests. Check your connection and try again. Any unsaved changes are safe."
- Needs improvement: "Error loading data. Please try again later."

### 5. Empty State Guidance (Weight: 10%)

**What it measures:** Whether empty states explain, guide, and offer a clear next action.

**Specific checks:**
- Every empty state explains what belongs in this area
- A primary action is provided to create or add the first item
- Filtered or searched empty states suggest broadening the query
- New user empty states offer onboarding guidance
- Empty states use warm, encouraging language
- An icon or illustration adds visual context (optional but encouraged)

**Scoring:**
- 1-3: Empty states show "No data" or nothing at all.
- 4-6: Empty states explain the absence but lack a clear next action.
- 7-8: Empty states explain, suggest, and provide a primary action button.
- 9-10: Empty states feel welcoming. They reduce anxiety and guide the user confidently.

**Example:**
- Good: "No incidents this month. All services have been operating normally. View service history for past incidents."
- Needs improvement: "No records found."

### 6. Consistent Terminology (Weight: 10%)

**What it measures:** Whether the same concept is referred to by the same word throughout the interface.

**Specific checks:**
- Objects are named consistently (always "request", never switching between "request", "ticket", and "item")
- Actions use the same verb for the same operation (always "remove", not sometimes "delete" and sometimes "remove")
- Status labels are consistent (always "In progress", never "Active" for the same meaning)
- Navigation labels match page titles
- Terminology aligns with the UBS design system vocabulary

**Scoring:**
- 1-3: Multiple terms used for the same concept. Users are confused about whether items refer to the same thing.
- 4-6: Mostly consistent but with occasional mismatches between navigation, headings, and body text.
- 7-8: Consistent terminology throughout. Navigation labels match page titles.
- 9-10: Terminology is locked down. A glossary could be derived from the interface and every term would be used once.

### 7. Tone Alignment (Weight: 15%)

**What it measures:** Whether content aligns with UBS tone of voice: clear, convincing, with charm.

**Specific checks:**
- Tone is direct and personal ("you" and "your")
- Content is confident without being cold
- No corporate filler ("We are pleased to inform you that...")
- No over-casual language or slang
- Error states maintain a calm, helpful tone
- Success states are warm but concise
- No exclamation marks in UI copy
- "Please" is used sparingly (once per flow at most)

**Scoring:**
- 1-3: Tone is robotic, overly formal, or inappropriately casual.
- 4-6: Tone is acceptable but inconsistent. Some areas feel corporate, others feel informal.
- 7-8: Tone is consistently clear, direct, and warm. Matches UBS voice guidelines.
- 9-10: Content has personality within professional bounds. Users feel spoken to, not spoken at.

**Example:**
- Good: "Your request has been submitted. The team will review it within 24 hours."
- Needs improvement: "We are pleased to confirm that your request has been successfully submitted to our team for processing."

## Overall Score Calculation

```
Overall = (Clarity × 0.20) + (Headings × 0.15) + (Action Labels × 0.15) +
          (Error Messages × 0.15) + (Empty States × 0.10) +
          (Terminology × 0.10) + (Tone Alignment × 0.15)
```

| Overall | Rating |
|---------|--------|
| 1.0-3.9 | Poor: Content undermines usability. Requires comprehensive rewriting. |
| 4.0-5.9 | Acceptable: Content works but lacks polish and consistency. |
| 6.0-7.9 | Good: Content is clear and well-aligned with UBS tone. Minor edits needed. |
| 8.0-10.0 | Excellent: Content is a strength of the design. Clear, helpful, and human. |

## Recommendations Format

1. **Rewrites needed** (scores 1-3): Specific text that must be rewritten. Include the current text and a suggested replacement.
2. **Improvements** (scores 4-6): Text that works but could be better. Include the specific passage and the suggested change.
3. **Fine-tuning** (scores 7-8): Minor word-level adjustments. Be precise about what to change.
4. **Strong examples** (scores 9-10): Highlight content that exemplifies UBS tone. Use as reference for other areas.
