/**
 * @module illustrations/FinancialPlanning
 * @description Person with clipboard and donut chart.
 * UBS illustration style: hand-drawn character, black outlines, red accents.
 */
import { forwardRef } from 'react';
import type { IconSVGProps } from '../types';

export const FinancialPlanning = forwardRef<SVGSVGElement, IconSVGProps>(
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
        {/* Donut chart */}
        <circle cx={148} cy={55} r={30} stroke="#CCCABC" strokeWidth={12} />
        {/* Red segment (main) */}
        <circle
          cx={148}
          cy={55}
          r={30}
          stroke={accentColour}
          strokeWidth={12}
          strokeDasharray="75.4 113.1"
          strokeDashoffset={0}
          strokeLinecap="round"
        />
        {/* Black segment */}
        <circle
          cx={148}
          cy={55}
          r={30}
          stroke={colour}
          strokeWidth={12}
          strokeDasharray="37.7 150.8"
          strokeDashoffset={-75.4}
          strokeLinecap="round"
        />
        {/* Inner circle (donut hole) */}
        <circle cx={148} cy={55} r={19} fill="white" stroke={colour} strokeWidth={0.8} />
        {/* Percentage text */}
        <text x={148} y={53} textAnchor="middle" fontSize={8} fontWeight="bold" fill={accentColour} fontFamily="sans-serif">40%</text>
        <text x={148} y={62} textAnchor="middle" fontSize={5} fill={colour} fontFamily="sans-serif" opacity={0.6}>Growth</text>

        {/* Chart labels */}
        <circle cx={126} cy={95} r={3} fill={accentColour} />
        <text x={132} y={97} fontSize={5} fill={colour} fontFamily="sans-serif">Equities</text>
        <circle cx={155} cy={95} r={3} fill={colour} />
        <text x={161} y={97} fontSize={5} fill={colour} fontFamily="sans-serif">Bonds</text>
        <circle cx={126} cy={105} r={3} fill="#CCCABC" />
        <text x={132} y={107} fontSize={5} fill={colour} fontFamily="sans-serif">Cash</text>

        {/* Person */}
        {/* Head */}
        <circle cx={50} cy={40} r={8} stroke={colour} strokeWidth={1.8} />
        {/* Hair */}
        <path d="M43 36c1-5 3.5-7 7.5-7s6.5 2 7 6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Glasses */}
        <circle cx={48} cy={39.5} r={2.5} stroke={colour} strokeWidth={0.8} />
        <circle cx={53} cy={39.5} r={2.5} stroke={colour} strokeWidth={0.8} />
        <line x1={50.5} y1={39.5} x2={50.5} y2={39.5} stroke={colour} strokeWidth={0.8} />
        {/* Eyes behind glasses */}
        <circle cx={48} cy={39.5} r={0.8} fill={colour} />
        <circle cx={53} cy={39.5} r={0.8} fill={colour} />
        {/* Smile */}
        <path d="M48 44c0.8 1 3 1 4 0" stroke={colour} strokeWidth={0.8} strokeLinecap="round" />

        {/* Neck */}
        <line x1={50} y1={48} x2={50} y2={52} stroke={colour} strokeWidth={1.5} />
        {/* Torso */}
        <path d="M40 52h20v16H40V52Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Shirt detail */}
        <line x1={50} y1={52} x2={50} y2={68} stroke={accentColour} strokeWidth={1.2} />

        {/* Right arm holding clipboard */}
        <path d="M60 56c4 2 10 6 12 10" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />

        {/* Clipboard */}
        <rect x={68} y={60} width={24} height={32} rx={2} stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Clipboard clip */}
        <rect x={75} y={57} width={10} height={6} rx={1} stroke={colour} strokeWidth={1} />
        {/* Clipboard lines */}
        <line x1={73} y1={70} x2={87} y2={70} stroke={colour} strokeWidth={0.8} strokeLinecap="round" />
        <line x1={73} y1={75} x2={87} y2={75} stroke={colour} strokeWidth={0.8} strokeLinecap="round" />
        <line x1={73} y1={80} x2={84} y2={80} stroke={colour} strokeWidth={0.8} strokeLinecap="round" />
        {/* Checkmarks on clipboard */}
        <polyline points="73 70 74 71 76 69" stroke={accentColour} strokeWidth={1} strokeLinecap="round" />
        <polyline points="73 75 74 76 76 74" stroke={accentColour} strokeWidth={1} strokeLinecap="round" />
        {/* Checkbox empty */}
        <rect x={72.5} y={78.5} width={3} height={3} rx={0.5} stroke={colour} strokeWidth={0.8} />

        {/* Left arm */}
        <path d="M40 56c-4 2-7 8-6 16" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Hand holding pen */}
        <line x1={34} y1={72} x2={30} y2={78} stroke={colour} strokeWidth={1.2} strokeLinecap="round" />

        {/* Legs */}
        <path d="M44 68v30c0 2 0 4 1 5l6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M56 68v30c0 2 0 4-1 5l-6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Feet */}
        <path d="M51 106h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z" stroke={colour} strokeWidth={1.2} />
        <path d="M49 106h10c2 0 3 1.5 3 3H46c0-1.5 1-3 3-3Z" stroke={colour} strokeWidth={1.2} />

        {/* Arrow connecting person to chart */}
        <path d="M92 65c10-3 22-6 34-8" stroke={colour} strokeWidth={1} strokeLinecap="round" strokeDasharray="4 3" />

        {/* Floor line */}
        <line x1={10} y1={120} x2={190} y2={120} stroke={colour} strokeWidth={1} opacity={0.3} />
      </svg>
    );
  },
);

FinancialPlanning.displayName = 'FinancialPlanning';
