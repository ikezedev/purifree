"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lift2 = void 0;
exports.lift2 = function (f) { return function (a) { return function (b) {
    var fn = function (a) { return function (b) { return f(a, b); }; };
    return b.ap(a.map(fn));
}; }; };
