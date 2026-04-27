import stylelint from 'stylelint';

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = 'ubs/no-gradients';

const messages = ruleMessages(ruleName, {
  rejected: (gradient: string) =>
    `Gradient "${gradient}" is not allowed. UBS data visualisation guidelines prohibit gradient backgrounds.`,
});

const meta = {
  url: 'https://github.com/ubs/stylelint-plugin-ubs/blob/main/docs/rules/no-gradients.md',
};

/** Properties that can contain gradient values */
const GRADIENT_PROPERTIES: ReadonlySet<string> = new Set([
  'background',
  'background-image',
]);

/** Gradient function patterns */
const GRADIENT_PATTERN = /\b(linear-gradient|radial-gradient|conic-gradient|repeating-linear-gradient|repeating-radial-gradient|repeating-conic-gradient)\s*\(/i;

const ruleFunction = (primary: true) => {
  return (root: stylelint.PostcssResult['root'], result: stylelint.PostcssResult) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primary,
      possible: [true],
    });

    if (!validOptions) return;

    root.walkDecls((decl) => {
      const prop = decl.prop.toLowerCase();

      if (!GRADIENT_PROPERTIES.has(prop)) return;

      const match = decl.value.match(GRADIENT_PATTERN);
      if (match) {
        report({
          message: messages.rejected(match[1]),
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
