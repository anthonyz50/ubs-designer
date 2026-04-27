import stylelint from 'stylelint';
import { valueToPx, parseValue } from '../utils/unit-utils';

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = 'ubs/min-font-size';

const messages = ruleMessages(ruleName, {
  rejected: (value: string, minimum: string) =>
    `Font size "${value}" is below the minimum of ${minimum}. Ensure text meets WCAG readability guidelines.`,
});

const meta = {
  url: 'https://github.com/ubs/stylelint-plugin-ubs/blob/main/docs/rules/min-font-size.md',
};

interface SecondaryOptions {
  minimum?: string;
}

/** Default minimum font size in pixels */
const DEFAULT_MINIMUM_PX = 14;
const DEFAULT_MINIMUM_LABEL = '14px';

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
          minimum: [
            (value: unknown) => typeof value === 'string' && parseValue(value as string) !== null,
          ],
        },
        optional: true,
      },
    );

    if (!validOptions) return;

    const minimumStr = secondaryOptions?.minimum ?? DEFAULT_MINIMUM_LABEL;
    const minimumPx = valueToPx(minimumStr) ?? DEFAULT_MINIMUM_PX;

    root.walkDecls('font-size', (decl) => {
      const value = decl.value.trim().toLowerCase();

      // Skip CSS custom properties and keywords
      if (
        /^var\(--/.test(value) ||
        ['inherit', 'initial', 'unset', 'revert', 'smaller', 'larger',
         'xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'].includes(value)
      ) {
        return;
      }

      const px = valueToPx(value);
      if (px === null) return;

      if (px < minimumPx) {
        report({
          message: messages.rejected(decl.value, minimumStr),
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default createPlugin(ruleName, ruleFunction);
