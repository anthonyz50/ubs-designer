import { default as React } from 'react';

/** Checkbox size options. */
export type CheckboxSize = 'sm' | 'md';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Label text displayed beside the checkbox. */
    label: string;
    /** Whether the checkbox is checked. */
    checked?: boolean;
    /** Change handler. */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** Whether the checkbox is disabled. */
    disabled?: boolean;
    /** Whether the checkbox is in an indeterminate state. */
    indeterminate?: boolean;
    /** Error message displayed below the checkbox. */
    error?: string;
    /** Size of the checkbox. @default 'md' */
    size?: CheckboxSize;
}
/**
 * UBS Design System Checkbox component.
 *
 * A custom-styled checkbox with UBS Red checkmark, Black border,
 * indeterminate state, and 44px minimum touch target.
 *
 * @example
 * ```tsx
 * <Checkbox
 *   label="Accept terms and conditions"
 *   checked={accepted}
 *   onChange={(e) => setAccepted(e.target.checked)}
 * />
 * ```
 */
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
