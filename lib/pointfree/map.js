"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
exports.map = function (f) { return function (fa) {
    return fa.map(f);
}; };
