/**
 * UBS Design System — Colour Tokens
 *
 * All colour values from the UBS brand guidelines as typed constants.
 * Source: ubs.frontify.com
 *
 * @remarks
 * UBS Red must NEVER be used for numbers.
 * Red highlighting in messages is no longer permitted for accessibility.
 */

// ─── Corporate Colours ───────────────────────────────────────────────

/** Content stage. Dominates all other colours. */
export const UBS_WHITE = '#FFFFFF' as const;

/** UBS Red. Used to emphasise content. Never for numbers. */
export const UBS_RED = '#E60000' as const;

/** Primary text colour. */
export const UBS_BLACK = '#000000' as const;

// ─── Secondary — Grays ───────────────────────────────────────────────

/** Used in charts, backgrounds, illustrations, tables. */
export const GRAY_I = '#CCCABC' as const;
export const GRAY_II = '#B8B3A2' as const;
export const GRAY_III = '#8E8D83' as const;
export const GRAY_IV = '#7A7870' as const;
export const GRAY_V = '#5A5D5C' as const;
export const GRAY_VI = '#404040' as const;

// ─── Secondary — Bordeaux ────────────────────────────────────────────

/** Complements UBS Red. For text highlights, backgrounds, data viz, illustrations. */
export const BORDEAUX_I = '#BD000C' as const;
/** Also used as additional colour in illustrations (~10%). */
export const BORDEAUX_II = '#8A000A' as const;
export const BORDEAUX_III = '#620004' as const;

// ─── Secondary — Bronze ─────────────────────────────────────────────

/** For accents, colour blocks, backgrounds. */
export const BRONZE_I = '#B98E2C' as const;
export const BRONZE_II = '#946F29' as const;
export const BRONZE_III = '#6C5312' as const;

// ─── Pastels ─────────────────────────────────────────────────────────

/** For backgrounds and table column highlights. */
export const PASTEL_I = '#ECEBE4' as const;
/** For backgrounds and table column highlights. */
export const PASTEL_II = '#F5F0E1' as const;

// ─── Dark Mode ───────────────────────────────────────────────────────

/** Dark Mode replacement for UBS Red. For logo, buttons, larger areas. */
export const DARK_MODE_PRIMARY_RED = '#D83B31' as const;
/** Dark Mode highlights, text links, accents, secondary interactions. */
export const DARK_MODE_SECONDARY_RED = '#FE6F5D' as const;

// ─── RAG (Status) Colours ────────────────────────────────────────────

/** Problem, critical, error. */
export const RAG_RED = '#BD000C' as const;
/** Warning, needs attention. */
export const RAG_AMBER = '#E4A911' as const;
/** Success, on track. */
export const RAG_GREEN = '#6F7A1A' as const;

// ─── Trading Colours ─────────────────────────────────────────────────

/** EMEA/US: positive. APAC: negative. */
export const TRADING_GREEN = '#498100' as const;
/** EMEA/US: negative. APAC: positive. */
export const TRADING_RED = '#C81219' as const;

// ─── Metallic ────────────────────────────────────────────────────────

/** Silver only. No gold, copper, brass. */
export const METALLIC_SILVER = '#BEBEBE' as const;

// ─── Chart Colours (20-colour sequence) ──────────────────────────────

/** Additional colours for complex charts (20+ segments). Use in sequence order only. */
export const CHART_COLOURS = [
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
] as const;

export const CHART_COLOUR_NAMES = [
  'Bronze 50', 'Lagoon 60', 'Kiwi 60', 'Aubergine 90', 'Sand 50',
  'Plum 90', 'Sage 50', 'Blush 60', 'Lavender 50', 'Lake 50',
  'Bronze 80', 'Aubergine 60', 'Mint 50', 'Plum 60', 'Blush 40',
  'Sage 80', 'Lavender 70', 'Chocolate 60', 'Lake 90', 'Bordeaux 90',
] as const;

// ─── Polychrome Sequence ────────────────────────────────────────────

/** Gray III-VI and Black for polychrome charts. Light to dark. */
export const POLYCHROME_COLOURS = [
  GRAY_III,
  GRAY_IV,
  GRAY_V,
  GRAY_VI,
  UBS_BLACK,
] as const;

// ─── All Palette Colours (for validation) ────────────────────────────

export const UBS_PALETTE: Record<string, string> = {
  'White': UBS_WHITE,
  'Red': UBS_RED,
  'Black': UBS_BLACK,
  'Gray I': GRAY_I,
  'Gray II': GRAY_II,
  'Gray III': GRAY_III,
  'Gray IV': GRAY_IV,
  'Gray V': GRAY_V,
  'Gray VI': GRAY_VI,
  'Bordeaux I': BORDEAUX_I,
  'Bordeaux II': BORDEAUX_II,
  'Bordeaux III': BORDEAUX_III,
  'Bronze I': BRONZE_I,
  'Bronze II': BRONZE_II,
  'Bronze III': BRONZE_III,
  'Pastel I': PASTEL_I,
  'Pastel II': PASTEL_II,
  'Dark Mode Primary Red': DARK_MODE_PRIMARY_RED,
  'Dark Mode Secondary Red': DARK_MODE_SECONDARY_RED,
  'RAG Red': RAG_RED,
  'RAG Amber': RAG_AMBER,
  'RAG Green': RAG_GREEN,
  'Trading Green': TRADING_GREEN,
  'Trading Red': TRADING_RED,
  'Metallic Silver': METALLIC_SILVER,
};

/** Type representing all valid UBS colour hex values */
export type UBSColourHex = typeof UBS_PALETTE[keyof typeof UBS_PALETTE];
