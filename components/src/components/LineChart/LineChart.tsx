import React, { forwardRef, useMemo } from 'react';
import styles from './LineChart.module.css';

/** UBS Data Visualisation colour sequence. */
const UBS_DATA_COLOURS = [
  '#E60000',
  '#8A000A',
  '#B98E2C',
  '#6F7A1A',
  '#5A5D5C',
  '#CCCABC',
];

export interface LineChartSeries {
  /** Series name. */
  name: string;
  /** Series values (one per data point). */
  values: number[];
}

export interface LineChartDataPoint {
  /** X-axis label for this point. */
  label: string;
  /** One or more data series. */
  series: LineChartSeries[];
}

export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Chart data. Each entry is an x-axis point with series values. */
  data: LineChartDataPoint[];
  /** Show data points. @default true */
  showPoints?: boolean;
  /** Fill the area beneath lines. @default false */
  showArea?: boolean;
  /** Show grid lines. @default true */
  showGrid?: boolean;
  /** X-axis label. */
  xLabel?: string;
  /** Y-axis label. */
  yLabel?: string;
  /** Animate line drawing. @default true */
  animate?: boolean;
  /** Use curved (monotone) lines instead of straight segments. @default false */
  curved?: boolean;
}

/** SVG chart layout constants. */
const CHART_WIDTH = 500;
const CHART_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 50, left: 60 };

/**
 * Build a monotone cubic interpolation path for smooth curves.
 */
function buildCurvePath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return '';
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }

  return path;
}

function buildLinePath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return '';
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
}

/**
 * LineChart — Line chart with pure SVG paths.
 *
 * Supports single or multiple series, points, area fill,
 * curved interpolation, and grid lines. Uses UBS data visualisation colours.
 *
 * @example
 * ```tsx
 * <LineChart
 *   data={[
 *     { label: 'Jan', series: [{ name: 'Fund A', values: [100] }, { name: 'Fund B', values: [90] }] },
 *     { label: 'Feb', series: [{ name: 'Fund A', values: [110] }, { name: 'Fund B', values: [95] }] },
 *     { label: 'Mar', series: [{ name: 'Fund A', values: [105] }, { name: 'Fund B', values: [100] }] },
 *   ]}
 *   showArea
 *   curved
 *   xLabel="Month"
 *   yLabel="Value (CHF)"
 * />
 * ```
 */
export const LineChart = forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      data,
      showPoints = true,
      showArea = false,
      showGrid = true,
      xLabel,
      yLabel,
      animate = true,
      curved = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const plotWidth = CHART_WIDTH - PADDING.left - PADDING.right;
    const plotHeight = CHART_HEIGHT - PADDING.top - PADDING.bottom;

    // Flatten all series across all data points
    const seriesNames = useMemo(() => {
      if (data.length === 0) return [];
      return data[0].series.map((s) => s.name);
    }, [data]);

    // Collect values per series across all data points
    const seriesData = useMemo(() => {
      return seriesNames.map((name, si) =>
        data.map((point) => {
          const series = point.series.find((s) => s.name === name);
          return series ? series.values[0] ?? 0 : 0;
        }),
      );
    }, [data, seriesNames]);

    const allValues = seriesData.flat();
    const minVal = Math.min(...allValues, 0);
    const rawMax = Math.max(...allValues, 1);

    // Nice ticks
    const ticks = useMemo(() => {
      const tickCount = 5;
      const range = rawMax - Math.min(minVal, 0);
      const step = Math.ceil(range / tickCount / 10) * 10 || 1;
      const bottom = Math.floor(Math.min(minVal, 0) / step) * step;
      const result: number[] = [];
      for (let v = bottom; v <= rawMax + step; v += step) {
        result.push(v);
        if (result.length >= tickCount + 2) break;
      }
      return result;
    }, [rawMax, minVal]);

    const niceMin = ticks[0];
    const niceMax = ticks[ticks.length - 1];
    const niceRange = niceMax - niceMin || 1;

    const toX = (i: number) => (data.length > 1 ? (i / (data.length - 1)) * plotWidth : plotWidth / 2);
    const toY = (v: number) => plotHeight - ((v - niceMin) / niceRange) * plotHeight;

    const ariaLabel = `Line chart. ${seriesNames.length} series over ${data.length} points. ${
      seriesNames.map((name, si) => `${name}: ${seriesData[si].join(', ')}`).join('; ')
    }`;

    return (
      <div
        ref={ref}
        role="img"
        aria-label={ariaLabel}
        className={[styles.container, className].filter(Boolean).join(' ')}
        {...rest}
      >
        <svg
          width="100%"
          viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
          className={styles.svg}
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform={`translate(${PADDING.left}, ${PADDING.top})`}>
            {/* Grid lines */}
            {showGrid &&
              ticks.map((tick, i) => {
                const y = toY(tick);
                return (
                  <line
                    key={`grid-${i}`}
                    x1={0}
                    y1={y}
                    x2={plotWidth}
                    y2={y}
                    className={styles.gridLine}
                  />
                );
              })}

            {/* Y-axis tick labels */}
            {ticks.map((tick, i) => (
              <text
                key={`ytick-${i}`}
                x={-8}
                y={toY(tick)}
                textAnchor="end"
                dominantBaseline="central"
                className={styles.tickLabel}
                aria-hidden="true"
              >
                {tick}
              </text>
            ))}

            {/* X-axis labels */}
            {data.map((point, i) => (
              <text
                key={`xtick-${i}`}
                x={toX(i)}
                y={plotHeight + 20}
                textAnchor="middle"
                className={styles.tickLabel}
                aria-hidden="true"
              >
                {point.label}
              </text>
            ))}

            {/* Series lines and areas */}
            {seriesData.map((values, si) => {
              const color = UBS_DATA_COLOURS[si % UBS_DATA_COLOURS.length];
              const points = values.map((v, i) => ({ x: toX(i), y: toY(v) }));
              const pathD = curved ? buildCurvePath(points) : buildLinePath(points);

              // Area path (close to bottom)
              const areaD = pathD
                ? `${pathD} L ${points[points.length - 1].x} ${plotHeight} L ${points[0].x} ${plotHeight} Z`
                : '';

              return (
                <g key={`series-${si}`}>
                  {/* Area */}
                  {showArea && areaD && (
                    <path
                      d={areaD}
                      fill={color}
                      opacity={0.12}
                      className={animate ? styles.animateArea : undefined}
                    />
                  )}

                  {/* Line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className={animate ? styles.animateLine : undefined}
                  />

                  {/* Points */}
                  {showPoints &&
                    points.map((p, pi) => (
                      <circle
                        key={`point-${si}-${pi}`}
                        cx={p.x}
                        cy={p.y}
                        r={4}
                        fill="#FFFFFF"
                        stroke={color}
                        strokeWidth={2}
                        className={animate ? styles.animatePoint : undefined}
                        style={animate ? { animationDelay: `${pi * 60 + si * 100}ms` } : undefined}
                      >
                        <title>{`${seriesNames[si]}: ${values[pi]}`}</title>
                      </circle>
                    ))}
                </g>
              );
            })}

            {/* Axes */}
            <line x1={0} y1={0} x2={0} y2={plotHeight} className={styles.axis} />
            <line x1={0} y1={plotHeight} x2={plotWidth} y2={plotHeight} className={styles.axis} />
          </g>

          {/* Axis labels */}
          {xLabel && (
            <text
              x={CHART_WIDTH / 2}
              y={CHART_HEIGHT - 4}
              textAnchor="middle"
              className={styles.axisLabel}
              aria-hidden="true"
            >
              {xLabel}
            </text>
          )}
          {yLabel && (
            <text
              x={14}
              y={CHART_HEIGHT / 2}
              textAnchor="middle"
              transform={`rotate(-90, 14, ${CHART_HEIGHT / 2})`}
              className={styles.axisLabel}
              aria-hidden="true"
            >
              {yLabel}
            </text>
          )}

          {/* Legend */}
          {seriesNames.length > 1 && (
            <g transform={`translate(${PADDING.left}, ${CHART_HEIGHT - 8})`}>
              {seriesNames.map((name, i) => (
                <g key={`legend-${i}`} transform={`translate(${i * 100}, 0)`}>
                  <line
                    x1={0}
                    y1={5}
                    x2={16}
                    y2={5}
                    stroke={UBS_DATA_COLOURS[i % UBS_DATA_COLOURS.length]}
                    strokeWidth={2}
                  />
                  <text x={20} y={9} className={styles.legendText} aria-hidden="true">{name}</text>
                </g>
              ))}
            </g>
          )}
        </svg>
      </div>
    );
  },
);

LineChart.displayName = 'LineChart';
