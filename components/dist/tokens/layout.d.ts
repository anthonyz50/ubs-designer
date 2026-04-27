/**
 * UBS Design System — Layout Tokens
 *
 * Grid, margin, impulse, logo, key symbol, and moving frame specifications.
 * Source: ubs.frontify.com
 *
 * @remarks
 * All margin and impulse values are keyed by ISO format (A0–A8).
 * The Impulse is UBS's distinctive red vertical line alongside text.
 */
/** Margin specification for an ISO paper format. */
export interface ISOMarginSpec {
    /** ISO format dimensions (e.g. "210x297mm"). */
    readonly format: string;
    /** Page margin value. */
    readonly margin: string;
}
/**
 * Margins by ISO format.
 *
 * @remarks
 * Space of one key symbol height (k) between text/image and text/margin.
 */
export declare const ISO_MARGINS: Record<string, ISOMarginSpec>;
/** All supported ISO format keys. */
export type ISOFormat = keyof typeof ISO_MARGINS;
/**
 * Impulse colour. Always UBS Red.
 *
 * @remarks
 * The Impulse is UBS's distinctive red vertical line alongside text.
 */
export declare const IMPULSE_COLOUR: "#E60000";
/**
 * Impulse stroke width by ISO format.
 *
 * @remarks
 * If undefined for a custom format, use 2x key stalk width.
 */
export declare const IMPULSE_WIDTH: Record<string, string>;
/**
 * Distance between Impulse and text by ISO format.
 *
 * @remarks
 * If undefined for a custom format, use half key symbol height.
 */
export declare const IMPULSE_SPACE: Record<string, string>;
/**
 * Impulse height rules.
 *
 * @remarks
 * Height depends on whether the layout uses keyline-only or keyline+infoline.
 */
export declare const IMPULSE_HEIGHT: {
    /** Cap height of first word to baseline of last line. Last line left blank. */
    readonly keylineOnly: "Cap height of first word to baseline of last line. Last line left blank.";
    /** Cap height of first keyline word to baseline of infoline. First infoline line left blank. */
    readonly keylineAndInfoline: "Cap height of first keyline word to baseline of infoline. First infoline line left blank.";
};
/**
 * Impulse placement and usage rules.
 *
 * @remarks
 * On gray/bordeaux/bronze backgrounds, Impulse is allowed on Pastel I and Pastel II only.
 */
export declare const IMPULSE_RULES: {
    /** Impulse must not extend beyond the baseline of the second message. */
    readonly noLongerThanBaselineOfSecondMessage: true;
    /** Never centre text alongside an Impulse with a keyline. */
    readonly noCentreWithKeyline: true;
    /** Multiple Impulses cannot be used together. */
    readonly noMultipleUseTogether: true;
    /** On gray/bordeaux/bronze: Impulse allowed on Pastel I and Pastel II only. */
    readonly onGrayBordeauxBronze: "Impulse allowed on Pastel I and Pastel II only";
    /** No red highlighting on front pages. */
    readonly noRedHighlightOnFrontPages: true;
};
/**
 * Logo size (scale percentage) by ISO format.
 *
 * @remarks
 * Scale from the original logo asset using this percentage.
 */
export declare const LOGO_SIZE: Record<string, string>;
/**
 * Logo positioning rules.
 *
 * @remarks
 * Standard position is bottom-right. Alternative is top-left.
 * Always align to page margin with clear space equal to key symbol height.
 */
export declare const LOGO_POSITION: {
    /** Default logo placement. */
    readonly standard: "bottom-right";
    /** Alternative logo placement. */
    readonly alternative: "top-left";
    /** Logo must align to the page margin. */
    readonly marginAlignment: "Align to page margin";
    /** Clear space from key to upper/lower edge of format. */
    readonly clearSpace: "Height of Key Symbol (k) from key to upper/lower edge of format";
};
/**
 * Logo Tab specification.
 *
 * @remarks
 * White background area ensuring contrast and visibility for the logo.
 */
export declare const LOGO_TAB: {
    /** Standard tab position. */
    readonly standard: "bottom-right-aligned";
    /** Alternative tab position. */
    readonly alternative: "top-left-aligned";
};
/**
 * Key Symbol specifications.
 *
 * @remarks
 * The three-key icon is the most recognisable part of the UBS logo.
 * It must never be altered, deconstructed, or separated.
 */
export declare const KEY_SYMBOL: {
    /** Minimum clear space around the key symbol. k = height of Key Symbol. */
    readonly clearSpace: "⅓k minimum";
    /** Permitted colours for the key symbol. */
    readonly colours: readonly ["black", "white", "gray"];
    /** Accent colours permitted for the key symbol. */
    readonly accentColours: readonly ["bordeaux", "bronze"];
};
/**
 * Key Symbol rules. All restrictions are active (true).
 *
 * @remarks
 * The key symbol is sacrosanct. Never modify it in any way.
 */
export declare const KEY_SYMBOL_RULES: {
    /** Never alter the key symbol design. */
    readonly neverAlter: true;
    /** Never deconstruct the key symbol. */
    readonly neverDeconstruct: true;
    /** Never separate the three keys. */
    readonly neverSeparateKeys: true;
    /** No drop shadows. */
    readonly noShadow: true;
    /** No outlines or strokes. */
    readonly noOutline: true;
    /** No rotation of any kind. */
    readonly noRotation: true;
    /** Only use approved colours. */
    readonly noUnapprovedColours: true;
};
/**
 * Moving Frame specifications.
 *
 * @remarks
 * The Moving Frame is a dynamic content area overlaid on images.
 * It provides a branded text overlay with controlled opacity.
 */
export declare const MOVING_FRAME: {
    /** Opacity for transparent variant. */
    readonly transparentOpacity: "80%";
    /** Opacity for opaque variant. */
    readonly opaqueOpacity: "100%";
    /** Maximum frame size relative to the image. */
    readonly maxSize: {
        /** Portrait and square images: max half the width. */
        readonly portraitAndSquare: "max half the width";
        /** Landscape images: max half the height. */
        readonly landscape: "max half the height";
    };
    /** Spacing: half the height of Key Symbol (k). */
    readonly spacing: "half the height of Key Symbol (k)";
    /** Frame is right-aligned at variable height. */
    readonly position: "right-aligned at variable height";
};
/**
 * Moving Frame rules. All restrictions are active (true).
 */
export declare const MOVING_FRAME_RULES: {
    /** Never place the Moving Frame in the centre. */
    readonly noCentredPlacement: true;
    /** No left-aligned logo when using Moving Frame. */
    readonly noLeftAlignedLogo: true;
    /** Frame must not bleed to the edge of the format. */
    readonly noBleedingToEdge: true;
    /** No red highlighting within the Moving Frame. */
    readonly noRedHighlighting: true;
    /** Opacity must not be below 80%. */
    readonly noOpacityBelow80: true;
    /** No transparency on monochrome backgrounds. */
    readonly noTransparencyOnMonochrome: true;
    /** No transparency on pattern backgrounds. */
    readonly noTransparencyOnPatterns: true;
};
/**
 * Available grid types for page layouts.
 */
export declare const GRID_TYPES: readonly ["coverAndBackPage", "insidePage", "insidePageWithAdditionalMargin"];
/** Type representing a valid grid type. */
export type GridType = typeof GRID_TYPES[number];
/**
 * Preferred image treatment.
 *
 * @remarks
 * Full-bleed images are always preferred whenever possible.
 */
export declare const IMAGE_PREFERENCE: "full-bleed whenever possible";
/**
 * Available layout options for page composition.
 *
 * @remarks
 * "Full bleed with Moving Frame" is the recommended default.
 */
export declare const LAYOUT_OPTIONS: readonly ["Full bleed with Moving Frame (recommended)", "Full bleed with Logo Tab", "Vertical two-thirds", "Vertical half", "Vertical one-thirds", "Without image"];
/** Type representing a valid layout option. */
export type LayoutOption = typeof LAYOUT_OPTIONS[number];
/**
 * Grid rules. All restrictions are active (true).
 */
export declare const GRID_RULES: {
    /** Margins should not appear on more than two sides. */
    readonly noMarginOnMoreThanTwoSides: true;
    /** No frameless white box on layouts. */
    readonly noFramelessWhiteBox: true;
    /** Images must not originate from another corner. */
    readonly noImageFromAnotherCorner: true;
    /** No diagonal image cropping. */
    readonly noDiagonalImageCrop: true;
};
