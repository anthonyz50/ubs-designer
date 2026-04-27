import { describe, it, expect } from 'vitest';
import {
  ubsThemeLight,
  ubsThemeDark,
  spacingScale,
  spacing,
  breakpoints,
} from './theme';

describe('Theme', () => {
  // ── Dark mode flag ───────────────────────────────────────────────
  it('light theme has isDarkMode=false', () => {
    expect(ubsThemeLight.isDarkMode).toBe(false);
  });

  it('dark theme has isDarkMode=true', () => {
    expect(ubsThemeDark.isDarkMode).toBe(true);
  });

  // ── Spacing scale ────────────────────────────────────────────────
  it('spacing scale has correct values', () => {
    expect([...spacingScale]).toEqual([0, 4, 8, 12, 16, 24, 32, 48, 64, 96]);
  });

  it('named spacing tokens map to correct pixel values', () => {
    expect(spacing.none).toBe(0);
    expect(spacing['4xs']).toBe(4);
    expect(spacing['3xs']).toBe(8);
    expect(spacing['2xs']).toBe(12);
    expect(spacing.xs).toBe(16);
    expect(spacing.sm).toBe(24);
    expect(spacing.md).toBe(32);
    expect(spacing.lg).toBe(48);
    expect(spacing.xl).toBe(64);
    expect(spacing['2xl']).toBe(96);
  });

  // ── Breakpoints ──────────────────────────────────────────────────
  it('all breakpoints are present', () => {
    expect(breakpoints.mobile).toBe(320);
    expect(breakpoints.tablet).toBe(768);
    expect(breakpoints.desktop).toBe(1024);
    expect(breakpoints.wide).toBe(1440);
  });

  it('breakpoints has exactly 4 entries', () => {
    expect(Object.keys(breakpoints)).toHaveLength(4);
  });

  // ── Theme structure ──────────────────────────────────────────────
  it('light theme has all expected top-level keys', () => {
    const keys = Object.keys(ubsThemeLight);
    expect(keys).toContain('colours');
    expect(keys).toContain('semantic');
    expect(keys).toContain('typography');
    expect(keys).toContain('spacing');
    expect(keys).toContain('spacingScale');
    expect(keys).toContain('breakpoints');
    expect(keys).toContain('mediaQueries');
    expect(keys).toContain('layout');
    expect(keys).toContain('accessibility');
    expect(keys).toContain('transitions');
    expect(keys).toContain('zIndex');
    expect(keys).toContain('isDarkMode');
  });

  // ── Semantic colours differ between light/dark ───────────────────
  it('light and dark themes have different background colours', () => {
    expect(ubsThemeLight.semantic.background.primary).not.toBe(
      ubsThemeDark.semantic.background.primary,
    );
  });

  it('light and dark themes have different text colours', () => {
    expect(ubsThemeLight.semantic.text.primary).not.toBe(
      ubsThemeDark.semantic.text.primary,
    );
  });

  // ── Accessibility tokens ─────────────────────────────────────────
  it('contrast thresholds are WCAG 2.2 AA compliant', () => {
    expect(ubsThemeLight.accessibility.contrast.normalText).toBe(4.5);
    expect(ubsThemeLight.accessibility.contrast.largeText).toBe(3);
    expect(ubsThemeLight.accessibility.contrast.graphics).toBe(3);
  });

  it('minimum touch target is 44px', () => {
    expect(ubsThemeLight.accessibility.minTouchTarget).toBe(44);
  });
});
