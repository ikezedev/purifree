"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ap = void 0;
exports.ap = function (other) { return function (fa) {
    return fa.ap(other);
}; };
