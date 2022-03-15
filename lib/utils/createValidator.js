"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAsyncValidator = exports.createValidator = void 0;
var __1 = require("..");
var Either_1 = require("../Either");
var function_utils_1 = require("./function-utils");
var swap_1 = require("../pointfree/swap");
exports.createValidator = function (validator) {
    var validators = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        validators[_i - 1] = arguments[_i];
    }
    return function (arg) {
        var results = __spread([validator], validators).map(function (validator) {
            return validator(arg).swap();
        });
        return function_utils_1.pipe(results, __1.sequence(Either_1.Either.of), swap_1.swap());
    };
};
exports.createAsyncValidator = function (validator) {
    var validators = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        validators[_i - 1] = arguments[_i];
    }
    return function (arg) {
        var results = __spread([validator], validators).map(function (validator) {
            return validator(arg).swap();
        });
        return function_utils_1.pipe(results, __1.sequence(__1.EitherAsync.of), swap_1.swap());
    };
};
