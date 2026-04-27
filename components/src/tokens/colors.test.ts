import { describe, it, expect } from 'vitest';
import {
  UBS_WHITE,
  UBS_RED,
  UBS_BLACK,
  GRAY_I,
  GRAY_II,
  GRAY_III,
  GRAY_IV,
  GRAY_V,
  GRAY_VI,
  BORDEAUX_I,
  BORDEAUX_II,
  BORDEAUX_III,
  BRONZE_I,
  BRONZE_II,
  BRONZE_III,
  PASTEL_I,
  PASTEL_II,
  DARK_MODE_PRIMARY_RED,
  DARK_MODE_SECONDARY_RED,
  RAG_RED,
  RAG_AMBER,
  RAG_GREEN,
  TRADING_GREEN,
  TRADING_RED,
  METALLIC_SILVER,
  UBS_PALETTE,
  CHART_COLOURS,
} from './colors';

describe('Colour Tokens', () => {
  // ── Corporate colours match expected hex ─────────────────────────
  it('UBS White is #FFFFFF', () => expect(UBS_WHITE).toBe('#FFFFFF'));
  it('UBS Red is #E60000', () => expect(UBS_RED).toBe('#E60000'));
  it('UBS Black is #000000', () => expect(UBS_BLACK).toBe('#000000'));

  // ── Gray scale ───────────────────────────────────────────────────
  it('Gray I is #CCCABC', () => expect(GRAY_I).toBe('#CCCABC'));
  it('Gray II is #B8B3A2', () => expect(GRAY_II).toBe('#B8B3A2'));
  it('Gray III is #8E8D83', () => expect(GRAY_III).toBe('#8E8D83'));
  it('Gray IV is #7A7870', () => expect(GRAY_IV).toBe('#7A7870'));
  it('Gray V is #5A5D5C', () => expect(GRAY_V).toBe('#5A5D5C'));
  it('Gray VI is #404040', () => expect(GRAY_VI).toBe('#404040'));

  // ── Bordeaux ─────────────────────────────────────────────────────
  it('Bordeaux I is #BD000C', () => expect(BORDEAUX_I).toBe('#BD000C'));
  it('Bordeaux II is #8A000A', () => expect(BORDEAUX_II).toBe('#8A000A'));
  it('Bordeaux III is #620004', () => expect(BORDEAUX_III).toBe('#620004'));

  // ── Bronze ───────────────────────────────────────────────────────
  it('Bronze I is #B98E2C', () => expect(BRONZE_I).toBe('#B98E2C'));
  it('Bronze II is #946F29', () => expect(BRONZE_II).toBe('#946F29'));
  it('Bronze III is #6C5312', () => expect(BRONZE_III).toBe('#6C5312'));

  // ── Pastels ──────────────────────────────────────────────────────
  it('Pastel I is #ECEBE4', () => expect(PASTEL_I).toBe('#ECEBE4'));
  it('Pastel II is #F5F0E1', () => expect(PASTEL_II).toBe('#F5F0E1'));

  // ── Dark mode ────────────────────────────────────────────────────
  it('Dark Mode Primary Red is #D83B31', () =>
    expect(DARK_MODE_PRIMARY_RED).toBe('#D83B31'));
  it('Dark Mode Secondary Red is #FE6F5D', () =>
    expect(DARK_MODE_SECONDARY_RED).toBe('#FE6F5D'));

  // ── RAG colours ──────────────────────────────────────────────────
  it('RAG Red is #BD000C', () => expect(RAG_RED).toBe('#BD000C'));
  it('RAG Amber is #E4A911', () => expect(RAG_AMBER).toBe('#E4A911'));
  it('RAG Green is #6F7A1A', () => expect(RAG_GREEN).toBe('#6F7A1A'));

  // ── Trading colours ──────────────────────────────────────────────
  it('Trading Green is #498100', () => expect(TRADING_GREEN).toBe('#498100'));
  it('Trading Red is #C81219', () => expect(TRADING_RED).toBe('#C81219'));

  // ── Metallic ─────────────────────────────────────────────────────
  it('Metallic Silver is #BEBEBE', () =>
    expect(METALLIC_SILVER).toBe('#BEBEBE'));

  // ── Palette validation ───────────────────────────────────────────
  it('palette contains 25 colours', () => {
    expect(Object.keys(UBS_PALETTE)).toHaveLength(25);
  });

  it('chart colours has 20 entries', () => {
    expect(CHART_COLOURS).toHaveLength(20);
  });

  it('palette has no duplicate hex values', () => {
    const values = Object.values(UBS_PALETTE);
    const unique = new Set(values);
    // Note: Bordeaux I and RAG Red share #BD000C, which is expected
    // So we check that duplicates are only the known ones
    const duplicates = values.filter(
      (v, i) => values.indexOf(v) !== i,
    );
    // Only #BD000C should be duplicated (Bordeaux I === RAG Red)
    expect(duplicates.every((d) => d === '#BD000C')).toBe(true);
  });
});
