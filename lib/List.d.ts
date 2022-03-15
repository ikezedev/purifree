import { Tuple } from './Tuple';
import { Maybe } from './Maybe';
import { Order } from './Function';
import { ApKind } from './pointfree/ap';
import { ReplaceFirst, Type, URIS } from './pointfree/hkt';
import { NonEmptyArray, ofAp } from '.';
/** Returns the first element which satisfies a predicate. A more typesafe version of the already existing List.prototype.find */
declare function find<T>(f: (x: T, index: number, arr: T[]) => boolean, list: T[]): Maybe<T>;
declare function find<T>(f: (x: T, index: number, arr: T[]) => boolean): (list: T[]) => Maybe<T>;
/** Returns the index of the first element which satisfies a predicate. A more typesafe version of the already existing List.prototype.findIndex */
declare function findIndex<T>(f: (x: T, index: number, arr: T[]) => boolean, list: T[]): Maybe<number>;
declare function findIndex<T>(f: (x: T, index: number, arr: T[]) => boolean): (list: T[]) => Maybe<number>;
/** Returns the element at a given index of a list */
declare function at<T>(index: number, list: T[]): Maybe<T>;
declare function at<T>(index: number): (list: T[]) => Maybe<T>;
/** Sorts an array with the given comparison function */
declare function sort<T>(compare: (a: T, b: T) => Order, list: T[]): T[];
declare function sort<T>(compare: (a: T, b: T) => Order): (list: T[]) => T[];
export declare const LIST_URI = "List";
export declare type LIST_URI = typeof LIST_URI;
declare module './pointfree/hkt' {
    interface URI2HKT<Types extends any[]> {
        [LIST_URI]: List<Types[0]>;
    }
}
export interface List<T> extends Array<T> {
    readonly _URI: LIST_URI;
    readonly _A: [T];
    sequence<Ap extends ApKind<any, any>>(this: List<Ap>, of: ofAp<Ap['_URI']>): Type<Ap['_URI'], ReplaceFirst<Ap['_A'], List<Ap['_A'][0]>>>;
    traverse<URI extends URIS, AP extends ApKind<any, any> = ApKind<URI, any>>(of: ofAp<URI>, f: (a: T) => AP): Type<URI, ReplaceFirst<AP['_A'], List<AP['_A'][0]>>>;
    map<U>(this: List<T>, callbackfn: (value: T, index: number, array: List<T>) => U, thisArg?: any): List<U>;
    ap<R2>(other: List<(value: T) => R2>): List<R2>;
    chain<U>(this: List<T>, callbackfn: (value: T, index: number, array: List<T>) => List<U>, thisArg?: any): List<U>;
    reverse(this: List<T>): List<T>;
    joinM<T2>(this: List<List<T2>>): List<T2>;
    'fantasy-land/traverse': this['traverse'];
    'fantasy-land/sequence': this['sequence'];
    'fantasy-land/map': this['map'];
    'fantasy-land/chain': this['chain'];
    'fantasy-land/ap': this['ap'];
}
export declare class ListImpl<T> extends Array<T> implements List<T> {
    readonly _URI: LIST_URI;
    readonly _A: [T];
    constructor(...items: T[]);
    ap<R2>(other: List<(value: T) => R2>): List<R2>;
    'fantasy-land/ap'<R2>(other: List<(value: T) => R2>): List<R2>;
    'fantasy-land/traverse'<URI extends URIS, AP extends ApKind<any, any> = ApKind<URI, any>>(of: ofAp<URI>, f: (a: T) => AP): Type<URI, ReplaceFirst<AP['_A'], List<AP['_A'][0]>>>;
    traverse<URI extends URIS, AP extends ApKind<any, any> = ApKind<URI, any>>(of: ofAp<URI>, f: (a: T) => AP): Type<URI, ReplaceFirst<AP['_A'], List<AP['_A'][0]>>>;
    'fantasy-land/sequence'<Ap extends ApKind<any, any>>(this: List<Ap>, of: ofAp<Ap['_URI']>): Type<Ap['_URI'], ReplaceFirst<Ap['_A'], List<Ap['_A'][0]>>>;
    sequence<Ap extends ApKind<any, any>>(this: List<Ap>, of: ofAp<Ap['_URI']>): Type<Ap['_URI'], ReplaceFirst<Ap['_A'], List<Ap['_A'][0]>>>;
    'fantasy-land/map'<U>(this: List<T>, callbackfn: (value: T, index: number, array: List<T>) => U, thisArg?: any): List<U>;
    map: <U>(this: List<T>, callbackfn: (value: T, index: number, array: List<T>) => U, thisArg?: any) => List<U>;
    'fantasy-land/chain'<U>(this: List<T>, callbackfn: (value: T, index: number, array: List<T>) => List<U>, thisArg?: any): List<U>;
    chain<U>(this: List<T>, callbackfn: (value: T, index: number, array: List<T>) => List<U>, thisArg?: any): List<U>;
    joinM<T2>(this: List<List<T2>>): List<T2>;
    reverse: (this: List<T>) => List<T>;
}
declare function ListConstructor<T>(list: NonEmptyArray<T>): List<T> & {
    0: T;
};
declare function ListConstructor<T>(list: T[]): List<T>;
declare function ListConstructor<T, Rest extends T[]>(value1: T, ...values: Rest): List<T> & {
    0: T;
};
declare function ListConstructor<T extends any[]>(...values: T): List<T[number]>;
export declare const List: typeof ListConstructor & {
    of: <T>(val: T) => List<T> & {
        0: T;
    };
    init: <T_1>(list: T_1[]) => Maybe<T_1[]>;
    uncons: <T_2>(list: T_2[]) => Maybe<Tuple<T_2, T_2[]>>;
    at: typeof at;
    head: <T_3>(list: T_3[]) => Maybe<T_3>;
    last: <T_4>(list: T_4[]) => Maybe<T_4>;
    tail: <T_5>(list: T_5[]) => Maybe<T_5[]>;
    find: typeof find;
    findIndex: typeof findIndex;
    sum: (list: number[]) => number;
    sort: typeof sort;
};
export {};
