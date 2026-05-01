# UBS Standard: Responsive Design

> Source: UBS Frontify Portal, Standard Basics (Document 365)

## Overview
Responsive design makes web pages adjust to screen size, platform, and orientation. Usually same content on every device, only layout changes based on browser width. Sometimes need to change page structure, remove or add elements for specific sizes.

## Layout Patterns
- **Fixed width** (fluid layout up to max width)
- **Left aligned** (height fills viewport)

## Best Practices
- First decide if responsive is truly needed (check current screen sizes used)
- Consider at least THREE major breakpoints (trigger layout transition)
- Consider less functionality on smaller devices
- Consider device-specific functionality (e.g. location services on mobile)
- Consider native mobile components taking screen space (soft keyboard, dropdown picker)
- Prioritise content (easy to cut for smaller screens); consider mobile from the beginning
- Test on devices with different sizes (mobile, tablet, desktop)

## Breakpoints
- Points where content triggers layout transition for best information consumption
- Number of breakpoints depends on content and expected usage behaviour
- Each breakpoint generates effort in design, development, and testing
- Layout grid differs depending on breakpoint range
