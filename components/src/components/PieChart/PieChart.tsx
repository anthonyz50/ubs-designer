import React, { forwardRef, useMemo } from 'react';
import styles from './PieChart.module.css';

/** UBS Data Visualisation colour sequence. */
const UBS_DATA_COLOURS = [
  '#E60000',
  '#8A000A',
  '#B98E2C',
  '#6F7A1A',
  '#5A5D5C',
  '#CCCABC',
];

export interface PieChartDataItem {
  /** Segment label. */
  label: string;
  /** Segment value. */
  value: number;
  /** Optional custom colour. */
  color?: string;
}

export interface PieChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Data segments. */
  data: PieChartDataItem[];
  /** Chart diameter in pixels. @default 200 */
  size?: number;
  /** Show labels on or beside segments. @default true */
  showLabels?: boolean;
  /** Show a legend beside the chart. @default false */
  showLegend?: boolean;
  /** Animate segments on mount. @default true */
  animate?: boolean;
  /** Render as a donut (with hole) instead of filled pie. @default false */
  donut?: boolean;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeSector(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number,
) {
  // Handle near-full circle
  const sweep = endAngle - startAngle;
  const largeArc = sweep > 180 ? 1 : 0;

  const outerStart = polarToCartesian(cx, cy, outerR, startAngle);
  const outerEnd = polarToCartesian(cx, cy, outerR, endAngle);

  if (innerR <= 0) {
    // Full pie slice
    return [
      `M ${cx} ${cy}`,
      `L ${outerStart.x} ${outerStart.y}`,
      `A ${outerR} ${outerR} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
      'Z',
    ].join(' ');
  }

  // Donut slice
  const innerStart = polarToCartesian(cx, cy, innerR, startAngle);
  const innerEnd = polarToCartesian(cx, cy, innerR, endAngle);

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    'Z',
  ].join(' ');
}

/**
 * PieChart — Pie chart using pure SVG.
 *
 * Renders data as pie segments with optional labels, legend,
 * and a donut variant. Uses UBS data visualisation colours.
 *
 * @example
 * ```tsx
 * <PieChart
 *   data={[
 *     { label: 'Equities', value: 55 },
 *     { label: 'Fixed Income', value: 30 },
 *     { label: 'Alternatives', value: 15 },
 *   ]}
 *   showLabels
 *   showLegend
 * />
 * ```
 *
 * @example
 * ```tsx
 * <PieChart
 *   data={[
 *     { label: 'Region A', value: 40 },
 *     { label: 'Region B', value: 35 },
 *     { label: 'Region C', value: 25 },
 *   ]}
 *   donut
 *   size={180}
 * />
 * ```
 */
export const PieChart = forwardRef<HTMLDivElement, PieChartProps>(
  (
    {
      data,
      size = 200,
      showLabels = true,
      showLegend = false,
      animate = true,
      donut = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const total = useMemo(() => data.reduce((sum, d) => sum + d.value, 0), [data]);

    const segments = useMemo(() => {
      let currentAngle = 0;
      return data.map((item, i) => {
        const percentage = total > 0 ? (item.value / total) * 100 : 0;
        const sweep = (percentage / 100) * 360;
        const startAngle = currentAngle;
        // Cap at 359.99 to avoid SVG arc degeneracy
        const endAngle = currentAngle + Math.min(sweep, 359.99);
        currentAngle += sweep;

        return {
          ...item,
          percentage,
          color: item.color ?? UBS_DATA_COLOURS[i % UBS_DATA_COLOURS.length],
          startAngle,
          endAngle,
        };
      });
    }, [data, total]);

    const cx = size / 2;
    const cy = size / 2;
    const outerR = size / 2 - 2;
    const innerR = donut ? outerR * 0.55 : 0;
    const labelR = donut ? (outerR + innerR) / 2 : outerR * 0.65;

    const legendWidth = showLegend ? 160 : 0;
    const totalWidth = size + legendWidth;

    const ariaLabel = `Pie chart with ${data.length} segments. ${
      data.map((d) => `${d.label}: ${total > 0 ? ((d.value / total) * 100).toFixed(1) : 0}%`).join(', ')
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
          width={totalWidth}
          height={size}
          viewBox={`0 0 ${totalWidth} ${size}`}
          className={styles.svg}
        >
          {segments.map((seg, i) => {
            if (seg.percentage <= 0) return null;

            const path = describeSector(cx, cy, outerR, innerR, seg.startAngle, seg.endAngle);

            return (
              <path
                key={i}
                d={path}
                fill={seg.color}
                stroke="#FFFFFF"
                strokeWidth={1.5}
                className={animate ? styles.animateSlice : undefined}
                style={animate ? { animationDelay: `${i * 80}ms` } : undefined}
              >
                <title>{`${seg.label}: ${seg.percentage.toFixed(1)}%`}</title>
              </path>
            );
          })}

          {/* Labels on slices */}
          {showLabels &&
            segments
              .filter((seg) => seg.percentage > 4)
              .map((seg, i) => {
                const midAngle = (seg.startAngle + seg.endAngle) / 2;
                const pos = polarToCartesian(cx, cy, labelR, midAngle);
                return (
                  <text
                    key={`label-${i}`}
                    x={pos.x}
                    y={pos.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className={styles.sliceLabel}
                    aria-hidden="true"
                  >
                    {`${seg.percentage.toFixed(0)}%`}
                  </text>
                );
              })}

          {/* Legend */}
          {showLegend && (
            <g transform={`translate(${size + 16}, 0)`}>
              {segments.map((seg, i) => (
                <g key={`legend-${i}`} transform={`translate(0, ${i * 26 + 20})`}>
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
                    {seg.label} ({seg.percentage.toFixed(1)}%)
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

PieChart.displayName = 'PieChart';
