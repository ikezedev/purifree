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
exports.isRight = exports.isLeft = exports.Right = exports.Left = exports.Either = exports.EITHER_URI = void 0;
var Maybe_1 = require("./Maybe");
var do_1 = require("./pointfree/do");
exports.EITHER_URI = 'Either';
exports.Either = {
    of: function (value) {
        return right(value);
    },
    lefts: function (list) {
        var e_1, _c;
        var result = [];
        try {
            for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var x = list_1_1.value;
                if (x.isLeft()) {
                    result.push(x.extract());
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
        return result;
    },
    rights: function (list) {
        var e_2, _c;
        var result = [];
        try {
            for (var list_2 = __values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                var x = list_2_1.value;
                if (x.isRight()) {
                    result.push(x.extract());
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (list_2_1 && !list_2_1.done && (_c = list_2.return)) _c.call(list_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    },
    encase: function (throwsF) {
        try {
            return right(throwsF());
        }
        catch (e) {
            return left(e);
        }
    },
    sequence: function (eithers) {
        var e_3, _c;
        var res = [];
        try {
            for (var eithers_1 = __values(eithers), eithers_1_1 = eithers_1.next(); !eithers_1_1.done; eithers_1_1 = eithers_1.next()) {
                var e = eithers_1_1.value;
                if (e.isLeft()) {
                    return e;
                }
                res.push(e.extract());
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (eithers_1_1 && !eithers_1_1.done && (_c = eithers_1.return)) _c.call(eithers_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return right(res);
    },
    isEither: function (x) {
        return x instanceof Left || x instanceof Right;
    },
    'fantasy-land/of': function (value) {
        return exports.Either.of(value);
    }
};
var Right = /** @class */ (function () {
    function Right(__value) {
        this.__value = __value;
        this._ = 'R';
        this[_a] = exports.Either.of;
    }
    Right.prototype[Symbol.iterator] = function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, this];
                case 1: return [2 /*return*/, (_c.sent())];
            }
        });
    };
    Right.prototype.isLeft = function () {
        return false;
    };
    Right.prototype.isRight = function () {
        return true;
    };
    Right.prototype['fantasy-land/traverse'] = function (of, f) {
        return this.traverse(of, f);
    };
    Right.prototype.traverse = function (_of, f) {
        var result = f(this.__value);
        return result.map(right);
    };
    Right.prototype['fantasy-land/sequence'] = function (of) {
        return this.sequence(of);
    };
    Right.prototype.sequence = function (_of) {
        return this.__value.map(right);
    };
    Right.prototype.toJSON = function () {
        return this.__value;
    };
    Right.prototype.inspect = function () {
        return "Right(" + JSON.stringify(this.__value) + ")";
    };
    Right.prototype.toString = function () {
        return this.inspect();
    };
    Right.prototype.bimap = function (_f, g) {
        // bimap<L2, R2>(_: (value: L) => L2, g: (value: R) => R2): Either<L2, R2> {
        return right(g(this.__value));
    };
    Right.prototype.map = function (f) {
        return right(f(this.__value));
    };
    Right.prototype.mapLeft = function (_) {
        return this;
    };
    Right.prototype.ap = function (other) {
        return other.isRight() ? this.map(other.extract()) : other;
    };
    Right.prototype.equals = function (other) {
        return other.isRight() ? this.__value === other.extract() : false;
    };
    Right.prototype.chain = function (f) {
        return f(this.__value);
    };
    Right.prototype.chainLeft = function (_) {
        return this;
    };
    Right.prototype.join = function () {
        return this.__value;
    };
    Right.prototype.alt = function (_) {
        return this;
    };
    Right.prototype.reduce = function (reducer, initialValue) {
        return reducer(initialValue, this.__value);
    };
    Right.prototype.extend = function (f) {
        return right(f(this));
    };
    Right.prototype.unsafeCoerce = function () {
        return this.__value;
    };
    Right.prototype.caseOf = function (patterns) {
        return '_' in patterns ? patterns._() : patterns.Right(this.__value);
    };
    Right.prototype.leftOrDefault = function (defaultValue) {
        return defaultValue;
    };
    Right.prototype.orDefault = function (_) {
        return this.__value;
    };
    Right.prototype.orDefaultLazy = function (_) {
        return this.__value;
    };
    Right.prototype.leftOrDefaultLazy = function (getDefaultValue) {
        return getDefaultValue();
    };
    Right.prototype.ifLeft = function (_) {
        return this;
    };
    Right.prototype.ifRight = function (effect) {
        return effect(this.__value), this;
    };
    Right.prototype.toMaybe = function () {
        return Maybe_1.Just(this.__value);
    };
    Right.prototype.leftToMaybe = function () {
        return Maybe_1.Nothing;
    };
    Right.prototype.either = function (_, ifRight) {
        return ifRight(this.__value);
    };
    Right.prototype.extract = function () {
        return this.__value;
    };
    Right.prototype.swap = function () {
        return left(this.__value);
    };
    Right.prototype['fantasy-land/bimap'] = function (f, g) {
        return this.bimap(f, g);
    };
    Right.prototype['fantasy-land/map'] = function (f) {
        return this.map(f);
    };
    Right.prototype['fantasy-land/ap'] = function (other) {
        return this.ap(other);
    };
    Right.prototype['fantasy-land/equals'] = function (other) {
        return this.equals(other);
    };
    Right.prototype['fantasy-land/chain'] = function (f) {
        return this.chain(f);
    };
    Right.prototype['fantasy-land/alt'] = function (other) {
        return this.alt(other);
    };
    Right.prototype['fantasy-land/reduce'] = function (reducer, initialValue) {
        return this.reduce(reducer, initialValue);
    };
    Right.prototype['fantasy-land/extend'] = function (f) {
        return this.extend(f);
    };
    return Right;
}());
_a = do_1.ofSymbol;
Right.prototype.constructor = exports.Either;
var Left = /** @class */ (function () {
    function Left(__value) {
        this.__value = __value;
        this._ = 'L';
        this[_b] = exports.Either.of;
    }
    Left.prototype[Symbol.iterator] = function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, this];
                case 1: return [2 /*return*/, (_c.sent())];
            }
        });
    };
    Left.prototype.isLeft = function () {
        return true;
    };
    Left.prototype.isRight = function () {
        return false;
    };
    Left.prototype.toJSON = function () {
        return this.__value;
    };
    Left.prototype.inspect = function () {
        return "Left(" + JSON.stringify(this.__value) + ")";
    };
    Left.prototype.toString = function () {
        return this.inspect();
    };
    Left.prototype.bimap = function (f, _g) {
        // bimap<L2, R2>(f: (value: L) => L2, _: (value: R) => R2): Either<L2, R2> {
        return left(f(this.__value));
    };
    Left.prototype['fantasy-land/traverse'] = function (of, f) {
        return this.traverse(of, f);
    };
    Left.prototype.traverse = function (of, _f) {
        return of(this);
    };
    Left.prototype['fantasy-land/sequence'] = function (of) {
        return this.sequence(of);
    };
    Left.prototype.sequence = function (of) {
        return of(this);
    };
    Left.prototype.map = function (_) {
        return this;
    };
    Left.prototype.mapLeft = function (f) {
        return left(f(this.__value));
    };
    Left.prototype.ap = function (other) {
        return other.isLeft() ? other : this;
    };
    Left.prototype.equals = function (other) {
        return other.isLeft() ? other.extract() === this.__value : false;
    };
    Left.prototype.chain = function (_) {
        return this;
    };
    Left.prototype.chainLeft = function (f) {
        return f(this.__value);
    };
    Left.prototype.join = function () {
        return this;
    };
    Left.prototype.alt = function (other) {
        return other;
    };
    Left.prototype.reduce = function (_, initialValue) {
        return initialValue;
    };
    Left.prototype.extend = function (_) {
        return this;
    };
    Left.prototype.unsafeCoerce = function () {
        if (this.__value instanceof Error) {
            throw this.__value;
        }
        throw new Error('Either#unsafeCoerce was ran on a Left');
    };
    Left.prototype.caseOf = function (patterns) {
        return '_' in patterns ? patterns._() : patterns.Left(this.__value);
    };
    Left.prototype.leftOrDefault = function (_) {
        return this.__value;
    };
    Left.prototype.orDefault = function (defaultValue) {
        return defaultValue;
    };
    Left.prototype.orDefaultLazy = function (getDefaultValue) {
        return getDefaultValue();
    };
    Left.prototype.leftOrDefaultLazy = function (_) {
        return this.__value;
    };
    Left.prototype.ifLeft = function (effect) {
        return effect(this.__value), this;
    };
    Left.prototype.ifRight = function (_) {
        return this;
    };
    Left.prototype.toMaybe = function () {
        return Maybe_1.Nothing;
    };
    Left.prototype.leftToMaybe = function () {
        return Maybe_1.Just(this.__value);
    };
    Left.prototype.either = function (ifLeft, _) {
        return ifLeft(this.__value);
    };
    Left.prototype.extract = function () {
        return this.__value;
    };
    Left.prototype.swap = function () {
        return right(this.__value);
    };
    Left.prototype['fantasy-land/bimap'] = function (f, g) {
        return this.bimap(f, g);
    };
    Left.prototype['fantasy-land/map'] = function (f) {
        return this.map(f);
    };
    Left.prototype['fantasy-land/ap'] = function (other) {
        return this.ap(other);
    };
    Left.prototype['fantasy-land/equals'] = function (other) {
        return this.equals(other);
    };
    Left.prototype['fantasy-land/chain'] = function (f) {
        return this.chain(f);
    };
    Left.prototype['fantasy-land/alt'] = function (other) {
        return this.alt(other);
    };
    Left.prototype['fantasy-land/reduce'] = function (reducer, initialValue) {
        return this.reduce(reducer, initialValue);
    };
    Left.prototype['fantasy-land/extend'] = function (f) {
        return this.extend(f);
    };
    return Left;
}());
_b = do_1.ofSymbol;
Left.prototype.constructor = exports.Either;
var left = function (value) { return new Left(value); };
exports.Left = left;
var right = function (value) { return new Right(value); };
exports.Right = right;
exports.isLeft = function (either) { return either.isLeft(); };
exports.isRight = function (either) { return either.isRight(); };
