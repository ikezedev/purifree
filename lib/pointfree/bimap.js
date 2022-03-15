"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bimap = void 0;
exports.bimap = function (f, g) { return function (fa) {
    return fa.bimap(f, g);
}; };
