"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lift3 = void 0;
exports.lift3 = function (f) { return function (a) { return function (b) { return function (c) {
    var fn = function (a) { return function (b) { return function (c) { return f(a, b, c); }; }; };
    return c.ap(b.ap(a.map(function (a) { return fn(a); })));
}; }; }; };
