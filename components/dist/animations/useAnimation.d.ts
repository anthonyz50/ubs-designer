import { RefObject } from 'react';
import { AnimationName } from './transitions.ts';

export interface UseAnimationOptions {
    /** Override default duration (ms) */
    duration?: number;
    /** Delay before animation starts (ms) */
    delay?: number;
    /** Override default easing */
    easing?: string;
    /** Auto-play on mount. Defaults to true. */
    autoPlay?: boolean;
    /** Callback when animation finishes */
    onFinish?: () => void;
    /** Callback when animation is cancelled */
    onCancel?: () => void;
    /** Respect prefers-reduced-motion. Defaults to true. */
    respectReducedMotion?: boolean;
}
export interface UseAnimationReturn {
    /** Whether the animation is currently running */
    isAnimating: boolean;
    /** Play (or replay) the animation */
    play: () => void;
    /** Pause the animation */
    pause: () => void;
    /** Cancel and reset the animation to its initial state */
    reset: () => void;
}
/**
 * Hook that applies a UBS animation preset to a DOM element using the Web Animations API.
 *
 * @param ref - React ref to the target element
 * @param animation - UBS animation preset name
 * @param options - Optional configuration overrides
 * @returns Animation control object
 */
export declare function useAnimation(ref: RefObject<HTMLElement | null>, animation: AnimationName, options?: UseAnimationOptions): UseAnimationReturn;
export default useAnimation;
