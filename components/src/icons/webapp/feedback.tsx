/**
 * @module icons/webapp/feedback
 * @description Feedback icons: info, warning, error, success, help.
 * All icons: 24x24 viewBox, 2px stroke, no fill, round linecap/linejoin.
 */
import { createIcon } from '../createIcon';

export const Info = createIcon({
  displayName: 'Info',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={10} stroke={colour} strokeWidth={2} />
      <line x1={12} y1={16} x2={12} y2={12} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <circle cx={12} cy={8} r={0.5} fill={colour} stroke={colour} strokeWidth={1} />
    </>
  ),
});

export const Warning = createIcon({
  displayName: 'Warning',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <line x1={12} y1={9} x2={12} y2={13} stroke={colour} strokeWidth={2} strokeLinecap="round" />
      <circle cx={12} cy={17} r={0.5} fill={colour} stroke={colour} strokeWidth={1} />
    </>
  ),
});

export const ErrorIcon = createIcon({
  displayName: 'ErrorIcon',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={10} stroke={colour} strokeWidth={2} />
      <line x1={15} y1={9} x2={9} y2={15} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <line x1={9} y1={9} x2={15} y2={15} stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Success = createIcon({
  displayName: 'Success',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={10} stroke={colour} strokeWidth={2} />
      <polyline points="8 12 11 15 16 9" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
});

export const Help = createIcon({
  displayName: 'Help',
  viewBox: '0 0 24 24',
  path: (colour) => (
    <>
      <circle cx={12} cy={12} r={10} stroke={colour} strokeWidth={2} />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke={colour} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={12} cy={17} r={0.5} fill={colour} stroke={colour} strokeWidth={1} />
    </>
  ),
});
