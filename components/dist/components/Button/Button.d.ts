import { default as React } from 'react';

/**
 * Button variant options following UBS brand guidelines.
 * - `primary`: UBS Red background with white text
 * - `secondary`: Black background with white text
 * - `outline`: Transparent with border
 * - `ghost`: No border or background
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
/** Button size options. */
export type ButtonSize = 'small' | 'medium' | 'large';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual variant of the button. @default 'primary' */
    variant?: ButtonVariant;
    /** Size of the button. @default 'medium' */
    size?: ButtonSize;
    /** Whether the button is in a loading state. Shows spinner and disables interaction. */
    loading?: boolean;
    /** Whether the button should take up the full width of its container. */
    fullWidth?: boolean;
    /** Optional icon element rendered before the children. */
    icon?: React.ReactNode;
    /** Button content. */
    children?: React.ReactNode;
}
/**
 * UBS Design System Button component.
 *
 * Implements all UBS brand rules:
 * - Primary variant uses UBS Red (#E60000) with white text
 * - Secondary variant uses UBS Black with white text
 * - WCAG 2.2 AA compliant contrast ratios (4.5:1 minimum)
 * - Uses Frutiger font family (fallback Arial)
 * - No text shadows
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium" onClick={handleClick}>
 *   Submit
 * </Button>
 *
 * <Button variant="outline" loading>
 *   Processing...
 * </Button>
 * ```
 */
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
