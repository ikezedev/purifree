"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nothing = exports.Just = exports.Maybe = exports.MAYBE_URI = void 0;
var Either_1 = require("./Either");
var do_1 = require("./pointfree/do");
exports.MAYBE_URI = 'Maybe';
exports.Maybe = {
    of: function (value) {
        return just(value);
    },
    empty: function () {
        return nothing;
    },
    zero: function () {
        return nothing;
    },
    fromNullable: function (value) {
        return value == null ? nothing : just(value);
    },
    fromFalsy: function (value) {
        return value ? just(value) : nothing;
    },
    fromPredicate: function (pred, value) {
        switch (arguments.length) {
            case 1:
                return function (value) { return exports.Maybe.fromPredicate(pred, value); };
            default:
                return pred(value) ? just(value) : nothing;
        }
    },
    mapMaybe: function (f, list) {
        switch (arguments.length) {
            case 1:
                return function (list) { return exports.Maybe.mapMaybe(f, list); };
            default:
                return exports.Maybe.catMaybes(list.map(f));
        }
    },
    catMaybes: function (list) {
        var e_1, _c;
        var res = [];
        try {
            for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var e = list_1_1.value;
                if (e.isJust()) {
                    res.push(e.extract());
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_c = list_1.return)) _c.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    },
    encase: function (thunk) {
        try {
            return just(thunk());
        }
        catch (_c) {
            return nothing;
        }
    },
    isMaybe: function (x) {
        return x instanceof Just || x instanceof Nothing;
    },
    'fantasy-land/of': function (value) {
        return this.of(value);
    },
    'fantasy-land/empty': function () {
        return this.empty();
    },
    'fantasy-land/zero': function () {
        return this.zero();
    }
};
var Just = /** @class */ (function () {
    function Just(__value) {
        this.__value = __value;
        this[_a] = exports.Maybe.of;
    }
    Just.prototype[Symbol.iterator] = function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, this];
                case 1: return [2 /*return*/, (_c.sent())];
            }
        });
    };
    Just.prototype.isJust = function () {
        return true;
    };
    Just.prototype.isNothing = function () {
        return false;
    };
    Just.prototype.inspect = function () {
        return "Just(" + JSON.stringify(this.__value) + ")";
    };
    Just.prototype.toString = function () {
        return this.inspect();
    };
    Just.prototype.toJSON = function () {
        return this.__value;
    };
    Just.prototype.equals = function (other) {
        return this.extract() === other.extract();
    };
    Just.prototype.map = function (f) {
        return just(f(this.__value));
    };
    Just.prototype.traverse = function (_of, f) {
        var result = f(this.__value);
        return result.map(just);
    };
    Just.prototype['fantasy-land/traverse'] = function (of, f) {
        return this.traverse(of, f);
    };
    Just.prototype['fantasy-land/sequence'] = function (of) {
        return this.sequence(of);
    };
    Just.prototype.sequence = function (_of) {
        return this.__value.map(just);
    };
    Just.prototype.ap = function (maybeF) {
        return maybeF.isJust() ? this.map(maybeF.extract()) : nothing;
    };
    Just.prototype.alt = function (_) {
        return this;
    };
    Just.prototype.chain = function (f) {
        return f(this.__value);
    };
    Just.prototype.chainNullable = function (f) {
        return exports.Maybe.fromNullable(f(this.__value));
    };
    Just.prototype.join = function () {
        return this.__value;
    };
    Just.prototype.reduce = function (reducer, initialValue) {
        return reducer(initialValue, this.__value);
    };
    Just.prototype.extend = function (f) {
        return just(f(this));
    };
    Just.prototype.unsafeCoerce = function () {
        return this.__value;
    };
    Just.prototype.caseOf = function (patterns) {
        return '_' in patterns ? patterns._() : patterns.Just(this.__value);
    };
    Just.prototype.orDefault = function (_) {
        return this.__value;
    };
    Just.prototype.orDefaultLazy = function (_) {
        return this.__value;
    };
    Just.prototype.toList = function () {
        return [this.__value];
    };
    Just.prototype.mapOrDefault = function (f, _) {
        return f(this.__value);
    };
    Just.prototype.extract = function () {
        return this.__value;
    };
    Just.prototype.extractNullable = function () {
        return this.__value;
    };
    Just.prototype.toEither = function (_) {
        return Either_1.Right(this.__value);
    };
    Just.prototype.ifJust = function (effect) {
        return effect(this.__value), this;
    };
    Just.prototype.ifNothing = function (_) {
        return this;
    };
    Just.prototype.filter = function (pred) {
        return pred(this.__value) ? just(this.__value) : nothing;
    };
    Just.prototype['fantasy-land/equals'] = function (other) {
        return this.equals(other);
    };
    Just.prototype['fantasy-land/map'] = function (f) {
        return this.map(f);
    };
    Just.prototype['fantasy-land/ap'] = function (maybeF) {
        return this.ap(maybeF);
    };
    Just.prototype['fantasy-land/alt'] = function (other) {
        return this.alt(other);
    };
    Just.prototype['fantasy-land/chain'] = function (f) {
        return this.chain(f);
    };
    Just.prototype['fantasy-land/reduce'] = function (reducer, initialValue) {
        return this.reduce(reducer, initialValue);
    };
    Just.prototype['fantasy-land/extend'] = function (f) {
        return this.extend(f);
    };
    Just.prototype['fantasy-land/filter'] = function (pred) {
        return this.filter(pred);
    };
    return Just;
}());
_a = do_1.ofSymbol;
Just.prototype.constructor = exports.Maybe;
var Nothing = /** @class */ (function () {
    function Nothing() {
        this[_b] = exports.Maybe.of;
    }
    Nothing.prototype[Symbol.iterator] = function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, this];
                case 1: return [2 /*return*/, (_c.sent())];
            }
        });
    };
    Nothing.prototype.isJust = function () {
        return false;
    };
    Nothing.prototype.isNothing = function () {
        return true;
    };
    Nothing.prototype.inspect = function () {
        return 'Nothing';
    };
    Nothing.prototype.toString = function () {
        return this.inspect();
    };
    Nothing.prototype.toJSON = function () {
        return this.__value;
    };
    Nothing.prototype.equals = function (other) {
        return this.extract() === other.extract();
    };
    Nothing.prototype.map = function (_) {
        return nothing;
    };
    Nothing.prototype.traverse = function (of, _f) {
        return of(this);
    };
    Nothing.prototype['fantasy-land/traverse'] = function (of, f) {
        return this.traverse(of, f);
    };
    Nothing.prototype['fantasy-land/sequence'] = function (of) {
        return this.sequence(of);
    };
    Nothing.prototype.sequence = function (of) {
        return of(this);
    };
    Nothing.prototype.ap = function (_) {
        return nothing;
    };
    Nothing.prototype.alt = function (other) {
        return other;
    };
    Nothing.prototype.chain = function (_) {
        return nothing;
    };
    Nothing.prototype.chainNullable = function (_) {
        return nothing;
    };
    Nothing.prototype.join = function () {
        return nothing;
    };
    Nothing.prototype.reduce = function (_, initialValue) {
        return initialValue;
    };
    Nothing.prototype.extend = function (_) {
        return nothing;
    };
    Nothing.prototype.unsafeCoerce = function () {
        throw new Error('Maybe#unsafeCoerce was ran on a Nothing');
    };
    Nothing.prototype.caseOf = function (patterns) {
        return '_' in patterns ? patterns._() : patterns.Nothing();
    };
    Nothing.prototype.orDefault = function (defaultValue) {
        return defaultValue;
    };
    Nothing.prototype.orDefaultLazy = function (getDefaultValue) {
        return getDefaultValue();
    };
    Nothing.prototype.toList = function () {
        return [];
    };
    Nothing.prototype.mapOrDefault = function (_, defaultValue) {
        return defaultValue;
    };
    Nothing.prototype.extract = function () {
        return undefined;
    };
    Nothing.prototype.extractNullable = function () {
        return null;
    };
    Nothing.prototype.toEither = function (left) {
        return Either_1.Left(left);
    };
    Nothing.prototype.ifJust = function (_) {
        return this;
    };
    Nothing.prototype.ifNothing = function (effect) {
        return effect(), this;
    };
    Nothing.prototype.filter = function (_) {
        return nothing;
    };
    Nothing.prototype['fantasy-land/equals'] = function (other) {
        return this.equals(other);
    };
    Nothing.prototype['fantasy-land/map'] = function (f) {
        return this.map(f);
    };
    Nothing.prototype['fantasy-land/ap'] = function (maybeF) {
        return this.ap(maybeF);
    };
    Nothing.prototype['fantasy-land/alt'] = function (other) {
        return this.alt(other);
    };
    Nothing.prototype['fantasy-land/chain'] = function (f) {
        return this.chain(f);
    };
    Nothing.prototype['fantasy-land/reduce'] = function (reducer, initialValue) {
        return this.reduce(reducer, initialValue);
    };
    Nothing.prototype['fantasy-land/extend'] = function (f) {
        return this.extend(f);
    };
    Nothing.prototype['fantasy-land/filter'] = function (pred) {
        return this.filter(pred);
    };
    return Nothing;
}());
_b = do_1.ofSymbol;
Nothing.prototype.constructor = exports.Maybe;
/** Constructs a Just. Represents an optional value that exists */
var just = function (value) { return new Just(value); };
exports.Just = just;
/** Represents a missing value, you can think of it as a smart 'null' */
var nothing = new Nothing();
exports.Nothing = nothing;
