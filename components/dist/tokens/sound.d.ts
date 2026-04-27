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
/**
 * Principal UBS sound logo specification.
 *
 * @remarks
 * Always the first choice. E major key with C# minor relative minor.
 * Instruments: synth, mallets, harp, plucked sounds.
 * Styles: minimal, electronic, downtempo.
 */
export declare const SOUND_LOGO_PRINCIPAL: {
    /** Musical key. */
    readonly key: "E major";
    /** Relative minor key. */
    readonly relativeMinor: "C# minor";
    /** Permitted instruments. */
    readonly instruments: readonly ["synth", "mallets", "harp", "plucked sounds"];
    /** Musical styles. */
    readonly styles: readonly ["minimal", "electronic", "downtempo"];
    /** Energy characteristics. */
    readonly energy: readonly ["lively", "delicate", "dynamic"];
    /** Always the first choice for UBS sound. */
    readonly description: "Always first choice.";
};
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
export declare const SOUND_ADAPTATIONS: Record<string, SoundAdaptation>;
/** All available sound adaptation names. */
export type SoundAdaptationName = keyof typeof SOUND_ADAPTATIONS;
/**
 * Available musical keys for UBS sound logos.
 */
export declare const AVAILABLE_KEYS: readonly ["E major", "C major", "D major", "G major", "A major"];
/**
 * Available relative minor keys for UBS sound logos.
 */
export declare const AVAILABLE_RELATIVE_MINORS: readonly ["C# minor", "A minor", "B minor", "E minor", "F# minor"];
/**
 * Sound logo application integrity.
 *
 * @remarks
 * Sound logos are finalised assets and must never be modified or re-encoded.
 */
export declare const SOUND_INTEGRITY: "Never modify sound logos. They are finalised assets.";
/**
 * Sound logo positioning relative to other audio.
 *
 * @remarks
 * Allow 0–350ms gap after previous audio ends. Let audio fade naturally.
 */
export declare const SOUND_POSITION: {
    /** Gap between end of preceding audio and start of sound logo. */
    readonly gapAfterAudio: "0-350ms after music/background/voice-over ends";
    /** Let previous audio fade naturally, no abrupt cuts. */
    readonly fadeOut: "Let previous audio fade naturally, no abrupt cuts";
};
/**
 * Loudness standards for UBS audio content.
 *
 * @remarks
 * Sound logo is mastered to -12 LUFS at maximum peak with full dynamic range.
 * Broadcast follows EBU R128 at -23 LKFS. Digital/streaming at -16 LKFS.
 */
export declare const LOUDNESS_STANDARDS: {
    /** Sound logo mastered level. Maximum peak, full dynamic range. */
    readonly soundLogo: {
        readonly value: "-12 LUFS";
        readonly description: "Mastered to maximum peak and full dynamic range.";
    };
    /** EBU R128 broadcast standard. */
    readonly broadcast: {
        readonly value: "-23 LKFS";
        readonly description: "EBU R128 broadcast standard.";
    };
    /** Digital/streaming platforms. */
    readonly digital: {
        readonly value: "-16 LKFS";
        readonly description: "Digital/streaming platforms.";
    };
};
/**
 * Sound application rules. All restrictions are active (true).
 */
export declare const SOUND_RULES: {
    /** Never modify sound logo files. */
    readonly noModification: true;
    /** Never re-encode or convert sound logo formats. */
    readonly noFormatConversion: true;
    /** Never increase the loudness of sound logos. */
    readonly noLoudnessIncrease: true;
    /** No abrupt transitions into or out of sound logos. */
    readonly noAbruptTransitions: true;
    /** Only use official sound logo files. */
    readonly useOnlyOfficialFiles: true;
};
/** Type representing a sound rule key. */
export type SoundRule = keyof typeof SOUND_RULES;
/**
 * UBS branded music specifications.
 *
 * @remarks
 * Longer-form UBS audio for podcast intros and branded assets.
 * Global usage rights, limitless in time, all media.
 */
export declare const BRANDED_MUSIC: {
    /** Available durations. */
    readonly lengths: readonly ["17s", "60s", "78s"];
    /** Primary usage context. */
    readonly usage: "Podcast intros, branded assets requiring longer UBS sound";
    /** Licensing terms. */
    readonly license: "Global usage rights, limitless in time, all media";
};
