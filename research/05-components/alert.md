# UBS Standard Component: Alert

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=239-7495&mode=design
> React (UWR): Alert

## Usage

Alerts inform the user that something awaits their attention. Best used **infrequently** for important things only.

Alerts tell users something needs attention but don't give details. The user must click or hover for more information.

**Related:** Tags, Notifications
**Synonyms:** Pending items, Attention required, Alarm, Unread

---

## Types

### 1. Standard (Numerical) Alert
Shows a number (up to 3 digits) of items waiting for attention.

### 2. Small Alert
Used where there is no space for a full icon or numerical alert. A compact indicator dot.

### 3. Alert with Icon
Bell icon used when the exact number of items is unknown.

### 4. Alert Button
Emphasises critical actions that are revealed by clicking.

**Alert Button States:**
1. Alert button (initial)
2. Alert button selected (expanded)
3. Critical action (revealed action)

---

## Behaviour Rules

- Use to draw attention to something outside the user's immediate task
- Numerical alert indicates the number of items to process or read
- Once the user deals with all items, the alert disappears
- **Only use RED colour** for alerts. If red doesn't suit the context, use **Tags** instead
- Don't overuse alerts. Reserve them for genuinely important notifications
- Don't use for technical operations not requiring user action (e.g. syncing, background processing)

---

## Do's and Don'ts

### Do's
- ✅ On action, change the state of the element itself (e.g. reduce count, remove alert)
- ✅ Use only one type of alert per component/area
- ✅ Reserve alerts for items genuinely requiring user attention
- ✅ Alert should disappear once all items are addressed

### Don'ts
- ❌ Change the colour of the alert (always red)
- ❌ Combine numerical and icon alerts in the same location
- ❌ Use alerts for background processes or non-user-actionable events
- ❌ Overuse alerts across the interface

---

## Colour Rule

Alerts are exclusively red. This is a strict rule in the UBS design system:

- If the red alert colour conflicts with your design context, **do not change the alert colour**
- Instead, switch to using **Tags** which offer more colour flexibility
- This ensures alerts maintain a consistent, high-urgency visual language across all UBS applications

---

## Implementation Notes

- React component: `Alert` (from UWR library)
- Numerical alerts support up to 3 digits (999 max display)
- Ensure alerts are accessible to screen readers (announce count changes)
- Alert buttons should clearly communicate the action that will be revealed
- Consider using ARIA live regions for dynamic alert count updates
