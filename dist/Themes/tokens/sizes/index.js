"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSizes = void 0;
const deprecatedSizes_1 = require("./deprecatedSizes");
const getSizes = (theme) => {
    const { size } = theme;
    return {
        ...(0, deprecatedSizes_1.getDeprecatedSizes)(theme),
        ...size,
    };
};
exports.getSizes = getSizes;
//# sourceMappingURL=index.js.map