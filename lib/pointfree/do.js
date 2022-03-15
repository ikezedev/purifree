"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Do = exports.DoFlex = exports.ofSymbol = void 0;
exports.ofSymbol = Symbol('of');
function DoFlex(_fun) {
    return null;
}
exports.DoFlex = DoFlex;
function Do(fun) {
    var iterator = fun();
    var state = iterator.next();
    var of = state.value[exports.ofSymbol];
    function run(state) {
        if (state.done) {
            return of(state.value);
        }
        return state.value.chain(function (val) {
            return run(iterator.next(val));
        });
    }
    return run(state);
}
exports.Do = Do;
// export function Do2<R, URI extends URIS, A extends any[]>(
//   fun: () => Generator<GeneratableKind<URI, A>, R, any>
// ): IsUnion<A> extends true
//   ? { error: 'All secondary generics must be of the same type.' }
//   : IsUnion<URI> extends true
//   ? {
//       error: 'Cannot have monads of different types in do* notation'
//     }
//   : Type<URI, ReplaceFirst<A, R>> {
//   return 0 as any
// }
