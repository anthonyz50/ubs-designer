/**
 * ubs/no-red-numbers
 *
 * UBS brand rule: Red must NEVER be used for numbers.
 * Detects when JSX elements styled with UBS Red (#E60000, #D83B31, #FE6F5D)
 * or colour="red" contain numeric children.
 */

import { Rule } from 'eslint';
import { isUbsRed, normaliseHex } from '../utils/colour-utils';
import {
  findJSXAttribute,
  getJSXAttributeStringValue,
  getInlineStyleProperties,
  childrenContainNumbers,
  classNameContains,
} from '../utils/jsx-helpers';

type AnyNode = Record<string, unknown> & { type: string };

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow numeric content inside elements styled with UBS Red',
      recommended: true,
    },
    messages: {
      noRedNumbers:
        'UBS brand: Red must never be used for numbers. Element styled with red ({{source}}) contains numeric content.',
    },
    schema: [],
  },
  create(context) {
    return {
      JSXElement(node: AnyNode) {
        const openingElement = node.openingElement as AnyNode;
        if (!openingElement) return;

        // Check if children contain numbers
        if (!childrenContainNumbers(node)) return;

        // 1. Check inline style colour
        const styleProps = getInlineStyleProperties(openingElement);
        for (const prop of styleProps) {
          if (prop.key === 'color' || prop.key === 'colour') {
            if (typeof prop.value === 'string') {
              const norm = normaliseHex(prop.value);
              if (norm && isUbsRed(norm)) {
                context.report({
                  node: node as unknown as Rule.Node,
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
          const attr = findJSXAttribute(openingElement, propName);
          if (attr) {
            const val = getJSXAttributeStringValue(attr);
            if (val && val.toLowerCase() === 'red') {
              context.report({
                node: node as unknown as Rule.Node,
                messageId: 'noRedNumbers',
                data: { source: `${propName}="red"` },
              });
              return;
            }
            // Also check if the prop value is a red hex
            if (val) {
              const norm = normaliseHex(val);
              if (norm && isUbsRed(norm)) {
                context.report({
                  node: node as unknown as Rule.Node,
                  messageId: 'noRedNumbers',
                  data: { source: `${propName}="${val}"` },
                });
                return;
              }
            }
          }
        }

        // 3. Check className containing "red"
        if (classNameContains(openingElement, 'red')) {
          context.report({
            node: node as unknown as Rule.Node,
            messageId: 'noRedNumbers',
            data: { source: 'className contains "red"' },
          });
        }
      },
    };
  },
};

export default rule;
