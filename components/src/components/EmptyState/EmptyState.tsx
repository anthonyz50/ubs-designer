/**
 * @module EmptyState
 * @description Centred empty state placeholder following UBS brand guidelines.
 *
 * Used when a list, table, or view has no content to display.
 *
 * @example
 * ```tsx
 * <EmptyState
 *   icon={<SearchIcon />}
 *   title="No results found"
 *   description="Try adjusting your search criteria or clearing filters."
 *   action={{ label: 'Clear filters', onClick: () => {} }}
 * />
 * ```
 */
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import styles from './EmptyState.module.css';

/** Action button configuration. */
export interface EmptyStateAction {
  /** Button label. */
  label: string;
  /** Click handler. */
  onClick: () => void;
}

export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Decorative icon displayed above the title. */
  icon?: ReactNode;
  /** Headline text. */
  title: string;
  /** Supporting description text. */
  description?: string;
  /** Optional CTA button. */
  action?: EmptyStateAction;
  /** Reduced padding variant. */
  compact?: boolean;
}

/**
 * EmptyState — centred placeholder for empty views.
 */
export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, title, description, action, compact = false, className, ...rest }, ref) => {
    const classes = [
      styles.emptyState,
      compact ? styles.compact : undefined,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} role="status" {...rest}>
        {icon && <div className={styles.icon} aria-hidden="true">{icon}</div>}
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {action && (
          <button
            type="button"
            className={styles.actionButton}
            onClick={action.onClick}
          >
            {action.label}
          </button>
        )}
      </div>
    );
  },
);

EmptyState.displayName = 'EmptyState';

export default EmptyState;
