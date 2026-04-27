import { ReactNode, HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';
import { IconSVGProps } from '../../icons/types';

type IconComponent = ForwardRefExoticComponent<IconSVGProps & RefAttributes<SVGSVGElement>>;
/**
 * Registry mapping icon names to their components.
 * Use lowercase kebab-case names for lookup.
 */
export declare const icons: Record<string, IconComponent>;
/** Icon sizes mapped to pixel values. */
export type IconSize = 'sm' | 'md' | 'lg';
/** Icon variant determines colour rules. */
export type IconVariant = 'illustrative' | 'webApp';
/** Available icon names from the registry. */
export type IconName = keyof typeof icons;
/** Size-to-pixel mapping. */
export declare const ICON_SIZE_MAP: Record<IconSize, number>;
export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
    /** Icon name from the registry (kebab-case). */
    name?: string;
    /** Display size. Defaults to `'md'` (16px). */
    size?: IconSize;
    /**
     * Colour override. For `webApp` variant this is forced to black.
     * For `illustrative` variant, allows custom colour including UBS Red.
     */
    colour?: string;
    /** Accent colour for illustrative icons. Defaults to UBS Red (#E60000). */
    accentColour?: string;
    /** Icon variant. Defaults to `'webApp'`. */
    variant?: IconVariant;
    /** SVG element to render directly (overrides name). */
    children?: ReactNode;
}
/**
 * Icon — wrapper for SVG icons.
 *
 * Enforces UBS brand rules:
 * - Web app icons are always black, pixel-perfect sizes
 * - Illustrative icons may use red accent
 *
 * Renders from registry when `name` is provided, or wraps `children` SVG directly.
 */
export declare const Icon: ForwardRefExoticComponent<IconProps & RefAttributes<HTMLSpanElement>>;
export default Icon;
