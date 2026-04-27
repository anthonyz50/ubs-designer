/**
 * ubs/trading-region
 *
 * UBS rule: Trading colours have REVERSED meaning across regions.
 *   - Green #498100 = positive in EMEA/US, negative in APAC
 *   - Red #C81219 = negative in EMEA/US, positive in APAC
 *
 * Requires an explicit `region` prop when:
 *   1. Using a <TradingIndicator> component, OR
 *   2. Using trading colours (#498100, #C81219) in style props
 */
import { Rule } from 'eslint';
declare const rule: Rule.RuleModule;
export default rule;
