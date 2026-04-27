/**
 * UBS Design System — Theme Provider
 *
 * React context provider that supplies the UBS theme and dark mode toggle
 * to all descendant components.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { ubsThemeLight, ubsThemeDark, type UBSTheme } from './theme';

// ─── Context Types ───────────────────────────────────────────────────

export interface UBSThemeContextValue {
  /** The current resolved theme object */
  readonly theme: UBSTheme;
  /** Whether dark mode is currently active */
  readonly isDarkMode: boolean;
  /** Toggle dark mode on/off */
  readonly toggleDarkMode: () => void;
  /** Explicitly set dark mode */
  readonly setDarkMode: (dark: boolean) => void;
  /** The current colour mode */
  readonly colourMode: 'light' | 'dark';
}

// ─── Context ─────────────────────────────────────────────────────────

const UBSThemeContext = createContext<UBSThemeContextValue | null>(null);
UBSThemeContext.displayName = 'UBSThemeContext';

// ─── Provider Props ──────────────────────────────────────────────────

export interface UBSThemeProviderProps {
  /** Child components */
  children: ReactNode;
  /**
   * Initial colour mode. Defaults to 'system' which reads from
   * prefers-color-scheme media query.
   */
  defaultColourMode?: 'light' | 'dark' | 'system';
  /**
   * Override theme for custom extensions (rare). When provided, this
   * takes precedence over the default light/dark themes.
   */
  theme?: UBSTheme;
}

// ─── System dark mode detection ──────────────────────────────────────

function getSystemDarkMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// ─── CSS custom property injection ───────────────────────────────────

function injectThemeProperties(theme: UBSTheme): void {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const { semantic, spacing, typography, layout, transitions, zIndex } = theme;

  // Text colours
  root.style.setProperty('--ubs-color-text-primary', semantic.text.primary);
  root.style.setProperty('--ubs-color-text-secondary', semantic.text.secondary);
  root.style.setProperty('--ubs-color-text-tertiary', semantic.text.tertiary);
  root.style.setProperty('--ubs-color-text-inverse', semantic.text.inverse);
  root.style.setProperty('--ubs-color-text-link', semantic.text.link);
  root.style.setProperty('--ubs-color-text-error', semantic.text.error);
  root.style.setProperty('--ubs-color-text-warning', semantic.text.warning);
  root.style.setProperty('--ubs-color-text-success', semantic.text.success);

  // Background colours
  root.style.setProperty('--ubs-color-bg-primary', semantic.background.primary);
  root.style.setProperty('--ubs-color-bg-secondary', semantic.background.secondary);
  root.style.setProperty('--ubs-color-bg-tertiary', semantic.background.tertiary);
  root.style.setProperty('--ubs-color-bg-inverse', semantic.background.inverse);

  // Border colours
  root.style.setProperty('--ubs-color-border-primary', semantic.border.primary);
  root.style.setProperty('--ubs-color-border-secondary', semantic.border.secondary);
  root.style.setProperty('--ubs-color-border-focus', semantic.border.focus);

  // Interactive colours
  root.style.setProperty('--ubs-color-interactive-primary', semantic.interactive.primary);
  root.style.setProperty('--ubs-color-interactive-primary-hover', semantic.interactive.primaryHover);
  root.style.setProperty('--ubs-color-interactive-primary-active', semantic.interactive.primaryActive);
  root.style.setProperty('--ubs-color-interactive-secondary', semantic.interactive.secondary);
  root.style.setProperty('--ubs-color-interactive-secondary-hover', semantic.interactive.secondaryHover);

  // Corporate colours (constant)
  root.style.setProperty('--ubs-color-red', theme.colours.corporate.red);
  root.style.setProperty('--ubs-color-black', theme.colours.corporate.black);
  root.style.setProperty('--ubs-color-white', theme.colours.corporate.white);

  // Spacing
  Object.entries(spacing).forEach(([key, value]) => {
    root.style.setProperty(`--ubs-spacing-${key}`, `${value}px`);
  });

  // Typography
  root.style.setProperty('--ubs-font-family-primary', typography.fontFamily.primary);
  root.style.setProperty('--ubs-font-family-mono', typography.fontFamily.mono);
  root.style.setProperty('--ubs-font-weight-light', String(typography.fontWeight.light));
  root.style.setProperty('--ubs-font-weight-regular', String(typography.fontWeight.regular));
  root.style.setProperty('--ubs-font-weight-medium', String(typography.fontWeight.medium));
  root.style.setProperty('--ubs-font-weight-bold', String(typography.fontWeight.bold));
  root.style.setProperty('--ubs-font-size-body', `${typography.fontSize.body}px`);
  root.style.setProperty('--ubs-font-size-min', `${typography.fontSize.min}px`);
  root.style.setProperty('--ubs-line-height-body', String(typography.lineHeight.body));
  root.style.setProperty('--ubs-line-height-heading', String(typography.lineHeight.heading));

  // Layout
  root.style.setProperty('--ubs-layout-max-width', `${layout.maxWidth}px`);
  Object.entries(layout.borderRadius).forEach(([key, value]) => {
    root.style.setProperty(`--ubs-radius-${key}`, value === 9999 ? '9999px' : `${value}px`);
  });

  // Transitions
  Object.entries(transitions.duration).forEach(([key, value]) => {
    root.style.setProperty(`--ubs-duration-${key}`, value);
  });
  Object.entries(transitions.easing).forEach(([key, value]) => {
    root.style.setProperty(`--ubs-easing-${key}`, value);
  });

  // Z-index
  Object.entries(zIndex).forEach(([key, value]) => {
    root.style.setProperty(`--ubs-z-${key}`, String(value));
  });

  // Dark mode data attribute for CSS targeting
  root.setAttribute('data-ubs-theme', theme.isDarkMode ? 'dark' : 'light');
}

// ─── Provider Component ──────────────────────────────────────────────

export function UBSThemeProvider({
  children,
  defaultColourMode = 'system',
  theme: customTheme,
}: UBSThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (defaultColourMode === 'system') return getSystemDarkMode();
    return defaultColourMode === 'dark';
  });

  // Listen for system theme changes when in system mode
  useEffect(() => {
    if (defaultColourMode !== 'system') return;
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [defaultColourMode]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  const setDarkMode = useCallback((dark: boolean) => {
    setIsDarkMode(dark);
  }, []);

  const theme = customTheme ?? (isDarkMode ? ubsThemeDark : ubsThemeLight);

  // Inject CSS custom properties whenever theme changes
  useEffect(() => {
    injectThemeProperties(theme);
  }, [theme]);

  const value = useMemo<UBSThemeContextValue>(
    () => ({
      theme,
      isDarkMode,
      toggleDarkMode,
      setDarkMode,
      colourMode: isDarkMode ? 'dark' : 'light',
    }),
    [theme, isDarkMode, toggleDarkMode, setDarkMode],
  );

  return (
    <UBSThemeContext.Provider value={value}>
      {children}
    </UBSThemeContext.Provider>
  );
}

// ─── Hook ────────────────────────────────────────────────────────────

/**
 * Access the UBS theme context. Must be used within a <UBSThemeProvider>.
 *
 * @returns The theme context value including theme object and dark mode controls
 * @throws If used outside of UBSThemeProvider
 */
export function useUBSTheme(): UBSThemeContextValue {
  const context = useContext(UBSThemeContext);
  if (!context) {
    throw new Error(
      'useUBSTheme must be used within a <UBSThemeProvider>. ' +
      'Wrap your application in <UBSThemeProvider> to use UBS theme hooks.',
    );
  }
  return context;
}

export { UBSThemeContext };
