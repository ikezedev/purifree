"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainFlex = exports.chain = void 0;
exports.chain = function (f // delay the infer U, so it can get the monads URI
) { return function (fa) {
    return fa.chain(f);
}; };
/**
 * This chain is more flexible: allows the L argument in Either<L,R> to be of a different type, and the new returned monad is Either<L1 | L2, R>.
 * Good for error reporting: Either<DatabaseError | ValidationError, User>
 * @example
 * pipe(
 *   Right(10) as Either<string, number>,
 *   chainFlex((num) => Right(num) as Either<Error, number>),
 *   chainFlex(num => Right(num) as Either<ValidationError, number>)
 * ) // Either<string | Error | ValidationError, number>
 */
exports.chainFlex = function (f) { return function (fa) {
    return fa.chain(f);
}; };
