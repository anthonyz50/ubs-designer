/**
 * UBS Design System — Icon Tokens
 *
 * Illustrative icons, web/app functional icons, and animation specifications.
 * Source: ubs.frontify.com
 *
 * @remarks
 * UBS uses two icon families: illustrative (≥24px, expressive) and
 * web/app (functional, pixel-perfect at specific sizes).
 * Icons must never be resized from the library; use the correct size variant.
 */
/**
 * Illustrative icon specifications.
 *
 * @remarks
 * Standard icon type for the majority of applications.
 * Minimum size is 24px. Line weight ratio is always 1:2.
 * Red accent appears on the thicker line, used sparingly and in context.
 */
export declare const ILLUSTRATIVE_ICON: {
    /** Minimum display size for illustrative icons. */
    readonly minSize: 24;
    /** Line weight ratio (thin:thick). */
    readonly lineWeightRatio: "1:2";
    /** Red accent configuration. */
    readonly redAccent: {
        /** Red accent is always placed on the thicker line. */
        readonly placement: "always on the thicker line";
        /** Use sparingly and only in meaningful context. */
        readonly usage: "sparingly and in context";
    };
    /** Visual character of illustrative icons. */
    readonly character: {
        /** Shapes are geometric and open. */
        readonly shapes: "geometric and open";
        /** Straight line ends, sharp corners mixed with rounded where content fits. */
        readonly corners: "straight line ends, sharp corners mixed with rounded where content fits";
    };
};
/**
 * Available illustrative icon colour variants.
 */
export declare const ILLUSTRATIVE_ICON_VARIANTS: readonly ["black with red accent", "all black"];
/** Type representing a valid illustrative icon variant. */
export type IllustrativeIconVariant = typeof ILLUSTRATIVE_ICON_VARIANTS[number];
/**
 * Illustrative icon usage rules. All restrictions are active (true).
 */
export declare const ILLUSTRATIVE_ICON_RULES: {
    /** Don't cram too many ideas into one icon. */
    readonly noTooManyIdeasInOneIcon: true;
    /** Icons must convey meaning, not be decorative. */
    readonly noDecorativeUsage: true;
    /** Icon meaning must be immediately clear. */
    readonly noUnclearMeaning: true;
    /** Icons must not substitute for photographs or illustrations. */
    readonly noSubstitutionOfImages: true;
};
/**
 * Web/app icon sizes for functional UI elements.
 *
 * @remarks
 * For navigation bars, tab bars, menus, and other functional elements.
 * Icons are pixel-perfect at these sizes. Do not resize from library.
 * Black only. Open line ends for a light, optimistic look.
 */
export declare const WEB_APP_ICON_SIZES: {
    /** Small icon: 12px. For compact UI elements. */
    readonly small: 12;
    /** Medium icon: 16px. Default functional icon size. */
    readonly medium: 16;
    /** Large icon: 24px. For prominent UI elements. */
    readonly large: 24;
};
/** Type representing a valid web/app icon size key. */
export type WebAppIconSize = keyof typeof WEB_APP_ICON_SIZES;
/** Web/app icon colour. Always black. */
export declare const WEB_APP_ICON_COLOUR: "black only";
/**
 * Web/app icon usage rules.
 */
export declare const WEB_APP_ICON_RULES: {
    /** Icons are pixel-perfect. Do not resize from library. */
    readonly noResize: true;
    /** Keep icons simple and clear. */
    readonly keepSimple: true;
    /** Open line ends for a light look and optimistic touch. */
    readonly openEnds: true;
    /** Safe zone applied to balance differently shaped icons. */
    readonly safeZone: true;
};
/**
 * Icon animation specifications.
 *
 * @remarks
 * Red accent appears at the end of the animation to underline the message.
 * Pace is fast with eased movement for a smooth presentation loop.
 */
export declare const ICON_ANIMATION: {
    /** Red accent appears at the end to underline the message. */
    readonly redAccentAppearance: "at the end to underline the message";
    /** Animation pace: fast with eased movement. */
    readonly pace: "fast with eased movement";
    /** Animation should loop smoothly. */
    readonly loop: "smooth presentation";
};
/**
 * Supported icon animation output formats.
 */
export declare const ICON_ANIMATION_FORMATS: readonly ["GIF", "MP4", "MOV with transparency", "SVG (static)"];
/** Type representing a valid icon animation format. */
export type IconAnimationFormat = typeof ICON_ANIMATION_FORMATS[number];
