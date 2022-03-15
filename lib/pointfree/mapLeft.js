"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapLeft = void 0;
exports.mapLeft = function (f) { return function (fa) {
    return fa.mapLeft(f);
}; };
