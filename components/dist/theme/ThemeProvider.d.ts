import { ReactNode } from 'react';
import { UBSTheme } from './theme';

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
declare const UBSThemeContext: import('react').Context<UBSThemeContextValue | null>;
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
export declare function UBSThemeProvider({ children, defaultColourMode, theme: customTheme, }: UBSThemeProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Access the UBS theme context. Must be used within a <UBSThemeProvider>.
 *
 * @returns The theme context value including theme object and dark mode controls
 * @throws If used outside of UBSThemeProvider
 */
export declare function useUBSTheme(): UBSThemeContextValue;
export { UBSThemeContext };
