# UBS Standard Components: Chart Elements

> Source: UBS Frontify Portal, Standard Components (Document 17)

## Canvas
The canvas is the fundamental element of every chart. Provides the foundation for rendering visual elements.
Synonyms: Grid, Layout

### Anatomy
1. Regular guideline (dotted)
2. Zero-valued guideline (strong)
3. Axis (solid)
4. Axis label

### Behaviour Rules
- Chart design depends on bar direction
- Only ONE axis visible (the one bars grow from): vertical columns show X-axis, hide Y-axis
- Y-axis can be left or right; recommend RIGHT side for mobile
- Guideline representing "0" is always Strong
- X or Y axes are always Solid
- If axis represents value "0", axis line should be Strong (not Solid)
- All other guidelines are always Dotted
- A chart should NOT have horizontal AND vertical guidelines simultaneously

## Crosshair
Visual aid helping users accurately read values on a chart. Used in line, bar, and scatter charts.
Synonyms: Data cursor, Cross lines

### Anatomy
1. Tooltip box
2. Vertical hairline
3. Horizontal hairline
4. Spot

### Behaviour
- Appears on hover/tap over specific data point
- Vertical and horizontal lines intersect at cursor position
- Tooltip box should ALWAYS appear above the Spot

### Recommendations
- Use contrasting RED colour for crosshair visibility
- Consider adding tooltip/label for additional context
- Align crosshair with gridlines for accuracy
- Use sparingly to avoid visual clutter

## Data Marker
Visual indicator for specific data points on charts.
Synonyms: Data points, Chart markers, Data indicators

### Types
1. **Horizontal line** - used in Column charts to highlight levels
2. **Vertical line** - used in Bar charts to highlight levels
3. **Point** - used in Line charts
4. **Rhombus** - used in Line charts
5. **Triangle** - used in Column or Bar charts to highlight limits

### Rules
- Use contrasting colours for visibility
- Keep size consistent across chart for visual hierarchy
- Consider labels/annotations for additional context
- Use sparingly to avoid clutter

## Legend
Visual aid for interpreting different chart elements. Provides key explaining colour/style of each data series.
Synonyms: Key, Graph legend

### Anatomy
1. Marker
2. Label
3. Value (optional)

### Layout Types
- Inline legend
- Inline legend with values
- Simple table with legend

### Markers
- Legend markers MUST correspond to data series in chart
- Bar chart: Square marker
- Donut chart: Point marker
- Data markers in chart must match Legend markers

### Behaviour
- Hovering over Legend item highlights corresponding data series
- Legend must accurately reflect chart colours/patterns
- Position OUTSIDE chart area (above, below, or side - NEVER inside)

### States
- Hover: highlights corresponding data series
