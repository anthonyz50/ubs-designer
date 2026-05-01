import { default as React } from 'react';

/**
 * Link variant options following UBS brand guidelines.
 * - `inline`: Within body text, underlined
 * - `standalone`: Standalone link with arrow indicator
 * - `external`: External link with outbound icon indicator
 */
export type LinkVariant = 'inline' | 'standalone' | 'external';
export interface LinksProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Visual variant of the link. @default 'inline' */
    variant?: LinkVariant;
    /** Optional icon element rendered before the label. */
    icon?: React.ReactNode;
    /** Link content. */
    children: React.ReactNode;
}
/**
 * UBS Design System Link component.
 *
 * Implements UBS brand link styling:
 * - UBS Red (#E60000) for link colour
 * - Hover state uses Bordeaux I (#BD000C)
 * - Underline for inline variant
 * - Arrow indicator for standalone variant
 * - External icon indicator for external links
 * - WCAG 2.2 AA compliant focus indicators
 *
 * @example
 * ```tsx
 * <Links href="/about" variant="inline">Learn more</Links>
 *
 * <Links href="/services" variant="standalone">View services</Links>
 *
 * <Links href="https://external.com" variant="external">External site</Links>
 * ```
 */
export declare const Links: React.ForwardRefExoticComponent<LinksProps & React.RefAttributes<HTMLAnchorElement>>;
