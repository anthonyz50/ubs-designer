import React, { forwardRef, useState, useCallback } from 'react';
import styles from './Header.module.css';

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
  items: { label: string; href?: string; onClick?: () => void }[];
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
export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      logo,
      navItems,
      userMenu,
      actions,
      sticky = false,
      variant = 'standard',
      className,
      ...rest
    },
    ref
  ) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const toggleMobileMenu = useCallback(() => {
      setMobileMenuOpen(prev => !prev);
    }, []);

    const toggleUserMenu = useCallback(() => {
      setUserMenuOpen(prev => !prev);
    }, []);

    const classNames = [
      styles.header,
      styles[variant],
      sticky ? styles.sticky : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <header ref={ref} className={classNames} role="banner" {...rest}>
        <div className={styles.container}>
          {/* Logo */}
          {logo && <div className={styles.logo}>{logo}</div>}

          {/* Desktop Navigation */}
          {navItems && navItems.length > 0 && (
            <nav className={styles.desktopNav} aria-label="Main navigation">
              <ul className={styles.navList} role="list">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className={[
                        styles.navLink,
                        item.active ? styles.navLinkActive : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      aria-current={item.active ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Right side: actions + user menu */}
          <div className={styles.rightArea}>
            {actions && <div className={styles.actions}>{actions}</div>}

            {userMenu && (
              <div className={styles.userMenu}>
                <button
                  type="button"
                  className={styles.userMenuTrigger}
                  onClick={toggleUserMenu}
                  aria-expanded={userMenuOpen}
                  aria-haspopup="true"
                  aria-label={`User menu for ${userMenu.name}`}
                >
                  {userMenu.avatar && (
                    <span className={styles.userAvatar}>{userMenu.avatar}</span>
                  )}
                  <span className={styles.userName}>{userMenu.name}</span>
                  <span className={styles.chevron} aria-hidden="true">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {userMenuOpen && (
                  <ul className={styles.userDropdown} role="menu">
                    {userMenu.items.map((item, index) => (
                      <li key={index} role="none">
                        {item.href ? (
                          <a
                            href={item.href}
                            className={styles.userDropdownItem}
                            role="menuitem"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <button
                            type="button"
                            className={styles.userDropdownItem}
                            role="menuitem"
                            onClick={() => {
                              item.onClick?.();
                              setUserMenuOpen(false);
                            }}
                          >
                            {item.label}
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Mobile hamburger */}
            <button
              type="button"
              className={styles.hamburger}
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={[
                  styles.hamburgerIcon,
                  mobileMenuOpen ? styles.hamburgerOpen : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && navItems && navItems.length > 0 && (
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <ul className={styles.mobileNavList} role="list">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={[
                      styles.mobileNavLink,
                      item.active ? styles.mobileNavLinkActive : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-current={item.active ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    );
  }
);

Header.displayName = 'Header';
