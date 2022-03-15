import { Either } from './Either';
import { Maybe } from './Maybe';
import { NonEmptyList } from './NonEmptyList';
import { JSONSchema6 } from 'json-schema';
export interface Codec<T> {
    /** Takes a JSON value and runs the decode function the codec was constructed with. All of purify's built-in codecs return a descriptive error message in case the decode fails */
    decode: (input: unknown) => Either<string, T>;
    /** Takes a runtime value and turns it into a JSON value using the encode function the codec was constructed with. Most of purify's built-in codecs have no custom encode method and they just return the same value, but you could add custom serialization logic for your custom codecs. */
    encode: (input: T) => unknown;
    /** The same as the decode method, but throws an exception on failure. Please only use as an escape hatch */
    unsafeDecode: (input: unknown) => T;
    schema: () => JSONSchema6;
}
/** You can use this to get a free type from any codec */
export declare type GetInterface<T extends Codec<any>> = T extends Codec<infer U> ? U : never;
export declare const Codec: {
    /** Creates a codec for any JSON object */
    interface<T extends Record<string, Codec<any>>>(properties: T): Codec<{ [k in keyof T]: GetInterface<T[k]>; }>;
    /** Creates a codec for any type, you can add your own deserialization/validation logic in the decode argument */
    custom<T_1>({ decode, encode, schema }: {
        decode: (value: unknown) => Either<string, T_1>;
        encode: (value: T_1) => any;
        schema?: (() => object) | undefined;
    }): Codec<T_1>;
};
/** A codec for any string value. Most of the time you will use it to implement an interface codec (see the Codec#interface example above). Encoding a string acts like the identity function */
export declare const string: Codec<string>;
/** A codec for any number value. This includes anything that has a typeof number - NaN, Infinity etc. Encoding a number acts like the identity function */
export declare const number: Codec<number>;
/** A codec for null only */
export declare const nullType: Codec<null>;
export declare const optional: <T>(codec: Codec<T>) => Codec<T | undefined>;
/** A codec for a value T or null. Keep in mind if you use `nullable` inside `Codec.interface` the property will still be required */
export declare const nullable: <T>(codec: Codec<T>) => Codec<T | null>;
/** A codec for a boolean value */
export declare const boolean: Codec<boolean>;
/** A codec that can never fail, but of course you get no type information. Encoding an unknown acts like the identity function */
export declare const unknown: Codec<unknown>;
/** A codec for a TypeScript enum */
export declare const enumeration: <T extends Record<string, string | number>>(e: T) => Codec<T[keyof T]>;
/** A codec combinator that receives a list of codecs and runs them one after another during decode and resolves to whichever returns Right or to Left if all fail */
export declare const oneOf: <T extends [Codec<any>, ...Codec<any>[]]>(codecs: T) => Codec<GetInterface<T extends (infer U)[] ? U : never>>;
/** A codec for an array */
export declare const array: <T>(codec: Codec<T>) => Codec<T[]>;
/** A codec for an object without specific properties, its restrictions are equivalent to the Record<K, V> type so you can only check for number and string keys */
export declare const record: <K extends string | number | symbol, V>(keyCodec: Codec<K>, valueCodec: Codec<V>) => Codec<Record<K, V>>;
/** A codec that only succeeds decoding when the value is exactly what you've constructed the codec with */
export declare const exactly: <T extends string | number | boolean>(expectedValue: T) => Codec<T>;
/** A special codec used when dealing with recursive data structures, it allows a codec to be recursively defined by itself */
export declare const lazy: <T>(getCodec: () => Codec<T>) => Codec<T>;
/** A codec for purify's Maybe type. Encode runs Maybe#toJSON, which effectively returns the value inside if it's a Just or undefined if it's Nothing */
export declare const maybe: <T>(codec: Codec<T>) => Codec<Maybe<T>>;
/** A codec for purify's NEL type */
export declare const nonEmptyList: <T>(codec: Codec<T>) => Codec<NonEmptyList<T>>;
/** The same as the array decoder, but accepts a fixed amount of array elements and you can specify each element type, much like the tuple type */
export declare const tuple: <TS extends [Codec<any>, ...Codec<any>[]]>(codecs: TS) => Codec<{ [i in keyof TS]: TS[i] extends Codec<infer U> ? U : never; }>;
/** A codec for a parsable date string, on successful decoding it resolves to a Date object. The validity of the date string during decoding is decided by the browser implementation of Date.parse. Encode runs toISOString on the passed in date object */
export declare const date: Codec<Date>;
/** Creates an intersection between two codecs. If the provided codecs are not for an object, the second decode result will be returned */
export declare const intersect: <T, U>(t: Codec<T>, u: Codec<U>) => Codec<T & U>;
export declare type ExpectedType = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'null' | 'undefined' | 'enum';
export declare type ReceivedType = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'null' | 'undefined' | 'bigint' | 'symbol' | 'function';
export declare type DecodeError = {
    type: 'property';
    property: string;
    error: DecodeError;
} | {
    type: 'index';
    index: number;
    error: DecodeError;
} | {
    type: 'oneOf';
    errors: DecodeError[];
} | {
    type: 'failure';
    expectedType?: ExpectedType;
    receivedType: ReceivedType;
    receivedValue?: unknown;
} | {
    type: 'custom';
    message: string;
};
/** Turns a string error message produced by a built-in purify codec into a meta object */
export declare const parseError: (error: string) => DecodeError;
