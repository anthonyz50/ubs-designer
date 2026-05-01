# UBS Accessibility — Full Specification

> Source: UBS Frontify Portal, Standard Basics > Accessibility

## Standard

**UBS applications must meet WCAG 2.1 accessibility standards level A and AA.**

National guidelines for web accessibility must also be consulted and adhered to (these mostly reference WCAG).

## Minimal Click/Touch Areas

### Click Area (mouse/cursor)
- **Minimum: 24 × 24px**

### Touch Area (finger)
- **Minimum: 40 × 40px** with 8px (1gu) spacing

### Rules
- Bigger areas are better (Fitts' Law: target size affects acquisition time)
- Group similar functions and maintain minimum click area
- Overlapping clickable areas (e.g. tiles): ensure smallest area is bigger than 24×24px
- Provide enough space between clickable elements
- Do not overlap elements on a clickable element unnecessarily

## Testing Tools

### For Designers
- Stark Sketch/Figma Plugin — checks colour contrast ratios

### For Product Owners/Business Analysts
- Contrast Analyser by the Paciello Group (online)

### For Developers
- SONAR Testing framework (internal via goto/devtools)

## WCAG 2.1 Accessibility Checklist

### Perceivable

**Text Alternatives (1.1.1 — Level A):**
- All images, form image buttons, and image map hot spots have appropriate alt text
- Decorative images have null alt text (alt="") or are CSS backgrounds
- Complex images have equivalent alternatives in context or linked page
- Form buttons have descriptive values
- Form inputs have associated text labels
- Embedded multimedia identified via accessible text
- Frames and iframes are appropriately titled

**Time-based Media:**
- Audio-only content has text transcripts (1.2.1 — A)
- Video-only content has text transcript or audio description (1.2.1 — A)
- Non-live video has synchronised captions (1.2.2 — A)
- Non-live video has descriptive transcript OR audio description (1.2.3 — A)
- Live multimedia has synchronised captions (1.2.4 — AA)
- All video content has audio descriptions (1.2.5 — AA)

**Adaptable:**
- Semantic markup for headings, regions, lists, emphasis (1.3.1 — A)
- Tables use proper headers and captions (1.3.1 — A)
- Form labels associated with inputs; fieldset/legend for groups (1.3.1 — A)
- Logical reading and navigation order (1.3.2 — A)
- Instructions don't rely on shape, size, visual location, or sound (1.3.3 — A)
- Orientation not restricted to portrait/landscape (1.3.4 — AA)
- Input fields have appropriate autocomplete attributes (1.3.5 — AA)
- Tables correctly linearised; no empty cells for spacing (AFA — A)
- No character spaces for layout; use CSS (AFA — A)

**Distinguishable:**
- Information not communicated solely by colour (1.4.1 — A)
- Links differentiated by colour must have 3:1 contrast with surrounding text (1.4.1 — A)
- Auto-playing audio (>3s) has a stop button (1.4.2 — A)
- Text contrast ratio minimum 4.5:1 (1.4.3)
- Large text (18pt+, or 14pt bold) contrast minimum 3:1 (1.4.3 — A)
- Page readable and functional at 200% zoom (1.4.4 — AA)
- Browser zoom must work (AFA — AA)
- Use real text, not text in images (1.4.5 — AA)
- No horizontal scrolling at 320px width (1.4.10 — AA)
- Graphical objects and UI components have 3:1 contrast (1.4.11 — AA)
- All interactive states (focus, hover, active) have 3:1 contrast (1.4.11 — AA)
- No loss of content when text spacing is adapted (1.4.12 — AA)
- Hover/focus content can be dismissed, hovered, and persists (1.4.13 — AA)

### Operable

**Keyboard Accessible:**
- All functionality available via keyboard (2.1.1 — A)
- No shortcut key conflicts with browser/screen reader (2.1.1 — A)
- No keyboard focus traps (2.1.2 — A)
- Printable-character shortcuts can be disabled/changed (2.1.4 — A)
- Focus movable to/from every interactive element (AFA — A)
- Non-conventional keyboard controls are documented (AFA — A)

**Enough Time:**
- Time limits can be turned off, adjusted, or extended (2.2.1 — A)
- Auto-updating/moving/flashing content (>5s) can be stopped (2.2.2 — A)
- Auto-update frequency can be controlled (2.2.2 — A)

**Seizures:**
- Nothing flashes more than 3 times/second (max 4 flash series) (2.3.1 — A)

**Navigable:**
- Skip links provided (2.4.1 — A)
- Repeated blocks grouped/labelled with headings (AFA — A)
- Pages have descriptive title tags (2.4.2 — A)
- Logical link/navigation order (2.4.3 — A)
- Link purpose determinable from text or context (2.4.4 — A)
- Same-text links to different locations are distinguishable (2.4.4 — A)
- Search function or sitemap provided (2.4.5 — AA)
- Headings describe content concisely (2.4.6 — AA)
- Descriptive form labels (AFA — AA)
- Visible keyboard focus indicators (2.4.7 — AA)
- Skip links visible on focus (2.4.7 — AA)

**Modalities:**
- Path-based gestures have single-point alternatives (2.5.1 — A)
- Avoid down-event activation; provide abort/undo (2.5.2 — A)
- Accessible names include visible text (2.5.3 — A)
- Motion-triggered functions have standard control alternatives (2.5.4 — A)

### Understandable

**Readable:**
- Correct language declaration on every page (3.1.1 — A)
- Other-language sections marked with lang attribute (3.1.2 — AA)

**Predictable:**
- No context change on focus (3.2.1 — A)
- No automatic context change on setting change without warning (3.2.2 — A)
- Consistent navigation structure (3.2.3 — AA)
- Same-function elements identified consistently (2.2.4 — AA)

**Input Assistance:**
- Input errors clearly described in text (3.3.1 — A)
- Labels/instructions for required inputs (3.3.2 — A)
- Suggested corrections for errors (3.3.3 — AA)
- Legal/financial/test data changes can be reversed/verified/confirmed (3.3.4 — AA)

### Robust

- HTML/XHTML conforms to standards and is error-free (4.1.1 — A)
- Generated/custom content markup supports accessibility (4.1.2 — A)
- Status messages announced to screen readers via ARIA alert/live region (4.1.3 — AA)
