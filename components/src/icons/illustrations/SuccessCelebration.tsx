/**
 * @module illustrations/SuccessCelebration
 * @description Person with arms raised, achievement stars.
 * UBS illustration style: hand-drawn character, black outlines, red accents.
 */
import { forwardRef } from 'react';
import type { IconSVGProps } from '../types';

export const SuccessCelebration = forwardRef<SVGSVGElement, IconSVGProps>(
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
        {/* Trophy / pedestal */}
        <rect x={80} y={110} width={40} height={8} rx={2} fill="#CCCABC" stroke={colour} strokeWidth={1.2} />
        <rect x={85} y={102} width={30} height={8} rx={1} fill="#CCCABC" stroke={colour} strokeWidth={1.2} />
        {/* Trophy number */}
        <text x={100} y={108} textAnchor="middle" fontSize={5} fontWeight="bold" fill={accentColour} fontFamily="sans-serif">1</text>

        {/* Person standing on pedestal — arms raised */}
        {/* Head */}
        <circle cx={100} cy={44} r={9} stroke={colour} strokeWidth={1.8} />
        {/* Hair */}
        <path d="M92 40c1-5 4-8 9-8s7 3 7.5 7" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Big happy eyes */}
        <circle cx={97} cy={43} r={1.2} fill={colour} />
        <circle cx={103} cy={43} r={1.2} fill={colour} />
        {/* Big open smile */}
        <path d="M95 48c2 2.5 7 2.5 9 0" stroke={colour} strokeWidth={1} strokeLinecap="round" />

        {/* Neck */}
        <line x1={100} y1={53} x2={100} y2={57} stroke={colour} strokeWidth={1.5} />
        {/* Torso */}
        <path d="M90 57h20v16H90V57Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Shirt — red accent (celebration) */}
        <rect x={90} y={57} width={20} height={16} rx={0} fill="none" stroke="none" />
        <line x1={100} y1={57} x2={100} y2={73} stroke={accentColour} strokeWidth={1.5} />
        {/* Collar */}
        <path d="M96 57l4 3 4-3" stroke={colour} strokeWidth={1} strokeLinecap="round" />

        {/* Left arm raised high! */}
        <path d="M90 61c-6-4-14-14-18-24" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Left hand */}
        <path d="M72 37l-3-4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M72 37l-4-1" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        <path d="M72 37l-2-3" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />

        {/* Right arm raised high! */}
        <path d="M110 61c6-4 14-14 18-24" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Right hand */}
        <path d="M128 37l3-4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M128 37l4-1" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        <path d="M128 37l2-3" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />

        {/* Legs */}
        <path d="M94 73v20c0 2 0 4 1 5l4 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M106 73v20c0 2 0 4-1 5l-4 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Feet on pedestal */}
        <path d="M99 101h-8c-2 0-3 1-3 2h14c0-1-1-2-3-2Z" stroke={colour} strokeWidth={1.2} />
        <path d="M101 101h8c2 0 3 1 3 2H98c0-1 1-2 3-2Z" stroke={colour} strokeWidth={1.2} />

        {/* Stars — red accent, celebration! */}
        <path d="M60 20l2 4 4.5 0.7-3.2 3.1 0.8 4.5L60 30l-4.1 2.3 0.8-4.5-3.2-3.1L58 24l2-4Z" fill={accentColour} />
        <path d="M140 18l1.5 3 3.3 0.5-2.4 2.3 0.6 3.3L140 25l-3 1.6 0.6-3.3-2.4-2.3 3.3-0.5 1.5-3Z" fill={accentColour} />
        <path d="M100 10l1 2 2.2 0.3-1.6 1.6 0.4 2.2L100 14.8l-2 1.3 0.4-2.2-1.6-1.6 2.2-0.3 1-2Z" fill={accentColour} />

        {/* Small stars */}
        <circle cx={55} cy={35} r={1.5} fill={accentColour} />
        <circle cx={145} cy={32} r={1.5} fill={accentColour} />
        <circle cx={78} cy={15} r={1} fill={accentColour} />
        <circle cx={122} cy={14} r={1} fill={accentColour} />

        {/* Confetti lines */}
        <line x1={50} y1={25} x2={55} y2={30} stroke={accentColour} strokeWidth={1.5} strokeLinecap="round" />
        <line x1={150} y1={22} x2={146} y2={28} stroke={accentColour} strokeWidth={1.5} strokeLinecap="round" />
        <line x1={65} y1={15} x2={68} y2={22} stroke={colour} strokeWidth={1} strokeLinecap="round" />
        <line x1={132} y1={13} x2={130} y2={20} stroke={colour} strokeWidth={1} strokeLinecap="round" />
        <line x1={85} y1={22} x2={82} y2={16} stroke={colour} strokeWidth={1} strokeLinecap="round" />
        <line x1={115} y1={22} x2={118} y2={16} stroke={colour} strokeWidth={1} strokeLinecap="round" />

        {/* Floor line */}
        <line x1={20} y1={126} x2={180} y2={126} stroke={colour} strokeWidth={1} opacity={0.3} />
      </svg>
    );
  },
);

SuccessCelebration.displayName = 'SuccessCelebration';
