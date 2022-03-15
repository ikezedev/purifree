"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequenceTFlex = exports.sequenceT = void 0;
var List_1 = require("../List");
// type test<T extends ApKind<'Either', any>[]> = T
// type smh = test<[Either<never, number>]>
exports.sequenceT = function (of) { return function () {
    var t = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        t[_i] = arguments[_i];
    }
    return List_1.List(t).sequence(of);
}; };
exports.sequenceTFlex = function (of) { return function () {
    var t = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        t[_i] = arguments[_i];
    }
    return List_1.List(t).sequence(of);
}; };
