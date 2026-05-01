# UBS Standard Components: Simple Table

> Source: UBS Frontify Portal, Standard Components (Document 17)

## Usage
Stripped-down Data Tables for small amounts of information in grid-like layout. Cells are NOT interactive (data not editable). Use Data Table for editable data.

**Figma:** DDS-Library (node-id=412-3643)  
**React (UWR):** SimpleTable  
**Related:** Content Block, Data Table

## Anatomy
1. Header cell
2. Value cell
3. Divider
4. Hint text (optional)

## Types
- **First column header** - listing attributes of an object
- **First row header** - development of values over time (left-to-right reading)
- **Both axis header** - complicated information groups

## Sizes

| Size | Text | Cell Padding |
|------|------|-------------|
| Basic | Body-2 | 12px |
| Basic compact | Body-2 | 8px |
| Small | Body-3 | 8px |
| Small compact | Body-3 | 4px |

### Rules
- Place inside Content Block
- DON'T place on Concrete or coloured backgrounds
- Skip top and bottom dividers (no dividers at edges unless separating from other content)
- Use only ONE size within a table; DON'T mix sizes
