/**
 * UBS Style Guide Configuration
 *
 * TypeScript reference for UBS brand tokens.
 * Used by code generators and the AI service layer to produce
 * on-brand output.
 */

export const ubsStyleGuide = {
  brand: {
    name: 'UBS',
    description: 'Premium banking experience. Calm, confident, professional.',
    principles: [
      'Clean enterprise interface',
      'Strong visual hierarchy',
      'Clear calls to action',
      'Accessible colour usage',
      'Consistent spacing on a 4px grid',
      'Minimal visual noise',
    ],
  },

  colours: {
    corporate: {
      white: '#FFFFFF',
      red: '#E60000',
      black: '#000000',
    },
    grays: {
      i: '#CCCABC', ii: '#B8B3A2', iii: '#8E8D83',
      iv: '#7A7870', v: '#5A5D5C', vi: '#404040',
    },
    bordeaux: { i: '#BD000C', ii: '#8A000A', iii: '#620004' },
    bronze: { i: '#B98E2C', ii: '#946F29', iii: '#6C5312' },
    pastels: { i: '#ECEBE4', ii: '#F5F0E1' },
    status: { red: '#BD000C', amber: '#E4A911', green: '#6F7A1A' },
  },

  typography: {
    fontFamily: '"Frutiger", Arial, sans-serif',
    scale: {
      xs: '0.75rem',
      sm: '0.8125rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.375rem',
      xl: '1.75rem',
      '2xl': '2.25rem',
    },
    weights: { light: 300, regular: 400, medium: 500, bold: 700 },
  },

  spacing: {
    unit: 4,
    scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96],
  },

  breakpoints: { mobile: 320, tablet: 768, desktop: 1024, wide: 1440 },

  borderRadius: { sm: '4px', md: '8px', lg: '12px' },

  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.08)',
    md: '0 4px 12px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },

  rules: [
    'UBS Red is for emphasis and calls to action only. Never use it for numbers.',
    'Red highlighting in messages is no longer permitted for accessibility.',
    'Status colours follow the RAG system: red, amber, green.',
    'All text must meet WCAG 2.1 AA contrast requirements.',
    'Use the 4px spacing grid consistently.',
    'Frutiger is the primary typeface. Arial is the mandatory fallback.',
  ],
} as const;

export type UbsStyleGuide = typeof ubsStyleGuide;
