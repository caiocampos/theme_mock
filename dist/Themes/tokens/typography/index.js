"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFontSize = void 0;
const getFontSize = (theme) => ({
    h1: theme.heading1,
    h2: theme.heading2,
    h3: theme.heading3,
    h4: theme.heading4,
    h5: theme.heading5,
    h6: theme.heading6,
    subtitle1: theme.subtitle1,
    subtitle2: theme.subtitle2,
    body1: theme.body1,
    body2: theme.body2,
    button: theme.button.label,
    caption: theme.caption,
    overline: theme.overline,
});
exports.getFontSize = getFontSize;
//# sourceMappingURL=index.js.map