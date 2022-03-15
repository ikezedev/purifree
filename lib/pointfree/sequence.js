"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequence = void 0;
exports.sequence = function (of) { return function (seq) {
    return seq.sequence(of);
}; };
