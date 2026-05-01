import { default as React } from 'react';

/** Header visual variant. */
export type HeaderVariant = 'standard' | 'compact';
export interface HeaderNavItem {
    /** Display label. */
    label: string;
    /** Link destination. */
    href: string;
    /** Whether this item is currently active. */
    active?: boolean;
}
export interface HeaderUserMenu {
    /** User display name. */
    name: string;
    /** User avatar element (optional). */
    avatar?: React.ReactNode;
    /** Menu items in the user dropdown. */
    items: {
        label: string;
        href?: string;
        onClick?: () => void;
    }[];
}
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    /** Logo element to display. */
    logo?: React.ReactNode;
    /** Navigation items displayed in the header. */
    navItems?: HeaderNavItem[];
    /** User menu configuration. */
    userMenu?: HeaderUserMenu;
    /** Optional action elements (buttons, search, etc.) rendered before user menu. */
    actions?: React.ReactNode;
    /** Whether the header sticks to the top on scroll. @default false */
    sticky?: boolean;
    /** Visual variant of the header. @default 'standard' */
    variant?: HeaderVariant;
}
/**
 * UBS Design System Header component.
 *
 * Page header/masthead with logo, navigation, user area, and actions.
 * Responsive design collapses to a hamburger menu on mobile.
 *
 * @example
 * ```tsx
 * <Header
 *   logo={<Logo variant="keys" />}
 *   navItems={[
 *     { label: 'Home', href: '/', active: true },
 *     { label: 'Services', href: '/services' },
 *   ]}
 *   userMenu={{
 *     name: 'John Doe',
 *     items: [
 *       { label: 'Profile', href: '/profile' },
 *       { label: 'Sign out', onClick: handleSignOut },
 *     ],
 *   }}
 *   sticky
 * />
 * ```
 */
export declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
