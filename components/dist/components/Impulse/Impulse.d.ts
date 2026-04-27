import { default as React } from 'react';

/** ISO A-series paper formats for sizing the impulse line. */
export type ImpulseFormat = 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8';
export interface ImpulseProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * ISO format to determine line width and spacing.
     * Larger formats produce a thicker impulse line.
     * @default 'A4'
     */
    format?: ImpulseFormat;
    /** Content displayed next to the impulse line. */
    children?: React.ReactNode;
}
/**
 * UBS Design System Impulse component.
 *
 * The distinctive UBS red vertical line placed next to text to create
 * visual emphasis and brand recognition.
 *
 * Brand rules enforced:
 * - Always uses UBS Red (#E60000)
 * - Line must not extend beyond the baseline of the second line of text
 * - Must not be centred with a keyline
 * - Width and spacing are proportional to the ISO format
 *
 * @example
 * ```tsx
 * <Impulse format="A4">
 *   <Typography variant="leadText1">
 *     Breaking through complexity to deliver clarity.
 *   </Typography>
 * </Impulse>
 * ```
 */
export declare const Impulse: React.ForwardRefExoticComponent<ImpulseProps & React.RefAttributes<HTMLDivElement>>;
