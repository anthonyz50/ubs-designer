import React, { forwardRef, useState, useCallback, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

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
export const Navbar = forwardRef<HTMLElement, NavbarProps>(function Navbar(
  {
    logo,
    items = [],
    actions,
    sticky = false,
    variant = 'light',
    className,
    ...rest
  },
  ref,
) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  /* Close on Escape */
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [mobileOpen, closeMobile]);

  const classNames = [
    styles.navbar,
    styles[variant],
    sticky ? styles.sticky : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <nav ref={ref} className={classNames} {...rest}>
        {logo && <div className={styles.logo}>{logo}</div>}

        {/* Desktop navigation */}
        <ul className={styles.desktopNav}>
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={[
                  styles.navItem,
                  item.active ? styles.navItemActive : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.icon && (
                  <span className={styles.navItemIcon}>{item.icon}</span>
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {actions && <div className={styles.actions}>{actions}</div>}

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          className={[styles.hamburger, mobileOpen ? styles.hamburgerOpen : '']
            .filter(Boolean)
            .join(' ')}
          onClick={toggleMobile}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className={styles.hamburgerBar} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={[styles.overlay, mobileOpen ? styles.overlayOpen : '']
          .filter(Boolean)
          .join(' ')}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile slide-out panel */}
      <div
        ref={panelRef}
        className={[
          styles.mobilePanel,
          mobileOpen ? styles.mobilePanelOpen : '',
          variant === 'light' ? styles.mobilePanelLight : styles.mobilePanelDark,
        ]
          .filter(Boolean)
          .join(' ')}
        role="dialog"
        aria-label="Navigation menu"
        aria-hidden={!mobileOpen}
      >
        <ul className={styles.mobileNav}>
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={[
                  styles.mobileNavItem,
                  item.active ? styles.mobileNavItemActive : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-current={item.active ? 'page' : undefined}
                onClick={closeMobile}
              >
                {item.icon && (
                  <span className={styles.navItemIcon}>{item.icon}</span>
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {actions && <div className={styles.mobileActions}>{actions}</div>}
      </div>
    </>
  );
});
