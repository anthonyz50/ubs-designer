"use strict";
/**
 * ubs/no-red-numbers
 *
 * UBS brand rule: Red must NEVER be used for numbers.
 * Detects when JSX elements styled with UBS Red (#E60000, #D83B31, #FE6F5D)
 * or colour="red" contain numeric children.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const colour_utils_1 = require("../utils/colour-utils");
const jsx_helpers_1 = require("../utils/jsx-helpers");
const rule = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow numeric content inside elements styled with UBS Red',
            recommended: true,
        },
        messages: {
            noRedNumbers: 'UBS brand: Red must never be used for numbers. Element styled with red ({{source}}) contains numeric content.',
        },
        schema: [],
    },
    create(context) {
        return {
            JSXElement(node) {
                const openingElement = node.openingElement;
                if (!openingElement)
                    return;
                // Check if children contain numbers
                if (!(0, jsx_helpers_1.childrenContainNumbers)(node))
                    return;
                // 1. Check inline style colour
                const styleProps = (0, jsx_helpers_1.getInlineStyleProperties)(openingElement);
                for (const prop of styleProps) {
                    if (prop.key === 'color' || prop.key === 'colour') {
                        if (typeof prop.value === 'string') {
                            const norm = (0, colour_utils_1.normaliseHex)(prop.value);
                            if (norm && (0, colour_utils_1.isUbsRed)(norm)) {
                                context.report({
                                    node: node,
                                    messageId: 'noRedNumbers',
                                    data: { source: `style color: ${prop.value}` },
                                });
                                return;
                            }
                        }
                    }
                }
                // 2. Check colour/color prop set to "red"
                for (const propName of ['colour', 'color']) {
                    const attr = (0, jsx_helpers_1.findJSXAttribute)(openingElement, propName);
                    if (attr) {
                        const val = (0, jsx_helpers_1.getJSXAttributeStringValue)(attr);
                        if (val && val.toLowerCase() === 'red') {
                            context.report({
                                node: node,
                                messageId: 'noRedNumbers',
                                data: { source: `${propName}="red"` },
                            });
                            return;
                        }
                        // Also check if the prop value is a red hex
                        if (val) {
                            const norm = (0, colour_utils_1.normaliseHex)(val);
                            if (norm && (0, colour_utils_1.isUbsRed)(norm)) {
                                context.report({
                                    node: node,
                                    messageId: 'noRedNumbers',
                                    data: { source: `${propName}="${val}"` },
                                });
                                return;
                            }
                        }
                    }
                }
                // 3. Check className containing "red"
                if ((0, jsx_helpers_1.classNameContains)(openingElement, 'red')) {
                    context.report({
                        node: node,
                        messageId: 'noRedNumbers',
                        data: { source: 'className contains "red"' },
                    });
                }
            },
        };
    },
};
exports.default = rule;
