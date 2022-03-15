"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEither = void 0;
var __1 = require("..");
var function_utils_1 = require("../utils/function-utils");
exports.toEither = function (left) { return function (fa) {
    return fa.toEither(left);
}; };
var toMaybeTest1 = function_utils_1.pipe(__1.Just(0), exports.toEither(new Error('bad')));
