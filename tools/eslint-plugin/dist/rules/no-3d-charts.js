"use strict";
/**
 * ubs/no-3d-charts
 *
 * UBS brand rule: Charts must always be 2D. No 3D effects permitted.
 * Disallows 3D-related props on chart/dataviz components.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_helpers_1 = require("../utils/jsx-helpers");
/** Props that indicate 3D rendering. */
const THREED_PROPS = [
    'perspective',
    'transform3d',
    'is3D',
    'is3d',
    'enable3D',
    'enable3d',
    'threeD',
    'threed',
    'threeDimensional',
    'depth',
    'rotateX',
    'rotateY',
    'tilt',
    'elevation',
    'zAxis',
];
/** Style properties that indicate 3D effects. */
const THREED_STYLE_PROPS = new Set([
    'perspective',
    'perspectiveOrigin',
    'transformStyle',
]);
const rule = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow 3D effects on chart and dataviz components',
            recommended: true,
        },
        messages: {
            no3DProp: 'UBS brand: Charts must always be 2D. Remove the "{{prop}}" prop.',
            no3DStyle: 'UBS brand: Charts must always be 2D. Remove the 3D style property "{{prop}}".',
            no3DType: 'UBS brand: Charts must always be 2D. 3D chart types are not permitted.',
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
                // Check for 3D props
                for (const propName of THREED_PROPS) {
                    const attr = (0, jsx_helpers_1.findJSXAttribute)(node, propName);
                    if (attr) {
                        context.report({
                            node: attr,
                            messageId: 'no3DProp',
                            data: { prop: propName },
                        });
                    }
                }
                // Check type prop for 3D variants
                const typeAttr = (0, jsx_helpers_1.findJSXAttribute)(node, 'type');
                if (typeAttr) {
                    const typeVal = (0, jsx_helpers_1.getJSXAttributeStringValue)(typeAttr);
                    if (typeVal && /3d/i.test(typeVal)) {
                        context.report({
                            node: typeAttr,
                            messageId: 'no3DType',
                        });
                    }
                }
                // Check inline styles for 3D properties
                const styleProps = (0, jsx_helpers_1.getInlineStyleProperties)(node);
                for (const prop of styleProps) {
                    if (THREED_STYLE_PROPS.has(prop.key)) {
                        context.report({
                            node: prop.node,
                            messageId: 'no3DStyle',
                            data: { prop: prop.key },
                        });
                    }
                    // Check for transform with 3D functions
                    if (prop.key === 'transform' && typeof prop.value === 'string') {
                        if (/(?:translate3d|rotate3d|scale3d|perspective|rotateX|rotateY|matrix3d)/i.test(prop.value)) {
                            context.report({
                                node: prop.node,
                                messageId: 'no3DStyle',
                                data: { prop: 'transform (3D)' },
                            });
                        }
                    }
                }
            },
        };
    },
};
exports.default = rule;
