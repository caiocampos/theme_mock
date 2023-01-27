"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeprecatedSizes = void 0;
const getDeprecatedSizes = (theme) => {
    const { size } = theme;
    return {
        semix: size.semiX,
        mediumx: size.mediumX,
        largex: size.largeX,
        largexx: size.largeXX,
        largexxx: size.largeXXX,
        hugex: size.hugeX,
        hugexx: size.hugeXX,
        hugexxx: size.hugeXXX,
        veryhuge: size.veryHuge,
    };
};
exports.getDeprecatedSizes = getDeprecatedSizes;
//# sourceMappingURL=deprecatedSizes.js.map