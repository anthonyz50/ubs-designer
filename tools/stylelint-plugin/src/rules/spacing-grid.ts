import stylelint from 'stylelint';
import { valueToPx, parseShorthandValues, parseValue } from '../utils/unit-utils';

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = 'ubs/spacing-grid';

const messages = ruleMessages(ruleName, {
  rejected: (value: string, nearest: number) =>
    `Spacing value "${value}" does not align to the UBS 4px grid. Nearest allowed value: ${nearest}px.`,
});

const meta = {
  url: 'https://github.com/ubs/stylelint-plugin-ubs/blob/main/docs/rules/spacing-grid.md',
};

/** UBS spacing grid values in pixels */
const GRID_VALUES: readonly number[] = [4, 8, 12, 16, 24, 32, 48, 64, 96];

/** Properties that should align to the spacing grid */
const SPACING_PROPERTIES: ReadonlySet<string> = new Set([
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'gap',
  'row-gap',
  'column-gap',
]);

interface SecondaryOptions {
  allowZero?: boolean;
  allowAuto?: boolean;
}

function findNearest(px: number): number {
  let nearest = GRID_VALUES[0];
  let minDiff = Math.abs(px - nearest);

  for (const gridVal of GRID_VALUES) {
    const diff = Math.abs(px - gridVal);
    if (diff < minDiff) {
      minDiff = diff;
      nearest = gridVal;
    }
  }

  return nearest;
}

const ruleFunction = (primary: true, secondaryOptions?: SecondaryOptions) => {
  return (root: stylelint.PostcssResult['root'], result: stylelint.PostcssResult) => {
    const validOptions = validateOptions(
      result,
      ruleName,
      {
        actual: primary,
        possible: [true],
      },
      {
        actual: secondaryOptions,
        possible: {
          allowZero: [true, false],
          allowAuto: [true, false],
        },
        optional: true,
      },
    );

    if (!validOptions) return;

    const allowZero = secondaryOptions?.allowZero ?? true;
    const allowAuto = secondaryOptions?.allowAuto ?? true;

    root.walkDecls((decl) => {
      const prop = decl.prop.toLowerCase();

      if (!SPACING_PROPERTIES.has(prop)) return;

      const values = parseShorthandValues(decl.value);

      for (const val of values) {
        const trimmed = val.trim().toLowerCase();

        // Skip CSS custom properties and keywords
        if (/^var\(--/.test(trimmed) || ['inherit', 'initial', 'unset', 'revert'].includes(trimmed)) {
          continue;
        }

        // Handle auto
        if (trimmed === 'auto') {
          if (allowAuto) continue;
          report({
            message: messages.rejected(val, findNearest(0)),
            node: decl,
            result,
            ruleName,
            severity: 'warning',
          });
          continue;
        }

        // Handle zero (with or without units)
        if (trimmed === '0' || trimmed === '0px' || trimmed === '0rem' || trimmed === '0em' || trimmed === '0pt') {
          if (allowZero) continue;
          report({
            message: messages.rejected(val, GRID_VALUES[0]),
            node: decl,
            result,
            ruleName,
            severity: 'warning',
          });
          continue;
        }

        // Try to parse and convert to px
        const parsed = parseValue(trimmed);
        if (!parsed) continue;

        const px = valueToPx(trimmed);
        if (px === null) continue;

        // Negative values: check the absolute value
        const absPx = Math.abs(px);

        if (!GRID_VALUES.includes(absPx)) {
          const nearest = findNearest(absPx);
          report({
            message: messages.rejected(val, nearest),
            node: decl,
            result,
            ruleName,
            severity: 'warning',
          });
        }
      }
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default createPlugin(ruleName, ruleFunction);
