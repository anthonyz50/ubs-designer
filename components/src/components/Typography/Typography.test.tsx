import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Typography, type TypographyVariant } from './Typography';

describe('Typography', () => {
  // ── Default elements per variant ─────────────────────────────────
  const variantElementMap: [TypographyVariant, string][] = [
    ['keyline', 'H1'],
    ['infoline', 'P'],
    ['subheadline1', 'H2'],
    ['subheadline2', 'H3'],
    ['subheadline3', 'H4'],
    ['subheadline4', 'H5'],
    ['leadText1', 'P'],
    ['leadText2', 'P'],
    ['quotes', 'BLOCKQUOTE'],
    ['subtitles', 'H6'],
    ['copyText', 'P'],
    ['pageNumbers', 'SPAN'],
    ['senderInfo', 'SPAN'],
    ['smallCopyText', 'P'],
    ['environmentalInfo', 'SMALL'],
    ['captions', 'FIGCAPTION'],
    ['footnote', 'SMALL'],
  ];

  it.each(variantElementMap)(
    'variant "%s" renders as <%s> by default',
    (variant, expectedTag) => {
      render(
        <Typography variant={variant} data-testid="typo">
          Text
        </Typography>,
      );
      expect(screen.getByTestId('typo').tagName).toBe(expectedTag);
    },
  );

  // ── Polymorphic as prop ──────────────────────────────────────────
  it('renders as a custom element via the "as" prop', () => {
    render(
      <Typography variant="keyline" as="span" data-testid="typo">
        Heading
      </Typography>,
    );
    expect(screen.getByTestId('typo').tagName).toBe('SPAN');
  });

  // ── Colour prop ──────────────────────────────────────────────────
  it('applies colour as inline style', () => {
    render(
      <Typography colour="#404040" data-testid="typo">
        Coloured
      </Typography>,
    );
    expect(screen.getByTestId('typo')).toHaveStyle({ color: '#404040' });
  });

  // ── Weight prop ──────────────────────────────────────────────────
  it('applies numeric weight as inline style', () => {
    render(
      <Typography weight={700} data-testid="typo">
        Bold
      </Typography>,
    );
    expect(screen.getByTestId('typo')).toHaveStyle({ fontWeight: 700 });
  });

  it('resolves named weight "light" to 300', () => {
    render(
      <Typography weight="light" data-testid="typo">
        Light
      </Typography>,
    );
    expect(screen.getByTestId('typo')).toHaveStyle({ fontWeight: 300 });
  });

  it('resolves named weight "bold" to 700', () => {
    render(
      <Typography weight="bold" data-testid="typo">
        Bold
      </Typography>,
    );
    expect(screen.getByTestId('typo')).toHaveStyle({ fontWeight: 700 });
  });

  // ── Red + numbers warning ────────────────────────────────────────
  it('warns in console when red colour is used with numbers', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <Typography colour="#E60000" data-testid="typo">
        Revenue: 123
      </Typography>,
    );
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Red must NOT be used for numbers'),
    );
    warnSpy.mockRestore();
  });

  it('does not warn when red colour is used without numbers', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <Typography colour="#E60000" data-testid="typo">
        Hello World
      </Typography>,
    );
    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  // ── Default variant ──────────────────────────────────────────────
  it('defaults to copyText variant', () => {
    render(<Typography data-testid="typo">Default</Typography>);
    const el = screen.getByTestId('typo');
    expect(el.tagName).toBe('P');
    expect(el.className).toContain('copyText');
  });
});
