# UBS Standard Component: Overlay

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=1168-11099&mode=design
> React (UWR): Overlay

## Usage

Inform users about a specific task. May contain critical information or require decisions. The key advantage is that the user remains on the same page.

**Use sparingly** as overlays shift user focus and interrupt the current workflow.

---

## Anatomy

| # | Element | Required |
|---|---------|----------|
| 1 | Overlay title | Yes |
| 2 | Additional buttons | Optional |
| 3 | Closing button | Yes |
| 4 | Content placeholder | Yes |
| 5 | Actionbar | Optional |

---

## Sizes

| Size | Use Case |
|------|----------|
| **Tiny** | Simple confirmations, brief messages |
| **Small** | Short forms, simple decisions |
| **Standard** | Most overlay use cases |
| **Fullscreen** | Complex content requiring maximum space |

> **Note:** Placement section is TBD (work in progress in the UBS design system).

---

## Behaviour Rules

- Displayed on top, relative to the active browser window
- As a modal layer, prevents the user from working in the current browser window
- Must use a short, descriptive verb as the overlay name/title
- Closes immediately after the required action is submitted
- Content must not repeat the overlay title
- Background content should be visually dimmed/blocked

---

## Do's and Don'ts

### Do's
- ✅ Keep overlays pinned to the top of the browser window
- ✅ Follow standard overrides for styling and behaviour
- ✅ Use short, descriptive titles
- ✅ Close the overlay immediately after action completion
- ✅ Use sparingly to avoid interrupting user flow

### Don'ts
- ❌ Change overlay position after opening
- ❌ Change the colour of the "Close" button
- ❌ Repeat the overlay title in the content area
- ❌ Overuse overlays for non-critical information
- ❌ Allow interaction with background content while overlay is open

---

## Implementation Notes

- React component: `Overlay` (from UWR library)
- Ensure proper focus trapping within the overlay for accessibility
- Background scroll should be locked when overlay is active
- Keyboard users must be able to close the overlay (Escape key)
- Screen readers should announce the overlay title when it opens
