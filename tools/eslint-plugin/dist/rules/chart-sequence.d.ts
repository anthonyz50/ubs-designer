/**
 * ubs/chart-sequence
 *
 * When chart colours are specified manually (not via colourSequence prop),
 * validates they follow the correct UBS 20-colour chart sequence in order.
 * Colours must not be skipped or reordered.
 */
import { Rule } from 'eslint';
declare const rule: Rule.RuleModule;
export default rule;
