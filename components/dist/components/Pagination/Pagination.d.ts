import { default as React } from 'react';

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
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
