"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpacing = void 0;
const sizes_1 = require("../sizes");
const getSpacing = (theme) => {
    const sizes = (0, sizes_1.getSizes)(theme);
    return {
        spacing: sizes.tiny,
        spacingNone: sizes.none,
        spacingMicro: sizes.micro,
        spacingTiny: sizes.tiny,
        spacingSmall: sizes.small,
        spacingStandard: sizes.standard,
        spacingSemi: sizes.semi,
        spacingLarge: sizes.medium,
        spacingHuge: sizes.large,
        spacingHugeX: sizes.hugeX,
        spacingHugeXX: sizes.hugeXX,
        spacingHugeXXX: sizes.hugeXXX,
        spacingVeryHuge: sizes.veryHuge,
    };
};
exports.getSpacing = getSpacing;
//# sourceMappingURL=index.js.map