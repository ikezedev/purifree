import { Chainable } from './chain';
import { of, ReplaceFirst, Type, URIS } from './hkt';
export declare const ofSymbol: unique symbol;
export interface GeneratableKind<F extends URIS, A extends any[]> extends Chainable<F, A> {
    [Symbol.iterator]: () => Iterator<Type<F, A>, A[0], any>;
    [ofSymbol]: of<F>;
}
export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export declare type IsUnion<Key> = [
    Key
] extends [UnionToIntersection<Key>] ? false : true;
export declare function DoFlex<Generatable extends GeneratableKind<any, any>, URI extends URIS = Generatable['_URI'], R = any>(_fun: IsUnion<URI> extends false ? () => Generator<Generatable, R, any> : [
    'ERROR: Cannot have monads of different types in do* notation. Different monads found: ',
    URI
]): Type<URI, ReplaceFirst<Generatable['_A'], R>>;
export declare function Do<R, Generatable extends GeneratableKind<any, any>, URI extends URIS = Generatable['_URI'], Rest = Generatable['_A'] extends [infer _A, ...infer Rest] ? Rest : never, SecondaryGenericsError = IsUnion<Rest> extends true ? true : false, MultipleMonadsError = IsUnion<URI> extends true ? true : false>(fun: MultipleMonadsError extends true ? [
    'ERROR: Cannot have monads of different types in do* notation. Different monads found:',
    URI
] : SecondaryGenericsError extends true ? [
    'ERROR: All secondary generics must be of the same type. Different generics found: ',
    Rest
] : () => Generator<Generatable, R, any>): MultipleMonadsError extends true ? true : Type<URI, ReplaceFirst<Generatable['_A'], R>>;
