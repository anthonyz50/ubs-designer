/**
 * UBS Design System — Theme Object
 *
 * Combines all design tokens into a single, fully typed theme object.
 * This is the canonical source of truth for all theme values used
 * throughout the component library.
 */
export declare const breakpoints: {
    readonly mobile: 320;
    readonly tablet: 768;
    readonly desktop: 1024;
    readonly wide: 1440;
};
export type Breakpoint = keyof typeof breakpoints;
/** Media query strings for use in JS-in-CSS or style utilities */
export declare const mediaQueries: {
    readonly mobile: "(min-width: 320px)";
    readonly tablet: "(min-width: 768px)";
    readonly desktop: "(min-width: 1024px)";
    readonly wide: "(min-width: 1440px)";
};
export declare const spacingScale: readonly [0, 4, 8, 12, 16, 24, 32, 48, 64, 96];
export type SpacingIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/** Named spacing tokens */
export declare const spacing: {
    readonly none: 0;
    readonly '4xs': 4;
    readonly '3xs': 8;
    readonly '2xs': 12;
    readonly xs: 16;
    readonly sm: 24;
    readonly md: 32;
    readonly lg: 48;
    readonly xl: 64;
    readonly '2xl': 96;
};
export type SpacingToken = keyof typeof spacing;
export declare const fontFamily: {
    readonly primary: "'Frutiger', 'Frutiger Neue', Arial, Helvetica, sans-serif";
    readonly mono: "'Frutiger Mono', 'SF Mono', 'Fira Code', 'Fira Mono', monospace";
};
export declare const fontWeight: {
    readonly light: 300;
    readonly regular: 400;
    readonly medium: 500;
    readonly bold: 700;
};
export declare const fontSize: {
    /** Minimum enforced size */
    readonly min: 14;
    /** Body copy */
    readonly body: 16;
    /** Small text (never below min) */
    readonly small: 14;
    /** Subheading */
    readonly h6: 16;
    readonly h5: 18;
    readonly h4: 20;
    readonly h3: 24;
    readonly h2: 28;
    readonly h1: 32;
    /** Display / hero headings */
    readonly display: 40;
    readonly displayLg: 48;
};
export declare const lineHeight: {
    /** Body text: 22px at 16px font */
    readonly body: 1.375;
    /** Tight for headings */
    readonly heading: 1.2;
    /** Comfortable for large text */
    readonly relaxed: 1.5;
    /** Single line / buttons */
    readonly none: 1;
};
export declare const typography: {
    readonly fontFamily: {
        readonly primary: "'Frutiger', 'Frutiger Neue', Arial, Helvetica, sans-serif";
        readonly mono: "'Frutiger Mono', 'SF Mono', 'Fira Code', 'Fira Mono', monospace";
    };
    readonly fontWeight: {
        readonly light: 300;
        readonly regular: 400;
        readonly medium: 500;
        readonly bold: 700;
    };
    readonly fontSize: {
        /** Minimum enforced size */
        readonly min: 14;
        /** Body copy */
        readonly body: 16;
        /** Small text (never below min) */
        readonly small: 14;
        /** Subheading */
        readonly h6: 16;
        readonly h5: 18;
        readonly h4: 20;
        readonly h3: 24;
        readonly h2: 28;
        readonly h1: 32;
        /** Display / hero headings */
        readonly display: 40;
        readonly displayLg: 48;
    };
    readonly lineHeight: {
        /** Body text: 22px at 16px font */
        readonly body: 1.375;
        /** Tight for headings */
        readonly heading: 1.2;
        /** Comfortable for large text */
        readonly relaxed: 1.5;
        /** Single line / buttons */
        readonly none: 1;
    };
};
export declare const colours: {
    readonly corporate: {
        readonly white: "#FFFFFF";
        readonly red: "#E60000";
        readonly black: "#000000";
    };
    readonly gray: {
        readonly i: "#CCCABC";
        readonly ii: "#B8B3A2";
        readonly iii: "#8E8D83";
        readonly iv: "#7A7870";
        readonly v: "#5A5D5C";
        readonly vi: "#404040";
    };
    readonly bordeaux: {
        readonly i: "#BD000C";
        readonly ii: "#8A000A";
        readonly iii: "#620004";
    };
    readonly bronze: {
        readonly i: "#B98E2C";
        readonly ii: "#946F29";
        readonly iii: "#6C5312";
    };
    readonly pastel: {
        readonly i: "#ECEBE4";
        readonly ii: "#F5F0E1";
    };
    readonly darkMode: {
        readonly primaryRed: "#D83B31";
        readonly secondaryRed: "#FE6F5D";
    };
    readonly rag: {
        readonly red: "#BD000C";
        readonly amber: "#E4A911";
        readonly green: "#6F7A1A";
    };
    readonly trading: {
        readonly green: "#498100";
        readonly red: "#C81219";
    };
    readonly metallic: {
        readonly silver: "#BEBEBE";
    };
    readonly chart: readonly ["#AF8626", "#00759E", "#879420", "#4B2D58", "#9F8865", "#2E476B", "#469A6C", "#AD3E4A", "#8489BD", "#0C7EC6", "#654D16", "#804C95", "#45999C", "#4972AC", "#CC707A", "#295B40", "#545A9C", "#785E4A", "#07476F", "#620004"];
};
/** Semantic colour mappings for light mode */
export declare const semanticColours: {
    readonly text: {
        readonly primary: "#000000";
        readonly secondary: "#5A5D5C";
        readonly tertiary: "#7A7870";
        readonly inverse: "#FFFFFF";
        readonly link: "#E60000";
        readonly error: "#BD000C";
        readonly warning: "#E4A911";
        readonly success: "#6F7A1A";
    };
    readonly background: {
        readonly primary: "#FFFFFF";
        readonly secondary: "#ECEBE4";
        readonly tertiary: "#F5F0E1";
        readonly inverse: "#000000";
    };
    readonly border: {
        readonly primary: "#B8B3A2";
        readonly secondary: "#CCCABC";
        readonly focus: "#000000";
    };
    readonly interactive: {
        readonly primary: "#E60000";
        readonly primaryHover: "#BD000C";
        readonly primaryActive: "#8A000A";
        readonly secondary: "#000000";
        readonly secondaryHover: "#404040";
    };
};
/** Semantic colour mappings for dark mode */
export declare const semanticColoursDark: {
    readonly text: {
        readonly primary: "#FFFFFF";
        readonly secondary: "#B8B3A2";
        readonly tertiary: "#8E8D83";
        readonly inverse: "#000000";
        readonly link: "#FE6F5D";
        readonly error: "#FE6F5D";
        readonly warning: "#E4A911";
        readonly success: "#6F7A1A";
    };
    readonly background: {
        readonly primary: "#1A1A1A";
        readonly secondary: "#2A2A2A";
        readonly tertiary: "#333333";
        readonly inverse: "#FFFFFF";
    };
    readonly border: {
        readonly primary: "#5A5D5C";
        readonly secondary: "#404040";
        readonly focus: "#FFFFFF";
    };
    readonly interactive: {
        readonly primary: "#D83B31";
        readonly primaryHover: "#FE6F5D";
        readonly primaryActive: "#FF8A7A";
        readonly secondary: "#FFFFFF";
        readonly secondaryHover: "#B8B3A2";
    };
};
export declare const layout: {
    /** Max content width */
    readonly maxWidth: 1440;
    /** Content gutter / side padding */
    readonly gutter: {
        readonly mobile: 16;
        readonly tablet: 24;
        readonly desktop: 32;
        readonly wide: 48;
    };
    /** Grid columns */
    readonly columns: {
        readonly mobile: 4;
        readonly tablet: 8;
        readonly desktop: 12;
        readonly wide: 12;
    };
    /** Column gap */
    readonly columnGap: {
        readonly mobile: 16;
        readonly tablet: 24;
        readonly desktop: 24;
        readonly wide: 32;
    };
    /** Border radius */
    readonly borderRadius: {
        readonly none: 0;
        readonly sm: 2;
        readonly md: 4;
        readonly lg: 8;
        readonly xl: 12;
        readonly full: 9999;
    };
};
export declare const accessibility: {
    /** WCAG 2.2 AA contrast ratio requirements */
    readonly contrast: {
        /** Normal text (<25px / <18.7px bold): 4.5:1 */
        readonly normalText: 4.5;
        /** Large text (≥25px / ≥18.7px bold): 3:1 */
        readonly largeText: 3;
        /** Non-text graphics and UI components: 3:1 */
        readonly graphics: 3;
    };
    /** Threshold in px for "large text" classification */
    readonly largeTextThreshold: 25;
    /** Threshold in px for bold "large text" classification */
    readonly largeTextBoldThreshold: 18.7;
    /** Minimum touch target size (px) for WCAG 2.5.8 */
    readonly minTouchTarget: 44;
    /** Minimum font size enforced across all text */
    readonly minFontSize: 14;
    /** Focus indicator minimum width */
    readonly focusIndicatorWidth: 2;
};
export declare const transitions: {
    readonly duration: {
        readonly fast: "100ms";
        readonly normal: "200ms";
        readonly slow: "300ms";
        readonly slower: "500ms";
    };
    readonly easing: {
        /** Standard UBS easing for most interactions */
        readonly default: "cubic-bezier(0.4, 0, 0.2, 1)";
        /** Enter / appear */
        readonly easeOut: "cubic-bezier(0, 0, 0.2, 1)";
        /** Exit / disappear */
        readonly easeIn: "cubic-bezier(0.4, 0, 1, 1)";
        /** Impulse / spring-like */
        readonly impulse: "cubic-bezier(0.22, 1, 0.36, 1)";
    };
};
export declare const zIndex: {
    readonly base: 0;
    readonly dropdown: 100;
    readonly sticky: 200;
    readonly overlay: 300;
    readonly modal: 400;
    readonly popover: 500;
    readonly toast: 600;
    readonly tooltip: 700;
};
/** Semantic colour scheme shape, shared by light and dark modes */
export interface SemanticColourScheme {
    readonly text: {
        readonly primary: string;
        readonly secondary: string;
        readonly tertiary: string;
        readonly inverse: string;
        readonly link: string;
        readonly error: string;
        readonly warning: string;
        readonly success: string;
    };
    readonly background: {
        readonly primary: string;
        readonly secondary: string;
        readonly tertiary: string;
        readonly inverse: string;
    };
    readonly border: {
        readonly primary: string;
        readonly secondary: string;
        readonly focus: string;
    };
    readonly interactive: {
        readonly primary: string;
        readonly primaryHover: string;
        readonly primaryActive: string;
        readonly secondary: string;
        readonly secondaryHover: string;
    };
}
export interface UBSTheme {
    readonly colours: typeof colours;
    readonly semantic: SemanticColourScheme;
    readonly typography: typeof typography;
    readonly spacing: typeof spacing;
    readonly spacingScale: typeof spacingScale;
    readonly breakpoints: typeof breakpoints;
    readonly mediaQueries: typeof mediaQueries;
    readonly layout: typeof layout;
    readonly accessibility: typeof accessibility;
    readonly transitions: typeof transitions;
    readonly zIndex: typeof zIndex;
    readonly isDarkMode: boolean;
}
/** Light mode theme */
export declare const ubsThemeLight: UBSTheme;
/** Dark mode theme */
export declare const ubsThemeDark: UBSTheme;
/** Default theme (light) */
export declare const ubsTheme: UBSTheme;
export type { UBSTheme as Theme };
