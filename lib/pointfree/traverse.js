"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = void 0;
exports.traverse = function (of, f) { return function (traversable) {
    return traversable.traverse(of, f);
}; };
