"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extend = void 0;
exports.extend = function (f) { return function (fa) {
    return fa.extend(f);
}; };
