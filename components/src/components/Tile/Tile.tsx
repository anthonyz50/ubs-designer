/**
 * @module Tile
 * @description Interactive tile/card for grid layouts following UBS brand guidelines.
 *
 * A clickable tile component for building dashboard grids, selection UIs,
 * and action menus. Supports icons, images, and selection state.
 *
 * @example
 * ```tsx
 * <Tile
 *   title="Equities"
 *   description="Manage your equity positions"
 *   icon={<EquitiesIcon />}
 *   onClick={() => navigate('/equities')}
 *   variant="action"
 *   size="medium"
 * />
 * ```
 */
import React, { forwardRef, useCallback } from 'react';
import styles from './Tile.module.css';

/** Visual variant of the tile. */
export type TileVariant = 'default' | 'selectable' | 'action';

/** Size of the tile. */
export type TileSize = 'small' | 'medium' | 'large';

/**
 * Props for the {@link Tile} component.
 */
export interface TileProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onClick'> {
  /** Tile heading. */
  title: string;
  /** Optional description text. */
  description?: string;
  /** Optional icon element. */
  icon?: React.ReactNode;
  /** Optional image URL. */
  image?: string;
  /** Whether the tile is in a selected state (for selectable variant). @default false */
  selected?: boolean;
  /** Click handler. */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Visual variant. @default 'default' */
  variant?: TileVariant;
  /** Size variant. @default 'medium' */
  size?: TileSize;
}

/**
 * Interactive tile component for grid-based layouts.
 *
 * Supports keyboard activation (Enter and Space) and proper ARIA attributes
 * for selection state in the selectable variant.
 *
 * @example
 * ```tsx
 * <Tile
 *   title="Transfer"
 *   description="Send money to another account"
 *   icon={<TransferIcon />}
 *   variant="selectable"
 *   selected={isSelected}
 *   onClick={() => toggleSelected()}
 * />
 * ```
 */
const Tile = forwardRef<HTMLDivElement, TileProps>(
  (
    {
      title,
      description,
      icon,
      image,
      selected = false,
      onClick,
      variant = 'default',
      size = 'medium',
      className,
      ...rest
    },
    ref,
  ) => {
    const isInteractive = !!onClick;
    const isSelectable = variant === 'selectable';

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (isInteractive && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          onClick?.(event as unknown as React.MouseEvent<HTMLDivElement>);
        }
      },
      [isInteractive, onClick],
    );

    const rootClass = [
      styles.root,
      styles[variant],
      styles[size],
      selected ? styles.selected : '',
      isInteractive ? styles.interactive : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={rootClass}
        role={isSelectable ? 'option' : isInteractive ? 'button' : undefined}
        aria-selected={isSelectable ? selected : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {/* Image */}
        {image && (
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={image} alt="" loading="lazy" />
          </div>
        )}

        {/* Icon */}
        {icon && !image && (
          <div className={styles.iconWrapper} aria-hidden="true">
            {icon}
          </div>
        )}

        {/* Content */}
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          {description && (
            <span className={styles.description}>{description}</span>
          )}
        </div>

        {/* Selection indicator */}
        {isSelectable && (
          <div className={styles.checkWrapper} aria-hidden="true">
            {selected ? (
              <svg viewBox="0 0 20 20" className={styles.check}>
                <circle cx="10" cy="10" r="10" fill="#e60000" />
                <path
                  d="M6 10L9 13L14 7"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" className={styles.check}>
                <circle cx="10" cy="10" r="9" stroke="#cccabc" strokeWidth="2" fill="none" />
              </svg>
            )}
          </div>
        )}

        {/* Action arrow */}
        {variant === 'action' && (
          <div className={styles.arrow} aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" className={styles.arrowIcon}>
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    );
  },
);

Tile.displayName = 'Tile';

export { Tile };
