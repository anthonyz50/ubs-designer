/**
 * UBS Style Guide Configuration
 *
 * Comprehensive TypeScript reference for UBS brand tokens, typography,
 * accessibility, tone of voice, layout rules and design guidelines.
 *
 * This file is the single source of truth for AI code generation context.
 * All values are derived from the UBS Design System at
 * /components/src/tokens/ and ubs.frontify.com.
 *
 * Source: ubs.frontify.com
 */

export const ubsStyleGuide = {
  brand: {
    name: 'UBS',
    description: 'Premium banking experience. Calm, confident, professional.',
    personality: [
      { trait: 'Positive', description: 'We are optimistic by nature' },
      { trait: 'Forward looking', description: 'We are contemporary with purposeful intelligence' },
      { trait: 'Empowering', description: 'We inspire connections in the hands of our clients' },
      { trait: 'Warm and human', description: "We are always listening to clients' unique needs to realise their ambitions" },
    ],
    principles: [
      'Clean enterprise interface',
      'Strong visual hierarchy',
      'Clear calls to action',
      'Accessible colour usage (WCAG 2.2 AA)',
      'Consistent spacing on a 4px grid',
      'Minimal visual noise',
      'Frutiger typeface with Arial fallback',
    ],
  },

  // ── Colours ──────────────────────────────────────────────────────

  colours: {
    corporate: {
      white: '#FFFFFF',
      red: '#E60000',
      black: '#000000',
    },
    grays: {
      i: '#CCCABC',
      ii: '#B8B3A2',
      iii: '#8E8D83',
      iv: '#7A7870',
      v: '#5A5D5C',
      vi: '#404040',
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
    pastels: {
      i: '#ECEBE4',
      ii: '#F5F0E1',
    },
    darkMode: {
      primaryRed: '#D83B31',
      secondaryRed: '#FE6F5D',
    },
    rag: {
      red: '#BD000C',
      amber: '#E4A911',
      green: '#6F7A1A',
    },
    trading: {
      green: '#498100',
      red: '#C81219',
    },
    metallicSilver: '#BEBEBE',
    chartColours: [
      '#AF8626', // 01 Bronze 50
      '#00759E', // 02 Lagoon 60
      '#879420', // 03 Kiwi 60
      '#4B2D58', // 04 Aubergine 90
      '#9F8865', // 05 Sand 50
      '#2E476B', // 06 Plum 90
      '#469A6C', // 07 Sage 50
      '#AD3E4A', // 08 Blush 60
      '#8489BD', // 09 Lavender 50
      '#0C7EC6', // 10 Lake 50
      '#654D16', // 11 Bronze 80
      '#804C95', // 12 Aubergine 60
      '#45999C', // 13 Mint 50
      '#4972AC', // 14 Plum 60
      '#CC707A', // 15 Blush 40
      '#295B40', // 16 Sage 80
      '#545A9C', // 17 Lavender 70
      '#785E4A', // 18 Chocolate 60
      '#07476F', // 19 Lake 90
      '#620004', // 20 Bordeaux 90
    ],
  },

  // ── Typography ───────────────────────────────────────────────────

  typography: {
    fontFamily: '"Frutiger", Arial, sans-serif',
    weights: {
      light: 'Frutiger 45 Light',
      lightItalic: 'Frutiger 45 Light Italic',
      lightBold: 'Frutiger 45 Light Bold',
      roman: 'Frutiger 55 Roman',
      lightCondensed: 'Frutiger 47 Light CN',
    },
    hierarchy: {
      keyline: {
        fontWeight: 'light',
        colour: 'black',
        lineSpacingMultiplier: 1.05,
        description: 'Free selectable size. Minimum 2x the infoline size.',
      },
      infoline: {
        fontWeight: 'light',
        colour: 'black',
        lineSpacingMultiplier: 1.2,
        description: 'Free selectable size. Max half the keyline size.',
      },
      subheadline1: {
        fontSize: '20pt',
        lineSpacing: '24pt',
        fontWeight: 'light',
        colour: 'black',
        description: 'Primary subheadline.',
      },
      subheadline2: {
        fontSize: '13.5pt',
        lineSpacing: '16pt',
        fontWeight: 'light',
        colour: 'black',
        description: 'Secondary subheadline.',
      },
      subheadline3: {
        fontSize: '9.5pt',
        lineSpacing: '12pt',
        fontWeight: 'bold',
        colour: 'black',
        description: 'Tertiary subheadline. Bold weight.',
      },
      subheadline4: {
        fontSize: '9.5pt',
        lineSpacing: '12pt',
        fontWeight: 'bold',
        colour: 'red',
        description: 'Quaternary subheadline. Bold weight, UBS Red.',
      },
      leadText1: {
        fontSize: '20pt',
        lineSpacing: '24pt',
        fontWeight: 'light',
        colour: 'black',
        description: 'Primary lead text. Same spec as subheadline1.',
      },
      leadText2: {
        fontSize: '13.5pt',
        lineSpacing: '16pt',
        fontWeight: 'light',
        colour: 'black',
        description: 'Secondary lead text. Same spec as subheadline2.',
      },
      quotes: {
        fontSize: '13.5pt',
        lineSpacing: '16pt',
        fontWeight: 'light',
        colour: 'black',
        description: 'Pull quotes and quotations.',
      },
      subtitles: {
        fontSize: '9.5pt',
        lineSpacing: '12pt',
        fontWeight: 'bold',
        colour: 'black or red',
        description: 'Subtitles. Can be black or UBS Red.',
      },
      copyText: {
        fontSize: '9.5pt',
        lineSpacing: '12pt',
        fontWeight: 'light',
        colour: 'black',
        description: 'Standard body copy.',
      },
      pageNumbers: {
        fontSize: '9.5pt',
        lineSpacing: '12pt',
        fontWeight: 'light',
        colour: 'black',
        description: 'Page numbering.',
      },
      senderInfo: {
        fontSize: '9.5pt',
        lineSpacing: '12pt',
        fontWeight: 'light',
        colour: 'black',
        description: 'Sender information blocks.',
      },
      smallCopyText: {
        fontSize: '8pt',
        lineSpacing: '10pt',
        fontWeight: 'light',
        colour: 'black',
        description: 'Smaller body copy for secondary content.',
      },
      environmentalInfo: {
        fontSize: '8pt',
        lineSpacing: '10pt',
        fontWeight: 'light',
        colour: 'black',
        description: 'Environmental and regulatory information.',
      },
      captions: {
        fontSize: '7.5pt',
        lineSpacing: '9.5pt',
        fontWeight: 'light',
        colour: 'black or red',
        description: 'Image and figure captions. Can be black or UBS Red.',
      },
      footnote: {
        fontSize: '6.5pt',
        lineSpacing: '7.5pt',
        fontWeight: 'light',
        colour: 'black',
        description: 'Footnotes and legal disclaimers.',
      },
    },
    webOptimised: {
      minimumFontSizePx: 14,
      bodyFontSizePx: 16,
      bodyLineHeightPx: 22,
      largeTextThresholdPx: 25,
    },
    rules: [
      'Never use UBS Red for numbers',
      'Never apply opacity or transparency to text',
      'Small caps are not permitted',
      'Never justify text. Always left-aligned (or right-aligned for RTL)',
      'Right-aligned text is not permitted (except RTL scripts)',
      'No drop shadows on text',
      'No centred text blocks',
      'No staircase or stepped text layouts',
      'Never mix different font sizes within one sentence',
      'No text wrapping around objects',
      'Red highlighting in messages is no longer permitted for accessibility',
    ],
  },

  // ── Accessibility ────────────────────────────────────────────────

  accessibility: {
    standard: 'WCAG 2.2 Level AA',
    contrastRatios: {
      text: 4.5,
      largeText: 3.0,
      iconsAndGraphics: 3.0,
    },
    rules: [
      'Avoid placing text within images wherever possible',
      'All non-decorative images must have alternative text',
      'Colour alone must never convey meaning',
      'Documents must have a logical heading structure',
      'Documents must have a meaningful title',
      'Documents must declare their language',
    ],
  },

  // ── Tone of Voice ───────────────────────────────────────────────

  toneOfVoice: {
    pillars: {
      clear: {
        principles: [
          'Write like you speak',
          "Use contractions (we've, it's)",
          'Short sentences',
          'Put the main point first',
          'No business speak or jargon',
          'Use everyday words and phrases',
          'Break content up with subheadings',
          'Use bullet points for instructions (each starting with a verb)',
        ],
      },
      convincing: {
        principles: [
          'Only say what you need to',
          'Lead on the benefit to users, not the process',
          'Remove empty adjectives (global, unique, robust, state-of-the-art)',
          'Remove jargon (leverage, solutions)',
          'Talk about what matters to readers first',
          'Be concrete and less abstract',
          "See things from the reader's point of view",
        ],
      },
      withCharm: {
        principles: [
          'Draw readers in with an observation or intriguing headline',
          "Be personal: use 'we' and 'us', not 'UBS'",
          'Create rhythm with repetition and mixed sentence lengths',
          'Ask questions to intrigue readers',
          'Use natural-sounding phrases that paint pictures',
          'Be memorable through personality',
        ],
      },
    },
    messagingPrinciple: '1-2 punch: big catchy keyline + smaller informative infoline',
  },

  // ── Layout ───────────────────────────────────────────────────────

  layout: {
    impulse: {
      colour: '#E60000',
      rules: [
        'Impulse must not extend beyond the baseline of the second message',
        'Never centre text alongside an Impulse with a keyline',
        'Multiple Impulses cannot be used together',
        'On gray, bordeaux, or bronze backgrounds: Impulse allowed on Pastel I and Pastel II only',
        'No red highlighting on front pages',
      ],
    },
    logo: {
      standardPosition: 'bottom-right',
      alternativePosition: 'top-left',
      marginAlignment: 'Align to page margin',
      clearSpace: 'Height of Key Symbol (k) from key to upper or lower edge of format',
    },
    keySymbol: {
      clearSpace: '1/3 k minimum',
      rules: [
        'Never alter the key symbol design',
        'Never deconstruct the key symbol',
        'Never separate the three keys',
        'No drop shadows',
        'No outlines or strokes',
        'No rotation of any kind',
        'Only use approved colours',
      ],
    },
    movingFrame: {
      transparentOpacity: '80%',
      opaqueOpacity: '100%',
      maxSize: {
        portraitAndSquare: 'max half the width',
        landscape: 'max half the height',
      },
      spacing: 'half the height of Key Symbol (k)',
      position: 'right-aligned at variable height',
      rules: [
        'Never place the Moving Frame in the centre',
        'No left-aligned logo when using Moving Frame',
        'Frame must not bleed to the edge of the format',
        'No red highlighting within the Moving Frame',
        'Opacity must not be below 80%',
        'No transparency on monochrome backgrounds',
        'No transparency on pattern backgrounds',
      ],
    },
    grid: {
      rules: [
        'Margins should not appear on more than two sides',
        'No frameless white box on layouts',
        'Images must not originate from another corner',
        'No diagonal image cropping',
      ],
    },
  },

  // ── Spacing ──────────────────────────────────────────────────────

  spacing: {
    unit: 4,
    scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96],
  },

  // ── Breakpoints ──────────────────────────────────────────────────

  breakpoints: {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
  },

  // ── Utility Tokens ───────────────────────────────────────────────

  borderRadius: { sm: '4px', md: '8px', lg: '12px' },

  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.08)',
    md: '0 4px 12px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
} as const;

export type UbsStyleGuide = typeof ubsStyleGuide;
