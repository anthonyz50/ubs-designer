/**
 * UBS Design System — Icon Tokens
 *
 * Illustrative icons, web/app functional icons, and animation specifications.
 * Source: ubs.frontify.com
 *
 * @remarks
 * UBS uses two icon families: illustrative (≥24px, expressive) and
 * web/app (functional, pixel-perfect at specific sizes).
 * Icons must never be resized from the library; use the correct size variant.
 */

// ─── Illustrative Icons ──────────────────────────────────────────────

/**
 * Illustrative icon specifications.
 *
 * @remarks
 * Standard icon type for the majority of applications.
 * Minimum size is 24px. Line weight ratio is always 1:2.
 * Red accent appears on the thicker line, used sparingly and in context.
 */
export const ILLUSTRATIVE_ICON = {
  /** Minimum display size for illustrative icons. */
  minSize: 24,
  /** Line weight ratio (thin:thick). */
  lineWeightRatio: '1:2',
  /** Red accent configuration. */
  redAccent: {
    /** Red accent is always placed on the thicker line. */
    placement: 'always on the thicker line',
    /** Use sparingly and only in meaningful context. */
    usage: 'sparingly and in context',
  },
  /** Visual character of illustrative icons. */
  character: {
    /** Shapes are geometric and open. */
    shapes: 'geometric and open',
    /** Straight line ends, sharp corners mixed with rounded where content fits. */
    corners: 'straight line ends, sharp corners mixed with rounded where content fits',
  },
} as const;

/**
 * Available illustrative icon colour variants.
 */
export const ILLUSTRATIVE_ICON_VARIANTS = [
  'black with red accent',
  'all black',
] as const;

/** Type representing a valid illustrative icon variant. */
export type IllustrativeIconVariant = typeof ILLUSTRATIVE_ICON_VARIANTS[number];

/**
 * Illustrative icon usage rules. All restrictions are active (true).
 */
export const ILLUSTRATIVE_ICON_RULES = {
  /** Don't cram too many ideas into one icon. */
  noTooManyIdeasInOneIcon: true,
  /** Icons must convey meaning, not be decorative. */
  noDecorativeUsage: true,
  /** Icon meaning must be immediately clear. */
  noUnclearMeaning: true,
  /** Icons must not substitute for photographs or illustrations. */
  noSubstitutionOfImages: true,
} as const;

// ─── Web/App Icons ───────────────────────────────────────────────────

/**
 * Web/app icon sizes for functional UI elements.
 *
 * @remarks
 * For navigation bars, tab bars, menus, and other functional elements.
 * Icons are pixel-perfect at these sizes. Do not resize from library.
 * Black only. Open line ends for a light, optimistic look.
 */
export const WEB_APP_ICON_SIZES = {
  /** Small icon: 12px. For compact UI elements. */
  small: 12,
  /** Medium icon: 16px. Default functional icon size. */
  medium: 16,
  /** Large icon: 24px. For prominent UI elements. */
  large: 24,
} as const;

/** Type representing a valid web/app icon size key. */
export type WebAppIconSize = keyof typeof WEB_APP_ICON_SIZES;

/** Web/app icon colour. Always black. */
export const WEB_APP_ICON_COLOUR = 'black only' as const;

/**
 * Web/app icon usage rules.
 */
export const WEB_APP_ICON_RULES = {
  /** Icons are pixel-perfect. Do not resize from library. */
  noResize: true,
  /** Keep icons simple and clear. */
  keepSimple: true,
  /** Open line ends for a light look and optimistic touch. */
  openEnds: true,
  /** Safe zone applied to balance differently shaped icons. */
  safeZone: true,
} as const;

// ─── Animation ───────────────────────────────────────────────────────

/**
 * Icon animation specifications.
 *
 * @remarks
 * Red accent appears at the end of the animation to underline the message.
 * Pace is fast with eased movement for a smooth presentation loop.
 */
export const ICON_ANIMATION = {
  /** Red accent appears at the end to underline the message. */
  redAccentAppearance: 'at the end to underline the message',
  /** Animation pace: fast with eased movement. */
  pace: 'fast with eased movement',
  /** Animation should loop smoothly. */
  loop: 'smooth presentation',
} as const;

/**
 * Supported icon animation output formats.
 */
export const ICON_ANIMATION_FORMATS = [
  'GIF',
  'MP4',
  'MOV with transparency',
  'SVG (static)',
] as const;

/** Type representing a valid icon animation format. */
export type IconAnimationFormat = typeof ICON_ANIMATION_FORMATS[number];
