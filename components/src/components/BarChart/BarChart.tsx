import React, { forwardRef, useMemo } from 'react';
import styles from './BarChart.module.css';

/** UBS Data Visualisation colour sequence. */
const UBS_DATA_COLOURS = [
  '#E60000',
  '#8A000A',
  '#B98E2C',
  '#6F7A1A',
  '#5A5D5C',
  '#CCCABC',
];

/** Bar chart orientation. */
export type BarChartOrientation = 'vertical' | 'horizontal';

export interface BarChartDataItem {
  /** Category label (x-axis for vertical, y-axis for horizontal). */
  label: string;
  /** One or more values (multiple for grouped/stacked). */
  values: number[];
}

export interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Chart data. Each item can have multiple values for grouped/stacked bars. */
  data: BarChartDataItem[];
  /** Bar direction. @default 'vertical' */
  orientation?: BarChartOrientation;
  /** Stack values instead of grouping side-by-side. @default false */
  stacked?: boolean;
  /** Show grid lines. @default true */
  showGrid?: boolean;
  /** Show value labels on bars. @default false */
  showValues?: boolean;
  /** X-axis label. */
  xLabel?: string;
  /** Y-axis label. */
  yLabel?: string;
  /** Series names (for legend in multi-value data). */
  seriesNames?: string[];
  /** Animate bars on mount. @default true */
  animate?: boolean;
}

/** SVG chart layout constants. */
const CHART_WIDTH = 500;
const CHART_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 50, left: 60 };

/**
 * BarChart — Vertical or horizontal bar chart using pure SVG.
 *
 * Supports grouped and stacked variants with axis labels,
 * grid lines, and value labels. Uses UBS data visualisation colours.
 *
 * @example
 * ```tsx
 * <BarChart
 *   data={[
 *     { label: 'Q1', values: [120, 80] },
 *     { label: 'Q2', values: [150, 90] },
 *     { label: 'Q3', values: [130, 110] },
 *   ]}
 *   seriesNames={['Revenue', 'Cost']}
 *   showValues
 *   xLabel="Quarter"
 *   yLabel="Amount (CHF)"
 * />
 * ```
 */
export const BarChart = forwardRef<HTMLDivElement, BarChartProps>(
  (
    {
      data,
      orientation = 'vertical',
      stacked = false,
      showGrid = true,
      showValues = false,
      xLabel,
      yLabel,
      seriesNames,
      animate = true,
      className,
      ...rest
    },
    ref,
  ) => {
    const plotWidth = CHART_WIDTH - PADDING.left - PADDING.right;
    const plotHeight = CHART_HEIGHT - PADDING.top - PADDING.bottom;

    const seriesCount = useMemo(
      () => Math.max(...data.map((d) => d.values.length), 1),
      [data],
    );

    const maxValue = useMemo(() => {
      if (stacked) {
        return Math.max(...data.map((d) => d.values.reduce((a, b) => a + b, 0)), 1);
      }
      return Math.max(...data.flatMap((d) => d.values), 1);
    }, [data, stacked]);

    // Compute nice grid ticks
    const ticks = useMemo(() => {
      const tickCount = 5;
      const step = Math.ceil(maxValue / tickCount / 10) * 10 || 1;
      const result: number[] = [];
      for (let i = 0; i <= maxValue + step; i += step) {
        result.push(i);
        if (result.length >= tickCount + 1) break;
      }
      return result;
    }, [maxValue]);

    const niceMax = ticks[ticks.length - 1] || maxValue;

    const isVertical = orientation === 'vertical';

    // Build accessibility description
    const ariaLabel = `Bar chart. ${data.length} categories. ${
      data.map((d) => `${d.label}: ${d.values.join(', ')}`).join('; ')
    }`;

    if (isVertical) {
      const barGroupWidth = plotWidth / data.length;
      const barGap = 4;
      const barWidth = stacked
        ? barGroupWidth * 0.6
        : (barGroupWidth - barGap * (seriesCount + 1)) / seriesCount;

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
                  const y = plotHeight - (tick / niceMax) * plotHeight;
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
              {ticks.map((tick, i) => {
                const y = plotHeight - (tick / niceMax) * plotHeight;
                return (
                  <text
                    key={`ytick-${i}`}
                    x={-8}
                    y={y}
                    textAnchor="end"
                    dominantBaseline="central"
                    className={styles.tickLabel}
                    aria-hidden="true"
                  >
                    {tick}
                  </text>
                );
              })}

              {/* Bars */}
              {data.map((item, di) => {
                const groupX = di * barGroupWidth;

                if (stacked) {
                  let cumulative = 0;
                  return (
                    <g key={`bar-${di}`}>
                      {item.values.map((val, si) => {
                        const barH = (val / niceMax) * plotHeight;
                        const barY = plotHeight - (cumulative / niceMax) * plotHeight - barH;
                        cumulative += val;
                        const color = UBS_DATA_COLOURS[si % UBS_DATA_COLOURS.length];

                        return (
                          <g key={`bar-${di}-${si}`}>
                            <rect
                              x={groupX + (barGroupWidth - barWidth) / 2}
                              y={barY}
                              width={barWidth}
                              height={barH}
                              fill={color}
                              className={animate ? styles.animateBar : undefined}
                              style={animate ? { animationDelay: `${di * 80 + si * 40}ms` } : undefined}
                            >
                              <title>{`${item.label}${seriesNames?.[si] ? ` - ${seriesNames[si]}` : ''}: ${val}`}</title>
                            </rect>
                            {showValues && barH > 16 && (
                              <text
                                x={groupX + barGroupWidth / 2}
                                y={barY + barH / 2}
                                textAnchor="middle"
                                dominantBaseline="central"
                                className={styles.valueLabel}
                                aria-hidden="true"
                              >
                                {val}
                              </text>
                            )}
                          </g>
                        );
                      })}
                    </g>
                  );
                }

                return (
                  <g key={`bar-${di}`}>
                    {item.values.map((val, si) => {
                      const barH = (val / niceMax) * plotHeight;
                      const barX = groupX + barGap + si * (barWidth + barGap);
                      const color = UBS_DATA_COLOURS[si % UBS_DATA_COLOURS.length];

                      return (
                        <g key={`bar-${di}-${si}`}>
                          <rect
                            x={barX}
                            y={plotHeight - barH}
                            width={barWidth}
                            height={barH}
                            fill={color}
                            className={animate ? styles.animateBar : undefined}
                            style={animate ? { animationDelay: `${di * 80 + si * 40}ms` } : undefined}
                          >
                            <title>{`${item.label}${seriesNames?.[si] ? ` - ${seriesNames[si]}` : ''}: ${val}`}</title>
                          </rect>
                          {showValues && (
                            <text
                              x={barX + barWidth / 2}
                              y={plotHeight - barH - 6}
                              textAnchor="middle"
                              className={styles.valueLabel}
                              aria-hidden="true"
                            >
                              {val}
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </g>
                );
              })}

              {/* X-axis labels */}
              {data.map((item, di) => (
                <text
                  key={`xlabel-${di}`}
                  x={di * barGroupWidth + barGroupWidth / 2}
                  y={plotHeight + 20}
                  textAnchor="middle"
                  className={styles.tickLabel}
                  aria-hidden="true"
                >
                  {item.label}
                </text>
              ))}

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
            {seriesNames && seriesNames.length > 1 && (
              <g transform={`translate(${PADDING.left}, ${CHART_HEIGHT - 8})`}>
                {seriesNames.map((name, i) => (
                  <g key={`legend-${i}`} transform={`translate(${i * 100}, 0)`}>
                    <rect width={10} height={10} rx={2} fill={UBS_DATA_COLOURS[i % UBS_DATA_COLOURS.length]} />
                    <text x={14} y={9} className={styles.legendText} aria-hidden="true">{name}</text>
                  </g>
                ))}
              </g>
            )}
          </svg>
        </div>
      );
    }

    // Horizontal orientation
    const barGroupHeight = plotHeight / data.length;
    const barGap = 4;
    const barHeight = stacked
      ? barGroupHeight * 0.6
      : (barGroupHeight - barGap * (seriesCount + 1)) / seriesCount;

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
            {/* Grid lines (vertical) */}
            {showGrid &&
              ticks.map((tick, i) => {
                const x = (tick / niceMax) * plotWidth;
                return (
                  <line
                    key={`grid-${i}`}
                    x1={x}
                    y1={0}
                    x2={x}
                    y2={plotHeight}
                    className={styles.gridLine}
                  />
                );
              })}

            {/* X-axis tick labels (top/bottom values) */}
            {ticks.map((tick, i) => {
              const x = (tick / niceMax) * plotWidth;
              return (
                <text
                  key={`xtick-${i}`}
                  x={x}
                  y={plotHeight + 20}
                  textAnchor="middle"
                  className={styles.tickLabel}
                  aria-hidden="true"
                >
                  {tick}
                </text>
              );
            })}

            {/* Bars */}
            {data.map((item, di) => {
              const groupY = di * barGroupHeight;

              if (stacked) {
                let cumulative = 0;
                return (
                  <g key={`bar-${di}`}>
                    {item.values.map((val, si) => {
                      const barW = (val / niceMax) * plotWidth;
                      const barX = (cumulative / niceMax) * plotWidth;
                      cumulative += val;
                      const color = UBS_DATA_COLOURS[si % UBS_DATA_COLOURS.length];

                      return (
                        <rect
                          key={`bar-${di}-${si}`}
                          x={barX}
                          y={groupY + (barGroupHeight - barHeight) / 2}
                          width={barW}
                          height={barHeight}
                          fill={color}
                          className={animate ? styles.animateBarH : undefined}
                          style={animate ? { animationDelay: `${di * 80}ms` } : undefined}
                        >
                          <title>{`${item.label}${seriesNames?.[si] ? ` - ${seriesNames[si]}` : ''}: ${val}`}</title>
                        </rect>
                      );
                    })}
                  </g>
                );
              }

              return (
                <g key={`bar-${di}`}>
                  {item.values.map((val, si) => {
                    const barW = (val / niceMax) * plotWidth;
                    const barY = groupY + barGap + si * (barHeight + barGap);
                    const color = UBS_DATA_COLOURS[si % UBS_DATA_COLOURS.length];

                    return (
                      <g key={`bar-${di}-${si}`}>
                        <rect
                          x={0}
                          y={barY}
                          width={barW}
                          height={barHeight}
                          fill={color}
                          className={animate ? styles.animateBarH : undefined}
                          style={animate ? { animationDelay: `${di * 80 + si * 40}ms` } : undefined}
                        >
                          <title>{`${item.label}${seriesNames?.[si] ? ` - ${seriesNames[si]}` : ''}: ${val}`}</title>
                        </rect>
                        {showValues && (
                          <text
                            x={barW + 6}
                            y={barY + barHeight / 2}
                            dominantBaseline="central"
                            className={styles.valueLabel}
                            aria-hidden="true"
                          >
                            {val}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* Y-axis category labels */}
            {data.map((item, di) => (
              <text
                key={`ylabel-${di}`}
                x={-8}
                y={di * barGroupHeight + barGroupHeight / 2}
                textAnchor="end"
                dominantBaseline="central"
                className={styles.tickLabel}
                aria-hidden="true"
              >
                {item.label}
              </text>
            ))}

            {/* Axes */}
            <line x1={0} y1={0} x2={0} y2={plotHeight} className={styles.axis} />
            <line x1={0} y1={plotHeight} x2={plotWidth} y2={plotHeight} className={styles.axis} />
          </g>

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
        </svg>
      </div>
    );
  },
);

BarChart.displayName = 'BarChart';
