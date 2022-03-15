export declare const applicativeSymbol: unique symbol;
export declare type applicativeSymbol = typeof applicativeSymbol;
export interface Ap<T> {
    [applicativeSymbol]: T;
}
declare type Get<num extends number, T extends (...args: Ap<any>[]) => any> = Parameters<T>[num][applicativeSymbol];
export declare type GetA<T extends (...args: Ap<any>[]) => any> = Get<0, T>;
export declare type GetB<T extends (...args: Ap<any>[]) => any> = Get<1, T>;
export declare type GetC<T extends (...args: Ap<any>[]) => any> = Get<2, T>;
export declare type GetD<T extends (...args: Ap<any>[]) => any> = Get<3, T>;
export declare type GetBCurried<T extends (a: Ap<any>) => (b: Ap<any>) => any> = Get<0, ReturnType<T>>;
export declare type GetCCurried<T extends (a: Ap<any>) => (b: Ap<any>) => (c: Ap<any>) => any> = Get<0, ReturnType<ReturnType<T>>>;
export declare type GetDCurried<T extends (a: Ap<any>) => (b: Ap<any>) => (c: Ap<any>) => (d: Ap<any>) => any> = Get<0, ReturnType<ReturnType<ReturnType<T>>>>;
export declare type GetReturn<T extends (...args: Ap<any>[]) => any> = ReturnType<T>[applicativeSymbol];
export {};
