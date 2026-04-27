/**
 * @module illustrations/DigitalBanking
 * @description Person with phone showing banking interface.
 * UBS illustration style: hand-drawn character, black outlines, red accents.
 */
import { forwardRef } from 'react';
import type { IconSVGProps } from '../types';

export const DigitalBanking = forwardRef<SVGSVGElement, IconSVGProps>(
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
        {/* Large phone */}
        <rect x={108} y={20} width={50} height={90} rx={6} stroke={colour} strokeWidth={1.8} />
        {/* Screen */}
        <rect x={112} y={28} width={42} height={74} rx={2} stroke={colour} strokeWidth={0.8} />
        {/* Status bar */}
        <line x1={116} y1={34} x2={128} y2={34} stroke={colour} strokeWidth={0.8} strokeLinecap="round" opacity={0.4} />
        <line x1={144} y1={34} x2={150} y2={34} stroke={colour} strokeWidth={0.8} strokeLinecap="round" opacity={0.4} />
        {/* Banking app header */}
        <rect x={116} y={38} width={34} height={10} rx={1} fill={accentColour} opacity={0.15} />
        <text x={133} y={45} textAnchor="middle" fontSize={5} fontWeight="bold" fill={accentColour} fontFamily="sans-serif">UBS</text>
        {/* Balance */}
        <text x={116} y={58} fontSize={4} fill={colour} fontFamily="sans-serif" opacity={0.5}>Balance</text>
        <text x={116} y={65} fontSize={6} fontWeight="bold" fill={colour} fontFamily="sans-serif">£12,450</text>
        {/* Transaction list */}
        <line x1={116} y1={70} x2={150} y2={70} stroke={colour} strokeWidth={0.5} opacity={0.3} />
        <circle cx={119} cy={76} r={2} stroke={colour} strokeWidth={0.5} />
        <line x1={124} y1={75} x2={138} y2={75} stroke={colour} strokeWidth={0.8} strokeLinecap="round" opacity={0.5} />
        <text x={145} y={77} textAnchor="end" fontSize={3.5} fill={accentColour} fontFamily="sans-serif">+£500</text>
        <line x1={116} y1={80} x2={150} y2={80} stroke={colour} strokeWidth={0.5} opacity={0.3} />
        <circle cx={119} cy={86} r={2} stroke={colour} strokeWidth={0.5} />
        <line x1={124} y1={85} x2={136} y2={85} stroke={colour} strokeWidth={0.8} strokeLinecap="round" opacity={0.5} />
        <text x={145} y={87} textAnchor="end" fontSize={3.5} fill={colour} fontFamily="sans-serif">-£42</text>
        <line x1={116} y1={90} x2={150} y2={90} stroke={colour} strokeWidth={0.5} opacity={0.3} />
        {/* Bottom nav */}
        <line x1={112} y1={96} x2={154} y2={96} stroke={colour} strokeWidth={0.5} opacity={0.3} />
        <circle cx={122} cy={100} r={2} stroke={colour} strokeWidth={0.6} />
        <circle cx={133} cy={100} r={2} fill={accentColour} />
        <circle cx={144} cy={100} r={2} stroke={colour} strokeWidth={0.6} />
        {/* Home button */}
        <line x1={128} y1={108} x2={138} y2={108} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />

        {/* Notification badge */}
        <circle cx={154} cy={24} r={4} fill={accentColour} />
        <text x={154} y={26} textAnchor="middle" fontSize={5} fill="white" fontFamily="sans-serif">3</text>

        {/* Person holding phone */}
        {/* Head */}
        <circle cx={60} cy={42} r={8} stroke={colour} strokeWidth={1.8} />
        {/* Hair */}
        <path d="M53 38c0.5-4.5 3.5-7 7.5-7s6.5 2.5 7 6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Eyes looking at phone */}
        <circle cx={58} cy={41} r={1} fill={colour} />
        <circle cx={63} cy={41} r={1} fill={colour} />
        {/* Content smile */}
        <path d="M57 45c1 1 4 1 5 0" stroke={colour} strokeWidth={0.8} strokeLinecap="round" />

        {/* Neck */}
        <line x1={60} y1={50} x2={60} y2={54} stroke={colour} strokeWidth={1.5} />
        {/* Torso */}
        <path d="M50 54h20v16H50V54Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
        {/* Shirt accent */}
        <line x1={60} y1={54} x2={60} y2={70} stroke={accentColour} strokeWidth={1.2} />

        {/* Right arm extended holding phone */}
        <path d="M70 58c8 1 22 4 34 8" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Hand gripping phone */}
        <path d="M104 66c2-1 4 0 4 2v6c0 2-2 3-4 2" stroke={colour} strokeWidth={1.2} strokeLinecap="round" />

        {/* Left arm relaxed */}
        <path d="M50 58c-4 2-7 8-6 16" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />

        {/* Legs */}
        <path d="M54 70v28c0 2 0 4 1 5l6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        <path d="M66 70v28c0 2 0 4-1 5l-6 3" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
        {/* Feet */}
        <path d="M61 106h-10c-2 0-3 1.5-3 3h16c0-1.5-1-3-3-3Z" stroke={colour} strokeWidth={1.2} />
        <path d="M59 106h10c2 0 3 1.5 3 3H56c0-1.5 1-3 3-3Z" stroke={colour} strokeWidth={1.2} />

        {/* Signal waves from phone */}
        <path d="M160 50c3-2 6-1 7 1" stroke={accentColour} strokeWidth={1} strokeLinecap="round" />
        <path d="M162 44c4-3 8-1 10 1" stroke={accentColour} strokeWidth={1} strokeLinecap="round" opacity={0.6} />
        <path d="M164 38c5-3 10-1 12 1" stroke={accentColour} strokeWidth={1} strokeLinecap="round" opacity={0.3} />

        {/* Floor line */}
        <line x1={15} y1={118} x2={185} y2={118} stroke={colour} strokeWidth={1} opacity={0.3} />
      </svg>
    );
  },
);

DigitalBanking.displayName = 'DigitalBanking';
