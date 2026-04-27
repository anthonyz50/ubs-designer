"use strict";
/**
 * ubs/trading-region
 *
 * UBS rule: Trading colours have REVERSED meaning across regions.
 *   - Green #498100 = positive in EMEA/US, negative in APAC
 *   - Red #C81219 = negative in EMEA/US, positive in APAC
 *
 * Requires an explicit `region` prop when:
 *   1. Using a <TradingIndicator> component, OR
 *   2. Using trading colours (#498100, #C81219) in style props
 */
Object.defineProperty(exports, "__esModule", { value: true });
const colour_utils_1 = require("../utils/colour-utils");
const jsx_helpers_1 = require("../utils/jsx-helpers");
const TRADING_COMPONENTS = new Set(['TradingIndicator']);
const rule = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Require explicit region prop when using trading colours or TradingIndicator',
            recommended: true,
        },
        messages: {
            missingRegionComponent: 'UBS brand: <{{component}}> must have an explicit `region` prop. Trading colours have reversed meaning in APAC vs EMEA/US.',
            missingRegionColour: 'UBS brand: Trading colour {{colour}} used without a `region` prop. Green/red meaning is reversed in APAC vs EMEA/US.',
        },
        schema: [],
    },
    create(context) {
        return {
            JSXOpeningElement(node) {
                const name = (0, jsx_helpers_1.getJSXElementName)(node);
                if (!name)
                    return;
                const hasRegion = (0, jsx_helpers_1.hasJSXAttribute)(node, 'region');
                // 1. Check if this is a trading component
                if (TRADING_COMPONENTS.has(name) && !hasRegion) {
                    context.report({
                        node: node,
                        messageId: 'missingRegionComponent',
                        data: { component: name },
                    });
                    return;
                }
                // 2. Check if inline styles use trading colours
                if (!hasRegion) {
                    const styleProps = (0, jsx_helpers_1.getInlineStyleProperties)(node);
                    for (const prop of styleProps) {
                        if (typeof prop.value === 'string') {
                            const norm = (0, colour_utils_1.normaliseHex)(prop.value);
                            if (norm && (0, colour_utils_1.isTradingColour)(norm)) {
                                context.report({
                                    node: prop.node,
                                    messageId: 'missingRegionColour',
                                    data: { colour: prop.value },
                                });
                            }
                        }
                    }
                }
            },
        };
    },
};
exports.default = rule;
