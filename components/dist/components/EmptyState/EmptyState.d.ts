import { HTMLAttributes, ReactNode } from 'react';

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
export declare const EmptyState: import('react').ForwardRefExoticComponent<EmptyStateProps & import('react').RefAttributes<HTMLDivElement>>;
export default EmptyState;
