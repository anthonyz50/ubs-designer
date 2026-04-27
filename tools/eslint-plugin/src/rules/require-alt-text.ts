/**
 * ubs/require-alt-text
 *
 * UBS accessibility rule: All <img>, <Logo>, and <Icon> elements
 * must have alternative text via `alt` or `aria-label` props.
 */

import { Rule } from 'eslint';
import {
  getJSXElementName,
  findJSXAttribute,
  getJSXAttributeStringValue,
} from '../utils/jsx-helpers';

type AnyNode = Record<string, unknown> & { type: string };

const REQUIRES_ALT = new Set(['img', 'Logo', 'Icon']);

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Require alt text or aria-label on img, Logo, and Icon elements',
      recommended: true,
    },
    messages: {
      missingAlt:
        'UBS accessibility: <{{element}}> must have an `alt` or `aria-label` attribute.',
      emptyAlt:
        'UBS accessibility: <{{element}}> has an empty `alt` attribute. Provide meaningful alternative text or use `alt=""` with `role="presentation"` for decorative images.',
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node: AnyNode) {
        const name = getJSXElementName(node);
        if (!name || !REQUIRES_ALT.has(name)) return;

        // Check for alt prop
        const altAttr = findJSXAttribute(node, 'alt');
        const ariaLabelAttr = findJSXAttribute(node, 'aria-label');

        if (altAttr) {
          // alt exists; check it's not empty (unless role="presentation")
          const altVal = getJSXAttributeStringValue(altAttr);
          if (altVal === '' || altVal === null) {
            // Allow empty alt if role="presentation" or role="none"
            const roleAttr = findJSXAttribute(node, 'role');
            const roleVal = roleAttr ? getJSXAttributeStringValue(roleAttr) : null;
            if (roleVal === 'presentation' || roleVal === 'none') return;

            // alt="" without role="presentation" on non-img elements is likely a mistake
            if (name !== 'img') {
              context.report({
                node: node as unknown as Rule.Node,
                messageId: 'emptyAlt',
                data: { element: name },
              });
            }
            // For <img alt="" /> this is valid (decorative), so allow it
          }
          return;
        }

        if (ariaLabelAttr) {
          const ariaVal = getJSXAttributeStringValue(ariaLabelAttr);
          if (ariaVal && ariaVal.trim().length > 0) return;
        }

        // Neither alt nor aria-label found
        context.report({
          node: node as unknown as Rule.Node,
          messageId: 'missingAlt',
          data: { element: name },
        });
      },
    };
  },
};

export default rule;
