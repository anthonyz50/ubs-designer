/**
 * ubs/impulse-rules
 *
 * UBS brand rule: No centre with keyline.
 * When using <Impulse> component, warns if nested inside a
 * centred container (text-align: center style or className).
 */
import { Rule } from 'eslint';
declare const rule: Rule.RuleModule;
export default rule;
