/**
 * @module icons/webapp/navigation
 * @description Navigation icons: chevrons, arrows, menu, close, more.
 * All icons: 24x24 viewBox, 2px stroke, no fill, round linecap/linejoin.
 */
import { createIcon } from '../createIcon';

// ─── Chevrons ────────────────────────────────────────────────────────

export const ChevronDown = createIcon({
  displayName: 'ChevronDown',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <polyline
      points="6 9 12 15 18 9"
      stroke={colour}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

export const ChevronUp = createIcon({
  displayName: 'ChevronUp',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <polyline
      points="18 15 12 9 6 15"
      stroke={colour}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

export const ChevronLeft = createIcon({
  displayName: 'ChevronLeft',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <polyline
      points="15 18 9 12 15 6"
      stroke={colour}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

export const ChevronRight = createIcon({
  displayName: 'ChevronRight',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <polyline
      points="9 6 15 12 9 18"
      stroke={colour}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

// ─── Arrows ──────────────────────────────────────────────────────────

export const ArrowLeft = createIcon({
  displayName: 'ArrowLeft',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <line x1={19} y1={12} x2={5} y2={12} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="12 19 5 12 12 5" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const ArrowRight = createIcon({
  displayName: 'ArrowRight',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <line x1={5} y1={12} x2={19} y2={12} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="12 5 19 12 12 19" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const ArrowUp = createIcon({
  displayName: 'ArrowUp',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <line x1={12} y1={19} x2={12} y2={5} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="5 12 12 5 19 12" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const ArrowDown = createIcon({
  displayName: 'ArrowDown',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <line x1={12} y1={5} x2={12} y2={19} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="19 12 12 19 5 12" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

// ─── Menu / Close / More ─────────────────────────────────────────────

export const Menu = createIcon({
  displayName: 'Menu',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <line x1={3} y1={6} x2={21} y2={6} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={3} y1={12} x2={21} y2={12} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={3} y1={18} x2={21} y2={18} stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Close = createIcon({
  displayName: 'Close',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <line x1={18} y1={6} x2={6} y2={18} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <line x1={6} y1={6} x2={18} y2={18} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const MoreHorizontal = createIcon({
  displayName: 'MoreHorizontal',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={1} fill={colour} />
      <circle cx={5} cy={12} r={1} fill={colour} />
      <circle cx={19} cy={12} r={1} fill={colour} />
    </>
  ),
});

export const MoreVertical = createIcon({
  displayName: 'MoreVertical',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={1} fill={colour} />
      <circle cx={12} cy={5} r={1} fill={colour} />
      <circle cx={12} cy={19} r={1} fill={colour} />
    </>
  ),
});
