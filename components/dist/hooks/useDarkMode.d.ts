/**
 * UBS Design System — useDarkMode Hook
 *
 * Detects the user's system colour scheme preference and provides
 * a reactive boolean value. Listens for changes in real-time.
 *
 * For theme-integrated dark mode (with toggle), use useUBSTheme() instead.
 * This hook is for standalone detection without the full theme provider.
 *
 * @example
 * ```tsx
 * import { useDarkMode } from '@ubs/design-system';
 *
 * function MyComponent() {
 *   const isDark = useDarkMode();
 *   return <div>{isDark ? 'Dark mode' : 'Light mode'}</div>;
 * }
 * ```
 */
/**
 * Returns true if the user's system prefers dark mode.
 * Updates reactively when the system preference changes.
 */
export declare function useDarkMode(): boolean;
