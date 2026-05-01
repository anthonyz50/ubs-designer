import { default as React } from 'react';

/** Status of an individual process step. */
export type StepStatus = 'completed' | 'active' | 'upcoming' | 'error';
/** Orientation of the process navigation. */
export type ProcessOrientation = 'horizontal' | 'vertical';
export interface ProcessStep {
    /** Display label for the step. */
    label: string;
    /** Current status of the step. */
    status: StepStatus;
    /** Optional description text. */
    description?: string;
}
export interface ProcessNavigationProps extends React.HTMLAttributes<HTMLElement> {
    /** Array of steps to display. */
    steps: ProcessStep[];
    /** Layout orientation. @default 'horizontal' */
    orientation?: ProcessOrientation;
    /** Index of the current active step (0-based). Used for aria attributes. */
    currentStep?: number;
}
/**
 * UBS Design System ProcessNavigation component.
 *
 * Step-by-step process indicator (wizard/stepper) with
 * completed, active, upcoming, and error states. Supports
 * horizontal and vertical orientations.
 *
 * @example
 * ```tsx
 * <ProcessNavigation
 *   steps={[
 *     { label: 'Personal Details', status: 'completed' },
 *     { label: 'Account Type', status: 'active' },
 *     { label: 'Review', status: 'upcoming' },
 *   ]}
 *   orientation="horizontal"
 *   currentStep={1}
 * />
 * ```
 */
export declare const ProcessNavigation: React.ForwardRefExoticComponent<ProcessNavigationProps & React.RefAttributes<HTMLElement>>;
