import React, { forwardRef } from 'react';
import styles from './Impulse.module.css';

/** ISO A-series paper formats for sizing the impulse line. */
export type ImpulseFormat = 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8';

export interface ImpulseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * ISO format to determine line width and spacing.
   * Larger formats produce a thicker impulse line.
   * @default 'A4'
   */
  format?: ImpulseFormat;
  /** Content displayed next to the impulse line. */
  children?: React.ReactNode;
}

/**
 * Impulse line width tokens per ISO format (in px).
 * The impulse line scales with the format.
 */
const FORMAT_LINE_WIDTH: Record<ImpulseFormat, number> = {
  A0: 8,
  A1: 7,
  A2: 6,
  A3: 5,
  A4: 4,
  A5: 3,
  A6: 3,
  A7: 2,
  A8: 2,
};

/**
 * Spacing between impulse line and content per format (in px).
 */
const FORMAT_SPACING: Record<ImpulseFormat, number> = {
  A0: 24,
  A1: 20,
  A2: 18,
  A3: 16,
  A4: 14,
  A5: 12,
  A6: 10,
  A7: 8,
  A8: 6,
};

/**
 * UBS Design System Impulse component.
 *
 * The distinctive UBS red vertical line placed next to text to create
 * visual emphasis and brand recognition.
 *
 * Brand rules enforced:
 * - Always uses UBS Red (#E60000)
 * - Line must not extend beyond the baseline of the second line of text
 * - Must not be centred with a keyline
 * - Width and spacing are proportional to the ISO format
 *
 * @example
 * ```tsx
 * <Impulse format="A4">
 *   <Typography variant="leadText1">
 *     Breaking through complexity to deliver clarity.
 *   </Typography>
 * </Impulse>
 * ```
 */
export const Impulse = forwardRef<HTMLDivElement, ImpulseProps>(
  (
    {
      format = 'A4',
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const lineWidth = FORMAT_LINE_WIDTH[format];
    const spacing = FORMAT_SPACING[format];

    const cssVars = {
      '--impulse-line-width': `${lineWidth}px`,
      '--impulse-spacing': `${spacing}px`,
      ...style,
    } as React.CSSProperties;

    const classNames = [
      styles.impulse,
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        style={cssVars}
        {...rest}
      >
        <span className={styles.line} aria-hidden="true" />
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
);

Impulse.displayName = 'Impulse';
