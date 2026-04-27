/**
 * UBS Design System — Tone of Voice Tokens
 *
 * Writing pillars, brand personality traits, and messaging styles.
 * Source: ubs.frontify.com
 *
 * @remarks
 * UBS writing follows three pillars: clear, convincing, and with charm.
 * Red highlighting in infoline/keyline is no longer permitted for accessibility.
 */

// ─── Pillars ─────────────────────────────────────────────────────────

/** A tone of voice pillar with its writing principles. */
export interface ToneOfVoicePillar {
  /** Ordered list of writing principles for this pillar. */
  readonly principles: readonly string[];
}

/**
 * The three UBS tone of voice pillars.
 *
 * @remarks
 * Every piece of UBS writing should embody these three qualities.
 * Use as a checklist when reviewing copy.
 */
export const TONE_PILLARS: Record<string, ToneOfVoicePillar> = {
  /**
   * Clear writing: simple, direct, scannable.
   * Write like you speak. Short sentences. Main point first.
   */
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
  /**
   * Convincing writing: focused, benefit-led, concrete.
   * Only say what you need to. Lead on the benefit to users.
   */
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
  /**
   * Writing with charm: engaging, personal, memorable.
   * Draw readers in. Be personal. Create rhythm.
   */
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
} as const;

/** All tone of voice pillar names. */
export type TonePillarName = keyof typeof TONE_PILLARS;

// ─── Brand Personality ───────────────────────────────────────────────

/** A brand personality trait with its description. */
export interface BrandPersonalityTrait {
  /** The trait name. */
  readonly trait: string;
  /** How this trait manifests in UBS communications. */
  readonly description: string;
}

/**
 * UBS brand personality traits.
 *
 * @remarks
 * These four traits define how UBS should feel across all communications.
 * Every touchpoint should reflect these qualities.
 */
export const BRAND_PERSONALITY: readonly BrandPersonalityTrait[] = [
  {
    trait: 'Positive',
    description: 'We are optimistic by nature',
  },
  {
    trait: 'Forward looking',
    description: 'We are contemporary with purposeful intelligence',
  },
  {
    trait: 'Empowering',
    description: 'We inspire connections in the hands of our clients',
  },
  {
    trait: 'Warm and human',
    description: "We are always listening to clients' unique needs to realise their ambitions",
  },
] as const;

// ─── Messaging Styles ────────────────────────────────────────────────

/** A messaging style level. */
export interface MessagingStyle {
  /** Numeric level (1 = simplest, 3 = most communicative). */
  readonly level: number;
  /** Style name. */
  readonly name: string;
  /** Description of how this style works. */
  readonly description: string;
}

/**
 * UBS messaging style levels.
 *
 * @remarks
 * The "1-2 punch" principle: a big catchy keyline plus a smaller informative infoline.
 * Level 1 is facts only. Level 2 hooks then explains. Level 3 tells a story.
 */
export const MESSAGING_STYLES: readonly MessagingStyle[] = [
  {
    level: 1,
    name: 'Just the Facts',
    description: 'Infoline black only',
  },
  {
    level: 2,
    name: 'Facts Plus / Catchy',
    description: 'Keyline hooks, infoline explains',
  },
  {
    level: 3,
    name: 'Communicative',
    description: 'Tells a story',
  },
] as const;

/**
 * The core messaging principle.
 *
 * @remarks
 * Every UBS message should follow the 1-2 punch:
 * a big, catchy keyline paired with a smaller, informative infoline.
 */
export const MESSAGING_PRINCIPLE = '1-2 punch: big catchy keyline + smaller informative infoline' as const;

// ─── Messaging Rules ─────────────────────────────────────────────────

/**
 * Messaging rules. All restrictions are active (true).
 *
 * @remarks
 * Red highlighting in infoline/keyline is no longer permitted for accessibility.
 */
export const MESSAGING_RULES = {
  /** Red highlighting in infoline/keyline no longer permitted for accessibility. */
  noRedHighlightInMessages: true,
} as const;
