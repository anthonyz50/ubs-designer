import { HTMLAttributes, ReactNode } from 'react';

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
export declare const Chip: import('react').ForwardRefExoticComponent<ChipProps & import('react').RefAttributes<HTMLSpanElement>>;
export interface ChipGroupProps extends HTMLAttributes<HTMLDivElement> {
    /** Chip elements. */
    children: ReactNode;
}
/**
 * ChipGroup — flex container for arranging chips in a row with consistent spacing.
 */
export declare const ChipGroup: import('react').ForwardRefExoticComponent<ChipGroupProps & import('react').RefAttributes<HTMLDivElement>>;
export default Chip;
