# UBS Standard Component: Skeleton

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=1430-20062&mode=design
> React (UWR): Skeleton

## Usage
Reveals loading UI elements one after another or together until all components load. Lo-fidelity elements imitate final layout. Creates illusion of shorter load time.
Synonyms: Ghost loading

Use when data may have tangible delay (data amount, server lag, etc.). Creates perception of faster loading, minimising user frustration.

## Elements
- **Static content** - real content loaded quickly (unchanging)
- **Dynamic content** - changing content represented by placeholders

Show static elements immediately.

## Construction

### Basic Shapes
- Draw rectangles (or circles) filled with @Gallery (#EEEEEE / RGB 238, 238, 238)
- Add 2px border radius
- Rectangle height = pixel font size

### Vertical Space
- Space between rectangles = line-height minus pixel font size
- Example: Body-1 → 24px - 16px = 8px vertical space
- Make last rectangle 3/4 length to mimic text paragraph

### Images, Charts, etc.
- Use simple rectangles or circles

## Animation
Running light effect across skeleton shapes.

## Good Practices
- If hard to predict item count, limit skeleton to THREE items
- Skeleton doesn't need to reflect layout 1:1; simplify if beneficial for aesthetics

## Do's and Don'ts
- DO: Keep skeleton state simple
- DON'T: Try to recreate every single design element as shapes
