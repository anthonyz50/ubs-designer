import { default as React } from 'react';

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
export declare const LineChart: React.ForwardRefExoticComponent<LineChartProps & React.RefAttributes<HTMLDivElement>>;
