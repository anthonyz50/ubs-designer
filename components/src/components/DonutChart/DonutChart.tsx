import React, { forwardRef, useMemo, useId } from 'react';
import styles from './DonutChart.module.css';

/** UBS Data Visualisation colour sequence. */
const UBS_DATA_COLOURS = [
  '#E60000',
  '#8A000A',
  '#B98E2C',
  '#6F7A1A',
  '#5A5D5C',
  '#CCCABC',
];

export interface DonutChartDataItem {
  /** Segment label. */
  label: string;
  /** Segment value. */
  value: number;
  /** Optional custom colour (falls back to UBS data viz sequence). */
  color?: string;
}

export interface DonutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Data segments. */
  data: DonutChartDataItem[];
  /** Chart diameter in pixels. @default 200 */
  size?: number;
  /** Ring thickness as a fraction of radius (0-1). @default 0.35 */
  thickness?: number;
  /** Show text labels beside segments. @default false */
  showLabels?: boolean;
  /** Show percentage values. @default true */
  showPercentages?: boolean;
  /** Centre label (e.g. total value). */
  centerLabel?: string;
  /** Animate segments on mount. @default true */
  animate?: boolean;
}

interface Segment {
  label: string;
  value: number;
  percentage: number;
  color: string;
  startAngle: number;
  endAngle: number;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

/**
 * DonutChart — Donut/ring chart using pure SVG.
 *
 * Renders data segments as arcs with optional labels, percentages,
 * and a centre label. Uses the UBS data visualisation colour sequence.
 *
 * @example
 * ```tsx
 * <DonutChart
 *   data={[
 *     { label: 'Equities', value: 45 },
 *     { label: 'Bonds', value: 30 },
 *     { label: 'Cash', value: 25 },
 *   ]}
 *   centerLabel="Portfolio"
 *   showPercentages
 * />
 * ```
 */
export const DonutChart = forwardRef<HTMLDivElement, DonutChartProps>(
  (
    {
      data,
      size = 200,
      thickness = 0.35,
      showLabels = false,
      showPercentages = true,
      centerLabel,
      animate = true,
      className,
      ...rest
    },
    ref,
  ) => {
    const uid = useId();
    const total = useMemo(() => data.reduce((sum, d) => sum + d.value, 0), [data]);

    const segments: Segment[] = useMemo(() => {
      let currentAngle = 0;
      return data.map((item, i) => {
        const percentage = total > 0 ? (item.value / total) * 100 : 0;
        const sweep = (percentage / 100) * 360;
        const startAngle = currentAngle;
        const endAngle = currentAngle + sweep;
        currentAngle = endAngle;

        return {
          label: item.label,
          value: item.value,
          percentage,
          color: item.color ?? UBS_DATA_COLOURS[i % UBS_DATA_COLOURS.length],
          startAngle,
          endAngle,
        };
      });
    }, [data, total]);

    const cx = size / 2;
    const cy = size / 2;
    const outerRadius = (size / 2) - 2;
    const innerRadius = outerRadius * (1 - thickness);
    const midRadius = (outerRadius + innerRadius) / 2;
    const strokeWidth = outerRadius - innerRadius;

    const legendWidth = showLabels ? 160 : 0;
    const totalWidth = size + legendWidth;

    return (
      <div
        ref={ref}
        role="img"
        aria-label={`Donut chart with ${data.length} segments. ${
          data.map((d) => `${d.label}: ${total > 0 ? ((d.value / total) * 100).toFixed(1) : 0}%`).join(', ')
        }`}
        className={[styles.container, className].filter(Boolean).join(' ')}
        {...rest}
      >
        <svg
          width={totalWidth}
          height={size}
          viewBox={`0 0 ${totalWidth} ${size}`}
          className={styles.svg}
        >
          {/* Segments */}
          {segments.map((seg, i) => {
            // Handle full circle (single segment)
            if (seg.percentage >= 99.99) {
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={midRadius}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth={strokeWidth}
                  className={animate ? styles.animateSegment : undefined}
                  style={animate ? { animationDelay: `${i * 100}ms` } : undefined}
                />
              );
            }

            if (seg.percentage <= 0) return null;

            const path = describeArc(cx, cy, midRadius, seg.startAngle, seg.endAngle);

            return (
              <path
                key={i}
                d={path}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeLinecap="butt"
                className={animate ? styles.animateSegment : undefined}
                style={animate ? { animationDelay: `${i * 100}ms` } : undefined}
              >
                <title>{`${seg.label}: ${seg.percentage.toFixed(1)}%`}</title>
              </path>
            );
          })}

          {/* Percentages on segments */}
          {showPercentages &&
            segments
              .filter((seg) => seg.percentage > 5)
              .map((seg, i) => {
                const midAngle = (seg.startAngle + seg.endAngle) / 2;
                const pos = polarToCartesian(cx, cy, midRadius, midAngle);
                return (
                  <text
                    key={`pct-${i}`}
                    x={pos.x}
                    y={pos.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={styles.percentageLabel}
                    aria-hidden="true"
                  >
                    {`${seg.percentage.toFixed(0)}%`}
                  </text>
                );
              })}

          {/* Centre label */}
          {centerLabel && (
            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="central"
              className={styles.centerLabel}
              aria-hidden="true"
            >
              {centerLabel}
            </text>
          )}

          {/* Legend */}
          {showLabels && (
            <g transform={`translate(${size + 16}, 0)`}>
              {segments.map((seg, i) => (
                <g key={`legend-${i}`} transform={`translate(0, ${i * 24 + 20})`}>
                  <rect
                    x={0}
                    y={-6}
                    width={12}
                    height={12}
                    rx={2}
                    fill={seg.color}
                  />
                  <text
                    x={18}
                    y={0}
                    dominantBaseline="central"
                    className={styles.legendText}
                    aria-hidden="true"
                  >
                    {seg.label}
                  </text>
                </g>
              ))}
            </g>
          )}
        </svg>
      </div>
    );
  },
);

DonutChart.displayName = 'DonutChart';
