/**
 * @module icons/webapp/content
 * @description Content icons: home, user, users, settings, bell, mail, calendar, clock, document, folder, image, chart, donut, globe.
 * All icons: 24x24 viewBox, 2px stroke, no fill, round linecap/linejoin.
 */
import { createIcon } from '../createIcon';

export const Home = createIcon({
  displayName: 'Home',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10.5Z" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21V14h6v7" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const User = createIcon({
  displayName: 'User',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={8} r={4} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 21c0-3.87-3.58-7-8-7s-8 3.13-8 7" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Users = createIcon({
  displayName: 'Users',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={9} cy={8} r={4} stroke={colour} strokeWidth={2} />
      <path d="M17 21c0-3.31-3.13-6-7-6h-1c-3.87 0-7 2.69-7 6" stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <path d="M17 8a4 4 0 0 1 0 0" stroke={colour} strokeWidth={2} />
      <circle cx={17} cy={7} r={3} stroke={colour} strokeWidth={2} />
      <path d="M22 21c0-2.76-2.24-5-5-5" stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Settings = createIcon({
  displayName: 'Settings',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={3} stroke={colour} strokeWidth={2} />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.84 1 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
        stroke={colour}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

export const Bell = createIcon({
  displayName: 'Bell',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9Z" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Mail = createIcon({
  displayName: 'Mail',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <rect x={2} y={4} width={20} height={16} rx={2} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22 6 12 13 2 6" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Calendar = createIcon({
  displayName: 'Calendar',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <rect x={3} y={4} width={18} height={18} rx={2} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <line x1={16} y1={2} x2={16} y2={6} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={8} y1={2} x2={8} y2={6} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={3} y1={10} x2={21} y2={10} stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Clock = createIcon({
  displayName: 'Clock',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={10} stroke={colour} strokeWidth={2} />
      <polyline points="12 6 12 12 16 14" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Document = createIcon({
  displayName: 'Document',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14 2 14 8 20 8" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <line x1={8} y1={13} x2={16} y2={13} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={8} y1={17} x2={14} y2={17} stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Folder = createIcon({
  displayName: 'Folder',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <path
      d="M2 6a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z"
      stroke={colour}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

export const ImageIcon = createIcon({
  displayName: 'ImageIcon',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <rect x={3} y={3} width={18} height={18} rx={2} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={8.5} cy={8.5} r={1.5} stroke={colour} strokeWidth={2} />
      <polyline points="21 15 16 10 5 21" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Chart = createIcon({
  displayName: 'Chart',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <line x1={18} y1={20} x2={18} y2={10} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={12} y1={20} x2={12} y2={4} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={6} y1={20} x2={6} y2={14} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={2} y1={20} x2={22} y2={20} stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const DonutChart = createIcon({
  displayName: 'DonutChart',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={10} stroke={colour} strokeWidth={2} />
      <circle cx={12} cy={12} r={5} stroke={colour} strokeWidth={2} />
      <line x1={12} y1={2} x2={12} y2={7} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <line x1={20.66} y1={17} x2={16.33} y2={14.5} stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});

export const Globe = createIcon({
  displayName: 'Globe',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={10} stroke={colour} strokeWidth={2} />
      <ellipse cx={12} cy={12} rx={4} ry={10} stroke={colour} strokeWidth={2} />
      <line x1={2} y1={12} x2={22} y2={12} stroke={colour} strokeWidth={2} strokeLinecap="round" />
    </>
  ),
});
