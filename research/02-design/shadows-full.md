# UBS Shadows — Full Specification

> Source: UBS Frontify Portal, Standard Basics > Design Basics & Brand > Shadows

## Purpose

Shadows help users understand how to use an interface by providing visual cues about objects' depth. They give a sense that a component is elevated from the rest of the page and focus users on the specific task that component represents.

Synonyms: Layers, Drop shadows, Elevation

## Three-Level Shadow System

A component's elevation determines the appearance of its shadow.

### Level 1 — Low Priority
- Used for lower-priority components
- Information elements, elements displayed on hover
- **Examples:** Tooltips, sticky navigation

### Level 2 — Standard
- Standard shadow for components
- Medium-size components that partially cover the screen
- **Examples:** Menu lists, dropdown lists, combo box lists

### Level 3 — High Priority
- Used to extract content of major priority
- Component is especially visible and distinguished from surroundings
- Large-size components
- **Examples:** Expansion panels, overlays, date picker overlay, navigation mega drop-downs, floating action button

## Rules

1. Components maintain consistent resting elevations across apps
2. Components on the same level must not overlap (interference). To prevent this, a component can move to a different elevation or be hidden before causing interference
3. On the layout level, design applications to minimise opportunities for interference

## Usage

Use shadows when you need a user to focus on a specific task or piece of information, away from the rest of the page.

### Do's and Don'ts

**Do:**
- Use shadows to help the user focus on the component they need to focus on
- Apply consistent elevation on user input (interaction with expanded panel rises elevation)

**Don't:**
- Use shadows for decorative purposes

## Related Components

- Overlays
- Expanded panel (Accordion)
- Tooltips
- Alerts
- Snack bar (Notifications)
- Drop-downs
- Combo box

## CSS Values

> ⚠️ **Note:** The exact CSS `box-shadow` values are embedded in images on the Frontify portal and could not be extracted as text. The values below are from the project's existing token files and need verification against the official spec images.

| Level | CSS box-shadow (estimated) |
|-------|---------------------------|
| Level 1 | 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08) |
| Level 2 | 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08) |
| Level 3 | 0 12px 24px rgba(0,0,0,0.16), 0 6px 12px rgba(0,0,0,0.12) |
