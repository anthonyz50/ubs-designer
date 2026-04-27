/**
 * UBS Design System — useUBSTheme Hook
 *
 * Re-export of the theme hook from ThemeProvider for convenience.
 *
 * @example
 * ```tsx
 * import { useUBSTheme } from '@ubs/design-system';
 *
 * function MyComponent() {
 *   const { theme, isDarkMode, toggleDarkMode } = useUBSTheme();
 *   return <div style={{ color: theme.semantic.text.primary }}>Hello</div>;
 * }
 * ```
 */
export { useUBSTheme, type UBSThemeContextValue } from '../theme/ThemeProvider';
