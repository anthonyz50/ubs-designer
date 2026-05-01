# UBS Standard Component: Message Box

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=1430-16186&mode=design
> React (UWR): MessageBox

## Usage
Provides information to users as result of action or current process state. May or may not allow user action. For multiple messages, combine them or show one after another.
Synonyms: Error, Confirmation, Information, Warning, Notification
Related: Form validation, Snackbar, Overlay message

## Anatomy
1. Icon (predefined by severity)
2. Message title
3. Message description (optional)
4. Button set (optional)

## Types (4 severity levels)
1. **Confirmation** - success feedback
2. **Error** - error notification
3. **Information** - informational message
4. **Warning** - warning notification

### Highlighted Option
When message box needs to stand out more, apply border highlighting.

### Inverse Option
On darker backgrounds (e.g. Concrete), use white background box.

### Sizes
- **Normal size** - range from minimal title to informative message with calls-to-action
- **Small size** - same layout options, used in limited space

## Behaviour
Displayed at top of context when taking up significant space. For small contexts (e.g. form element), use minimal Message box below element.

## Rules
- Message should be clear and convey the essence
- Message box itself is NOT clickable; only buttons trigger actions
- Icon must match message severity
- Don't mix message box sizes on one page

## Do's and Don'ts
- DO: Clear message conveying the essence
- DO: Help resolve the issue
- DON'T: Overload with too much information
- DON'T: Just state a fact (provide actionable guidance)
