import { default as React } from 'react';

/** A single navigation item within the Navbar. */
export interface NavbarItem {
    /** Display label for the navigation link. */
    label: string;
    /** URL the navigation link points to. */
    href: string;
    /** Whether this item represents the current page. */
    active?: boolean;
    /** Optional icon element rendered before the label. */
    icon?: React.ReactNode;
}
/** Visual variant of the navbar. */
export type NavbarVariant = 'light' | 'dark';
/**
 * Props for the {@link Navbar} component.
 */
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    /** Logo or brand element rendered on the left. */
    logo?: React.ReactNode;
    /** Navigation items displayed in the centre. */
    items?: NavbarItem[];
    /** Action elements (buttons, avatars, etc.) rendered on the right. */
    actions?: React.ReactNode;
    /** Whether the navbar sticks to the top of the viewport. @default false */
    sticky?: boolean;
    /** Visual variant controlling the colour scheme. @default 'light' */
    variant?: NavbarVariant;
}
/**
 * Top-level navigation bar following UBS brand guidelines.
 *
 * @example
 * ```tsx
 * <Navbar
 *   logo={<img src="/logo.svg" alt="UBS" />}
 *   items={[
 *     { label: 'Home', href: '/', active: true },
 *     { label: 'About', href: '/about' },
 *   ]}
 *   actions={<Button>Login</Button>}
 *   sticky
 *   variant="light"
 * />
 * ```
 */
export declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
