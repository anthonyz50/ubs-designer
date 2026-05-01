# UBS Colour Guidelines

> Source: UBS Brand Design Platform, Color page

## Primary Colours

A bright white, seamless backdrop sets the stage. White is the defining colour of UBS design, in digital as in print. Black is the main communication colour, and red is used sparingly as an accent.

| Colour | HEX | RGB |
|--------|-----|-----|
| Red | #E60000 | 230, 0, 0 |
| White | #FFFFFF | 255, 255, 255 |
| Black | #000000 | 0, 0, 0 |

### Key Rule: No Gradients

**Solid colours, no gradients under any circumstances.** Always use solid colours. UBS designs do not use gradients (exception: shadows).

---

## Text, Links and Focus

| Role | Colour | HEX | RGB | LESS variable |
|------|--------|-----|-----|---------------|
| Primary text | Neutral90 | #1C1C1C | 28, 28, 28 | `ubs-text-primary` |
| Secondary text | Neutral70 | #5A5D5C | 90, 93, 92 | `ubs-text-secondary` |
| Placeholder text | Neutral70 | #5A5D5C | 90, 93, 92 | `dove-gray-1` |
| Disabled text | Neutral30 | #CCCABC | 204, 202, 188 | `ubs-text-disabled` |
| Focus | Lagoon50 | #0097CC | 0, 151, 204 | `ubs-text-focus` |
| Link text | Red60 | #DA0000 | 218, 0, 0 | `ubs-text-link` |
| White text | Neutral00 | #FFFFFF | 255, 255, 255 | `ubs-text-white` |

---

## Application Backgrounds

Applications use Concrete background; in publishing the background is white.

| Role | Colour | HEX | RGB | LESS variable |
|------|--------|-----|-----|---------------|
| Preferred | Neutral10 | #F9F9F7 | 249, 249, 247 | `ubs-background` |
| Alternative | Neutral00 | #FFFFFF | 255, 255, 255 | `ubs-background-alternate` |

---

## Notifications and Status Tags

### Notification foreground colours

| Status | Colour | HEX | RGB |
|--------|--------|-----|-----|
| Success | Kiwi60 | #6F7A1A | 111, 122, 26 |
| Error | Bordeaux50 | #BD000C | 189, 0, 12 |
| Warning | Amber50 | #E4A911 | 228, 169, 17 |
| Info | Plum70 | #3A5A88 | 58, 90, 136 |

### Status tag background colours

| Status | Colour | HEX | RGB |
|--------|--------|-----|-----|
| Success | Kiwi10 | #F3F6DA | 243, 246, 218 |
| Error | Bordeaux10 | #FFEBEC | 255, 235, 236 |
| Warning | Amber10 | #FDF6E3 | 253, 246, 227 |
| Info | Plum10 | #EFF4FB | 239, 244, 251 |

---

## UI Greys

### Cold Grays (DDS, UDS and MDS)

Used for fills and strokes within components and layouts.

| Name | HEX | RGB |
|------|-----|-----|
| Cod | #1C1C1C | 28, 28, 28 |
| Tundora | #444444 | 68, 68, 68 |
| Carbon | #646464 | 100, 100, 100 |
| Smoke | #919191 | 145, 145, 145 |
| Nobel | #AAAAAA | 170, 170, 170 |
| Stone | #BEBEBE | 190, 190, 190 |
| Silver | #CCCCCC | 204, 204, 204 |
| Alto | #D7D7D7 | 215, 215, 215 |
| Mercury | #E6E6E6 | 230, 230, 230 |
| Gallery | #EEEEEE | 238, 238, 238 |
| Concrete | #F5F5F5 | 245, 245, 245 |
| Alabaster | #FAFAFA | 250, 250, 250 |
| White | #FFFFFF | 255, 255, 255 |

### Warm Grays (TBD — needs testing before applied to design system)

| Name | Neutral level | HEX | RGB |
|------|--------------|-----|-----|
| Cod | Neutral90 | #1C1C1C | 28, 28, 28 |
| Iron | Neutral80 | #404040 | 64, 64, 64 |
| Pebble | Neutral70 | #5A5D5C | 90, 93, 92 |
| Fossil | Neutral60 | #7A7870 | 122, 120, 112 |
| Fog | Neutral50 | #8E8D83 | 142, 141, 131 |
| Silk | Neutral40 | #B8B3A2 | 184, 179, 162 |
| Cloud | Neutral30 | #CCCABC | 204, 202, 188 |
| — | Neutral25 | #E0DFD7 | 224, 223, 215 |
| Ivory | Neutral20 | #F4F3EE | 244, 243, 238 |
| Chalk | Neutral10 | #F9F9F7 | 249, 249, 247 |
| White | Neutral00 | #FFFFFF | 255, 255, 255 |

---

## Highlighting Colours

Usage is intended to be **as limited as possible**.

| Colour | HEX | Use case |
|--------|-----|----------|
| Lagoon | #009BD2 | Keyboard focus colour for interactive elements (e.g. input) |
| Charlotte | #E6F5FB | Background colour (fill) of an input field |
| Daisy | #FFF469 | Highlighting characters returned in a search |

---

## Chart Colours

### Default chart colour set (up to 6 values)

Use the grey sequence. Recommended order works well for colour contrast accessibility.

| Colour | HEX | LESS |
|--------|-----|------|
| Chart Gray3 (Neutral50) | #8E8D83 | `ubs-chart-gray3` |
| Chart Gray4 (Neutral60) | #7A7870 | `ubs-chart-gray4` |
| Chart Gray5 (Neutral70) | #5A5D5C | `ubs-chart-gray5` |
| Chart Gray6 (Neutral80) | #404040 | `ubs-chart-gray6` |
| Chart Gray7 (Neutral90) | #1C1C1C | `ubs-chart-gray7` |
| Chart Accent (Bordeaux50) | #BD000C | `ubs-chart-accent-bordeaux1` |
| Chart Accent (Bronze50) | #AF8626 | `ubs-chart-accent-bronze` |

### Chart value count rules

- **1 value:** Chart Gray3
- **2 values:** Chart Gray3 + Chart Gray5
- **3 values:** Chart Gray3 + Chart Gray5 + Chart Gray7
- **4-5 values:** Sequential use, starting with Chart Gray3

### Extended chart palette (5+ values)

20 colours designed with accessibility in mind. **Implement in the order shown.**

You may skip one colour if it conflicts with other alert/notification colours on the page (skip by 1 shade only, then continue the sequence).

**Minimum 2 pixel gap** around any block of colour for accessibility (e.g. in pie charts).

| # | Colour | HEX | LESS |
|---|--------|-----|------|
| 01 | Bronze50 | #AF8626 | `ubs-chart-extended-01` |
| 02 | Lagoon90 | #00759E | `ubs-chart-extended-02` |
| 03 | Kiwi50 | #879420 | `ubs-chart-extended-03` |
| 04 | Aubergine90 | #4B2D58 | `ubs-chart-extended-04` |
| 05 | Sand50 | #9F8865 | `ubs-chart-extended-05` |
| 06 | Plum90 | #2E476B | `ubs-chart-extended-06` |
| 07 | Sage50 | #469A6C | `ubs-chart-extended-07` |
| 08 | Blush90 | #AD3E4A | `ubs-chart-extended-08` |
| 09 | Lavender50 | #8489BD | `ubs-chart-extended-09` |
| 10 | Lake50 | #0C7EC6 | `ubs-chart-extended-10` |
| 11 | Bronze90 | #654D16 | `ubs-chart-extended-11` |
| 12 | Aubergine50 | #804C95 | `ubs-chart-extended-12` |
| 13 | Mint50 | #45999C | `ubs-chart-extended-13` |
| 14 | Plum50 | #4972AC | `ubs-chart-extended-14` |
| 15 | Blush50 | #CC707A | `ubs-chart-extended-15` |
| 16 | Sage90 | #295B40 | `ubs-chart-extended-16` |
| 17 | Lavender90 | #545A9C | `ubs-chart-extended-17` |
| 18 | Chocolate50 | #785E4A | `ubs-chart-extended-18` |
| 19 | Lake90 | #07476F | `ubs-chart-extended-19` |
| 20 | Bordeaux90 | #620004 | `ubs-chart-extended-20` |

---

## Supporting Colour Families

Usage restricted to chart diagrams or tags. Each family has four shades (30/50/70/90).

Families: Bronze, Chocolate, Sand, Kiwi, Sage, Pine, Mint, Glacier, Lagoon, Lake, Plum, Lavender, Aubergine, Blush

---

## Trading Colours

Regional colour schemes for trading information. **Default scheme should be set based on user's current residency** with an option to switch in profile settings.

### European scheme
| | Colour | HEX | LESS |
|---|--------|-----|------|
| Positive | Lake70 | #095F95 | `ubs-metric-europe-positive` |
| Negative | Bordeaux50 | #BD000C | `ubs-metric-europe-negative` |

### American scheme
| | Colour | HEX | LESS |
|---|--------|-----|------|
| Positive | Kiwi70 | #606917 | `ubs-metric-america-positive` |
| Negative | Bordeaux50 | #BD000C | `ubs-metric-america-negative` |

### Asian scheme (REVERSED)
| | Colour | HEX | LESS |
|---|--------|-----|------|
| Positive | Bordeaux50 | #BD000C | `ubs-metric-asia-positive` |
| Negative | Kiwi70 | #606917 | `ubs-metric-asia-negative` |

---

## Asset Class Colours

| Asset class | Colour | HEX | LESS |
|-------------|--------|-----|------|
| Liquidity | Kiwi70 | #606917 | `ubs-assets-liquidity` |
| Bonds | Lagoon90 | #00759E | `ubs-assets-bonds` |
| Equities | Bordeaux70 | #8A000A | `ubs-assets-equities` |
| Funds | Plum70 | #3A5A88 | `ubs-assets-funds` |
| Real estate | Pine70 | #00686B | `ubs-assets-realestate` |
| Commodities | Bronze50 | #AF8626 | `ubs-assets-commodities` |
| Pro memoria | Sand70 | #816D50 | `ubs-assets-promemoria` |
| Liabilities | Aubergine70 | #633B73 | `ubs-assets-liabilities` |
| Others | Chocolate70 | #5E4A3A | `ubs-assets-others` |

---

## Accessibility

### AA-Level: White text on coloured backgrounds

Contrast ratio at least 4.5:1 for regular text, 3:1 for large text (18pt or bold 14pt+).

Approved backgrounds for white text:
- UBS Red (#DA0000)
- Black (#000000)
- Cod Gray (#1C1C1C)
- Iron / Neutral80 (#404040)
- Pebble / Neutral70 (#5A5D5C)
- Kiwi60 / Success (#6F7A1A)
- Plum70 / Info (#3A5A88)
- Lagoon90 / Chart (#00759E)

### AA-Level: Primary (Cod) and Tertiary (Carbon) text on coloured backgrounds

Approved backgrounds for dark text:
- White (#FFFFFF)
- Chalk / Neutral10 (#F9F9F7)
- Ivory / Neutral20 (#F4F3EE)
- Neutral25 (#E0DFD7)
- Bordeaux10 (#FFEBEC)
- Amber10 (#FDF6E3)
- Kiwi10 (#F3F6DA)
- Plum10 (#EFF4FB)

---

## Dark Mode

**UBS does not endorse or enable dark mode for its applications.**

Reasons:
1. UBS is essentially a light bright brand. Lots of white space is a key part of what makes an app a UBS app.
2. Dark mode is trendy, but the trend is mostly built on hype.
