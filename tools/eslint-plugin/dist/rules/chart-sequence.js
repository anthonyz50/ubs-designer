"use strict";
/**
 * ubs/chart-sequence
 *
 * When chart colours are specified manually (not via colourSequence prop),
 * validates they follow the correct UBS 20-colour chart sequence in order.
 * Colours must not be skipped or reordered.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const colour_utils_1 = require("../utils/colour-utils");
const jsx_helpers_1 = require("../utils/jsx-helpers");
const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce UBS chart colour sequence order',
            recommended: true,
        },
        messages: {
            wrongOrder: 'UBS brand: Chart colour "{{colour}}" is out of sequence. Expected "{{expected}}" at position {{position}}. The 20-colour sequence must be used in order.',
            skippedColour: 'UBS brand: Chart colours must be used in sequence without skipping. Found "{{colour}}" but expected "{{expected}}" at position {{position}}.',
        },
        schema: [],
    },
    create(context) {
        return {
            JSXOpeningElement(node) {
                const name = (0, jsx_helpers_1.getJSXElementName)(node);
                if (!name)
                    return;
                if (!(0, jsx_helpers_1.isChartComponent)(name) && name !== 'DataViz')
                    return;
                // If colourSequence prop is present, the component handles it
                if ((0, jsx_helpers_1.findJSXAttribute)(node, 'colourSequence') || (0, jsx_helpers_1.findJSXAttribute)(node, 'colorSequence')) {
                    return;
                }
                // Check for colours/colors prop with an array of hex values
                const coloursAttr = (0, jsx_helpers_1.findJSXAttribute)(node, 'colours') ??
                    (0, jsx_helpers_1.findJSXAttribute)(node, 'colors') ??
                    (0, jsx_helpers_1.findJSXAttribute)(node, 'chartColours') ??
                    (0, jsx_helpers_1.findJSXAttribute)(node, 'chartColors');
                if (!coloursAttr)
                    return;
                const attrValue = coloursAttr.value;
                if (!attrValue)
                    return;
                // Handle {["#AF8626", "#00759E", ...]}
                let arrayElements = null;
                if (attrValue.type === 'JSXExpressionContainer') {
                    const expr = attrValue.expression;
                    if (expr?.type === 'ArrayExpression') {
                        arrayElements = expr.elements;
                    }
                }
                if (!arrayElements)
                    return;
                // Extract hex strings from the array
                const hexValues = [];
                for (const el of arrayElements) {
                    if (el?.type === 'Literal' && typeof el.value === 'string') {
                        const norm = (0, colour_utils_1.normaliseHex)(el.value);
                        if (norm) {
                            hexValues.push({ hex: norm, node: el });
                        }
                    }
                }
                if (hexValues.length === 0)
                    return;
                // Validate sequence order
                let sequenceIndex = 0;
                for (const { hex, node: colourNode } of hexValues) {
                    // Find this colour in the chart sequence
                    const foundIndex = colour_utils_1.UBS_CHART_SEQUENCE.indexOf(hex);
                    if (foundIndex === -1) {
                        // Not a chart sequence colour; skip (colour-palette rule handles this)
                        continue;
                    }
                    if (foundIndex !== sequenceIndex) {
                        context.report({
                            node: colourNode,
                            messageId: foundIndex > sequenceIndex ? 'skippedColour' : 'wrongOrder',
                            data: {
                                colour: hex,
                                expected: colour_utils_1.UBS_CHART_SEQUENCE[sequenceIndex],
                                position: String(sequenceIndex + 1),
                            },
                        });
                        return; // Report first violation only
                    }
                    sequenceIndex++;
                }
            },
        };
    },
};
exports.default = rule;
