"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOpacity = void 0;
const getOpacity = (theme) => {
    const { opacity } = theme;
    return {
        ...opacity,
        "00": opacity.transparent,
        "04": opacity.lower,
        "08": opacity.veryLow,
        12: opacity.low,
        16: opacity.mediumLow,
        24: opacity.disabledLow,
        32: opacity.disabled,
        48: opacity.medium,
        56: opacity.mediumHigh,
        64: opacity.high,
        80: opacity.veryHigh,
    };
};
exports.getOpacity = getOpacity;
//# sourceMappingURL=index.js.map