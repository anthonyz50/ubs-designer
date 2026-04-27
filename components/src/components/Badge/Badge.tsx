/**
 * @module Badge
 * @description Small status/label indicator following UBS brand guidelines.
 *
 * Variants map to UBS colour tokens:
 * - `default` — Gray III (#8E8D83)
 * - `red` — UBS Red (#E60000)
 * - `success` — RAG Green (#6F7A1A)
 * - `warning` — RAG Amber (#E4A911)
 *
 * When `dot` is true the badge renders as a small coloured circle
 * with no text content.
 *
 * @example
 * ```tsx
 * <Badge variant="success" size="sm">Active</Badge>
 * <Badge variant="red" dot />
 * ```
 */
import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import styles from './Badge.module.css';

/** Visual variant of the badge. */
export type BadgeVariant = 'default' | 'red' | 'success' | 'warning';

/** Badge size. */
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Colour variant. Defaults to `'default'` (gray). */
  variant?: BadgeVariant;
  /** Size of the badge. Defaults to `'md'`. */
  size?: BadgeSize;
  /** When true renders a dot-only indicator with no text. */
  dot?: boolean;
  /** Badge label content. Ignored when `dot` is true. */
  children?: ReactNode;
}

/**
 * Badge — small status/label indicator.
 *
 * Adheres to UBS brand colour tokens and WCAG 2.2 AA contrast requirements.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', dot = false, children, className, ...rest }, ref) => {
    const classes = [
      styles.badge,
      styles[variant],
      styles[size],
      dot ? styles.dot : undefined,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classes} role="status" {...rest}>
        {dot ? null : children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';

export default Badge;
