import { ReactNode } from 'react';
import { AnimationName } from './transitions.ts';

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
export declare function AnimatePresence({ animation, exitAnimation, duration, delay, stagger, respectReducedMotion, children, }: AnimatePresenceProps): import("react/jsx-runtime").JSX.Element | null;
export declare namespace AnimatePresence {
    var displayName: string;
}
export default AnimatePresence;
