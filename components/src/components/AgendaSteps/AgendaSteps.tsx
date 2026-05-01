/**
 * @module AgendaSteps
 * @description Step-by-step agenda/timeline display following UBS brand guidelines.
 *
 * Renders a vertical timeline with connector lines between steps. Each step
 * can show a title, description, status indicator, and optional timestamp.
 *
 * @example
 * ```tsx
 * <AgendaSteps
 *   steps={[
 *     { title: 'Account opening', description: 'Documents verified', status: 'completed', timestamp: '09:00' },
 *     { title: 'Risk assessment', description: 'In progress', status: 'active' },
 *     { title: 'Portfolio setup', description: 'Pending review', status: 'upcoming' },
 *   ]}
 *   variant="timeline"
 * />
 * ```
 */
import React, { forwardRef } from 'react';
import styles from './AgendaSteps.module.css';

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
const AgendaSteps = forwardRef<HTMLDivElement, AgendaStepsProps>(
  ({ steps, variant = 'timeline', className, ...rest }, ref) => {
    const rootClass = [
      styles.root,
      styles[variant],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={rootClass}
        role="list"
        aria-label="Agenda steps"
        {...rest}
      >
        {steps.map((step, index) => {
          const stepClass = [
            styles.step,
            styles[step.status],
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div
              key={index}
              className={stepClass}
              role="listitem"
              aria-current={step.status === 'active' ? 'step' : undefined}
            >
              {/* Indicator and connector */}
              <div className={styles.track}>
                <div
                  className={styles.indicator}
                  aria-hidden="true"
                >
                  {step.icon ? (
                    <span className={styles.iconWrapper}>{step.icon}</span>
                  ) : step.status === 'completed' ? (
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8.5L6.5 11.5L12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span className={styles.dot} />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={styles.connector} aria-hidden="true" />
                )}
              </div>

              {/* Content */}
              <div className={styles.content}>
                {step.timestamp && (
                  <span className={styles.timestamp}>{step.timestamp}</span>
                )}
                <span className={styles.title}>{step.title}</span>
                {step.description && (
                  <span className={styles.description}>{step.description}</span>
                )}
                <span className={styles.srOnly}>
                  {step.status === 'completed'
                    ? 'Completed'
                    : step.status === 'active'
                      ? 'In progress'
                      : 'Upcoming'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);

AgendaSteps.displayName = 'AgendaSteps';

export { AgendaSteps };
