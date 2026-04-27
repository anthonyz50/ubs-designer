import React, { forwardRef, useState, useMemo } from 'react';
import styles from './Breadcrumbs.module.css';

/** A single breadcrumb item. */
export interface BreadcrumbItem {
  /** Display label for the breadcrumb. */
  label: string;
  /** URL the breadcrumb links to. Omit for the current page. */
  href?: string;
}

/**
 * Props for the {@link Breadcrumbs} component.
 */
export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  /** Ordered list of breadcrumb items. The last item is treated as the current page. */
  items: BreadcrumbItem[];
  /** Separator element rendered between items. @default "/" */
  separator?: React.ReactNode;
  /** Maximum number of visible items before collapsing middle items. */
  maxItems?: number;
}

/**
 * Breadcrumb navigation following UBS brand guidelines.
 *
 * Collapses middle items with an ellipsis button when `maxItems` is exceeded.
 *
 * @example
 * ```tsx
 * <Breadcrumbs
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: 'Widget' },
 *   ]}
 *   maxItems={3}
 * />
 * ```
 */
export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  function Breadcrumbs(
    { items, separator = '/', maxItems, className, ...rest },
    ref,
  ) {
    const [expanded, setExpanded] = useState(false);

    const visibleItems = useMemo(() => {
      if (!maxItems || items.length <= maxItems || expanded) {
        return items.map((item, i) => ({ ...item, _collapsed: false, _key: i }));
      }

      /* Show first item, ellipsis, then last (maxItems - 1) items */
      const tail = maxItems - 1;
      const first = items[0];
      const lastItems = items.slice(items.length - tail);

      return [
        { ...first, _collapsed: false, _key: 0 },
        {
          label: '…',
          href: undefined,
          _collapsed: true,
          _key: -1,
        },
        ...lastItems.map((item, i) => ({
          ...item,
          _collapsed: false,
          _key: items.length - tail + i,
        })),
      ];
    }, [items, maxItems, expanded]);

    const classNames = [styles.nav, className ?? ''].filter(Boolean).join(' ');

    return (
      <nav ref={ref} className={classNames} aria-label="Breadcrumb" {...rest}>
        <ol className={styles.list}>
          {visibleItems.map((item, index) => {
            const isLast =
              index === visibleItems.length - 1 && !item._collapsed;

            return (
              <li key={item._key} className={styles.item}>
                {index > 0 && (
                  <span className={styles.separator} aria-hidden="true">
                    {separator}
                  </span>
                )}

                {item._collapsed ? (
                  <button
                    type="button"
                    className={styles.ellipsis}
                    onClick={() => setExpanded(true)}
                    aria-label="Show all breadcrumbs"
                  >
                    …
                  </button>
                ) : isLast ? (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                ) : item.href ? (
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                ) : (
                  <span className={styles.current}>{item.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  },
);
