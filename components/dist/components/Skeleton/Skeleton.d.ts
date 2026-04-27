import { default as React } from 'react';

/** Skeleton shape variant. */
export type SkeletonVariant = 'text' | 'circle' | 'rect';
/**
 * Props for the {@link Skeleton} component.
 */
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Shape variant of the skeleton placeholder. @default 'rect' */
    variant?: SkeletonVariant;
    /** Width of the skeleton. Accepts any CSS value. */
    width?: string | number;
    /** Height of the skeleton. Accepts any CSS value. */
    height?: string | number;
    /** Number of text lines to render (only used with `text` variant). @default 3 */
    lines?: number;
    /** Whether the shimmer animation is enabled. @default true */
    animate?: boolean;
}
/**
 * Skeleton loading placeholder following UBS brand guidelines.
 *
 * Uses Pastel I (#ECEBE4) as the base colour with a subtle shimmer animation.
 * Respects `prefers-reduced-motion` for accessibility.
 *
 * @example
 * ```tsx
 * <Skeleton variant="text" lines={3} />
 * <Skeleton variant="circle" width={48} height={48} />
 * <Skeleton variant="rect" width="100%" height={200} />
 * ```
 */
export declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;
