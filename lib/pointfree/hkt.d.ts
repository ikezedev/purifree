import { L } from 'ts-toolbelt';
export declare type URIS = keyof URI2HKT<any>;
export interface HKT<F extends URIS, A extends any[]> {
    _URI: F;
    _A: A;
}
export declare type TypeFromHKT<other extends HKT<any, any>, replaceA extends any[]> = Type<other['_URI'], Replace<other['_A'], replaceA>>;
export declare type HKTFrom<other extends HKT<any, any>, A extends any[], uri extends URIS = other['_URI'], oldA extends any[] = other['_A']> = HKT<uri, Replace<oldA, A>>;
export declare type Replace<oldA extends any[], newA extends any[]> = [
    ...newA,
    ...L.Drop<oldA, L.Length<newA, 's'>, '->'>
];
export declare type ReplaceFirst<Arr extends any[], T extends any> = Arr extends [
    infer _Head,
    ...infer Rest
] ? [
    T,
    ...Rest
] : [T, ...any];
export declare type ReplaceSecond<Arr extends any[], T> = Arr extends [
    infer Head,
    infer _Second,
    ...infer Rest
] ? [Head, T, ...Rest] : Arr extends [infer Head] ? [Head, T] : [undefined, T];
export declare type SumSecondArg<Arr extends any[], T> = Arr extends [
    infer Head,
    infer Second,
    ...infer Rest
] ? [Head, T | Second, ...Rest] : Arr extends [infer Head] ? [Head, T] : [undefined, T];
export declare type ReplaceFirstAndSecond<Arr extends any[], A, B> = Arr extends [
    infer _First,
    infer _Second,
    ...infer Rest
] ? [A, B, ...Rest] : [
    A,
    B
];
export declare type OrNever<K> = unknown extends K ? never : K;
export declare type ProtectFromNever<T> = OrNever<T> extends never ? never : T;
export declare type ReplaceFirstAndReplaceSecondIfSecondIsNever<Arr extends any[], A, B> = Arr extends [infer _First, infer Second, ...infer Rest] ? [A, OrNever<Second> extends never ? B : Second, ...Rest] : [A, B];
export declare type SwapFirstTwo<Arr extends any[]> = Arr extends [
    infer First,
    infer Second,
    ...infer Rest
] ? [Second, First, ...Rest] : Arr extends [infer First] ? [undefined, First] : [];
export declare type Type<URI extends URIS, A extends any[]> = URI2HKT<A>[URI];
export interface URI2HKT<Types extends any[]> {
}
export declare type of<URI extends URIS> = <T>(value: T) => HKT<URI, [T, ...any]>;
