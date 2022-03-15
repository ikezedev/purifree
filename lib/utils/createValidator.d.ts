import { EitherAsync } from '..';
import { Either } from '../Either';
import { NonEmptyList } from '../NonEmptyList';
export declare const createValidator: <A, L, R>(validator: (value: A) => Either<L, R>, ...validators: ((value: A) => Either<L, R>)[]) => (arg: A) => Either<NonEmptyList<L>, R>;
export declare const createAsyncValidator: <A, L, R>(validator: (value: A) => EitherAsync<L, R>, ...validators: ((value: A) => EitherAsync<L, R>)[]) => (arg: A) => EitherAsync<NonEmptyList<L>, R>;
