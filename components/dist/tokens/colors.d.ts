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
/** Content stage. Dominates all other colours. */
export declare const UBS_WHITE: "#FFFFFF";
/** UBS Red. Used to emphasise content. Never for numbers. */
export declare const UBS_RED: "#E60000";
/** Primary text colour. */
export declare const UBS_BLACK: "#000000";
/** Used in charts, backgrounds, illustrations, tables. */
export declare const GRAY_I: "#CCCABC";
export declare const GRAY_II: "#B8B3A2";
export declare const GRAY_III: "#8E8D83";
export declare const GRAY_IV: "#7A7870";
export declare const GRAY_V: "#5A5D5C";
export declare const GRAY_VI: "#404040";
/** Complements UBS Red. For text highlights, backgrounds, data viz, illustrations. */
export declare const BORDEAUX_I: "#BD000C";
/** Also used as additional colour in illustrations (~10%). */
export declare const BORDEAUX_II: "#8A000A";
export declare const BORDEAUX_III: "#620004";
/** For accents, colour blocks, backgrounds. */
export declare const BRONZE_I: "#B98E2C";
export declare const BRONZE_II: "#946F29";
export declare const BRONZE_III: "#6C5312";
/** For backgrounds and table column highlights. */
export declare const PASTEL_I: "#ECEBE4";
/** For backgrounds and table column highlights. */
export declare const PASTEL_II: "#F5F0E1";
/** Dark Mode replacement for UBS Red. For logo, buttons, larger areas. */
export declare const DARK_MODE_PRIMARY_RED: "#D83B31";
/** Dark Mode highlights, text links, accents, secondary interactions. */
export declare const DARK_MODE_SECONDARY_RED: "#FE6F5D";
/** Problem, critical, error. */
export declare const RAG_RED: "#BD000C";
/** Warning, needs attention. */
export declare const RAG_AMBER: "#E4A911";
/** Success, on track. */
export declare const RAG_GREEN: "#6F7A1A";
/** EMEA/US: positive. APAC: negative. */
export declare const TRADING_GREEN: "#498100";
/** EMEA/US: negative. APAC: positive. */
export declare const TRADING_RED: "#C81219";
/** Silver only. No gold, copper, brass. */
export declare const METALLIC_SILVER: "#BEBEBE";
/** Additional colours for complex charts (20+ segments). Use in sequence order only. */
export declare const CHART_COLOURS: readonly ["#AF8626", "#00759E", "#879420", "#4B2D58", "#9F8865", "#2E476B", "#469A6C", "#AD3E4A", "#8489BD", "#0C7EC6", "#654D16", "#804C95", "#45999C", "#4972AC", "#CC707A", "#295B40", "#545A9C", "#785E4A", "#07476F", "#620004"];
export declare const CHART_COLOUR_NAMES: readonly ["Bronze 50", "Lagoon 60", "Kiwi 60", "Aubergine 90", "Sand 50", "Plum 90", "Sage 50", "Blush 60", "Lavender 50", "Lake 50", "Bronze 80", "Aubergine 60", "Mint 50", "Plum 60", "Blush 40", "Sage 80", "Lavender 70", "Chocolate 60", "Lake 90", "Bordeaux 90"];
/** Gray III-VI and Black for polychrome charts. Light to dark. */
export declare const POLYCHROME_COLOURS: readonly ["#8E8D83", "#7A7870", "#5A5D5C", "#404040", "#000000"];
export declare const UBS_PALETTE: Record<string, string>;
/** Type representing all valid UBS colour hex values */
export type UBSColourHex = typeof UBS_PALETTE[keyof typeof UBS_PALETTE];
