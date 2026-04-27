/**
 * Shared TypeScript types for the UBS Brand Validator.
 */
export type Severity = 'error' | 'warning' | 'info';
export type OutputFormat = 'text' | 'json' | 'github';
export interface ValidationIssue {
    /** Rule that generated this issue */
    rule: string;
    /** Severity level */
    severity: Severity;
    /** Human-readable message */
    message: string;
    /** File path */
    file: string;
    /** Line number (1-based), if known */
    line?: number;
    /** Column number (1-based), if known */
    column?: number;
    /** The offending value */
    value?: string;
    /** Suggested fix, if available */
    fix?: string;
}
export interface ValidationResult {
    /** File that was validated */
    file: string;
    /** All issues found */
    issues: ValidationIssue[];
    /** Number of errors */
    errorCount: number;
    /** Number of warnings */
    warningCount: number;
}
export interface RuleContext {
    /** File path being validated */
    file: string;
    /** File content */
    content: string;
    /** File type */
    fileType: 'css' | 'scss' | 'html';
    /** Whether auto-fix is enabled */
    fix: boolean;
}
export interface Rule {
    /** Unique rule identifier */
    name: string;
    /** Human-readable description */
    description: string;
    /** File types this rule applies to */
    fileTypes: Array<'css' | 'scss' | 'html'>;
    /** Run the validation rule */
    validate(context: RuleContext): ValidationIssue[];
}
export interface ValidatorConfig {
    /** Rules to enable (empty = all) */
    rules: string[];
    /** Rules to disable */
    disabledRules: string[];
    /** File patterns to ignore */
    ignore: string[];
    /** Custom colour palette additions */
    customColours: string[];
    /** Strict mode (warnings become errors) */
    strict: boolean;
}
//# sourceMappingURL=types.d.ts.map