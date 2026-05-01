import { default as React } from 'react';

/** Status of an individual agenda step. */
export type AgendaStepStatus = 'completed' | 'active' | 'upcoming';
/** Visual variant of the agenda display. */
export type AgendaStepsVariant = 'timeline' | 'compact';
/** A single step in the agenda. */
export interface AgendaStep {
    /** Step title. */
    title: string;
    /** Optional description text. */
    description?: string;
    /** Current status of this step. */
    status: AgendaStepStatus;
    /** Optional timestamp label (e.g. '09:00', '2024-01-15'). */
    timestamp?: string;
    /** Optional icon element rendered in the step indicator. */
    icon?: React.ReactNode;
}
/**
 * Props for the {@link AgendaSteps} component.
 */
export interface AgendaStepsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Array of step definitions. */
    steps: AgendaStep[];
    /** Visual variant. @default 'timeline' */
    variant?: AgendaStepsVariant;
}
/**
 * Agenda/timeline component displaying sequential steps with status indicators.
 *
 * Supports keyboard navigation and screen reader announcements for step status.
 *
 * @example
 * ```tsx
 * <AgendaSteps
 *   steps={[
 *     { title: 'Step 1', status: 'completed' },
 *     { title: 'Step 2', status: 'active' },
 *     { title: 'Step 3', status: 'upcoming' },
 *   ]}
 * />
 * ```
 */
declare const AgendaSteps: React.ForwardRefExoticComponent<AgendaStepsProps & React.RefAttributes<HTMLDivElement>>;
export { AgendaSteps };
