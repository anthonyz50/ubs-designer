import stylelint from 'stylelint';
import {
  COLOUR_PROPERTIES,
  extractColourValues,
  isInPalette,
  isCustomProperty,
  isUbsCustomProperty,
} from '../utils/colour-utils';

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = 'ubs/colour-palette';

const messages = ruleMessages(ruleName, {
  rejected: (value: string) =>
    `Colour "${value}" is not in the UBS brand palette. Use an approved UBS colour or a var(--ubs-*) custom property.`,
  rejectedCustomProp: (value: string) =>
    `Custom property "${value}" is not UBS-namespaced. Use var(--ubs-*) for colour values.`,
});

const meta = {
  url: 'https://github.com/ubs/stylelint-plugin-ubs/blob/main/docs/rules/colour-palette.md',
};

interface SecondaryOptions {
  severity?: 'error' | 'warning';
  allowCustomProperties?: boolean;
}

const ruleFunction = (
  primary: true,
  secondaryOptions?: SecondaryOptions,
) => {
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
          severity: ['error', 'warning'],
          allowCustomProperties: [true, false],
        },
        optional: true,
      },
    );

    if (!validOptions) return;

    const allowCustomProperties = secondaryOptions?.allowCustomProperties ?? true;

    root.walkDecls((decl) => {
      const prop = decl.prop.toLowerCase();

      // Check if this property accepts colour values
      if (!COLOUR_PROPERTIES.has(prop)) return;

      const value = decl.value;

      // Skip if the entire value is a custom property
      if (isCustomProperty(value)) {
        if (allowCustomProperties) return;
        if (!isUbsCustomProperty(value)) {
          report({
            message: messages.rejectedCustomProp(value),
            node: decl,
            result,
            ruleName,
          });
        }
        return;
      }

      // Extract and check individual colour values
      const colours = extractColourValues(value);

      for (const colour of colours) {
        if (!isInPalette(colour)) {
          report({
            message: messages.rejected(colour),
            node: decl,
            result,
            ruleName,
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
