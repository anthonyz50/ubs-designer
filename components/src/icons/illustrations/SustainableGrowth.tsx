/**
 * @module illustrations/SustainableGrowth
 * @description Person with tree/leaf and growth elements.
 * UBS illustration style: hand-drawn character, black outlines, red accents.
 */
import { forwardRef } from 'react';
import type { IconSVGProps } from '../types';

export const SustainableGrowth = forwardRef<SVGSVGElement, IconSVGProps>(
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
        {/* Tree */}
        {/* Trunk */}
        <path d="M140 125v-50" stroke={colour} strokeWidth={2} strokeLinecap="round" />
        {/* Main canopy — organic shape */}
        <path d="M140 75c-8 0-22-5-24-18s8-22 18-24" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M140 75c8 0 22-5 24-18s-8-22-18-24" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Inner leaf cluster */}
        <path d="M134 33c2-8 8-12 14-10" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        <path d="M146 33c-2-8-8-12-14-10" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        {/* Leaf veins */}
        <line x1={140} y1={35} x2={140} y2={55} stroke={colour} strokeWidth={0.8} strokeLinecap="round" opacity={0.4} />
        <line x1={130} y1={50} x2={140} y2={45} stroke={colour} strokeWidth={0.8} strokeLinecap="round" opacity={0.4} />
        <line x1={150} y1={50} x2={140} y2={45} stroke={colour} strokeWidth={0.8} strokeLinecap="round" opacity={0.4} />
        {/* Red accent leaves */}
        <path d="M126 52c-4-2-5-6-3-8s6-1 7 2" stroke={accentColour} strokeWidth={1.2} strokeLinecap="round" />
        <path d="M154 52c4-2 5-6 3-8s-6-1-7 2" stroke={accentColour} strokeWidth={1.2} strokeLinecap="round" />
        <path d="M140 28c-2-4-1-8 2-9s6 2 5 5" stroke={accentColour} strokeWidth={1.2} strokeLinecap="round" />
        {/* Roots */}
        <path d="M140 125c-6 2-14 2-18 0" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        <path d="M140 125c6 2 14 2 18 0" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        <path d="M140 125c-3 4-8 5-12 4" stroke={colour} strokeWidth={1} strokeLinecap="round" />
        <path d="M140 125c3 4 8 5 12 4" stroke={colour} strokeWidth={1} strokeLinecap="round" />

        {/* Growth chart element — small, floating */}
        <rect x={160} y={80} width={28} height={20} rx={2} stroke={colour} strokeWidth={1} />
        <polyline points="164 96 170 90 176 93 184 84" stroke={accentColour} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="180 84 184 84 184 88" stroke={accentColour} strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />

        {/* Person watering / tending tree */}
        {/* Head */}
        <circle cx={55} cy={48} r={8} stroke={colour} strokeWidth={1.8} />
        {/* Hair */}
        <path d="M48 44c0.5-4 3-7 7.5-7s6.5 3 7 6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Eyes */}
        <circle cx={53} cy={47} r={1} fill={colour} />
        <circle cx={58} cy={47} r={1} fill={colour} />
        {/* Warm smile */}
        <path d="M53 51c0.8 1 3 1 4 0" stroke={colour} strokeWidth={0.8} strokeLinecap="round" />

        {/* Neck */}
        <line x1={55} y1={56} x2={55} y2={60} stroke={colour} strokeWidth={1.5} />
        {/* Torso */}
        <path d="M45 60h20v16H45V60Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Shirt accent */}
        <line x1={55} y1={60} x2={55} y2={76} stroke={accentColour} strokeWidth={1.2} />

        {/* Right arm holding watering can */}
        <path d="M65 64c6 0 14-2 20-6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Watering can */}
        <path d="M82 56h12v8H82V56Z" stroke={colour} strokeWidth={1.2} strokeLinejoin="round" />
        <path d="M94 58l8-4" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        <path d="M82 60h-3l-1 4h4" stroke={colour} strokeWidth={1} strokeLinejoin="round" />
        {/* Water drops */}
        <circle cx={104} cy={58} r={1} fill={accentColour} />
        <circle cx={106} cy={62} r={0.8} fill={accentColour} />
        <circle cx={108} cy={66} r={0.6} fill={accentColour} />
        <circle cx={103} cy={64} r={0.7} fill={accentColour} />

        {/* Left arm */}
        <path d="M45 64c-4 2-7 8-6 14" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />

        {/* Legs */}
        <path d="M49 76v28c0 2 0 4 1 5l6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M61 76v28c0 2 0 4-1 5l-6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Feet */}
        <path d="M56 112h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z" stroke={colour} strokeWidth={1.2} />
        <path d="M54 112h10c2 0 3 1.5 3 3H51c0-1.5 1-3 3-3Z" stroke={colour} strokeWidth={1.2} />

        {/* Small seedling near person */}
        <line x1={30} y1={125} x2={30} y2={118} stroke={colour} strokeWidth={1} strokeLinecap="round" />
        <path d="M30 118c-3-1-4-4-2-5s4 0 4 2" stroke={accentColour} strokeWidth={1} strokeLinecap="round" />
        <path d="M30 120c2-2 4-3 5-2s0 3-2 4" stroke={colour} strokeWidth={1} strokeLinecap="round" />

        {/* Ground / earth */}
        <path d="M10 125c20 2 40-1 60 1s40-2 60 0 40 1 60-1" stroke="#B8B3A2" strokeWidth={1.5} strokeLinecap="round" />

        {/* Floor line */}
        <line x1={10} y1={135} x2={190} y2={135} stroke={colour} strokeWidth={1} opacity={0.3} />
      </svg>
    );
  },
);

SustainableGrowth.displayName = 'SustainableGrowth';
