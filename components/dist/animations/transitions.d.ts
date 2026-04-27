/**
 * UBS Design System — Animation Transitions & Presets
 *
 * Typed animation configuration objects following UBS motion rules.
 * Used by useAnimation hook and AnimatePresence component.
 *
 * UBS Motion Rules:
 * - Changes of acceleration for realism. No abrupt starts/stops.
 * - Straight, concise paths. No curved/organic.
 * - Transitions add meaning, not embellishment.
 * - Consistent timing: base duration 100ms, all durations are multiples.
 * - Easing: impulse cubic-bezier(0.22, 1, 0.36, 1), standard cubic-bezier(0.4, 0, 0.2, 1)
 */
/** Base unit: 100ms. All durations are multiples. */
export declare const UBS_DURATION_BASE = 100;
export declare const ubsDurations: {
    /** 100ms — micro-interactions, instant feedback */
    readonly fast: 100;
    /** 200ms — fade, scale, standard transitions */
    readonly normal: number;
    /** 300ms — slide, medium complexity */
    readonly slow: number;
    /** 400ms — impulse reveal */
    readonly impulse: number;
    /** 500ms — logo tab, complex reveals */
    readonly complex: number;
    /** 600ms — moving frame, spring-based */
    readonly spring: number;
    /** 1500ms — shimmer loop */
    readonly shimmer: number;
    /** 1000ms — spinner rotation */
    readonly spin: number;
    /** 2000ms — gentle pulse */
    readonly pulse: number;
};
export type UBSDuration = keyof typeof ubsDurations;
export declare const ubsEasings: {
    /** Standard motion. Smooth acceleration and deceleration. */
    readonly standard: "cubic-bezier(0.4, 0, 0.2, 1)";
    /** Impulse/spring. Fast start, gentle settle. For reveals and emphasis. */
    readonly impulse: "cubic-bezier(0.22, 1, 0.36, 1)";
    /** Ease out. For elements leaving. */
    readonly easeOut: "cubic-bezier(0, 0, 0.2, 1)";
    /** Ease in. For elements entering. */
    readonly easeIn: "cubic-bezier(0.4, 0, 1, 1)";
    /** Linear. For continuous animations (spin). */
    readonly linear: "linear";
};
export type UBSEasing = keyof typeof ubsEasings;
export type AnimationName = 'fadeIn' | 'fadeOut' | 'slideInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'slideOutUp' | 'slideOutDown' | 'slideOutLeft' | 'slideOutRight' | 'scaleIn' | 'scaleOut' | 'revealImpulse' | 'logoTabIn' | 'movingFrameReveal' | 'shimmer' | 'spin' | 'pulse' | 'contentFadeIn';
export interface AnimationPreset {
    /** CSS @keyframes name */
    keyframes: string;
    /** Duration in milliseconds */
    duration: number;
    /** CSS easing function */
    easing: string;
    /** CSS fill-mode */
    fillMode: 'forwards' | 'backwards' | 'both' | 'none';
    /** Number of iterations (Infinity for looping) */
    iterations: number;
    /** Direction for alternating animations */
    direction: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
}
/** Exit animation mapping: enter animation name → exit animation name */
export declare const EXIT_ANIMATION_MAP: Partial<Record<AnimationName, AnimationName>>;
export declare const animationPresets: Record<AnimationName, AnimationPreset>;
/**
 * Calculate staggered animation delays for child elements.
 *
 * @param childCount - Number of children to stagger
 * @param baseDelay - Initial delay before first child animates (ms)
 * @param staggerInterval - Delay between each child (ms). Defaults to 50ms.
 * @returns Array of delay values in milliseconds
 *
 * @example
 * ```ts
 * const delays = getStaggerDelays(5, 100, 60);
 * // [100, 160, 220, 280, 340]
 * ```
 */
export declare function getStaggerDelays(childCount: number, baseDelay?: number, staggerInterval?: number): number[];
/**
 * Build a CSS animation shorthand string from a preset.
 *
 * @param name - Animation preset name
 * @param overrides - Optional overrides for duration, easing, delay
 * @returns CSS animation shorthand value
 *
 * @example
 * ```ts
 * buildAnimationCSS('fadeIn')
 * // "ubs-fadeIn 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms both 1 normal"
 *
 * buildAnimationCSS('slideInUp', { delay: 100, duration: 400 })
 * // "ubs-slideInUp 400ms cubic-bezier(0.4, 0, 0.2, 1) 100ms both 1 normal"
 * ```
 */
export declare function buildAnimationCSS(name: AnimationName, overrides?: {
    duration?: number;
    easing?: string;
    delay?: number;
}): string;
