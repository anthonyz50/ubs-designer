import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

/** CTA style variants. */
export type CTAVariant = 'button' | 'text' | 'url';
/** CTA size options. */
export type CTASize = 'sm' | 'md' | 'lg';
type NativeProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;
export interface CTAProps extends Omit<NativeProps, 'children'> {
    /** CTA style variant. Defaults to `'button'`. */
    variant?: CTAVariant;
    /** Display text. Required. */
    label: string;
    /** Link URL. When provided, renders an `<a>`. Otherwise renders a `<button>`. */
    href?: string;
    /** Click handler. */
    onClick?: (e: React.MouseEvent) => void;
    /** Custom icon to replace the default arrow. Pass `null` to hide the icon. */
    icon?: ReactNode;
    /** Size. Defaults to `'md'`. */
    size?: CTASize;
    /** Enable arrow slide animation on hover. Defaults to `false`. */
    animated?: boolean;
}
/**
 * CTA — UBS Call-to-Action component.
 *
 * Renders as an `<a>` when `href` is provided, otherwise as a `<button>`.
 * Automatically applies the correct arrow stroke weight for the chosen size.
 */
export declare const CTA: import('react').ForwardRefExoticComponent<CTAProps & import('react').RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export default CTA;
