"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orDefault = void 0;
exports.orDefault = function (defaultValue) { return function (fa) {
    return fa.orDefault(defaultValue);
}; };
