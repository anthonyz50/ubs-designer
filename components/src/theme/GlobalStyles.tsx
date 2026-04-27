/**
 * UBS Design System — Global Styles
 *
 * Modern CSS reset + UBS base styles. Intended to be rendered once
 * at the root of the application alongside <UBSThemeProvider>.
 *
 * Based on the UBS Web specification:
 * - Font: Frutiger (fallback Arial)
 * - Body: 16px / 22px line height
 * - Minimum font size: 14px enforced
 */

import { useEffect } from 'react';

const GLOBAL_STYLE_ID = 'ubs-design-system-global-styles';

const globalCSS = `
/* ─── Modern CSS Reset ──────────────────────────────────────────── */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  line-height: 1.15;
  tab-size: 4;
}

body {
  min-height: 100vh;
  line-height: var(--ubs-line-height-body, 1.375);
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

a {
  color: inherit;
  text-decoration: inherit;
}

ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Remove default button styles */
button {
  background: none;
  border: none;
  cursor: pointer;
}

/* Ensure consistent fieldset */
fieldset {
  border: none;
}

/* ─── UBS Base Styles ───────────────────────────────────────────── */

:root {
  /* Typography */
  --ubs-font-family-primary: 'Frutiger', 'Frutiger Neue', Arial, Helvetica, sans-serif;
  --ubs-font-family-mono: 'Frutiger Mono', 'SF Mono', 'Fira Code', 'Fira Mono', monospace;
  --ubs-font-size-body: 16px;
  --ubs-font-size-min: 14px;
  --ubs-line-height-body: 1.375;

  /* Light mode semantic colours */
  --ubs-color-text-primary: #000000;
  --ubs-color-text-secondary: #5A5D5C;
  --ubs-color-text-tertiary: #7A7870;
  --ubs-color-text-inverse: #FFFFFF;
  --ubs-color-text-link: #E60000;
  --ubs-color-text-error: #BD000C;
  --ubs-color-text-warning: #E4A911;
  --ubs-color-text-success: #6F7A1A;

  --ubs-color-bg-primary: #FFFFFF;
  --ubs-color-bg-secondary: #ECEBE4;
  --ubs-color-bg-tertiary: #F5F0E1;
  --ubs-color-bg-inverse: #000000;

  --ubs-color-border-primary: #B8B3A2;
  --ubs-color-border-secondary: #CCCABC;
  --ubs-color-border-focus: #000000;

  --ubs-color-interactive-primary: #E60000;
  --ubs-color-interactive-primary-hover: #BD000C;
  --ubs-color-interactive-primary-active: #8A000A;
  --ubs-color-interactive-secondary: #000000;
  --ubs-color-interactive-secondary-hover: #404040;

  /* Corporate (constant across modes) */
  --ubs-color-red: #E60000;
  --ubs-color-black: #000000;
  --ubs-color-white: #FFFFFF;
}

html {
  font-family: var(--ubs-font-family-primary);
  font-size: var(--ubs-font-size-body);
  color: var(--ubs-color-text-primary);
  background-color: var(--ubs-color-bg-primary);
}

body {
  font-family: var(--ubs-font-family-primary);
  font-size: var(--ubs-font-size-body);
  line-height: var(--ubs-line-height-body);
  color: var(--ubs-color-text-primary);
  background-color: var(--ubs-color-bg-primary);
}

/*
 * Enforce minimum font size of 14px.
 * Applied broadly; components can override upward only.
 */
body * {
  font-size: max(var(--ubs-font-size-min), inherit);
}

/* Links */
a {
  color: var(--ubs-color-text-link);
  text-decoration: underline;
  text-underline-offset: 2px;
}

a:hover {
  text-decoration-thickness: 2px;
}

a:focus-visible {
  outline: 2px solid var(--ubs-color-border-focus);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Focus visible for all interactive elements */
:focus-visible {
  outline: 2px solid var(--ubs-color-border-focus);
  outline-offset: 2px;
}

/* Selection */
::selection {
  background-color: var(--ubs-color-interactive-primary);
  color: var(--ubs-color-white);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ─── Dark Mode ─────────────────────────────────────────────────── */

@media (prefers-color-scheme: dark) {
  :root:not([data-ubs-theme="light"]) {
    --ubs-color-text-primary: #FFFFFF;
    --ubs-color-text-secondary: #B8B3A2;
    --ubs-color-text-tertiary: #8E8D83;
    --ubs-color-text-inverse: #000000;
    --ubs-color-text-link: #FE6F5D;
    --ubs-color-text-error: #FE6F5D;

    --ubs-color-bg-primary: #1A1A1A;
    --ubs-color-bg-secondary: #2A2A2A;
    --ubs-color-bg-tertiary: #333333;
    --ubs-color-bg-inverse: #FFFFFF;

    --ubs-color-border-primary: #5A5D5C;
    --ubs-color-border-secondary: #404040;
    --ubs-color-border-focus: #FFFFFF;

    --ubs-color-interactive-primary: #D83B31;
    --ubs-color-interactive-primary-hover: #FE6F5D;
    --ubs-color-interactive-primary-active: #FF8A7A;
    --ubs-color-interactive-secondary: #FFFFFF;
    --ubs-color-interactive-secondary-hover: #B8B3A2;
  }
}

/* Explicit dark mode via data attribute */
[data-ubs-theme="dark"] {
  --ubs-color-text-primary: #FFFFFF;
  --ubs-color-text-secondary: #B8B3A2;
  --ubs-color-text-tertiary: #8E8D83;
  --ubs-color-text-inverse: #000000;
  --ubs-color-text-link: #FE6F5D;
  --ubs-color-text-error: #FE6F5D;

  --ubs-color-bg-primary: #1A1A1A;
  --ubs-color-bg-secondary: #2A2A2A;
  --ubs-color-bg-tertiary: #333333;
  --ubs-color-bg-inverse: #FFFFFF;

  --ubs-color-border-primary: #5A5D5C;
  --ubs-color-border-secondary: #404040;
  --ubs-color-border-focus: #FFFFFF;

  --ubs-color-interactive-primary: #D83B31;
  --ubs-color-interactive-primary-hover: #FE6F5D;
  --ubs-color-interactive-primary-active: #FF8A7A;
  --ubs-color-interactive-secondary: #FFFFFF;
  --ubs-color-interactive-secondary-hover: #B8B3A2;
}
`;

/**
 * Injects UBS global styles into the document head.
 * Safe to render multiple times; only one style element is created.
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <UBSThemeProvider>
 *       <UBSGlobalStyles />
 *       <YourApp />
 *     </UBSThemeProvider>
 *   );
 * }
 * ```
 */
export function UBSGlobalStyles(): null {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Avoid duplicate injection
    if (document.getElementById(GLOBAL_STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = GLOBAL_STYLE_ID;
    style.textContent = globalCSS;
    document.head.appendChild(style);

    return () => {
      const existing = document.getElementById(GLOBAL_STYLE_ID);
      if (existing) existing.remove();
    };
  }, []);

  return null;
}

/** The raw CSS string, exported for SSR or build-time extraction */
export const ubsGlobalCSS = globalCSS;
