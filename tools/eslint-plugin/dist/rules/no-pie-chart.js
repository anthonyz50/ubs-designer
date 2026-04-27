"use strict";
/**
 * ubs/no-pie-chart
 *
 * UBS brand rule: Pie charts are not permitted. Use donut charts instead.
 * Disallows type="pie" on DataViz or chart components.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_helpers_1 = require("../utils/jsx-helpers");
const rule = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow pie charts; use donut charts instead',
            recommended: true,
        },
        messages: {
            noPieChart: 'UBS brand: Pie charts are not permitted. Use type="donut" instead.',
            noPieComponent: 'UBS brand: <PieChart> is not permitted. Use a donut chart instead.',
        },
        schema: [],
    },
    create(context) {
        return {
            JSXOpeningElement(node) {
                const name = (0, jsx_helpers_1.getJSXElementName)(node);
                if (!name)
                    return;
                // Check for <PieChart> component directly
                if (name === 'PieChart' || name === 'Pie') {
                    context.report({
                        node: node,
                        messageId: 'noPieComponent',
                    });
                    return;
                }
                // Check for type="pie" on chart/dataviz components
                if ((0, jsx_helpers_1.isChartComponent)(name) || name === 'DataViz') {
                    const typeAttr = (0, jsx_helpers_1.findJSXAttribute)(node, 'type');
                    if (typeAttr) {
                        const typeVal = (0, jsx_helpers_1.getJSXAttributeStringValue)(typeAttr);
                        if (typeVal && typeVal.toLowerCase() === 'pie') {
                            context.report({
                                node: typeAttr,
                                messageId: 'noPieChart',
                            });
                        }
                    }
                    // Also check variant="pie"
                    const variantAttr = (0, jsx_helpers_1.findJSXAttribute)(node, 'variant');
                    if (variantAttr) {
                        const variantVal = (0, jsx_helpers_1.getJSXAttributeStringValue)(variantAttr);
                        if (variantVal && variantVal.toLowerCase() === 'pie') {
                            context.report({
                                node: variantAttr,
                                messageId: 'noPieChart',
                            });
                        }
                    }
                }
            },
        };
    },
};
exports.default = rule;
