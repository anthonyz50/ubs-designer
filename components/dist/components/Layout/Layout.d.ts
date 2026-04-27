import { default as React } from 'react';

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
export declare const Layout: React.ForwardRefExoticComponent<LayoutProps & React.RefAttributes<HTMLDivElement>>;
