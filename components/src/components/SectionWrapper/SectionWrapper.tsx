import React, { forwardRef } from 'react';
import styles from './SectionWrapper.module.css';

/** SectionWrapper padding sizes. */
export type SectionPadding = 'sm' | 'md' | 'lg';

/** SectionWrapper background options. */
export type SectionBackground = 'white' | 'pastel1' | 'pastel2';

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  /** Optional section title (rendered as h2, subheadline1 style). */
  title?: string;
  /** Optional subtitle below the title. */
  subtitle?: string;
  /** Section content. */
  children?: React.ReactNode;
  /** Padding size. @default 'md' */
  padding?: SectionPadding;
  /** Background colour. @default 'white' */
  background?: SectionBackground;
}

const PADDING_MAP: Record<SectionPadding, string> = {
  sm: styles.paddingSm,
  md: styles.paddingMd,
  lg: styles.paddingLg,
};

const BG_MAP: Record<SectionBackground, string> = {
  white: styles.bgWhite,
  pastel1: styles.bgPastel1,
  pastel2: styles.bgPastel2,
};

/**
 * UBS Design System SectionWrapper component.
 *
 * A layout pattern for page sections with:
 * - Optional title and subtitle
 * - Consistent padding (sm/md/lg)
 * - UBS brand background colour options
 * - Semantic <section> element with optional id for anchor links
 *
 * @example
 * ```tsx
 * <SectionWrapper
 *   title="Key Figures"
 *   subtitle="As of Q4 2025"
 *   padding="lg"
 *   background="pastel1"
 *   id="key-figures"
 * >
 *   <Grid columns={3}>...</Grid>
 * </SectionWrapper>
 * ```
 */
export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  (
    {
      title,
      subtitle,
      children,
      padding = 'md',
      background = 'white',
      className,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      styles.section,
      PADDING_MAP[padding],
      BG_MAP[background],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <section ref={ref} className={classNames} {...rest}>
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';
