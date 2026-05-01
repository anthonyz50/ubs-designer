# Visual Principles

## Core Philosophy

UBS digital design is defined by **clarity, restraint, and confidence**. White space is the primary design element. Every visual choice serves hierarchy, readability, or brand recognition. When in doubt, simplify.

## Colour

### White as the defining colour
White is the foundation of every UBS interface. Use generous white space to create breathing room between content groups, establish hierarchy, and direct attention.

- Page backgrounds are white
- Card backgrounds are white
- Content areas have ample padding and margin
- Dense layouts are broken up with white space, not dividers

### UBS Red
- **UBS Red**: `#E60000`
- Reserved for brand moments only: the UBS logo, brand illustrations, and primary marketing call-to-action elements
- Never use UBS Red for data, numbers, metrics, charts, or status indicators
- Never use UBS Red as a background colour for content areas
- Never use UBS Red for error states (use the dedicated error colour)

### Neutral palette
The neutral palette provides structure and hierarchy. Use these for text, borders, backgrounds, and dividers.

| Token | Hex | Usage |
|-------|-----|-------|
| Neutral-00 | `#FFFFFF` | Page background, card background |
| Neutral-05 | `#F5F5F5` | Secondary background, table striping |
| Neutral-10 | `#E5E5E5` | Borders, dividers |
| Neutral-20 | `#CCCCCC` | Disabled text, placeholder text |
| Neutral-30 | `#B3B3B3` | Tertiary text, subtle icons |
| Neutral-40 | `#999999` | Secondary icons |
| Neutral-50 | `#808080` | Supporting text |
| Neutral-60 | `#666666` | Secondary text |
| Neutral-70 | `#4D4D4D` | Primary body text |
| Neutral-80 | `#333333` | Headings |
| Neutral-90 | `#1A1A1A` | High-emphasis headings, critical text |

### Status colours
Status colours communicate system states. Always pair them with an icon and a text label. Never rely on colour alone.

| Status | Hex | Usage |
|--------|-----|-------|
| Error | `#BD000C` | Errors, failures, destructive actions |
| Warning | `#E4A911` | Warnings, attention needed, approaching limits |
| Success | `#6F7A1A` | Confirmations, completed actions, healthy states |
| Info | `#3A5A88` | Informational messages, tips, neutral highlights |

**Rules for status colours:**
- Use status colours for indicators, badges, icons, and inline alerts
- Do not use status colours for large background fills
- Pair every status colour with an icon and text label
- Ensure all status colour and background combinations meet WCAG AA contrast requirements

### Colour rules
- No dark mode. UBS interfaces use a light theme exclusively.
- No gradients. Use solid, flat colours only.
- No opacity variations for creating colour shades. Use the defined neutral palette tokens.
- Limit accent colours to UBS Red and status colours. Everything else is neutral.

## Typography

### Font family
**Frutiger** is the UBS typeface for all digital products. Load the full family for flexibility across weights.

### Type hierarchy
UBS uses a 16-level digital type hierarchy. Establish clear information hierarchy through size and weight rather than colour or decoration.

| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| Display 1 | 48px | Light (300) | Hero headings, landing pages |
| Display 2 | 40px | Light (300) | Section hero headings |
| Heading 1 | 32px | Light (300) | Page titles |
| Heading 2 | 28px | Light (300) | Major section headings |
| Heading 3 | 24px | Light (300) | Sub-section headings |
| Heading 4 | 20px | Regular (400) | Card titles, group headings |
| Heading 5 | 18px | Regular (400) | Minor headings |
| Heading 6 | 16px | Medium (500) | Label headings, overlines |
| Body Large | 18px | Regular (400) | Lead paragraphs, emphasis body |
| Body | 16px | Regular (400) | Standard body text |
| Body Small | 14px | Regular (400) | Secondary descriptions, captions |
| Caption | 12px | Regular (400) | Timestamps, footnotes, helper text |
| Label Large | 16px | Medium (500) | Primary button labels |
| Label | 14px | Medium (500) | Secondary button labels, tabs |
| Label Small | 12px | Medium (500) | Badges, tags, micro labels |
| Overline | 12px | Medium (500) | Category labels, uppercase section labels |

**Key rules:**
- Headers use Light weight (300) to maintain an open, airy feel
- Body text uses Regular weight (400) for comfortable reading
- Labels and interactive elements use Medium weight (500) for emphasis
- Minimum body text size is 14px; 12px only for captions and supplementary text
- Line height: 1.5 for body text, 1.2 for headings

## Spacing

### 4px grid
All spacing values are multiples of 4px. This creates consistent rhythm across every component and layout.

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Tight internal padding (icon to label) |
| space-2 | 8px | Component internal padding, small gaps |
| space-3 | 12px | Compact component spacing |
| space-4 | 16px | Standard component padding, form field gaps |
| space-5 | 20px | Card internal padding |
| space-6 | 24px | Section padding |
| space-8 | 32px | Between content groups |
| space-10 | 40px | Between major sections |
| space-12 | 48px | Page-level vertical rhythm |
| space-16 | 64px | Large section separation |

### Gutters
- **8px gutters** for compact layouts (data tables, toolbars)
- **16px gutters** for standard layouts (forms, card grids, dashboards)
- **24px gutters** for spacious layouts (landing pages, marketing content)

## Elevation

### 3-level system
UBS uses a restrained elevation model. Shadows are subtle and functional, indicating interactive layering.

| Level | Shadow | Usage |
|-------|--------|-------|
| Level 0 | None | Flat content, inline elements |
| Level 1 | `0 1px 3px rgba(0,0,0,0.08)` | Cards, dropdown menus |
| Level 2 | `0 4px 12px rgba(0,0,0,0.12)` | Modals, popovers, floating panels |
| Level 3 | `0 8px 24px rgba(0,0,0,0.16)` | Overlay panels, toasts, critical dialogs |

**Rules:**
- Use elevation sparingly. Most content sits at Level 0.
- Cards use Level 1 for subtle lift.
- Modals and overlays use Level 2 or Level 3 depending on importance.
- No decorative shadows. Every shadow communicates interactive layering.

## Layout

### Visual hierarchy
Establish hierarchy through size, weight, and colour rather than decoration.

- **Size**: Larger elements draw attention first
- **Weight**: Bolder text commands more focus
- **Colour**: Darker neutrals for primary content, lighter for secondary
- **Position**: Top-left content is scanned first (F-pattern reading)

### Button principles
- **One primary button per view**: the single most important action
- **Maximum three button types per page**: primary, secondary, and tertiary (text)
- Primary buttons use a filled background
- Secondary buttons use an outlined style
- Tertiary buttons use text-only styling
- Destructive buttons use the error colour for the primary action in confirmation dialogs

### Card-based content grouping
- Group related information into cards
- Each card has a clear heading and consistent internal spacing
- Cards sit on a white background with Level 1 elevation
- Card grids use consistent gutter spacing (16px standard)

### Data presentation
- Use clean, well-spaced tables for structured data
- Align numbers to the right, text to the left
- Use consistent column widths within a table
- Zebra striping (Neutral-05) for tables with more than five rows
- Minimise visual noise: avoid heavy borders and unnecessary grid lines
- Use Neutral-10 for subtle row dividers

### Visual noise reduction
- Prefer white space over divider lines
- Remove unnecessary borders and outlines
- Use colour and weight to separate sections, not boxes
- Limit the number of competing visual elements on any single view
- Each page should have a single focal point that guides the user's eye

## Iconography

- Use a consistent icon set throughout the product
- Icons are 24px standard, 16px compact, 32px prominent
- Use Neutral-70 for default icon colour
- Pair icons with text labels for clarity (except universally recognised icons like close, search, menu)
- Status icons use their corresponding status colour

## Do

- Use white space as the primary design tool
- Follow the 4px spacing grid consistently
- Establish clear hierarchy with size, weight, and colour
- Keep layouts clean with minimal visual noise
- Use UBS Red sparingly and only for brand moments
- Pair status colours with icons and text

## Don't

- Use gradients, dark mode, or transparency for colour variations
- Use UBS Red for data, errors, or status indicators
- Create more than three button types on one page
- Add decorative shadows or borders without functional purpose
- Use type sizes below 12px
- Place competing focal points on the same view
