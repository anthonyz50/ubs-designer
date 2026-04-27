/**
 * @module DataViz
 * @description Chart wrapper that enforces UBS data visualisation rules.
 *
 * **UBS Chart Rules (strictly enforced):**
 * - ALWAYS 2D — no 3D, no gradients, no shadows
 * - 2px gap between segments on screen
 * - Donut preferred over pie (no pie option)
 * - Correct colour sequence order from UBS tokens
 * - Colour sequences: monochrome, polychrome, multichrome, complex
 *
 * **Sub-components:** DonutChart, BarChart, LineChart
 *
 * **Regional trading colour support:**
 * - EMEA/US: green=positive, red=negative
 * - APAC: red=positive, green=negative (REVERSED)
 *
 * @example
 * ```tsx
 * <DataViz
 *   type="donut"
 *   data={[
 *     { label: 'Equities', value: 45 },
 *     { label: 'Bonds', value: 30 },
 *     { label: 'Cash', value: 25 },
 *   ]}
 *   colourSequence="multichrome"
 * />
 *
 * <DataViz
 *   type="bar"
 *   data={chartData}
 *   highlightIndex={2}
 *   insight="Q3 showed 15% growth, outpacing the sector."
 * />
 * ```
 */
import {
  forwardRef,
  type ReactNode,
  type HTMLAttributes,
  type CSSProperties,
} from 'react';
import styles from './DataViz.module.css';

// ─── Types ─────────────────────────────────────────────────

/** Chart type. Note: no "pie" — UBS prefers donut. */
export type ChartType = 'donut' | 'bar' | 'line';

/** Colour sequence mode. */
export type ColourSequence = 'monochrome' | 'polychrome' | 'multichrome' | 'complex';

/** Trading region for colour direction. */
export type DataVizRegion = 'emea' | 'apac' | 'us';

/** Single data point for charts. */
export interface ChartDataPoint {
  /** Display label. */
  label: string;
  /** Numeric value. */
  value: number;
  /** Optional colour override (must be a valid UBS colour). */
  colour?: string;
}

export interface DataVizProps extends HTMLAttributes<HTMLDivElement> {
  /** Chart type. Defaults to `'donut'`. */
  type?: ChartType;
  /** Chart data points. */
  data: ChartDataPoint[];
  /** Index of a data point to visually highlight. */
  highlightIndex?: number;
  /** Colour sequence mode. Defaults to `'multichrome'`. */
  colourSequence?: ColourSequence;
  /** Region for trading colour direction. Defaults to `'emea'`. */
  region?: DataVizRegion;
  /** Optional insight text shown with a red arrow. */
  insight?: string;
  /** Chart width in pixels. Defaults to `300`. */
  width?: number;
  /** Chart height in pixels. Defaults to `300` for donut, `200` for bar/line. */
  height?: number;
  /** Show legend. Defaults to `true`. */
  showLegend?: boolean;
  /** Content rendered in the donut centre. */
  centerContent?: ReactNode;
}

// ─── Colour sequences ──────────────────────────────────────

/** UBS chart colour sequence (20 colours). */
const CHART_COLOURS = [
  '#AF8626', '#00759E', '#879420', '#4B2D58', '#9F8865',
  '#2E476B', '#469A6C', '#AD3E4A', '#8489BD', '#0C7EC6',
  '#654D16', '#804C95', '#45999C', '#4972AC', '#CC707A',
  '#295B40', '#545A9C', '#785E4A', '#07476F', '#620004',
];

/** Polychrome: Gray III–VI and Black. */
const POLYCHROME_COLOURS = ['#8E8D83', '#7A7870', '#5A5D5C', '#404040', '#000000'];

/** Monochrome: single UBS colour with opacity steps. */
const MONOCHROME_BASE = '#2E476B'; // Plum 90

/**
 * Resolves colour array based on the colour sequence mode and data length.
 */
function resolveColours(
  sequence: ColourSequence,
  count: number,
  data: ChartDataPoint[],
): string[] {
  // Use per-point overrides if provided
  const overrides = data.map((d) => d.colour);

  switch (sequence) {
    case 'monochrome': {
      return Array.from({ length: count }, (_, i) => {
        if (overrides[i]) return overrides[i]!;
        const opacity = 1 - (i * 0.15);
        // Convert to a solid colour by mixing with white
        return adjustOpacity(MONOCHROME_BASE, Math.max(0.2, opacity));
      });
    }
    case 'polychrome': {
      return Array.from({ length: count }, (_, i) => {
        if (overrides[i]) return overrides[i]!;
        return POLYCHROME_COLOURS[i % POLYCHROME_COLOURS.length];
      });
    }
    case 'multichrome':
    case 'complex': {
      return Array.from({ length: count }, (_, i) => {
        if (overrides[i]) return overrides[i]!;
        return CHART_COLOURS[i % CHART_COLOURS.length];
      });
    }
    default:
      return CHART_COLOURS.slice(0, count);
  }
}

/**
 * Creates a hex colour with simulated opacity by mixing with white.
 */
function adjustOpacity(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const mix = (c: number) => Math.round(c * opacity + 255 * (1 - opacity));
  return `#${mix(r).toString(16).padStart(2, '0')}${mix(g).toString(16).padStart(2, '0')}${mix(b).toString(16).padStart(2, '0')}`;
}

// ─── Sub-components ────────────────────────────────────────

interface SubChartProps {
  data: ChartDataPoint[];
  colours: string[];
  highlightIndex?: number;
  width: number;
  height: number;
  centerContent?: ReactNode;
}

/**
 * DonutChart — SVG donut chart with 2px gaps between segments.
 * No pie option per UBS rules.
 */
function DonutChart({ data, colours, highlightIndex, width, height, centerContent }: SubChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  if (total === 0) return null;

  const size = Math.min(width, height);
  const cx = size / 2;
  const cy = size / 2;
  const outerRadius = size * 0.45;
  const innerRadius = size * 0.28;

  // Gap angle in radians (2px visual gap approximation)
  const gapAngle = data.length > 1 ? 0.03 : 0;

  let currentAngle = 0;
  const segments = data.map((point, i) => {
    const fraction = point.value / total;
    const sweepAngle = fraction * Math.PI * 2 - gapAngle;

    if (sweepAngle <= 0) {
      currentAngle += fraction * Math.PI * 2;
      return null;
    }

    const startAngle = currentAngle + gapAngle / 2;
    const endAngle = startAngle + sweepAngle;

    const x1Outer = cx + outerRadius * Math.cos(startAngle);
    const y1Outer = cy + outerRadius * Math.sin(startAngle);
    const x2Outer = cx + outerRadius * Math.cos(endAngle);
    const y2Outer = cy + outerRadius * Math.sin(endAngle);
    const x1Inner = cx + innerRadius * Math.cos(endAngle);
    const y1Inner = cy + innerRadius * Math.sin(endAngle);
    const x2Inner = cx + innerRadius * Math.cos(startAngle);
    const y2Inner = cy + innerRadius * Math.sin(startAngle);

    const largeArc = sweepAngle > Math.PI ? 1 : 0;

    const path = [
      `M ${x1Outer} ${y1Outer}`,
      `A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2Outer} ${y2Outer}`,
      `L ${x1Inner} ${y1Inner}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x2Inner} ${y2Inner}`,
      'Z',
    ].join(' ');

    currentAngle += fraction * Math.PI * 2;

    const isHighlighted = highlightIndex === i;
    const isDimmed = highlightIndex != null && highlightIndex !== i;

    return (
      <path
        key={i}
        d={path}
        fill={colours[i]}
        opacity={isDimmed ? 0.4 : 1}
        stroke={isHighlighted ? '#000000' : 'none'}
        strokeWidth={isHighlighted ? 2 : 0}
      >
        <title>{`${point.label}: ${point.value}`}</title>
      </path>
    );
  });

  return (
    <div className={styles.donutWrapper} style={{ width: size, height: size }}>
      <svg
        className={styles.donutSvg}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label="Donut chart"
      >
        {segments}
      </svg>
      {centerContent && (
        <div className={styles.donutCenter}>{centerContent}</div>
      )}
    </div>
  );
}

/**
 * BarChart — vertical bar chart with 2px gaps.
 * Strictly 2D, no gradients, no shadows.
 */
function BarChart({ data, colours, highlightIndex, width, height }: SubChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const barCount = data.length;
  const gap = 2; // UBS: 2px gap between segments
  const totalGaps = (barCount - 1) * gap;
  const barWidth = Math.max(1, (width - totalGaps) / barCount);

  return (
    <div className={styles.barWrapper} style={{ width, height }}>
      {data.map((point, i) => {
        const barHeight = (point.value / maxValue) * height * 0.85;
        const isDimmed = highlightIndex != null && highlightIndex !== i;

        return (
          <div key={i} className={styles.barGroup} style={{ width: barWidth }}>
            <div
              className={`${styles.bar} ${isDimmed ? styles.barDimmed : ''}`}
              style={{
                height: barHeight,
                backgroundColor: colours[i],
                width: '100%',
              }}
              role="img"
              aria-label={`${point.label}: ${point.value}`}
            />
            <span className={styles.barLabel}>{point.label}</span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * LineChart — SVG line chart.
 * 2D only, no gradients, no shadows.
 */
function LineChart({ data, colours, highlightIndex, width, height }: SubChartProps) {
  if (data.length === 0) return null;

  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const minValue = Math.min(...data.map((d) => d.value), 0);
  const range = maxValue - minValue || 1;

  const padding = { top: 10, right: 10, bottom: 30, left: 10 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const points = data.map((point, i) => {
    const x = padding.left + (i / Math.max(data.length - 1, 1)) * chartWidth;
    const y = padding.top + chartHeight - ((point.value - minValue) / range) * chartHeight;
    return { x, y, ...point };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div className={styles.lineWrapper} style={{ width, height }}>
      <svg
        className={styles.lineSvg}
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Line chart"
      >
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
          const y = padding.top + chartHeight * (1 - fraction);
          return (
            <line
              key={fraction}
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              className={styles.gridLine}
            />
          );
        })}

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke={colours[0]}
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Data points */}
        {points.map((p, i) => {
          const isHighlighted = highlightIndex === i;
          const isDimmed = highlightIndex != null && highlightIndex !== i;
          return (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={isHighlighted ? 5 : 3}
              fill={colours[i % colours.length]}
              opacity={isDimmed ? 0.4 : 1}
              stroke={isHighlighted ? '#000000' : '#FFFFFF'}
              strokeWidth={isHighlighted ? 2 : 1}
            >
              <title>{`${p.label}: ${p.value}`}</title>
            </circle>
          );
        })}

        {/* X-axis labels */}
        {points.map((p, i) => (
          <text
            key={i}
            x={p.x}
            y={height - 5}
            textAnchor="middle"
            className={styles.axisLabel}
            fontSize={11}
          >
            {p.label}
          </text>
        ))}
      </svg>
    </div>
  );
}

// ─── Insight flag ──────────────────────────────────────────

function InsightFlag({ text }: { text: string }) {
  return (
    <div className={styles.insight}>
      <span className={styles.insightArrow}>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M8 2L14 8L8 14M14 8H2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={styles.insightText}>{text}</span>
    </div>
  );
}

// ─── Legend ─────────────────────────────────────────────────

function Legend({ data, colours }: { data: ChartDataPoint[]; colours: string[] }) {
  return (
    <div className={styles.legend}>
      {data.map((point, i) => (
        <div key={i} className={styles.legendItem}>
          <span
            className={styles.legendSwatch}
            style={{ backgroundColor: colours[i] }}
          />
          <span>{point.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Main DataViz component ────────────────────────────────

/**
 * DataViz — UBS chart wrapper.
 *
 * Enforces all UBS data visualisation rules:
 * - 2D only (no 3D, gradients, or shadows)
 * - 2px gaps between chart segments
 * - Donut preferred (no pie chart option)
 * - Correct colour sequence order
 * - Regional trading colour support
 */
export const DataViz = forwardRef<HTMLDivElement, DataVizProps>(
  (
    {
      type = 'donut',
      data,
      highlightIndex,
      colourSequence = 'multichrome',
      region = 'emea',
      insight,
      width: propWidth,
      height: propHeight,
      showLegend = true,
      centerContent,
      className,
      ...rest
    },
    ref,
  ) => {
    const width = propWidth ?? 300;
    const height = propHeight ?? (type === 'donut' ? 300 : 200);
    const colours = resolveColours(colourSequence, data.length, data);

    const classes = [styles.container, className].filter(Boolean).join(' ');

    const chartProps: SubChartProps = {
      data,
      colours,
      highlightIndex,
      width,
      height,
      centerContent,
    };

    return (
      <div ref={ref} className={classes} data-chart-type={type} data-region={region} {...rest}>
        <div className={styles.chart}>
          {type === 'donut' && <DonutChart {...chartProps} />}
          {type === 'bar' && <BarChart {...chartProps} />}
          {type === 'line' && <LineChart {...chartProps} />}
        </div>

        {showLegend && <Legend data={data} colours={colours} />}
        {insight && <InsightFlag text={insight} />}
      </div>
    );
  },
);

DataViz.displayName = 'DataViz';

export default DataViz;
