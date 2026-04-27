import React, { forwardRef } from 'react';
import styles from './Progress.module.css';

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

const CIRCLE_SIZES: Record<ProgressSize, number> = { sm: 40, md: 64, lg: 96 };
const STROKE_WIDTHS: Record<ProgressSize, number> = { sm: 3, md: 4, lg: 6 };
const COLOUR_MAP: Record<ProgressColour, string> = {
  red: styles.colourRed,
  green: styles.colourGreen,
  amber: styles.colourAmber,
  gray: styles.colourGray,
};

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
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  function Progress(
    {
      value,
      variant = 'bar',
      size = 'md',
      colour = 'red',
      showLabel = false,
      label,
      className,
      ...rest
    },
    ref,
  ) {
    const isIndeterminate = value === undefined || value === null;
    const clampedValue = isIndeterminate
      ? 0
      : Math.min(100, Math.max(0, value));
    const displayLabel = label ?? `${Math.round(clampedValue)}%`;

    const colourClass = COLOUR_MAP[colour] ?? COLOUR_MAP.red;

    if (variant === 'circle') {
      const circleSize = CIRCLE_SIZES[size];
      const strokeWidth = STROKE_WIDTHS[size];
      const radius = (circleSize - strokeWidth) / 2;
      const circumference = 2 * Math.PI * radius;
      const offset = isIndeterminate
        ? circumference * 0.75
        : circumference - (clampedValue / 100) * circumference;

      return (
        <div
          ref={ref}
          className={[
            styles.wrapper,
            colourClass,
            isIndeterminate ? styles.indeterminate : '',
            className ?? '',
          ]
            .filter(Boolean)
            .join(' ')}
          role="progressbar"
          aria-valuenow={isIndeterminate ? undefined : clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={rest['aria-label'] ?? 'Progress'}
          {...rest}
        >
          <svg
            className={styles.circle}
            width={circleSize}
            height={circleSize}
            viewBox={`0 0 ${circleSize} ${circleSize}`}
          >
            <circle
              className={styles.circleBg}
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <circle
              className={styles.circleFill}
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
            {showLabel && !isIndeterminate && (
              <text
                className={styles.circleLabel}
                x="50%"
                y="50%"
                transform={`rotate(90, ${circleSize / 2}, ${circleSize / 2})`}
                fontSize={size === 'sm' ? 10 : size === 'md' ? 14 : 18}
              >
                {displayLabel}
              </text>
            )}
          </svg>
        </div>
      );
    }

    /* Bar variant */
    const trackClass = size === 'sm' ? styles.smTrack : size === 'lg' ? styles.lgTrack : styles.mdTrack;

    return (
      <div
        ref={ref}
        className={[
          styles.wrapper,
          styles.wrapperFullWidth,
          colourClass,
          isIndeterminate ? styles.indeterminate : '',
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={rest['aria-label'] ?? 'Progress'}
        {...rest}
      >
        <div className={[styles.track, trackClass].join(' ')}>
          <div
            className={styles.fill}
            style={
              isIndeterminate ? undefined : { width: `${clampedValue}%` }
            }
          />
        </div>
        {showLabel && !isIndeterminate && (
          <span className={styles.label}>{displayLabel}</span>
        )}
      </div>
    );
  },
);
