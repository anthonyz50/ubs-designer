"use strict";
/**
 * ubs/impulse-rules
 *
 * UBS brand rule: No centre with keyline.
 * When using <Impulse> component, warns if nested inside a
 * centred container (text-align: center style or className).
 */
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_helpers_1 = require("../utils/jsx-helpers");
const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Warn when <Impulse> is nested inside a centred container',
            recommended: true,
        },
        messages: {
            noCentreWithKeyline: 'UBS brand: <Impulse> must not be centred. Remove centre alignment from the parent container.',
        },
        schema: [],
    },
    create(context) {
        // Track JSXElements that have centre styling
        const centredElements = new Set();
        return {
            JSXOpeningElement(node) {
                // Check if this element has centre styling
                const hasCentreStyle = (0, jsx_helpers_1.getInlineStyleProperties)(node).some((prop) => (prop.key === 'textAlign' || prop.key === 'text-align') &&
                    typeof prop.value === 'string' &&
                    prop.value === 'center');
                const hasCentreClass = (0, jsx_helpers_1.classNameContains)(node, 'text-center') ||
                    (0, jsx_helpers_1.classNameContains)(node, 'text-centre') ||
                    (0, jsx_helpers_1.classNameContains)(node, 'center') ||
                    (0, jsx_helpers_1.classNameContains)(node, 'mx-auto');
                if (hasCentreStyle || hasCentreClass) {
                    // Store the parent JSXElement node
                    const parent = node.parent;
                    if (parent) {
                        centredElements.add(parent);
                    }
                }
            },
            JSXElement(node) {
                const openingElement = node.openingElement;
                if (!openingElement)
                    return;
                const name = (0, jsx_helpers_1.getJSXElementName)(openingElement);
                if (name !== 'Impulse')
                    return;
                // Walk up to see if any ancestor is centred
                let current = node.parent;
                while (current) {
                    if (centredElements.has(current)) {
                        context.report({
                            node: node,
                            messageId: 'noCentreWithKeyline',
                        });
                        return;
                    }
                    // Also check the current JSXElement's opening element for centre styling
                    if (current.type === 'JSXElement') {
                        const parentOpening = current.openingElement;
                        if (parentOpening) {
                            const hasCentreStyle = (0, jsx_helpers_1.getInlineStyleProperties)(parentOpening).some((prop) => (prop.key === 'textAlign' || prop.key === 'text-align') &&
                                typeof prop.value === 'string' &&
                                prop.value === 'center');
                            const hasCentreClass = (0, jsx_helpers_1.classNameContains)(parentOpening, 'text-center') ||
                                (0, jsx_helpers_1.classNameContains)(parentOpening, 'text-centre') ||
                                (0, jsx_helpers_1.classNameContains)(parentOpening, 'center') ||
                                (0, jsx_helpers_1.classNameContains)(parentOpening, 'mx-auto');
                            if (hasCentreStyle || hasCentreClass) {
                                context.report({
                                    node: node,
                                    messageId: 'noCentreWithKeyline',
                                });
                                return;
                            }
                        }
                    }
                    current = current.parent;
                }
            },
        };
    },
};
exports.default = rule;
