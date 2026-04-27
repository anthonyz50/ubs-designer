/**
 * UBS Design System — Theme Object
 *
 * Combines all design tokens into a single, fully typed theme object.
 * This is the canonical source of truth for all theme values used
 * throughout the component library.
 */

import {
  UBS_WHITE,
  UBS_RED,
  UBS_BLACK,
  GRAY_I,
  GRAY_II,
  GRAY_III,
  GRAY_IV,
  GRAY_V,
  GRAY_VI,
  BORDEAUX_I,
  BORDEAUX_II,
  BORDEAUX_III,
  BRONZE_I,
  BRONZE_II,
  BRONZE_III,
  PASTEL_I,
  PASTEL_II,
  DARK_MODE_PRIMARY_RED,
  DARK_MODE_SECONDARY_RED,
  RAG_RED,
  RAG_AMBER,
  RAG_GREEN,
  TRADING_GREEN,
  TRADING_RED,
  METALLIC_SILVER,
  CHART_COLOURS,
} from '../tokens';

// ─── Breakpoints ─────────────────────────────────────────────────────

export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

export type Breakpoint = keyof typeof breakpoints;

/** Media query strings for use in JS-in-CSS or style utilities */
export const mediaQueries = {
  mobile: `(min-width: ${breakpoints.mobile}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  wide: `(min-width: ${breakpoints.wide}px)`,
} as const;

// ─── Spacing (4px grid) ─────────────────────────────────────────────

export const spacingScale = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96] as const;

export type SpacingIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/** Named spacing tokens */
export const spacing = {
  none: 0,
  '4xs': 4,
  '3xs': 8,
  '2xs': 12,
  xs: 16,
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
  '2xl': 96,
} as const;

export type SpacingToken = keyof typeof spacing;

// ─── Typography ──────────────────────────────────────────────────────

export const fontFamily = {
  primary: "'Frutiger', 'Frutiger Neue', Arial, Helvetica, sans-serif",
  mono: "'Frutiger Mono', 'SF Mono', 'Fira Code', 'Fira Mono', monospace",
} as const;

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

export const fontSize = {
  /** Minimum enforced size */
  min: 14,
  /** Body copy */
  body: 16,
  /** Small text (never below min) */
  small: 14,
  /** Subheading */
  h6: 16,
  h5: 18,
  h4: 20,
  h3: 24,
  h2: 28,
  h1: 32,
  /** Display / hero headings */
  display: 40,
  displayLg: 48,
} as const;

export const lineHeight = {
  /** Body text: 22px at 16px font */
  body: 1.375,
  /** Tight for headings */
  heading: 1.2,
  /** Comfortable for large text */
  relaxed: 1.5,
  /** Single line / buttons */
  none: 1,
} as const;

export const typography = {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
} as const;

// ─── Colours ─────────────────────────────────────────────────────────

export const colours = {
  corporate: {
    white: UBS_WHITE,
    red: UBS_RED,
    black: UBS_BLACK,
  },
  gray: {
    i: GRAY_I,
    ii: GRAY_II,
    iii: GRAY_III,
    iv: GRAY_IV,
    v: GRAY_V,
    vi: GRAY_VI,
  },
  bordeaux: {
    i: BORDEAUX_I,
    ii: BORDEAUX_II,
    iii: BORDEAUX_III,
  },
  bronze: {
    i: BRONZE_I,
    ii: BRONZE_II,
    iii: BRONZE_III,
  },
  pastel: {
    i: PASTEL_I,
    ii: PASTEL_II,
  },
  darkMode: {
    primaryRed: DARK_MODE_PRIMARY_RED,
    secondaryRed: DARK_MODE_SECONDARY_RED,
  },
  rag: {
    red: RAG_RED,
    amber: RAG_AMBER,
    green: RAG_GREEN,
  },
  trading: {
    green: TRADING_GREEN,
    red: TRADING_RED,
  },
  metallic: {
    silver: METALLIC_SILVER,
  },
  chart: CHART_COLOURS,
} as const;

/** Semantic colour mappings for light mode */
export const semanticColours = {
  text: {
    primary: UBS_BLACK,
    secondary: GRAY_V,
    tertiary: GRAY_IV,
    inverse: UBS_WHITE,
    link: UBS_RED,
    error: RAG_RED,
    warning: RAG_AMBER,
    success: RAG_GREEN,
  },
  background: {
    primary: UBS_WHITE,
    secondary: PASTEL_I,
    tertiary: PASTEL_II,
    inverse: UBS_BLACK,
  },
  border: {
    primary: GRAY_II,
    secondary: GRAY_I,
    focus: UBS_BLACK,
  },
  interactive: {
    primary: UBS_RED,
    primaryHover: BORDEAUX_I,
    primaryActive: BORDEAUX_II,
    secondary: UBS_BLACK,
    secondaryHover: GRAY_VI,
  },
} as const;

/** Semantic colour mappings for dark mode */
export const semanticColoursDark = {
  text: {
    primary: UBS_WHITE,
    secondary: GRAY_II,
    tertiary: GRAY_III,
    inverse: UBS_BLACK,
    link: DARK_MODE_SECONDARY_RED,
    error: DARK_MODE_SECONDARY_RED,
    warning: RAG_AMBER,
    success: RAG_GREEN,
  },
  background: {
    primary: '#1A1A1A',
    secondary: '#2A2A2A',
    tertiary: '#333333',
    inverse: UBS_WHITE,
  },
  border: {
    primary: GRAY_V,
    secondary: GRAY_VI,
    focus: UBS_WHITE,
  },
  interactive: {
    primary: DARK_MODE_PRIMARY_RED,
    primaryHover: DARK_MODE_SECONDARY_RED,
    primaryActive: '#FF8A7A',
    secondary: UBS_WHITE,
    secondaryHover: GRAY_II,
  },
} as const;

// ─── Layout ──────────────────────────────────────────────────────────

export const layout = {
  /** Max content width */
  maxWidth: 1440,
  /** Content gutter / side padding */
  gutter: {
    mobile: 16,
    tablet: 24,
    desktop: 32,
    wide: 48,
  },
  /** Grid columns */
  columns: {
    mobile: 4,
    tablet: 8,
    desktop: 12,
    wide: 12,
  },
  /** Column gap */
  columnGap: {
    mobile: 16,
    tablet: 24,
    desktop: 24,
    wide: 32,
  },
  /** Border radius */
  borderRadius: {
    none: 0,
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
    full: 9999,
  },
} as const;

// ─── Accessibility ───────────────────────────────────────────────────

export const accessibility = {
  /** WCAG 2.2 AA contrast ratio requirements */
  contrast: {
    /** Normal text (<25px / <18.7px bold): 4.5:1 */
    normalText: 4.5,
    /** Large text (≥25px / ≥18.7px bold): 3:1 */
    largeText: 3,
    /** Non-text graphics and UI components: 3:1 */
    graphics: 3,
  },
  /** Threshold in px for "large text" classification */
  largeTextThreshold: 25,
  /** Threshold in px for bold "large text" classification */
  largeTextBoldThreshold: 18.7,
  /** Minimum touch target size (px) for WCAG 2.5.8 */
  minTouchTarget: 44,
  /** Minimum font size enforced across all text */
  minFontSize: 14,
  /** Focus indicator minimum width */
  focusIndicatorWidth: 2,
} as const;

// ─── Transitions ─────────────────────────────────────────────────────

export const transitions = {
  duration: {
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  easing: {
    /** Standard UBS easing for most interactions */
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    /** Enter / appear */
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    /** Exit / disappear */
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    /** Impulse / spring-like */
    impulse: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },
} as const;

// ─── Z-Index Scale ───────────────────────────────────────────────────

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  popover: 500,
  toast: 600,
  tooltip: 700,
} as const;

// ─── Semantic Colour Type ─────────────────────────────────────────────

/** Semantic colour scheme shape, shared by light and dark modes */
export interface SemanticColourScheme {
  readonly text: {
    readonly primary: string;
    readonly secondary: string;
    readonly tertiary: string;
    readonly inverse: string;
    readonly link: string;
    readonly error: string;
    readonly warning: string;
    readonly success: string;
  };
  readonly background: {
    readonly primary: string;
    readonly secondary: string;
    readonly tertiary: string;
    readonly inverse: string;
  };
  readonly border: {
    readonly primary: string;
    readonly secondary: string;
    readonly focus: string;
  };
  readonly interactive: {
    readonly primary: string;
    readonly primaryHover: string;
    readonly primaryActive: string;
    readonly secondary: string;
    readonly secondaryHover: string;
  };
}

// ─── Theme Object ────────────────────────────────────────────────────

export interface UBSTheme {
  readonly colours: typeof colours;
  readonly semantic: SemanticColourScheme;
  readonly typography: typeof typography;
  readonly spacing: typeof spacing;
  readonly spacingScale: typeof spacingScale;
  readonly breakpoints: typeof breakpoints;
  readonly mediaQueries: typeof mediaQueries;
  readonly layout: typeof layout;
  readonly accessibility: typeof accessibility;
  readonly transitions: typeof transitions;
  readonly zIndex: typeof zIndex;
  readonly isDarkMode: boolean;
}

/** Light mode theme */
export const ubsThemeLight: UBSTheme = {
  colours,
  semantic: semanticColours,
  typography,
  spacing,
  spacingScale,
  breakpoints,
  mediaQueries,
  layout,
  accessibility,
  transitions,
  zIndex,
  isDarkMode: false,
} as const;

/** Dark mode theme */
export const ubsThemeDark: UBSTheme = {
  colours,
  semantic: semanticColoursDark,
  typography,
  spacing,
  spacingScale,
  breakpoints,
  mediaQueries,
  layout,
  accessibility,
  transitions,
  zIndex,
  isDarkMode: true,
} as const;

/** Default theme (light) */
export const ubsTheme = ubsThemeLight;

export type { UBSTheme as Theme };
