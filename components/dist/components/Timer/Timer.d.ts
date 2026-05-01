import { default as React } from 'react';

/** Timer direction. */
export type TimerDirection = 'up' | 'down';
/** Timer display format. */
export type TimerFormat = 'hh:mm:ss' | 'mm:ss' | 'ss';
/** Timer display variant. */
export type TimerVariant = 'default' | 'compact';
/** Timer running state. */
export type TimerState = 'running' | 'paused' | 'expired';
export interface TimerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Starting seconds for countdown, or initial value for count-up. @default 0 */
    initialSeconds?: number;
    /** Count direction. @default 'down' */
    direction?: TimerDirection;
    /** Whether to start immediately on mount. @default false */
    autoStart?: boolean;
    /** Callback when countdown reaches zero. */
    onComplete?: () => void;
    /** Callback on each tick with current seconds. */
    onTick?: (seconds: number) => void;
    /** Display format. @default 'mm:ss' */
    format?: TimerFormat;
    /** Size variant. @default 'default' */
    variant?: TimerVariant;
}
/**
 * Timer — Countdown or count-up timer display.
 *
 * Displays formatted time (HH:MM:SS, MM:SS, or SS) with running,
 * paused, and expired states.
 *
 * @example
 * ```tsx
 * <Timer
 *   initialSeconds={300}
 *   direction="down"
 *   autoStart
 *   format="mm:ss"
 *   onComplete={() => alert('Time is up!')}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Timer
 *   direction="up"
 *   autoStart
 *   format="hh:mm:ss"
 *   variant="compact"
 * />
 * ```
 */
export declare const Timer: React.ForwardRefExoticComponent<TimerProps & React.RefAttributes<HTMLDivElement>>;
