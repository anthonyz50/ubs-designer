import { default as React } from 'react';

/** Resize behaviour for the textarea. */
export type TextareaResize = 'none' | 'vertical' | 'both';
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {
    /** Label text displayed above the textarea. */
    label?: string;
    /** Controlled value. */
    value?: string;
    /** Change handler. */
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    /** Error message. Displays red border and error text below. */
    error?: string;
    /** Helper text displayed below the textarea when there is no error. */
    helperText?: string;
    /** Whether the textarea is disabled. */
    disabled?: boolean;
    /** Whether the textarea is required. */
    required?: boolean;
    /** Whether the textarea is read-only. */
    readOnly?: boolean;
    /** Number of visible text rows. @default 4 */
    rows?: number;
    /** Maximum character count. */
    maxLength?: number;
    /** Whether to display the character count. @default false */
    showCount?: boolean;
    /** Resize behaviour. @default 'vertical' */
    resize?: TextareaResize;
    /** Whether the wrapper should be full width. */
    fullWidth?: boolean;
}
/**
 * UBS Design System Textarea component.
 *
 * A multi-line text input with label, error, helper text, character count,
 * and configurable resize behaviour. Follows UBS brand guidelines.
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Comments"
 *   maxLength={500}
 *   showCount
 *   placeholder="Enter your comments"
 * />
 * ```
 */
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
