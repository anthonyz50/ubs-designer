/**
 * Design System Service
 *
 * Manages design system profiles: loading, saving, applying,
 * and extracting design tokens as CSS custom properties.
 */

// ── Types ──

export interface DesignSystemProfile {
  id: string;
  name: string;
  description: string;
  tokens: DesignTokens;
  createdAt: string;
  updatedAt: string;
}

export interface DesignTokens {
  colours: {
    primary: string;
    primaryDark: string;
    accent: string;
    bgPrimary: string;
    bgSecondary: string;
    bgTertiary: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    border: string;
    borderStrong: string;
    focus: string;
    statusError: string;
    statusWarning: string;
    statusSuccess: string;
    statusInfo: string;
  };
  typography: {
    fontFamily: string;
    fontFamilyFallback: string;
    headerWeight: number;
    bodyWeight: number;
    baseFontSize: string;
    lineHeight: string;
  };
  spacing: {
    unit: number;
    scale: number[];
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}

// ── Constants ──

const STORAGE_KEY = 'ubs-design-system-profiles';

/** Mapping from DesignTokens colour keys to CSS custom property names. */
const COLOUR_TO_CSS: Record<keyof DesignTokens['colours'], string> = {
  primary: '--ubs-red',
  primaryDark: '--ubs-red-dark',
  accent: '--ubs-accent',
  bgPrimary: '--ubs-bg-primary',
  bgSecondary: '--ubs-bg-secondary',
  bgTertiary: '--ubs-bg-tertiary',
  textPrimary: '--ubs-text-primary',
  textSecondary: '--ubs-text-secondary',
  textTertiary: '--ubs-text-tertiary',
  border: '--ubs-border',
  borderStrong: '--ubs-border-strong',
  focus: '--ubs-focus',
  statusError: '--ubs-status-error',
  statusWarning: '--ubs-status-warning',
  statusSuccess: '--ubs-status-success',
  statusInfo: '--ubs-status-info',
};

/** Mapping from DesignTokens borderRadius keys to CSS custom property names. */
const RADIUS_TO_CSS: Record<keyof DesignTokens['borderRadius'], string> = {
  sm: '--ubs-radius-sm',
  md: '--ubs-radius-md',
  lg: '--ubs-radius-lg',
  full: '--ubs-radius-full',
};

/** Mapping from DesignTokens shadows keys to CSS custom property names. */
const SHADOW_TO_CSS: Record<keyof DesignTokens['shadows'], string> = {
  sm: '--ubs-elevation-1',
  md: '--ubs-elevation-2',
  lg: '--ubs-elevation-3',
};

// ── Default UBS profile ──

const DEFAULT_TOKENS: DesignTokens = {
  colours: {
    primary: '#E60000',
    primaryDark: '#BA0000',
    accent: '#E60000',
    bgPrimary: '#FFFFFF',
    bgSecondary: '#F9F9F7',
    bgTertiary: '#F4F3EE',
    textPrimary: '#1C1C1C',
    textSecondary: '#5A5D5C',
    textTertiary: '#8E8D83',
    border: '#E0DFD7',
    borderStrong: '#B8B3A2',
    focus: '#009BD2',
    statusError: '#BD000C',
    statusWarning: '#E4A911',
    statusSuccess: '#6F7A1A',
    statusInfo: '#3A5A88',
  },
  typography: {
    fontFamily: 'Frutiger',
    fontFamilyFallback: 'Arial, Helvetica, sans-serif',
    headerWeight: 300,
    bodyWeight: 300,
    baseFontSize: '16px',
    lineHeight: '1.5',
  },
  spacing: {
    unit: 4,
    scale: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12],
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 12px 32px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.08)',
  },
};

// ── Public API ──

/** Returns the default UBS design system profile. */
export function getDefaultProfile(): DesignSystemProfile {
  return {
    id: 'ubs-default',
    name: 'UBS Default',
    description: 'The standard UBS design system tokens.',
    tokens: structuredClone(DEFAULT_TOKENS),
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
  };
}

/** Returns all saved profiles from localStorage. */
export function getSavedProfiles(): DesignSystemProfile[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as DesignSystemProfile[];
  } catch {
    return [];
  }
}

/** Saves (or updates) a profile in localStorage. */
export function saveProfile(profile: DesignSystemProfile): void {
  const profiles = getSavedProfiles();
  const idx = profiles.findIndex((p) => p.id === profile.id);
  if (idx >= 0) {
    profiles[idx] = profile;
  } else {
    profiles.push(profile);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
}

/** Deletes a profile from localStorage by id. */
export function deleteProfile(id: string): void {
  const profiles = getSavedProfiles().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
}

/** Applies a profile's tokens to document.documentElement as CSS custom properties. */
export function applyProfile(profile: DesignSystemProfile): void {
  applyTokens(profile.tokens);
}

/** Resets all overridden CSS custom properties to the default UBS values. */
export function resetToDefault(): void {
  applyTokens(DEFAULT_TOKENS);
}

/** Extracts the current computed token values from the DOM. */
export function extractCurrentTokens(): DesignTokens {
  const cs = getComputedStyle(document.documentElement);
  const get = (prop: string) => cs.getPropertyValue(prop).trim();

  return {
    colours: {
      primary: normaliseColour(get('--ubs-red')) || DEFAULT_TOKENS.colours.primary,
      primaryDark: normaliseColour(get('--ubs-red-dark')) || DEFAULT_TOKENS.colours.primaryDark,
      accent: normaliseColour(get('--ubs-accent')) || DEFAULT_TOKENS.colours.accent,
      bgPrimary: normaliseColour(get('--ubs-bg-primary')) || DEFAULT_TOKENS.colours.bgPrimary,
      bgSecondary: normaliseColour(get('--ubs-bg-secondary')) || DEFAULT_TOKENS.colours.bgSecondary,
      bgTertiary: normaliseColour(get('--ubs-bg-tertiary')) || DEFAULT_TOKENS.colours.bgTertiary,
      textPrimary: normaliseColour(get('--ubs-text-primary')) || DEFAULT_TOKENS.colours.textPrimary,
      textSecondary: normaliseColour(get('--ubs-text-secondary')) || DEFAULT_TOKENS.colours.textSecondary,
      textTertiary: normaliseColour(get('--ubs-text-tertiary')) || DEFAULT_TOKENS.colours.textTertiary,
      border: normaliseColour(get('--ubs-border')) || DEFAULT_TOKENS.colours.border,
      borderStrong: normaliseColour(get('--ubs-border-strong')) || DEFAULT_TOKENS.colours.borderStrong,
      focus: normaliseColour(get('--ubs-focus')) || DEFAULT_TOKENS.colours.focus,
      statusError: normaliseColour(get('--ubs-status-error')) || DEFAULT_TOKENS.colours.statusError,
      statusWarning: normaliseColour(get('--ubs-status-warning')) || DEFAULT_TOKENS.colours.statusWarning,
      statusSuccess: normaliseColour(get('--ubs-status-success')) || DEFAULT_TOKENS.colours.statusSuccess,
      statusInfo: normaliseColour(get('--ubs-status-info')) || DEFAULT_TOKENS.colours.statusInfo,
    },
    typography: {
      fontFamily: get('--ubs-font-family').split(',')[0].replace(/['"]/g, '').trim() || DEFAULT_TOKENS.typography.fontFamily,
      fontFamilyFallback: get('--ubs-font-family').split(',').slice(1).join(',').trim() || DEFAULT_TOKENS.typography.fontFamilyFallback,
      headerWeight: parseInt(get('--ubs-header-1-weight'), 10) || DEFAULT_TOKENS.typography.headerWeight,
      bodyWeight: parseInt(get('--ubs-body-1-weight'), 10) || DEFAULT_TOKENS.typography.bodyWeight,
      baseFontSize: get('--ubs-body-1-size') || DEFAULT_TOKENS.typography.baseFontSize,
      lineHeight: get('--ubs-body-1-line-height') || DEFAULT_TOKENS.typography.lineHeight,
    },
    spacing: {
      unit: DEFAULT_TOKENS.spacing.unit,
      scale: [...DEFAULT_TOKENS.spacing.scale],
    },
    borderRadius: {
      sm: get('--ubs-radius-sm') || DEFAULT_TOKENS.borderRadius.sm,
      md: get('--ubs-radius-md') || DEFAULT_TOKENS.borderRadius.md,
      lg: get('--ubs-radius-lg') || DEFAULT_TOKENS.borderRadius.lg,
      full: get('--ubs-radius-full') || DEFAULT_TOKENS.borderRadius.full,
    },
    shadows: {
      sm: get('--ubs-elevation-1') || DEFAULT_TOKENS.shadows.sm,
      md: get('--ubs-elevation-2') || DEFAULT_TOKENS.shadows.md,
      lg: get('--ubs-elevation-3') || DEFAULT_TOKENS.shadows.lg,
    },
  };
}

// ── Internal helpers ──

function applyTokens(tokens: DesignTokens): void {
  const root = document.documentElement.style;

  // Colours
  for (const [key, cssProp] of Object.entries(COLOUR_TO_CSS)) {
    root.setProperty(cssProp, tokens.colours[key as keyof DesignTokens['colours']]);
  }

  // Also set --ubs-red-web to stay in sync with primary
  root.setProperty('--ubs-red-web', tokens.colours.primary);

  // Typography
  const fullFontFamily = `'${tokens.typography.fontFamily}', ${tokens.typography.fontFamilyFallback}`;
  root.setProperty('--ubs-font-family', fullFontFamily);
  root.setProperty('--ubs-header-1-weight', String(tokens.typography.headerWeight));
  root.setProperty('--ubs-header-2-weight', String(tokens.typography.headerWeight));
  root.setProperty('--ubs-header-3-weight', String(Math.min(tokens.typography.headerWeight + 100, 700)));
  root.setProperty('--ubs-body-1-weight', String(tokens.typography.bodyWeight));
  root.setProperty('--ubs-body-2-weight', String(tokens.typography.bodyWeight));
  root.setProperty('--ubs-body-1-size', tokens.typography.baseFontSize);
  root.setProperty('--ubs-body-1-line-height', tokens.typography.lineHeight);

  // Spacing
  tokens.spacing.scale.forEach((multiplier, i) => {
    const px = tokens.spacing.unit * multiplier;
    root.setProperty(`--ubs-space-${i}`, px === 0 ? '0' : `${px / 16}rem`);
  });

  // Border radius
  for (const [key, cssProp] of Object.entries(RADIUS_TO_CSS)) {
    root.setProperty(cssProp, tokens.borderRadius[key as keyof DesignTokens['borderRadius']]);
  }

  // Shadows
  for (const [key, cssProp] of Object.entries(SHADOW_TO_CSS)) {
    root.setProperty(cssProp, tokens.shadows[key as keyof DesignTokens['shadows']]);
  }
}

/**
 * Attempts to normalise a computed colour value to a hex string.
 * Handles rgb(), rgba(), and existing hex values.
 */
function normaliseColour(value: string): string {
  if (!value) return '';

  // Already hex
  if (value.startsWith('#')) return value.toUpperCase();

  // rgb(r, g, b) or rgba(r, g, b, a)
  const match = value.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (match) {
    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
  }

  return value;
}
