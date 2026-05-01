import React, { forwardRef, useState, useCallback, useRef, useEffect } from 'react';
import styles from './MastheadNavigation.module.css';

/** Masthead navigation variant. */
export type MastheadVariant = 'primary' | 'secondary';

export interface MastheadChild {
  /** Display label. */
  label: string;
  /** Link destination. */
  href: string;
  /** Optional description text. */
  description?: string;
}

export interface MastheadNavItem {
  /** Display label. */
  label: string;
  /** Link destination (required for items without children). */
  href?: string;
  /** Whether this item is currently active. */
  active?: boolean;
  /** Child items for mega-menu dropdown. */
  children?: MastheadChild[];
}

export interface MastheadNavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** Navigation items. */
  items: MastheadNavItem[];
  /** Visual variant. @default 'primary' */
  variant?: MastheadVariant;
}

/**
 * UBS Design System MastheadNavigation component.
 *
 * Primary horizontal navigation bar for top-level site navigation.
 * Supports active item indicators, hover states, and mega-menu
 * dropdowns for items with children.
 *
 * @example
 * ```tsx
 * <MastheadNavigation
 *   items={[
 *     { label: 'Home', href: '/', active: true },
 *     {
 *       label: 'Services',
 *       children: [
 *         { label: 'Wealth Management', href: '/wealth', description: 'Private banking solutions' },
 *         { label: 'Investment Banking', href: '/ib', description: 'Capital markets' },
 *       ],
 *     },
 *     { label: 'About', href: '/about' },
 *   ]}
 *   variant="primary"
 * />
 * ```
 */
export const MastheadNavigation = forwardRef<HTMLElement, MastheadNavigationProps>(
  (
    {
      items,
      variant = 'primary',
      className,
      ...rest
    },
    ref
  ) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const navRef = useRef<HTMLElement | null>(null);

    const classNames = [
      styles.mastheadNavigation,
      styles[variant],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const handleItemClick = useCallback((index: number, hasChildren: boolean) => {
      if (hasChildren) {
        setOpenIndex(prev => (prev === index ? null : index));
      }
    }, []);

    const handleKeyDown = useCallback((event: React.KeyboardEvent, index: number, hasChildren: boolean) => {
      if (event.key === 'Escape') {
        setOpenIndex(null);
      }
      if ((event.key === 'Enter' || event.key === ' ') && hasChildren) {
        event.preventDefault();
        setOpenIndex(prev => (prev === index ? null : index));
      }
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
          setOpenIndex(null);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const setRefs = useCallback(
      (node: HTMLElement | null) => {
        navRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      },
      [ref]
    );

    return (
      <nav
        ref={setRefs}
        className={classNames}
        aria-label="Masthead navigation"
        {...rest}
      >
        <div className={styles.container}>
          <ul className={styles.navList} role="menubar">
            {items.map((item, index) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openIndex === index;

              return (
                <li
                  key={index}
                  className={[
                    styles.navItem,
                    item.active ? styles.navItemActive : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  role="none"
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      className={[
                        styles.navTrigger,
                        item.active ? styles.navTriggerActive : '',
                        isOpen ? styles.navTriggerOpen : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onClick={() => handleItemClick(index, true)}
                      onKeyDown={(e) => handleKeyDown(e, index, true)}
                    >
                      {item.label}
                      <span className={styles.dropdownChevron} aria-hidden="true">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 3.75L5 6.25L7.5 3.75"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className={[
                        styles.navLink,
                        item.active ? styles.navLinkActive : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      role="menuitem"
                      aria-current={item.active ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  )}

                  {/* Mega-menu dropdown */}
                  {hasChildren && isOpen && (
                    <div className={styles.megaMenu} role="menu">
                      <ul className={styles.megaMenuList}>
                        {item.children!.map((child, childIndex) => (
                          <li key={childIndex} role="none">
                            <a
                              href={child.href}
                              className={styles.megaMenuItem}
                              role="menuitem"
                              onClick={() => setOpenIndex(null)}
                            >
                              <span className={styles.megaMenuLabel}>{child.label}</span>
                              {child.description && (
                                <span className={styles.megaMenuDescription}>{child.description}</span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
);

MastheadNavigation.displayName = 'MastheadNavigation';
