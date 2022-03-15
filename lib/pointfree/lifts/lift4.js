"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lift4 = void 0;
exports.lift4 = function (f) { return function (a) { return function (b) { return function (c) { return function (d) {
    var fn = function (a) { return function (b) { return function (c) { return function (d) { return f(a, b, c, d); }; }; }; };
    return d.ap(c.ap(b.ap(a.map(function (a) { return fn(a); }))));
}; }; }; }; };
