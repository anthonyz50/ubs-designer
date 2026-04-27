import stylelint from 'stylelint';

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = 'ubs/font-weight';

const messages = ruleMessages(ruleName, {
  rejected: (value: string) =>
    `Font weight "${value}" is not allowed. UBS brand permits only 300 (light), 400 (normal), or 700 (bold).`,
});

const meta = {
  url: 'https://github.com/ubs/stylelint-plugin-ubs/blob/main/docs/rules/font-weight.md',
};

/** Allowed numeric weight values */
const ALLOWED_NUMERIC: ReadonlySet<string> = new Set(['300', '400', '700']);

/** Mapping of named weights to their numeric equivalents */
const ALLOWED_NAMED: ReadonlyMap<string, string> = new Map([
  ['light', '300'],
  ['normal', '400'],
  ['bold', '700'],
]);

const ruleFunction = (primary: true) => {
  return (root: stylelint.PostcssResult['root'], result: stylelint.PostcssResult) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primary,
      possible: [true],
    });

    if (!validOptions) return;

    root.walkDecls('font-weight', (decl) => {
      const value = decl.value.trim().toLowerCase();

      // Skip CSS custom properties and inherit/initial
      if (/^var\(--/.test(value) || ['inherit', 'initial', 'unset', 'revert'].includes(value)) {
        return;
      }

      // Check numeric values
      if (ALLOWED_NUMERIC.has(value)) return;

      // Check named values
      if (ALLOWED_NAMED.has(value)) return;

      report({
        message: messages.rejected(decl.value),
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
