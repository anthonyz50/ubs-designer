# UBS Standard: Design Better Forms

> Source: UBS Frontify Portal, Standard Basics (Document 365)
> Based on: Andrew Coyle's article (uxdesign.cc)

## Rules

### Layout
- Forms should be ONE COLUMN (multiple columns disrupt vertical momentum)
- Top align labels (higher completion rate than left aligned; translate well on mobile)
- Left aligned labels acceptable for large data-set entry with unfamiliar fields

### Labels & Inputs
- Group labels with their inputs (respect rule of proximity)
- Avoid ALL CAPS (harder to read and scan)
- Resist using placeholder text as labels (prevents checking input vs question)
- Show all selection options if under 6 (don't hide in dropdown)
- Use input selector if over 5 options; add contextual search if over 25

### Validation
- Identify errors inline using Tooltips
- Show user where error occurred with reason
- Only activate inline validation AFTER user fills out a field (validate on blur)
- Exception: validate during typing for passwords, usernames, character counts

### Actions
- Make CTAs descriptive (state the intent)
- Differentiate primary from secondary actions; put primary bottom left
- Use field length as a hint about expected input (phone numbers, zip codes)
- Don't use * for required fields; instead label optional fields with "(optional)"

### Organisation
- Place checkboxes/radios underneath each other for scannability
- Break forms into groups of related information in sensible order
- Ensure meaningful focus order for keyboard-only entry (Tab moves forward, Shift+Tab back)

### Helper Text
- Show basic helper text wherever possible
- For complex helper text, show next to input during focused state

### Philosophy
- Keep it short: never ask for info that can be auto-detected, copied, or deduced
- Make it desirable: be conversational, be human, gradually engage
- Consider social, conversational UI, CRM, SMS, email, voice, OCR, location, biometric alternatives
