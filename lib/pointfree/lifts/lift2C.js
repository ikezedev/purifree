"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lift2C = void 0;
exports.lift2C = function (f) { return function (a) { return function (b) {
    return b.ap(a.map(f));
}; }; };
