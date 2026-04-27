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

// ─── Timing Tokens ──────────────────────────────────────────────────

/** Base unit: 100ms. All durations are multiples. */
export const UBS_DURATION_BASE = 100;

export const ubsDurations = {
  /** 100ms — micro-interactions, instant feedback */
  fast: UBS_DURATION_BASE,
  /** 200ms — fade, scale, standard transitions */
  normal: UBS_DURATION_BASE * 2,
  /** 300ms — slide, medium complexity */
  slow: UBS_DURATION_BASE * 3,
  /** 400ms — impulse reveal */
  impulse: UBS_DURATION_BASE * 4,
  /** 500ms — logo tab, complex reveals */
  complex: UBS_DURATION_BASE * 5,
  /** 600ms — moving frame, spring-based */
  spring: UBS_DURATION_BASE * 6,
  /** 1500ms — shimmer loop */
  shimmer: UBS_DURATION_BASE * 15,
  /** 1000ms — spinner rotation */
  spin: UBS_DURATION_BASE * 10,
  /** 2000ms — gentle pulse */
  pulse: UBS_DURATION_BASE * 20,
} as const;

export type UBSDuration = keyof typeof ubsDurations;

// ─── Easing Tokens ──────────────────────────────────────────────────

export const ubsEasings = {
  /** Standard motion. Smooth acceleration and deceleration. */
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  /** Impulse/spring. Fast start, gentle settle. For reveals and emphasis. */
  impulse: 'cubic-bezier(0.22, 1, 0.36, 1)',
  /** Ease out. For elements leaving. */
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  /** Ease in. For elements entering. */
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  /** Linear. For continuous animations (spin). */
  linear: 'linear',
} as const;

export type UBSEasing = keyof typeof ubsEasings;

// ─── Animation Name Type ────────────────────────────────────────────

export type AnimationName =
  | 'fadeIn'
  | 'fadeOut'
  | 'slideInUp'
  | 'slideInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideOutUp'
  | 'slideOutDown'
  | 'slideOutLeft'
  | 'slideOutRight'
  | 'scaleIn'
  | 'scaleOut'
  | 'revealImpulse'
  | 'logoTabIn'
  | 'movingFrameReveal'
  | 'shimmer'
  | 'spin'
  | 'pulse'
  | 'contentFadeIn';

// ─── Animation Preset ───────────────────────────────────────────────

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
export const EXIT_ANIMATION_MAP: Partial<Record<AnimationName, AnimationName>> = {
  fadeIn: 'fadeOut',
  slideInUp: 'slideOutUp',
  slideInDown: 'slideOutDown',
  slideInLeft: 'slideOutLeft',
  slideInRight: 'slideOutRight',
  scaleIn: 'scaleOut',
};

// ─── Animation Presets ──────────────────────────────────────────────

export const animationPresets: Record<AnimationName, AnimationPreset> = {
  fadeIn: {
    keyframes: 'ubs-fadeIn',
    duration: ubsDurations.normal,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  fadeOut: {
    keyframes: 'ubs-fadeOut',
    duration: ubsDurations.normal,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  slideInUp: {
    keyframes: 'ubs-slideInUp',
    duration: ubsDurations.slow,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  slideInDown: {
    keyframes: 'ubs-slideInDown',
    duration: ubsDurations.slow,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  slideInLeft: {
    keyframes: 'ubs-slideInLeft',
    duration: ubsDurations.slow,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  slideInRight: {
    keyframes: 'ubs-slideInRight',
    duration: ubsDurations.slow,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  slideOutUp: {
    keyframes: 'ubs-slideOutUp',
    duration: ubsDurations.slow,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  slideOutDown: {
    keyframes: 'ubs-slideOutDown',
    duration: ubsDurations.slow,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  slideOutLeft: {
    keyframes: 'ubs-slideOutLeft',
    duration: ubsDurations.slow,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  slideOutRight: {
    keyframes: 'ubs-slideOutRight',
    duration: ubsDurations.slow,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  scaleIn: {
    keyframes: 'ubs-scaleIn',
    duration: ubsDurations.normal,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  scaleOut: {
    keyframes: 'ubs-scaleOut',
    duration: ubsDurations.normal,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  revealImpulse: {
    keyframes: 'ubs-revealImpulse',
    duration: ubsDurations.impulse,
    easing: ubsEasings.impulse,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  logoTabIn: {
    keyframes: 'ubs-logoTabIn',
    duration: ubsDurations.complex,
    easing: ubsEasings.impulse,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  movingFrameReveal: {
    keyframes: 'ubs-movingFrameReveal',
    duration: ubsDurations.spring,
    easing: ubsEasings.impulse,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
  shimmer: {
    keyframes: 'ubs-shimmer',
    duration: ubsDurations.shimmer,
    easing: ubsEasings.linear,
    fillMode: 'none',
    iterations: Infinity,
    direction: 'normal',
  },
  spin: {
    keyframes: 'ubs-spin',
    duration: ubsDurations.spin,
    easing: ubsEasings.linear,
    fillMode: 'none',
    iterations: Infinity,
    direction: 'normal',
  },
  pulse: {
    keyframes: 'ubs-pulse',
    duration: ubsDurations.pulse,
    easing: ubsEasings.standard,
    fillMode: 'none',
    iterations: Infinity,
    direction: 'normal',
  },
  contentFadeIn: {
    keyframes: 'ubs-contentFadeIn',
    duration: ubsDurations.normal,
    easing: ubsEasings.standard,
    fillMode: 'both',
    iterations: 1,
    direction: 'normal',
  },
};

// ─── Stagger Utility ────────────────────────────────────────────────

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
export function getStaggerDelays(
  childCount: number,
  baseDelay: number = 0,
  staggerInterval: number = 50,
): number[] {
  return Array.from({ length: childCount }, (_, i) => baseDelay + i * staggerInterval);
}

// ─── CSS Animation String Builder ───────────────────────────────────

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
export function buildAnimationCSS(
  name: AnimationName,
  overrides?: {
    duration?: number;
    easing?: string;
    delay?: number;
  },
): string {
  const preset = animationPresets[name];
  const duration = overrides?.duration ?? preset.duration;
  const easing = overrides?.easing ?? preset.easing;
  const delay = overrides?.delay ?? 0;
  const iterations = preset.iterations === Infinity ? 'infinite' : preset.iterations;

  return `${preset.keyframes} ${duration}ms ${easing} ${delay}ms ${preset.fillMode} ${iterations} ${preset.direction}`;
}
