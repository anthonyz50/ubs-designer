/**
 * ubs/colour-palette
 *
 * Validates that hex colours in JSX style props and inline styles
 * are from the approved UBS colour palette. Suggests the nearest
 * palette colour for off-palette values.
 */

import { Rule } from 'eslint';
import {
  isInPalette,
  nearestPaletteColour,
  normaliseHex,
} from '../utils/colour-utils';
import { getInlineStyleProperties } from '../utils/jsx-helpers';

type AnyNode = Record<string, unknown> & { type: string };

/** Colour-related CSS properties to check. */
const COLOUR_PROPERTIES = new Set([
  'color',
  'colour',
  'backgroundColor',
  'background-color',
  'borderColor',
  'border-color',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'outlineColor',
  'fill',
  'stroke',
]);

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce UBS brand colour palette in JSX inline styles',
      recommended: true,
    },
    messages: {
      offPalette:
        'Colour "{{colour}}" is not in the UBS palette. Did you mean "{{nearest}}"?',
      offPaletteNoSuggestion:
        'Colour "{{colour}}" is not in the UBS palette.',
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node: AnyNode) {
        const styleProps = getInlineStyleProperties(node);

        for (const prop of styleProps) {
          if (!COLOUR_PROPERTIES.has(prop.key)) continue;

          if (typeof prop.value === 'string') {
            checkColour(context, prop.value, prop.valueNode as unknown as Rule.Node);
          }
        }
      },
    };
  },
};

function checkColour(context: Rule.RuleContext, value: string, node: Rule.Node): void {
  // Only check hex colours
  if (!value.startsWith('#')) return;

  const norm = normaliseHex(value);
  if (!norm) return;

  if (isInPalette(norm)) return;

  const nearest = nearestPaletteColour(norm);
  if (nearest) {
    context.report({
      node,
      messageId: 'offPalette',
      data: { colour: value, nearest },
    });
  } else {
    context.report({
      node,
      messageId: 'offPaletteNoSuggestion',
      data: { colour: value },
    });
  }
}

export default rule;
