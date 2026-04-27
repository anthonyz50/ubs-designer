import { HTMLAttributes, ReactNode } from 'react';

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
export declare const List: import('react').ForwardRefExoticComponent<ListProps & import('react').RefAttributes<HTMLUListElement>>;
export default List;
