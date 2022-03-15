import { ApKind } from '../ap';
import { TypeFromHKT } from '../hkt';
import { Ap, GetA, GetBCurried, GetCCurried, GetReturn } from './liftBeautifiers';
interface Lifted<F extends (a: any) => (b: any) => (c: any) => any> {
    <HKT1 extends ApKind<any, [GetA<F>, ...any]>>(a: HKT1): (b: TypeFromHKT<HKT1, [GetBCurried<F>]>) => (c: TypeFromHKT<HKT1, [GetCCurried<F>]>) => TypeFromHKT<HKT1, [GetReturn<ReturnType<ReturnType<F>>>]>;
}
export declare const lift3C: <F extends (a: any) => (b: any) => (c: any) => any, A = Parameters<F>[0], B = Parameters<ReturnType<F>>[0], C = Parameters<ReturnType<ReturnType<F>>>[0], R = ReturnType<ReturnType<ReturnType<F>>>>(f: F) => Lifted<(a: Ap<A>) => (b: Ap<B>) => (c: Ap<C>) => Ap<R>>;
export {};
