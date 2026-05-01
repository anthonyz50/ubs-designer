import { default as React } from 'react';

/** A mark on the slider track. */
export interface SliderMark {
    /** The value at which the mark appears. */
    value: number;
    /** Optional label for the mark. */
    label?: string;
}
export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Minimum value. @default 0 */
    min?: number;
    /** Maximum value. @default 100 */
    max?: number;
    /** Step increment. @default 1 */
    step?: number;
    /** Current value. Number for single thumb, [number, number] for range. */
    value?: number | [number, number];
    /** Change handler. */
    onChange?: (value: number | [number, number]) => void;
    /** Whether to show dual thumbs for range selection. @default false */
    range?: boolean;
    /** Whether to show the current value label above the thumb. @default true */
    showValue?: boolean;
    /** Marks to display on the slider track. */
    marks?: SliderMark[];
    /** Whether the slider is disabled. */
    disabled?: boolean;
    /** Accessible label for the slider. */
    label?: string;
}
/**
 * UBS Design System Slider component.
 *
 * A range slider input supporting both single value and dual-thumb range
 * modes. Displays optional value labels and track marks. Uses UBS Red
 * for the active track portion.
 *
 * @example
 * ```tsx
 * <Slider
 *   label="Price range"
 *   min={0}
 *   max={1000}
 *   step={10}
 *   value={[200, 800]}
 *   range
 *   showValue
 *   onChange={(val) => setRange(val as [number, number])}
 * />
 * ```
 */
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLDivElement>>;
