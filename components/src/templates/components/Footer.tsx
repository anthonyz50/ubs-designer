/**
 * @module Footer
 * @description UBS branded footer for page templates.
 *
 * Multi-column link groups with logo and copyright text.
 * Uses Pastel I background per UBS brand guidelines.
 *
 * @example
 * ```tsx
 * <Footer
 *   links={[
 *     {
 *       group: 'Products',
 *       items: [
 *         { label: 'Wealth Management', href: '/wm' },
 *         { label: 'Investment Bank', href: '/ib' },
 *       ],
 *     },
 *   ]}
 *   copyright="© 2026 UBS Group AG. All rights reserved."
 *   showLogo
 * />
 * ```
 */
import React, { forwardRef } from 'react';
import { Logo } from '../../components/Logo';
import styles from './Footer.module.css';

/** A single footer link. */
export interface FooterLink {
  /** Display label. */
  label: string;
  /** Link URL. */
  href: string;
}

/** A group of footer links with a heading. */
export interface FooterLinkGroup {
  /** Group heading. */
  group: string;
  /** Links within this group. */
  items: FooterLink[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Link groups rendered in columns. */
  links?: FooterLinkGroup[];
  /** Copyright text rendered at the bottom. */
  copyright?: string;
  /** Whether to show the UBS logo. @default true */
  showLogo?: boolean;
}

/**
 * Footer — UBS branded page footer with multi-column links.
 */
export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ links = [], copyright, showLogo = true, className, ...rest }, ref) => {
    const classes = [styles.footer, className ?? ''].filter(Boolean).join(' ');

    return (
      <footer ref={ref} className={classes} {...rest}>
        <div className={styles.inner}>
          {/* Top section: logo + link columns */}
          <div className={styles.top}>
            {showLogo && (
              <div className={styles.logoArea}>
                <Logo variant="full" colour="black" size={100} />
              </div>
            )}

            {links.length > 0 && (
              <div className={styles.linkColumns}>
                {links.map((group) => (
                  <div key={group.group} className={styles.linkGroup}>
                    <h3 className={styles.groupTitle}>{group.group}</h3>
                    <ul className={styles.linkList}>
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <a href={item.href} className={styles.link}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom section: copyright */}
          {copyright && (
            <div className={styles.bottom}>
              <p className={styles.copyright}>{copyright}</p>
            </div>
          )}
        </div>
      </footer>
    );
  },
);

Footer.displayName = 'Footer';
