# UBS Standard: Touch Devices

> Source: UBS Frontify Portal, Standard Basics (Document 365)

## Overview
Touch devices have touchscreens for finger/stylus interaction (phones, tablets, touch-enabled laptops).

**Important:** High-Density (HD) app designs are generally NOT suitable for touch devices. Components are too small and too closely packed.

## Best Practices
- Navigation should always be accessible
- Avoid hover states
- Actionable items must be clearly visible and identifiable from static content
- Choose larger component sizes to increase accuracy
- Use appropriate components: toggles and segmented controls instead of checkboxes/radio buttons
- All designs must be fully tested on intended displays, devices, and inputs
- Text must not be less than 8px high
- Every touch interaction should give feedback

## Touch Areas

### Recommended Sizes
- **Default:** 44×44px with 8px spacing
- **Minimum:** 36×36px with 4px spacing

### Exclusion Zones
- Use significant space between touch areas depending on action importance
- Catastrophic actions: larger spacing
- Infrequent actions: smaller spacing acceptable (but increase spacing if reducing visible area)
- Small visible areas: more cognitive effort but fewer accidental errors
- Large visible areas: easier to touch but higher accidental error risk without increased spacing

## Gestures
| Gesture | Action | Result |
|---------|--------|--------|
| Tap | Tap once | Opens/launches item |
| Double tap | Tap twice quickly | Zooms in/out in stages |
| Tap and hold | Tap and hold finger | Opens context menu (like right-click) |
| Pan | Finger on screen, move around | Moves through screens/menus at controlled rate |
| Flick | Quick swipe | Scrolls rapidly through menus/pages |
| Pinch | Pinch/spread thumb and forefinger | Zoom gradually in/out |
