"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
exports.filter = function (where) { return function (filterable) {
    return filterable.filter(where);
}; };
