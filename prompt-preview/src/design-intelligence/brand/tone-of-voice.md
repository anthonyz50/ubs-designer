# Tone of Voice

## Core Principle

UBS writing is **clear, convincing, and written with charm**. Every word earns its place. We write for people who are busy, knowledgeable, and making decisions. Respect their time by being direct and benefit-led.

## Writing Approach

### Lead with the benefit
Tell the user what they gain before explaining how. The benefit is the headline; the mechanism is the detail.

- ✅ "Track your requests in one place. The dashboard shows every request you've submitted, with real-time status updates."
- ❌ "The dashboard component renders a table of request objects with status fields populated from the API."

### Be personal and direct
Write as though speaking to one person. Use "you" and "your". Use active voice. Address the user, not the system.

- ✅ "You can filter results by date, status, or category."
- ❌ "Results can be filtered using available filter parameters."

### Keep sentences short
Aim for 15 to 20 words per sentence. Break complex ideas into multiple sentences rather than chaining clauses.

- ✅ "Your request has been submitted. You'll receive a confirmation email within five minutes."
- ❌ "Your request has been submitted and you should receive a confirmation email within approximately five minutes of submission."

### Avoid jargon and acronyms
Write in plain language. If a technical term or acronym is necessary, explain it on first use.

- ✅ "Service Level Agreement (SLA): the guaranteed response time for your request."
- ❌ "SLA metrics are tracked per the OLA framework."

## Content Types

### Action labels
Use a verb first. Be specific about what happens. Match the label to the action it triggers.

- ✅ "Clear cache", "Download report", "Add team member"
- ❌ "Submit", "Go", "Click here", "Process"

**Rules for action labels:**
- Start with a verb
- Describe the specific outcome
- Keep to two or three words
- Match the label to the confirmation message (if "Remove member" is the button, the toast says "Member removed")

### Headlines and headings
Use descriptive, benefit-oriented headings. The user should understand the page purpose from the heading alone.

- ✅ "Monitor your active requests"
- ❌ "Request List View"

**Rules for headings:**
- Use sentence case (capitalise only the first word and proper nouns)
- Describe what the user will find or accomplish
- Keep to eight words or fewer where possible

### Error messages
Explain what happened, what to do next, and reassure the user. Follow the formula: **what happened** + **next step** + **reassurance**.

- ✅ "We couldn't save your changes. Check your connection and try again. Your draft is safe."
- ❌ "Save failed. Error code 500."
- ✅ "This email address is already registered. Sign in instead, or use a different email."
- ❌ "Duplicate entry."

**Rules for error messages:**
- Use plain language, not error codes
- Tell the user what to do next
- Reassure them that data is not lost (when true)
- Keep the tone calm and helpful
- Provide an actionable link or button where possible

### Empty states
Explain why the area is empty and suggest the next action. An empty state is a prompt, not a dead end.

- ✅ "No requests yet. Create your first request to start tracking work."
- ❌ "No data."
- ✅ "No results match your filters. Try adjusting your search terms or clearing filters."
- ❌ "0 results."

**Rules for empty states:**
- Explain what belongs here
- Suggest a clear next action
- Include a primary action button when the user can create the first item
- For filtered or searched results, suggest how to broaden the query

### Loading states
Tell the user what is happening. Replace generic spinners with contextual messages.

- ✅ "Loading your dashboard..."
- ❌ "Please wait."
- ✅ "Saving your changes..."
- ❌ "Processing."

**Rules for loading states:**
- Describe the specific action in progress
- Use present participle form ("Loading...", "Saving...", "Generating...")
- For longer processes, provide a progress indicator or time estimate

### Success messages
Confirm what was done and suggest the logical next step.

- ✅ "Request submitted. You'll receive updates at anthony@example.com. View your request."
- ❌ "Success!"
- ✅ "Team member added. They'll receive an invitation email shortly."
- ❌ "Operation completed successfully."

**Rules for success messages:**
- Confirm the completed action in past tense
- Mention any follow-up the user should expect
- Offer a link to the next logical action
- Keep the tone warm but concise

### Confirmation prompts
When asking the user to confirm a consequential action, be specific about what will happen.

- ✅ "Remove Alex from the team? They will lose access to all shared projects."
- ❌ "Are you sure?"

## Capitalisation and Formatting

- **Sentence case** for all headings, labels, and buttons
- **No full stops** on headings, labels, buttons, or toast messages
- **Full stops** on body text, descriptions, and multi-sentence content
- **No exclamation marks** in UI copy (save enthusiasm for marketing)
- **No ampersands** in body copy; write "and" in full
- **Numbers**: use digits for 2 and above; write "one" in words

## Do

- Write for the user, not the system
- Lead with the benefit
- Use "you" and "your"
- Keep sentences short and direct
- Provide clear next steps in every message
- Use verb-first action labels
- Explain acronyms on first use

## Don't

- Use passive voice ("has been submitted by the user")
- Write empty pleasantries ("Welcome to the page!")
- Use technical jargon without explanation
- Write vague error messages ("Something went wrong")
- Use ALL CAPS for emphasis (use bold instead)
- Write multi-clause sentences joined by semicolons
- Use "please" excessively (once per flow is enough)
