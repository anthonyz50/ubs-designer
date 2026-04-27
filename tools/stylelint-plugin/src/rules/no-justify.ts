import stylelint from 'stylelint';

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = 'ubs/no-justify';

const messages = ruleMessages(ruleName, {
  rejectedJustify: () =>
    'The value "text-align: justify" is not allowed under UBS typography rules.',
  rejectedRight: () =>
    'The value "text-align: right" is not allowed under UBS typography rules.',
});

const meta = {
  url: 'https://github.com/ubs/stylelint-plugin-ubs/blob/main/docs/rules/no-justify.md',
};

const ruleFunction = (primary: true) => {
  return (root: stylelint.PostcssResult['root'], result: stylelint.PostcssResult) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primary,
      possible: [true],
    });

    if (!validOptions) return;

    root.walkDecls('text-align', (decl) => {
      const value = decl.value.trim().toLowerCase();

      if (value === 'justify') {
        report({
          message: messages.rejectedJustify(),
          node: decl,
          result,
          ruleName,
        });
      }

      if (value === 'right') {
        report({
          message: messages.rejectedRight(),
          node: decl,
          result,
          ruleName,
        });
      }
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default createPlugin(ruleName, ruleFunction);
