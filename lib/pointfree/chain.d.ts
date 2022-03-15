import { NoInfer } from 'Function/_api';
import { HKT, ReplaceFirst, ReplaceFirstAndReplaceSecondIfSecondIsNever, ReplaceFirstAndSecond, Type, URIS } from './hkt';
import { FunctorKind } from './map';
export interface MonadKind<F extends URIS, A extends any[]> extends FunctorKind<F, A> {
    readonly chain: <B>(f: (a: A[0]) => Type<F, ReplaceFirst<A, B>>) => Type<F, ReplaceFirst<A, B>>;
}
export interface Chainable<F extends URIS, A extends any[]> extends HKT<F, A> {
    readonly chain: <B>(f: (a: A[0]) => Type<F, ReplaceFirstAndReplaceSecondIfSecondIsNever<A, B, never>>) => Type<F, ReplaceFirst<A, B>>;
}
export declare const chain: <Monad extends Chainable<any, any>, URI extends "Tuple" | "MaybeAsync" | "EitherAsync" | "List" | "NonEmptyList" | "Maybe" | "Either" = Monad["_URI"], Generics extends any[] = Monad["_A"], B = any>(f: (a: Monad["_A"][0]) => HKT<NoInfer<URI>, ReplaceFirst<Generics, B>>) => (fa: Monad) => Type<URI, ReplaceFirst<Generics, B>>;
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
export declare const chainFlex: <Monad extends Chainable<any, any>, URI extends "Tuple" | "MaybeAsync" | "EitherAsync" | "List" | "NonEmptyList" | "Maybe" | "Either" = Monad["_URI"], B = any, C = any>(f: (a: Monad["_A"][0]) => HKT<NoInfer<URI>, [B, C, ...any[]]>) => (fa: Monad) => Type<URI, ReplaceFirstAndSecond<Monad["_A"], B, C | Monad["_A"][1]>>;
