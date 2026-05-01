import { default as React } from 'react';

/** ButtonGroup variant options. */
export type ButtonGroupVariant = 'primary' | 'secondary' | 'outline';
/** ButtonGroup size options. */
export type ButtonGroupSize = 'small' | 'medium' | 'large';
/** ButtonGroup orientation. */
export type ButtonGroupOrientation = 'horizontal' | 'vertical';
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Button elements to group together. */
    children: React.ReactNode;
    /** Visual variant applied to the group. @default 'outline' */
    variant?: ButtonGroupVariant;
    /** Size of all grouped buttons. @default 'medium' */
    size?: ButtonGroupSize;
    /** Layout orientation. @default 'horizontal' */
    orientation?: ButtonGroupOrientation;
}
/**
 * UBS Design System ButtonGroup component.
 *
 * Groups related buttons together with shared border styling and connected
 * appearance. Supports horizontal and vertical orientations. Automatically
 * adjusts border radii so only the outer corners are rounded.
 *
 * @example
 * ```tsx
 * <ButtonGroup variant="outline" size="medium">
 *   <button>Left</button>
 *   <button>Centre</button>
 *   <button>Right</button>
 * </ButtonGroup>
 * ```
 */
export declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
