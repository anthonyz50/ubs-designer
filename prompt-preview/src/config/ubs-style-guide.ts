/**
 * UBS Design System — Comprehensive Style Guide v3.0.0
 *
 * This structured object is sent to AI models as context so they
 * produce output that aligns with UBS brand and accessibility standards.
 */

export const ubsStyleGuide = {
  version: '3.0.0',
  description: 'Complete UBS design system knowledge for AI-generated UX.',

  // ------------------------------------------------------------------
  // Colours
  // ------------------------------------------------------------------
  colours: {
    corporate: {
      white: '#FFFFFF',
      red: '#E60000',
      redWeb: '#DA0000',
      redDark: '#BA0000',
      black: '#000000',
    },
    neutral: {
      '00': '#FFFFFF',
      '05': '#F9F9F7',
      '10': '#F4F3EE',
      '20': '#E0DFD7',
      '30': '#CCCABC',
      '40': '#B8B3A2',
      '50': '#8E8D83',
      '60': '#7A7870',
      '70': '#5A5D5C',
      '80': '#404040',
      '90': '#1C1C1C',
    },
    bordeaux: {
      i: '#BD000C',
      ii: '#8A000A',
      iii: '#620004',
    },
    bronze: {
      i: '#B98E2C',
      ii: '#946F29',
      iii: '#6C5312',
    },
    pastel: {
      i: '#ECEBE4',
      ii: '#F5F0E1',
    },
    status: {
      error: '#BD000C',
      warning: '#E4A911',
      success: '#6F7A1A',
      info: '#3A5A88',
    },
    trading: {
      eu: { positive: '#095F95', negative: '#BD000C' },
      us: { positive: '#606917', negative: '#BD000C' },
    },
    highlighting: {
      lagoon: '#009BD2',
      charlotte: '#E6F5FB',
      daisy: '#FFF469',
    },
    darkMode: {
      primaryRed: '#D83B31',
      secondaryRed: '#FE6F5D',
    },
    chart: [
      '#AF8626', '#00759E', '#879420', '#4B2D58', '#9F8865',
      '#2E476B', '#469A6C', '#AD3E4A', '#8489BD', '#0C7EC6',
      '#654D16', '#804C95', '#45999C', '#4972AC', '#CC707A',
      '#295B40', '#545A9C', '#785E4A', '#07476F', '#620004',
    ],
    semantic: {
      bgPrimary: 'var(--ubs-white)',
      bgSecondary: 'var(--ubs-neutral-05)',
      bgTertiary: 'var(--ubs-neutral-10)',
      bgCanvas: 'var(--ubs-pastel-i)',
      textPrimary: 'var(--ubs-neutral-90)',
      textSecondary: 'var(--ubs-neutral-70)',
      textTertiary: 'var(--ubs-neutral-50)',
      border: 'var(--ubs-neutral-20)',
      borderStrong: 'var(--ubs-neutral-40)',
      accent: 'var(--ubs-red)',
      focus: 'var(--ubs-lagoon)',
    },
    rules: [
      'Never use UBS Red for numbers or numerical data.',
      'Red highlighting in messages is no longer permitted (accessibility).',
      'Do not use opacity to lighten colours. Use the correct token.',
      'Chart colours must be used in the defined sequence only.',
      'Dark mode uses D83B31 (primary) and FE6F5D (secondary), never E60000.',
    ],
  },

  // ------------------------------------------------------------------
  // Typography
  // ------------------------------------------------------------------
  typography: {
    fontFamily: "'Frutiger', Arial, Helvetica, sans-serif",
    fallback: 'Arial',
    hierarchy: {
      header1: { size: '2.25rem', lineHeight: 1.2, weight: 300, tracking: '-0.02em' },
      header2: { size: '1.75rem', lineHeight: 1.25, weight: 300, tracking: '-0.01em' },
      header3: { size: '1.375rem', lineHeight: 1.3, weight: 400, tracking: '0' },
      header4: { size: '1.125rem', lineHeight: 1.35, weight: 500, tracking: '0' },
      header5: { size: '1rem', lineHeight: 1.4, weight: 700, tracking: '0' },
      header6: { size: '0.875rem', lineHeight: 1.4, weight: 700, tracking: '0.02em' },
      body1: { size: '1rem', lineHeight: 1.5, weight: 300 },
      body2: { size: '0.875rem', lineHeight: 1.5, weight: 300 },
      body3: { size: '0.8125rem', lineHeight: 1.45, weight: 400 },
      body4: { size: '0.75rem', lineHeight: 1.4, weight: 400 },
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    rules: [
      'Default weight is Frutiger 45 Light (300).',
      'Use Roman (400) only at extra-small sizes for legibility.',
      'No small caps, no justified text, no right-aligned body text.',
      'No shadows on text.',
      'Do not centre-align long text blocks.',
      'Never mix different sizes in the same sentence.',
      'Maximum 3 hierarchy levels per page section.',
    ],
  },

  // ------------------------------------------------------------------
  // Spacing
  // ------------------------------------------------------------------
  spacing: {
    unit: '4px',
    scale: {
      0: '0',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '40px',
      8: '48px',
      9: '64px',
    },
    rules: [
      'All spacing derives from a 4px grid.',
      'Use space-4 (16px) as the default component gap.',
      'Sections use space-7 (40px) vertical padding.',
      'Generous white space is a core UBS design principle.',
    ],
  },

  // ------------------------------------------------------------------
  // Layout
  // ------------------------------------------------------------------
  layout: {
    maxWidth: '1200px',
    grid: '12-column CSS Grid with 24px gap',
    breakpoints: {
      mobile: '< 768px',
      desktop: '>= 769px',
    },
    rules: [
      'White space dominates the page, never crowd elements.',
      'Maximum content width 1200px, centred.',
      'Stack columns on mobile (single column default).',
      'Cards use auto-fit grid with 280px minimum.',
    ],
  },

  // ------------------------------------------------------------------
  // Components
  // ------------------------------------------------------------------
  components: {
    buttons: {
      variants: ['primary (red)', 'secondary (outlined)', 'ghost (transparent)'],
      sizes: ['sm (32px)', 'default (44px)', 'lg (52px)'],
      rules: [
        'Minimum click area: 44px (WCAG 2.5.5).',
        'Primary button for the single most important action per section.',
        'Maximum 1 primary + 1 secondary button per card/section.',
        'Ghost buttons for low-emphasis actions only.',
      ],
    },
    cards: {
      sections: ['header', 'body', 'footer', 'metric'],
      rules: [
        'Use ubs-elevation-1 shadow by default.',
        'Border radius: 8px (radius-md).',
        'Metric cards centre the value and use header-1 size.',
      ],
    },
    forms: {
      elements: ['form-group', 'label', 'input', 'textarea', 'select', 'checkbox'],
      rules: [
        'Always pair inputs with visible labels.',
        'Show validation errors inline below the field.',
        'Use focus ring colour: lagoon (#009BD2).',
        'Disabled fields use neutral-10 background.',
      ],
    },
    tables: {
      rules: [
        'Header row uses neutral-05 background.',
        'Rows separated by 1px border.',
        'Hover row highlight.',
        'No zebra striping by default.',
      ],
    },
    alerts: {
      variants: ['info', 'success', 'warning', 'error'],
      rules: [
        'Left border accent (3px solid).',
        'Include an icon at the start.',
        'Keep alert text concise.',
      ],
    },
    badges: {
      variants: ['operational', 'degraded', 'outage', 'maintenance', 'info', 'success', 'warning', 'error'],
      rules: ['Pill-shaped (border-radius: 9999px).', 'Subtle background tints, not solid colours.'],
    },
    stepper: {
      rules: [
        'Active step: red ring. Completed: green filled.',
        'Steps connected by a 2px line.',
        'Labels below or beside dots.',
      ],
    },
    modals: {
      rules: [
        'Max width: 560px.',
        'Overlay: rgba(0,0,0,0.5).',
        'Header, body, footer sections.',
        'Close button top-right.',
      ],
    },
    tabs: {
      rules: [
        'Active tab: red text + red bottom border.',
        'Inactive tabs: secondary text colour.',
        'No pill-style tabs, always underline.',
      ],
    },
  },

  // ------------------------------------------------------------------
  // Accessibility
  // ------------------------------------------------------------------
  accessibility: {
    standard: 'WCAG 2.1 AA',
    requirements: [
      'Minimum contrast ratio 4.5:1 for normal text, 3:1 for large text.',
      'All interactive elements must have minimum 44×44px touch target.',
      'Focus indicators must be visible: 2px solid lagoon (#009BD2), 2px offset.',
      'Never convey meaning through colour alone. Use icons, text, or patterns.',
      'Provide alt text for all images and aria-labels for icon-only buttons.',
      'Support keyboard navigation throughout.',
      'Respect prefers-reduced-motion.',
      'Form fields must have associated labels.',
      'Error states must be announced to screen readers.',
      'Do not use red for highlighting text in messages (accessibility ban).',
    ],
  },

  // ------------------------------------------------------------------
  // Tone of voice
  // ------------------------------------------------------------------
  toneOfVoice: {
    pillars: [
      {
        name: 'Clear',
        description: 'Use plain language. Avoid jargon. Short sentences. Active voice.',
      },
      {
        name: 'Confident',
        description: 'Assertive but never arrogant. State facts directly.',
      },
      {
        name: 'Human',
        description: 'Warm, approachable, professional. Address the user directly.',
      },
      {
        name: 'Respectful',
        description: 'Considerate of the user\'s time and intelligence.',
      },
    ],
    rules: [
      'Use UK English (colour, organise, etc.).',
      'Use sentence case for headings.',
      'Avoid exclamation marks in UI copy.',
      'Write actionable button labels (e.g. "Save changes" not "Submit").',
      'Error messages should explain what went wrong and how to fix it.',
      'Loading states should reassure: "Generating your design..."',
    ],
  },

  // ------------------------------------------------------------------
  // Interaction principles
  // ------------------------------------------------------------------
  interactions: {
    transitions: {
      fast: '150ms ease',
      base: '250ms ease',
      slow: '400ms ease',
    },
    principles: [
      'Every action should have visible feedback.',
      'Use loading spinners for operations > 300ms.',
      'Hover states on all clickable elements.',
      'Confirm destructive actions with a modal.',
      'Provide undo where possible, not confirmation dialogs.',
      'Empty states should guide the user toward the first action.',
      'Error states should include recovery actions.',
    ],
  },
} as const;
