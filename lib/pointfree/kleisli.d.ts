import { Chainable } from './chain';
import { HKTFrom, TypeFromHKT, URIS } from './hkt';
declare type KleisiInfo = {
    Monad: Chainable<any, any>;
    URI: URIS;
    Generics: any[];
    A: any;
};
declare type getKleisiInfo<T extends (...args: any) => Chainable<any, any>, Monad extends Chainable<any, any> = ReturnType<T>, URI extends URIS = Monad['_URI'], Generics extends any[] = Monad['_A'], A = Monad['_A'][0]> = {
    Monad: Monad;
    URI: URI;
    Generics: Generics;
    A: A;
};
export declare function kleisli<func1 extends (...args: any) => Chainable<any, any>, info extends KleisiInfo = getKleisiInfo<func1>>(a: func1): (...args: Parameters<func1>) => TypeFromHKT<info['Monad'], []>;
export declare function kleisli<func1 extends (...args: any) => Chainable<any, any>, info extends KleisiInfo = getKleisiInfo<func1>, B = any>(a: func1, b: (arg: info['A']) => HKTFrom<info['Monad'], [B]>): (...args: Parameters<func1>) => TypeFromHKT<info['Monad'], [B]>;
export declare function kleisli<func1 extends (...args: any) => Chainable<any, any>, info extends KleisiInfo = getKleisiInfo<func1>, B = any, C = any>(a: func1, b: (arg: info['A']) => HKTFrom<info['Monad'], [B]>, c: (arg: B) => HKTFrom<info['Monad'], [C]>): (...args: Parameters<func1>) => TypeFromHKT<info['Monad'], [C]>;
export declare function kleisli<func1 extends (...args: any) => Chainable<any, any>, info extends KleisiInfo = getKleisiInfo<func1>, B = any, C = any, D = any>(a: func1, b: (arg: info['A']) => HKTFrom<info['Monad'], [B]>, c: (arg: B) => HKTFrom<info['Monad'], [C]>, d: (arg: C) => HKTFrom<info['Monad'], [D]>): (...args: Parameters<func1>) => TypeFromHKT<info['Monad'], [D]>;
export declare function kleisli<func1 extends (...args: any) => Chainable<any, any>, info extends KleisiInfo = getKleisiInfo<func1>, B = any, C = any, D = any, E = any>(a: func1, b: (arg: info['A']) => HKTFrom<info['Monad'], [B]>, c: (arg: B) => HKTFrom<info['Monad'], [C]>, d: (arg: C) => HKTFrom<info['Monad'], [D]>, e: (arg: D) => HKTFrom<info['Monad'], [E]>): (...args: Parameters<func1>) => TypeFromHKT<info['Monad'], [E]>;
export declare function kleisli<func1 extends (...args: any) => Chainable<any, any>, info extends KleisiInfo = getKleisiInfo<func1>, B = any, C = any, D = any, E = any, F = any>(a: func1, b: (arg: info['A']) => HKTFrom<info['Monad'], [B]>, c: (arg: B) => HKTFrom<info['Monad'], [C]>, d: (arg: C) => HKTFrom<info['Monad'], [D]>, e: (arg: D) => HKTFrom<info['Monad'], [E]>, f: (arg: E) => HKTFrom<info['Monad'], [F]>): (...args: Parameters<func1>) => TypeFromHKT<info['Monad'], [F]>;
export {};
