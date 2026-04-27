/**
 * UBS Design System — useAnimation Hook
 *
 * Wraps the Web Animations API with UBS animation presets.
 * Provides imperative control (play, pause, reset) and state tracking.
 *
 * @example
 * ```tsx
 * function FadeInCard() {
 *   const ref = useRef<HTMLDivElement>(null);
 *   const { isAnimating, play, reset } = useAnimation(ref, 'fadeIn');
 *
 *   return (
 *     <div ref={ref}>
 *       <button onClick={play}>Play</button>
 *       <button onClick={reset}>Reset</button>
 *       {isAnimating && <span>Animating…</span>}
 *     </div>
 *   );
 * }
 * ```
 */
import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';
import { animationPresets, ubsEasings, type AnimationName } from './transitions.ts';

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
export function useAnimation(
  ref: RefObject<HTMLElement | null>,
  animation: AnimationName,
  options: UseAnimationOptions = {},
): UseAnimationReturn {
  const {
    duration: durationOverride,
    delay = 0,
    easing: easingOverride,
    autoPlay = true,
    onFinish,
    onCancel,
    respectReducedMotion = true,
  } = options;

  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<Animation | null>(null);

  const preset = animationPresets[animation];

  const resolvedDuration = durationOverride ?? preset.duration;
  const resolvedEasing = easingOverride ?? preset.easing;

  /** Check if user prefers reduced motion */
  const prefersReducedMotion = useCallback((): boolean => {
    if (!respectReducedMotion) return false;
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, [respectReducedMotion]);

  /** Build Web Animations API keyframe + options from a UBS preset */
  const getKeyframeEffect = useCallback((): {
    keyframes: Keyframe[];
    options: KeyframeAnimationOptions;
  } => {
    // If reduced motion is preferred, use instant transition
    const effectiveDuration = prefersReducedMotion() ? 0 : resolvedDuration;

    // Map UBS preset keyframe names to Web Animations API keyframes
    const keyframeMap: Record<string, Keyframe[]> = {
      'ubs-fadeIn': [{ opacity: 0 }, { opacity: 1 }],
      'ubs-fadeOut': [{ opacity: 1 }, { opacity: 0 }],
      'ubs-slideInUp': [
        { opacity: 0, transform: 'translateY(16px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      'ubs-slideInDown': [
        { opacity: 0, transform: 'translateY(-16px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      'ubs-slideInLeft': [
        { opacity: 0, transform: 'translateX(-16px)' },
        { opacity: 1, transform: 'translateX(0)' },
      ],
      'ubs-slideInRight': [
        { opacity: 0, transform: 'translateX(16px)' },
        { opacity: 1, transform: 'translateX(0)' },
      ],
      'ubs-slideOutUp': [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(-16px)' },
      ],
      'ubs-slideOutDown': [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(16px)' },
      ],
      'ubs-slideOutLeft': [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(-16px)' },
      ],
      'ubs-slideOutRight': [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(16px)' },
      ],
      'ubs-scaleIn': [
        { opacity: 0, transform: 'scale(0.95)' },
        { opacity: 1, transform: 'scale(1)' },
      ],
      'ubs-scaleOut': [
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(0.95)' },
      ],
      'ubs-revealImpulse': [
        { transform: 'scaleY(0)', transformOrigin: 'top' },
        { transform: 'scaleY(1)', transformOrigin: 'top' },
      ],
      'ubs-logoTabIn': [
        { opacity: 0, transform: 'translate(-24px, -24px)' },
        { opacity: 1, transform: 'translate(0, 0)' },
      ],
      'ubs-movingFrameReveal': [
        { opacity: 0, transform: 'translateX(100%)' },
        { opacity: 1, transform: 'translateX(0)' },
      ],
      'ubs-shimmer': [
        { backgroundPosition: '-200% 0' },
        { backgroundPosition: '200% 0' },
      ],
      'ubs-spin': [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' },
      ],
      'ubs-pulse': [
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0.7, transform: 'scale(1.05)', offset: 0.5 },
        { opacity: 1, transform: 'scale(1)' },
      ],
      'ubs-contentFadeIn': [
        { opacity: 0, transform: 'translateY(8px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
    };

    const keyframes = keyframeMap[preset.keyframes] ?? [{ opacity: 0 }, { opacity: 1 }];

    return {
      keyframes,
      options: {
        duration: effectiveDuration,
        delay,
        easing: resolvedEasing,
        fill: preset.fillMode as FillMode,
        iterations: preset.iterations,
        direction: preset.direction as PlaybackDirection,
      },
    };
  }, [preset, resolvedDuration, resolvedEasing, delay, prefersReducedMotion]);

  /** Play animation */
  const play = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    // Cancel any existing animation
    if (animationRef.current) {
      animationRef.current.cancel();
    }

    const { keyframes, options: animOptions } = getKeyframeEffect();
    const anim = el.animate(keyframes, animOptions);

    animationRef.current = anim;
    setIsAnimating(true);

    anim.onfinish = () => {
      setIsAnimating(false);
      onFinish?.();
    };

    anim.oncancel = () => {
      setIsAnimating(false);
      onCancel?.();
    };
  }, [ref, getKeyframeEffect, onFinish, onCancel]);

  /** Pause animation */
  const pause = useCallback(() => {
    animationRef.current?.pause();
  }, []);

  /** Reset animation */
  const reset = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.cancel();
      animationRef.current = null;
    }
    setIsAnimating(false);
  }, []);

  // Auto-play on mount
  useEffect(() => {
    if (autoPlay) {
      play();
    }

    return () => {
      animationRef.current?.cancel();
    };
  }, [autoPlay, play]);

  return { isAnimating, play, pause, reset };
}

export default useAnimation;
