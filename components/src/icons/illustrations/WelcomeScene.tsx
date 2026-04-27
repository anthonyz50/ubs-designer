/**
 * @module illustrations/WelcomeScene
 * @description Person at desk with laptop, welcoming gesture.
 * UBS illustration style: hand-drawn character, black outlines, red accents.
 */
import { forwardRef } from 'react';
import type { IconSVGProps } from '../types';

export const WelcomeScene = forwardRef<SVGSVGElement, IconSVGProps>(
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
        {/* Desk */}
        <path d="M30 105h140v4H30z" fill="#CCCABC" />
        <rect x={30} y={105} width={140} height={4} rx={1} stroke={colour} strokeWidth={1.5} />
        {/* Desk legs */}
        <line x1={40} y1={109} x2={38} y2={142} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <line x1={160} y1={109} x2={162} y2={142} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />

        {/* Chair */}
        <path d="M52 112c-1 0-3 1-3 4v20c0 2 1 3 2 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M68 112c1 0 3 1 3 4v20c0 2-1 3-2 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M49 116h22" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />

        {/* Laptop base */}
        <path d="M80 103h50l3-2H77l3 2Z" fill="#B8B3A2" stroke={colour} strokeWidth={1.2} strokeLinejoin="round" />
        {/* Laptop screen */}
        <rect x={83} y={78} width={44} height={25} rx={2} stroke={colour} strokeWidth={1.5} />
        {/* Screen content */}
        <line x1={89} y1={85} x2={105} y2={85} stroke={accentColour} strokeWidth={1.5} strokeLinecap="round" />
        <line x1={89} y1={90} x2={120} y2={90} stroke={colour} strokeWidth={1} strokeLinecap="round" opacity={0.4} />
        <line x1={89} y1={94} x2={115} y2={94} stroke={colour} strokeWidth={1} strokeLinecap="round" opacity={0.4} />

        {/* Person — body */}
        {/* Head */}
        <circle cx={60} cy={62} r={8} stroke={colour} strokeWidth={1.8} />
        {/* Hair */}
        <path d="M53 58c0-5 3-9 8-9s7 4 7 8" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Eye */}
        <circle cx={58} cy={61} r={1} fill={colour} />
        <circle cx={63} cy={61} r={1} fill={colour} />
        {/* Smile */}
        <path d="M57 65c1 1.5 4 1.5 5 0" stroke={colour} strokeWidth={1} strokeLinecap="round" />

        {/* Neck */}
        <line x1={60} y1={70} x2={60} y2={74} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Torso */}
        <path d="M50 74h20c1 0 2 1 2 2v14H48V76c0-1 1-2 2-2Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Shirt accent */}
        <line x1={60} y1={74} x2={60} y2={90} stroke={accentColour} strokeWidth={1.5} strokeLinecap="round" />

        {/* Left arm (resting on desk) */}
        <path d="M50 78c-5 2-8 8-8 15l-2 12" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Right arm (waving) */}
        <path d="M70 78c4-2 10-6 16-14" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Waving hand */}
        <path d="M86 64c1-2 3-3 4-2s0 3-1 4l-3 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Motion lines for wave */}
        <line x1={92} y1={60} x2={96} y2={58} stroke={accentColour} strokeWidth={1} strokeLinecap="round" />
        <line x1={91} y1={64} x2={95} y2={63} stroke={accentColour} strokeWidth={1} strokeLinecap="round" />
        <line x1={90} y1={68} x2={94} y2={68} stroke={accentColour} strokeWidth={1} strokeLinecap="round" />

        {/* Legs */}
        <path d="M52 90v18c0 1 0 3 2 4l6 2" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M68 90v18c0 1 0 3-2 4l-6 2" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Feet */}
        <path d="M60 114h-8c-2 0-3 1-3 2v2h14v-2c0-1-1-2-3-2Z" stroke={colour} strokeWidth={1.2} strokeLinejoin="round" />

        {/* Coffee mug */}
        <rect x={140} y={96} width={8} height={9} rx={1} stroke={colour} strokeWidth={1.2} />
        <path d="M148 98h3a2 2 0 0 1 0 4h-3" stroke={colour} strokeWidth={1} />
        {/* Steam */}
        <path d="M143 94c0-2 1-3 0-5" stroke={colour} strokeWidth={0.8} strokeLinecap="round" opacity={0.5} />
        <path d="M146 93c0-2-1-3 0-5" stroke={colour} strokeWidth={0.8} strokeLinecap="round" opacity={0.5} />

        {/* Plant */}
        <rect x={155} y={97} width={10} height={8} rx={1} fill="#CCCABC" stroke={colour} strokeWidth={1} />
        <path d="M160 97c0-4-3-6-5-7" stroke={colour} strokeWidth={1} strokeLinecap="round" />
        <path d="M160 97c0-5 2-7 5-8" stroke={colour} strokeWidth={1} strokeLinecap="round" />
        <path d="M160 93c-2-3-1-6 1-7" stroke={accentColour} strokeWidth={1} strokeLinecap="round" />

        {/* Floor line */}
        <line x1={10} y1={143} x2={190} y2={143} stroke={colour} strokeWidth={1} strokeLinecap="round" opacity={0.3} />
      </svg>
    );
  },
);

WelcomeScene.displayName = 'WelcomeScene';
