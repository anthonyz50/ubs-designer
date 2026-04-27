"use strict";
/**
 * ISO format definitions with UBS brand specifications.
 *
 * All dimensions in mm unless otherwise noted.
 * Impulse width in pt, impulse spacing in mm.
 * Logo size as percentage of page width.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOUR_PALETTES = exports.FORMAT_SPECS = void 0;
exports.getFormatSpec = getFormatSpec;
exports.getColourPalette = getColourPalette;
/**
 * A4 is the reference format for impulse calculations.
 * Other formats scale proportionally based on width ratio.
 */
const A4_WIDTH = 210;
const A4_IMPULSE_WIDTH_PT = 4.5;
const A4_IMPULSE_SPACING_MM = 7;
function scaleImpulse(widthMm) {
    const ratio = widthMm / A4_WIDTH;
    return {
        impulseWidth: parseFloat((A4_IMPULSE_WIDTH_PT * ratio).toFixed(2)),
        impulseSpacing: parseFloat((A4_IMPULSE_SPACING_MM * ratio).toFixed(2)),
    };
}
exports.FORMAT_SPECS = {
    A0: {
        name: 'A0',
        width: 841,
        height: 1189,
        margin: 62.1,
        ...scaleImpulse(841),
        logoSize: 104,
    },
    A1: {
        name: 'A1',
        width: 594,
        height: 841,
        margin: 44.2,
        ...scaleImpulse(594),
        logoSize: 74,
    },
    A2: {
        name: 'A2',
        width: 420,
        height: 594,
        margin: 31,
        ...scaleImpulse(420),
        logoSize: 52,
    },
    A3: {
        name: 'A3',
        width: 297,
        height: 420,
        margin: 22.1,
        ...scaleImpulse(297),
        logoSize: 37,
    },
    A4: {
        name: 'A4',
        width: 210,
        height: 297,
        margin: 15.5,
        impulseWidth: A4_IMPULSE_WIDTH_PT,
        impulseSpacing: A4_IMPULSE_SPACING_MM,
        logoSize: 26,
    },
    A5: {
        name: 'A5',
        width: 148,
        height: 210,
        margin: 12.5,
        ...scaleImpulse(148),
        logoSize: 21,
    },
    'A6-5': {
        name: 'A6-5',
        width: 120,
        height: 175,
        margin: 12.5,
        ...scaleImpulse(120),
        logoSize: 21,
    },
    A6: {
        name: 'A6',
        width: 105,
        height: 148,
        margin: 11,
        ...scaleImpulse(105),
        logoSize: 18,
    },
    A7: {
        name: 'A7',
        width: 74,
        height: 105,
        margin: 9,
        ...scaleImpulse(74),
        logoSize: 15,
    },
    A8: {
        name: 'A8',
        width: 52,
        height: 74,
        margin: 6,
        ...scaleImpulse(52),
        logoSize: 10,
    },
};
/**
 * Colour direction palettes.
 * Values are UBS brand hex colours.
 */
exports.COLOUR_PALETTES = {
    gray: {
        name: 'gray',
        colours: {
            'white': '#FFFFFF',
            'pastel-i': '#F0EFED',
            'gray-i': '#D5D4D1',
            'gray-ii': '#BBBAB7',
            'gray-iii': '#A09F9C',
            'gray-iv': '#868582',
            'gray-v': '#6C6B68',
            'gray-vi': '#51504E',
            'black': '#000000',
        },
    },
    bordeaux: {
        name: 'bordeaux',
        colours: {
            'white': '#FFFFFF',
            'pastel-i': '#F0EFED',
            'gray-i': '#D5D4D1',
            'gray-ii': '#BBBAB7',
            'gray-iii': '#A09F9C',
            'gray-iv': '#868582',
            'gray-v': '#6C6B68',
            'gray-vi': '#51504E',
            'black': '#000000',
            'ubs-red': '#E60000',
            'bordeaux-i': '#A3083A',
            'bordeaux-ii': '#7A0A30',
            'bordeaux-iii': '#520C25',
        },
    },
    bronze: {
        name: 'bronze',
        colours: {
            'white': '#FFFFFF',
            'pastel-i': '#F0EFED',
            'pastel-ii': '#E8E4DE',
            'gray-i': '#D5D4D1',
            'gray-ii': '#BBBAB7',
            'gray-iii': '#A09F9C',
            'gray-iv': '#868582',
            'gray-v': '#6C6B68',
            'gray-vi': '#51504E',
            'black': '#000000',
            'bronze-i': '#C4A882',
            'bronze-ii': '#9E7D54',
            'bronze-iii': '#6E5432',
        },
    },
};
function getFormatSpec(format) {
    return exports.FORMAT_SPECS[format];
}
function getColourPalette(direction) {
    return exports.COLOUR_PALETTES[direction];
}
//# sourceMappingURL=formats.js.map