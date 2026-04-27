/**
 * UBS Design System — Animation System
 *
 * Comprehensive animation library following UBS motion rules.
 * Import keyframes.css in your app entry point for CSS animations.
 *
 * @example
 * ```ts
 * // In your app entry
 * import '@ubs/design-system/animations/keyframes.css';
 *
 * // Use the hook
 * import { useAnimation, animationPresets, AnimatePresence } from '@ubs/design-system';
 * ```
 */
export { UBS_DURATION_BASE, ubsDurations, type UBSDuration, ubsEasings, type UBSEasing, type AnimationName, type AnimationPreset, animationPresets, EXIT_ANIMATION_MAP, getStaggerDelays, buildAnimationCSS, } from './transitions.ts';
export { useAnimation, type UseAnimationOptions, type UseAnimationReturn } from './useAnimation.ts';
export { AnimatePresence, type AnimatePresenceProps } from './AnimatePresence.tsx';
