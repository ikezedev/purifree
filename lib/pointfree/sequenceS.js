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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequenceSFlex = exports.sequenceS = void 0;
exports.sequenceS = function (of) { return function (r) {
    var entries = Object.entries(r);
    var newObj = of({});
    var add = function (key) {
        return of(function (obj) { return function (value) { return ((obj[key] = value), obj); }; });
    };
    // prev: Right({}), curr: ["name",Right("jason")]
    // Right({}).ap(add(key)) :: Right((value) => (obj[key]=value,obj))
    // Right({}).app(add(key)).ap(Right("jason")) :: Right({ name: "jason" })
    var res = entries.reduce(function (prev, _a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        // TODO: better implementation
        var val1 = prev.ap(add(key));
        var val2 = val1.ap(value.map(function (val) { return function (f) { return f(val); }; }));
        return val2;
    }, newObj);
    return res;
}; };
exports.sequenceSFlex = function (of) { return function (r) {
    return exports.sequenceS(of)(r);
}; };
