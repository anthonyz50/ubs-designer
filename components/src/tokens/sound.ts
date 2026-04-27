/**
 * UBS Design System — Sound Tokens
 *
 * Sound logo specifications, adaptations, loudness standards, and brand music.
 * Source: ubs.frontify.com
 *
 * @remarks
 * Sound logos are finalised assets and must never be modified.
 * The principal sound logo is always the first choice.
 * Available keys: E major, C major, D major, G major, A major.
 */

// ─── Principal Sound Logo ────────────────────────────────────────────

/**
 * Principal UBS sound logo specification.
 *
 * @remarks
 * Always the first choice. E major key with C# minor relative minor.
 * Instruments: synth, mallets, harp, plucked sounds.
 * Styles: minimal, electronic, downtempo.
 */
export const SOUND_LOGO_PRINCIPAL = {
  /** Musical key. */
  key: 'E major',
  /** Relative minor key. */
  relativeMinor: 'C# minor',
  /** Permitted instruments. */
  instruments: ['synth', 'mallets', 'harp', 'plucked sounds'] as const,
  /** Musical styles. */
  styles: ['minimal', 'electronic', 'downtempo'] as const,
  /** Energy characteristics. */
  energy: ['lively', 'delicate', 'dynamic'] as const,
  /** Always the first choice for UBS sound. */
  description: 'Always first choice.',
} as const;

// ─── Sound Logo Adaptations ──────────────────────────────────────────

/** A sound logo adaptation specification. */
export interface SoundAdaptation {
  /** Permitted instruments for this adaptation. */
  readonly instruments: readonly string[];
  /** Musical styles for this adaptation. */
  readonly styles: readonly string[];
  /** Energy characteristics. */
  readonly energy: readonly string[];
}

/**
 * Sound logo adaptations for different contexts.
 *
 * @remarks
 * Each adaptation captures a different mood while maintaining the UBS sound identity.
 * Use the adaptation that best matches the content's emotional tone.
 */
export const SOUND_ADAPTATIONS: Record<string, SoundAdaptation> = {
  /** Funky, upbeat adaptation for energetic content. */
  funkyAndUpbeat: {
    instruments: ['drums', 'electric bass', 'rhythm guitars', 'brass'],
    styles: ['funk', 'breakbeat', 'soul', 'disco'],
    energy: ['syncopated', 'groovy', 'upbeat'],
  },
  /** Subtle, spacious adaptation for calm contexts. */
  subtleAndSpacious: {
    instruments: ['synth pads', 'strings', 'piano', 'textures'],
    styles: ['minimal', 'textural', 'ambient'],
    energy: ['calm', 'flowing'],
  },
  /** Inspiring, serene adaptation for reflective content. */
  inspiringAndSerene: {
    instruments: ['synth pads', 'piano', 'textures'],
    styles: ['chillout', 'ambient', 'cinematic'],
    energy: ['laidback', 'soft', 'flowing'],
  },
  /** Vibrant, enthusiastic adaptation for celebratory content. */
  vibrantAndEnthusiastic: {
    instruments: ['acoustic drums', 'percussions', 'basslines'],
    styles: ['percussive', 'celebratory', 'dance'],
    energy: ['active', 'energetic', 'lively'],
  },
  /** Bold, uplifting adaptation for high-energy content. */
  boldAndUplifting: {
    instruments: ['drums', 'sub-bass', 'synth'],
    styles: ['electronic', 'trap', 'hip-hop', 'dance'],
    energy: ['bouncy', 'bold', 'active'],
  },
  /** Elegant, refined adaptation for premium/formal content. */
  elegantAndRefined: {
    instruments: ['strings', 'piano', 'harp', 'woodwinds'],
    styles: ['intimate', 'cinematic', 'classical', 'luxurious'],
    energy: ['stately', 'delicate'],
  },
} as const;

/** All available sound adaptation names. */
export type SoundAdaptationName = keyof typeof SOUND_ADAPTATIONS;

// ─── Available Keys ──────────────────────────────────────────────────

/**
 * Available musical keys for UBS sound logos.
 */
export const AVAILABLE_KEYS = [
  'E major',
  'C major',
  'D major',
  'G major',
  'A major',
] as const;

/**
 * Available relative minor keys for UBS sound logos.
 */
export const AVAILABLE_RELATIVE_MINORS = [
  'C# minor',
  'A minor',
  'B minor',
  'E minor',
  'F# minor',
] as const;

// ─── Application Rules ───────────────────────────────────────────────

/**
 * Sound logo application integrity.
 *
 * @remarks
 * Sound logos are finalised assets and must never be modified or re-encoded.
 */
export const SOUND_INTEGRITY = 'Never modify sound logos. They are finalised assets.' as const;

/**
 * Sound logo positioning relative to other audio.
 *
 * @remarks
 * Allow 0–350ms gap after previous audio ends. Let audio fade naturally.
 */
export const SOUND_POSITION = {
  /** Gap between end of preceding audio and start of sound logo. */
  gapAfterAudio: '0-350ms after music/background/voice-over ends',
  /** Let previous audio fade naturally, no abrupt cuts. */
  fadeOut: 'Let previous audio fade naturally, no abrupt cuts',
} as const;

// ─── Loudness Standards ──────────────────────────────────────────────

/**
 * Loudness standards for UBS audio content.
 *
 * @remarks
 * Sound logo is mastered to -12 LUFS at maximum peak with full dynamic range.
 * Broadcast follows EBU R128 at -23 LKFS. Digital/streaming at -16 LKFS.
 */
export const LOUDNESS_STANDARDS = {
  /** Sound logo mastered level. Maximum peak, full dynamic range. */
  soundLogo: {
    value: '-12 LUFS',
    description: 'Mastered to maximum peak and full dynamic range.',
  },
  /** EBU R128 broadcast standard. */
  broadcast: {
    value: '-23 LKFS',
    description: 'EBU R128 broadcast standard.',
  },
  /** Digital/streaming platforms. */
  digital: {
    value: '-16 LKFS',
    description: 'Digital/streaming platforms.',
  },
} as const;

// ─── Sound Application Rules ─────────────────────────────────────────

/**
 * Sound application rules. All restrictions are active (true).
 */
export const SOUND_RULES = {
  /** Never modify sound logo files. */
  noModification: true,
  /** Never re-encode or convert sound logo formats. */
  noFormatConversion: true,
  /** Never increase the loudness of sound logos. */
  noLoudnessIncrease: true,
  /** No abrupt transitions into or out of sound logos. */
  noAbruptTransitions: true,
  /** Only use official sound logo files. */
  useOnlyOfficialFiles: true,
} as const;

/** Type representing a sound rule key. */
export type SoundRule = keyof typeof SOUND_RULES;

// ─── Branded Music ───────────────────────────────────────────────────

/**
 * UBS branded music specifications.
 *
 * @remarks
 * Longer-form UBS audio for podcast intros and branded assets.
 * Global usage rights, limitless in time, all media.
 */
export const BRANDED_MUSIC = {
  /** Available durations. */
  lengths: ['17s', '60s', '78s'] as const,
  /** Primary usage context. */
  usage: 'Podcast intros, branded assets requiring longer UBS sound',
  /** Licensing terms. */
  license: 'Global usage rights, limitless in time, all media',
} as const;
