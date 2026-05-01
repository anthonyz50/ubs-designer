import { default as React } from 'react';

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
export declare const DonutChart: React.ForwardRefExoticComponent<DonutChartProps & React.RefAttributes<HTMLDivElement>>;
