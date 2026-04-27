import { default as React } from 'react';

/** Toggle size options. */
export type ToggleSize = 'sm' | 'md' | 'lg';
/** Label position relative to the toggle. */
export type ToggleLabelPosition = 'left' | 'right';
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Label text displayed beside the toggle. */
    label: string;
    /** Whether the toggle is on. */
    checked?: boolean;
    /** Change handler. */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** Whether the toggle is disabled. */
    disabled?: boolean;
    /** Size of the toggle. @default 'md' */
    size?: ToggleSize;
    /** Position of the label relative to the toggle. @default 'right' */
    labelPosition?: ToggleLabelPosition;
}
/**
 * UBS Design System Toggle (switch) component.
 *
 * A pill-shaped toggle with circular thumb. Off state uses Gray III track,
 * on state uses UBS Red track, both with white thumb. Minimum 44px touch target.
 *
 * @example
 * ```tsx
 * <Toggle
 *   label="Enable notifications"
 *   checked={enabled}
 *   onChange={(e) => setEnabled(e.target.checked)}
 * />
 * ```
 */
export declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLInputElement>>;
