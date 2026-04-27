/**
 * @module icons/webapp/actions
 * @description Action icons: search, filter, sort, download, upload, share, copy, edit, trash, plus, minus, check, checkCircle, xCircle.
 * All icons: 24x24 viewBox, 2px stroke, no fill, round linecap/linejoin.
 */
import { createIcon } from '../createIcon';

export const Search = createIcon({
  displayName: 'Search',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={11} cy={11} r={7} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <line x1={16.65} y1={16.65} x2={21} y2={21} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Filter = createIcon({
  displayName: 'Filter',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <path
      d="M3 4h18l-7 8.5V18l-4 2V12.5L3 4Z"
      stroke={colour}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

export const Sort = createIcon({
  displayName: 'Sort',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <line x1={4} y1={6} x2={20} y2={6} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={4} y1={12} x2={16} y2={12} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={4} y1={18} x2={12} y2={18} stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Download = createIcon({
  displayName: 'Download',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <path d="M12 3v12" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="7 10 12 15 17 10" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 21H4" stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Upload = createIcon({
  displayName: 'Upload',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <path d="M12 15V3" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="17 8 12 3 7 8" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 21H4" stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Share = createIcon({
  displayName: 'Share',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={18} cy={5} r={3} stroke={colour} strokeWidth={2} />
      <circle cx={6} cy={12} r={3} stroke={colour} strokeWidth={2} />
      <circle cx={18} cy={19} r={3} stroke={colour} strokeWidth={2} />
      <line x1={8.59} y1={13.51} x2={15.42} y2={17.49} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={15.41} y1={6.51} x2={8.59} y2={10.49} stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Copy = createIcon({
  displayName: 'Copy',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <rect x={9} y={9} width={13} height={13} rx={2} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Edit = createIcon({
  displayName: 'Edit',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <path d="M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <line x1={15} y1={5} x2={19} y2={9} stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Trash = createIcon({
  displayName: 'Trash',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <polyline points="3 6 5 6 21 6" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <line x1={10} y1={11} x2={10} y2={17} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={14} y1={11} x2={14} y2={17} stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Plus = createIcon({
  displayName: 'Plus',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <line x1={12} y1={5} x2={12} y2={19} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={5} y1={12} x2={19} y2={12} stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Minus = createIcon({
  displayName: 'Minus',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <line x1={5} y1={12} x2={19} y2={12} stroke={colour} strokeWidth={2} strokeLinecap="round" />
  ),
});

export const Check = createIcon({
  displayName: 'Check',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <polyline
      points="4 12 9 17 20 6"
      stroke={colour}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

export const CheckCircle = createIcon({
  displayName: 'CheckCircle',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={10} stroke={colour} strokeWidth={2} />
      <polyline points="8 12 11 15 16 9" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const XCircle = createIcon({
  displayName: 'XCircle',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={10} stroke={colour} strokeWidth={2} />
      <line x1={15} y1={9} x2={9} y2={15} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <line x1={9} y1={9} x2={15} y2={15} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});
