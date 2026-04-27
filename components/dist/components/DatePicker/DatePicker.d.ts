import { default as React } from 'react';

/** Date display format. */
export type DateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';
export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange' | 'min' | 'max' | 'size'> {
    /** Label text displayed above the date picker. */
    label?: string;
    /** The selected date value, or null for no selection. */
    value?: Date | null;
    /** Change handler providing the new Date or null. */
    onChange?: (date: Date | null) => void;
    /** Error message. Displays red border and error text below. */
    error?: string;
    /** Helper text displayed below the date picker when there is no error. */
    helperText?: string;
    /** Whether the date picker is disabled. */
    disabled?: boolean;
    /** Whether the date picker is required. */
    required?: boolean;
    /** Minimum selectable date. */
    min?: Date;
    /** Maximum selectable date. */
    max?: Date;
    /** Display format. @default 'DD/MM/YYYY' */
    format?: DateFormat;
    /** Whether the wrapper should be full width. */
    fullWidth?: boolean;
}
/**
 * UBS Design System DatePicker component.
 *
 * Uses a native date input with custom styling, calendar icon, and consistent
 * error/focus/disabled patterns following UBS brand guidelines. Defaults to
 * DD/MM/YYYY format for UK locale.
 *
 * @example
 * ```tsx
 * <DatePicker
 *   label="Date of birth"
 *   value={dob}
 *   onChange={setDob}
 *   max={new Date()}
 *   required
 * />
 * ```
 */
export declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLInputElement>>;
