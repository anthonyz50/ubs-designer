/**
 * @module illustrations/TeamCollaboration
 * @description Two people shaking hands / meeting.
 * UBS illustration style: hand-drawn character, black outlines, red accents.
 */
import { forwardRef } from 'react';
import type { IconSVGProps } from '../types';

export const TeamCollaboration = forwardRef<SVGSVGElement, IconSVGProps>(
  ({ size = 200, colour = '#000000', accentColour = '#E60000', className, ...rest }, ref) => {
    const w = typeof size === 'number' ? size : 200;
    const h = Math.round(w * 0.75);
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 150"
        width={w}
        height={h}
        fill="none"
        aria-hidden="true"
        role="img"
        focusable="false"
        className={className}
        {...rest}
      >
        {/* === Person Left === */}
        {/* Head */}
        <circle cx={62} cy={38} r={8} stroke={colour} strokeWidth={1.8} />
        {/* Hair */}
        <path d="M55 34c1-5 4-8 8-8s6 3 7 7" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Eyes */}
        <circle cx={60} cy={37} r={1} fill={colour} />
        <circle cx={65} cy={37} r={1} fill={colour} />
        {/* Smile */}
        <path d="M59 41c1.2 1.2 4 1.2 5 0" stroke={colour} strokeWidth={0.8} strokeLinecap="round" />
        {/* Neck */}
        <line x1={62} y1={46} x2={62} y2={50} stroke={colour} strokeWidth={1.5} />
        {/* Torso */}
        <path d="M52 50h20v16H52V50Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Jacket accent */}
        <line x1={62} y1={50} x2={62} y2={66} stroke={accentColour} strokeWidth={1.2} />
        {/* Left arm (at side) */}
        <path d="M52 54c-5 2-8 8-7 16" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Right arm (reaching to shake) */}
        <path d="M72 54c4 2 12 8 18 12" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Legs */}
        <path d="M56 66v30c0 2 0 4 1 5l6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M68 66v30c0 2 0 4-1 5l-6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Left foot */}
        <path d="M63 104h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z" stroke={colour} strokeWidth={1.2} />
        {/* Right foot */}
        <path d="M61 104h10c2 0 3 1.5 3 3H58c0-1.5 1-3 3-3Z" stroke={colour} strokeWidth={1.2} />

        {/* === Person Right === */}
        {/* Head */}
        <circle cx={138} cy={38} r={8} stroke={colour} strokeWidth={1.8} />
        {/* Hair (shorter) */}
        <path d="M131 35c0.5-4 3-7 7.5-7s7 3 7 6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Eyes */}
        <circle cx={136} cy={37} r={1} fill={colour} />
        <circle cx={141} cy={37} r={1} fill={colour} />
        {/* Smile */}
        <path d="M135 41c1.2 1.2 4 1.2 5 0" stroke={colour} strokeWidth={0.8} strokeLinecap="round" />
        {/* Neck */}
        <line x1={138} y1={46} x2={138} y2={50} stroke={colour} strokeWidth={1.5} />
        {/* Torso */}
        <path d="M128 50h20v16h-20V50Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Shirt detail */}
        <path d="M134 50l4 3 4-3" stroke={colour} strokeWidth={1} strokeLinecap="round" />
        {/* Right arm (at side) */}
        <path d="M148 54c5 2 8 8 7 16" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Left arm (reaching to shake) */}
        <path d="M128 54c-4 2-12 8-18 12" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Legs */}
        <path d="M132 66v30c0 2 0 4 1 5l6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M144 66v30c0 2 0 4-1 5l-6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Left foot */}
        <path d="M139 104h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z" stroke={colour} strokeWidth={1.2} />
        {/* Right foot */}
        <path d="M137 104h10c2 0 3 1.5 3 3h-16c0-1.5 1-3 3-3Z" stroke={colour} strokeWidth={1.2} />

        {/* === Handshake area === */}
        {/* Clasped hands */}
        <path d="M90 66c2 0 4 1 5 2l4-2c2-1 4 0 5 1l2 3c1 2 0 3-1 4l-6 4c-2 1-4 1-5 0l-4-4c-1-2-1-4 0-5l1-2Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Handshake accent — red emphasis */}
        <path d="M94 68l6 6" stroke={accentColour} strokeWidth={2} strokeLinecap="round" />

        {/* Connection sparkles */}
        <circle cx={100} cy={54} r={1.5} fill={accentColour} />
        <circle cx={95} cy={50} r={1} fill={accentColour} />
        <circle cx={105} cy={50} r={1} fill={accentColour} />
        <line x1={100} y1={46} x2={100} y2={42} stroke={accentColour} strokeWidth={1} strokeLinecap="round" />
        <line x1={92} y1={48} x2={89} y2={44} stroke={accentColour} strokeWidth={1} strokeLinecap="round" />
        <line x1={108} y1={48} x2={111} y2={44} stroke={accentColour} strokeWidth={1} strokeLinecap="round" />

        {/* Document between them (shared project) */}
        <rect x={94} y={82} width={12} height={16} rx={1} stroke={colour} strokeWidth={1} />
        <line x1={97} y1={87} x2={103} y2={87} stroke={colour} strokeWidth={0.8} strokeLinecap="round" />
        <line x1={97} y1={90} x2={103} y2={90} stroke={colour} strokeWidth={0.8} strokeLinecap="round" />
        <line x1={97} y1={93} x2={101} y2={93} stroke={colour} strokeWidth={0.8} strokeLinecap="round" />

        {/* Floor line */}
        <line x1={20} y1={118} x2={180} y2={118} stroke={colour} strokeWidth={1} opacity={0.3} />
      </svg>
    );
  },
);

TeamCollaboration.displayName = 'TeamCollaboration';
