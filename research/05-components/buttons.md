# UBS Standard Component: Buttons

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=463-8525&mode=design
> React (UWR): Button

## Overview

Buttons are a central element of any user interface. Used when a user needs to trigger an immediate action, initiate a new task or process step, or display hidden information.

Two main groups: **Standard buttons** and **Control buttons**.

### Standard Buttons

Used for main actions. Can be different colours depending on emphasis level. Used in sets (Primary, Secondary, Muted).

- **Button** (standard)
- **Split button**
- **Menu button**

### Control Buttons

Used to control appearance of content below or for logically connected actions. Colour limited to secondary (light grey) with rare exception of muted (transparent).

- **Button group**
- **Button select**
- **Drop-down button**

---

## Types

| Type | Description |
|------|-------------|
| Text button | Label text only |
| Icon & text button | Icon always positioned to the left of text |
| Icon button | Icon only, must have alternative text |
| Text & value button | Text with an associated value |

---

## Colours

### Main Colours

| Colour | Hex | RGB |
|--------|-----|-----|
| Red | `#e60000` | 230, 0, 0 |
| Tundora | `#444444` | 68, 68, 68 |
| Gallery (Black 7%) | `#000000` @ 0.07 opacity | 0, 0, 0, 0.07 |

### Trading Colours

| Colour | Hex | RGB |
|--------|-----|-----|
| Trade Red | `#ae0000` | 174, 0, 0 |
| Trade Blue | `#0e7ca4` | 14, 124, 164 |
| Trade Green | `#677d00` | 103, 125, 0 |

---

## Emphasis Levels

### High Emphasis
Draws user attention to the most important action.

- Only the last irreversible action (Submit, Pay, Delete, Accept, Reject) can be coloured red
- Only **ONE** red button per set
- If two actions are both irreversible (e.g. Accept + Reject): one primary (red), the other secondary (light grey)

### Medium Emphasis
Standard choice of actions.

- Tundora (`#444444`) button as the standard primary (Next, Send, Apply)
- The primary button has a guiding role
- Only **ONE** primary button per set

### Secondary Action
The most popular button in applications.

- More than one secondary button is allowed per set
- Used for standard, non-primary choices

### Fallback Action
Opposite to primary.

- Typical labels: Cancel, Close, Back
- Lowest visual emphasis in the button set

### Icon Buttons
- Should be easily recognisable without text
- Can be emphasised with red colour when needed to stand out from surrounding content

---

## States

| # | State | Description |
|---|-------|-------------|
| 1 | Initial | Default resting state |
| 2 | Hover | Mouse cursor over the button |
| 3 | Pressed | Active/click state |
| 4 | Focus | Keyboard-only focus indicator |
| 5 | Disabled | Greyed out, non-interactive |

---

## Behaviour Rules

- Buttons should always be **LEFT-ALIGNED** to page content
- Order: left to right, from primary to fallback action
- Always be concise and precise with button labels
- Icon-only buttons **MUST** have alternative text (HTML `alt` or `aria-label`)

---

## Copy Writing Guidelines

- Always be short and precise so the user knows what the button does
- Use short verbs: "Accept", "Send", "Submit"
- Short confirmations: "OK"
- Avoid ambiguous labels

---

## Do's and Don'ts

### Do's
- ✅ Always only one primary action per button set
- ✅ Order left to right: primary → secondary → fallback
- ✅ Use concise, action-oriented labels
- ✅ Provide alt text for icon-only buttons
- ✅ Left-align buttons to page content

### Don'ts
- ❌ Two primary actions side by side
- ❌ Never right-align buttons
- ❌ More than one red button per set
- ❌ Vague or overly long button labels

---

## Implementation Notes

- React component: `Button` (from UWR library)
- Ensure all interactive states are implemented (hover, pressed, focus, disabled)
- Trading colours are reserved for trading-specific interfaces only
- Button sets should follow the emphasis hierarchy consistently across the application
