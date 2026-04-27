/**
 * ubs/impulse-rules
 *
 * UBS brand rule: No centre with keyline.
 * When using <Impulse> component, warns if nested inside a
 * centred container (text-align: center style or className).
 */

import { Rule } from 'eslint';
import {
  getJSXElementName,
  getInlineStyleProperties,
  classNameContains,
} from '../utils/jsx-helpers';

type AnyNode = Record<string, unknown> & { type: string };

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Warn when <Impulse> is nested inside a centred container',
      recommended: true,
    },
    messages: {
      noCentreWithKeyline:
        'UBS brand: <Impulse> must not be centred. Remove centre alignment from the parent container.',
    },
    schema: [],
  },
  create(context) {
    // Track JSXElements that have centre styling
    const centredElements: Set<AnyNode> = new Set();

    return {
      JSXOpeningElement(node: AnyNode) {
        // Check if this element has centre styling
        const hasCentreStyle = getInlineStyleProperties(node).some(
          (prop) =>
            (prop.key === 'textAlign' || prop.key === 'text-align') &&
            typeof prop.value === 'string' &&
            prop.value === 'center',
        );

        const hasCentreClass =
          classNameContains(node, 'text-center') ||
          classNameContains(node, 'text-centre') ||
          classNameContains(node, 'center') ||
          classNameContains(node, 'mx-auto');

        if (hasCentreStyle || hasCentreClass) {
          // Store the parent JSXElement node
          const parent = (node as unknown as Rule.Node).parent;
          if (parent) {
            centredElements.add(parent as unknown as AnyNode);
          }
        }
      },

      JSXElement(node: AnyNode) {
        const openingElement = node.openingElement as AnyNode;
        if (!openingElement) return;

        const name = getJSXElementName(openingElement);
        if (name !== 'Impulse') return;

        // Walk up to see if any ancestor is centred
        let current = (node as unknown as Rule.Node).parent;
        while (current) {
          if (centredElements.has(current as unknown as AnyNode)) {
            context.report({
              node: node as unknown as Rule.Node,
              messageId: 'noCentreWithKeyline',
            });
            return;
          }

          // Also check the current JSXElement's opening element for centre styling
          if ((current as unknown as AnyNode).type === 'JSXElement') {
            const parentOpening = (current as unknown as AnyNode).openingElement as AnyNode;
            if (parentOpening) {
              const hasCentreStyle = getInlineStyleProperties(parentOpening).some(
                (prop) =>
                  (prop.key === 'textAlign' || prop.key === 'text-align') &&
                  typeof prop.value === 'string' &&
                  prop.value === 'center',
              );

              const hasCentreClass =
                classNameContains(parentOpening, 'text-center') ||
                classNameContains(parentOpening, 'text-centre') ||
                classNameContains(parentOpening, 'center') ||
                classNameContains(parentOpening, 'mx-auto');

              if (hasCentreStyle || hasCentreClass) {
                context.report({
                  node: node as unknown as Rule.Node,
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

export default rule;
