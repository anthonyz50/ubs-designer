/**
 * @module List
 * @description Structured list component following UBS brand guidelines.
 *
 * Supports primary/secondary text, icons, action areas, click handlers,
 * divided and compact variants.
 *
 * @example
 * ```tsx
 * <List
 *   items={[
 *     { primary: 'Account Overview', secondary: 'View balances', onClick: () => {} },
 *     { primary: 'Transactions', secondary: 'Recent activity' },
 *   ]}
 *   variant="divided"
 *   hoverable
 * />
 * ```
 */
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import styles from './List.module.css';

/** Single list item definition. */
export interface ListItem {
  /** Primary text content. */
  primary: ReactNode;
  /** Secondary/subtitle text. */
  secondary?: ReactNode;
  /** Icon rendered to the left. */
  icon?: ReactNode;
  /** Action content rendered to the right (e.g. button, badge). */
  action?: ReactNode;
  /** Click handler for the item. */
  onClick?: () => void;
}

/** Visual variant of the List. */
export type ListVariant = 'default' | 'divided';

export interface ListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'children'> {
  /** List items to render. */
  items: ListItem[];
  /** Visual variant. Defaults to `'default'`. */
  variant?: ListVariant;
  /** Highlight items on hover. */
  hoverable?: boolean;
  /** Reduced padding mode. */
  compact?: boolean;
}

/**
 * List — structured list with icons, actions, and click handlers.
 */
export const List = forwardRef<HTMLUListElement, ListProps>(
  ({ items, variant = 'default', hoverable = false, compact = false, className, ...rest }, ref) => {
    const classes = [
      styles.list,
      variant === 'divided' ? styles.divided : undefined,
      hoverable ? styles.hoverable : undefined,
      compact ? styles.compact : undefined,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <ul ref={ref} className={classes} role="list" {...rest}>
        {items.map((item, index) => {
          const itemClasses = [
            styles.listItem,
            item.onClick ? styles.listItemClickable : undefined,
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <li
              key={index}
              className={itemClasses}
              role="listitem"
              tabIndex={item.onClick ? 0 : undefined}
              onClick={item.onClick}
              onKeyDown={(e) => {
                if (item.onClick && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  item.onClick();
                }
              }}
            >
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              <span className={styles.content}>
                <span className={styles.primary}>{item.primary}</span>
                {item.secondary && <span className={styles.secondary}>{item.secondary}</span>}
              </span>
              {item.action && <span className={styles.action}>{item.action}</span>}
            </li>
          );
        })}
      </ul>
    );
  },
);

List.displayName = 'List';

export default List;
