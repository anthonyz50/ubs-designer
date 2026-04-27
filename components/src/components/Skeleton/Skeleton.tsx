import React, { forwardRef } from 'react';
import styles from './Skeleton.module.css';

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
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton(
    {
      variant = 'rect',
      width,
      height,
      lines = 3,
      animate = true,
      className,
      style,
      ...rest
    },
    ref,
  ) {
    const animateClass = animate ? styles.animate : '';

    if (variant === 'text') {
      const lineCount = Math.max(1, lines);
      return (
        <div
          ref={ref}
          className={[styles.text, animateClass, className ?? '']
            .filter(Boolean)
            .join(' ')}
          style={{ width, ...style }}
          role="status"
          aria-label="Loading"
          aria-busy="true"
          {...rest}
        >
          {Array.from({ length: lineCount }, (_, i) => (
            <div
              key={i}
              className={[
                styles.textLine,
                i === lineCount - 1 ? styles.textLineLast : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ height: height ?? undefined }}
            />
          ))}
        </div>
      );
    }

    const resolvedWidth =
      typeof width === 'number' ? `${width}px` : width;
    const resolvedHeight =
      typeof height === 'number' ? `${height}px` : height;

    return (
      <div
        ref={ref}
        className={[
          styles.skeleton,
          variant === 'circle' ? styles.circle : styles.rect,
          animateClass,
          className ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
        style={{
          width: resolvedWidth ?? (variant === 'circle' ? '48px' : '100%'),
          height:
            resolvedHeight ??
            (variant === 'circle' ? resolvedWidth ?? '48px' : '48px'),
          ...style,
        }}
        role="status"
        aria-label="Loading"
        aria-busy="true"
        {...rest}
      />
    );
  },
);
