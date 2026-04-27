import React, { forwardRef, useMemo } from 'react';
import styles from './Pagination.module.css';

/** Size variant for pagination buttons. */
export type PaginationSize = 'sm' | 'md';

/**
 * Props for the {@link Pagination} component.
 */
export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Total number of pages. */
  totalPages: number;
  /** Currently active page (1-indexed). */
  currentPage: number;
  /** Callback fired when a page is selected. */
  onChange: (page: number) => void;
  /** Number of sibling pages shown on each side of the current page. @default 1 */
  siblingCount?: number;
  /** Whether to show first/last page buttons. @default false */
  showFirstLast?: boolean;
  /** Whether to show previous/next arrow buttons. @default true */
  showPrevNext?: boolean;
  /** Size variant. @default 'md' */
  size?: PaginationSize;
}

/** Internal helper: generate the page range array with ellipsis markers. */
function buildPageRange(
  totalPages: number,
  currentPage: number,
  siblingCount: number,
): (number | 'ellipsis-start' | 'ellipsis-end')[] {
  const range: (number | 'ellipsis-start' | 'ellipsis-end')[] = [];

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  if (totalPages <= (siblingCount * 2 + 3)) {
    /* Show all pages */
    for (let i = 1; i <= totalPages; i++) range.push(i);
    return range;
  }

  /* Always show first page */
  range.push(1);

  if (showLeftEllipsis) {
    range.push('ellipsis-start');
  } else {
    for (let i = 2; i < leftSibling; i++) range.push(i);
  }

  for (let i = leftSibling; i <= rightSibling; i++) {
    if (i !== 1 && i !== totalPages) range.push(i);
  }

  if (showRightEllipsis) {
    range.push('ellipsis-end');
  } else {
    for (let i = rightSibling + 1; i < totalPages; i++) range.push(i);
  }

  /* Always show last page */
  if (totalPages > 1) range.push(totalPages);

  return range;
}

/**
 * Pagination component following UBS brand guidelines.
 *
 * @example
 * ```tsx
 * <Pagination
 *   totalPages={20}
 *   currentPage={5}
 *   onChange={setPage}
 *   showPrevNext
 * />
 * ```
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  function Pagination(
    {
      totalPages,
      currentPage,
      onChange,
      siblingCount = 1,
      showFirstLast = false,
      showPrevNext = true,
      size = 'md',
      className,
      ...rest
    },
    ref,
  ) {
    const pages = useMemo(
      () => buildPageRange(totalPages, currentPage, siblingCount),
      [totalPages, currentPage, siblingCount],
    );

    const classNames = [styles.pagination, styles[size], className ?? '']
      .filter(Boolean)
      .join(' ');

    return (
      <nav ref={ref} className={classNames} aria-label="Pagination" {...rest}>
        {showFirstLast && (
          <button
            type="button"
            className={styles.arrow}
            disabled={currentPage <= 1}
            onClick={() => onChange(1)}
            aria-label="First page"
          >
            &#171;
          </button>
        )}

        {showPrevNext && (
          <button
            type="button"
            className={styles.arrow}
            disabled={currentPage <= 1}
            onClick={() => onChange(currentPage - 1)}
            aria-label="Previous page"
          >
            &#8249;
          </button>
        )}

        {pages.map((item) => {
          if (typeof item === 'string') {
            return (
              <span key={item} className={styles.ellipsis} aria-hidden="true">
                &hellip;
              </span>
            );
          }

          const isActive = item === currentPage;
          return (
            <button
              key={item}
              type="button"
              className={[styles.page, isActive ? styles.active : '']
                .filter(Boolean)
                .join(' ')}
              onClick={() => onChange(item)}
              aria-label={`Page ${item}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {item}
            </button>
          );
        })}

        {showPrevNext && (
          <button
            type="button"
            className={styles.arrow}
            disabled={currentPage >= totalPages}
            onClick={() => onChange(currentPage + 1)}
            aria-label="Next page"
          >
            &#8250;
          </button>
        )}

        {showFirstLast && (
          <button
            type="button"
            className={styles.arrow}
            disabled={currentPage >= totalPages}
            onClick={() => onChange(totalPages)}
            aria-label="Last page"
          >
            &#187;
          </button>
        )}
      </nav>
    );
  },
);
