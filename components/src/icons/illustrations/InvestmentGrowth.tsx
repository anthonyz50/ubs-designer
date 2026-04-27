/**
 * @module illustrations/InvestmentGrowth
 * @description Person watching upward trend chart with plant growing.
 * UBS illustration style: hand-drawn character, black outlines, red accents.
 */
import { forwardRef } from 'react';
import type { IconSVGProps } from '../types';

export const InvestmentGrowth = forwardRef<SVGSVGElement, IconSVGProps>(
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
        {/* Chart board */}
        <rect x={70} y={20} width={120} height={90} rx={3} stroke={colour} strokeWidth={1.5} />
        {/* Grid lines */}
        <line x1={85} y1={30} x2={85} y2={100} stroke={colour} strokeWidth={0.8} opacity={0.2} />
        <line x1={70} y1={50} x2={190} y2={50} stroke={colour} strokeWidth={0.8} opacity={0.2} />
        <line x1={70} y1={70} x2={190} y2={70} stroke={colour} strokeWidth={0.8} opacity={0.2} />
        <line x1={70} y1={90} x2={190} y2={90} stroke={colour} strokeWidth={0.8} opacity={0.2} />
        {/* Axis */}
        <line x1={85} y1={100} x2={182} y2={100} stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        <line x1={85} y1={30} x2={85} y2={100} stroke={colour} strokeWidth={1.2} strokeLinecap="round" />

        {/* Trend line — red accent, main feature */}
        <polyline
          points="90 92 105 85 120 78 135 70 148 55 160 40 175 28"
          stroke={accentColour}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Arrow head */}
        <polyline points="170 32 175 28 179 33" stroke={accentColour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

        {/* Data points */}
        <circle cx={90} cy={92} r={2} fill={accentColour} />
        <circle cx={120} cy={78} r={2} fill={accentColour} />
        <circle cx={148} cy={55} r={2} fill={accentColour} />
        <circle cx={175} cy={28} r={2} fill={accentColour} />

        {/* Bar chart in background */}
        <rect x={92} y={85} width={8} height={15} rx={1} fill="#CCCABC" stroke={colour} strokeWidth={0.8} />
        <rect x={108} y={75} width={8} height={25} rx={1} fill="#CCCABC" stroke={colour} strokeWidth={0.8} />
        <rect x={124} y={68} width={8} height={32} rx={1} fill="#CCCABC" stroke={colour} strokeWidth={0.8} />
        <rect x={140} y={58} width={8} height={42} rx={1} fill="#CCCABC" stroke={colour} strokeWidth={0.8} />
        <rect x={156} y={45} width={8} height={55} rx={1} fill="#CCCABC" stroke={colour} strokeWidth={0.8} />

        {/* Person standing, looking at chart */}
        {/* Head */}
        <circle cx={38} cy={48} r={7.5} stroke={colour} strokeWidth={1.8} />
        {/* Hair */}
        <path d="M31.5 44c0.5-4 3-7 7-7s6 3 6.5 6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Eyes */}
        <circle cx={36} cy={47} r={1} fill={colour} />
        <circle cx={41} cy={47} r={1} fill={colour} />
        {/* Smile */}
        <path d="M36 51c0.8 1 3 1 4 0" stroke={colour} strokeWidth={0.8} strokeLinecap="round" />

        {/* Neck */}
        <line x1={38} y1={55.5} x2={38} y2={60} stroke={colour} strokeWidth={1.5} />
        {/* Torso */}
        <path d="M28 60h20v18H28V60Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Shirt detail — red */}
        <line x1={38} y1={60} x2={38} y2={78} stroke={accentColour} strokeWidth={1.2} />
        {/* Collar */}
        <path d="M34 60l4 4 4-4" stroke={colour} strokeWidth={1} strokeLinecap="round" />

        {/* Left arm pointing at chart */}
        <path d="M48 64c6 0 14-2 20-6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Pointing hand */}
        <path d="M68 58l4-2" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M68 58l3 1" stroke={colour} strokeWidth={1} strokeLinecap="round" />

        {/* Right arm at side */}
        <path d="M28 64c-4 2-8 8-8 14v4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />

        {/* Legs — long proportions */}
        <path d="M32 78v32c0 2 0 4 1 5l7 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M44 78v32c0 2 0 4-1 5l-7 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Feet — large */}
        <path d="M40 118h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z" stroke={colour} strokeWidth={1.2} />
        <path d="M36 118h10c2 0 3 1.5 3 3H33c0-1.5 1-3 3-3Z" stroke={colour} strokeWidth={1.2} />

        {/* Plant pot */}
        <path d="M12 110h20l-3 18H15l-3-18Z" fill="#CCCABC" stroke={colour} strokeWidth={1.2} strokeLinejoin="round" />
        {/* Stem */}
        <path d="M22 110v-16" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />
        {/* Leaves */}
        <path d="M22 100c-5-2-8 0-8 3s4 3 8 1" stroke={colour} strokeWidth={1.2} strokeLinecap="round" fill="#CCCABC" />
        <path d="M22 94c4-3 8-1 8 2s-4 4-8 2" stroke={colour} strokeWidth={1.2} strokeLinecap="round" fill="#CCCABC" />
        {/* Small leaf with red */}
        <path d="M22 88c-3-2-6 0-6 2s3 2 6 1" stroke={accentColour} strokeWidth={1} strokeLinecap="round" />

        {/* Floor line */}
        <line x1={5} y1={130} x2={195} y2={130} stroke={colour} strokeWidth={1} opacity={0.3} />
      </svg>
    );
  },
);

InvestmentGrowth.displayName = 'InvestmentGrowth';
