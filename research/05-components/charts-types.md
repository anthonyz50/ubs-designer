# UBS Standard Components: Chart Types

> Source: UBS Frontify Portal, Standard Components (Document 17)

## Column & Bar Chart
Compare categorised data as columns (vertical) or bars (horizontal).
Synonyms: Bar graph, Histogram

### Anatomy
1. Chart series

### Types
- **Column chart** - vertical bars
- **Bar chart** - horizontal bars
- **Stacked series** - bars with multiple segments; Legend MUST be placed near chart

### Rules
- Accompanied by Legend when representing 2+ categories
- 4 different bar/column widths available for different cases
- Can be scaled and adjusted for complex data

### Examples
- Column chart with Bordeaux accent colour
- Column chart with Lagoon accent colour
- Stacked bar chart with Bronze accent colour

## Line Chart
Showcases trends and changes over time. Visualises quantitative relationships.
Synonyms: Line graph, Curve chart

### Anatomy
1. Line
2. Gradient fill (optional)

### Types
- **Performance chart (Positive - Blue/Lake)** - European and Asian customers
- **Performance chart (Positive - Olive/Kiwi)** - American customers
- **Negative Performance chart**
- **Positive & Negative Performance chart**
- **Asset Gold chart**

### Rules
- Simple line chart uses Cod grey line with optional grey gradient fill
- Gradients CANNOT be applied with 2+ lines
- Trading colours and gradients used ONLY for Performance chart
- **No smooth interpolation** - always use angular interpolation methods; smooth/roundish charts lack clarity and precision

## Area Chart
Displays quantitative data based on line chart with filled area between axis and line.
Synonyms: Filled Line Chart

### Anatomy
1. Area
2. Legend

### Types
- **Stacked area chart** - multiple areas stacked
- **Stacked area chart with negative values**
- **Percentage area chart** (100% stacked)
- **Forecast chart (simple)** - central trend line with filled range showing expected value bounds
- **Forecast chart (layered)** - compare different forecast options

### Rules
- Area has opaque fill and white border
- Must contain at least TWO areas
- Forecast charts use smooth interpolation (exception to line chart rule) because upper/lower bounds are formula-defined

## Donut Chart
Compares categorised data in circular form. Shows parts-to-whole relationships. Preferred over pie charts.
Synonyms: Pie chart, Circle graph

### Anatomy
1. Donut chart
2. Legend
3. Total value (optional)

### Types
- **Full circle** vs **Semi circle** (semi for mobile when space limited)
- **Standard** (up to 240px) vs **Large**
- Both should have **80% thickness**

### Rules
- ALWAYS accompanied by a legend
- Data values ordered by size, starting CLOCKWISE with largest
- Follow correct colour set for each segment
- Used ONLY for categorised data summing to 100%
- Provide enough space for visibility
- DO use 80% thickness; DON'T use different thickness

## Mixed Chart
Combines two or more chart types in a single visualisation for complex data.
Synonyms: Combination chart, Joint chart, Grouped chart

### Anatomy
1. Column chart
2. Line chart
3. Legend

### Types
- **Bar-line chart** - most common
- **Area-line chart**

### Rules
- Behaviour of each chart type follows its respective page rules
- No Sketch, iOS, or Android components available yet

## Sparkline
Small, compact inline charts for embedding in text, tables, or dashboards.
Synonyms: Mini chart, Inline chart

### Anatomy
1. Line
2. Gradient area
3. Tooltip

### Types
- **Trading sparkline (negative)** - uses negative trading colour
- **Trading sparkline (positive)** - uses positive trading colour
- **Simple sparkline** - neutral grey
- **Columns sparkline** - bar-style mini chart

### Behaviour
- Hover over angle point/column: tooltip appears
- Mobile: sparklines are NOT interactive
- Small and compact by design
- Should NOT have too many data points
- Focus on displaying trends over time

## Maps
Geographic data visualisation. Built with Highcharts library.

### Anatomy
1. Initial inactive country/region state
2. Categorised active country/region
3. Tooltip
4. Legend

### Map Types (Options)
- **Progress map (sequential)** - data progressing low to high
- **Deviation map (diverging)** - deviation from average
- **Categories map (qualitative)** - categorical data

### Progress Map Colours
Default: single base colour (Chocolate #585148)

Two-colour options:
| From | To | HEX From | HEX To |
|------|----|----------|--------|
| Caramel | Chocolate | #d7c2aa | #585148 |
| Lemongrass | Olive | #dedfb3 | #6a7d39 |
| Sage | Pine | #c6d9ce | #3b8085 |

### Deviation Map Trading Colours
| Scheme | Negative | Positive |
|--------|----------|----------|
| European | Chestnut #9a3d37 | Atlantic #427c99 |
| American | Chestnut #9a3d37 | Olive #6a7d39 |
| Asian | Chestnut #9a3d37 | Atlantic #427c99 |

### Interactions
- **Hover (progress)**: highlight with contrasting colour from chart palette
- **Hover (categories)**: 10% black overlay on region
- **Interactive legend**: click items to toggle data; deselected regions at 20% opacity

### Rules
- Data type defines map chart option (don't pick arbitrarily)
- Use light colours for low values, dark for high values
- Don't use too many colours (overwhelming)
- Don't use Highcharts options not aligned with UBS branding
- Assets: download SVG from highcharts.com/maps/demo/all-maps and redesign

### Do's and Don'ts
- DO: Use selective, balanced colour sequences
- DON'T: Let one colour dominate or overwhelm
- DON'T: Use non-UBS-branded Highcharts defaults
