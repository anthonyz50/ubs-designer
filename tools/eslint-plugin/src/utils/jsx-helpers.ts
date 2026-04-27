/**
 * JSX AST helper utilities for ESLint rules.
 * Extracts prop values, style objects, and children text from JSX nodes.
 */

import { AST } from 'eslint';

// We work with ESTree/JSX AST node types loosely typed to avoid
// requiring a JSX-specific parser type dependency. ESLint's rule context
// gives us these nodes when parsing JSX/TSX.

type AnyNode = Record<string, unknown> & { type: string; [key: string]: unknown };

/**
 * Get the opening element name as a string.
 * Handles JSXIdentifier and JSXMemberExpression.
 */
export function getJSXElementName(openingElement: AnyNode): string | null {
  const name = openingElement.name as AnyNode | undefined;
  if (!name) return null;
  if (name.type === 'JSXIdentifier') return name.name as string;
  if (name.type === 'JSXMemberExpression') {
    const obj = getJSXElementName({ type: 'Wrapper', name: name.object } as AnyNode);
    const prop = (name.property as AnyNode)?.name as string;
    return obj && prop ? `${obj}.${prop}` : null;
  }
  return null;
}

/**
 * Find a JSX attribute by name on an opening element.
 */
export function findJSXAttribute(
  openingElement: AnyNode,
  attrName: string,
): AnyNode | null {
  const attributes = openingElement.attributes as AnyNode[] | undefined;
  if (!Array.isArray(attributes)) return null;

  for (const attr of attributes) {
    if (
      attr.type === 'JSXAttribute' &&
      (attr.name as AnyNode)?.type === 'JSXIdentifier' &&
      (attr.name as AnyNode)?.name === attrName
    ) {
      return attr;
    }
  }
  return null;
}

/**
 * Get the static string value of a JSX attribute.
 * Returns the string if it's a simple literal, null otherwise.
 */
export function getJSXAttributeStringValue(attr: AnyNode): string | null {
  const value = attr.value as AnyNode | null;
  if (!value) return null;

  // <Foo bar="baz" />
  if (value.type === 'Literal' && typeof value.value === 'string') {
    return value.value;
  }

  // <Foo bar={"baz"} />
  if (value.type === 'JSXExpressionContainer') {
    const expr = value.expression as AnyNode;
    if (expr?.type === 'Literal' && typeof expr.value === 'string') {
      return expr.value;
    }
  }

  return null;
}

/**
 * Check if a JSX attribute has a truthy presence (exists, even without value).
 * <Foo bar /> → true
 */
export function hasJSXAttribute(openingElement: AnyNode, attrName: string): boolean {
  return findJSXAttribute(openingElement, attrName) !== null;
}

/**
 * Extract inline style object properties from a JSX `style` attribute.
 * Returns an array of { key, value, node } for each property.
 * Only handles style={{ ... }} (ObjectExpression).
 */
export function getInlineStyleProperties(
  openingElement: AnyNode,
): Array<{ key: string; value: unknown; valueNode: AnyNode; node: AnyNode }> {
  const styleAttr = findJSXAttribute(openingElement, 'style');
  if (!styleAttr) return [];

  const attrValue = styleAttr.value as AnyNode | null;
  if (!attrValue || attrValue.type !== 'JSXExpressionContainer') return [];

  const expr = attrValue.expression as AnyNode;
  if (!expr || expr.type !== 'ObjectExpression') return [];

  const properties = expr.properties as AnyNode[];
  const result: Array<{ key: string; value: unknown; valueNode: AnyNode; node: AnyNode }> = [];

  for (const prop of properties) {
    if (prop.type !== 'Property') continue;
    const keyNode = prop.key as AnyNode;
    let key: string | null = null;
    if (keyNode.type === 'Identifier') key = keyNode.name as string;
    else if (keyNode.type === 'Literal') key = String(keyNode.value);
    if (!key) continue;

    const valNode = prop.value as AnyNode;
    let value: unknown = undefined;
    if (valNode.type === 'Literal') value = valNode.value;
    else if (valNode.type === 'TemplateLiteral' && (valNode.quasis as AnyNode[])?.length === 1) {
      value = ((valNode.quasis as AnyNode[])[0].value as Record<string, string>)?.cooked;
    }

    result.push({ key, value, valueNode: valNode, node: prop });
  }

  return result;
}

/**
 * Check if a JSX element's children contain numeric text.
 * Looks at JSXText and Literal children.
 */
export function childrenContainNumbers(jsxElement: AnyNode): boolean {
  const children = jsxElement.children as AnyNode[] | undefined;
  if (!Array.isArray(children)) return false;

  for (const child of children) {
    if (child.type === 'JSXText') {
      const text = child.value as string;
      if (/\d/.test(text)) return true;
    }
    if (child.type === 'JSXExpressionContainer') {
      const expr = child.expression as AnyNode;
      if (expr?.type === 'Literal') {
        const val = expr.value;
        if (typeof val === 'number') return true;
        if (typeof val === 'string' && /\d/.test(val)) return true;
      }
    }
  }
  return false;
}

/**
 * Check if a className string value contains a substring (case-insensitive).
 */
export function classNameContains(openingElement: AnyNode, substring: string): boolean {
  const classAttr = findJSXAttribute(openingElement, 'className');
  if (!classAttr) return false;
  const val = getJSXAttributeStringValue(classAttr);
  if (!val) return false;
  return val.toLowerCase().includes(substring.toLowerCase());
}

/**
 * Check if a node is (likely) a chart/dataviz component.
 * Matches common naming patterns.
 */
export function isChartComponent(name: string): boolean {
  const lower = name.toLowerCase();
  return (
    lower.includes('chart') ||
    lower.includes('dataviz') ||
    lower.includes('datavis') ||
    lower.includes('graph') ||
    lower.includes('plot') ||
    lower.includes('visualization') ||
    lower.includes('visualisation') ||
    lower === 'barchart' ||
    lower === 'linechart' ||
    lower === 'areachart' ||
    lower === 'scatterchart' ||
    lower === 'piechart' ||
    lower === 'donutchart'
  );
}

/**
 * Get the source location for reporting.
 */
export function getLoc(node: AnyNode): AST.SourceLocation | undefined {
  return node.loc as AST.SourceLocation | undefined;
}
