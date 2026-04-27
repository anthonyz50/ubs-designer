/**
 * ubs/chart-sequence
 *
 * When chart colours are specified manually (not via colourSequence prop),
 * validates they follow the correct UBS 20-colour chart sequence in order.
 * Colours must not be skipped or reordered.
 */

import { Rule } from 'eslint';
import { UBS_CHART_SEQUENCE, normaliseHex } from '../utils/colour-utils';
import {
  getJSXElementName,
  findJSXAttribute,
  isChartComponent,
} from '../utils/jsx-helpers';

type AnyNode = Record<string, unknown> & { type: string };

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce UBS chart colour sequence order',
      recommended: true,
    },
    messages: {
      wrongOrder:
        'UBS brand: Chart colour "{{colour}}" is out of sequence. Expected "{{expected}}" at position {{position}}. The 20-colour sequence must be used in order.',
      skippedColour:
        'UBS brand: Chart colours must be used in sequence without skipping. Found "{{colour}}" but expected "{{expected}}" at position {{position}}.',
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node: AnyNode) {
        const name = getJSXElementName(node);
        if (!name) return;
        if (!isChartComponent(name) && name !== 'DataViz') return;

        // If colourSequence prop is present, the component handles it
        if (findJSXAttribute(node, 'colourSequence') || findJSXAttribute(node, 'colorSequence')) {
          return;
        }

        // Check for colours/colors prop with an array of hex values
        const coloursAttr =
          findJSXAttribute(node, 'colours') ??
          findJSXAttribute(node, 'colors') ??
          findJSXAttribute(node, 'chartColours') ??
          findJSXAttribute(node, 'chartColors');

        if (!coloursAttr) return;

        const attrValue = coloursAttr.value as AnyNode | null;
        if (!attrValue) return;

        // Handle {["#AF8626", "#00759E", ...]}
        let arrayElements: AnyNode[] | null = null;

        if (attrValue.type === 'JSXExpressionContainer') {
          const expr = attrValue.expression as AnyNode;
          if (expr?.type === 'ArrayExpression') {
            arrayElements = expr.elements as AnyNode[];
          }
        }

        if (!arrayElements) return;

        // Extract hex strings from the array
        const hexValues: Array<{ hex: string; node: AnyNode }> = [];
        for (const el of arrayElements) {
          if (el?.type === 'Literal' && typeof el.value === 'string') {
            const norm = normaliseHex(el.value as string);
            if (norm) {
              hexValues.push({ hex: norm, node: el });
            }
          }
        }

        if (hexValues.length === 0) return;

        // Validate sequence order
        let sequenceIndex = 0;
        for (const { hex, node: colourNode } of hexValues) {
          // Find this colour in the chart sequence
          const foundIndex = UBS_CHART_SEQUENCE.indexOf(hex);
          if (foundIndex === -1) {
            // Not a chart sequence colour; skip (colour-palette rule handles this)
            continue;
          }

          if (foundIndex !== sequenceIndex) {
            context.report({
              node: colourNode as unknown as Rule.Node,
              messageId: foundIndex > sequenceIndex ? 'skippedColour' : 'wrongOrder',
              data: {
                colour: hex,
                expected: UBS_CHART_SEQUENCE[sequenceIndex],
                position: String(sequenceIndex + 1),
              },
            });
            return; // Report first violation only
          }
          sequenceIndex++;
        }
      },
    };
  },
};

export default rule;
