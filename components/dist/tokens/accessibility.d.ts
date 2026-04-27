/**
 * UBS Design System — Accessibility Tokens
 *
 * WCAG 2.2 Level AA compliance requirements.
 * Source: ubs.frontify.com
 *
 * @remarks
 * All UBS digital and print communications must meet WCAG 2.2 Level AA.
 * Colour alone must never be used to convey meaning.
 */
/** The WCAG standard UBS adheres to. */
export declare const ACCESSIBILITY_STANDARD: "WCAG 2.2 Level AA";
/**
 * Minimum contrast ratios for WCAG 2.2 Level AA compliance.
 *
 * @remarks
 * Text contrast is 4.5:1 for standard text, 3:1 for large text (over 18pt / 25px).
 * Icons and graphic objects require 3:1 against background or adjacent colours.
 */
export declare const CONTRAST_RATIOS: {
    /** Minimum contrast ratio for standard text against background. */
    readonly text: 4.5;
    /** Minimum contrast ratio for text over 18pt (25 CSS px). */
    readonly largeText: 3;
    /** Minimum contrast ratio for icons and graphic objects against background or adjacent colours. */
    readonly iconsAndGraphics: 3;
};
/**
 * Minimum chart separator/gap when colour contrast between adjacent segments is below 3:1.
 */
export declare const CHART_SEPARATOR_MIN: "2px";
/**
 * Accessible typography size constraints.
 *
 * @remarks
 * These are the web-accessible equivalents of print sizes.
 * Content must support enlargement up to 400% without loss of functionality.
 */
export declare const ACCESSIBLE_TYPOGRAPHY: {
    /** Minimum accessible font size: 10.5pt (14 CSS px). */
    readonly minimumFontSize: "10.5pt";
    /** Minimum font size in CSS pixels. */
    readonly minimumFontSizePx: 14;
    /** Recommended body font size: 12pt (16 CSS px). */
    readonly recommendedFontSize: "12pt";
    /** Recommended font size in CSS pixels. */
    readonly recommendedFontSizePx: 16;
    /** Recommended line height for 12pt body text: 17pt (22 CSS px). */
    readonly recommendedLineHeight: "17pt";
    /** Recommended line height in CSS pixels. */
    readonly recommendedLineHeightPx: 22;
    /** PDF content must work for enlargement up to this percentage. */
    readonly pdfReflowMaxZoom: 400;
};
/**
 * Minimum gap/separator between chart segments for accessibility.
 *
 * @remarks
 * Gaps must be applied when adjacent chart segments have insufficient colour contrast (below 3:1).
 * Always use 2D charts; never 3D. Different line types required for monochrome sequences.
 */
export declare const CHART_GAP_SPECS: {
    /** Minimum gap for print media. */
    readonly print: "1.5pt";
    /** Minimum gap for screen/digital media. */
    readonly screen: "2px";
    /** Charts must always be 2D, never 3D. */
    readonly dimension: "always 2D, never 3D";
    /** Never rely on colour alone to convey meaning in charts. */
    readonly neverRelyOnColourAlone: true;
    /** Use different line types for complex line charts and monochrome sequences. */
    readonly useLineTypes: "Different line types for complex line charts and monochrome sequences";
};
/**
 * General accessibility rules as boolean flags and string constraints.
 *
 * @remarks
 * All boolean rules are `true` meaning the requirement is active.
 * Colourblind users need additional design features beyond colour alone.
 */
export declare const ACCESSIBILITY_RULES: {
    /** Avoid placing text within images wherever possible. */
    readonly avoidTextInImages: true;
    /** If text must appear in images, minimum contrast is 4.5:1. */
    readonly textInImagesMinContrast: "4.5:1";
    /** All non-decorative images must have alternative text. */
    readonly alternativeTextRequired: true;
    /** Colourblind users need additional design features beyond colour alone. */
    readonly noColourAlone: true;
    /** Documents must have a logical heading structure. */
    readonly logicalHeadingStructure: true;
    /** Documents must have a meaningful title. */
    readonly documentTitle: true;
    /** Documents must declare their language. */
    readonly documentLanguage: true;
};
/** Type representing an accessibility rule key. */
export type AccessibilityRule = keyof typeof ACCESSIBILITY_RULES;
/**
 * UBS-recommended accessibility testing tools.
 */
export declare const ACCESSIBILITY_TOOLS: {
    /** Desktop contrast checker application. */
    readonly desktop: "Colour Contrast Analyser (Paciello Group)";
    /** Online contrast checker. */
    readonly online: "contrastchecker.com";
};
