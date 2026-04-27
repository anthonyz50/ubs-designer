import { describe, it, expect } from 'vitest';
import { checkContrast } from './useContrastCheck';

describe('checkContrast (useContrastCheck logic)', () => {
  // ── Black on white = 21:1 ────────────────────────────────────────
  it('black on white gives maximum contrast (21:1)', () => {
    const result = checkContrast('#000000', '#FFFFFF');
    expect(result.ratio).toBe(21);
    expect(result.passesNormalText).toBe(true);
    expect(result.passesLargeText).toBe(true);
    expect(result.passesGraphics).toBe(true);
    expect(result.level).toBe('AAA');
  });

  // ── White on white = 1:1 ─────────────────────────────────────────
  it('white on white gives minimum contrast (1:1)', () => {
    const result = checkContrast('#FFFFFF', '#FFFFFF');
    expect(result.ratio).toBe(1);
    expect(result.passesNormalText).toBe(false);
    expect(result.passesLargeText).toBe(false);
    expect(result.passesGraphics).toBe(false);
    expect(result.level).toBe('fail');
  });

  // ── UBS Red on white ─────────────────────────────────────────────
  it('UBS Red on white has ratio close to 4.8', () => {
    const result = checkContrast('#E60000', '#FFFFFF');
    expect(result.ratio).toBeGreaterThan(4.5);
    expect(result.ratio).toBeLessThan(5.5);
  });

  it('UBS Red on white passes large text (3:1 threshold)', () => {
    const result = checkContrast('#E60000', '#FFFFFF');
    expect(result.passesLargeText).toBe(true);
    expect(result.passesGraphics).toBe(true);
  });

  it('UBS Red on white passes normal text (4.5:1 threshold)', () => {
    const result = checkContrast('#E60000', '#FFFFFF');
    expect(result.passesNormalText).toBe(true);
  });

  // ── Level classification ─────────────────────────────────────────
  it('returns AAA for ratio >= 7', () => {
    const result = checkContrast('#000000', '#FFFFFF');
    expect(result.level).toBe('AAA');
  });

  it('returns AA for ratio >= 4.5 and < 7', () => {
    // Gray VI (#404040) on white gives ~9.7 which is AAA actually
    // Use a lighter gray to hit AA range
    const result = checkContrast('#767676', '#FFFFFF');
    expect(result.ratio).toBeGreaterThanOrEqual(4.5);
    expect(result.level).toBe('AA');
  });

  it('returns AA-large for ratio >= 3 and < 4.5', () => {
    // Use a colour pair that falls in the AA-large range (3:1 to 4.5:1)
    const result = checkContrast('#8E8D83', '#FFFFFF'); // Gray III on white
    expect(result.ratio).toBeGreaterThanOrEqual(3);
    expect(result.ratio).toBeLessThan(4.5);
    expect(result.level).toBe('AA-large');
  });

  it('returns fail for ratio < 3', () => {
    const result = checkContrast('#CCCABC', '#FFFFFF'); // Gray I on white
    expect(result.ratio).toBeLessThan(3);
    expect(result.level).toBe('fail');
  });

  // ── ratioString format ───────────────────────────────────────────
  it('formats ratioString correctly', () => {
    const result = checkContrast('#000000', '#FFFFFF');
    expect(result.ratioString).toBe('21:1');
  });

  // ── Preserves input colours ──────────────────────────────────────
  it('returns the original foreground and background', () => {
    const result = checkContrast('#E60000', '#FFFFFF');
    expect(result.foreground).toBe('#E60000');
    expect(result.background).toBe('#FFFFFF');
  });

  // ── Order independence ───────────────────────────────────────────
  it('ratio is the same regardless of colour order', () => {
    const a = checkContrast('#E60000', '#FFFFFF');
    const b = checkContrast('#FFFFFF', '#E60000');
    expect(a.ratio).toBe(b.ratio);
  });
});
