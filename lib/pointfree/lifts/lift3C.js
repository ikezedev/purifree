"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lift3C = void 0;
exports.lift3C = function (f) { return function (a) { return function (b) { return function (c) {
    return c.ap(b.ap(a.map(function (a) { return f(a); })));
}; }; }; };
