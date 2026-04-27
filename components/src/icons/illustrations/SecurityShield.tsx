/**
 * @module illustrations/SecurityShield
 * @description Person behind a shield/lock symbol.
 * UBS illustration style: hand-drawn character, black outlines, red accents.
 */
import { forwardRef } from 'react';
import type { IconSVGProps } from '../types';

export const SecurityShield = forwardRef<SVGSVGElement, IconSVGProps>(
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
        {/* Large shield */}
        <path
          d="M100 12L55 30v30c0 28 18 48 45 60 27-12 45-32 45-60V30L100 12Z"
          stroke={accentColour}
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        {/* Inner shield */}
        <path
          d="M100 24L65 38v22c0 22 14 38 35 48 21-10 35-26 35-48V38L100 24Z"
          stroke={colour}
          strokeWidth={1.2}
          strokeLinejoin="round"
          opacity={0.3}
        />
        {/* Lock icon on shield */}
        <rect x={90} y={52} width={20} height={16} rx={3} stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        <path d="M94 52V46a6 6 0 0 1 12 0v6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Keyhole */}
        <circle cx={100} cy={59} r={2} fill={colour} />
        <line x1={100} y1={61} x2={100} y2={64} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />

        {/* Check mark on shield */}
        <polyline points="92 80 98 86 110 74" stroke={accentColour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

        {/* Person standing behind shield */}
        {/* Head (partially behind shield) */}
        <circle cx={44} cy={55} r={8} stroke={colour} strokeWidth={1.8} />
        {/* Hair */}
        <path d="M37 51c1-5 3.5-7 7.5-7s6 2.5 6.5 6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Eyes */}
        <circle cx={42} cy={54} r={1} fill={colour} />
        <circle cx={47} cy={54} r={1} fill={colour} />
        {/* Content smile */}
        <path d="M42 58c1 1 3.5 1 4.5 0" stroke={colour} strokeWidth={0.8} strokeLinecap="round" />

        {/* Neck */}
        <line x1={44} y1={63} x2={44} y2={67} stroke={colour} strokeWidth={1.5} />
        {/* Torso */}
        <path d="M34 67h20v16H34V67Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Shirt accent */}
        <line x1={44} y1={67} x2={44} y2={83} stroke={accentColour} strokeWidth={1.2} />

        {/* Left arm holding shield edge */}
        <path d="M34 72c-4 3-6 8-4 14" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Right arm touching shield */}
        <path d="M54 72c5 0 12 2 16 6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Hand on shield */}
        <circle cx={70} cy={78} r={2.5} stroke={colour} strokeWidth={1.2} />

        {/* Legs */}
        <path d="M38 83v28c0 2 0 4 1 5l6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M50 83v28c0 2 0 4-1 5l-6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Feet */}
        <path d="M45 119h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z" stroke={colour} strokeWidth={1.2} />
        <path d="M43 119h10c2 0 3 1.5 3 3H40c0-1.5 1-3 3-3Z" stroke={colour} strokeWidth={1.2} />

        {/* Security sparkles */}
        <circle cx={150} cy={30} r={2} fill={accentColour} />
        <circle cx={158} cy={42} r={1.5} fill={accentColour} />
        <circle cx={145} cy={45} r={1} fill={accentColour} />
        <line x1={155} y1={26} x2={158} y2={22} stroke={accentColour} strokeWidth={1} strokeLinecap="round" />
        <line x1={162} y1={36} x2={166} y2={34} stroke={accentColour} strokeWidth={1} strokeLinecap="round" />

        {/* Binary/code floating elements */}
        <text x={155} y={60} fontSize={6} fill={colour} fontFamily="monospace" opacity={0.3}>010</text>
        <text x={148} y={70} fontSize={6} fill={colour} fontFamily="monospace" opacity={0.3}>101</text>
        <text x={160} y={80} fontSize={6} fill={colour} fontFamily="monospace" opacity={0.3}>011</text>

        {/* Floor line */}
        <line x1={10} y1={130} x2={190} y2={130} stroke={colour} strokeWidth={1} opacity={0.3} />
      </svg>
    );
  },
);

SecurityShield.displayName = 'SecurityShield';
