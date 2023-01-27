"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseShadows = void 0;
const styles_1 = require("@material-ui/core/styles");
const parseShadows = (shadows) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const outShadows = [];
    (0, styles_1.createTheme)({}).shadows.forEach((shadow, index) => {
        if (shadows[String(index)]) {
            outShadows.push(shadows[String(index)]);
        }
        else {
            outShadows.push(shadow);
        }
    });
    return outShadows;
};
exports.parseShadows = parseShadows;
exports.default = exports.parseShadows;
//# sourceMappingURL=parseShadows.js.map