import { ReactNode, HTMLAttributes } from 'react';

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
export declare const DataViz: import('react').ForwardRefExoticComponent<DataVizProps & import('react').RefAttributes<HTMLDivElement>>;
export default DataViz;
