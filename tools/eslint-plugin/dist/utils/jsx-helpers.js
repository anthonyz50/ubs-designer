"use strict";
/**
 * JSX AST helper utilities for ESLint rules.
 * Extracts prop values, style objects, and children text from JSX nodes.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJSXElementName = getJSXElementName;
exports.findJSXAttribute = findJSXAttribute;
exports.getJSXAttributeStringValue = getJSXAttributeStringValue;
exports.hasJSXAttribute = hasJSXAttribute;
exports.getInlineStyleProperties = getInlineStyleProperties;
exports.childrenContainNumbers = childrenContainNumbers;
exports.classNameContains = classNameContains;
exports.isChartComponent = isChartComponent;
exports.getLoc = getLoc;
/**
 * Get the opening element name as a string.
 * Handles JSXIdentifier and JSXMemberExpression.
 */
function getJSXElementName(openingElement) {
    const name = openingElement.name;
    if (!name)
        return null;
    if (name.type === 'JSXIdentifier')
        return name.name;
    if (name.type === 'JSXMemberExpression') {
        const obj = getJSXElementName({ type: 'Wrapper', name: name.object });
        const prop = name.property?.name;
        return obj && prop ? `${obj}.${prop}` : null;
    }
    return null;
}
/**
 * Find a JSX attribute by name on an opening element.
 */
function findJSXAttribute(openingElement, attrName) {
    const attributes = openingElement.attributes;
    if (!Array.isArray(attributes))
        return null;
    for (const attr of attributes) {
        if (attr.type === 'JSXAttribute' &&
            attr.name?.type === 'JSXIdentifier' &&
            attr.name?.name === attrName) {
            return attr;
        }
    }
    return null;
}
/**
 * Get the static string value of a JSX attribute.
 * Returns the string if it's a simple literal, null otherwise.
 */
function getJSXAttributeStringValue(attr) {
    const value = attr.value;
    if (!value)
        return null;
    // <Foo bar="baz" />
    if (value.type === 'Literal' && typeof value.value === 'string') {
        return value.value;
    }
    // <Foo bar={"baz"} />
    if (value.type === 'JSXExpressionContainer') {
        const expr = value.expression;
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
function hasJSXAttribute(openingElement, attrName) {
    return findJSXAttribute(openingElement, attrName) !== null;
}
/**
 * Extract inline style object properties from a JSX `style` attribute.
 * Returns an array of { key, value, node } for each property.
 * Only handles style={{ ... }} (ObjectExpression).
 */
function getInlineStyleProperties(openingElement) {
    const styleAttr = findJSXAttribute(openingElement, 'style');
    if (!styleAttr)
        return [];
    const attrValue = styleAttr.value;
    if (!attrValue || attrValue.type !== 'JSXExpressionContainer')
        return [];
    const expr = attrValue.expression;
    if (!expr || expr.type !== 'ObjectExpression')
        return [];
    const properties = expr.properties;
    const result = [];
    for (const prop of properties) {
        if (prop.type !== 'Property')
            continue;
        const keyNode = prop.key;
        let key = null;
        if (keyNode.type === 'Identifier')
            key = keyNode.name;
        else if (keyNode.type === 'Literal')
            key = String(keyNode.value);
        if (!key)
            continue;
        const valNode = prop.value;
        let value = undefined;
        if (valNode.type === 'Literal')
            value = valNode.value;
        else if (valNode.type === 'TemplateLiteral' && valNode.quasis?.length === 1) {
            value = valNode.quasis[0].value?.cooked;
        }
        result.push({ key, value, valueNode: valNode, node: prop });
    }
    return result;
}
/**
 * Check if a JSX element's children contain numeric text.
 * Looks at JSXText and Literal children.
 */
function childrenContainNumbers(jsxElement) {
    const children = jsxElement.children;
    if (!Array.isArray(children))
        return false;
    for (const child of children) {
        if (child.type === 'JSXText') {
            const text = child.value;
            if (/\d/.test(text))
                return true;
        }
        if (child.type === 'JSXExpressionContainer') {
            const expr = child.expression;
            if (expr?.type === 'Literal') {
                const val = expr.value;
                if (typeof val === 'number')
                    return true;
                if (typeof val === 'string' && /\d/.test(val))
                    return true;
            }
        }
    }
    return false;
}
/**
 * Check if a className string value contains a substring (case-insensitive).
 */
function classNameContains(openingElement, substring) {
    const classAttr = findJSXAttribute(openingElement, 'className');
    if (!classAttr)
        return false;
    const val = getJSXAttributeStringValue(classAttr);
    if (!val)
        return false;
    return val.toLowerCase().includes(substring.toLowerCase());
}
/**
 * Check if a node is (likely) a chart/dataviz component.
 * Matches common naming patterns.
 */
function isChartComponent(name) {
    const lower = name.toLowerCase();
    return (lower.includes('chart') ||
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
        lower === 'donutchart');
}
/**
 * Get the source location for reporting.
 */
function getLoc(node) {
    return node.loc;
}
