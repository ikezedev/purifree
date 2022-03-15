"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lift4C = void 0;
exports.lift4C = function (f) { return function (a) { return function (b) { return function (c) { return function (d) {
    // return pipe(
    //   a,
    //   map(f),
    //   (f) => ap(f)(b),
    //   (f) => ap(f)(c),
    //   (f) => ap(f)(d)
    // )
    return d.ap(c.ap(b.ap(a.map(function (a) { return f(a); }))));
}; }; }; }; };
