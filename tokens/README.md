# UBS Design System — Design Tokens

**Version:** 1.0.0
**Source:** [UBS Brand Design Portal (Frontify)](https://ubs.frontify.com/)
**Generated:** 2026-03-30

## What Are Design Tokens?

Design tokens are the single source of truth for every visual decision in the UBS brand. Instead of looking up hex codes, font sizes, or spacing values in a PDF, every tool, component, and template can pull directly from these files.

## File Structure

```
tokens/
├── index.json              # Master index with summary stats
├── colors.json             # All 36+ colours with HEX, RGB, CMYK, PMS, RAL, NCS
├── typography.json         # Font families, weights, hierarchy (16 levels), non-Latin
├── layout.json             # Margins, impulse specs, logo sizes, grid, moving frame
├── accessibility.json      # WCAG 2.2 AA: contrast ratios, min sizes, chart gaps
├── icons.json              # Illustrative & web app icon specs
├── illustrations.json      # Drawing style, colour layering, animation rules
├── sound.json              # Sound logo, 6 adaptations, loudness standards
├── data-visualization.json # Chart rules, colour sequences, motion specs
├── pattern.json            # Key symbol pattern: ratios, colour combos, materials
├── tone-of-voice.json      # Clear, convincing, with charm + messaging rules
├── social-media.json       # Platform specs, logo placement, colour directions
├── ubs-tokens.css          # Ready-to-use CSS custom properties
└── ubs-tokens.scss         # SCSS variables, maps, and mixins
```

## Quick Start

### CSS
```html
<link rel="stylesheet" href="tokens/ubs-tokens.css">
```
```css
.button-primary {
  background-color: var(--ubs-color-red);
  color: var(--ubs-color-white);
  font-family: var(--ubs-font-family);
  font-size: var(--ubs-font-size-web-body);
}
```

### SCSS
```scss
@import 'tokens/ubs-tokens';

.impulse-text {
  @include ubs-impulse(A4);
  font-family: $ubs-font-family;
}

.chart-segment {
  @include ubs-chart-gap(screen);
}
```

### JavaScript / JSON
```js
import colors from './tokens/colors.json';

const ubsRed = colors.color.corporate.red.$value; // #E60000
const gray3 = colors.color.secondary.gray.iii.$value; // #8E8D83
```

## Colour Summary

| Category | Count | Description |
|----------|-------|-------------|
| Corporate | 3 | White, UBS Red, Black |
| Grays | 6 | I through VI |
| Bordeaux | 3 | I through III |
| Bronze | 3 | I through III |
| Pastels | 2 | I and II |
| Dark Mode | 2 | Primary Red, Secondary Red |
| Chart | 20 | Complex visualisation sequence |
| RAG | 3 | Red, Amber, Green status |
| Trading | 2 | Green, Red (meaning flips in APAC) |
| Metallic | 1 | Silver only |
| **Total** | **~45** | |

## Key Rules Encoded

- **No red highlighting in messages** (accessibility change)
- **No red for numbers** in typography
- **No justification, no right-alignment, no shadow on text**
- **Keyline must be ≥2x the infoline size**
- **Dark Mode uses different reds** (#D83B31 primary, #FE6F5D secondary)
- **Trading colours reverse in APAC** (red = positive, green = negative)
- **Charts always 2D**, donut preferred over pie
- **Impulse on Gray/Bordeaux/Bronze**: only allowed on Pastel I or Pastel II backgrounds
- **WCAG 2.2 AA**: 4.5:1 text contrast, 3:1 large text and graphics
- **Sound logos are finalised assets**: never modify

## Next Steps

These tokens feed into:
1. **Component Library** — React/web components enforcing brand rules
2. **Validation Tools** — Automated checking of designs against these tokens
3. **Template Generator** — Auto-generate branded layouts from specs
4. **AI Design Assistant** — Natural language to brand-compliant output
