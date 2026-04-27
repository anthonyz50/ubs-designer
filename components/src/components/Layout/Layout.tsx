import React, { forwardRef } from 'react';
import styles from './Layout.module.css';

/** ISO A-series paper formats. */
export type LayoutFormat = 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * ISO paper format to derive margins from.
   * Margins are proportional to the format size per UBS layout guidelines.
   * @default 'A4'
   */
  format?: LayoutFormat;
  /** Page content. */
  children?: React.ReactNode;
}

/**
 * UBS margin tokens per ISO format (in mm, mapped to rem for screen).
 * Based on UBS layout grid specifications.
 * Margins scale with format: larger formats get wider margins.
 */
const FORMAT_MARGINS: Record<LayoutFormat, { top: number; right: number; bottom: number; left: number }> = {
  A0: { top: 40, right: 40, bottom: 40, left: 40 },
  A1: { top: 35, right: 35, bottom: 35, left: 35 },
  A2: { top: 28, right: 28, bottom: 28, left: 28 },
  A3: { top: 22, right: 22, bottom: 22, left: 22 },
  A4: { top: 18, right: 18, bottom: 18, left: 18 },
  A5: { top: 14, right: 14, bottom: 14, left: 14 },
  A6: { top: 10, right: 10, bottom: 10, left: 10 },
  A7: { top: 8, right: 8, bottom: 8, left: 8 },
  A8: { top: 6, right: 6, bottom: 6, left: 6 },
};

/**
 * UBS Design System Layout component.
 *
 * Provides page-level layout with UBS-standard margins based on ISO format.
 * Ensures consistent spacing and alignment across all page sizes.
 *
 * Guidelines:
 * - Margins are proportional to the ISO format
 * - Content flows left-aligned (no right-alignment or justification)
 * - Uses the UBS type system font stack
 *
 * @example
 * ```tsx
 * <Layout format="A4">
 *   <Typography variant="keyline">Page Title</Typography>
 *   <Typography variant="copyText">Content goes here.</Typography>
 * </Layout>
 * ```
 */
export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
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
    const margins = FORMAT_MARGINS[format];

    // Convert mm to rem (approximate: 1mm ≈ 0.25rem at 16px base)
    const marginStyle: React.CSSProperties = {
      paddingTop: `${margins.top * 0.25}rem`,
      paddingRight: `${margins.right * 0.25}rem`,
      paddingBottom: `${margins.bottom * 0.25}rem`,
      paddingLeft: `${margins.left * 0.25}rem`,
      ...style,
    };

    const classNames = [
      styles.layout,
      styles[`format-${format.toLowerCase()}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        style={marginStyle}
        data-format={format}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Layout.displayName = 'Layout';
