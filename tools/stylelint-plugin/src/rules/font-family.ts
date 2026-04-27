import stylelint from 'stylelint';

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = 'ubs/font-family';

const messages = ruleMessages(ruleName, {
  rejectedMissing: () =>
    'Font family must include "Frutiger" or "Arial". Neither UBS brand font was found.',
  warningNoFrutiger: () =>
    'Font family uses "Arial" without "Frutiger". Frutiger is the primary UBS brand font; Arial should only be used as a fallback.',
});

const meta = {
  url: 'https://github.com/ubs/stylelint-plugin-ubs/blob/main/docs/rules/font-family.md',
};

interface SecondaryOptions {
  allowFallbackOnly?: boolean;
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
          allowFallbackOnly: [true, false],
        },
        optional: true,
      },
    );

    if (!validOptions) return;

    const allowFallbackOnly = secondaryOptions?.allowFallbackOnly ?? false;

    root.walkDecls('font-family', (decl) => {
      const value = decl.value.toLowerCase();

      const hasFrutiger = /frutiger/i.test(value);
      const hasArial = /arial/i.test(value);

      if (hasFrutiger) {
        // Frutiger is present — all good
        return;
      }

      if (hasArial) {
        // Arial without Frutiger
        if (!allowFallbackOnly) {
          report({
            message: messages.warningNoFrutiger(),
            node: decl,
            result,
            ruleName,
            severity: 'warning',
          });
        }
        return;
      }

      // Neither Frutiger nor Arial
      report({
        message: messages.rejectedMissing(),
        node: decl,
        result,
        ruleName,
      });
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default createPlugin(ruleName, ruleFunction);
