import { Either, EitherPatterns, Maybe, MaybePatterns } from '..';
interface CaseOfable {
    caseOf<T>(pattern: any): T;
}
export declare type CaseOf = {
    <M extends CaseOfable, P extends getPatternsOfADT<M>, T2 = getReturn_T_ofPattern<P>>(p: P): (m: M) => T2;
};
export declare type Match = CaseOf;
export declare const caseOf: CaseOf;
export declare const match: Match;
declare type getPatternsOfADT<M> = M extends Either<infer L, infer R> ? EitherPatterns<L, R, any> : M extends Maybe<infer T> ? MaybePatterns<T, any> : never;
declare type getReturn_T_ofPattern<P> = P extends EitherPatterns<any, any, infer R> | EitherPatterns<any, never, infer R> | EitherPatterns<never, any, infer R> ? R : P extends MaybePatterns<any, infer R> | MaybePatterns<never, infer R> ? R : never;
export {};
