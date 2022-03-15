"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.List = exports.ListImpl = exports.LIST_URI = void 0;
var Tuple_1 = require("./Tuple");
var Maybe_1 = require("./Maybe");
var Function_1 = require("./Function");
/** Returns Just the first element of an array or Nothing if there is none. If you don't want to work with a Maybe but still keep type safety, check out `List` */
var head = function (list) {
    return list.length > 0 ? Maybe_1.Just(list[0]) : Maybe_1.Nothing;
};
/** Returns Just the last element of an array or Nothing if there is none */
var last = function (list) {
    return list.length > 0 ? Maybe_1.Just(list[list.length - 1]) : Maybe_1.Nothing;
};
/** Returns all elements of an array except the first */
var tail = function (list) {
    return list.length > 0 ? Maybe_1.Just(list.slice(1)) : Maybe_1.Nothing;
};
/** Returns all elements of an array except the last */
var init = function (list) {
    return list.length > 0 ? Maybe_1.Just(list.slice(0, -1)) : Maybe_1.Nothing;
};
/** Returns a tuple of an array's head and tail */
var uncons = function (list) {
    return list.length > 0 ? Maybe_1.Just(Tuple_1.Tuple(list[0], list.slice(1))) : Maybe_1.Nothing;
};
/* Returns the sum of all numbers inside an array */
var sum = function (list) { return list.reduce(function (acc, x) { return acc + x; }, 0); };
function find(f, list) {
    switch (arguments.length) {
        case 1:
            return function (list) { return find(f, list); };
        default:
            return Maybe_1.Maybe.fromNullable(list.find(f));
    }
}
function findIndex(f, list) {
    switch (arguments.length) {
        case 1:
            return function (list) { return findIndex(f, list); };
        default:
            return Maybe_1.Maybe.fromPredicate(function (x) { return x !== -1; }, list.findIndex(f));
    }
}
function at(index, list) {
    switch (arguments.length) {
        case 1:
            return function (list) { return at(index, list); };
        default:
            return list[index] === undefined ? Maybe_1.Nothing : Maybe_1.Just(list[index]);
    }
}
function sort(compare, list) {
    switch (arguments.length) {
        case 1:
            return function (list) { return sort(compare, list); };
        default:
            return __spread(list).sort(function (x, y) { return Function_1.orderToNumber(compare(x, y)); });
    }
}
exports.LIST_URI = 'List';
var ListImpl = /** @class */ (function (_super) {
    __extends(ListImpl, _super);
    function ListImpl() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spread(items)) || this;
        Object.setPrototypeOf(_this, ListImpl.prototype);
        return _this;
    }
    ListImpl.prototype.ap = function (other) {
        var _this = this;
        return other.chain(function (f) { return _this.map(f); });
    };
    ListImpl.prototype['fantasy-land/ap'] = function (other) {
        return this.ap(other);
    };
    ListImpl.prototype['fantasy-land/traverse'] = function (of, f) {
        return this.traverse(of, f);
    };
    ListImpl.prototype.traverse = function (of, f) {
        var initialState = of(exports.List());
        return this.reduceRight(function (tail, head) {
            var v0 = f(head).map(function (val) { return function (tail) { return __spread([val], tail); }; });
            return tail.ap(v0);
        }, initialState);
    };
    ListImpl.prototype['fantasy-land/sequence'] = function (of) {
        return this.sequence(of);
    };
    ListImpl.prototype.sequence = function (of) {
        return this.traverse(of, function (e) { return e; });
    };
    ListImpl.prototype['fantasy-land/map'] = function (callbackfn, thisArg) {
        return this.map(callbackfn, thisArg);
    };
    ListImpl.prototype['fantasy-land/chain'] = function (callbackfn, thisArg) {
        return this.chain(callbackfn, thisArg);
    };
    ListImpl.prototype.chain = function (callbackfn, thisArg) {
        return this.map(callbackfn, thisArg).joinM();
    };
    ListImpl.prototype.joinM = function () {
        return this.reduce(function (acc, val) { return acc.concat(val); }, exports.List());
    };
    return ListImpl;
}(Array));
exports.ListImpl = ListImpl;
function ListConstructor() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 1 && Array.isArray(args[0])) {
        return ListImpl.from(args[0]);
    }
    return ListImpl.of.apply(ListImpl, __spread(args));
}
exports.List = Object.assign(ListConstructor, {
    of: function (val) { return ListImpl.of(val); },
    init: init,
    uncons: uncons,
    at: at,
    head: head,
    last: last,
    tail: tail,
    find: find,
    findIndex: findIndex,
    sum: sum,
    sort: sort
});
