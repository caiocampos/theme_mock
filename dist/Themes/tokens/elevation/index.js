"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElevation = void 0;
const getElevation = (theme) => {
    const { elevation } = theme;
    return {
        ...elevation,
        0: elevation.none,
        1: elevation.micro,
        2: elevation.tiny,
        3: elevation.small,
        4: elevation.medium,
        6: elevation.large,
        8: elevation.largeX,
        9: elevation.largeXX,
        12: elevation.huge,
        16: elevation.hugeX,
        24: elevation.hugeXX,
    };
};
exports.getElevation = getElevation;
//# sourceMappingURL=index.js.map