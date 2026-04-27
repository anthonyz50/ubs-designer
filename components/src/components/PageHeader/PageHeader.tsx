import React, { forwardRef } from 'react';
import styles from './PageHeader.module.css';

/** Breadcrumb item definition. */
export interface PageHeaderBreadcrumb {
  /** Display label. */
  label: string;
  /** Optional URL. Last item is treated as current page (no link). */
  href?: string;
}

/** PageHeader visual variant. */
export type PageHeaderVariant = 'default' | 'impulse';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Page title, rendered at keyline size. */
  title: string;
  /** Optional subtitle, rendered at infoline size. */
  subtitle?: string;
  /** Breadcrumb trail above the title. */
  breadcrumbs?: PageHeaderBreadcrumb[];
  /** Actions area (buttons, etc.) aligned to the right. */
  actions?: React.ReactNode;
  /** Visual variant. 'impulse' adds the UBS Red left border. @default 'default' */
  variant?: PageHeaderVariant;
}

/**
 * UBS Design System PageHeader component.
 *
 * A composite layout pattern for page-level headers combining:
 * - Breadcrumb navigation
 * - Keyline title + infoline subtitle
 * - Optional impulse line (UBS Red left border)
 * - Right-aligned actions area
 *
 * @example
 * ```tsx
 * <PageHeader
 *   title="Portfolio Overview"
 *   subtitle="Your current holdings and performance"
 *   variant="impulse"
 *   breadcrumbs={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Wealth Management', href: '/wm' },
 *     { label: 'Portfolio Overview' },
 *   ]}
 *   actions={<Button variant="primary">New Transaction</Button>}
 * />
 * ```
 */
export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  (
    {
      title,
      subtitle,
      breadcrumbs,
      actions,
      variant = 'default',
      className,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      styles.pageHeader,
      variant === 'impulse' ? styles.impulse : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <header ref={ref} className={classNames} {...rest}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <span key={index} className={styles.breadcrumbItem}>
                  {index > 0 && (
                    <span className={styles.breadcrumbSeparator} aria-hidden="true">
                      /
                    </span>
                  )}
                  {isLast || !crumb.href ? (
                    <span className={styles.breadcrumbCurrent} aria-current={isLast ? 'page' : undefined}>
                      {crumb.label}
                    </span>
                  ) : (
                    <a href={crumb.href} className={styles.breadcrumbLink}>
                      {crumb.label}
                    </a>
                  )}
                </span>
              );
            })}
          </nav>
        )}

        <div className={styles.container}>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>

          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      </header>
    );
  }
);

PageHeader.displayName = 'PageHeader';
