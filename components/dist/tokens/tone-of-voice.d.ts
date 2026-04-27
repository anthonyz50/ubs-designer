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
export declare const TONE_PILLARS: Record<string, ToneOfVoicePillar>;
/** All tone of voice pillar names. */
export type TonePillarName = keyof typeof TONE_PILLARS;
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
export declare const BRAND_PERSONALITY: readonly BrandPersonalityTrait[];
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
export declare const MESSAGING_STYLES: readonly MessagingStyle[];
/**
 * The core messaging principle.
 *
 * @remarks
 * Every UBS message should follow the 1-2 punch:
 * a big, catchy keyline paired with a smaller, informative infoline.
 */
export declare const MESSAGING_PRINCIPLE: "1-2 punch: big catchy keyline + smaller informative infoline";
/**
 * Messaging rules. All restrictions are active (true).
 *
 * @remarks
 * Red highlighting in infoline/keyline is no longer permitted for accessibility.
 */
export declare const MESSAGING_RULES: {
    /** Red highlighting in infoline/keyline no longer permitted for accessibility. */
    readonly noRedHighlightInMessages: true;
};
