"use strict";
/**
 * ubs/colour-palette
 *
 * Validates that hex colours in JSX style props and inline styles
 * are from the approved UBS colour palette. Suggests the nearest
 * palette colour for off-palette values.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const colour_utils_1 = require("../utils/colour-utils");
const jsx_helpers_1 = require("../utils/jsx-helpers");
/** Colour-related CSS properties to check. */
const COLOUR_PROPERTIES = new Set([
    'color',
    'colour',
    'backgroundColor',
    'background-color',
    'borderColor',
    'border-color',
    'borderTopColor',
    'borderRightColor',
    'borderBottomColor',
    'borderLeftColor',
    'outlineColor',
    'fill',
    'stroke',
]);
const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce UBS brand colour palette in JSX inline styles',
            recommended: true,
        },
        messages: {
            offPalette: 'Colour "{{colour}}" is not in the UBS palette. Did you mean "{{nearest}}"?',
            offPaletteNoSuggestion: 'Colour "{{colour}}" is not in the UBS palette.',
        },
        schema: [],
    },
    create(context) {
        return {
            JSXOpeningElement(node) {
                const styleProps = (0, jsx_helpers_1.getInlineStyleProperties)(node);
                for (const prop of styleProps) {
                    if (!COLOUR_PROPERTIES.has(prop.key))
                        continue;
                    if (typeof prop.value === 'string') {
                        checkColour(context, prop.value, prop.valueNode);
                    }
                }
            },
        };
    },
};
function checkColour(context, value, node) {
    // Only check hex colours
    if (!value.startsWith('#'))
        return;
    const norm = (0, colour_utils_1.normaliseHex)(value);
    if (!norm)
        return;
    if ((0, colour_utils_1.isInPalette)(norm))
        return;
    const nearest = (0, colour_utils_1.nearestPaletteColour)(norm);
    if (nearest) {
        context.report({
            node,
            messageId: 'offPalette',
            data: { colour: value, nearest },
        });
    }
    else {
        context.report({
            node,
            messageId: 'offPaletteNoSuggestion',
            data: { colour: value },
        });
    }
}
exports.default = rule;
