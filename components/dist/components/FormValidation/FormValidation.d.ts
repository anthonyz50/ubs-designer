import { default as React } from 'react';

/** Display variant for form validation messages. */
export type FormValidationVariant = 'summary' | 'inline';
export interface FormValidationError {
    /** Name of the field that has an error. */
    field: string;
    /** Human-readable error message. */
    message: string;
}
export interface FormValidationProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Array of field-level errors. */
    errors: FormValidationError[];
    /** Display variant. @default 'summary' */
    variant?: FormValidationVariant;
    /** Optional title. @default 'Please correct the following errors' */
    title?: string;
    /** Callback when a field link is clicked (e.g. to focus the field). */
    onFieldClick?: (field: string) => void;
}
/**
 * FormValidation — Form-level validation message display.
 *
 * Shows a summary of form errors or inline field-level error highlighting.
 * Supports clickable field names to scroll/focus the offending input.
 *
 * @example
 * ```tsx
 * <FormValidation
 *   errors={[
 *     { field: 'email', message: 'Email is required' },
 *     { field: 'password', message: 'Password must be at least 8 characters' },
 *   ]}
 *   onFieldClick={(field) => document.getElementById(field)?.focus()}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <FormValidation
 *   variant="inline"
 *   errors={[{ field: 'amount', message: 'Must be a positive number' }]}
 * />
 * ```
 */
export declare const FormValidation: React.ForwardRefExoticComponent<FormValidationProps & React.RefAttributes<HTMLDivElement>>;
