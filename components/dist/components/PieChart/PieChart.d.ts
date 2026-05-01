import { default as React } from 'react';

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
export declare const PieChart: React.ForwardRefExoticComponent<PieChartProps & React.RefAttributes<HTMLDivElement>>;
