import React, { forwardRef } from 'react';
import styles from './ProcessNavigation.module.css';

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
export const ProcessNavigation = forwardRef<HTMLElement, ProcessNavigationProps>(
  (
    {
      steps,
      orientation = 'horizontal',
      currentStep,
      className,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      styles.processNavigation,
      styles[orientation],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <nav
        ref={ref}
        className={classNames}
        aria-label="Process navigation"
        {...rest}
      >
        <ol className={styles.stepList} role="list">
          {steps.map((step, index) => {
            const stepClassNames = [
              styles.step,
              styles[step.status],
            ]
              .filter(Boolean)
              .join(' ');

            const isLast = index === steps.length - 1;

            return (
              <li
                key={index}
                className={stepClassNames}
                aria-current={step.status === 'active' ? 'step' : undefined}
              >
                <div className={styles.stepIndicator}>
                  <span className={styles.stepCircle} aria-hidden="true">
                    {step.status === 'completed' && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 7L5.5 10L11.5 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {step.status === 'error' && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 4V7.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle cx="7" cy="10" r="1" fill="currentColor" />
                      </svg>
                    )}
                    {(step.status === 'active' || step.status === 'upcoming') && (
                      <span className={styles.stepNumber}>{index + 1}</span>
                    )}
                  </span>
                  {!isLast && <span className={styles.connector} aria-hidden="true" />}
                </div>
                <div className={styles.stepContent}>
                  <span className={styles.stepLabel}>
                    {step.label}
                  </span>
                  {step.description && (
                    <span className={styles.stepDescription}>{step.description}</span>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

ProcessNavigation.displayName = 'ProcessNavigation';
