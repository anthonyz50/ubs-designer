# UBS Standard: Animation Guidelines

> Source: UBS Frontify Portal, Standard Basics (Document 365)

## Purpose
Animation should be used as a FUNCTIONAL element that enhances user experience, NOT for decoration. It needs a purpose and must help the user.

## Why Animation?
- Acknowledging system received user's action (loading spinner, animated charts on load/data change)
- Enhance perception of speed (real-time notifications)
- Help users orient in the interface (accordions expanding to reveal info)

## Types of Animation
1. **Emphasis** - Drawing user's attention to an object already on screen
2. **Coming and going** - How an object appears or disappears from screen
3. **Transitions** - Letting user know a change is taking place

## Speed
- Too fast = jerky/wild, too slow = interrupts flow
- Rule: animation shouldn't delay the time before the user can interact
- Example: if data loading takes 2s, animation shouldn't be more than slightly longer than 2s

## Examples
- **Donut Chart**: animated on first load to show data loading
- **Pie Chart**: animated on load, wedge transitions on click to filter data in connected components
