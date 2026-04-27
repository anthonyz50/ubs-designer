/**
 * @module Tag
 * @description Pill-shaped label/tag component following UBS brand guidelines.
 *
 * Variants:
 * - `default` — Pastel I background, black text
 * - `red` — UBS Red background, white text
 * - `success` — RAG Green background, white text
 * - `warning` — RAG Amber background, black text
 * - `outline` — Transparent with border
 *
 * @example
 * ```tsx
 * <Tag label="Active" variant="success" />
 * <Tag label="Remove me" removable onRemove={() => {}} />
 * ```
 */
import { forwardRef, type HTMLAttributes, type ReactNode, type MouseEvent } from 'react';
import styles from './Tag.module.css';

/** Visual variant of the Tag. */
export type TagVariant = 'default' | 'red' | 'success' | 'warning' | 'outline';

/** Tag size. */
export type TagSize = 'sm' | 'md';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Tag label text. */
  label: string;
  /** Colour variant. Defaults to `'default'`. */
  variant?: TagVariant;
  /** Size. Defaults to `'md'`. */
  size?: TagSize;
  /** Show a remove (×) button. */
  removable?: boolean;
  /** Callback when the remove button is clicked. */
  onRemove?: () => void;
  /** Optional icon rendered before the label. */
  icon?: ReactNode;
}

/**
 * Tag — pill-shaped label for categorisation, filtering, or status display.
 */
export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      label,
      variant = 'default',
      size = 'md',
      removable = false,
      onRemove,
      icon,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = [styles.tag, styles[variant], styles[size], className]
      .filter(Boolean)
      .join(' ');

    const handleRemove = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onRemove?.();
    };

    return (
      <span ref={ref} className={classes} {...rest}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {label}
        {removable && (
          <button
            type="button"
            className={styles.removeButton}
            onClick={handleRemove}
            aria-label={`Remove ${label}`}
          >
            ✕
          </button>
        )}
      </span>
    );
  },
);

Tag.displayName = 'Tag';

export default Tag;
