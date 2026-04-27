import { SVGAttributes } from 'react';

/** Props shared by all SVG icon components. */
export interface IconSVGProps extends SVGAttributes<SVGSVGElement> {
    /** Display size. Named sizes: sm=12, md=16, lg=24. Or pass a custom number. */
    size?: number | 'sm' | 'md' | 'lg';
    /** Primary colour. Defaults to #000000. */
    colour?: string;
    /** Red accent colour for illustrative icons. Defaults to #E60000. */
    accentColour?: string;
    /** Variant: 'default' uses red accent, 'black' is monochrome. */
    variant?: 'default' | 'black';
}
/** Size name to pixel mapping. */
export declare const SIZE_MAP: Record<string, number>;
/** UBS brand colours used in icons. */
export declare const UBS_ICON_COLOURS: {
    readonly black: "#000000";
    readonly red: "#E60000";
    readonly warmGray1: "#CCCABC";
    readonly warmGray2: "#B8B3A2";
};
