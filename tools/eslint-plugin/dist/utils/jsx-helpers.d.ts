/**
 * JSX AST helper utilities for ESLint rules.
 * Extracts prop values, style objects, and children text from JSX nodes.
 */
import { AST } from 'eslint';
type AnyNode = Record<string, unknown> & {
    type: string;
    [key: string]: unknown;
};
/**
 * Get the opening element name as a string.
 * Handles JSXIdentifier and JSXMemberExpression.
 */
export declare function getJSXElementName(openingElement: AnyNode): string | null;
/**
 * Find a JSX attribute by name on an opening element.
 */
export declare function findJSXAttribute(openingElement: AnyNode, attrName: string): AnyNode | null;
/**
 * Get the static string value of a JSX attribute.
 * Returns the string if it's a simple literal, null otherwise.
 */
export declare function getJSXAttributeStringValue(attr: AnyNode): string | null;
/**
 * Check if a JSX attribute has a truthy presence (exists, even without value).
 * <Foo bar /> → true
 */
export declare function hasJSXAttribute(openingElement: AnyNode, attrName: string): boolean;
/**
 * Extract inline style object properties from a JSX `style` attribute.
 * Returns an array of { key, value, node } for each property.
 * Only handles style={{ ... }} (ObjectExpression).
 */
export declare function getInlineStyleProperties(openingElement: AnyNode): Array<{
    key: string;
    value: unknown;
    valueNode: AnyNode;
    node: AnyNode;
}>;
/**
 * Check if a JSX element's children contain numeric text.
 * Looks at JSXText and Literal children.
 */
export declare function childrenContainNumbers(jsxElement: AnyNode): boolean;
/**
 * Check if a className string value contains a substring (case-insensitive).
 */
export declare function classNameContains(openingElement: AnyNode, substring: string): boolean;
/**
 * Check if a node is (likely) a chart/dataviz component.
 * Matches common naming patterns.
 */
export declare function isChartComponent(name: string): boolean;
/**
 * Get the source location for reporting.
 */
export declare function getLoc(node: AnyNode): AST.SourceLocation | undefined;
export {};
