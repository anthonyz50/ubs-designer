/**
 * @module Chip
 * @description Chip component for filtering, selection, and tagging. Follows UBS brand guidelines.
 *
 * Variants:
 * - `filter` — toggleable, shows checkmark when selected
 * - `choice` — single select within a ChipGroup
 * - `input` — removable chip
 *
 * @example
 * ```tsx
 * <Chip label="Equities" variant="filter" selected onClick={() => {}} />
 *
 * <ChipGroup>
 *   <Chip label="1Y" variant="choice" selected />
 *   <Chip label="3Y" variant="choice" />
 *   <Chip label="5Y" variant="choice" />
 * </ChipGroup>
 * ```
 */
import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  type MouseEvent,
  type KeyboardEvent,
} from 'react';
import styles from './Chip.module.css';

/** Chip interaction variant. */
export type ChipVariant = 'filter' | 'choice' | 'input';

/** Chip size. */
export type ChipSize = 'sm' | 'md';

export interface ChipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'onClick'> {
  /** Chip label text. */
  label: string;
  /** Whether the chip is in a selected state. */
  selected?: boolean;
  /** Click handler (toggle for filter, select for choice). */
  onClick?: () => void;
  /** Whether the chip is disabled. */
  disabled?: boolean;
  /** Optional icon rendered before the label. */
  icon?: ReactNode;
  /** Interaction variant. Defaults to `'filter'`. */
  variant?: ChipVariant;
  /** Size. Defaults to `'md'`. */
  size?: ChipSize;
  /** Callback when remove button is clicked (input variant). */
  onRemove?: () => void;
}

/**
 * Chip — interactive element for filtering, selection, or input.
 */
export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  (
    {
      label,
      selected = false,
      onClick,
      disabled = false,
      icon,
      variant = 'filter',
      size = 'md',
      onRemove,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = [
      styles.chip,
      styles[size],
      selected ? styles.selected : undefined,
      disabled ? styles.disabled : undefined,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
      if (disabled) return;
      e.preventDefault();
      onClick?.();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
      if (disabled) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick?.();
      }
    };

    const handleRemove = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (!disabled) onRemove?.();
    };

    return (
      <span
        ref={ref}
        className={classes}
        role={variant === 'choice' ? 'radio' : variant === 'filter' ? 'checkbox' : undefined}
        aria-checked={variant !== 'input' ? selected : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {variant === 'filter' && selected && (
          <span className={styles.checkmark} aria-hidden="true">✓</span>
        )}
        {icon && <span className={styles.icon}>{icon}</span>}
        {label}
        {variant === 'input' && (
          <button
            type="button"
            className={styles.removeButton}
            onClick={handleRemove}
            aria-label={`Remove ${label}`}
            tabIndex={-1}
          >
            ✕
          </button>
        )}
      </span>
    );
  },
);

Chip.displayName = 'Chip';

/* ─── Chip Group ─── */

export interface ChipGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Chip elements. */
  children: ReactNode;
}

/**
 * ChipGroup — flex container for arranging chips in a row with consistent spacing.
 */
export const ChipGroup = forwardRef<HTMLDivElement, ChipGroupProps>(
  ({ children, className, ...rest }, ref) => {
    const classes = [styles.chipGroup, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} role="group" {...rest}>
        {children}
      </div>
    );
  },
);

ChipGroup.displayName = 'ChipGroup';

export default Chip;
