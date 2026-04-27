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

import { useEffect, useState } from 'react';

const DARK_MODE_QUERY = '(prefers-color-scheme: dark)';

/**
 * Returns true if the user's system prefers dark mode.
 * Updates reactively when the system preference changes.
 */
export function useDarkMode(): boolean {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(DARK_MODE_QUERY).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(DARK_MODE_QUERY);

    const handler = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    // Set initial value (handles SSR hydration mismatch)
    setIsDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isDarkMode;
}
