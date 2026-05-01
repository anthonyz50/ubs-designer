import React, { forwardRef } from 'react';
import styles from './Footer.module.css';

/** Footer visual variant. */
export type FooterVariant = 'standard' | 'minimal';

export interface PageFooterLink {
  /** Link display text. */
  label: string;
  /** Link destination URL. */
  href: string;
  /** Whether the link opens in a new tab. @default false */
  external?: boolean;
}

export interface FooterColumn {
  /** Column heading. */
  title: string;
  /** Links within this column. */
  links: PageFooterLink[];
}

export interface PageFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo element to display in the footer. */
  logo?: React.ReactNode;
  /** Array of link columns for the main footer area. */
  columns?: FooterColumn[];
  /** Legal text displayed in the bottom bar. */
  legal?: React.ReactNode;
  /** Copyright text displayed in the bottom bar. */
  copyright?: string;
  /** Visual variant of the footer. @default 'standard' */
  variant?: FooterVariant;
}

/**
 * UBS Design System Footer component.
 *
 * Standard page footer with logo, link columns, legal text,
 * and copyright information. Supports standard and minimal variants.
 *
 * @example
 * ```tsx
 * <Footer
 *   logo={<Logo variant="keys" />}
 *   columns={[
 *     {
 *       title: 'Services',
 *       links: [
 *         { label: 'Wealth Management', href: '/wealth' },
 *         { label: 'Investment Banking', href: '/ib' },
 *       ],
 *     },
 *   ]}
 *   legal="This is for informational purposes only."
 *   copyright="© 2024 UBS Group AG. All rights reserved."
 * />
 * ```
 */
export const PageFooter = forwardRef<HTMLElement, PageFooterProps>(
  (
    {
      logo,
      columns,
      legal,
      copyright,
      variant = 'standard',
      className,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      styles.footer,
      styles[variant],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <footer ref={ref} className={classNames} role="contentinfo" {...rest}>
        {variant === 'standard' && (
          <div className={styles.main}>
            <div className={styles.container}>
              {logo && (
                <div className={styles.logoArea}>{logo}</div>
              )}
              {columns && columns.length > 0 && (
                <nav className={styles.columns} aria-label="Footer navigation">
                  {columns.map((column, colIndex) => (
                    <div key={colIndex} className={styles.column}>
                      <h3 className={styles.columnTitle}>{column.title}</h3>
                      <ul className={styles.columnLinks} role="list">
                        {column.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.href}
                              className={styles.link}
                              {...(link.external
                                ? {
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    'aria-label': `${link.label} (opens in new tab)`,
                                  }
                                : {})}
                            >
                              {link.label}
                              {link.external && (
                                <span className={styles.externalIcon} aria-hidden="true">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9 6.5V9.5C9 10.0523 8.55228 10.5 8 10.5H2.5C1.94772 10.5 1.5 10.0523 1.5 9.5V4C1.5 3.44772 1.94772 3 2.5 3H5.5"
                                      stroke="currentColor"
                                      strokeWidth="1.25"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.5 1.5H10.5V4.5"
                                      stroke="currentColor"
                                      strokeWidth="1.25"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5 7L10.5 1.5"
                                      stroke="currentColor"
                                      strokeWidth="1.25"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              )}
            </div>
          </div>
        )}
        <div className={styles.bottomBar}>
          <div className={styles.container}>
            {legal && <div className={styles.legal}>{legal}</div>}
            {copyright && <p className={styles.copyright}>{copyright}</p>}
          </div>
        </div>
      </footer>
    );
  }
);

PageFooter.displayName = 'PageFooter';
