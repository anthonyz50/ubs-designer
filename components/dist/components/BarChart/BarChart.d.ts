import { default as React } from 'react';

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
export declare const BarChart: React.ForwardRefExoticComponent<BarChartProps & React.RefAttributes<HTMLDivElement>>;
