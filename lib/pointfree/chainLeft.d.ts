import { NoInfer } from 'Function/_api';
import { HKT, ReplaceSecond, Type, URIS } from './hkt';
export interface ChainLeftable<F extends URIS, A extends any[]> extends HKT<F, A> {
    readonly chainLeft: <B>(f: (a: A[1]) => Type<F, ReplaceSecond<A, B>>) => Type<F, ReplaceSecond<A, B>>;
}
export declare const chainLeft: <Monad extends ChainLeftable<any, any>, URI extends "Tuple" | "MaybeAsync" | "EitherAsync" | "List" | "NonEmptyList" | "Maybe" | "Either" = Monad["_URI"], Generics extends any[] = Monad["_A"], B = any>(f: (a: Monad["_A"][1]) => HKT<NoInfer<URI>, ReplaceSecond<Generics, B>>) => (fa: Monad) => Type<URI, ReplaceSecond<Generics, B>>;
