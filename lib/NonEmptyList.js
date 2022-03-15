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
exports.NonEmptyList = exports.NON_EMPTY_LIST_URI = exports.concat = void 0;
var List_1 = require("./List");
var Maybe_1 = require("./Maybe");
exports.concat = function (arr) { return function (arr2) { return arr.concat(arr2); }; };
exports.NON_EMPTY_LIST_URI = 'NonEmptyList';
function NonEmptyListConstructor() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 1 && Array.isArray(args[0]) && args[0].length > 0) {
        return List_1.ListImpl.from(args[0]);
    }
    return List_1.ListImpl.of.apply(List_1.ListImpl, __spread(args));
}
exports.NonEmptyList = Object.assign(NonEmptyListConstructor, {
    of: function (val) { return new List_1.ListImpl(val); },
    fromArray: function (source) {
        return exports.NonEmptyList.isNonEmpty(source) ? Maybe_1.Just(exports.NonEmptyList(source)) : Maybe_1.Nothing;
    },
    unsafeCoerce: function (source) {
        if (exports.NonEmptyList.isNonEmpty(source)) {
            return source;
        }
        throw new Error('NonEmptyList#unsafeCoerce was ran on an empty array');
    },
    fromTuple: function (source) {
        return exports.NonEmptyList(source.toArray());
    },
    head: function (list) { return list[0]; },
    last: function (list) { return list[list.length - 1]; },
    isNonEmpty: function (list) { return list.length > 0; },
    tail: function (list) { return list.slice(1); }
});
