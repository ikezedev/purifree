"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainLeft = void 0;
exports.chainLeft = function (f) { return function (fa) {
    return fa.chainLeft(f);
}; };
