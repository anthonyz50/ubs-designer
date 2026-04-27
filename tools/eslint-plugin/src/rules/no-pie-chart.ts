/**
 * ubs/no-pie-chart
 *
 * UBS brand rule: Pie charts are not permitted. Use donut charts instead.
 * Disallows type="pie" on DataViz or chart components.
 */

import { Rule } from 'eslint';
import {
  getJSXElementName,
  findJSXAttribute,
  getJSXAttributeStringValue,
  isChartComponent,
} from '../utils/jsx-helpers';

type AnyNode = Record<string, unknown> & { type: string };

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow pie charts; use donut charts instead',
      recommended: true,
    },
    messages: {
      noPieChart:
        'UBS brand: Pie charts are not permitted. Use type="donut" instead.',
      noPieComponent:
        'UBS brand: <PieChart> is not permitted. Use a donut chart instead.',
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node: AnyNode) {
        const name = getJSXElementName(node);
        if (!name) return;

        // Check for <PieChart> component directly
        if (name === 'PieChart' || name === 'Pie') {
          context.report({
            node: node as unknown as Rule.Node,
            messageId: 'noPieComponent',
          });
          return;
        }

        // Check for type="pie" on chart/dataviz components
        if (isChartComponent(name) || name === 'DataViz') {
          const typeAttr = findJSXAttribute(node, 'type');
          if (typeAttr) {
            const typeVal = getJSXAttributeStringValue(typeAttr);
            if (typeVal && typeVal.toLowerCase() === 'pie') {
              context.report({
                node: typeAttr as unknown as Rule.Node,
                messageId: 'noPieChart',
              });
            }
          }

          // Also check variant="pie"
          const variantAttr = findJSXAttribute(node, 'variant');
          if (variantAttr) {
            const variantVal = getJSXAttributeStringValue(variantAttr);
            if (variantVal && variantVal.toLowerCase() === 'pie') {
              context.report({
                node: variantAttr as unknown as Rule.Node,
                messageId: 'noPieChart',
              });
            }
          }
        }
      },
    };
  },
};

export default rule;
