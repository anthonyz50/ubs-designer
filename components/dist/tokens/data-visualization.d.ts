/**
 * UBS Design System — Data Visualisation Tokens
 *
 * Chart colour sequences, gap specs, emphasis options, motion rules, and constraints.
 * Source: ubs.frontify.com
 *
 * @remarks
 * All charts must be 2D. Donut is preferred over pie.
 * UBS Red (#E60000) is the highlight colour; when used, do not also use Bordeaux I.
 * Never rely on colour alone to convey meaning.
 */
/** Charts must always be rendered in 2D. */
export declare const CHART_DIMENSION: "always 2D";
/** Donut charts are preferred over pie charts. */
export declare const CIRCULAR_PREFERENCE: "donut over pie";
/** Highlight colour for data visualisations. Always UBS Red. */
export declare const HIGHLIGHT_COLOUR: "#E60000";
/**
 * Minimum gap/separator between chart segments.
 *
 * @remarks
 * Gaps ensure accessibility when adjacent segments lack sufficient colour contrast (below 3:1).
 */
export declare const CHART_GAPS: {
    /** Minimum gap for print media. */
    readonly print: "1.5pt";
    /** Minimum gap for screen/digital media. */
    readonly screen: "2px";
};
/**
 * Monochrome colour sequence.
 *
 * @remarks
 * Standard/default. One colour plus UBS Red for highlights.
 * Use for simple charts with few data points.
 */
export declare const COLOUR_SEQUENCE_MONOCHROME: {
    readonly description: "Standard. One colour + UBS Red for highlights.";
    readonly usage: "Default for simple charts";
};
/**
 * Polychrome colour sequence.
 *
 * @remarks
 * Gray III–VI and Black (up to 5 blocks) plus UBS Red for highlights.
 * Arranged light to dark. Standard for multi-segment charts.
 */
export declare const COLOUR_SEQUENCE_POLYCHROME: {
    readonly description: "Gray III-VI and Black (up to 5 blocks) + UBS Red for highlights.";
    readonly colours: readonly ["#8E8D83", "#7A7870", "#5A5D5C", "#404040", "#000000"];
    readonly arrangement: "light to dark";
    readonly usage: "Standard for multi-segment charts";
};
/**
 * Multichrome colour sequence.
 *
 * @remarks
 * Gray III–VI + Black, Bordeaux I–III, Bronze I–III mixed. Up to 9 blocks.
 * Use when polychrome is insufficient for the number of data points.
 */
export declare const COLOUR_SEQUENCE_MULTICHROME: {
    readonly description: "Gray III-VI + Black, Bordeaux I-III, Bronze I-III mixed. Up to 9 blocks.";
    readonly usage: "Extended palette when polychrome insufficient";
};
/**
 * Complex colour sequence.
 *
 * @remarks
 * 20 additional chart colours. Use only when more colours are needed
 * and all information carries equal weight. Must follow defined sequence order.
 */
export declare const COLOUR_SEQUENCE_COMPLEX: {
    readonly description: "20 additional chart colours. Use only when more colours needed and info is equal weight.";
    readonly usage: "Special cases only. Must follow defined sequence order.";
};
/**
 * All colour sequence types mapped by name.
 */
export declare const COLOUR_SEQUENCES: {
    readonly monochrome: {
        readonly description: "Standard. One colour + UBS Red for highlights.";
        readonly usage: "Default for simple charts";
    };
    readonly polychrome: {
        readonly description: "Gray III-VI and Black (up to 5 blocks) + UBS Red for highlights.";
        readonly colours: readonly ["#8E8D83", "#7A7870", "#5A5D5C", "#404040", "#000000"];
        readonly arrangement: "light to dark";
        readonly usage: "Standard for multi-segment charts";
    };
    readonly multichrome: {
        readonly description: "Gray III-VI + Black, Bordeaux I-III, Bronze I-III mixed. Up to 9 blocks.";
        readonly usage: "Extended palette when polychrome insufficient";
    };
    readonly complex: {
        readonly description: "20 additional chart colours. Use only when more colours needed and info is equal weight.";
        readonly usage: "Special cases only. Must follow defined sequence order.";
    };
};
/** Type representing a valid colour sequence name. */
export type ColourSequenceName = keyof typeof COLOUR_SEQUENCES;
/**
 * Insight flag specification.
 *
 * @remarks
 * A red arrow pointing to an insight with a summary in plain language.
 */
export declare const INSIGHT_FLAG: {
    /** Visual element used for the insight flag. */
    readonly element: "red arrow";
    /** Purpose of the insight flag. */
    readonly purpose: "Point to an insight with summary in plain language";
};
/**
 * Typography within data visualisations.
 *
 * @remarks
 * Primary font is Frutiger Light. Alternatives are Frutiger Bold
 * and Frutiger Light Condensed. Never mix weights within one visualisation.
 */
export declare const DATA_VIZ_TYPOGRAPHY: {
    /** Primary font for data visualisations. */
    readonly primary: "Frutiger Light";
    /** Alternative fonts (use only one per visualisation). */
    readonly alternative: readonly ["Frutiger Bold", "Frutiger Light Condensed"];
    /** Never mix font weights within one visualisation. */
    readonly rule: "Don't mix within one visualisation";
};
/**
 * Line specifications for data visualisations.
 */
export declare const DATA_VIZ_LINES: {
    /** Line weight ratio for icons and arrows. */
    readonly ratio: "1:2";
    /** Maximum arrow angle. */
    readonly arrowAngle: "maximum 90 degrees";
    /** Divider lines must have sufficient contrast against chart lines. */
    readonly sufficientContrastBetweenDividerAndChartLines: true;
};
/**
 * Available emphasis techniques for data visualisations.
 *
 * @remarks
 * Use these to draw attention to key data points or insights
 * without relying on colour alone.
 */
export declare const EMPHASIS_OPTIONS: readonly ["colour", "contrast", "stroke contrast", "scale", "proximity", "negative space", "repetition", "dashed/dotted lines", "big numbers"];
/** Type representing a valid emphasis technique. */
export type EmphasisOption = typeof EMPHASIS_OPTIONS[number];
/**
 * Motion/animation specifications for data visualisations.
 *
 * @remarks
 * Motion must add meaning, not embellishment. Transitions use
 * opacity, scale, colour, and position. Consistent timing throughout.
 */
export declare const DATA_VIZ_MOTION: {
    /** Changes of acceleration for realism. No abrupt starts/stops. */
    readonly easing: "Changes of acceleration for realism. No abrupt starts/stops.";
    /** Straight, concise paths. No curved/organic motion. */
    readonly direction: "Straight, concise paths. No curved/organic.";
    /** Transitions add meaning, not embellishment. Opacity, scale, colour, position. */
    readonly transitions: "Add meaning, not embellishment. Opacity, scale, colour, position.";
    /** Consistent timing. Define smallest duration and multiply. */
    readonly pace: "Consistent timing. Define smallest duration and multiply.";
};
/**
 * Data visualisation rules. All restrictions are active (true).
 *
 * @remarks
 * When using UBS Red for highlighting, do not also use Bordeaux I.
 * Use the next darker shade instead.
 */
export declare const DATA_VIZ_RULES: {
    /** Only use UBS-approved icons in visualisations. */
    readonly noNonUBSIcons: true;
    /** No drop shadows in charts. */
    readonly noShadows: true;
    /** Highlight colour (Red) must not dominate the visualisation. */
    readonly noDominantHighlightColour: true;
    /** Do not mix light-to-dark and dark-to-light colour directions. */
    readonly noMixedColourDirections: true;
    /** No gradient fills in chart elements. */
    readonly noGradients: true;
    /** No angled or tilted chart elements. */
    readonly noAngles: true;
    /** Only use UBS corporate colours. */
    readonly noNonCorporateColours: true;
    /** Charts must always be 2D. */
    readonly no3D: true;
    /** Contrast ratios must meet WCAG requirements. */
    readonly noWrongContrastRatio: true;
};
/** Type representing a data visualisation rule key. */
export type DataVizRule = keyof typeof DATA_VIZ_RULES;
