/**
 * @module icons/illustrative/digital
 * @description Illustrative digital icons: 48x48 viewBox, dual line weights (1.5px thin / 3px thick).
 * Red accent (#E60000) on thick lines. Geometric, open shapes, sharp and rounded corners.
 */
import { createIcon } from '../createIcon';

export const Shield = createIcon({
  displayName: 'Shield',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Shield outline — thick, accent */}
      <path d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4Z" stroke={accent} strokeWidth={3} strokeLinejoin="round" />
      {/* Inner shield line */}
      <path d="M24 10L12 16v8c0 8 5.5 13 12 16 6.5-3 12-8 12-16v-8L24 10Z" stroke={colour} strokeWidth={1.5} strokeLinejoin="round" />
      {/* Check mark */}
      <polyline points="18 24 22 28 30 20" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Lock = createIcon({
  displayName: 'Lock',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Lock body — thick, accent */}
      <rect x={10} y={22} width={28} height={22} rx={3} stroke={accent} strokeWidth={3} strokeLinejoin="round" />
      {/* Shackle */}
      <path d="M16 22V14a8 8 0 0 1 16 0v8" stroke={colour} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      {/* Keyhole */}
      <circle cx={24} cy={32} r={3} stroke={colour} strokeWidth={1.5} />
      <line x1={24} y1={35} x2={24} y2={39} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
    </>
  ),
});

export const Key = createIcon({
  displayName: 'Key',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Key ring — thick, accent */}
      <circle cx={14} cy={14} r={10} stroke={accent} strokeWidth={3} />
      {/* Inner ring */}
      <circle cx={14} cy={14} r={4} stroke={colour} strokeWidth={1.5} />
      {/* Shaft — thick, accent */}
      <line x1={22} y1={22} x2={42} y2={42} stroke={accent} strokeWidth={3} strokeLinecap="round" />
      {/* Teeth */}
      <line x1={32} y1={32} x2={36} y2={28} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={36} y1={36} x2={40} y2={32} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Key tip */}
      <line x1={42} y1={42} x2={44} y2={38} stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
    </>
  ),
});

export const Fingerprint = createIcon({
  displayName: 'Fingerprint',
  viewBox: '0 0 48 48',
  illustrative: true,
  path: (colour, accent) => (
    <>
      {/* Outer arc — thick, accent */}
      <path d="M8 28c0-8.84 7.16-16 16-16s16 7.16 16 16" stroke={accent} strokeWidth={3} strokeLinecap="round" />
      {/* Ridge arcs */}
      <path d="M14 28c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M18 28a6 6 0 0 1 12 0" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M22 28a2 2 0 0 1 4 0" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      {/* Descending lines */}
      <path d="M22 28v8" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M26 28v12" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M18 28v10c0 2 1 4 3 4" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M30 28v6c0 3-2 5-4 6" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M34 28v4c0 4-3 8-6 10" stroke={colour} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M14 28v6c0 4 2 7 5 9" stroke={accent} strokeWidth={3} strokeLinecap="round" />
    </>
  ),
});
