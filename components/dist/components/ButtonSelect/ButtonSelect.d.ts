import { default as React } from 'react';

/** A selectable option. */
export interface ButtonSelectOption {
    /** Display label. */
    label: string;
    /** The option value. */
    value: string;
    /** Optional icon element. */
    icon?: React.ReactNode;
    /** Whether this option is disabled. */
    disabled?: boolean;
}
/** ButtonSelect size options. */
export type ButtonSelectSize = 'small' | 'medium' | 'large';
export interface ButtonSelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Available options to select from. */
    options: ButtonSelectOption[];
    /** Current selected value(s). String for single, string[] for multiple. */
    value?: string | string[];
    /** Change handler receiving the new value(s). */
    onChange?: (value: string | string[]) => void;
    /** Whether multiple options can be selected simultaneously. @default false */
    multiple?: boolean;
    /** Size of the buttons. @default 'medium' */
    size?: ButtonSelectSize;
    /** Whether the entire component is disabled. */
    disabled?: boolean;
}
/**
 * UBS Design System ButtonSelect component.
 *
 * A set of button options that toggle selection state. Supports both
 * single-select (radio-like) and multi-select (checkbox-like) modes.
 * Selected buttons use UBS Red to indicate active state.
 *
 * @example
 * ```tsx
 * <ButtonSelect
 *   options={[
 *     { label: 'Day', value: 'day' },
 *     { label: 'Week', value: 'week' },
 *     { label: 'Month', value: 'month' },
 *   ]}
 *   value="week"
 *   onChange={(val) => setView(val as string)}
 * />
 * ```
 */
export declare const ButtonSelect: React.ForwardRefExoticComponent<ButtonSelectProps & React.RefAttributes<HTMLDivElement>>;
