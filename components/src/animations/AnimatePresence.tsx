/**
 * UBS Design System — AnimatePresence
 *
 * Lightweight wrapper that animates children on mount and unmount.
 * Inspired by Framer Motion's AnimatePresence but zero-dependency.
 * Uses CSS animations from the UBS keyframes library.
 *
 * @example
 * ```tsx
 * // Single element
 * <AnimatePresence animation="fadeIn">
 *   {isVisible && <div>Hello</div>}
 * </AnimatePresence>
 *
 * // Staggered list
 * <AnimatePresence animation="slideInUp" stagger={60}>
 *   {items.map(item => <Card key={item.id}>{item.title}</Card>)}
 * </AnimatePresence>
 * ```
 */
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from 'react';
import {
  animationPresets,
  buildAnimationCSS,
  EXIT_ANIMATION_MAP,
  type AnimationName,
} from './transitions.ts';

export interface AnimatePresenceProps {
  /** Enter animation to apply. */
  animation?: AnimationName;
  /** Exit animation override. If not provided, auto-maps from enter animation. */
  exitAnimation?: AnimationName;
  /** Override duration (ms). */
  duration?: number;
  /** Delay before animation starts (ms). */
  delay?: number;
  /** Stagger interval between children (ms). Only used when multiple children. */
  stagger?: number;
  /** Respect prefers-reduced-motion. Defaults to true. */
  respectReducedMotion?: boolean;
  /** Children to animate. */
  children?: ReactNode;
}

/**
 * AnimatePresence — Animates children on mount/unmount using UBS CSS animations.
 *
 * Single child: wraps in a div with enter/exit animation.
 * Multiple children: applies staggered delays to each child.
 */
export function AnimatePresence({
  animation = 'fadeIn',
  exitAnimation,
  duration,
  delay = 0,
  stagger = 50,
  respectReducedMotion = true,
  children,
}: AnimatePresenceProps) {
  const [isPresent, setIsPresent] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const hasChildren = Children.count(children) > 0;
  const prevHasChildren = useRef(hasChildren);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check reduced motion preference
  const isReducedMotion =
    respectReducedMotion &&
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Track presence state
  useEffect(() => {
    if (hasChildren) {
      setShouldRender(true);
      // Small delay to allow DOM to paint before animating
      requestAnimationFrame(() => {
        setIsPresent(true);
      });
    } else if (prevHasChildren.current && !hasChildren) {
      // Children removed: start exit animation
      setIsPresent(false);

      if (isReducedMotion) {
        setShouldRender(false);
      } else {
        // Wait for exit animation to finish before unmounting
        const exitAnim = exitAnimation ?? EXIT_ANIMATION_MAP[animation];
        const exitDuration = exitAnim
          ? (duration ?? animationPresets[exitAnim].duration)
          : 0;

        const timer = setTimeout(() => {
          setShouldRender(false);
        }, exitDuration + delay);

        return () => clearTimeout(timer);
      }
    }

    prevHasChildren.current = hasChildren;
  }, [hasChildren, animation, exitAnimation, duration, delay, isReducedMotion]);

  if (!shouldRender) return null;

  // Determine current animation
  const resolvedExitAnimation = exitAnimation ?? EXIT_ANIMATION_MAP[animation];
  const currentAnimation = isPresent ? animation : resolvedExitAnimation;

  if (!currentAnimation) {
    // No exit animation defined, just render children
    return <>{children}</>;
  }

  // Reduced motion: render without animation
  if (isReducedMotion) {
    return <>{children}</>;
  }

  // Single child or wrapper mode
  const childArray = Children.toArray(children).filter(isValidElement);

  if (childArray.length === 0) return null;

  if (childArray.length === 1) {
    const animCSS = buildAnimationCSS(currentAnimation, {
      duration,
      delay,
    });

    const child = childArray[0] as ReactElement<{ style?: CSSProperties; className?: string }>;

    return (
      <div
        ref={containerRef}
        style={{ animation: animCSS }}
      >
        {child}
      </div>
    );
  }

  // Multiple children: stagger
  return (
    <div ref={containerRef}>
      {childArray.map((child, index) => {
        const childDelay = delay + index * stagger;
        const animCSS = buildAnimationCSS(currentAnimation, {
          duration,
          delay: childDelay,
        });

        return (
          <div
            key={(child as ReactElement).key ?? index}
            style={{
              animation: animCSS,
              // Start invisible for enter animations, visible for exit
              opacity: isPresent ? undefined : undefined,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

AnimatePresence.displayName = 'AnimatePresence';

export default AnimatePresence;
