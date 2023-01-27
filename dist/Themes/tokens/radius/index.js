"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRadius = void 0;
const getRadius = (theme) => {
    const { borderRadius } = theme;
    return {
        ...borderRadius,
        circle: "50%",
    };
};
exports.getRadius = getRadius;
//# sourceMappingURL=index.js.map