import React from 'react';
import { z } from 'zod';
import EmailMarkdown from './EmailMarkdown';
const FONT_FAMILY_SCHEMA = z
    .enum([
    'MODERN_SANS',
    'BOOK_SANS',
    'ORGANIC_SANS',
    'GEOMETRIC_SANS',
    'HEAVY_SANS',
    'ROUNDED_SANS',
    'MODERN_SERIF',
    'BOOK_SERIF',
    'MONOSPACE',
])
    .nullable()
    .optional();
function getFontFamily(fontFamily) {
    switch (fontFamily) {
        case 'MODERN_SANS':
            return '"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif';
        case 'BOOK_SANS':
            return 'Optima, Candara, "Noto Sans", source-sans-pro, sans-serif';
        case 'ORGANIC_SANS':
            return 'Seravek, "Gill Sans Nova", Ubuntu, Calibri, "DejaVu Sans", source-sans-pro, sans-serif';
        case 'GEOMETRIC_SANS':
            return 'Avenir, "Avenir Next LT Pro", Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif';
        case 'HEAVY_SANS':
            return 'Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif';
        case 'ROUNDED_SANS':
            return 'ui-rounded, "Hiragino Maru Gothic ProN", Quicksand, Comfortaa, Manjari, "Arial Rounded MT Bold", Calibri, source-sans-pro, sans-serif';
        case 'MODERN_SERIF':
            return 'Charter, "Bitstream Charter", "Sitka Text", Cambria, serif';
        case 'BOOK_SERIF':
            return '"Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, serif';
        case 'MONOSPACE':
            return '"Nimbus Mono PS", "Courier New", "Cutive Mono", monospace';
    }
    return undefined;
}
const COLOR_SCHEMA = z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/)
    .nullable()
    .optional();
const PADDING_SCHEMA = z
    .object({
    top: z.number(),
    bottom: z.number(),
    right: z.number(),
    left: z.number(),
})
    .optional()
    .nullable();
const getPadding = (padding) => padding ? `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px` : undefined;
export const TextPropsSchema = z.object({
    style: z
        .object({
        color: COLOR_SCHEMA,
        backgroundColor: COLOR_SCHEMA,
        fontSize: z.number().gte(0).optional().nullable(),
        fontFamily: FONT_FAMILY_SCHEMA,
        fontWeight: z.enum(['bold', 'normal']).optional().nullable(),
        textAlign: z.enum(['left', 'center', 'right']).optional().nullable(),
        padding: PADDING_SCHEMA,
    })
        .optional()
        .nullable(),
    props: z
        .object({
        markdown: z.boolean().optional().nullable(),
        text: z.string().optional().nullable(),
    })
        .optional()
        .nullable(),
});
export const TextPropsDefaults = {
    text: '',
};
export function Text({ style, props }) {
    var _a, _b, _c, _d, _e, _f;
    const wStyle = {
        color: (_a = style === null || style === void 0 ? void 0 : style.color) !== null && _a !== void 0 ? _a : undefined,
        backgroundColor: (_b = style === null || style === void 0 ? void 0 : style.backgroundColor) !== null && _b !== void 0 ? _b : undefined,
        fontSize: (_c = style === null || style === void 0 ? void 0 : style.fontSize) !== null && _c !== void 0 ? _c : undefined,
        fontFamily: getFontFamily(style === null || style === void 0 ? void 0 : style.fontFamily),
        fontWeight: (_d = style === null || style === void 0 ? void 0 : style.fontWeight) !== null && _d !== void 0 ? _d : undefined,
        textAlign: (_e = style === null || style === void 0 ? void 0 : style.textAlign) !== null && _e !== void 0 ? _e : undefined,
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
    };
    const text = (_f = props === null || props === void 0 ? void 0 : props.text) !== null && _f !== void 0 ? _f : TextPropsDefaults.text;
    if (props === null || props === void 0 ? void 0 : props.markdown) {
        return React.createElement(EmailMarkdown, { style: wStyle, markdown: text });
    }
    return React.createElement("div", { style: wStyle }, text);
}
//# sourceMappingURL=index.js.map