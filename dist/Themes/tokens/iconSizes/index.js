"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIconSizes = void 0;
const sizes_1 = require("../sizes");
const getIconSizes = (theme) => {
    const sizes = (0, sizes_1.getSizes)(theme);
    return {
        micro: sizes.small,
        tiny: sizes.standard,
        small: sizes.semi,
        standard: sizes.medium,
        medium: sizes.large,
        large: sizes.largeX,
        largex: sizes.huge,
        largeX: sizes.huge,
        largexx: sizes.hugeX,
        largeXX: sizes.hugeX,
        huge: sizes.hugeXX,
        hugex: sizes.hugeXXX,
        hugeX: sizes.hugeXXX,
        hugexx: sizes.veryHuge,
        hugeXX: sizes.veryHuge,
    };
};
exports.getIconSizes = getIconSizes;
//# sourceMappingURL=index.js.map