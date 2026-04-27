/**
 * ubs/no-red-numbers
 *
 * UBS brand rule: Red must NEVER be used for numbers.
 * Detects when JSX elements styled with UBS Red (#E60000, #D83B31, #FE6F5D)
 * or colour="red" contain numeric children.
 */
import { Rule } from 'eslint';
declare const rule: Rule.RuleModule;
export default rule;
