import { default as React } from 'react';

/** Switch size options. */
export type SwitchSize = 'small' | 'medium' | 'large';
/** Label position relative to the switch. */
export type SwitchLabelPosition = 'left' | 'right';
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Whether the switch is on. */
    checked?: boolean;
    /** Change handler. */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** Label text displayed beside the switch. */
    label?: string;
    /** Position of the label relative to the switch. @default 'right' */
    labelPosition?: SwitchLabelPosition;
    /** Whether the switch is disabled. */
    disabled?: boolean;
    /** Size of the switch. @default 'medium' */
    size?: SwitchSize;
}
/**
 * UBS Design System Switch component.
 *
 * A toggle switch for on/off states. The UBS Switch variant uses a more
 * compact, squared-off design compared to the standard Toggle. Off state
 * uses Gray III track, on state uses UBS Red, both with white thumb.
 *
 * @example
 * ```tsx
 * <Switch
 *   label="Dark mode"
 *   checked={isDark}
 *   onChange={(e) => setIsDark(e.target.checked)}
 *   labelPosition="right"
 * />
 * ```
 */
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
