/**
 * @module Divider
 * @description Horizontal or vertical separator line following UBS brand guidelines.
 *
 * Defaults to Gray I (#CCCABC) colour, 1px thickness, and 16px spacing.
 *
 * @example
 * ```tsx
 * <Divider />
 * <Divider orientation="vertical" colour="#5A5D5C" thickness={2} spacing={24} />
 * ```
 */
import { forwardRef, type CSSProperties, type HTMLAttributes } from 'react';
import styles from './Divider.module.css';

/** Divider orientation. */
export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Direction of the divider. Defaults to `'horizontal'`. */
  orientation?: DividerOrientation;
  /** Line colour. Defaults to Gray I (#CCCABC). */
  colour?: string;
  /** Line thickness in pixels. Defaults to `1`. */
  thickness?: number;
  /** Spacing (margin) on both sides in pixels. Defaults to `16`. */
  spacing?: number;
}

/**
 * Divider — horizontal or vertical separator.
 *
 * Uses UBS Gray I as the default colour. Renders as a semantic `<hr>` element
 * with appropriate ARIA attributes for vertical orientation.
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      colour,
      thickness,
      spacing,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const classes = [styles.divider, styles[orientation], className]
      .filter(Boolean)
      .join(' ');

    const customStyle: CSSProperties = {
      ...(colour ? { backgroundColor: colour } : {}),
      ...(thickness != null ? { '--divider-thickness': `${thickness}px` } : {}),
      ...(spacing != null ? { '--divider-spacing': `${spacing}px` } : {}),
      ...style,
    } as CSSProperties;

    return (
      <hr
        ref={ref}
        className={classes}
        style={customStyle}
        role="separator"
        aria-orientation={orientation}
        {...rest}
      />
    );
  },
);

Divider.displayName = 'Divider';

export default Divider;
