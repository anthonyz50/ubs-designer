/**
 * @module @ubs/design-system
 *
 * UBS Design System — React component library.
 * Enforces UBS brand guidelines across all components.
 */

// ─── Global CSS tokens (non-module, defines :root variables) ─────────
import './styles/globals.css';

// ─── Components ──────────────────────────────────────────────────────

export * from './components';

// ─── Theme ───────────────────────────────────────────────────────────

export {
  // Theme objects
  ubsTheme,
  ubsThemeLight,
  ubsThemeDark,

  // Token groups
  colours,
  semanticColours,
  semanticColoursDark,
  typography,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  spacing,
  spacingScale,
  breakpoints,
  mediaQueries,
  layout,
  accessibility,
  transitions,
  zIndex,

  // Components
  UBSThemeProvider,
  UBSGlobalStyles,

  // Hooks (from theme)
  useUBSTheme,

  // Context
  UBSThemeContext,

  // CSS
  ubsGlobalCSS,

  // Types
  type UBSTheme,
  type Theme,
  type Breakpoint,
  type SpacingToken,
  type SpacingIndex,
  type SemanticColourScheme,
  type UBSThemeContextValue,
  type UBSThemeProviderProps,
} from './theme';

// ─── Hooks ───────────────────────────────────────────────────────────

export {
  useDarkMode,
  useContrastCheck,
  checkContrast,
  type ContrastCheckResult,
} from './hooks';

// ─── Animations ──────────────────────────────────────────────────────

export {
  // Timing
  UBS_DURATION_BASE,
  ubsDurations,
  type UBSDuration,

  // Easing
  ubsEasings,
  type UBSEasing,

  // Presets
  type AnimationName,
  type AnimationPreset,
  animationPresets,
  EXIT_ANIMATION_MAP,

  // Utilities
  getStaggerDelays,
  buildAnimationCSS,

  // Hook
  useAnimation,
  type UseAnimationOptions,
  type UseAnimationReturn,

  // Component
  AnimatePresence,
  type AnimatePresenceProps,
} from './animations';

// ─── Page Templates ──────────────────────────────────────────────────

export * from './templates';

// ─── Icons ───────────────────────────────────────────────────────────

export * from './icons';

// ─── Tokens (re-export for direct access) ────────────────────────────

export * from './tokens';
