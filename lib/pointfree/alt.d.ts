import { HKT, Type, URIS } from './hkt';
export interface Altable<F extends URIS, A extends any[]> extends HKT<F, A> {
    readonly alt: (other: Type<F, A>) => Type<F, A>;
}
export declare const alt: <Alt extends Altable<any, any>>(other: Alt) => (fa: Alt) => Alt;
