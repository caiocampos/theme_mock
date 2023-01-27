"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColorTokens = void 0;
const getColorTokens = (theme) => {
    const { color } = theme;
    return {
        colorPrimary: color.primary,
        colorOnPrimary: color.onPrimary,
        colorPrimaryLight: color.primaryLight,
        colorOnPrimaryLight: color.onPrimaryLight,
        colorPrimaryDark: color.primaryDark,
        colorOnPrimaryDark: color.onPrimaryDark,
        colorSecondary: color.secondary,
        colorOnSecondary: color.onSecondary,
        colorSecondaryLight: color.secondaryLight,
        colorOnSecondaryLight: color.onSecondaryLight,
        colorSecondaryDark: color.secondaryDark,
        colorOnSecondaryDark: color.onSecondaryDark,
        colorBackground: color.background,
        colorOnBackground: color.onBackground,
        colorSurface: color.surface,
        colorOnSurface: color.onSurface,
        colorHighlight: color.highlight,
        colorHighEmphasis: color.highEmphasis,
        colorMediumEmphasis: color.mediumEmphasis,
        colorLowEmphasis: color.lowEmphasis,
        colorLink: color.link,
        colorOnLink: color.onLink,
        colorSuccess: color.success,
        colorOnSuccess: color.onSuccess,
        colorWarning: color.warning,
        colorOnWarning: color.onWarning,
        colorAlert: color.alert,
        colorOnAlert: color.onAlert,
    };
};
exports.getColorTokens = getColorTokens;
//# sourceMappingURL=index.js.map