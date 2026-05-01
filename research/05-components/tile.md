# UBS Standard Component: Tile

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=412-3644&mode=design
> React (UWR): Tile

## Usage
Container for organising any content into a single information block. Can be single or sets displayed uniformly (widgets, article teasers). Provide context and entry point to more detailed information.
Related: Panel, Overlays

## Anatomy
1. Controls (optional)
2. Container (Boxed or Shadowed)
3. Content
4. Padding

Container uses Content Block component; can be with shadow or border depending on page background colour.

## Types
1. Normal
2. With image
3. With colour
4. With header

### Sizes (based on 8px grid)
1. Tiny (8px padding)
2. Small (16px padding)
3. Medium (24px padding)
4. Large (32px padding)

### Controls
- With checkbox
- With radio button
- With close button

## States
### Static Tile (with button)
1. Default
2. Hover
3. Pressed

### Interactive Tile
1. Default
2. Hover/Pressed
3. Selected

## Rules
- Do NOT combine different tile types for similar context on same page
- Height and spacing between tiles MUST be consistent
- Unless tile wider than 380px, button spans full width
- All elements optional EXCEPT the container
- Use hierarchy within tile to direct attention to most important info

## Do's and Don'ts
- DO: Use same types together
- DON'T: Combine different types
- DO: Keep equal height of tiles
- DON'T: Use different sizes in a list
