import { HTMLAttributes, ReactNode } from 'react';

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
export declare const Tag: import('react').ForwardRefExoticComponent<TagProps & import('react').RefAttributes<HTMLSpanElement>>;
export default Tag;
