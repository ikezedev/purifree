import { ApKind } from '../ap';
import { TypeFromHKT } from '../hkt';
import { Ap, GetA, GetReturn } from './liftBeautifiers';
interface Lifted<F extends (a: Ap<any>) => Ap<any>> {
    <HKT1 extends ApKind<any, [GetA<F>, ...any]>>(a: HKT1): TypeFromHKT<HKT1, [
        GetReturn<F>
    ]>;
}
export declare const lift: <F extends (a: any) => any, A = Parameters<F>[0], R = ReturnType<F>>(f: F) => Lifted<(a: Ap<A>) => Ap<R>>;
export {};
