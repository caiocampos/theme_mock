"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvatarSizes = void 0;
const sizes_1 = require("../sizes");
const getAvatarSizes = (theme) => {
    const sizes = (0, sizes_1.getSizes)(theme);
    return {
        tiny: {
            fontSize: ".625rem",
            size: sizes.standard,
        },
        small: {
            fontSize: ".875rem",
            size: sizes.semi,
        },
        standard: {
            fontSize: "1rem",
            size: sizes.semiX,
        },
        large: {
            fontSize: "1rem",
            size: sizes.medium,
        },
        huge: {
            fontSize: "1.5rem",
            size: sizes.largeXX,
        },
    };
};
exports.getAvatarSizes = getAvatarSizes;
//# sourceMappingURL=index.js.map