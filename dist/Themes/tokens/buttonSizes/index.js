"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getButtonSizes = void 0;
const sizes_1 = require("../sizes");
const getButtonSizes = (theme) => {
    const sizes = (0, sizes_1.getSizes)(theme);
    return {
        small: {
            paddingTop: sizes.none,
            paddingRight: sizes.tiny,
            paddingBottom: sizes.none,
            paddingLeft: sizes.tiny,
            height: sizes.semi,
        },
        medium: {
            height: sizes.semiX,
            paddingTop: sizes.none,
            paddingRight: sizes.small - sizes.micro,
            paddingBottom: sizes.none,
            paddingLeft: sizes.small - sizes.micro,
        },
        large: {
            paddingTop: sizes.none,
            paddingRight: sizes.small,
            paddingBottom: sizes.none,
            paddingLeft: sizes.small,
            height: sizes.medium,
        },
    };
};
exports.getButtonSizes = getButtonSizes;
//# sourceMappingURL=index.js.map