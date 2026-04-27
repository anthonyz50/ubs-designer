/**
 * @module icons/illustrative/business
 * @description Illustrative business icons: 48x48 viewBox, dual line weights (1.5px thin / 3px thick).
 * Red accent (#E60000) on thick lines. Geometric, open shapes, sharp and rounded corners.
 */
import { createIcon } from '../createIcon';

export const Briefcase = createIcon({
  displayName: 'Briefcase',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Main case — thick, accent */}
      <rect x={4} y={16} width={40} height={24} rx={3} stroke={accent} strokeWidth={3} strokeLinejoin="round" />
      {/* Handle */}
      <path d="M16 16V12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      {/* Middle clasp */}
      <line x1={4} y1={28} x2={44} y2={28} stroke={colour} strokeWidth={1.5} />
      {/* Clasp plate */}
      <rect x={20} y={24} width={8} height={8} rx={1} stroke={colour} strokeWidth={1.5} />
    </>
  ),
});

export const Handshake = createIcon({
  displayName: 'Handshake',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Left arm — thick, accent */}
      <path d="M4 20l8-6h8" stroke={accent} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      {/* Right arm — thick, accent */}
      <path d="M44 20l-8-6h-8" stroke={accent} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      {/* Handshake grip */}
      <path d="M20 14l-4 8 6 4 8-4-2-8" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      {/* Fingers */}
      <path d="M22 26l-4 4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M26 26l4 4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Sleeve cuffs */}
      <line x1={4} y1={20} x2={4} y2={32} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={44} y1={20} x2={44} y2={32} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Trust stars */}
      <circle cx={24} cy={8} r={1} fill={colour} />
      <circle cx={18} cy={10} r={0.8} fill={colour} />
      <circle cx={30} cy={10} r={0.8} fill={colour} />
    </>
  ),
});

export const Target = createIcon({
  displayName: 'Target',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Outer ring — thick, accent */}
      <circle cx={24} cy={24} r={20} stroke={accent} strokeWidth={3} />
      {/* Middle ring */}
      <circle cx={24} cy={24} r={13} stroke={colour} strokeWidth={1.5} />
      {/* Inner ring */}
      <circle cx={24} cy={24} r={6} stroke={colour} strokeWidth={1.5} />
      {/* Bullseye */}
      <circle cx={24} cy={24} r={2} fill={accent} />
      {/* Crosshair lines */}
      <line x1={24} y1={2} x2={24} y2={10} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={24} y1={38} x2={24} y2={46} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={2} y1={24} x2={10} y2={24} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={38} y1={24} x2={46} y2={24} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
    </>
  ),
});

export const Award = createIcon({
  displayName: 'Award',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Medal circle — thick, accent */}
      <circle cx={24} cy={18} r={14} stroke={accent} strokeWidth={3} />
      {/* Star inside */}
      <path d="M24 8l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
      {/* Ribbon left */}
      <line x1={16} y1={30} x2={10} y2={44} stroke={accent} strokeWidth={3} strokeLinecap="round" />
      <line x1={10} y1={44} x2={16} y2={40} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Ribbon right */}
      <line x1={32} y1={30} x2={38} y2={44} stroke={accent} strokeWidth={3} strokeLinecap="round" />
      <line x1={38} y1={44} x2={32} y2={40} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
    </>
  ),
});

export const Lightbulb = createIcon({
  displayName: 'Lightbulb',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Bulb shape — thick, accent */}
      <path d="M18 30c-1-2-4-5-4-10a10 10 0 0 1 20 0c0 5-3 8-4 10" stroke={accent} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      {/* Base */}
      <line x1={18} y1={34} x2={30} y2={34} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={19} y1={38} x2={29} y2={38} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M20 42h8" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Filament */}
      <path d="M20 30v-6l4 4 4-4v6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      {/* Glow rays */}
      <line x1={24} y1={2} x2={24} y2={6} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={38} y1={10} x2={35} y2={12} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={10} y1={10} x2={13} y2={12} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
    </>
  ),
});

export const Presentation = createIcon({
  displayName: 'Presentation',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Board frame — thick, accent */}
      <rect x={4} y={8} width={40} height={28} rx={2} stroke={accent} strokeWidth={3} strokeLinejoin="round" />
      {/* Top bar */}
      <line x1={4} y1={14} x2={44} y2={14} stroke={colour} strokeWidth={1.5} />
      {/* Stand */}
      <line x1={24} y1={36} x2={24} y2={44} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={18} y1={44} x2={30} y2={44} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Chart inside */}
      <polyline points="10 32 18 24 26 28 38 18" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      {/* Arrow on chart */}
      <polyline points="34 18 38 18 38 22" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Contract = createIcon({
  displayName: 'Contract',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Paper — thick, accent */}
      <path d="M10 4h20l10 10v30a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke={accent} strokeWidth={3} strokeLinejoin="round" />
      {/* Fold */}
      <path d="M30 4v10h10" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
      {/* Text lines */}
      <line x1={16} y1={22} x2={32} y2={22} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={16} y1={28} x2={32} y2={28} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={16} y1={34} x2={26} y2={34} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Signature line */}
      <line x1={22} y1={40} x2={36} y2={40} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Signature squiggle */}
      <path d="M24 38c2-1 3 1 5 0s2-2 4-1" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
    </>
  ),
});

export const Building = createIcon({
  displayName: 'Building',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Main structure — thick, accent */}
      <rect x={8} y={10} width={32} height={34} stroke={accent} strokeWidth={3} strokeLinejoin="round" />
      {/* Roof */}
      <path d="M4 10h40" stroke={accent} strokeWidth={3} strokeLinecap="round" />
      {/* Columns */}
      <line x1={8} y1={10} x2={8} y2={6} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={40} y1={10} x2={40} y2={6} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={8} y1={6} x2={40} y2={6} stroke={colour} strokeWidth={1.5} />
      {/* Windows row 1 */}
      <rect x={14} y={16} width={6} height={6} stroke={colour} strokeWidth={1.5} />
      <rect x={28} y={16} width={6} height={6} stroke={colour} strokeWidth={1.5} />
      {/* Windows row 2 */}
      <rect x={14} y={28} width={6} height={6} stroke={colour} strokeWidth={1.5} />
      <rect x={28} y={28} width={6} height={6} stroke={colour} strokeWidth={1.5} />
      {/* Door */}
      <rect x={20} y={36} width={8} height={8} rx={1} stroke={colour} strokeWidth={1.5} />
      <circle cx={26} cy={40} r={0.8} fill={colour} />
    </>
  ),
});
