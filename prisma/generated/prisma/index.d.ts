
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model VitalSign
 * 
 */
export type VitalSign = $Result.DefaultSelection<Prisma.$VitalSignPayload>
/**
 * Model ThresholdSettings
 * 
 */
export type ThresholdSettings = $Result.DefaultSelection<Prisma.$ThresholdSettingsPayload>
/**
 * Model VitalSignHistory
 * 
 */
export type VitalSignHistory = $Result.DefaultSelection<Prisma.$VitalSignHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PatientStatus: {
  CRITICAL: 'CRITICAL',
  WARNING: 'WARNING',
  STABLE: 'STABLE'
};

export type PatientStatus = (typeof PatientStatus)[keyof typeof PatientStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type PatientStatus = $Enums.PatientStatus

export const PatientStatus: typeof $Enums.PatientStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Doctors
 * const doctors = await prisma.doctor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Doctors
   * const doctors = await prisma.doctor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vitalSign`: Exposes CRUD operations for the **VitalSign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VitalSigns
    * const vitalSigns = await prisma.vitalSign.findMany()
    * ```
    */
  get vitalSign(): Prisma.VitalSignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.thresholdSettings`: Exposes CRUD operations for the **ThresholdSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ThresholdSettings
    * const thresholdSettings = await prisma.thresholdSettings.findMany()
    * ```
    */
  get thresholdSettings(): Prisma.ThresholdSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vitalSignHistory`: Exposes CRUD operations for the **VitalSignHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VitalSignHistories
    * const vitalSignHistories = await prisma.vitalSignHistory.findMany()
    * ```
    */
  get vitalSignHistory(): Prisma.VitalSignHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Doctor: 'Doctor',
    Patient: 'Patient',
    VitalSign: 'VitalSign',
    ThresholdSettings: 'ThresholdSettings',
    VitalSignHistory: 'VitalSignHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "doctor" | "patient" | "vitalSign" | "thresholdSettings" | "vitalSignHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      VitalSign: {
        payload: Prisma.$VitalSignPayload<ExtArgs>
        fields: Prisma.VitalSignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VitalSignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VitalSignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          findFirst: {
            args: Prisma.VitalSignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VitalSignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          findMany: {
            args: Prisma.VitalSignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>[]
          }
          create: {
            args: Prisma.VitalSignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          createMany: {
            args: Prisma.VitalSignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VitalSignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>[]
          }
          delete: {
            args: Prisma.VitalSignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          update: {
            args: Prisma.VitalSignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          deleteMany: {
            args: Prisma.VitalSignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VitalSignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VitalSignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>[]
          }
          upsert: {
            args: Prisma.VitalSignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          aggregate: {
            args: Prisma.VitalSignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVitalSign>
          }
          groupBy: {
            args: Prisma.VitalSignGroupByArgs<ExtArgs>
            result: $Utils.Optional<VitalSignGroupByOutputType>[]
          }
          count: {
            args: Prisma.VitalSignCountArgs<ExtArgs>
            result: $Utils.Optional<VitalSignCountAggregateOutputType> | number
          }
        }
      }
      ThresholdSettings: {
        payload: Prisma.$ThresholdSettingsPayload<ExtArgs>
        fields: Prisma.ThresholdSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThresholdSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThresholdSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThresholdSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThresholdSettingsPayload>
          }
          findFirst: {
            args: Prisma.ThresholdSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThresholdSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThresholdSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThresholdSettingsPayload>
          }
          findMany: {
            args: Prisma.ThresholdSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThresholdSettingsPayload>[]
          }
          create: {
            args: Prisma.ThresholdSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThresholdSettingsPayload>
          }
          createMany: {
            args: Prisma.ThresholdSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThresholdSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThresholdSettingsPayload>[]
          }
          delete: {
            args: Prisma.ThresholdSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThresholdSettingsPayload>
          }
          update: {
            args: Prisma.ThresholdSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThresholdSettingsPayload>
          }
          deleteMany: {
            args: Prisma.ThresholdSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThresholdSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThresholdSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThresholdSettingsPayload>[]
          }
          upsert: {
            args: Prisma.ThresholdSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThresholdSettingsPayload>
          }
          aggregate: {
            args: Prisma.ThresholdSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThresholdSettings>
          }
          groupBy: {
            args: Prisma.ThresholdSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThresholdSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThresholdSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<ThresholdSettingsCountAggregateOutputType> | number
          }
        }
      }
      VitalSignHistory: {
        payload: Prisma.$VitalSignHistoryPayload<ExtArgs>
        fields: Prisma.VitalSignHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VitalSignHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VitalSignHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignHistoryPayload>
          }
          findFirst: {
            args: Prisma.VitalSignHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VitalSignHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignHistoryPayload>
          }
          findMany: {
            args: Prisma.VitalSignHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignHistoryPayload>[]
          }
          create: {
            args: Prisma.VitalSignHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignHistoryPayload>
          }
          createMany: {
            args: Prisma.VitalSignHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VitalSignHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignHistoryPayload>[]
          }
          delete: {
            args: Prisma.VitalSignHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignHistoryPayload>
          }
          update: {
            args: Prisma.VitalSignHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignHistoryPayload>
          }
          deleteMany: {
            args: Prisma.VitalSignHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VitalSignHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VitalSignHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignHistoryPayload>[]
          }
          upsert: {
            args: Prisma.VitalSignHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignHistoryPayload>
          }
          aggregate: {
            args: Prisma.VitalSignHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVitalSignHistory>
          }
          groupBy: {
            args: Prisma.VitalSignHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<VitalSignHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.VitalSignHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<VitalSignHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    doctor?: DoctorOmit
    patient?: PatientOmit
    vitalSign?: VitalSignOmit
    thresholdSettings?: ThresholdSettingsOmit
    vitalSignHistory?: VitalSignHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    patients: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | DoctorCountOutputTypeCountPatientsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    vitalSignHistory: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vitalSignHistory?: boolean | PatientCountOutputTypeCountVitalSignHistoryArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountVitalSignHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VitalSignHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    id: number | null
  }

  export type DoctorSumAggregateOutputType = {
    id: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    specialty: string | null
    password: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    specialty: string | null
    password: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    specialty: number
    password: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    id?: true
  }

  export type DoctorSumAggregateInputType = {
    id?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    specialty?: true
    password?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    specialty?: true
    password?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    specialty?: true
    password?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: number
    name: string
    email: string
    specialty: string
    password: string
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    specialty?: boolean
    password?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patients?: boolean | Doctor$patientsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    specialty?: boolean
    password?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    specialty?: boolean
    password?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    specialty?: boolean
    password?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "specialty" | "password" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | Doctor$patientsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      patients: Prisma.$PatientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      specialty: string
      password: string
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patients<T extends Doctor$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'Int'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly email: FieldRef<"Doctor", 'String'>
    readonly specialty: FieldRef<"Doctor", 'String'>
    readonly password: FieldRef<"Doctor", 'String'>
    readonly avatarUrl: FieldRef<"Doctor", 'String'>
    readonly createdAt: FieldRef<"Doctor", 'DateTime'>
    readonly updatedAt: FieldRef<"Doctor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.patients
   */
  export type Doctor$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
    age: number | null
    doctorId: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
    age: number | null
    doctorId: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    room: string | null
    status: $Enums.PatientStatus | null
    medicalRecord: string | null
    doctorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    room: string | null
    status: $Enums.PatientStatus | null
    medicalRecord: string | null
    doctorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    age: number
    gender: number
    room: number
    status: number
    medicalRecord: number
    doctorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
    age?: true
    doctorId?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
    age?: true
    doctorId?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    room?: true
    status?: true
    medicalRecord?: true
    doctorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    room?: true
    status?: true
    medicalRecord?: true
    doctorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    room?: true
    status?: true
    medicalRecord?: true
    doctorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    doctorId: number
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    room?: boolean
    status?: boolean
    medicalRecord?: boolean
    doctorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    vitalSigns?: boolean | Patient$vitalSignsArgs<ExtArgs>
    vitalSignHistory?: boolean | Patient$vitalSignHistoryArgs<ExtArgs>
    thresholds?: boolean | Patient$thresholdsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    room?: boolean
    status?: boolean
    medicalRecord?: boolean
    doctorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    room?: boolean
    status?: boolean
    medicalRecord?: boolean
    doctorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    room?: boolean
    status?: boolean
    medicalRecord?: boolean
    doctorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "gender" | "room" | "status" | "medicalRecord" | "doctorId" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    vitalSigns?: boolean | Patient$vitalSignsArgs<ExtArgs>
    vitalSignHistory?: boolean | Patient$vitalSignHistoryArgs<ExtArgs>
    thresholds?: boolean | Patient$thresholdsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
      vitalSigns: Prisma.$VitalSignPayload<ExtArgs> | null
      vitalSignHistory: Prisma.$VitalSignHistoryPayload<ExtArgs>[]
      thresholds: Prisma.$ThresholdSettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      age: number
      gender: $Enums.Gender
      room: string
      status: $Enums.PatientStatus
      medicalRecord: string
      doctorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vitalSigns<T extends Patient$vitalSignsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$vitalSignsArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vitalSignHistory<T extends Patient$vitalSignHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Patient$vitalSignHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    thresholds<T extends Patient$thresholdsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$thresholdsArgs<ExtArgs>>): Prisma__ThresholdSettingsClient<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly age: FieldRef<"Patient", 'Int'>
    readonly gender: FieldRef<"Patient", 'Gender'>
    readonly room: FieldRef<"Patient", 'String'>
    readonly status: FieldRef<"Patient", 'PatientStatus'>
    readonly medicalRecord: FieldRef<"Patient", 'String'>
    readonly doctorId: FieldRef<"Patient", 'Int'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.vitalSigns
   */
  export type Patient$vitalSignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    where?: VitalSignWhereInput
  }

  /**
   * Patient.vitalSignHistory
   */
  export type Patient$vitalSignHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryInclude<ExtArgs> | null
    where?: VitalSignHistoryWhereInput
    orderBy?: VitalSignHistoryOrderByWithRelationInput | VitalSignHistoryOrderByWithRelationInput[]
    cursor?: VitalSignHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VitalSignHistoryScalarFieldEnum | VitalSignHistoryScalarFieldEnum[]
  }

  /**
   * Patient.thresholds
   */
  export type Patient$thresholdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsInclude<ExtArgs> | null
    where?: ThresholdSettingsWhereInput
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model VitalSign
   */

  export type AggregateVitalSign = {
    _count: VitalSignCountAggregateOutputType | null
    _avg: VitalSignAvgAggregateOutputType | null
    _sum: VitalSignSumAggregateOutputType | null
    _min: VitalSignMinAggregateOutputType | null
    _max: VitalSignMaxAggregateOutputType | null
  }

  export type VitalSignAvgAggregateOutputType = {
    id: number | null
    spo2: number | null
    bpm: number | null
    temperature: number | null
    patientId: number | null
  }

  export type VitalSignSumAggregateOutputType = {
    id: number | null
    spo2: number | null
    bpm: number | null
    temperature: number | null
    patientId: number | null
  }

  export type VitalSignMinAggregateOutputType = {
    id: number | null
    spo2: number | null
    bpm: number | null
    temperature: number | null
    patientId: number | null
    createdAt: Date | null
  }

  export type VitalSignMaxAggregateOutputType = {
    id: number | null
    spo2: number | null
    bpm: number | null
    temperature: number | null
    patientId: number | null
    createdAt: Date | null
  }

  export type VitalSignCountAggregateOutputType = {
    id: number
    spo2: number
    bpm: number
    temperature: number
    patientId: number
    createdAt: number
    _all: number
  }


  export type VitalSignAvgAggregateInputType = {
    id?: true
    spo2?: true
    bpm?: true
    temperature?: true
    patientId?: true
  }

  export type VitalSignSumAggregateInputType = {
    id?: true
    spo2?: true
    bpm?: true
    temperature?: true
    patientId?: true
  }

  export type VitalSignMinAggregateInputType = {
    id?: true
    spo2?: true
    bpm?: true
    temperature?: true
    patientId?: true
    createdAt?: true
  }

  export type VitalSignMaxAggregateInputType = {
    id?: true
    spo2?: true
    bpm?: true
    temperature?: true
    patientId?: true
    createdAt?: true
  }

  export type VitalSignCountAggregateInputType = {
    id?: true
    spo2?: true
    bpm?: true
    temperature?: true
    patientId?: true
    createdAt?: true
    _all?: true
  }

  export type VitalSignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VitalSign to aggregate.
     */
    where?: VitalSignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSigns to fetch.
     */
    orderBy?: VitalSignOrderByWithRelationInput | VitalSignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VitalSignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VitalSigns
    **/
    _count?: true | VitalSignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VitalSignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VitalSignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VitalSignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VitalSignMaxAggregateInputType
  }

  export type GetVitalSignAggregateType<T extends VitalSignAggregateArgs> = {
        [P in keyof T & keyof AggregateVitalSign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVitalSign[P]>
      : GetScalarType<T[P], AggregateVitalSign[P]>
  }




  export type VitalSignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VitalSignWhereInput
    orderBy?: VitalSignOrderByWithAggregationInput | VitalSignOrderByWithAggregationInput[]
    by: VitalSignScalarFieldEnum[] | VitalSignScalarFieldEnum
    having?: VitalSignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VitalSignCountAggregateInputType | true
    _avg?: VitalSignAvgAggregateInputType
    _sum?: VitalSignSumAggregateInputType
    _min?: VitalSignMinAggregateInputType
    _max?: VitalSignMaxAggregateInputType
  }

  export type VitalSignGroupByOutputType = {
    id: number
    spo2: number
    bpm: number
    temperature: number
    patientId: number
    createdAt: Date
    _count: VitalSignCountAggregateOutputType | null
    _avg: VitalSignAvgAggregateOutputType | null
    _sum: VitalSignSumAggregateOutputType | null
    _min: VitalSignMinAggregateOutputType | null
    _max: VitalSignMaxAggregateOutputType | null
  }

  type GetVitalSignGroupByPayload<T extends VitalSignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VitalSignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VitalSignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VitalSignGroupByOutputType[P]>
            : GetScalarType<T[P], VitalSignGroupByOutputType[P]>
        }
      >
    >


  export type VitalSignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spo2?: boolean
    bpm?: boolean
    temperature?: boolean
    patientId?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vitalSign"]>

  export type VitalSignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spo2?: boolean
    bpm?: boolean
    temperature?: boolean
    patientId?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vitalSign"]>

  export type VitalSignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spo2?: boolean
    bpm?: boolean
    temperature?: boolean
    patientId?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vitalSign"]>

  export type VitalSignSelectScalar = {
    id?: boolean
    spo2?: boolean
    bpm?: boolean
    temperature?: boolean
    patientId?: boolean
    createdAt?: boolean
  }

  export type VitalSignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spo2" | "bpm" | "temperature" | "patientId" | "createdAt", ExtArgs["result"]["vitalSign"]>
  export type VitalSignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type VitalSignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type VitalSignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $VitalSignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VitalSign"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      spo2: number
      bpm: number
      temperature: number
      patientId: number
      createdAt: Date
    }, ExtArgs["result"]["vitalSign"]>
    composites: {}
  }

  type VitalSignGetPayload<S extends boolean | null | undefined | VitalSignDefaultArgs> = $Result.GetResult<Prisma.$VitalSignPayload, S>

  type VitalSignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VitalSignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VitalSignCountAggregateInputType | true
    }

  export interface VitalSignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VitalSign'], meta: { name: 'VitalSign' } }
    /**
     * Find zero or one VitalSign that matches the filter.
     * @param {VitalSignFindUniqueArgs} args - Arguments to find a VitalSign
     * @example
     * // Get one VitalSign
     * const vitalSign = await prisma.vitalSign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VitalSignFindUniqueArgs>(args: SelectSubset<T, VitalSignFindUniqueArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VitalSign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VitalSignFindUniqueOrThrowArgs} args - Arguments to find a VitalSign
     * @example
     * // Get one VitalSign
     * const vitalSign = await prisma.vitalSign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VitalSignFindUniqueOrThrowArgs>(args: SelectSubset<T, VitalSignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VitalSign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignFindFirstArgs} args - Arguments to find a VitalSign
     * @example
     * // Get one VitalSign
     * const vitalSign = await prisma.vitalSign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VitalSignFindFirstArgs>(args?: SelectSubset<T, VitalSignFindFirstArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VitalSign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignFindFirstOrThrowArgs} args - Arguments to find a VitalSign
     * @example
     * // Get one VitalSign
     * const vitalSign = await prisma.vitalSign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VitalSignFindFirstOrThrowArgs>(args?: SelectSubset<T, VitalSignFindFirstOrThrowArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VitalSigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VitalSigns
     * const vitalSigns = await prisma.vitalSign.findMany()
     * 
     * // Get first 10 VitalSigns
     * const vitalSigns = await prisma.vitalSign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vitalSignWithIdOnly = await prisma.vitalSign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VitalSignFindManyArgs>(args?: SelectSubset<T, VitalSignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VitalSign.
     * @param {VitalSignCreateArgs} args - Arguments to create a VitalSign.
     * @example
     * // Create one VitalSign
     * const VitalSign = await prisma.vitalSign.create({
     *   data: {
     *     // ... data to create a VitalSign
     *   }
     * })
     * 
     */
    create<T extends VitalSignCreateArgs>(args: SelectSubset<T, VitalSignCreateArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VitalSigns.
     * @param {VitalSignCreateManyArgs} args - Arguments to create many VitalSigns.
     * @example
     * // Create many VitalSigns
     * const vitalSign = await prisma.vitalSign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VitalSignCreateManyArgs>(args?: SelectSubset<T, VitalSignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VitalSigns and returns the data saved in the database.
     * @param {VitalSignCreateManyAndReturnArgs} args - Arguments to create many VitalSigns.
     * @example
     * // Create many VitalSigns
     * const vitalSign = await prisma.vitalSign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VitalSigns and only return the `id`
     * const vitalSignWithIdOnly = await prisma.vitalSign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VitalSignCreateManyAndReturnArgs>(args?: SelectSubset<T, VitalSignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VitalSign.
     * @param {VitalSignDeleteArgs} args - Arguments to delete one VitalSign.
     * @example
     * // Delete one VitalSign
     * const VitalSign = await prisma.vitalSign.delete({
     *   where: {
     *     // ... filter to delete one VitalSign
     *   }
     * })
     * 
     */
    delete<T extends VitalSignDeleteArgs>(args: SelectSubset<T, VitalSignDeleteArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VitalSign.
     * @param {VitalSignUpdateArgs} args - Arguments to update one VitalSign.
     * @example
     * // Update one VitalSign
     * const vitalSign = await prisma.vitalSign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VitalSignUpdateArgs>(args: SelectSubset<T, VitalSignUpdateArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VitalSigns.
     * @param {VitalSignDeleteManyArgs} args - Arguments to filter VitalSigns to delete.
     * @example
     * // Delete a few VitalSigns
     * const { count } = await prisma.vitalSign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VitalSignDeleteManyArgs>(args?: SelectSubset<T, VitalSignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VitalSigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VitalSigns
     * const vitalSign = await prisma.vitalSign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VitalSignUpdateManyArgs>(args: SelectSubset<T, VitalSignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VitalSigns and returns the data updated in the database.
     * @param {VitalSignUpdateManyAndReturnArgs} args - Arguments to update many VitalSigns.
     * @example
     * // Update many VitalSigns
     * const vitalSign = await prisma.vitalSign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VitalSigns and only return the `id`
     * const vitalSignWithIdOnly = await prisma.vitalSign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VitalSignUpdateManyAndReturnArgs>(args: SelectSubset<T, VitalSignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VitalSign.
     * @param {VitalSignUpsertArgs} args - Arguments to update or create a VitalSign.
     * @example
     * // Update or create a VitalSign
     * const vitalSign = await prisma.vitalSign.upsert({
     *   create: {
     *     // ... data to create a VitalSign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VitalSign we want to update
     *   }
     * })
     */
    upsert<T extends VitalSignUpsertArgs>(args: SelectSubset<T, VitalSignUpsertArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VitalSigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignCountArgs} args - Arguments to filter VitalSigns to count.
     * @example
     * // Count the number of VitalSigns
     * const count = await prisma.vitalSign.count({
     *   where: {
     *     // ... the filter for the VitalSigns we want to count
     *   }
     * })
    **/
    count<T extends VitalSignCountArgs>(
      args?: Subset<T, VitalSignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VitalSignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VitalSign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VitalSignAggregateArgs>(args: Subset<T, VitalSignAggregateArgs>): Prisma.PrismaPromise<GetVitalSignAggregateType<T>>

    /**
     * Group by VitalSign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VitalSignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VitalSignGroupByArgs['orderBy'] }
        : { orderBy?: VitalSignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VitalSignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVitalSignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VitalSign model
   */
  readonly fields: VitalSignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VitalSign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VitalSignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VitalSign model
   */
  interface VitalSignFieldRefs {
    readonly id: FieldRef<"VitalSign", 'Int'>
    readonly spo2: FieldRef<"VitalSign", 'Int'>
    readonly bpm: FieldRef<"VitalSign", 'Int'>
    readonly temperature: FieldRef<"VitalSign", 'Float'>
    readonly patientId: FieldRef<"VitalSign", 'Int'>
    readonly createdAt: FieldRef<"VitalSign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VitalSign findUnique
   */
  export type VitalSignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter, which VitalSign to fetch.
     */
    where: VitalSignWhereUniqueInput
  }

  /**
   * VitalSign findUniqueOrThrow
   */
  export type VitalSignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter, which VitalSign to fetch.
     */
    where: VitalSignWhereUniqueInput
  }

  /**
   * VitalSign findFirst
   */
  export type VitalSignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter, which VitalSign to fetch.
     */
    where?: VitalSignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSigns to fetch.
     */
    orderBy?: VitalSignOrderByWithRelationInput | VitalSignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VitalSigns.
     */
    cursor?: VitalSignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VitalSigns.
     */
    distinct?: VitalSignScalarFieldEnum | VitalSignScalarFieldEnum[]
  }

  /**
   * VitalSign findFirstOrThrow
   */
  export type VitalSignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter, which VitalSign to fetch.
     */
    where?: VitalSignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSigns to fetch.
     */
    orderBy?: VitalSignOrderByWithRelationInput | VitalSignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VitalSigns.
     */
    cursor?: VitalSignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VitalSigns.
     */
    distinct?: VitalSignScalarFieldEnum | VitalSignScalarFieldEnum[]
  }

  /**
   * VitalSign findMany
   */
  export type VitalSignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter, which VitalSigns to fetch.
     */
    where?: VitalSignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSigns to fetch.
     */
    orderBy?: VitalSignOrderByWithRelationInput | VitalSignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VitalSigns.
     */
    cursor?: VitalSignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSigns.
     */
    skip?: number
    distinct?: VitalSignScalarFieldEnum | VitalSignScalarFieldEnum[]
  }

  /**
   * VitalSign create
   */
  export type VitalSignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * The data needed to create a VitalSign.
     */
    data: XOR<VitalSignCreateInput, VitalSignUncheckedCreateInput>
  }

  /**
   * VitalSign createMany
   */
  export type VitalSignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VitalSigns.
     */
    data: VitalSignCreateManyInput | VitalSignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VitalSign createManyAndReturn
   */
  export type VitalSignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * The data used to create many VitalSigns.
     */
    data: VitalSignCreateManyInput | VitalSignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VitalSign update
   */
  export type VitalSignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * The data needed to update a VitalSign.
     */
    data: XOR<VitalSignUpdateInput, VitalSignUncheckedUpdateInput>
    /**
     * Choose, which VitalSign to update.
     */
    where: VitalSignWhereUniqueInput
  }

  /**
   * VitalSign updateMany
   */
  export type VitalSignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VitalSigns.
     */
    data: XOR<VitalSignUpdateManyMutationInput, VitalSignUncheckedUpdateManyInput>
    /**
     * Filter which VitalSigns to update
     */
    where?: VitalSignWhereInput
    /**
     * Limit how many VitalSigns to update.
     */
    limit?: number
  }

  /**
   * VitalSign updateManyAndReturn
   */
  export type VitalSignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * The data used to update VitalSigns.
     */
    data: XOR<VitalSignUpdateManyMutationInput, VitalSignUncheckedUpdateManyInput>
    /**
     * Filter which VitalSigns to update
     */
    where?: VitalSignWhereInput
    /**
     * Limit how many VitalSigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VitalSign upsert
   */
  export type VitalSignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * The filter to search for the VitalSign to update in case it exists.
     */
    where: VitalSignWhereUniqueInput
    /**
     * In case the VitalSign found by the `where` argument doesn't exist, create a new VitalSign with this data.
     */
    create: XOR<VitalSignCreateInput, VitalSignUncheckedCreateInput>
    /**
     * In case the VitalSign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VitalSignUpdateInput, VitalSignUncheckedUpdateInput>
  }

  /**
   * VitalSign delete
   */
  export type VitalSignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter which VitalSign to delete.
     */
    where: VitalSignWhereUniqueInput
  }

  /**
   * VitalSign deleteMany
   */
  export type VitalSignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VitalSigns to delete
     */
    where?: VitalSignWhereInput
    /**
     * Limit how many VitalSigns to delete.
     */
    limit?: number
  }

  /**
   * VitalSign without action
   */
  export type VitalSignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
  }


  /**
   * Model ThresholdSettings
   */

  export type AggregateThresholdSettings = {
    _count: ThresholdSettingsCountAggregateOutputType | null
    _avg: ThresholdSettingsAvgAggregateOutputType | null
    _sum: ThresholdSettingsSumAggregateOutputType | null
    _min: ThresholdSettingsMinAggregateOutputType | null
    _max: ThresholdSettingsMaxAggregateOutputType | null
  }

  export type ThresholdSettingsAvgAggregateOutputType = {
    id: number | null
    spo2Min: number | null
    spo2Max: number | null
    bpmMin: number | null
    bpmMax: number | null
    tempMin: number | null
    tempMax: number | null
    patientId: number | null
  }

  export type ThresholdSettingsSumAggregateOutputType = {
    id: number | null
    spo2Min: number | null
    spo2Max: number | null
    bpmMin: number | null
    bpmMax: number | null
    tempMin: number | null
    tempMax: number | null
    patientId: number | null
  }

  export type ThresholdSettingsMinAggregateOutputType = {
    id: number | null
    spo2Min: number | null
    spo2Max: number | null
    bpmMin: number | null
    bpmMax: number | null
    tempMin: number | null
    tempMax: number | null
    patientId: number | null
    createdAt: Date | null
  }

  export type ThresholdSettingsMaxAggregateOutputType = {
    id: number | null
    spo2Min: number | null
    spo2Max: number | null
    bpmMin: number | null
    bpmMax: number | null
    tempMin: number | null
    tempMax: number | null
    patientId: number | null
    createdAt: Date | null
  }

  export type ThresholdSettingsCountAggregateOutputType = {
    id: number
    spo2Min: number
    spo2Max: number
    bpmMin: number
    bpmMax: number
    tempMin: number
    tempMax: number
    patientId: number
    createdAt: number
    _all: number
  }


  export type ThresholdSettingsAvgAggregateInputType = {
    id?: true
    spo2Min?: true
    spo2Max?: true
    bpmMin?: true
    bpmMax?: true
    tempMin?: true
    tempMax?: true
    patientId?: true
  }

  export type ThresholdSettingsSumAggregateInputType = {
    id?: true
    spo2Min?: true
    spo2Max?: true
    bpmMin?: true
    bpmMax?: true
    tempMin?: true
    tempMax?: true
    patientId?: true
  }

  export type ThresholdSettingsMinAggregateInputType = {
    id?: true
    spo2Min?: true
    spo2Max?: true
    bpmMin?: true
    bpmMax?: true
    tempMin?: true
    tempMax?: true
    patientId?: true
    createdAt?: true
  }

  export type ThresholdSettingsMaxAggregateInputType = {
    id?: true
    spo2Min?: true
    spo2Max?: true
    bpmMin?: true
    bpmMax?: true
    tempMin?: true
    tempMax?: true
    patientId?: true
    createdAt?: true
  }

  export type ThresholdSettingsCountAggregateInputType = {
    id?: true
    spo2Min?: true
    spo2Max?: true
    bpmMin?: true
    bpmMax?: true
    tempMin?: true
    tempMax?: true
    patientId?: true
    createdAt?: true
    _all?: true
  }

  export type ThresholdSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThresholdSettings to aggregate.
     */
    where?: ThresholdSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThresholdSettings to fetch.
     */
    orderBy?: ThresholdSettingsOrderByWithRelationInput | ThresholdSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThresholdSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThresholdSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThresholdSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ThresholdSettings
    **/
    _count?: true | ThresholdSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThresholdSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThresholdSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThresholdSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThresholdSettingsMaxAggregateInputType
  }

  export type GetThresholdSettingsAggregateType<T extends ThresholdSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateThresholdSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThresholdSettings[P]>
      : GetScalarType<T[P], AggregateThresholdSettings[P]>
  }




  export type ThresholdSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThresholdSettingsWhereInput
    orderBy?: ThresholdSettingsOrderByWithAggregationInput | ThresholdSettingsOrderByWithAggregationInput[]
    by: ThresholdSettingsScalarFieldEnum[] | ThresholdSettingsScalarFieldEnum
    having?: ThresholdSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThresholdSettingsCountAggregateInputType | true
    _avg?: ThresholdSettingsAvgAggregateInputType
    _sum?: ThresholdSettingsSumAggregateInputType
    _min?: ThresholdSettingsMinAggregateInputType
    _max?: ThresholdSettingsMaxAggregateInputType
  }

  export type ThresholdSettingsGroupByOutputType = {
    id: number
    spo2Min: number
    spo2Max: number
    bpmMin: number
    bpmMax: number
    tempMin: number
    tempMax: number
    patientId: number
    createdAt: Date
    _count: ThresholdSettingsCountAggregateOutputType | null
    _avg: ThresholdSettingsAvgAggregateOutputType | null
    _sum: ThresholdSettingsSumAggregateOutputType | null
    _min: ThresholdSettingsMinAggregateOutputType | null
    _max: ThresholdSettingsMaxAggregateOutputType | null
  }

  type GetThresholdSettingsGroupByPayload<T extends ThresholdSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThresholdSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThresholdSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThresholdSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], ThresholdSettingsGroupByOutputType[P]>
        }
      >
    >


  export type ThresholdSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spo2Min?: boolean
    spo2Max?: boolean
    bpmMin?: boolean
    bpmMax?: boolean
    tempMin?: boolean
    tempMax?: boolean
    patientId?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thresholdSettings"]>

  export type ThresholdSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spo2Min?: boolean
    spo2Max?: boolean
    bpmMin?: boolean
    bpmMax?: boolean
    tempMin?: boolean
    tempMax?: boolean
    patientId?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thresholdSettings"]>

  export type ThresholdSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spo2Min?: boolean
    spo2Max?: boolean
    bpmMin?: boolean
    bpmMax?: boolean
    tempMin?: boolean
    tempMax?: boolean
    patientId?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thresholdSettings"]>

  export type ThresholdSettingsSelectScalar = {
    id?: boolean
    spo2Min?: boolean
    spo2Max?: boolean
    bpmMin?: boolean
    bpmMax?: boolean
    tempMin?: boolean
    tempMax?: boolean
    patientId?: boolean
    createdAt?: boolean
  }

  export type ThresholdSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spo2Min" | "spo2Max" | "bpmMin" | "bpmMax" | "tempMin" | "tempMax" | "patientId" | "createdAt", ExtArgs["result"]["thresholdSettings"]>
  export type ThresholdSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type ThresholdSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type ThresholdSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $ThresholdSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ThresholdSettings"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      spo2Min: number
      spo2Max: number
      bpmMin: number
      bpmMax: number
      tempMin: number
      tempMax: number
      patientId: number
      createdAt: Date
    }, ExtArgs["result"]["thresholdSettings"]>
    composites: {}
  }

  type ThresholdSettingsGetPayload<S extends boolean | null | undefined | ThresholdSettingsDefaultArgs> = $Result.GetResult<Prisma.$ThresholdSettingsPayload, S>

  type ThresholdSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThresholdSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThresholdSettingsCountAggregateInputType | true
    }

  export interface ThresholdSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ThresholdSettings'], meta: { name: 'ThresholdSettings' } }
    /**
     * Find zero or one ThresholdSettings that matches the filter.
     * @param {ThresholdSettingsFindUniqueArgs} args - Arguments to find a ThresholdSettings
     * @example
     * // Get one ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThresholdSettingsFindUniqueArgs>(args: SelectSubset<T, ThresholdSettingsFindUniqueArgs<ExtArgs>>): Prisma__ThresholdSettingsClient<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ThresholdSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThresholdSettingsFindUniqueOrThrowArgs} args - Arguments to find a ThresholdSettings
     * @example
     * // Get one ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThresholdSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, ThresholdSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThresholdSettingsClient<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ThresholdSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThresholdSettingsFindFirstArgs} args - Arguments to find a ThresholdSettings
     * @example
     * // Get one ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThresholdSettingsFindFirstArgs>(args?: SelectSubset<T, ThresholdSettingsFindFirstArgs<ExtArgs>>): Prisma__ThresholdSettingsClient<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ThresholdSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThresholdSettingsFindFirstOrThrowArgs} args - Arguments to find a ThresholdSettings
     * @example
     * // Get one ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThresholdSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, ThresholdSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThresholdSettingsClient<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ThresholdSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThresholdSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.findMany()
     * 
     * // Get first 10 ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const thresholdSettingsWithIdOnly = await prisma.thresholdSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThresholdSettingsFindManyArgs>(args?: SelectSubset<T, ThresholdSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ThresholdSettings.
     * @param {ThresholdSettingsCreateArgs} args - Arguments to create a ThresholdSettings.
     * @example
     * // Create one ThresholdSettings
     * const ThresholdSettings = await prisma.thresholdSettings.create({
     *   data: {
     *     // ... data to create a ThresholdSettings
     *   }
     * })
     * 
     */
    create<T extends ThresholdSettingsCreateArgs>(args: SelectSubset<T, ThresholdSettingsCreateArgs<ExtArgs>>): Prisma__ThresholdSettingsClient<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ThresholdSettings.
     * @param {ThresholdSettingsCreateManyArgs} args - Arguments to create many ThresholdSettings.
     * @example
     * // Create many ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThresholdSettingsCreateManyArgs>(args?: SelectSubset<T, ThresholdSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ThresholdSettings and returns the data saved in the database.
     * @param {ThresholdSettingsCreateManyAndReturnArgs} args - Arguments to create many ThresholdSettings.
     * @example
     * // Create many ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ThresholdSettings and only return the `id`
     * const thresholdSettingsWithIdOnly = await prisma.thresholdSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThresholdSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, ThresholdSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ThresholdSettings.
     * @param {ThresholdSettingsDeleteArgs} args - Arguments to delete one ThresholdSettings.
     * @example
     * // Delete one ThresholdSettings
     * const ThresholdSettings = await prisma.thresholdSettings.delete({
     *   where: {
     *     // ... filter to delete one ThresholdSettings
     *   }
     * })
     * 
     */
    delete<T extends ThresholdSettingsDeleteArgs>(args: SelectSubset<T, ThresholdSettingsDeleteArgs<ExtArgs>>): Prisma__ThresholdSettingsClient<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ThresholdSettings.
     * @param {ThresholdSettingsUpdateArgs} args - Arguments to update one ThresholdSettings.
     * @example
     * // Update one ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThresholdSettingsUpdateArgs>(args: SelectSubset<T, ThresholdSettingsUpdateArgs<ExtArgs>>): Prisma__ThresholdSettingsClient<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ThresholdSettings.
     * @param {ThresholdSettingsDeleteManyArgs} args - Arguments to filter ThresholdSettings to delete.
     * @example
     * // Delete a few ThresholdSettings
     * const { count } = await prisma.thresholdSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThresholdSettingsDeleteManyArgs>(args?: SelectSubset<T, ThresholdSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThresholdSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThresholdSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThresholdSettingsUpdateManyArgs>(args: SelectSubset<T, ThresholdSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThresholdSettings and returns the data updated in the database.
     * @param {ThresholdSettingsUpdateManyAndReturnArgs} args - Arguments to update many ThresholdSettings.
     * @example
     * // Update many ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ThresholdSettings and only return the `id`
     * const thresholdSettingsWithIdOnly = await prisma.thresholdSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThresholdSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, ThresholdSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ThresholdSettings.
     * @param {ThresholdSettingsUpsertArgs} args - Arguments to update or create a ThresholdSettings.
     * @example
     * // Update or create a ThresholdSettings
     * const thresholdSettings = await prisma.thresholdSettings.upsert({
     *   create: {
     *     // ... data to create a ThresholdSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ThresholdSettings we want to update
     *   }
     * })
     */
    upsert<T extends ThresholdSettingsUpsertArgs>(args: SelectSubset<T, ThresholdSettingsUpsertArgs<ExtArgs>>): Prisma__ThresholdSettingsClient<$Result.GetResult<Prisma.$ThresholdSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ThresholdSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThresholdSettingsCountArgs} args - Arguments to filter ThresholdSettings to count.
     * @example
     * // Count the number of ThresholdSettings
     * const count = await prisma.thresholdSettings.count({
     *   where: {
     *     // ... the filter for the ThresholdSettings we want to count
     *   }
     * })
    **/
    count<T extends ThresholdSettingsCountArgs>(
      args?: Subset<T, ThresholdSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThresholdSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ThresholdSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThresholdSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThresholdSettingsAggregateArgs>(args: Subset<T, ThresholdSettingsAggregateArgs>): Prisma.PrismaPromise<GetThresholdSettingsAggregateType<T>>

    /**
     * Group by ThresholdSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThresholdSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThresholdSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThresholdSettingsGroupByArgs['orderBy'] }
        : { orderBy?: ThresholdSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThresholdSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThresholdSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ThresholdSettings model
   */
  readonly fields: ThresholdSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ThresholdSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThresholdSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ThresholdSettings model
   */
  interface ThresholdSettingsFieldRefs {
    readonly id: FieldRef<"ThresholdSettings", 'Int'>
    readonly spo2Min: FieldRef<"ThresholdSettings", 'Int'>
    readonly spo2Max: FieldRef<"ThresholdSettings", 'Int'>
    readonly bpmMin: FieldRef<"ThresholdSettings", 'Int'>
    readonly bpmMax: FieldRef<"ThresholdSettings", 'Int'>
    readonly tempMin: FieldRef<"ThresholdSettings", 'Float'>
    readonly tempMax: FieldRef<"ThresholdSettings", 'Float'>
    readonly patientId: FieldRef<"ThresholdSettings", 'Int'>
    readonly createdAt: FieldRef<"ThresholdSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ThresholdSettings findUnique
   */
  export type ThresholdSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsInclude<ExtArgs> | null
    /**
     * Filter, which ThresholdSettings to fetch.
     */
    where: ThresholdSettingsWhereUniqueInput
  }

  /**
   * ThresholdSettings findUniqueOrThrow
   */
  export type ThresholdSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsInclude<ExtArgs> | null
    /**
     * Filter, which ThresholdSettings to fetch.
     */
    where: ThresholdSettingsWhereUniqueInput
  }

  /**
   * ThresholdSettings findFirst
   */
  export type ThresholdSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsInclude<ExtArgs> | null
    /**
     * Filter, which ThresholdSettings to fetch.
     */
    where?: ThresholdSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThresholdSettings to fetch.
     */
    orderBy?: ThresholdSettingsOrderByWithRelationInput | ThresholdSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThresholdSettings.
     */
    cursor?: ThresholdSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThresholdSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThresholdSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThresholdSettings.
     */
    distinct?: ThresholdSettingsScalarFieldEnum | ThresholdSettingsScalarFieldEnum[]
  }

  /**
   * ThresholdSettings findFirstOrThrow
   */
  export type ThresholdSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsInclude<ExtArgs> | null
    /**
     * Filter, which ThresholdSettings to fetch.
     */
    where?: ThresholdSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThresholdSettings to fetch.
     */
    orderBy?: ThresholdSettingsOrderByWithRelationInput | ThresholdSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ThresholdSettings.
     */
    cursor?: ThresholdSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThresholdSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThresholdSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ThresholdSettings.
     */
    distinct?: ThresholdSettingsScalarFieldEnum | ThresholdSettingsScalarFieldEnum[]
  }

  /**
   * ThresholdSettings findMany
   */
  export type ThresholdSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsInclude<ExtArgs> | null
    /**
     * Filter, which ThresholdSettings to fetch.
     */
    where?: ThresholdSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ThresholdSettings to fetch.
     */
    orderBy?: ThresholdSettingsOrderByWithRelationInput | ThresholdSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ThresholdSettings.
     */
    cursor?: ThresholdSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ThresholdSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ThresholdSettings.
     */
    skip?: number
    distinct?: ThresholdSettingsScalarFieldEnum | ThresholdSettingsScalarFieldEnum[]
  }

  /**
   * ThresholdSettings create
   */
  export type ThresholdSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a ThresholdSettings.
     */
    data: XOR<ThresholdSettingsCreateInput, ThresholdSettingsUncheckedCreateInput>
  }

  /**
   * ThresholdSettings createMany
   */
  export type ThresholdSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ThresholdSettings.
     */
    data: ThresholdSettingsCreateManyInput | ThresholdSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ThresholdSettings createManyAndReturn
   */
  export type ThresholdSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many ThresholdSettings.
     */
    data: ThresholdSettingsCreateManyInput | ThresholdSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ThresholdSettings update
   */
  export type ThresholdSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a ThresholdSettings.
     */
    data: XOR<ThresholdSettingsUpdateInput, ThresholdSettingsUncheckedUpdateInput>
    /**
     * Choose, which ThresholdSettings to update.
     */
    where: ThresholdSettingsWhereUniqueInput
  }

  /**
   * ThresholdSettings updateMany
   */
  export type ThresholdSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ThresholdSettings.
     */
    data: XOR<ThresholdSettingsUpdateManyMutationInput, ThresholdSettingsUncheckedUpdateManyInput>
    /**
     * Filter which ThresholdSettings to update
     */
    where?: ThresholdSettingsWhereInput
    /**
     * Limit how many ThresholdSettings to update.
     */
    limit?: number
  }

  /**
   * ThresholdSettings updateManyAndReturn
   */
  export type ThresholdSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * The data used to update ThresholdSettings.
     */
    data: XOR<ThresholdSettingsUpdateManyMutationInput, ThresholdSettingsUncheckedUpdateManyInput>
    /**
     * Filter which ThresholdSettings to update
     */
    where?: ThresholdSettingsWhereInput
    /**
     * Limit how many ThresholdSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ThresholdSettings upsert
   */
  export type ThresholdSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the ThresholdSettings to update in case it exists.
     */
    where: ThresholdSettingsWhereUniqueInput
    /**
     * In case the ThresholdSettings found by the `where` argument doesn't exist, create a new ThresholdSettings with this data.
     */
    create: XOR<ThresholdSettingsCreateInput, ThresholdSettingsUncheckedCreateInput>
    /**
     * In case the ThresholdSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThresholdSettingsUpdateInput, ThresholdSettingsUncheckedUpdateInput>
  }

  /**
   * ThresholdSettings delete
   */
  export type ThresholdSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsInclude<ExtArgs> | null
    /**
     * Filter which ThresholdSettings to delete.
     */
    where: ThresholdSettingsWhereUniqueInput
  }

  /**
   * ThresholdSettings deleteMany
   */
  export type ThresholdSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ThresholdSettings to delete
     */
    where?: ThresholdSettingsWhereInput
    /**
     * Limit how many ThresholdSettings to delete.
     */
    limit?: number
  }

  /**
   * ThresholdSettings without action
   */
  export type ThresholdSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThresholdSettings
     */
    select?: ThresholdSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ThresholdSettings
     */
    omit?: ThresholdSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThresholdSettingsInclude<ExtArgs> | null
  }


  /**
   * Model VitalSignHistory
   */

  export type AggregateVitalSignHistory = {
    _count: VitalSignHistoryCountAggregateOutputType | null
    _avg: VitalSignHistoryAvgAggregateOutputType | null
    _sum: VitalSignHistorySumAggregateOutputType | null
    _min: VitalSignHistoryMinAggregateOutputType | null
    _max: VitalSignHistoryMaxAggregateOutputType | null
  }

  export type VitalSignHistoryAvgAggregateOutputType = {
    id: number | null
    spo2: number | null
    bpm: number | null
    temperature: number | null
    patientId: number | null
  }

  export type VitalSignHistorySumAggregateOutputType = {
    id: number | null
    spo2: number | null
    bpm: number | null
    temperature: number | null
    patientId: number | null
  }

  export type VitalSignHistoryMinAggregateOutputType = {
    id: number | null
    spo2: number | null
    bpm: number | null
    temperature: number | null
    patientId: number | null
    createdAt: Date | null
  }

  export type VitalSignHistoryMaxAggregateOutputType = {
    id: number | null
    spo2: number | null
    bpm: number | null
    temperature: number | null
    patientId: number | null
    createdAt: Date | null
  }

  export type VitalSignHistoryCountAggregateOutputType = {
    id: number
    spo2: number
    bpm: number
    temperature: number
    patientId: number
    createdAt: number
    _all: number
  }


  export type VitalSignHistoryAvgAggregateInputType = {
    id?: true
    spo2?: true
    bpm?: true
    temperature?: true
    patientId?: true
  }

  export type VitalSignHistorySumAggregateInputType = {
    id?: true
    spo2?: true
    bpm?: true
    temperature?: true
    patientId?: true
  }

  export type VitalSignHistoryMinAggregateInputType = {
    id?: true
    spo2?: true
    bpm?: true
    temperature?: true
    patientId?: true
    createdAt?: true
  }

  export type VitalSignHistoryMaxAggregateInputType = {
    id?: true
    spo2?: true
    bpm?: true
    temperature?: true
    patientId?: true
    createdAt?: true
  }

  export type VitalSignHistoryCountAggregateInputType = {
    id?: true
    spo2?: true
    bpm?: true
    temperature?: true
    patientId?: true
    createdAt?: true
    _all?: true
  }

  export type VitalSignHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VitalSignHistory to aggregate.
     */
    where?: VitalSignHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSignHistories to fetch.
     */
    orderBy?: VitalSignHistoryOrderByWithRelationInput | VitalSignHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VitalSignHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSignHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSignHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VitalSignHistories
    **/
    _count?: true | VitalSignHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VitalSignHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VitalSignHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VitalSignHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VitalSignHistoryMaxAggregateInputType
  }

  export type GetVitalSignHistoryAggregateType<T extends VitalSignHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateVitalSignHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVitalSignHistory[P]>
      : GetScalarType<T[P], AggregateVitalSignHistory[P]>
  }




  export type VitalSignHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VitalSignHistoryWhereInput
    orderBy?: VitalSignHistoryOrderByWithAggregationInput | VitalSignHistoryOrderByWithAggregationInput[]
    by: VitalSignHistoryScalarFieldEnum[] | VitalSignHistoryScalarFieldEnum
    having?: VitalSignHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VitalSignHistoryCountAggregateInputType | true
    _avg?: VitalSignHistoryAvgAggregateInputType
    _sum?: VitalSignHistorySumAggregateInputType
    _min?: VitalSignHistoryMinAggregateInputType
    _max?: VitalSignHistoryMaxAggregateInputType
  }

  export type VitalSignHistoryGroupByOutputType = {
    id: number
    spo2: number
    bpm: number
    temperature: number
    patientId: number
    createdAt: Date
    _count: VitalSignHistoryCountAggregateOutputType | null
    _avg: VitalSignHistoryAvgAggregateOutputType | null
    _sum: VitalSignHistorySumAggregateOutputType | null
    _min: VitalSignHistoryMinAggregateOutputType | null
    _max: VitalSignHistoryMaxAggregateOutputType | null
  }

  type GetVitalSignHistoryGroupByPayload<T extends VitalSignHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VitalSignHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VitalSignHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VitalSignHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], VitalSignHistoryGroupByOutputType[P]>
        }
      >
    >


  export type VitalSignHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spo2?: boolean
    bpm?: boolean
    temperature?: boolean
    patientId?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vitalSignHistory"]>

  export type VitalSignHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spo2?: boolean
    bpm?: boolean
    temperature?: boolean
    patientId?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vitalSignHistory"]>

  export type VitalSignHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spo2?: boolean
    bpm?: boolean
    temperature?: boolean
    patientId?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vitalSignHistory"]>

  export type VitalSignHistorySelectScalar = {
    id?: boolean
    spo2?: boolean
    bpm?: boolean
    temperature?: boolean
    patientId?: boolean
    createdAt?: boolean
  }

  export type VitalSignHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spo2" | "bpm" | "temperature" | "patientId" | "createdAt", ExtArgs["result"]["vitalSignHistory"]>
  export type VitalSignHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type VitalSignHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type VitalSignHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $VitalSignHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VitalSignHistory"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      spo2: number
      bpm: number
      temperature: number
      patientId: number
      createdAt: Date
    }, ExtArgs["result"]["vitalSignHistory"]>
    composites: {}
  }

  type VitalSignHistoryGetPayload<S extends boolean | null | undefined | VitalSignHistoryDefaultArgs> = $Result.GetResult<Prisma.$VitalSignHistoryPayload, S>

  type VitalSignHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VitalSignHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VitalSignHistoryCountAggregateInputType | true
    }

  export interface VitalSignHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VitalSignHistory'], meta: { name: 'VitalSignHistory' } }
    /**
     * Find zero or one VitalSignHistory that matches the filter.
     * @param {VitalSignHistoryFindUniqueArgs} args - Arguments to find a VitalSignHistory
     * @example
     * // Get one VitalSignHistory
     * const vitalSignHistory = await prisma.vitalSignHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VitalSignHistoryFindUniqueArgs>(args: SelectSubset<T, VitalSignHistoryFindUniqueArgs<ExtArgs>>): Prisma__VitalSignHistoryClient<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VitalSignHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VitalSignHistoryFindUniqueOrThrowArgs} args - Arguments to find a VitalSignHistory
     * @example
     * // Get one VitalSignHistory
     * const vitalSignHistory = await prisma.vitalSignHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VitalSignHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, VitalSignHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VitalSignHistoryClient<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VitalSignHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignHistoryFindFirstArgs} args - Arguments to find a VitalSignHistory
     * @example
     * // Get one VitalSignHistory
     * const vitalSignHistory = await prisma.vitalSignHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VitalSignHistoryFindFirstArgs>(args?: SelectSubset<T, VitalSignHistoryFindFirstArgs<ExtArgs>>): Prisma__VitalSignHistoryClient<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VitalSignHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignHistoryFindFirstOrThrowArgs} args - Arguments to find a VitalSignHistory
     * @example
     * // Get one VitalSignHistory
     * const vitalSignHistory = await prisma.vitalSignHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VitalSignHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, VitalSignHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__VitalSignHistoryClient<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VitalSignHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VitalSignHistories
     * const vitalSignHistories = await prisma.vitalSignHistory.findMany()
     * 
     * // Get first 10 VitalSignHistories
     * const vitalSignHistories = await prisma.vitalSignHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vitalSignHistoryWithIdOnly = await prisma.vitalSignHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VitalSignHistoryFindManyArgs>(args?: SelectSubset<T, VitalSignHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VitalSignHistory.
     * @param {VitalSignHistoryCreateArgs} args - Arguments to create a VitalSignHistory.
     * @example
     * // Create one VitalSignHistory
     * const VitalSignHistory = await prisma.vitalSignHistory.create({
     *   data: {
     *     // ... data to create a VitalSignHistory
     *   }
     * })
     * 
     */
    create<T extends VitalSignHistoryCreateArgs>(args: SelectSubset<T, VitalSignHistoryCreateArgs<ExtArgs>>): Prisma__VitalSignHistoryClient<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VitalSignHistories.
     * @param {VitalSignHistoryCreateManyArgs} args - Arguments to create many VitalSignHistories.
     * @example
     * // Create many VitalSignHistories
     * const vitalSignHistory = await prisma.vitalSignHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VitalSignHistoryCreateManyArgs>(args?: SelectSubset<T, VitalSignHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VitalSignHistories and returns the data saved in the database.
     * @param {VitalSignHistoryCreateManyAndReturnArgs} args - Arguments to create many VitalSignHistories.
     * @example
     * // Create many VitalSignHistories
     * const vitalSignHistory = await prisma.vitalSignHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VitalSignHistories and only return the `id`
     * const vitalSignHistoryWithIdOnly = await prisma.vitalSignHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VitalSignHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, VitalSignHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VitalSignHistory.
     * @param {VitalSignHistoryDeleteArgs} args - Arguments to delete one VitalSignHistory.
     * @example
     * // Delete one VitalSignHistory
     * const VitalSignHistory = await prisma.vitalSignHistory.delete({
     *   where: {
     *     // ... filter to delete one VitalSignHistory
     *   }
     * })
     * 
     */
    delete<T extends VitalSignHistoryDeleteArgs>(args: SelectSubset<T, VitalSignHistoryDeleteArgs<ExtArgs>>): Prisma__VitalSignHistoryClient<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VitalSignHistory.
     * @param {VitalSignHistoryUpdateArgs} args - Arguments to update one VitalSignHistory.
     * @example
     * // Update one VitalSignHistory
     * const vitalSignHistory = await prisma.vitalSignHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VitalSignHistoryUpdateArgs>(args: SelectSubset<T, VitalSignHistoryUpdateArgs<ExtArgs>>): Prisma__VitalSignHistoryClient<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VitalSignHistories.
     * @param {VitalSignHistoryDeleteManyArgs} args - Arguments to filter VitalSignHistories to delete.
     * @example
     * // Delete a few VitalSignHistories
     * const { count } = await prisma.vitalSignHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VitalSignHistoryDeleteManyArgs>(args?: SelectSubset<T, VitalSignHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VitalSignHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VitalSignHistories
     * const vitalSignHistory = await prisma.vitalSignHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VitalSignHistoryUpdateManyArgs>(args: SelectSubset<T, VitalSignHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VitalSignHistories and returns the data updated in the database.
     * @param {VitalSignHistoryUpdateManyAndReturnArgs} args - Arguments to update many VitalSignHistories.
     * @example
     * // Update many VitalSignHistories
     * const vitalSignHistory = await prisma.vitalSignHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VitalSignHistories and only return the `id`
     * const vitalSignHistoryWithIdOnly = await prisma.vitalSignHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VitalSignHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, VitalSignHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VitalSignHistory.
     * @param {VitalSignHistoryUpsertArgs} args - Arguments to update or create a VitalSignHistory.
     * @example
     * // Update or create a VitalSignHistory
     * const vitalSignHistory = await prisma.vitalSignHistory.upsert({
     *   create: {
     *     // ... data to create a VitalSignHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VitalSignHistory we want to update
     *   }
     * })
     */
    upsert<T extends VitalSignHistoryUpsertArgs>(args: SelectSubset<T, VitalSignHistoryUpsertArgs<ExtArgs>>): Prisma__VitalSignHistoryClient<$Result.GetResult<Prisma.$VitalSignHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VitalSignHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignHistoryCountArgs} args - Arguments to filter VitalSignHistories to count.
     * @example
     * // Count the number of VitalSignHistories
     * const count = await prisma.vitalSignHistory.count({
     *   where: {
     *     // ... the filter for the VitalSignHistories we want to count
     *   }
     * })
    **/
    count<T extends VitalSignHistoryCountArgs>(
      args?: Subset<T, VitalSignHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VitalSignHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VitalSignHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VitalSignHistoryAggregateArgs>(args: Subset<T, VitalSignHistoryAggregateArgs>): Prisma.PrismaPromise<GetVitalSignHistoryAggregateType<T>>

    /**
     * Group by VitalSignHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VitalSignHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VitalSignHistoryGroupByArgs['orderBy'] }
        : { orderBy?: VitalSignHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VitalSignHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVitalSignHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VitalSignHistory model
   */
  readonly fields: VitalSignHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VitalSignHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VitalSignHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VitalSignHistory model
   */
  interface VitalSignHistoryFieldRefs {
    readonly id: FieldRef<"VitalSignHistory", 'Int'>
    readonly spo2: FieldRef<"VitalSignHistory", 'Int'>
    readonly bpm: FieldRef<"VitalSignHistory", 'Int'>
    readonly temperature: FieldRef<"VitalSignHistory", 'Float'>
    readonly patientId: FieldRef<"VitalSignHistory", 'Int'>
    readonly createdAt: FieldRef<"VitalSignHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VitalSignHistory findUnique
   */
  export type VitalSignHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryInclude<ExtArgs> | null
    /**
     * Filter, which VitalSignHistory to fetch.
     */
    where: VitalSignHistoryWhereUniqueInput
  }

  /**
   * VitalSignHistory findUniqueOrThrow
   */
  export type VitalSignHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryInclude<ExtArgs> | null
    /**
     * Filter, which VitalSignHistory to fetch.
     */
    where: VitalSignHistoryWhereUniqueInput
  }

  /**
   * VitalSignHistory findFirst
   */
  export type VitalSignHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryInclude<ExtArgs> | null
    /**
     * Filter, which VitalSignHistory to fetch.
     */
    where?: VitalSignHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSignHistories to fetch.
     */
    orderBy?: VitalSignHistoryOrderByWithRelationInput | VitalSignHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VitalSignHistories.
     */
    cursor?: VitalSignHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSignHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSignHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VitalSignHistories.
     */
    distinct?: VitalSignHistoryScalarFieldEnum | VitalSignHistoryScalarFieldEnum[]
  }

  /**
   * VitalSignHistory findFirstOrThrow
   */
  export type VitalSignHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryInclude<ExtArgs> | null
    /**
     * Filter, which VitalSignHistory to fetch.
     */
    where?: VitalSignHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSignHistories to fetch.
     */
    orderBy?: VitalSignHistoryOrderByWithRelationInput | VitalSignHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VitalSignHistories.
     */
    cursor?: VitalSignHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSignHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSignHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VitalSignHistories.
     */
    distinct?: VitalSignHistoryScalarFieldEnum | VitalSignHistoryScalarFieldEnum[]
  }

  /**
   * VitalSignHistory findMany
   */
  export type VitalSignHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryInclude<ExtArgs> | null
    /**
     * Filter, which VitalSignHistories to fetch.
     */
    where?: VitalSignHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSignHistories to fetch.
     */
    orderBy?: VitalSignHistoryOrderByWithRelationInput | VitalSignHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VitalSignHistories.
     */
    cursor?: VitalSignHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSignHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSignHistories.
     */
    skip?: number
    distinct?: VitalSignHistoryScalarFieldEnum | VitalSignHistoryScalarFieldEnum[]
  }

  /**
   * VitalSignHistory create
   */
  export type VitalSignHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a VitalSignHistory.
     */
    data: XOR<VitalSignHistoryCreateInput, VitalSignHistoryUncheckedCreateInput>
  }

  /**
   * VitalSignHistory createMany
   */
  export type VitalSignHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VitalSignHistories.
     */
    data: VitalSignHistoryCreateManyInput | VitalSignHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VitalSignHistory createManyAndReturn
   */
  export type VitalSignHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many VitalSignHistories.
     */
    data: VitalSignHistoryCreateManyInput | VitalSignHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VitalSignHistory update
   */
  export type VitalSignHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a VitalSignHistory.
     */
    data: XOR<VitalSignHistoryUpdateInput, VitalSignHistoryUncheckedUpdateInput>
    /**
     * Choose, which VitalSignHistory to update.
     */
    where: VitalSignHistoryWhereUniqueInput
  }

  /**
   * VitalSignHistory updateMany
   */
  export type VitalSignHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VitalSignHistories.
     */
    data: XOR<VitalSignHistoryUpdateManyMutationInput, VitalSignHistoryUncheckedUpdateManyInput>
    /**
     * Filter which VitalSignHistories to update
     */
    where?: VitalSignHistoryWhereInput
    /**
     * Limit how many VitalSignHistories to update.
     */
    limit?: number
  }

  /**
   * VitalSignHistory updateManyAndReturn
   */
  export type VitalSignHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * The data used to update VitalSignHistories.
     */
    data: XOR<VitalSignHistoryUpdateManyMutationInput, VitalSignHistoryUncheckedUpdateManyInput>
    /**
     * Filter which VitalSignHistories to update
     */
    where?: VitalSignHistoryWhereInput
    /**
     * Limit how many VitalSignHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VitalSignHistory upsert
   */
  export type VitalSignHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the VitalSignHistory to update in case it exists.
     */
    where: VitalSignHistoryWhereUniqueInput
    /**
     * In case the VitalSignHistory found by the `where` argument doesn't exist, create a new VitalSignHistory with this data.
     */
    create: XOR<VitalSignHistoryCreateInput, VitalSignHistoryUncheckedCreateInput>
    /**
     * In case the VitalSignHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VitalSignHistoryUpdateInput, VitalSignHistoryUncheckedUpdateInput>
  }

  /**
   * VitalSignHistory delete
   */
  export type VitalSignHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryInclude<ExtArgs> | null
    /**
     * Filter which VitalSignHistory to delete.
     */
    where: VitalSignHistoryWhereUniqueInput
  }

  /**
   * VitalSignHistory deleteMany
   */
  export type VitalSignHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VitalSignHistories to delete
     */
    where?: VitalSignHistoryWhereInput
    /**
     * Limit how many VitalSignHistories to delete.
     */
    limit?: number
  }

  /**
   * VitalSignHistory without action
   */
  export type VitalSignHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSignHistory
     */
    select?: VitalSignHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSignHistory
     */
    omit?: VitalSignHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    specialty: 'specialty',
    password: 'password',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    gender: 'gender',
    room: 'room',
    status: 'status',
    medicalRecord: 'medicalRecord',
    doctorId: 'doctorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const VitalSignScalarFieldEnum: {
    id: 'id',
    spo2: 'spo2',
    bpm: 'bpm',
    temperature: 'temperature',
    patientId: 'patientId',
    createdAt: 'createdAt'
  };

  export type VitalSignScalarFieldEnum = (typeof VitalSignScalarFieldEnum)[keyof typeof VitalSignScalarFieldEnum]


  export const ThresholdSettingsScalarFieldEnum: {
    id: 'id',
    spo2Min: 'spo2Min',
    spo2Max: 'spo2Max',
    bpmMin: 'bpmMin',
    bpmMax: 'bpmMax',
    tempMin: 'tempMin',
    tempMax: 'tempMax',
    patientId: 'patientId',
    createdAt: 'createdAt'
  };

  export type ThresholdSettingsScalarFieldEnum = (typeof ThresholdSettingsScalarFieldEnum)[keyof typeof ThresholdSettingsScalarFieldEnum]


  export const VitalSignHistoryScalarFieldEnum: {
    id: 'id',
    spo2: 'spo2',
    bpm: 'bpm',
    temperature: 'temperature',
    patientId: 'patientId',
    createdAt: 'createdAt'
  };

  export type VitalSignHistoryScalarFieldEnum = (typeof VitalSignHistoryScalarFieldEnum)[keyof typeof VitalSignHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'PatientStatus'
   */
  export type EnumPatientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PatientStatus'>
    


  /**
   * Reference to a field of type 'PatientStatus[]'
   */
  export type ListEnumPatientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PatientStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: IntFilter<"Doctor"> | number
    name?: StringFilter<"Doctor"> | string
    email?: StringFilter<"Doctor"> | string
    specialty?: StringFilter<"Doctor"> | string
    password?: StringFilter<"Doctor"> | string
    avatarUrl?: StringNullableFilter<"Doctor"> | string | null
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    patients?: PatientListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patients?: PatientOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    specialty?: StringFilter<"Doctor"> | string
    password?: StringFilter<"Doctor"> | string
    avatarUrl?: StringNullableFilter<"Doctor"> | string | null
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    patients?: PatientListRelationFilter
  }, "id" | "email">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Doctor"> | number
    name?: StringWithAggregatesFilter<"Doctor"> | string
    email?: StringWithAggregatesFilter<"Doctor"> | string
    specialty?: StringWithAggregatesFilter<"Doctor"> | string
    password?: StringWithAggregatesFilter<"Doctor"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    name?: StringFilter<"Patient"> | string
    age?: IntFilter<"Patient"> | number
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    room?: StringFilter<"Patient"> | string
    status?: EnumPatientStatusFilter<"Patient"> | $Enums.PatientStatus
    medicalRecord?: StringFilter<"Patient"> | string
    doctorId?: IntFilter<"Patient"> | number
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    vitalSigns?: XOR<VitalSignNullableScalarRelationFilter, VitalSignWhereInput> | null
    vitalSignHistory?: VitalSignHistoryListRelationFilter
    thresholds?: XOR<ThresholdSettingsNullableScalarRelationFilter, ThresholdSettingsWhereInput> | null
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    room?: SortOrder
    status?: SortOrder
    medicalRecord?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    vitalSigns?: VitalSignOrderByWithRelationInput
    vitalSignHistory?: VitalSignHistoryOrderByRelationAggregateInput
    thresholds?: ThresholdSettingsOrderByWithRelationInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    medicalRecord?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    age?: IntFilter<"Patient"> | number
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    room?: StringFilter<"Patient"> | string
    status?: EnumPatientStatusFilter<"Patient"> | $Enums.PatientStatus
    doctorId?: IntFilter<"Patient"> | number
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    vitalSigns?: XOR<VitalSignNullableScalarRelationFilter, VitalSignWhereInput> | null
    vitalSignHistory?: VitalSignHistoryListRelationFilter
    thresholds?: XOR<ThresholdSettingsNullableScalarRelationFilter, ThresholdSettingsWhereInput> | null
  }, "id" | "medicalRecord">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    room?: SortOrder
    status?: SortOrder
    medicalRecord?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    name?: StringWithAggregatesFilter<"Patient"> | string
    age?: IntWithAggregatesFilter<"Patient"> | number
    gender?: EnumGenderWithAggregatesFilter<"Patient"> | $Enums.Gender
    room?: StringWithAggregatesFilter<"Patient"> | string
    status?: EnumPatientStatusWithAggregatesFilter<"Patient"> | $Enums.PatientStatus
    medicalRecord?: StringWithAggregatesFilter<"Patient"> | string
    doctorId?: IntWithAggregatesFilter<"Patient"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type VitalSignWhereInput = {
    AND?: VitalSignWhereInput | VitalSignWhereInput[]
    OR?: VitalSignWhereInput[]
    NOT?: VitalSignWhereInput | VitalSignWhereInput[]
    id?: IntFilter<"VitalSign"> | number
    spo2?: IntFilter<"VitalSign"> | number
    bpm?: IntFilter<"VitalSign"> | number
    temperature?: FloatFilter<"VitalSign"> | number
    patientId?: IntFilter<"VitalSign"> | number
    createdAt?: DateTimeFilter<"VitalSign"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type VitalSignOrderByWithRelationInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type VitalSignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    patientId?: number
    AND?: VitalSignWhereInput | VitalSignWhereInput[]
    OR?: VitalSignWhereInput[]
    NOT?: VitalSignWhereInput | VitalSignWhereInput[]
    spo2?: IntFilter<"VitalSign"> | number
    bpm?: IntFilter<"VitalSign"> | number
    temperature?: FloatFilter<"VitalSign"> | number
    createdAt?: DateTimeFilter<"VitalSign"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id" | "patientId">

  export type VitalSignOrderByWithAggregationInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    _count?: VitalSignCountOrderByAggregateInput
    _avg?: VitalSignAvgOrderByAggregateInput
    _max?: VitalSignMaxOrderByAggregateInput
    _min?: VitalSignMinOrderByAggregateInput
    _sum?: VitalSignSumOrderByAggregateInput
  }

  export type VitalSignScalarWhereWithAggregatesInput = {
    AND?: VitalSignScalarWhereWithAggregatesInput | VitalSignScalarWhereWithAggregatesInput[]
    OR?: VitalSignScalarWhereWithAggregatesInput[]
    NOT?: VitalSignScalarWhereWithAggregatesInput | VitalSignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VitalSign"> | number
    spo2?: IntWithAggregatesFilter<"VitalSign"> | number
    bpm?: IntWithAggregatesFilter<"VitalSign"> | number
    temperature?: FloatWithAggregatesFilter<"VitalSign"> | number
    patientId?: IntWithAggregatesFilter<"VitalSign"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VitalSign"> | Date | string
  }

  export type ThresholdSettingsWhereInput = {
    AND?: ThresholdSettingsWhereInput | ThresholdSettingsWhereInput[]
    OR?: ThresholdSettingsWhereInput[]
    NOT?: ThresholdSettingsWhereInput | ThresholdSettingsWhereInput[]
    id?: IntFilter<"ThresholdSettings"> | number
    spo2Min?: IntFilter<"ThresholdSettings"> | number
    spo2Max?: IntFilter<"ThresholdSettings"> | number
    bpmMin?: IntFilter<"ThresholdSettings"> | number
    bpmMax?: IntFilter<"ThresholdSettings"> | number
    tempMin?: FloatFilter<"ThresholdSettings"> | number
    tempMax?: FloatFilter<"ThresholdSettings"> | number
    patientId?: IntFilter<"ThresholdSettings"> | number
    createdAt?: DateTimeFilter<"ThresholdSettings"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type ThresholdSettingsOrderByWithRelationInput = {
    id?: SortOrder
    spo2Min?: SortOrder
    spo2Max?: SortOrder
    bpmMin?: SortOrder
    bpmMax?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type ThresholdSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    patientId?: number
    AND?: ThresholdSettingsWhereInput | ThresholdSettingsWhereInput[]
    OR?: ThresholdSettingsWhereInput[]
    NOT?: ThresholdSettingsWhereInput | ThresholdSettingsWhereInput[]
    spo2Min?: IntFilter<"ThresholdSettings"> | number
    spo2Max?: IntFilter<"ThresholdSettings"> | number
    bpmMin?: IntFilter<"ThresholdSettings"> | number
    bpmMax?: IntFilter<"ThresholdSettings"> | number
    tempMin?: FloatFilter<"ThresholdSettings"> | number
    tempMax?: FloatFilter<"ThresholdSettings"> | number
    createdAt?: DateTimeFilter<"ThresholdSettings"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id" | "patientId">

  export type ThresholdSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    spo2Min?: SortOrder
    spo2Max?: SortOrder
    bpmMin?: SortOrder
    bpmMax?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    _count?: ThresholdSettingsCountOrderByAggregateInput
    _avg?: ThresholdSettingsAvgOrderByAggregateInput
    _max?: ThresholdSettingsMaxOrderByAggregateInput
    _min?: ThresholdSettingsMinOrderByAggregateInput
    _sum?: ThresholdSettingsSumOrderByAggregateInput
  }

  export type ThresholdSettingsScalarWhereWithAggregatesInput = {
    AND?: ThresholdSettingsScalarWhereWithAggregatesInput | ThresholdSettingsScalarWhereWithAggregatesInput[]
    OR?: ThresholdSettingsScalarWhereWithAggregatesInput[]
    NOT?: ThresholdSettingsScalarWhereWithAggregatesInput | ThresholdSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ThresholdSettings"> | number
    spo2Min?: IntWithAggregatesFilter<"ThresholdSettings"> | number
    spo2Max?: IntWithAggregatesFilter<"ThresholdSettings"> | number
    bpmMin?: IntWithAggregatesFilter<"ThresholdSettings"> | number
    bpmMax?: IntWithAggregatesFilter<"ThresholdSettings"> | number
    tempMin?: FloatWithAggregatesFilter<"ThresholdSettings"> | number
    tempMax?: FloatWithAggregatesFilter<"ThresholdSettings"> | number
    patientId?: IntWithAggregatesFilter<"ThresholdSettings"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ThresholdSettings"> | Date | string
  }

  export type VitalSignHistoryWhereInput = {
    AND?: VitalSignHistoryWhereInput | VitalSignHistoryWhereInput[]
    OR?: VitalSignHistoryWhereInput[]
    NOT?: VitalSignHistoryWhereInput | VitalSignHistoryWhereInput[]
    id?: IntFilter<"VitalSignHistory"> | number
    spo2?: IntFilter<"VitalSignHistory"> | number
    bpm?: IntFilter<"VitalSignHistory"> | number
    temperature?: FloatFilter<"VitalSignHistory"> | number
    patientId?: IntFilter<"VitalSignHistory"> | number
    createdAt?: DateTimeFilter<"VitalSignHistory"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type VitalSignHistoryOrderByWithRelationInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type VitalSignHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VitalSignHistoryWhereInput | VitalSignHistoryWhereInput[]
    OR?: VitalSignHistoryWhereInput[]
    NOT?: VitalSignHistoryWhereInput | VitalSignHistoryWhereInput[]
    spo2?: IntFilter<"VitalSignHistory"> | number
    bpm?: IntFilter<"VitalSignHistory"> | number
    temperature?: FloatFilter<"VitalSignHistory"> | number
    patientId?: IntFilter<"VitalSignHistory"> | number
    createdAt?: DateTimeFilter<"VitalSignHistory"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type VitalSignHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    _count?: VitalSignHistoryCountOrderByAggregateInput
    _avg?: VitalSignHistoryAvgOrderByAggregateInput
    _max?: VitalSignHistoryMaxOrderByAggregateInput
    _min?: VitalSignHistoryMinOrderByAggregateInput
    _sum?: VitalSignHistorySumOrderByAggregateInput
  }

  export type VitalSignHistoryScalarWhereWithAggregatesInput = {
    AND?: VitalSignHistoryScalarWhereWithAggregatesInput | VitalSignHistoryScalarWhereWithAggregatesInput[]
    OR?: VitalSignHistoryScalarWhereWithAggregatesInput[]
    NOT?: VitalSignHistoryScalarWhereWithAggregatesInput | VitalSignHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VitalSignHistory"> | number
    spo2?: IntWithAggregatesFilter<"VitalSignHistory"> | number
    bpm?: IntWithAggregatesFilter<"VitalSignHistory"> | number
    temperature?: FloatWithAggregatesFilter<"VitalSignHistory"> | number
    patientId?: IntWithAggregatesFilter<"VitalSignHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VitalSignHistory"> | Date | string
  }

  export type DoctorCreateInput = {
    name: string
    email: string
    specialty: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    specialty: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: number
    name: string
    email: string
    specialty: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutPatientsInput
    vitalSigns?: VitalSignCreateNestedOneWithoutPatientInput
    vitalSignHistory?: VitalSignHistoryCreateNestedManyWithoutPatientInput
    thresholds?: ThresholdSettingsCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    doctorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vitalSigns?: VitalSignUncheckedCreateNestedOneWithoutPatientInput
    vitalSignHistory?: VitalSignHistoryUncheckedCreateNestedManyWithoutPatientInput
    thresholds?: ThresholdSettingsUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutPatientsNestedInput
    vitalSigns?: VitalSignUpdateOneWithoutPatientNestedInput
    vitalSignHistory?: VitalSignHistoryUpdateManyWithoutPatientNestedInput
    thresholds?: ThresholdSettingsUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vitalSigns?: VitalSignUncheckedUpdateOneWithoutPatientNestedInput
    vitalSignHistory?: VitalSignHistoryUncheckedUpdateManyWithoutPatientNestedInput
    thresholds?: ThresholdSettingsUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    doctorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignCreateInput = {
    spo2: number
    bpm: number
    temperature: number
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutVitalSignsInput
  }

  export type VitalSignUncheckedCreateInput = {
    id?: number
    spo2: number
    bpm: number
    temperature: number
    patientId: number
    createdAt?: Date | string
  }

  export type VitalSignUpdateInput = {
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutVitalSignsNestedInput
  }

  export type VitalSignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignCreateManyInput = {
    id?: number
    spo2: number
    bpm: number
    temperature: number
    patientId: number
    createdAt?: Date | string
  }

  export type VitalSignUpdateManyMutationInput = {
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThresholdSettingsCreateInput = {
    spo2Min: number
    spo2Max: number
    bpmMin: number
    bpmMax: number
    tempMin: number
    tempMax: number
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutThresholdsInput
  }

  export type ThresholdSettingsUncheckedCreateInput = {
    id?: number
    spo2Min: number
    spo2Max: number
    bpmMin: number
    bpmMax: number
    tempMin: number
    tempMax: number
    patientId: number
    createdAt?: Date | string
  }

  export type ThresholdSettingsUpdateInput = {
    spo2Min?: IntFieldUpdateOperationsInput | number
    spo2Max?: IntFieldUpdateOperationsInput | number
    bpmMin?: IntFieldUpdateOperationsInput | number
    bpmMax?: IntFieldUpdateOperationsInput | number
    tempMin?: FloatFieldUpdateOperationsInput | number
    tempMax?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutThresholdsNestedInput
  }

  export type ThresholdSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    spo2Min?: IntFieldUpdateOperationsInput | number
    spo2Max?: IntFieldUpdateOperationsInput | number
    bpmMin?: IntFieldUpdateOperationsInput | number
    bpmMax?: IntFieldUpdateOperationsInput | number
    tempMin?: FloatFieldUpdateOperationsInput | number
    tempMax?: FloatFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThresholdSettingsCreateManyInput = {
    id?: number
    spo2Min: number
    spo2Max: number
    bpmMin: number
    bpmMax: number
    tempMin: number
    tempMax: number
    patientId: number
    createdAt?: Date | string
  }

  export type ThresholdSettingsUpdateManyMutationInput = {
    spo2Min?: IntFieldUpdateOperationsInput | number
    spo2Max?: IntFieldUpdateOperationsInput | number
    bpmMin?: IntFieldUpdateOperationsInput | number
    bpmMax?: IntFieldUpdateOperationsInput | number
    tempMin?: FloatFieldUpdateOperationsInput | number
    tempMax?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThresholdSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    spo2Min?: IntFieldUpdateOperationsInput | number
    spo2Max?: IntFieldUpdateOperationsInput | number
    bpmMin?: IntFieldUpdateOperationsInput | number
    bpmMax?: IntFieldUpdateOperationsInput | number
    tempMin?: FloatFieldUpdateOperationsInput | number
    tempMax?: FloatFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignHistoryCreateInput = {
    spo2: number
    bpm: number
    temperature: number
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutVitalSignHistoryInput
  }

  export type VitalSignHistoryUncheckedCreateInput = {
    id?: number
    spo2: number
    bpm: number
    temperature: number
    patientId: number
    createdAt?: Date | string
  }

  export type VitalSignHistoryUpdateInput = {
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutVitalSignHistoryNestedInput
  }

  export type VitalSignHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignHistoryCreateManyInput = {
    id?: number
    spo2: number
    bpm: number
    temperature: number
    patientId: number
    createdAt?: Date | string
  }

  export type VitalSignHistoryUpdateManyMutationInput = {
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    specialty?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumPatientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPatientStatusFilter<$PrismaModel> | $Enums.PatientStatus
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type VitalSignNullableScalarRelationFilter = {
    is?: VitalSignWhereInput | null
    isNot?: VitalSignWhereInput | null
  }

  export type VitalSignHistoryListRelationFilter = {
    every?: VitalSignHistoryWhereInput
    some?: VitalSignHistoryWhereInput
    none?: VitalSignHistoryWhereInput
  }

  export type ThresholdSettingsNullableScalarRelationFilter = {
    is?: ThresholdSettingsWhereInput | null
    isNot?: ThresholdSettingsWhereInput | null
  }

  export type VitalSignHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    room?: SortOrder
    status?: SortOrder
    medicalRecord?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    doctorId?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    room?: SortOrder
    status?: SortOrder
    medicalRecord?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    room?: SortOrder
    status?: SortOrder
    medicalRecord?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    doctorId?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumPatientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPatientStatusWithAggregatesFilter<$PrismaModel> | $Enums.PatientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPatientStatusFilter<$PrismaModel>
    _max?: NestedEnumPatientStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type VitalSignCountOrderByAggregateInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
  }

  export type VitalSignAvgOrderByAggregateInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
  }

  export type VitalSignMaxOrderByAggregateInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
  }

  export type VitalSignMinOrderByAggregateInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
  }

  export type VitalSignSumOrderByAggregateInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ThresholdSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    spo2Min?: SortOrder
    spo2Max?: SortOrder
    bpmMin?: SortOrder
    bpmMax?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
  }

  export type ThresholdSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    spo2Min?: SortOrder
    spo2Max?: SortOrder
    bpmMin?: SortOrder
    bpmMax?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
    patientId?: SortOrder
  }

  export type ThresholdSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    spo2Min?: SortOrder
    spo2Max?: SortOrder
    bpmMin?: SortOrder
    bpmMax?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
  }

  export type ThresholdSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    spo2Min?: SortOrder
    spo2Max?: SortOrder
    bpmMin?: SortOrder
    bpmMax?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
  }

  export type ThresholdSettingsSumOrderByAggregateInput = {
    id?: SortOrder
    spo2Min?: SortOrder
    spo2Max?: SortOrder
    bpmMin?: SortOrder
    bpmMax?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
    patientId?: SortOrder
  }

  export type VitalSignHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
  }

  export type VitalSignHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
  }

  export type VitalSignHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
  }

  export type VitalSignHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
  }

  export type VitalSignHistorySumOrderByAggregateInput = {
    id?: SortOrder
    spo2?: SortOrder
    bpm?: SortOrder
    temperature?: SortOrder
    patientId?: SortOrder
  }

  export type PatientCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput> | PatientCreateWithoutDoctorInput[] | PatientUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorInput | PatientCreateOrConnectWithoutDoctorInput[]
    createMany?: PatientCreateManyDoctorInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput> | PatientCreateWithoutDoctorInput[] | PatientUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorInput | PatientCreateOrConnectWithoutDoctorInput[]
    createMany?: PatientCreateManyDoctorInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PatientUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput> | PatientCreateWithoutDoctorInput[] | PatientUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorInput | PatientCreateOrConnectWithoutDoctorInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDoctorInput | PatientUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PatientCreateManyDoctorInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDoctorInput | PatientUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDoctorInput | PatientUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput> | PatientCreateWithoutDoctorInput[] | PatientUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorInput | PatientCreateOrConnectWithoutDoctorInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDoctorInput | PatientUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PatientCreateManyDoctorInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDoctorInput | PatientUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDoctorInput | PatientUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type DoctorCreateNestedOneWithoutPatientsInput = {
    create?: XOR<DoctorCreateWithoutPatientsInput, DoctorUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPatientsInput
    connect?: DoctorWhereUniqueInput
  }

  export type VitalSignCreateNestedOneWithoutPatientInput = {
    create?: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput>
    connectOrCreate?: VitalSignCreateOrConnectWithoutPatientInput
    connect?: VitalSignWhereUniqueInput
  }

  export type VitalSignHistoryCreateNestedManyWithoutPatientInput = {
    create?: XOR<VitalSignHistoryCreateWithoutPatientInput, VitalSignHistoryUncheckedCreateWithoutPatientInput> | VitalSignHistoryCreateWithoutPatientInput[] | VitalSignHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VitalSignHistoryCreateOrConnectWithoutPatientInput | VitalSignHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: VitalSignHistoryCreateManyPatientInputEnvelope
    connect?: VitalSignHistoryWhereUniqueInput | VitalSignHistoryWhereUniqueInput[]
  }

  export type ThresholdSettingsCreateNestedOneWithoutPatientInput = {
    create?: XOR<ThresholdSettingsCreateWithoutPatientInput, ThresholdSettingsUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ThresholdSettingsCreateOrConnectWithoutPatientInput
    connect?: ThresholdSettingsWhereUniqueInput
  }

  export type VitalSignUncheckedCreateNestedOneWithoutPatientInput = {
    create?: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput>
    connectOrCreate?: VitalSignCreateOrConnectWithoutPatientInput
    connect?: VitalSignWhereUniqueInput
  }

  export type VitalSignHistoryUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<VitalSignHistoryCreateWithoutPatientInput, VitalSignHistoryUncheckedCreateWithoutPatientInput> | VitalSignHistoryCreateWithoutPatientInput[] | VitalSignHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VitalSignHistoryCreateOrConnectWithoutPatientInput | VitalSignHistoryCreateOrConnectWithoutPatientInput[]
    createMany?: VitalSignHistoryCreateManyPatientInputEnvelope
    connect?: VitalSignHistoryWhereUniqueInput | VitalSignHistoryWhereUniqueInput[]
  }

  export type ThresholdSettingsUncheckedCreateNestedOneWithoutPatientInput = {
    create?: XOR<ThresholdSettingsCreateWithoutPatientInput, ThresholdSettingsUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ThresholdSettingsCreateOrConnectWithoutPatientInput
    connect?: ThresholdSettingsWhereUniqueInput
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumPatientStatusFieldUpdateOperationsInput = {
    set?: $Enums.PatientStatus
  }

  export type DoctorUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<DoctorCreateWithoutPatientsInput, DoctorUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPatientsInput
    upsert?: DoctorUpsertWithoutPatientsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutPatientsInput, DoctorUpdateWithoutPatientsInput>, DoctorUncheckedUpdateWithoutPatientsInput>
  }

  export type VitalSignUpdateOneWithoutPatientNestedInput = {
    create?: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput>
    connectOrCreate?: VitalSignCreateOrConnectWithoutPatientInput
    upsert?: VitalSignUpsertWithoutPatientInput
    disconnect?: VitalSignWhereInput | boolean
    delete?: VitalSignWhereInput | boolean
    connect?: VitalSignWhereUniqueInput
    update?: XOR<XOR<VitalSignUpdateToOneWithWhereWithoutPatientInput, VitalSignUpdateWithoutPatientInput>, VitalSignUncheckedUpdateWithoutPatientInput>
  }

  export type VitalSignHistoryUpdateManyWithoutPatientNestedInput = {
    create?: XOR<VitalSignHistoryCreateWithoutPatientInput, VitalSignHistoryUncheckedCreateWithoutPatientInput> | VitalSignHistoryCreateWithoutPatientInput[] | VitalSignHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VitalSignHistoryCreateOrConnectWithoutPatientInput | VitalSignHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: VitalSignHistoryUpsertWithWhereUniqueWithoutPatientInput | VitalSignHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: VitalSignHistoryCreateManyPatientInputEnvelope
    set?: VitalSignHistoryWhereUniqueInput | VitalSignHistoryWhereUniqueInput[]
    disconnect?: VitalSignHistoryWhereUniqueInput | VitalSignHistoryWhereUniqueInput[]
    delete?: VitalSignHistoryWhereUniqueInput | VitalSignHistoryWhereUniqueInput[]
    connect?: VitalSignHistoryWhereUniqueInput | VitalSignHistoryWhereUniqueInput[]
    update?: VitalSignHistoryUpdateWithWhereUniqueWithoutPatientInput | VitalSignHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: VitalSignHistoryUpdateManyWithWhereWithoutPatientInput | VitalSignHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: VitalSignHistoryScalarWhereInput | VitalSignHistoryScalarWhereInput[]
  }

  export type ThresholdSettingsUpdateOneWithoutPatientNestedInput = {
    create?: XOR<ThresholdSettingsCreateWithoutPatientInput, ThresholdSettingsUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ThresholdSettingsCreateOrConnectWithoutPatientInput
    upsert?: ThresholdSettingsUpsertWithoutPatientInput
    disconnect?: ThresholdSettingsWhereInput | boolean
    delete?: ThresholdSettingsWhereInput | boolean
    connect?: ThresholdSettingsWhereUniqueInput
    update?: XOR<XOR<ThresholdSettingsUpdateToOneWithWhereWithoutPatientInput, ThresholdSettingsUpdateWithoutPatientInput>, ThresholdSettingsUncheckedUpdateWithoutPatientInput>
  }

  export type VitalSignUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput>
    connectOrCreate?: VitalSignCreateOrConnectWithoutPatientInput
    upsert?: VitalSignUpsertWithoutPatientInput
    disconnect?: VitalSignWhereInput | boolean
    delete?: VitalSignWhereInput | boolean
    connect?: VitalSignWhereUniqueInput
    update?: XOR<XOR<VitalSignUpdateToOneWithWhereWithoutPatientInput, VitalSignUpdateWithoutPatientInput>, VitalSignUncheckedUpdateWithoutPatientInput>
  }

  export type VitalSignHistoryUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<VitalSignHistoryCreateWithoutPatientInput, VitalSignHistoryUncheckedCreateWithoutPatientInput> | VitalSignHistoryCreateWithoutPatientInput[] | VitalSignHistoryUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VitalSignHistoryCreateOrConnectWithoutPatientInput | VitalSignHistoryCreateOrConnectWithoutPatientInput[]
    upsert?: VitalSignHistoryUpsertWithWhereUniqueWithoutPatientInput | VitalSignHistoryUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: VitalSignHistoryCreateManyPatientInputEnvelope
    set?: VitalSignHistoryWhereUniqueInput | VitalSignHistoryWhereUniqueInput[]
    disconnect?: VitalSignHistoryWhereUniqueInput | VitalSignHistoryWhereUniqueInput[]
    delete?: VitalSignHistoryWhereUniqueInput | VitalSignHistoryWhereUniqueInput[]
    connect?: VitalSignHistoryWhereUniqueInput | VitalSignHistoryWhereUniqueInput[]
    update?: VitalSignHistoryUpdateWithWhereUniqueWithoutPatientInput | VitalSignHistoryUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: VitalSignHistoryUpdateManyWithWhereWithoutPatientInput | VitalSignHistoryUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: VitalSignHistoryScalarWhereInput | VitalSignHistoryScalarWhereInput[]
  }

  export type ThresholdSettingsUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<ThresholdSettingsCreateWithoutPatientInput, ThresholdSettingsUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ThresholdSettingsCreateOrConnectWithoutPatientInput
    upsert?: ThresholdSettingsUpsertWithoutPatientInput
    disconnect?: ThresholdSettingsWhereInput | boolean
    delete?: ThresholdSettingsWhereInput | boolean
    connect?: ThresholdSettingsWhereUniqueInput
    update?: XOR<XOR<ThresholdSettingsUpdateToOneWithWhereWithoutPatientInput, ThresholdSettingsUpdateWithoutPatientInput>, ThresholdSettingsUncheckedUpdateWithoutPatientInput>
  }

  export type PatientCreateNestedOneWithoutVitalSignsInput = {
    create?: XOR<PatientCreateWithoutVitalSignsInput, PatientUncheckedCreateWithoutVitalSignsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVitalSignsInput
    connect?: PatientWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientUpdateOneRequiredWithoutVitalSignsNestedInput = {
    create?: XOR<PatientCreateWithoutVitalSignsInput, PatientUncheckedCreateWithoutVitalSignsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVitalSignsInput
    upsert?: PatientUpsertWithoutVitalSignsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutVitalSignsInput, PatientUpdateWithoutVitalSignsInput>, PatientUncheckedUpdateWithoutVitalSignsInput>
  }

  export type PatientCreateNestedOneWithoutThresholdsInput = {
    create?: XOR<PatientCreateWithoutThresholdsInput, PatientUncheckedCreateWithoutThresholdsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutThresholdsInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutThresholdsNestedInput = {
    create?: XOR<PatientCreateWithoutThresholdsInput, PatientUncheckedCreateWithoutThresholdsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutThresholdsInput
    upsert?: PatientUpsertWithoutThresholdsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutThresholdsInput, PatientUpdateWithoutThresholdsInput>, PatientUncheckedUpdateWithoutThresholdsInput>
  }

  export type PatientCreateNestedOneWithoutVitalSignHistoryInput = {
    create?: XOR<PatientCreateWithoutVitalSignHistoryInput, PatientUncheckedCreateWithoutVitalSignHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVitalSignHistoryInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutVitalSignHistoryNestedInput = {
    create?: XOR<PatientCreateWithoutVitalSignHistoryInput, PatientUncheckedCreateWithoutVitalSignHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVitalSignHistoryInput
    upsert?: PatientUpsertWithoutVitalSignHistoryInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutVitalSignHistoryInput, PatientUpdateWithoutVitalSignHistoryInput>, PatientUncheckedUpdateWithoutVitalSignHistoryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumPatientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPatientStatusFilter<$PrismaModel> | $Enums.PatientStatus
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumPatientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPatientStatusWithAggregatesFilter<$PrismaModel> | $Enums.PatientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPatientStatusFilter<$PrismaModel>
    _max?: NestedEnumPatientStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PatientCreateWithoutDoctorInput = {
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vitalSigns?: VitalSignCreateNestedOneWithoutPatientInput
    vitalSignHistory?: VitalSignHistoryCreateNestedManyWithoutPatientInput
    thresholds?: ThresholdSettingsCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutDoctorInput = {
    id?: number
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vitalSigns?: VitalSignUncheckedCreateNestedOneWithoutPatientInput
    vitalSignHistory?: VitalSignHistoryUncheckedCreateNestedManyWithoutPatientInput
    thresholds?: ThresholdSettingsUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutDoctorInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput>
  }

  export type PatientCreateManyDoctorInputEnvelope = {
    data: PatientCreateManyDoctorInput | PatientCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutDoctorInput, PatientUncheckedUpdateWithoutDoctorInput>
    create: XOR<PatientCreateWithoutDoctorInput, PatientUncheckedCreateWithoutDoctorInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutDoctorInput, PatientUncheckedUpdateWithoutDoctorInput>
  }

  export type PatientUpdateManyWithWhereWithoutDoctorInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: IntFilter<"Patient"> | number
    name?: StringFilter<"Patient"> | string
    age?: IntFilter<"Patient"> | number
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    room?: StringFilter<"Patient"> | string
    status?: EnumPatientStatusFilter<"Patient"> | $Enums.PatientStatus
    medicalRecord?: StringFilter<"Patient"> | string
    doctorId?: IntFilter<"Patient"> | number
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
  }

  export type DoctorCreateWithoutPatientsInput = {
    name: string
    email: string
    specialty: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUncheckedCreateWithoutPatientsInput = {
    id?: number
    name: string
    email: string
    specialty: string
    password: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorCreateOrConnectWithoutPatientsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutPatientsInput, DoctorUncheckedCreateWithoutPatientsInput>
  }

  export type VitalSignCreateWithoutPatientInput = {
    spo2: number
    bpm: number
    temperature: number
    createdAt?: Date | string
  }

  export type VitalSignUncheckedCreateWithoutPatientInput = {
    id?: number
    spo2: number
    bpm: number
    temperature: number
    createdAt?: Date | string
  }

  export type VitalSignCreateOrConnectWithoutPatientInput = {
    where: VitalSignWhereUniqueInput
    create: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput>
  }

  export type VitalSignHistoryCreateWithoutPatientInput = {
    spo2: number
    bpm: number
    temperature: number
    createdAt?: Date | string
  }

  export type VitalSignHistoryUncheckedCreateWithoutPatientInput = {
    id?: number
    spo2: number
    bpm: number
    temperature: number
    createdAt?: Date | string
  }

  export type VitalSignHistoryCreateOrConnectWithoutPatientInput = {
    where: VitalSignHistoryWhereUniqueInput
    create: XOR<VitalSignHistoryCreateWithoutPatientInput, VitalSignHistoryUncheckedCreateWithoutPatientInput>
  }

  export type VitalSignHistoryCreateManyPatientInputEnvelope = {
    data: VitalSignHistoryCreateManyPatientInput | VitalSignHistoryCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ThresholdSettingsCreateWithoutPatientInput = {
    spo2Min: number
    spo2Max: number
    bpmMin: number
    bpmMax: number
    tempMin: number
    tempMax: number
    createdAt?: Date | string
  }

  export type ThresholdSettingsUncheckedCreateWithoutPatientInput = {
    id?: number
    spo2Min: number
    spo2Max: number
    bpmMin: number
    bpmMax: number
    tempMin: number
    tempMax: number
    createdAt?: Date | string
  }

  export type ThresholdSettingsCreateOrConnectWithoutPatientInput = {
    where: ThresholdSettingsWhereUniqueInput
    create: XOR<ThresholdSettingsCreateWithoutPatientInput, ThresholdSettingsUncheckedCreateWithoutPatientInput>
  }

  export type DoctorUpsertWithoutPatientsInput = {
    update: XOR<DoctorUpdateWithoutPatientsInput, DoctorUncheckedUpdateWithoutPatientsInput>
    create: XOR<DoctorCreateWithoutPatientsInput, DoctorUncheckedCreateWithoutPatientsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutPatientsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutPatientsInput, DoctorUncheckedUpdateWithoutPatientsInput>
  }

  export type DoctorUpdateWithoutPatientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateWithoutPatientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignUpsertWithoutPatientInput = {
    update: XOR<VitalSignUpdateWithoutPatientInput, VitalSignUncheckedUpdateWithoutPatientInput>
    create: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput>
    where?: VitalSignWhereInput
  }

  export type VitalSignUpdateToOneWithWhereWithoutPatientInput = {
    where?: VitalSignWhereInput
    data: XOR<VitalSignUpdateWithoutPatientInput, VitalSignUncheckedUpdateWithoutPatientInput>
  }

  export type VitalSignUpdateWithoutPatientInput = {
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignHistoryUpsertWithWhereUniqueWithoutPatientInput = {
    where: VitalSignHistoryWhereUniqueInput
    update: XOR<VitalSignHistoryUpdateWithoutPatientInput, VitalSignHistoryUncheckedUpdateWithoutPatientInput>
    create: XOR<VitalSignHistoryCreateWithoutPatientInput, VitalSignHistoryUncheckedCreateWithoutPatientInput>
  }

  export type VitalSignHistoryUpdateWithWhereUniqueWithoutPatientInput = {
    where: VitalSignHistoryWhereUniqueInput
    data: XOR<VitalSignHistoryUpdateWithoutPatientInput, VitalSignHistoryUncheckedUpdateWithoutPatientInput>
  }

  export type VitalSignHistoryUpdateManyWithWhereWithoutPatientInput = {
    where: VitalSignHistoryScalarWhereInput
    data: XOR<VitalSignHistoryUpdateManyMutationInput, VitalSignHistoryUncheckedUpdateManyWithoutPatientInput>
  }

  export type VitalSignHistoryScalarWhereInput = {
    AND?: VitalSignHistoryScalarWhereInput | VitalSignHistoryScalarWhereInput[]
    OR?: VitalSignHistoryScalarWhereInput[]
    NOT?: VitalSignHistoryScalarWhereInput | VitalSignHistoryScalarWhereInput[]
    id?: IntFilter<"VitalSignHistory"> | number
    spo2?: IntFilter<"VitalSignHistory"> | number
    bpm?: IntFilter<"VitalSignHistory"> | number
    temperature?: FloatFilter<"VitalSignHistory"> | number
    patientId?: IntFilter<"VitalSignHistory"> | number
    createdAt?: DateTimeFilter<"VitalSignHistory"> | Date | string
  }

  export type ThresholdSettingsUpsertWithoutPatientInput = {
    update: XOR<ThresholdSettingsUpdateWithoutPatientInput, ThresholdSettingsUncheckedUpdateWithoutPatientInput>
    create: XOR<ThresholdSettingsCreateWithoutPatientInput, ThresholdSettingsUncheckedCreateWithoutPatientInput>
    where?: ThresholdSettingsWhereInput
  }

  export type ThresholdSettingsUpdateToOneWithWhereWithoutPatientInput = {
    where?: ThresholdSettingsWhereInput
    data: XOR<ThresholdSettingsUpdateWithoutPatientInput, ThresholdSettingsUncheckedUpdateWithoutPatientInput>
  }

  export type ThresholdSettingsUpdateWithoutPatientInput = {
    spo2Min?: IntFieldUpdateOperationsInput | number
    spo2Max?: IntFieldUpdateOperationsInput | number
    bpmMin?: IntFieldUpdateOperationsInput | number
    bpmMax?: IntFieldUpdateOperationsInput | number
    tempMin?: FloatFieldUpdateOperationsInput | number
    tempMax?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThresholdSettingsUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    spo2Min?: IntFieldUpdateOperationsInput | number
    spo2Max?: IntFieldUpdateOperationsInput | number
    bpmMin?: IntFieldUpdateOperationsInput | number
    bpmMax?: IntFieldUpdateOperationsInput | number
    tempMin?: FloatFieldUpdateOperationsInput | number
    tempMax?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateWithoutVitalSignsInput = {
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutPatientsInput
    vitalSignHistory?: VitalSignHistoryCreateNestedManyWithoutPatientInput
    thresholds?: ThresholdSettingsCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutVitalSignsInput = {
    id?: number
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    doctorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vitalSignHistory?: VitalSignHistoryUncheckedCreateNestedManyWithoutPatientInput
    thresholds?: ThresholdSettingsUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutVitalSignsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutVitalSignsInput, PatientUncheckedCreateWithoutVitalSignsInput>
  }

  export type PatientUpsertWithoutVitalSignsInput = {
    update: XOR<PatientUpdateWithoutVitalSignsInput, PatientUncheckedUpdateWithoutVitalSignsInput>
    create: XOR<PatientCreateWithoutVitalSignsInput, PatientUncheckedCreateWithoutVitalSignsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutVitalSignsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutVitalSignsInput, PatientUncheckedUpdateWithoutVitalSignsInput>
  }

  export type PatientUpdateWithoutVitalSignsInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutPatientsNestedInput
    vitalSignHistory?: VitalSignHistoryUpdateManyWithoutPatientNestedInput
    thresholds?: ThresholdSettingsUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutVitalSignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vitalSignHistory?: VitalSignHistoryUncheckedUpdateManyWithoutPatientNestedInput
    thresholds?: ThresholdSettingsUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type PatientCreateWithoutThresholdsInput = {
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutPatientsInput
    vitalSigns?: VitalSignCreateNestedOneWithoutPatientInput
    vitalSignHistory?: VitalSignHistoryCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutThresholdsInput = {
    id?: number
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    doctorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vitalSigns?: VitalSignUncheckedCreateNestedOneWithoutPatientInput
    vitalSignHistory?: VitalSignHistoryUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutThresholdsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutThresholdsInput, PatientUncheckedCreateWithoutThresholdsInput>
  }

  export type PatientUpsertWithoutThresholdsInput = {
    update: XOR<PatientUpdateWithoutThresholdsInput, PatientUncheckedUpdateWithoutThresholdsInput>
    create: XOR<PatientCreateWithoutThresholdsInput, PatientUncheckedCreateWithoutThresholdsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutThresholdsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutThresholdsInput, PatientUncheckedUpdateWithoutThresholdsInput>
  }

  export type PatientUpdateWithoutThresholdsInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutPatientsNestedInput
    vitalSigns?: VitalSignUpdateOneWithoutPatientNestedInput
    vitalSignHistory?: VitalSignHistoryUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutThresholdsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vitalSigns?: VitalSignUncheckedUpdateOneWithoutPatientNestedInput
    vitalSignHistory?: VitalSignHistoryUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutVitalSignHistoryInput = {
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutPatientsInput
    vitalSigns?: VitalSignCreateNestedOneWithoutPatientInput
    thresholds?: ThresholdSettingsCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutVitalSignHistoryInput = {
    id?: number
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    doctorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vitalSigns?: VitalSignUncheckedCreateNestedOneWithoutPatientInput
    thresholds?: ThresholdSettingsUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutVitalSignHistoryInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutVitalSignHistoryInput, PatientUncheckedCreateWithoutVitalSignHistoryInput>
  }

  export type PatientUpsertWithoutVitalSignHistoryInput = {
    update: XOR<PatientUpdateWithoutVitalSignHistoryInput, PatientUncheckedUpdateWithoutVitalSignHistoryInput>
    create: XOR<PatientCreateWithoutVitalSignHistoryInput, PatientUncheckedCreateWithoutVitalSignHistoryInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutVitalSignHistoryInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutVitalSignHistoryInput, PatientUncheckedUpdateWithoutVitalSignHistoryInput>
  }

  export type PatientUpdateWithoutVitalSignHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutPatientsNestedInput
    vitalSigns?: VitalSignUpdateOneWithoutPatientNestedInput
    thresholds?: ThresholdSettingsUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutVitalSignHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    doctorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vitalSigns?: VitalSignUncheckedUpdateOneWithoutPatientNestedInput
    thresholds?: ThresholdSettingsUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type PatientCreateManyDoctorInput = {
    id?: number
    name: string
    age: number
    gender: $Enums.Gender
    room: string
    status: $Enums.PatientStatus
    medicalRecord: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateWithoutDoctorInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vitalSigns?: VitalSignUpdateOneWithoutPatientNestedInput
    vitalSignHistory?: VitalSignHistoryUpdateManyWithoutPatientNestedInput
    thresholds?: ThresholdSettingsUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vitalSigns?: VitalSignUncheckedUpdateOneWithoutPatientNestedInput
    vitalSignHistory?: VitalSignHistoryUncheckedUpdateManyWithoutPatientNestedInput
    thresholds?: ThresholdSettingsUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    room?: StringFieldUpdateOperationsInput | string
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    medicalRecord?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignHistoryCreateManyPatientInput = {
    id?: number
    spo2: number
    bpm: number
    temperature: number
    createdAt?: Date | string
  }

  export type VitalSignHistoryUpdateWithoutPatientInput = {
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignHistoryUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignHistoryUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    spo2?: IntFieldUpdateOperationsInput | number
    bpm?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}