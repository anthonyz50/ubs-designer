import { default as React } from 'react';

/** Progress bar/circle size variant. */
export type ProgressSize = 'sm' | 'md' | 'lg';
/** Progress colour variant. */
export type ProgressColour = 'red' | 'green' | 'amber' | 'gray';
/** Progress visual variant. */
export type ProgressVariant = 'bar' | 'circle';
/**
 * Props for the {@link Progress} component.
 */
export interface ProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'label'> {
    /** Current progress value (0–100). Omit for indeterminate mode. */
    value?: number;
    /** Visual variant. @default 'bar' */
    variant?: ProgressVariant;
    /** Size variant. @default 'md' */
    size?: ProgressSize;
    /** Colour of the progress indicator. @default 'red' */
    colour?: ProgressColour;
    /** Whether to display the percentage label. @default false */
    showLabel?: boolean;
    /** Custom label text. Overrides the default percentage display. */
    label?: string;
}
/**
 * Progress indicator following UBS brand guidelines.
 *
 * Supports bar and circular variants with determinate and indeterminate modes.
 *
 * @example
 * ```tsx
 * <Progress value={60} variant="bar" colour="red" showLabel />
 * <Progress variant="circle" size="lg" /> // indeterminate
 * ```
 */
export declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
