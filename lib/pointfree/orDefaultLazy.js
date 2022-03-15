"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orDefaultLazy = void 0;
exports.orDefaultLazy = function (getDefaultValue) { return function (fa) {
    return fa.orDefaultLazy(getDefaultValue);
}; };
