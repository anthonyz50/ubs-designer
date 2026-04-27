import { ReactElement } from 'react';
import { IconSVGProps } from './types';

export interface CreateIconOptions {
    /** Display name for the component. */
    displayName: string;
    /** Default viewBox (e.g. '0 0 24 24' for webapp, '0 0 48 48' for illustrative). */
    viewBox: string;
    /** Default size if none provided. */
    defaultSize?: number | 'sm' | 'md' | 'lg';
    /** Whether this is an illustrative icon (enables accent colour). */
    illustrative?: boolean;
    /**
     * Render function that receives resolved colours and returns SVG children.
     * @param colour — resolved primary stroke/fill colour
     * @param accentColour — resolved accent colour (only meaningful for illustrative)
     */
    path: (colour: string, accentColour: string) => ReactElement | ReactElement[];
}
/**
 * Creates a reusable SVG icon component.
 *
 * @example
 * ```tsx
 * export const SearchIcon = createIcon({
 *   displayName: 'SearchIcon',
 *   viewBox: '0 0 24 24',
 *   path: (colour) => (
 *     <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" stroke={colour} />
 *   ),
 * });
 * ```
 */
export declare function createIcon(options: CreateIconOptions): import('react').ForwardRefExoticComponent<IconSVGProps & import('react').RefAttributes<SVGSVGElement>>;
