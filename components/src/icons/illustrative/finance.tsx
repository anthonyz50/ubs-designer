/**
 * @module icons/illustrative/finance
 * @description Illustrative finance icons: 48x48 viewBox, dual line weights (1.5px thin / 3px thick).
 * Red accent (#E60000) on thick lines. Geometric, open shapes, sharp and rounded corners.
 */
import { createIcon } from '../createIcon';

export const Wallet = createIcon({
  displayName: 'Wallet',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Main wallet body — thick, accent */}
      <rect x={6} y={14} width={36} height={26} rx={3} stroke={accent} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      {/* Flap */}
      <path d="M6 14V12a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v2" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      {/* Card slot */}
      <rect x={30} y={22} width={12} height={10} rx={2} stroke={colour} strokeWidth={1.5} />
      {/* Coin circle */}
      <circle cx={36} cy={27} r={2} stroke={colour} strokeWidth={1.5} />
      {/* Stitch line */}
      <line x1={10} y1={18} x2={28} y2={18} stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeDasharray="3 3" />
    </>
  ),
});

export const CreditCard = createIcon({
  displayName: 'CreditCard',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Card body — thick, accent */}
      <rect x={4} y={10} width={40} height={28} rx={4} stroke={accent} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      {/* Magnetic stripe */}
      <line x1={4} y1={18} x2={44} y2={18} stroke={colour} strokeWidth={1.5} />
      <line x1={4} y1={22} x2={44} y2={22} stroke={colour} strokeWidth={1.5} />
      {/* Chip */}
      <rect x={10} y={26} width={8} height={6} rx={1} stroke={colour} strokeWidth={1.5} />
      {/* Number dots */}
      <circle cx={28} cy={32} r={1} fill={colour} />
      <circle cx={32} cy={32} r={1} fill={colour} />
      <circle cx={36} cy={32} r={1} fill={colour} />
      <circle cx={40} cy={32} r={1} fill={colour} />
    </>
  ),
});

export const BankNote = createIcon({
  displayName: 'BankNote',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Note body — thick, accent */}
      <rect x={4} y={12} width={40} height={24} rx={2} stroke={accent} strokeWidth={3} strokeLinejoin="round" />
      {/* Centre circle (denomination) */}
      <circle cx={24} cy={24} r={7} stroke={colour} strokeWidth={1.5} />
      {/* Currency symbol */}
      <text x={24} y={28} textAnchor="middle" fontSize={10} fontWeight="bold" fill={colour} fontFamily="sans-serif">£</text>
      {/* Corner flourishes */}
      <path d="M10 16h4v4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 16h-4v4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 32h4v-4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 32h-4v-4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Coins = createIcon({
  displayName: 'Coins',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Back coin — thick, accent */}
      <ellipse cx={28} cy={20} rx={14} ry={6} stroke={accent} strokeWidth={3} />
      <path d="M14 20v8c0 3.31 6.27 6 14 6s14-2.69 14-6v-8" stroke={accent} strokeWidth={3} />
      {/* Front coin stack */}
      <ellipse cx={20} cy={28} rx={14} ry={6} stroke={colour} strokeWidth={1.5} />
      <path d="M6 28v8c0 3.31 6.27 6 14 6s14-2.69 14-6v-8" stroke={colour} strokeWidth={1.5} />
      {/* Middle line */}
      <ellipse cx={20} cy={32} rx={14} ry={6} stroke={colour} strokeWidth={1.5} strokeDasharray="4 3" />
    </>
  ),
});

export const PiggyBank = createIcon({
  displayName: 'PiggyBank',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Body — thick, accent */}
      <path d="M14 36c-2-2-4-6-4-10 0-7.18 6.27-13 14-13s14 5.82 14 13c0 4-2 8-4 10" stroke={accent} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      {/* Legs */}
      <line x1={16} y1={36} x2={14} y2={42} stroke={accent} strokeWidth={3} strokeLinecap="round" />
      <line x1={32} y1={36} x2={34} y2={42} stroke={accent} strokeWidth={3} strokeLinecap="round" />
      {/* Ear */}
      <path d="M20 13c-1-4 1-7 4-8" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Eye */}
      <circle cx={20} cy={22} r={1.5} fill={colour} />
      {/* Snout */}
      <ellipse cx={36} cy={24} rx={4} ry={3} stroke={colour} strokeWidth={1.5} />
      <circle cx={35} cy={23.5} r={0.8} fill={colour} />
      <circle cx={37} cy={23.5} r={0.8} fill={colour} />
      {/* Coin slot */}
      <line x1={22} y1={10} x2={28} y2={10} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Tail */}
      <path d="M10 22c-2-1-4 0-4 2s2 3 3 2" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
    </>
  ),
});

export const SafeBox = createIcon({
  displayName: 'SafeBox',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Main body — thick, accent */}
      <rect x={6} y={6} width={36} height={36} rx={3} stroke={accent} strokeWidth={3} strokeLinejoin="round" />
      {/* Door frame */}
      <rect x={10} y={10} width={28} height={28} rx={1} stroke={colour} strokeWidth={1.5} />
      {/* Dial */}
      <circle cx={24} cy={24} r={8} stroke={colour} strokeWidth={1.5} />
      <circle cx={24} cy={24} r={3} stroke={colour} strokeWidth={1.5} />
      {/* Dial markers */}
      <line x1={24} y1={16} x2={24} y2={18} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={24} y1={30} x2={24} y2={32} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={16} y1={24} x2={18} y2={24} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={30} y1={24} x2={32} y2={24} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Handle */}
      <rect x={36} y={20} width={4} height={8} rx={1} stroke={colour} strokeWidth={1.5} />
      {/* Feet */}
      <line x1={10} y1={42} x2={10} y2={46} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={38} y1={42} x2={38} y2={46} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
    </>
  ),
});

export const Growth = createIcon({
  displayName: 'Growth',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Upward trend line — thick, accent */}
      <polyline points="6 38 16 28 24 32 42 10" stroke={accent} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      {/* Arrow head */}
      <polyline points="34 10 42 10 42 18" stroke={accent} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      {/* Grid lines */}
      <line x1={6} y1={42} x2={42} y2={42} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={6} y1={10} x2={6} y2={42} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Horizontal grid */}
      <line x1={6} y1={18} x2={42} y2={18} stroke={colour} strokeWidth={1.5} strokeDasharray="3 4" opacity={0.4} />
      <line x1={6} y1={26} x2={42} y2={26} stroke={colour} strokeWidth={1.5} strokeDasharray="3 4" opacity={0.4} />
      <line x1={6} y1={34} x2={42} y2={34} stroke={colour} strokeWidth={1.5} strokeDasharray="3 4" opacity={0.4} />
    </>
  ),
});

export const Portfolio = createIcon({
  displayName: 'Portfolio',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Folder body — thick, accent */}
      <path d="M4 14h40a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2Z" stroke={accent} strokeWidth={3} strokeLinejoin="round" />
      {/* Folder tab */}
      <path d="M2 14V10a2 2 0 0 1 2-2h12l4 6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      {/* Chart inside */}
      <line x1={14} y1={34} x2={14} y2={24} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={20} y1={34} x2={20} y2={28} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={26} y1={34} x2={26} y2={22} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={32} y1={34} x2={32} y2={26} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Baseline */}
      <line x1={10} y1={34} x2={36} y2={34} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
    </>
  ),
});
