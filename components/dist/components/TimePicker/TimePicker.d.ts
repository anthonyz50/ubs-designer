import { default as React } from 'react';

/** Time format. */
export type TimeFormat = '12h' | '24h';
/** Structured time value. */
export interface TimeValue {
    /** Hours (0-23 for 24h, 1-12 for 12h). */
    hours: number;
    /** Minutes (0-59). */
    minutes: number;
    /** Seconds (0-59). */
    seconds: number;
    /** AM/PM period (only for 12h format). */
    period?: 'AM' | 'PM';
}
export interface TimePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Current time value. */
    value?: TimeValue;
    /** Change handler. */
    onChange?: (value: TimeValue) => void;
    /** Time display format. @default '24h' */
    format?: TimeFormat;
    /** Whether to show the seconds selector. @default false */
    showSeconds?: boolean;
    /** Minimum time (hours, minutes). */
    min?: {
        hours: number;
        minutes: number;
    };
    /** Maximum time (hours, minutes). */
    max?: {
        hours: number;
        minutes: number;
    };
    /** Whether the time picker is disabled. */
    disabled?: boolean;
    /** Label text displayed above the picker. */
    label?: string;
    /** Error message. */
    error?: string;
    /** Helper text. */
    helperText?: string;
    /** Placeholder text. */
    placeholder?: string;
}
/**
 * UBS Design System TimePicker component.
 *
 * A time selection input with hour, minute, and optional second selectors.
 * Supports 12-hour (with AM/PM) and 24-hour formats. Designed as a
 * companion to the existing DatePicker component.
 *
 * @example
 * ```tsx
 * <TimePicker
 *   label="Meeting time"
 *   format="12h"
 *   value={{ hours: 2, minutes: 30, seconds: 0, period: 'PM' }}
 *   onChange={(time) => setMeetingTime(time)}
 * />
 * ```
 */
export declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps & React.RefAttributes<HTMLDivElement>>;
