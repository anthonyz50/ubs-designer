/**
 * @module illustrations/CustomerSupport
 * @description Person with headset helping another person.
 * UBS illustration style: hand-drawn character, black outlines, red accents.
 */
import { forwardRef } from 'react';
import type { IconSVGProps } from '../types';

export const CustomerSupport = forwardRef<SVGSVGElement, IconSVGProps>(
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
        {/* === Support Agent (left) === */}
        {/* Head */}
        <circle cx={55} cy={42} r={8} stroke={colour} strokeWidth={1.8} />
        {/* Hair */}
        <path d="M48 38c0.5-4 3-7 7.5-7s6.5 3 7 6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Eyes */}
        <circle cx={53} cy={41} r={1} fill={colour} />
        <circle cx={58} cy={41} r={1} fill={colour} />
        {/* Friendly smile */}
        <path d="M52 45c1.2 1.5 4.5 1.5 5.5 0" stroke={colour} strokeWidth={0.8} strokeLinecap="round" />

        {/* Headset — red accent */}
        <path d="M46.5 38c0-5 3.8-9 8.5-9s8.5 4 8.5 9" stroke={accentColour} strokeWidth={2} strokeLinecap="round" />
        {/* Earpiece left */}
        <rect x={43} y={37} width={4} height={7} rx={2} fill={accentColour} stroke={colour} strokeWidth={0.8} />
        {/* Earpiece right */}
        <rect x={63} y={37} width={4} height={7} rx={2} stroke={colour} strokeWidth={0.8} />
        {/* Microphone */}
        <path d="M43 44c-2 0-4 2-4 4v2c0 1 1 2 2 2h2" stroke={colour} strokeWidth={1} strokeLinecap="round" />
        <circle cx={43} cy={52} r={2} fill={accentColour} stroke={colour} strokeWidth={0.8} />

        {/* Neck */}
        <line x1={55} y1={50} x2={55} y2={54} stroke={colour} strokeWidth={1.5} />
        {/* Torso */}
        <path d="M45 54h20v16H45V54Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Shirt accent */}
        <line x1={55} y1={54} x2={55} y2={70} stroke={accentColour} strokeWidth={1.2} />
        {/* Badge */}
        <rect x={48} y={56} width={5} height={4} rx={1} stroke={colour} strokeWidth={0.8} />
        <circle cx={50.5} cy={57.5} r={0.8} fill={accentColour} />

        {/* Left arm gesturing */}
        <path d="M45 58c-5 2-10 8-8 16" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Right arm typing */}
        <path d="M65 58c4 2 8 8 6 16" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />

        {/* Desk */}
        <rect x={30} y={76} width={50} height={3} rx={1} fill="#CCCABC" stroke={colour} strokeWidth={1} />
        {/* Monitor */}
        <rect x={40} y={60} width={30} height={16} rx={2} stroke={colour} strokeWidth={1.2} />
        <line x1={55} y1={76} x2={55} y2={79} stroke={colour} strokeWidth={1} />
        <line x1={50} y1={79} x2={60} y2={79} stroke={colour} strokeWidth={1} strokeLinecap="round" />
        {/* Screen content */}
        <line x1={44} y1={66} x2={56} y2={66} stroke={colour} strokeWidth={0.6} strokeLinecap="round" opacity={0.4} />
        <line x1={44} y1={69} x2={52} y2={69} stroke={accentColour} strokeWidth={0.6} strokeLinecap="round" />
        <line x1={44} y1={72} x2={54} y2={72} stroke={colour} strokeWidth={0.6} strokeLinecap="round" opacity={0.4} />

        {/* Legs */}
        <path d="M49 70v24c0 2 0 3 1 4l5 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M61 70v24c0 2 0 3-1 4l-5 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Feet */}
        <path d="M55 101h-8c-2 0-3 1.5-3 3h14c0-1.5-1-3-3-3Z" stroke={colour} strokeWidth={1.2} />
        <path d="M55 101h8c2 0 3 1.5 3 3H52c0-1.5 1-3 3-3Z" stroke={colour} strokeWidth={1.2} />

        {/* Speech bubble connecting to customer */}
        <path d="M85 35h50c3 0 5 2 5 5v20c0 3-2 5-5 5h-35l-6 8v-8h-9c-3 0-5-2-5-5V40c0-3 2-5 5-5Z" stroke={colour} strokeWidth={1.2} />
        {/* Chat text lines */}
        <line x1={92} y1={44} x2={128} y2={44} stroke={colour} strokeWidth={0.8} strokeLinecap="round" opacity={0.4} />
        <line x1={92} y1={49} x2={122} y2={49} stroke={accentColour} strokeWidth={0.8} strokeLinecap="round" />
        <line x1={92} y1={54} x2={126} y2={54} stroke={colour} strokeWidth={0.8} strokeLinecap="round" opacity={0.4} />
        {/* Chat typing indicator */}
        <circle cx={95} cy={60} r={1.5} fill="#B8B3A2" />
        <circle cx={101} cy={60} r={1.5} fill="#B8B3A2" />
        <circle cx={107} cy={60} r={1.5} fill="#B8B3A2" />

        {/* === Customer (right, smaller / in background) === */}
        {/* Head */}
        <circle cx={158} cy={72} r={7} stroke={colour} strokeWidth={1.5} />
        {/* Hair */}
        <path d="M152 68c0.5-3 3-6 6.5-6s5.5 3 6 5" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        {/* Eyes */}
        <circle cx={156} cy={71} r={0.8} fill={colour} />
        <circle cx={160} cy={71} r={0.8} fill={colour} />
        {/* Slight concern becoming smile */}
        <path d="M155 75c1 0.8 3.5 0.8 4.5 0" stroke={colour} strokeWidth={0.7} strokeLinecap="round" />

        {/* Neck */}
        <line x1={158} y1={79} x2={158} y2={82} stroke={colour} strokeWidth={1.2} />
        {/* Torso */}
        <path d="M150 82h16v12h-16V82Z" stroke={colour} strokeWidth={1.2} strokeLinejoin="round" />

        {/* Arms */}
        <path d="M150 86c-3 2-5 6-4 10" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        <path d="M166 86c3 2 5 6 4 10" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />

        {/* Legs */}
        <path d="M153 94v18c0 1 0 3 0.5 4l4 2" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        <path d="M163 94v18c0 1 0 3-0.5 4l-4 2" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        {/* Feet */}
        <path d="M157.5 118h-7c-1.5 0-2.5 1-2.5 2.5h12c0-1.5-1-2.5-2.5-2.5Z" stroke={colour} strokeWidth={1} />
        <path d="M158.5 118h7c1.5 0 2.5 1 2.5 2.5h-12c0-1.5 1-2.5 2.5-2.5Z" stroke={colour} strokeWidth={1} />

        {/* Customer holding phone */}
        <rect x={168} y={88} width={8} height={14} rx={1} stroke={colour} strokeWidth={0.8} />
        <line x1={170} y1={98} x2={174} y2={98} stroke={colour} strokeWidth={0.5} strokeLinecap="round" />

        {/* Satisfaction stars */}
        <circle cx={180} cy={78} r={1.5} fill={accentColour} />
        <circle cx={184} cy={82} r={1} fill={accentColour} />
        <circle cx={178} cy={84} r={1} fill={accentColour} />

        {/* Floor line */}
        <line x1={15} y1={128} x2={185} y2={128} stroke={colour} strokeWidth={1} opacity={0.3} />
      </svg>
    );
  },
);

CustomerSupport.displayName = 'CustomerSupport';
