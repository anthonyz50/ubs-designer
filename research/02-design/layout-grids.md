# UBS Layout Grids — Full Specification

> Source: UBS Frontify Portal, Standard Basics > Page Layout > Layout Grids

## Purpose

A layout grid helps align screen elements using a column-based structure. It ensures a cohesive experience across different screens that are clean and clearly organised.

Layout grids differ depending on the breakpoint range. Before deciding how many breakpoints your application supports, read the responsive design guide.

## Breakpoints

Breakpoints are the point at which the layout significantly changes to provide the best possible user experience for the user's device.

Common breakpoints: 1024px or 1280px.

### Recommended Design Widths

- **Mobile/tablet apps:** Design for 375px, 768px, and 1024px
- **Internal desktop apps:** Design for 1920px and 1440px

## Layout Sizes

| Grid Size | Device | Breakpoint Range (dp) | Grid Width | Columns | Margin | Gutter |
|-----------|--------|----------------------|------------|---------|--------|--------|
| Extra Small (XS) | Small handset | 320 – 599 | 320 | 12 | 16 | 16 |
| Small (S) | Tablet portrait, large handset | 600 – 1023 | 600 | 12 | 24 | 24 |
| Medium (M) | Medium desktop, tablet landscape | 1024 – 1279 | 1024 | 12 | 24 | 32 |
| **Large (L) Default** | **Desktop** | **1280 – 1439** | **1280** | **12** | **48** | **40** |
| Extra Large (XL) | Wide desktop | 1440+ | 1440 | 12 | 48 | 48 |

**Rules:**
- All sizes use a 12-column grid
- Do NOT set a different layout grid between different pages (avoids jumping layout width, especially for top navigation)
- Large (L) 1280px is the **default** design target

## Content Grid

The content grid is **fluid** at any breakpoint and used to align content elements (forms, tiles, text blocks, images) within a parent element.

Key properties:
- Can be **nested** within other content grids
- Each nested grid can have its own specific gutter
- Useful for complex forms or tile arrangements
- In tiles, the same content grid is repeated within each tile

### Hierarchy

1. **Page bounding box** — outermost container
2. **Layout grid** — contained inside the page bounding box (only ONE layout grid per page)
3. **Content grid** — used to align content within sections (e.g. four columns inside main content)
4. **Nested content grid** — can be nested inside other content grids
