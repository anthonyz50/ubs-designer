import React, { forwardRef, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styles from './Timer.module.css';

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
 * Format seconds into a display string.
 */
function formatTime(totalSeconds: number, fmt: TimerFormat): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;

  const pad = (n: number) => String(n).padStart(2, '0');

  switch (fmt) {
    case 'hh:mm:ss':
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    case 'ss':
      return `${s}`;
    case 'mm:ss':
    default:
      return `${pad(minutes)}:${pad(seconds)}`;
  }
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
export const Timer = forwardRef<HTMLDivElement, TimerProps>(
  (
    {
      initialSeconds = 0,
      direction = 'down',
      autoStart = false,
      onComplete,
      onTick,
      format = 'mm:ss',
      variant = 'default',
      className,
      ...rest
    },
    ref,
  ) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [state, setState] = useState<TimerState>(autoStart ? 'running' : 'paused');
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const onCompleteRef = useRef(onComplete);
    const onTickRef = useRef(onTick);

    // Keep refs up-to-date
    useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);
    useEffect(() => { onTickRef.current = onTick; }, [onTick]);

    const clearTimer = useCallback(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, []);

    useEffect(() => {
      if (state !== 'running') {
        clearTimer();
        return;
      }

      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          const next = direction === 'down' ? prev - 1 : prev + 1;

          if (direction === 'down' && next <= 0) {
            clearTimer();
            setState('expired');
            onCompleteRef.current?.();
            return 0;
          }

          onTickRef.current?.(next);
          return next;
        });
      }, 1000);

      return clearTimer;
    }, [state, direction, clearTimer]);

    const displayTime = useMemo(() => formatTime(seconds, format), [seconds, format]);

    const stateClass =
      state === 'expired'
        ? styles.expired
        : state === 'paused'
          ? styles.paused
          : styles.running;

    return (
      <div
        ref={ref}
        role="timer"
        aria-live="polite"
        aria-atomic="true"
        aria-label={`Timer: ${displayTime}, ${state}`}
        className={[
          styles.timer,
          variant === 'compact' ? styles.compact : styles.default,
          stateClass,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        <span className={styles.display} aria-hidden="true">
          {displayTime}
        </span>
        {state === 'expired' && variant !== 'compact' && (
          <span className={styles.expiredLabel}>Expired</span>
        )}
      </div>
    );
  },
);

Timer.displayName = 'Timer';
