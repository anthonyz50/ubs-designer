/**
 * ubs/no-3d-charts
 *
 * UBS brand rule: Charts must always be 2D. No 3D effects permitted.
 * Disallows 3D-related props on chart/dataviz components.
 */

import { Rule } from 'eslint';
import {
  getJSXElementName,
  findJSXAttribute,
  getJSXAttributeStringValue,
  isChartComponent,
  getInlineStyleProperties,
} from '../utils/jsx-helpers';

type AnyNode = Record<string, unknown> & { type: string };

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

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow 3D effects on chart and dataviz components',
      recommended: true,
    },
    messages: {
      no3DProp:
        'UBS brand: Charts must always be 2D. Remove the "{{prop}}" prop.',
      no3DStyle:
        'UBS brand: Charts must always be 2D. Remove the 3D style property "{{prop}}".',
      no3DType:
        'UBS brand: Charts must always be 2D. 3D chart types are not permitted.',
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node: AnyNode) {
        const name = getJSXElementName(node);
        if (!name) return;
        if (!isChartComponent(name) && name !== 'DataViz') return;

        // Check for 3D props
        for (const propName of THREED_PROPS) {
          const attr = findJSXAttribute(node, propName);
          if (attr) {
            context.report({
              node: attr as unknown as Rule.Node,
              messageId: 'no3DProp',
              data: { prop: propName },
            });
          }
        }

        // Check type prop for 3D variants
        const typeAttr = findJSXAttribute(node, 'type');
        if (typeAttr) {
          const typeVal = getJSXAttributeStringValue(typeAttr);
          if (typeVal && /3d/i.test(typeVal)) {
            context.report({
              node: typeAttr as unknown as Rule.Node,
              messageId: 'no3DType',
            });
          }
        }

        // Check inline styles for 3D properties
        const styleProps = getInlineStyleProperties(node);
        for (const prop of styleProps) {
          if (THREED_STYLE_PROPS.has(prop.key)) {
            context.report({
              node: prop.node as unknown as Rule.Node,
              messageId: 'no3DStyle',
              data: { prop: prop.key },
            });
          }
          // Check for transform with 3D functions
          if (prop.key === 'transform' && typeof prop.value === 'string') {
            if (/(?:translate3d|rotate3d|scale3d|perspective|rotateX|rotateY|matrix3d)/i.test(prop.value)) {
              context.report({
                node: prop.node as unknown as Rule.Node,
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

export default rule;
