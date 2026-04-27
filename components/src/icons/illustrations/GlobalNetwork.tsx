/**
 * @module illustrations/GlobalNetwork
 * @description Person with globe and connection lines.
 * UBS illustration style: hand-drawn character, black outlines, red accents.
 */
import { forwardRef } from 'react';
import type { IconSVGProps } from '../types';

export const GlobalNetwork = forwardRef<SVGSVGElement, IconSVGProps>(
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
        {/* Globe */}
        <circle cx={130} cy={58} r={35} stroke={colour} strokeWidth={1.8} />
        {/* Latitude lines */}
        <ellipse cx={130} cy={58} rx={35} ry={14} stroke={colour} strokeWidth={1} opacity={0.3} />
        <ellipse cx={130} cy={58} rx={35} ry={28} stroke={colour} strokeWidth={1} opacity={0.3} />
        {/* Longitude */}
        <ellipse cx={130} cy={58} rx={14} ry={35} stroke={colour} strokeWidth={1} opacity={0.3} />
        {/* Equator */}
        <line x1={95} y1={58} x2={165} y2={58} stroke={colour} strokeWidth={1} opacity={0.3} />
        {/* Meridian */}
        <line x1={130} y1={23} x2={130} y2={93} stroke={colour} strokeWidth={1} opacity={0.3} />

        {/* Connection nodes — red accent */}
        <circle cx={110} cy={40} r={3} fill={accentColour} />
        <circle cx={150} cy={45} r={3} fill={accentColour} />
        <circle cx={140} cy={70} r={3} fill={accentColour} />
        <circle cx={118} cy={68} r={3} fill={accentColour} />
        <circle cx={130} cy={35} r={3} fill={accentColour} />
        <circle cx={145} cy={60} r={2.5} fill={accentColour} />

        {/* Connection lines between nodes */}
        <line x1={110} y1={40} x2={150} y2={45} stroke={accentColour} strokeWidth={1} opacity={0.6} />
        <line x1={150} y1={45} x2={140} y2={70} stroke={accentColour} strokeWidth={1} opacity={0.6} />
        <line x1={140} y1={70} x2={118} y2={68} stroke={accentColour} strokeWidth={1} opacity={0.6} />
        <line x1={118} y1={68} x2={110} y2={40} stroke={accentColour} strokeWidth={1} opacity={0.6} />
        <line x1={130} y1={35} x2={150} y2={45} stroke={accentColour} strokeWidth={1} opacity={0.6} />
        <line x1={130} y1={35} x2={110} y2={40} stroke={accentColour} strokeWidth={1} opacity={0.6} />
        <line x1={145} y1={60} x2={140} y2={70} stroke={accentColour} strokeWidth={1} opacity={0.6} />

        {/* Signal waves from globe */}
        <path d="M168 40c4-3 8-2 10 0" stroke={colour} strokeWidth={1} strokeLinecap="round" opacity={0.4} />
        <path d="M172 35c5-3 10-2 12 0" stroke={colour} strokeWidth={1} strokeLinecap="round" opacity={0.3} />
        <path d="M168 76c4 3 8 2 10 0" stroke={colour} strokeWidth={1} strokeLinecap="round" opacity={0.4} />

        {/* Person */}
        {/* Head */}
        <circle cx={42} cy={50} r={8} stroke={colour} strokeWidth={1.8} />
        {/* Hair */}
        <path d="M35 46c0.5-4.5 3.5-8 7.5-8s7 3.5 7 7" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Eyes looking right at globe */}
        <circle cx={41} cy={49} r={1} fill={colour} />
        <circle cx={46} cy={49} r={1} fill={colour} />
        {/* Smile */}
        <path d="M40 53c1 1 3.5 1 4.5 0" stroke={colour} strokeWidth={0.8} strokeLinecap="round" />

        {/* Neck */}
        <line x1={42} y1={58} x2={42} y2={62} stroke={colour} strokeWidth={1.5} />
        {/* Torso */}
        <path d="M32 62h20v16H32V62Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Shirt accent */}
        <line x1={42} y1={62} x2={42} y2={78} stroke={accentColour} strokeWidth={1.2} />

        {/* Right arm reaching toward globe */}
        <path d="M52 66c6-2 20-4 34-4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Hand touching globe */}
        <path d="M86 62c2 0 4 1 5 3" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />

        {/* Left arm */}
        <path d="M32 66c-4 2-7 8-6 14" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />

        {/* Legs */}
        <path d="M36 78v30c0 2 0 4 1 5l6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M48 78v30c0 2 0 4-1 5l-6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Feet */}
        <path d="M43 116h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z" stroke={colour} strokeWidth={1.2} />
        <path d="M41 116h10c2 0 3 1.5 3 3H38c0-1.5 1-3 3-3Z" stroke={colour} strokeWidth={1.2} />

        {/* Small floating data element */}
        <rect x={170} y={95} width={18} height={14} rx={2} stroke={colour} strokeWidth={1} />
        <line x1={174} y1={100} x2={184} y2={100} stroke={colour} strokeWidth={0.8} strokeLinecap="round" />
        <line x1={174} y1={104} x2={181} y2={104} stroke={accentColour} strokeWidth={0.8} strokeLinecap="round" />

        {/* Floor line */}
        <line x1={10} y1={128} x2={190} y2={128} stroke={colour} strokeWidth={1} opacity={0.3} />
      </svg>
    );
  },
);

GlobalNetwork.displayName = 'GlobalNetwork';
