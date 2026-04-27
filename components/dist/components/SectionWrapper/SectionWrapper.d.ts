import { default as React } from 'react';

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
export declare const SectionWrapper: React.ForwardRefExoticComponent<SectionWrapperProps & React.RefAttributes<HTMLElement>>;
