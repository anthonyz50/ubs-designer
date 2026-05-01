# UBS Standard Component: Snackbar

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=1430-20060&mode=design
> React (UWR): Snackbar

## Usage
Alert user about system activities or inform about change in system status. Appears temporarily and disappears automatically. For immediate decisions, use Overlay notification instead.
Synonyms: Toast, Notification
Related: Message box, Form validation, Overlay message

## Anatomy
1. Coloured box indicating severity
2. Icon matching severity
3. Message

## Types (4 severity levels)
1. Confirmation
2. Error
3. Information
4. Warning

## Behaviour
- Appears in CENTRE, connected to TOP edge of browser page
- Appears temporarily, disappears automatically
- Timer must give user enough time to read message 3 TIMES

## Rules
- Message should be short, clear, and convey the essence
- Snackbar itself is NOT clickable
- Don't stack Snackbars; use Overlay message with combined content instead

## Do's and Don'ts
- DO: Keep message short, clear, essential
- DO: Use the right component for the context
- DON'T: Overload with content
- DON'T: Misuse (e.g. for persistent information)
