"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypography = void 0;
const getTypography = (theme) => {
    const { typography } = theme;
    return {
        body: {
            regular: {
                fontFamily: `"${typography.body.regular.fontFamily}", ${typography.fallback.fontFamily}`,
                fontWeight: typography.body.regular.fontWeight,
            },
            bold: {
                fontFamily: `"${typography.body.bold.fontFamily}", ${typography.fallback.fontFamily}`,
                fontWeight: typography.body.bold.fontWeight,
            },
        },
        display: {
            fontFamily: `"${typography.display.fontFamily}", ${typography.fallback.fontFamily}`,
            fontWeight: typography.display.fontWeight,
        },
        headline: {
            fontFamily: `"${typography.headline.fontFamily}", ${typography.fallback.fontFamily}`,
            fontWeight: typography.headline.fontWeight,
        },
        fontFamily: `"${typography.fontFamily.primary}", ${typography.fontFamily.secondary}`,
        fontFamilyBrand1: `"${typography.fontFamily.branding} Display"`,
        fontFamilyBrand2: `"${typography.fontFamily.branding} Text"`,
        fontFamilyBrand3: undefined,
        fontWeightLight: 300,
        fontWeightRegular: typography.fontWeight.regular,
        fontWeightMedium: typography.fontWeight.medium,
        fontWeightBold: 700,
    };
};
exports.getTypography = getTypography;
//# sourceMappingURL=typography.js.map