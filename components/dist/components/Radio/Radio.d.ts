import { default as React } from 'react';

/** Radio size options. */
export type RadioSize = 'sm' | 'md';
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Label text displayed beside the radio. */
    label: string;
    /** The value of this radio option. */
    value: string;
    /** Whether this radio is checked. */
    checked?: boolean;
    /** Change handler. */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** Whether the radio is disabled. */
    disabled?: boolean;
    /** The name attribute for grouping radios. */
    name?: string;
    /** Size of the radio. @default 'md' */
    size?: RadioSize;
}
/**
 * UBS Design System Radio component.
 *
 * A custom-styled radio button with UBS Red fill when selected
 * and 44px minimum touch target. Use with RadioGroup for managed groups.
 *
 * @example
 * ```tsx
 * <Radio
 *   label="Option A"
 *   value="a"
 *   name="example"
 *   checked={selected === 'a'}
 *   onChange={(e) => setSelected(e.target.value)}
 * />
 * ```
 */
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export interface RadioGroupProps {
    /** Group label displayed above the radio options. */
    label?: string;
    /** The name shared by all radios in the group. */
    name: string;
    /** The currently selected value. */
    value?: string;
    /** Change handler. */
    onChange?: (value: string) => void;
    /** Whether the group is required. */
    required?: boolean;
    /** Whether the group is disabled. */
    disabled?: boolean;
    /** Error message displayed below the group. */
    error?: string;
    /** The Radio children. */
    children: React.ReactNode;
    /** Additional CSS class name. */
    className?: string;
}
/**
 * UBS Design System RadioGroup component.
 *
 * Wraps multiple Radio components, providing a shared name,
 * value management, and group-level label/error display.
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   label="Preferred contact method"
 *   name="contact"
 *   value={contactMethod}
 *   onChange={setContactMethod}
 * >
 *   <Radio label="Email" value="email" />
 *   <Radio label="Phone" value="phone" />
 *   <Radio label="Post" value="post" />
 * </RadioGroup>
 * ```
 */
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
