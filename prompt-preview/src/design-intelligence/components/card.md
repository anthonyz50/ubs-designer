# Card

## Purpose

Cards are versatile containers that group related content and actions. They create visual separation between distinct items, making interfaces scannable. Use cards for dashboards, list items, summaries, and any context where self-contained content blocks aid comprehension.

## Variants

### Standard card
- White background, Level 1 elevation shadow
- Default for most use cases: content summaries, list items, feature blocks

### Flat card
- White background, 1px Neutral-10 border, no shadow
- Use in dense layouts where shadows create visual noise (e.g., settings panels, dense lists)

### Interactive card
- Standard card with hover and click behaviour
- Entire card is a clickable target that navigates to a detail view
- Hover: subtle shadow increase (Level 1 to Level 2 transition)

### Highlighted card
- Left border accent (4px) in a status or brand colour
- Use to draw attention to specific cards in a list or to indicate status grouping

### KPI card
- Specialised card for key performance indicators on dashboards
- Prominently displays a metric value with label, trend, and optional sparkline

## Props / Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `standard` \| `flat` \| `interactive` \| `highlighted` \| `kpi` | `standard` | Visual style |
| accentColour | string | — | Left border colour for highlighted variant |
| onClick | function | — | Click handler (makes card interactive) |
| href | string | — | Navigation target (makes card a link) |
| padding | `compact` \| `standard` \| `spacious` | `standard` | Internal padding |
| fullHeight | boolean | `false` | Stretches to fill grid row height |

## States

### Default
- White background
- Standard: Level 1 shadow `0 1px 3px rgba(0,0,0,0.12)`
- Flat: 1px Neutral-10 border

### Hover (interactive only)
- Shadow transitions from Level 1 to Level 2
- Subtle scale transform (1.01) optional
- Cursor: pointer
- Transition duration: 200ms ease-out

### Focus (interactive only)
- 2px solid Lagoon `#009BD2` outline with 2px offset
- Applied on `:focus-visible`

### Active (interactive only)
- Shadow returns to Level 1
- Slight inward press effect

### Disabled
- Opacity: 0.5
- Pointer events: none
- Used sparingly; prefer removing the card over disabling it

### Loading
- Skeleton card matching the expected content layout
- Pulsing animation on skeleton blocks
- Card container (borders/shadow) is visible during loading

## Sizing

| Padding | Value | Use case |
|---------|-------|----------|
| Compact | 12px | Dense lists, sidebar items |
| Standard | 20px | General purpose, dashboards |
| Spacious | 24px | Featured content, single-card layouts |

- Cards have no fixed height; they expand to fit content
- In grid layouts, use `fullHeight` to align cards within a row
- Minimum card width: 240px
- Maximum card width: determined by grid column

## Spacing

- Between cards in a grid: 24px gap (horizontal and vertical)
- Between card sections internally: 16px
- Icon/image to content: 16px
- Content to action area: 16px with a divider line (optional)

## Colour Usage

| Element | Colour |
|---------|--------|
| Background | White `#FFFFFF` |
| Border (flat variant) | Neutral-10 `#E5E5E5` |
| Accent border (highlighted) | Status or brand colour, 4px left border |
| Title text | Neutral-90 `#1A1A1A` |
| Body text | Neutral-70 `#4D4D4D` |
| Metadata text | Neutral-50 `#808080` |

## Accessibility

- Interactive cards use `<a>` (navigation) or `<button>` (action) as the base element, or wrap the entire card in a link
- Card title is the accessible name for the interactive area
- For cards with multiple interactive elements (links, buttons inside), avoid making the entire card clickable; instead provide distinct focusable targets
- Images within cards use descriptive `alt` text or `alt=""` if decorative
- Card content follows a logical heading hierarchy (h3 or h4 within cards, depending on page structure)
- Cards in a grid are wrapped in a `<ul>` with `<li>` items for list semantics, or use appropriate `role` attributes

## Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Move focus to the next interactive card or interactive element within |
| `Enter` | Activate the interactive card (navigate or trigger action) |
| `Space` | Activate the interactive card |

## Usage Guidelines

### Card content structure
```
┌────────────────────────────┐
│ [Icon/Image]  (optional)   │
│                            │
│ Title                      │
│ Subtitle / metadata        │
│                            │
│ Body content / description │
│                            │
│ ────────────────────────── │
│ [Action 1]  [Action 2]    │
└────────────────────────────┘
```

1. **Header area**: Icon, image, or status indicator (optional)
2. **Title**: Primary identifier, always present
3. **Metadata**: Date, author, category, status (optional)
4. **Body**: Description or summary text (optional)
5. **Footer**: Action buttons or links (optional, separated by divider)

### Grid layouts
- Desktop: 2-4 cards per row depending on content density
- Tablet: 2 cards per row
- Mobile: 1 card per row (full width)
- Use CSS Grid with `auto-fill` and `minmax(280px, 1fr)` for responsive grids

### KPI card structure
```
┌────────────────────────────┐
│ Metric label               │
│ 42,350          ▲ +12%     │
│ vs last month              │
│ ▁▂▃▅▆▇ (sparkline)        │
└────────────────────────────┘
```

## Do

- Use cards to group related content into scannable blocks
- Maintain consistent card sizes within a grid row
- Use the interactive variant for cards that navigate to detail views
- Include a clear title on every card
- Use skeleton cards during loading states

## Don't

- Nest cards within cards
- Use cards for single-line content (use list items instead)
- Mix card variants within the same grid section
- Overload cards with more than 2 action buttons
- Use cards where a simple table would be more efficient for comparison
