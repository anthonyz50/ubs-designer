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

// CSS keyframes — must be imported as a side-effect in consumer apps
// import './keyframes.css';

// Transitions, presets, utilities
export {
  // Timing
  UBS_DURATION_BASE,
  ubsDurations,
  type UBSDuration,

  // Easing
  ubsEasings,
  type UBSEasing,

  // Animation names and presets
  type AnimationName,
  type AnimationPreset,
  animationPresets,
  EXIT_ANIMATION_MAP,

  // Utilities
  getStaggerDelays,
  buildAnimationCSS,
} from './transitions.ts';

// Hook
export { useAnimation, type UseAnimationOptions, type UseAnimationReturn } from './useAnimation.ts';

// Component
export { AnimatePresence, type AnimatePresenceProps } from './AnimatePresence.tsx';
