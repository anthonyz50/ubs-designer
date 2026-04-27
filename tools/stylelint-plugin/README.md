# stylelint-plugin-ubs

Stylelint plugin for enforcing UBS brand CSS rules in real-time during development.

## Installation

```bash
npm install stylelint-plugin-ubs --save-dev
```

## Usage

### Recommended config (quickest setup)

```json
{
  "extends": ["stylelint-plugin-ubs/dist/configs/recommended"]
}
```

### Manual configuration

```json
{
  "plugins": ["stylelint-plugin-ubs"],
  "rules": {
    "ubs/colour-palette": [true, { "allowCustomProperties": true }],
    "ubs/no-text-shadow": true,
    "ubs/no-justify": true,
    "ubs/font-family": [true, { "allowFallbackOnly": false }],
    "ubs/font-weight": true,
    "ubs/min-font-size": [true, { "minimum": "14px" }],
    "ubs/no-gradients": true,
    "ubs/spacing-grid": [true, { "allowZero": true, "allowAuto": true }]
  }
}
```

## Rules

### `ubs/colour-palette`

Disallows any colour value not in the UBS brand palette.

**Checks:** `color`, `background-color`, `border-color`, `outline-color`, `fill`, `stroke`, and other colour-accepting properties.

**Allows:** UBS palette hex values, `transparent`, `inherit`, `currentColor`, `var(--ubs-*)` custom properties.

**Options:**
- `allowCustomProperties` (default: `true`) — allow any `var(--ubs-*)` custom property

### `ubs/no-text-shadow`

Disallows `text-shadow` entirely. UBS brand guidelines prohibit text shadows.

### `ubs/no-justify`

Disallows `text-align: justify` and `text-align: right`. UBS typography rules require left or centre alignment.

### `ubs/font-family`

Enforces that `font-family` includes "Frutiger" (primary) or "Arial" (fallback).

**Options:**
- `allowFallbackOnly` (default: `false`) — set to `true` to allow Arial without Frutiger

### `ubs/font-weight`

Only allows `font-weight` values of 300 (light), 400 (normal), or 700 (bold).

### `ubs/min-font-size`

Warns if `font-size` is below the WCAG minimum readability threshold.

**Options:**
- `minimum` (default: `"14px"`) — configurable minimum size (supports px, pt, rem)

### `ubs/no-gradients`

Disallows `linear-gradient`, `radial-gradient`, and `conic-gradient` in background properties.

### `ubs/spacing-grid`

Warns if margin/padding values don't align to the UBS 4px spacing grid (4, 8, 12, 16, 24, 32, 48, 64, 96).

**Options:**
- `allowZero` (default: `true`) — allow zero values
- `allowAuto` (default: `true`) — allow `auto` values

## Configs

- **`recommended`** — all rules enabled with sensible defaults (errors for critical rules, warnings for guidelines)
- **`strict`** — all rules as errors, no exceptions

## Development

```bash
npm install
npm run build
```

## UBS Brand Colour Palette

| Category | Colours |
|----------|---------|
| Core | `#FFFFFF`, `#E60000`, `#000000` |
| Neutrals | `#CCCABC`, `#B8B3A2`, `#8E8D83`, `#7A7870`, `#5A5D5C`, `#404040` |
| Dark reds | `#BD000C`, `#8A000A`, `#620004` |
| Golds | `#B98E2C`, `#946F29`, `#6C5312` |
| Warm neutrals | `#ECEBE4`, `#F5F0E1` |
| Accent | `#D83B31`, `#FE6F5D`, `#E4A911`, `#6F7A1A`, `#498100`, `#C81219` |
| Grey | `#BEBEBE` |
| Chart | `#AF8626`, `#00759E`, `#879420`, `#4B2D58`, `#9F8865`, `#2E476B`, `#469A6C`, `#AD3E4A`, `#8489BD`, `#0C7EC6`, `#654D16`, `#804C95`, `#45999C`, `#4972AC`, `#CC707A`, `#295B40`, `#545A9C`, `#785E4A`, `#07476F` |
