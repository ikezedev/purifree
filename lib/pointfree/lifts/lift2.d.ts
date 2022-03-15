import { ApKind } from '../ap';
import { TypeFromHKT } from '../hkt';
import { Ap, GetA, GetB, GetReturn } from './liftBeautifiers';
interface Lifted<F extends (a: Ap<any>, b: Ap<any>) => Ap<any>> {
    <HKT1 extends ApKind<any, [GetA<F>, ...any]>>(a: HKT1): (b: TypeFromHKT<HKT1, [GetB<F>]>) => TypeFromHKT<HKT1, [GetReturn<F>]>;
}
export declare const lift2: <F extends (a: any, b: any) => any, Params extends any[] = Parameters<F>, R = ReturnType<F>>(f: F) => Lifted<(a: Ap<Params[0]>, b: Ap<Params[1]>) => Ap<R>>;
export {};
