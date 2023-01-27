"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTheme = void 0;
const parseShadows_1 = require("./parseShadows");
const parseTheme_1 = require("./theme/parseTheme");
const parseThemeWebBase = (theme) => {
    const { shadows } = theme;
    return {
        ...theme,
        shadows: (0, parseShadows_1.parseShadows)(shadows),
        typography: theme.typography,
    };
};
const parseTheme = (theme) => {
    return parseThemeWebBase((0, parseTheme_1.parseTheme)(theme));
};
exports.parseTheme = parseTheme;
exports.default = exports.parseTheme;
//# sourceMappingURL=parseTheme.js.map