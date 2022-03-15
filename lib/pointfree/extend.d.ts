import { HKT, ReplaceFirst, Type, URIS } from './hkt';
export interface Extendable<F extends URIS, A extends any[]> extends HKT<F, A> {
    readonly extend: <B>(f: (a: Type<F, A>) => B) => Type<F, ReplaceFirst<A, B>>;
}
export declare const extend: <ExtendableM extends Extendable<any, any>, B = any>(f: (a: Type<ExtendableM["_URI"], ExtendableM["_A"]>) => B) => (fa: ExtendableM) => Type<ExtendableM["_URI"], ReplaceFirst<ExtendableM["_A"], B>>;
