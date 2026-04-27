import { default as React } from 'react';

/** Input size options. */
export type InputSize = 'sm' | 'md' | 'lg';
/** Supported input types. */
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Label text displayed above the input. */
    label?: string;
    /** Placeholder text. */
    placeholder?: string;
    /** Controlled value. */
    value?: string | number;
    /** Change handler. */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** Error message. Displays red border and error text below. */
    error?: string;
    /** Helper text displayed below the input when there is no error. */
    helperText?: string;
    /** Whether the input is disabled. */
    disabled?: boolean;
    /** Whether the input is required. */
    required?: boolean;
    /** Whether the input is read-only. */
    readOnly?: boolean;
    /** Size of the input. @default 'md' */
    size?: InputSize;
    /** Input type. @default 'text' */
    type?: InputType;
    /** Icon rendered on the left side of the input. */
    iconLeft?: React.ReactNode;
    /** Icon rendered on the right side of the input. */
    iconRight?: React.ReactNode;
    /** Whether to show a clear button when the input has a value. */
    clearable?: boolean;
    /** Callback when the clear button is clicked. */
    onClear?: () => void;
    /** Whether the wrapper should be full width. */
    fullWidth?: boolean;
}
/**
 * UBS Design System Input component.
 *
 * A text input with label, error, helper text, icons, and clear functionality.
 * Follows UBS brand guidelines with proper accessibility support.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   error="Please enter a valid email address"
 *   required
 * />
 * ```
 */
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
