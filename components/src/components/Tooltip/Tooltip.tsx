import React, { useState, useRef, useCallback, useId } from 'react';
import styles from './Tooltip.module.css';

/** Tooltip position relative to the trigger element. */
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

/**
 * Props for the {@link Tooltip} component.
 */
export interface TooltipProps {
  /** Content displayed inside the tooltip. */
  content: React.ReactNode;
  /** Position of the tooltip relative to the trigger. @default 'top' */
  position?: TooltipPosition;
  /** Delay in milliseconds before the tooltip appears. @default 300 */
  delay?: number;
  /** Trigger element the tooltip is attached to. */
  children: React.ReactElement;
}

/**
 * Tooltip component following UBS brand guidelines.
 *
 * Shows on hover or focus with a configurable delay.
 * Uses a dark background with white text and an arrow pointing at the trigger.
 *
 * @example
 * ```tsx
 * <Tooltip content="More information" position="top">
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */
export function Tooltip({
  content,
  position = 'top',
  delay = 300,
  children,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const tooltipId = useId();

  const show = useCallback(() => {
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay]);

  const hide = useCallback(() => {
    clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {React.cloneElement(children, {
        'aria-describedby': visible ? tooltipId : undefined,
      })}
      <div
        id={tooltipId}
        role="tooltip"
        className={[
          styles.tooltip,
          styles[position],
          visible ? styles.visible : '',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-hidden={!visible}
      >
        <span className={styles.arrow} />
        {content}
      </div>
    </div>
  );
}
