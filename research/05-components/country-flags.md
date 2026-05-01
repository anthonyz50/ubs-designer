# UBS Standard Components: Country Flags

> Source: UBS Frontify Portal, Standard Components (Document 17)

## Usage
Graphical element representing a country. Recommended as circle (aligns with Avatar component).

## Types
- **Circular flags** (RECOMMENDED) - aligns with avatar component
- **Rectangular flags** - for sizes below 32px or when circular not possible

### Circular Flags
- Minimum size: 32px (below that, flags are difficult to read)
- Main form of presentation; use whenever possible

### Rectangular Flags
- Can be used at any size
- Recommended when flag size below 32px
- Countries with exceptional shapes (Swiss, Nepal) contained within rectangle boundaries

## Naming Convention
ISO 2-letter country code + country name:
- `GB-United-Kingdom`, `CH-Switzerland`, `US-United-States-of-America`
- Special: `EU-Europe`, `LGBT`, `World`, `Empty_Currency`

## Implementation
- Use size-optimised flags for lists
- Use vector flags whenever possible
- Flag lists are bandwidth-intensive (250 images x 50KB = 12MB)

### Rules
- DON'T use circular below 32px
- DON'T stretch or change ratio
- Keep proportions correct

## Available Formats
- Circular SVGs (downloadable set)
- Rectangular SVGs (downloadable set)
- Full set: ~260 flags including territories and special entries
