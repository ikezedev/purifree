"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = void 0;
exports.reduce = function (reducer, initialValue) { return function (reduceable) {
    return reduceable.reduce(reducer, initialValue);
}; };
