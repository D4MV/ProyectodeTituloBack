
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Fundo
 * 
 */
export type Fundo = $Result.DefaultSelection<Prisma.$FundoPayload>
/**
 * Model UserFundo
 * 
 */
export type UserFundo = $Result.DefaultSelection<Prisma.$UserFundoPayload>
/**
 * Model Terreno
 * 
 */
export type Terreno = $Result.DefaultSelection<Prisma.$TerrenoPayload>
/**
 * Model Suelo
 * 
 */
export type Suelo = $Result.DefaultSelection<Prisma.$SueloPayload>
/**
 * Model Planta
 * 
 */
export type Planta = $Result.DefaultSelection<Prisma.$PlantaPayload>
/**
 * Model cuartel
 * 
 */
export type cuartel = $Result.DefaultSelection<Prisma.$cuartelPayload>
/**
 * Model sueloPlanta
 * 
 */
export type sueloPlanta = $Result.DefaultSelection<Prisma.$sueloPlantaPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Tarea
 * 
 */
export type Tarea = $Result.DefaultSelection<Prisma.$TareaPayload>
/**
 * Model OrdenAplicacion
 * 
 */
export type OrdenAplicacion = $Result.DefaultSelection<Prisma.$OrdenAplicacionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fundo`: Exposes CRUD operations for the **Fundo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fundos
    * const fundos = await prisma.fundo.findMany()
    * ```
    */
  get fundo(): Prisma.FundoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFundo`: Exposes CRUD operations for the **UserFundo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFundos
    * const userFundos = await prisma.userFundo.findMany()
    * ```
    */
  get userFundo(): Prisma.UserFundoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.terreno`: Exposes CRUD operations for the **Terreno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Terrenos
    * const terrenos = await prisma.terreno.findMany()
    * ```
    */
  get terreno(): Prisma.TerrenoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suelo`: Exposes CRUD operations for the **Suelo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suelos
    * const suelos = await prisma.suelo.findMany()
    * ```
    */
  get suelo(): Prisma.SueloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planta`: Exposes CRUD operations for the **Planta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plantas
    * const plantas = await prisma.planta.findMany()
    * ```
    */
  get planta(): Prisma.PlantaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cuartel`: Exposes CRUD operations for the **cuartel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuartels
    * const cuartels = await prisma.cuartel.findMany()
    * ```
    */
  get cuartel(): Prisma.cuartelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sueloPlanta`: Exposes CRUD operations for the **sueloPlanta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SueloPlantas
    * const sueloPlantas = await prisma.sueloPlanta.findMany()
    * ```
    */
  get sueloPlanta(): Prisma.sueloPlantaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarea`: Exposes CRUD operations for the **Tarea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tareas
    * const tareas = await prisma.tarea.findMany()
    * ```
    */
  get tarea(): Prisma.TareaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordenAplicacion`: Exposes CRUD operations for the **OrdenAplicacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrdenAplicacions
    * const ordenAplicacions = await prisma.ordenAplicacion.findMany()
    * ```
    */
  get ordenAplicacion(): Prisma.OrdenAplicacionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Rol: 'Rol',
    Fundo: 'Fundo',
    UserFundo: 'UserFundo',
    Terreno: 'Terreno',
    Suelo: 'Suelo',
    Planta: 'Planta',
    cuartel: 'cuartel',
    sueloPlanta: 'sueloPlanta',
    Producto: 'Producto',
    Tarea: 'Tarea',
    OrdenAplicacion: 'OrdenAplicacion'
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
      modelProps: "user" | "rol" | "fundo" | "userFundo" | "terreno" | "suelo" | "planta" | "cuartel" | "sueloPlanta" | "producto" | "tarea" | "ordenAplicacion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Fundo: {
        payload: Prisma.$FundoPayload<ExtArgs>
        fields: Prisma.FundoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundoPayload>
          }
          findFirst: {
            args: Prisma.FundoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundoPayload>
          }
          findMany: {
            args: Prisma.FundoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundoPayload>[]
          }
          create: {
            args: Prisma.FundoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundoPayload>
          }
          createMany: {
            args: Prisma.FundoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FundoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundoPayload>[]
          }
          delete: {
            args: Prisma.FundoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundoPayload>
          }
          update: {
            args: Prisma.FundoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundoPayload>
          }
          deleteMany: {
            args: Prisma.FundoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FundoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundoPayload>[]
          }
          upsert: {
            args: Prisma.FundoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundoPayload>
          }
          aggregate: {
            args: Prisma.FundoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFundo>
          }
          groupBy: {
            args: Prisma.FundoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundoCountArgs<ExtArgs>
            result: $Utils.Optional<FundoCountAggregateOutputType> | number
          }
        }
      }
      UserFundo: {
        payload: Prisma.$UserFundoPayload<ExtArgs>
        fields: Prisma.UserFundoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFundoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFundoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFundoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFundoPayload>
          }
          findFirst: {
            args: Prisma.UserFundoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFundoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFundoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFundoPayload>
          }
          findMany: {
            args: Prisma.UserFundoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFundoPayload>[]
          }
          create: {
            args: Prisma.UserFundoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFundoPayload>
          }
          createMany: {
            args: Prisma.UserFundoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFundoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFundoPayload>[]
          }
          delete: {
            args: Prisma.UserFundoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFundoPayload>
          }
          update: {
            args: Prisma.UserFundoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFundoPayload>
          }
          deleteMany: {
            args: Prisma.UserFundoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFundoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFundoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFundoPayload>[]
          }
          upsert: {
            args: Prisma.UserFundoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFundoPayload>
          }
          aggregate: {
            args: Prisma.UserFundoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFundo>
          }
          groupBy: {
            args: Prisma.UserFundoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFundoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFundoCountArgs<ExtArgs>
            result: $Utils.Optional<UserFundoCountAggregateOutputType> | number
          }
        }
      }
      Terreno: {
        payload: Prisma.$TerrenoPayload<ExtArgs>
        fields: Prisma.TerrenoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TerrenoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerrenoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TerrenoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerrenoPayload>
          }
          findFirst: {
            args: Prisma.TerrenoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerrenoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TerrenoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerrenoPayload>
          }
          findMany: {
            args: Prisma.TerrenoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerrenoPayload>[]
          }
          create: {
            args: Prisma.TerrenoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerrenoPayload>
          }
          createMany: {
            args: Prisma.TerrenoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TerrenoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerrenoPayload>[]
          }
          delete: {
            args: Prisma.TerrenoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerrenoPayload>
          }
          update: {
            args: Prisma.TerrenoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerrenoPayload>
          }
          deleteMany: {
            args: Prisma.TerrenoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TerrenoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TerrenoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerrenoPayload>[]
          }
          upsert: {
            args: Prisma.TerrenoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerrenoPayload>
          }
          aggregate: {
            args: Prisma.TerrenoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerreno>
          }
          groupBy: {
            args: Prisma.TerrenoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TerrenoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TerrenoCountArgs<ExtArgs>
            result: $Utils.Optional<TerrenoCountAggregateOutputType> | number
          }
        }
      }
      Suelo: {
        payload: Prisma.$SueloPayload<ExtArgs>
        fields: Prisma.SueloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SueloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SueloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SueloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SueloPayload>
          }
          findFirst: {
            args: Prisma.SueloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SueloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SueloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SueloPayload>
          }
          findMany: {
            args: Prisma.SueloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SueloPayload>[]
          }
          create: {
            args: Prisma.SueloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SueloPayload>
          }
          createMany: {
            args: Prisma.SueloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SueloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SueloPayload>[]
          }
          delete: {
            args: Prisma.SueloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SueloPayload>
          }
          update: {
            args: Prisma.SueloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SueloPayload>
          }
          deleteMany: {
            args: Prisma.SueloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SueloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SueloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SueloPayload>[]
          }
          upsert: {
            args: Prisma.SueloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SueloPayload>
          }
          aggregate: {
            args: Prisma.SueloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuelo>
          }
          groupBy: {
            args: Prisma.SueloGroupByArgs<ExtArgs>
            result: $Utils.Optional<SueloGroupByOutputType>[]
          }
          count: {
            args: Prisma.SueloCountArgs<ExtArgs>
            result: $Utils.Optional<SueloCountAggregateOutputType> | number
          }
        }
      }
      Planta: {
        payload: Prisma.$PlantaPayload<ExtArgs>
        fields: Prisma.PlantaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          findFirst: {
            args: Prisma.PlantaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          findMany: {
            args: Prisma.PlantaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>[]
          }
          create: {
            args: Prisma.PlantaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          createMany: {
            args: Prisma.PlantaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>[]
          }
          delete: {
            args: Prisma.PlantaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          update: {
            args: Prisma.PlantaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          deleteMany: {
            args: Prisma.PlantaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>[]
          }
          upsert: {
            args: Prisma.PlantaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantaPayload>
          }
          aggregate: {
            args: Prisma.PlantaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanta>
          }
          groupBy: {
            args: Prisma.PlantaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantaCountArgs<ExtArgs>
            result: $Utils.Optional<PlantaCountAggregateOutputType> | number
          }
        }
      }
      cuartel: {
        payload: Prisma.$cuartelPayload<ExtArgs>
        fields: Prisma.cuartelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cuartelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuartelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cuartelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuartelPayload>
          }
          findFirst: {
            args: Prisma.cuartelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuartelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cuartelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuartelPayload>
          }
          findMany: {
            args: Prisma.cuartelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuartelPayload>[]
          }
          create: {
            args: Prisma.cuartelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuartelPayload>
          }
          createMany: {
            args: Prisma.cuartelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cuartelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuartelPayload>[]
          }
          delete: {
            args: Prisma.cuartelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuartelPayload>
          }
          update: {
            args: Prisma.cuartelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuartelPayload>
          }
          deleteMany: {
            args: Prisma.cuartelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cuartelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cuartelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuartelPayload>[]
          }
          upsert: {
            args: Prisma.cuartelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuartelPayload>
          }
          aggregate: {
            args: Prisma.CuartelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuartel>
          }
          groupBy: {
            args: Prisma.cuartelGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuartelGroupByOutputType>[]
          }
          count: {
            args: Prisma.cuartelCountArgs<ExtArgs>
            result: $Utils.Optional<CuartelCountAggregateOutputType> | number
          }
        }
      }
      sueloPlanta: {
        payload: Prisma.$sueloPlantaPayload<ExtArgs>
        fields: Prisma.sueloPlantaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sueloPlantaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sueloPlantaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sueloPlantaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sueloPlantaPayload>
          }
          findFirst: {
            args: Prisma.sueloPlantaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sueloPlantaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sueloPlantaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sueloPlantaPayload>
          }
          findMany: {
            args: Prisma.sueloPlantaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sueloPlantaPayload>[]
          }
          create: {
            args: Prisma.sueloPlantaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sueloPlantaPayload>
          }
          createMany: {
            args: Prisma.sueloPlantaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sueloPlantaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sueloPlantaPayload>[]
          }
          delete: {
            args: Prisma.sueloPlantaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sueloPlantaPayload>
          }
          update: {
            args: Prisma.sueloPlantaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sueloPlantaPayload>
          }
          deleteMany: {
            args: Prisma.sueloPlantaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sueloPlantaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sueloPlantaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sueloPlantaPayload>[]
          }
          upsert: {
            args: Prisma.sueloPlantaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sueloPlantaPayload>
          }
          aggregate: {
            args: Prisma.SueloPlantaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSueloPlanta>
          }
          groupBy: {
            args: Prisma.sueloPlantaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SueloPlantaGroupByOutputType>[]
          }
          count: {
            args: Prisma.sueloPlantaCountArgs<ExtArgs>
            result: $Utils.Optional<SueloPlantaCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Tarea: {
        payload: Prisma.$TareaPayload<ExtArgs>
        fields: Prisma.TareaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TareaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TareaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          findFirst: {
            args: Prisma.TareaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TareaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          findMany: {
            args: Prisma.TareaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>[]
          }
          create: {
            args: Prisma.TareaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          createMany: {
            args: Prisma.TareaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TareaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>[]
          }
          delete: {
            args: Prisma.TareaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          update: {
            args: Prisma.TareaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          deleteMany: {
            args: Prisma.TareaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TareaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TareaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>[]
          }
          upsert: {
            args: Prisma.TareaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          aggregate: {
            args: Prisma.TareaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarea>
          }
          groupBy: {
            args: Prisma.TareaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TareaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TareaCountArgs<ExtArgs>
            result: $Utils.Optional<TareaCountAggregateOutputType> | number
          }
        }
      }
      OrdenAplicacion: {
        payload: Prisma.$OrdenAplicacionPayload<ExtArgs>
        fields: Prisma.OrdenAplicacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenAplicacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenAplicacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenAplicacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenAplicacionPayload>
          }
          findFirst: {
            args: Prisma.OrdenAplicacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenAplicacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenAplicacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenAplicacionPayload>
          }
          findMany: {
            args: Prisma.OrdenAplicacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenAplicacionPayload>[]
          }
          create: {
            args: Prisma.OrdenAplicacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenAplicacionPayload>
          }
          createMany: {
            args: Prisma.OrdenAplicacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdenAplicacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenAplicacionPayload>[]
          }
          delete: {
            args: Prisma.OrdenAplicacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenAplicacionPayload>
          }
          update: {
            args: Prisma.OrdenAplicacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenAplicacionPayload>
          }
          deleteMany: {
            args: Prisma.OrdenAplicacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenAplicacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdenAplicacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenAplicacionPayload>[]
          }
          upsert: {
            args: Prisma.OrdenAplicacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenAplicacionPayload>
          }
          aggregate: {
            args: Prisma.OrdenAplicacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdenAplicacion>
          }
          groupBy: {
            args: Prisma.OrdenAplicacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenAplicacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenAplicacionCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenAplicacionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    rol?: RolOmit
    fundo?: FundoOmit
    userFundo?: UserFundoOmit
    terreno?: TerrenoOmit
    suelo?: SueloOmit
    planta?: PlantaOmit
    cuartel?: cuartelOmit
    sueloPlanta?: sueloPlantaOmit
    producto?: ProductoOmit
    tarea?: TareaOmit
    ordenAplicacion?: OrdenAplicacionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userFundos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFundos?: boolean | UserCountOutputTypeCountUserFundosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserFundosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFundoWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    userFundos: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFundos?: boolean | RolCountOutputTypeCountUserFundosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUserFundosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFundoWhereInput
  }


  /**
   * Count Type FundoCountOutputType
   */

  export type FundoCountOutputType = {
    userFundos: number
  }

  export type FundoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFundos?: boolean | FundoCountOutputTypeCountUserFundosArgs
  }

  // Custom InputTypes
  /**
   * FundoCountOutputType without action
   */
  export type FundoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundoCountOutputType
     */
    select?: FundoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FundoCountOutputType without action
   */
  export type FundoCountOutputTypeCountUserFundosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFundoWhereInput
  }


  /**
   * Count Type UserFundoCountOutputType
   */

  export type UserFundoCountOutputType = {
    terrenos: number
  }

  export type UserFundoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terrenos?: boolean | UserFundoCountOutputTypeCountTerrenosArgs
  }

  // Custom InputTypes
  /**
   * UserFundoCountOutputType without action
   */
  export type UserFundoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundoCountOutputType
     */
    select?: UserFundoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserFundoCountOutputType without action
   */
  export type UserFundoCountOutputTypeCountTerrenosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerrenoWhereInput
  }


  /**
   * Count Type TerrenoCountOutputType
   */

  export type TerrenoCountOutputType = {
    cuarteles: number
  }

  export type TerrenoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuarteles?: boolean | TerrenoCountOutputTypeCountCuartelesArgs
  }

  // Custom InputTypes
  /**
   * TerrenoCountOutputType without action
   */
  export type TerrenoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerrenoCountOutputType
     */
    select?: TerrenoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TerrenoCountOutputType without action
   */
  export type TerrenoCountOutputTypeCountCuartelesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuartelWhereInput
  }


  /**
   * Count Type SueloCountOutputType
   */

  export type SueloCountOutputType = {
    sueloPlanta: number
    cuartel: number
  }

  export type SueloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sueloPlanta?: boolean | SueloCountOutputTypeCountSueloPlantaArgs
    cuartel?: boolean | SueloCountOutputTypeCountCuartelArgs
  }

  // Custom InputTypes
  /**
   * SueloCountOutputType without action
   */
  export type SueloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SueloCountOutputType
     */
    select?: SueloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SueloCountOutputType without action
   */
  export type SueloCountOutputTypeCountSueloPlantaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sueloPlantaWhereInput
  }

  /**
   * SueloCountOutputType without action
   */
  export type SueloCountOutputTypeCountCuartelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuartelWhereInput
  }


  /**
   * Count Type PlantaCountOutputType
   */

  export type PlantaCountOutputType = {
    sueloPlanta: number
    cuartel: number
  }

  export type PlantaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sueloPlanta?: boolean | PlantaCountOutputTypeCountSueloPlantaArgs
    cuartel?: boolean | PlantaCountOutputTypeCountCuartelArgs
  }

  // Custom InputTypes
  /**
   * PlantaCountOutputType without action
   */
  export type PlantaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantaCountOutputType
     */
    select?: PlantaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantaCountOutputType without action
   */
  export type PlantaCountOutputTypeCountSueloPlantaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sueloPlantaWhereInput
  }

  /**
   * PlantaCountOutputType without action
   */
  export type PlantaCountOutputTypeCountCuartelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuartelWhereInput
  }


  /**
   * Count Type CuartelCountOutputType
   */

  export type CuartelCountOutputType = {
    tarea: number
  }

  export type CuartelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarea?: boolean | CuartelCountOutputTypeCountTareaArgs
  }

  // Custom InputTypes
  /**
   * CuartelCountOutputType without action
   */
  export type CuartelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuartelCountOutputType
     */
    select?: CuartelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CuartelCountOutputType without action
   */
  export type CuartelCountOutputTypeCountTareaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TareaWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    tarea: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarea?: boolean | ProductoCountOutputTypeCountTareaArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountTareaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TareaWhereInput
  }


  /**
   * Count Type TareaCountOutputType
   */

  export type TareaCountOutputType = {
    ordenAplicacion: number
  }

  export type TareaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenAplicacion?: boolean | TareaCountOutputTypeCountOrdenAplicacionArgs
  }

  // Custom InputTypes
  /**
   * TareaCountOutputType without action
   */
  export type TareaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TareaCountOutputType
     */
    select?: TareaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TareaCountOutputType without action
   */
  export type TareaCountOutputTypeCountOrdenAplicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenAplicacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    email: number
    password: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nombre: string
    apellido: string
    email: string
    password: string
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userFundos?: boolean | User$userFundosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "email" | "password" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFundos?: boolean | User$userFundosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userFundos: Prisma.$UserFundoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      apellido: string
      email: string
      password: string
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userFundos<T extends User$userFundosArgs<ExtArgs> = {}>(args?: Subset<T, User$userFundosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nombre: FieldRef<"User", 'String'>
    readonly apellido: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userFundos
   */
  export type User$userFundosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    where?: UserFundoWhereInput
    orderBy?: UserFundoOrderByWithRelationInput | UserFundoOrderByWithRelationInput[]
    cursor?: UserFundoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFundoScalarFieldEnum | UserFundoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    _count: RolCountAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    userFundos?: boolean | Rol$userFundosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFundos?: boolean | Rol$userFundosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      userFundos: Prisma.$UserFundoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userFundos<T extends Rol$userFundosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$userFundosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'String'>
    readonly nombre: FieldRef<"Rol", 'String'>
    readonly descripcion: FieldRef<"Rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.userFundos
   */
  export type Rol$userFundosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    where?: UserFundoWhereInput
    orderBy?: UserFundoOrderByWithRelationInput | UserFundoOrderByWithRelationInput[]
    cursor?: UserFundoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFundoScalarFieldEnum | UserFundoScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Fundo
   */

  export type AggregateFundo = {
    _count: FundoCountAggregateOutputType | null
    _min: FundoMinAggregateOutputType | null
    _max: FundoMaxAggregateOutputType | null
  }

  export type FundoMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    direccion: string | null
    rut: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creadoPor: string | null
  }

  export type FundoMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    direccion: string | null
    rut: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creadoPor: string | null
  }

  export type FundoCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    rut: number
    createdAt: number
    updatedAt: number
    creadoPor: number
    _all: number
  }


  export type FundoMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    rut?: true
    createdAt?: true
    updatedAt?: true
    creadoPor?: true
  }

  export type FundoMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    rut?: true
    createdAt?: true
    updatedAt?: true
    creadoPor?: true
  }

  export type FundoCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    rut?: true
    createdAt?: true
    updatedAt?: true
    creadoPor?: true
    _all?: true
  }

  export type FundoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fundo to aggregate.
     */
    where?: FundoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fundos to fetch.
     */
    orderBy?: FundoOrderByWithRelationInput | FundoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fundos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fundos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fundos
    **/
    _count?: true | FundoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundoMaxAggregateInputType
  }

  export type GetFundoAggregateType<T extends FundoAggregateArgs> = {
        [P in keyof T & keyof AggregateFundo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFundo[P]>
      : GetScalarType<T[P], AggregateFundo[P]>
  }




  export type FundoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundoWhereInput
    orderBy?: FundoOrderByWithAggregationInput | FundoOrderByWithAggregationInput[]
    by: FundoScalarFieldEnum[] | FundoScalarFieldEnum
    having?: FundoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundoCountAggregateInputType | true
    _min?: FundoMinAggregateInputType
    _max?: FundoMaxAggregateInputType
  }

  export type FundoGroupByOutputType = {
    id: string
    nombre: string
    direccion: string
    rut: string
    createdAt: Date
    updatedAt: Date
    creadoPor: string
    _count: FundoCountAggregateOutputType | null
    _min: FundoMinAggregateOutputType | null
    _max: FundoMaxAggregateOutputType | null
  }

  type GetFundoGroupByPayload<T extends FundoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundoGroupByOutputType[P]>
            : GetScalarType<T[P], FundoGroupByOutputType[P]>
        }
      >
    >


  export type FundoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    rut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creadoPor?: boolean
    userFundos?: boolean | Fundo$userFundosArgs<ExtArgs>
    _count?: boolean | FundoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundo"]>

  export type FundoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    rut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creadoPor?: boolean
  }, ExtArgs["result"]["fundo"]>

  export type FundoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    rut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creadoPor?: boolean
  }, ExtArgs["result"]["fundo"]>

  export type FundoSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    rut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creadoPor?: boolean
  }

  export type FundoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "rut" | "createdAt" | "updatedAt" | "creadoPor", ExtArgs["result"]["fundo"]>
  export type FundoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFundos?: boolean | Fundo$userFundosArgs<ExtArgs>
    _count?: boolean | FundoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FundoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FundoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FundoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fundo"
    objects: {
      userFundos: Prisma.$UserFundoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      direccion: string
      rut: string
      createdAt: Date
      updatedAt: Date
      creadoPor: string
    }, ExtArgs["result"]["fundo"]>
    composites: {}
  }

  type FundoGetPayload<S extends boolean | null | undefined | FundoDefaultArgs> = $Result.GetResult<Prisma.$FundoPayload, S>

  type FundoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundoCountAggregateInputType | true
    }

  export interface FundoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fundo'], meta: { name: 'Fundo' } }
    /**
     * Find zero or one Fundo that matches the filter.
     * @param {FundoFindUniqueArgs} args - Arguments to find a Fundo
     * @example
     * // Get one Fundo
     * const fundo = await prisma.fundo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundoFindUniqueArgs>(args: SelectSubset<T, FundoFindUniqueArgs<ExtArgs>>): Prisma__FundoClient<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fundo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundoFindUniqueOrThrowArgs} args - Arguments to find a Fundo
     * @example
     * // Get one Fundo
     * const fundo = await prisma.fundo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundoFindUniqueOrThrowArgs>(args: SelectSubset<T, FundoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundoClient<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fundo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundoFindFirstArgs} args - Arguments to find a Fundo
     * @example
     * // Get one Fundo
     * const fundo = await prisma.fundo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundoFindFirstArgs>(args?: SelectSubset<T, FundoFindFirstArgs<ExtArgs>>): Prisma__FundoClient<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fundo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundoFindFirstOrThrowArgs} args - Arguments to find a Fundo
     * @example
     * // Get one Fundo
     * const fundo = await prisma.fundo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundoFindFirstOrThrowArgs>(args?: SelectSubset<T, FundoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundoClient<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fundos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fundos
     * const fundos = await prisma.fundo.findMany()
     * 
     * // Get first 10 Fundos
     * const fundos = await prisma.fundo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundoWithIdOnly = await prisma.fundo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundoFindManyArgs>(args?: SelectSubset<T, FundoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fundo.
     * @param {FundoCreateArgs} args - Arguments to create a Fundo.
     * @example
     * // Create one Fundo
     * const Fundo = await prisma.fundo.create({
     *   data: {
     *     // ... data to create a Fundo
     *   }
     * })
     * 
     */
    create<T extends FundoCreateArgs>(args: SelectSubset<T, FundoCreateArgs<ExtArgs>>): Prisma__FundoClient<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fundos.
     * @param {FundoCreateManyArgs} args - Arguments to create many Fundos.
     * @example
     * // Create many Fundos
     * const fundo = await prisma.fundo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundoCreateManyArgs>(args?: SelectSubset<T, FundoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fundos and returns the data saved in the database.
     * @param {FundoCreateManyAndReturnArgs} args - Arguments to create many Fundos.
     * @example
     * // Create many Fundos
     * const fundo = await prisma.fundo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fundos and only return the `id`
     * const fundoWithIdOnly = await prisma.fundo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FundoCreateManyAndReturnArgs>(args?: SelectSubset<T, FundoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fundo.
     * @param {FundoDeleteArgs} args - Arguments to delete one Fundo.
     * @example
     * // Delete one Fundo
     * const Fundo = await prisma.fundo.delete({
     *   where: {
     *     // ... filter to delete one Fundo
     *   }
     * })
     * 
     */
    delete<T extends FundoDeleteArgs>(args: SelectSubset<T, FundoDeleteArgs<ExtArgs>>): Prisma__FundoClient<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fundo.
     * @param {FundoUpdateArgs} args - Arguments to update one Fundo.
     * @example
     * // Update one Fundo
     * const fundo = await prisma.fundo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundoUpdateArgs>(args: SelectSubset<T, FundoUpdateArgs<ExtArgs>>): Prisma__FundoClient<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fundos.
     * @param {FundoDeleteManyArgs} args - Arguments to filter Fundos to delete.
     * @example
     * // Delete a few Fundos
     * const { count } = await prisma.fundo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundoDeleteManyArgs>(args?: SelectSubset<T, FundoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fundos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fundos
     * const fundo = await prisma.fundo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundoUpdateManyArgs>(args: SelectSubset<T, FundoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fundos and returns the data updated in the database.
     * @param {FundoUpdateManyAndReturnArgs} args - Arguments to update many Fundos.
     * @example
     * // Update many Fundos
     * const fundo = await prisma.fundo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fundos and only return the `id`
     * const fundoWithIdOnly = await prisma.fundo.updateManyAndReturn({
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
    updateManyAndReturn<T extends FundoUpdateManyAndReturnArgs>(args: SelectSubset<T, FundoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fundo.
     * @param {FundoUpsertArgs} args - Arguments to update or create a Fundo.
     * @example
     * // Update or create a Fundo
     * const fundo = await prisma.fundo.upsert({
     *   create: {
     *     // ... data to create a Fundo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fundo we want to update
     *   }
     * })
     */
    upsert<T extends FundoUpsertArgs>(args: SelectSubset<T, FundoUpsertArgs<ExtArgs>>): Prisma__FundoClient<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fundos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundoCountArgs} args - Arguments to filter Fundos to count.
     * @example
     * // Count the number of Fundos
     * const count = await prisma.fundo.count({
     *   where: {
     *     // ... the filter for the Fundos we want to count
     *   }
     * })
    **/
    count<T extends FundoCountArgs>(
      args?: Subset<T, FundoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fundo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FundoAggregateArgs>(args: Subset<T, FundoAggregateArgs>): Prisma.PrismaPromise<GetFundoAggregateType<T>>

    /**
     * Group by Fundo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundoGroupByArgs} args - Group by arguments.
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
      T extends FundoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundoGroupByArgs['orderBy'] }
        : { orderBy?: FundoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FundoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fundo model
   */
  readonly fields: FundoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fundo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userFundos<T extends Fundo$userFundosArgs<ExtArgs> = {}>(args?: Subset<T, Fundo$userFundosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fundo model
   */
  interface FundoFieldRefs {
    readonly id: FieldRef<"Fundo", 'String'>
    readonly nombre: FieldRef<"Fundo", 'String'>
    readonly direccion: FieldRef<"Fundo", 'String'>
    readonly rut: FieldRef<"Fundo", 'String'>
    readonly createdAt: FieldRef<"Fundo", 'DateTime'>
    readonly updatedAt: FieldRef<"Fundo", 'DateTime'>
    readonly creadoPor: FieldRef<"Fundo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fundo findUnique
   */
  export type FundoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundoInclude<ExtArgs> | null
    /**
     * Filter, which Fundo to fetch.
     */
    where: FundoWhereUniqueInput
  }

  /**
   * Fundo findUniqueOrThrow
   */
  export type FundoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundoInclude<ExtArgs> | null
    /**
     * Filter, which Fundo to fetch.
     */
    where: FundoWhereUniqueInput
  }

  /**
   * Fundo findFirst
   */
  export type FundoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundoInclude<ExtArgs> | null
    /**
     * Filter, which Fundo to fetch.
     */
    where?: FundoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fundos to fetch.
     */
    orderBy?: FundoOrderByWithRelationInput | FundoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fundos.
     */
    cursor?: FundoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fundos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fundos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fundos.
     */
    distinct?: FundoScalarFieldEnum | FundoScalarFieldEnum[]
  }

  /**
   * Fundo findFirstOrThrow
   */
  export type FundoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundoInclude<ExtArgs> | null
    /**
     * Filter, which Fundo to fetch.
     */
    where?: FundoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fundos to fetch.
     */
    orderBy?: FundoOrderByWithRelationInput | FundoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fundos.
     */
    cursor?: FundoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fundos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fundos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fundos.
     */
    distinct?: FundoScalarFieldEnum | FundoScalarFieldEnum[]
  }

  /**
   * Fundo findMany
   */
  export type FundoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundoInclude<ExtArgs> | null
    /**
     * Filter, which Fundos to fetch.
     */
    where?: FundoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fundos to fetch.
     */
    orderBy?: FundoOrderByWithRelationInput | FundoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fundos.
     */
    cursor?: FundoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fundos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fundos.
     */
    skip?: number
    distinct?: FundoScalarFieldEnum | FundoScalarFieldEnum[]
  }

  /**
   * Fundo create
   */
  export type FundoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundoInclude<ExtArgs> | null
    /**
     * The data needed to create a Fundo.
     */
    data: XOR<FundoCreateInput, FundoUncheckedCreateInput>
  }

  /**
   * Fundo createMany
   */
  export type FundoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fundos.
     */
    data: FundoCreateManyInput | FundoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fundo createManyAndReturn
   */
  export type FundoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * The data used to create many Fundos.
     */
    data: FundoCreateManyInput | FundoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fundo update
   */
  export type FundoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundoInclude<ExtArgs> | null
    /**
     * The data needed to update a Fundo.
     */
    data: XOR<FundoUpdateInput, FundoUncheckedUpdateInput>
    /**
     * Choose, which Fundo to update.
     */
    where: FundoWhereUniqueInput
  }

  /**
   * Fundo updateMany
   */
  export type FundoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fundos.
     */
    data: XOR<FundoUpdateManyMutationInput, FundoUncheckedUpdateManyInput>
    /**
     * Filter which Fundos to update
     */
    where?: FundoWhereInput
    /**
     * Limit how many Fundos to update.
     */
    limit?: number
  }

  /**
   * Fundo updateManyAndReturn
   */
  export type FundoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * The data used to update Fundos.
     */
    data: XOR<FundoUpdateManyMutationInput, FundoUncheckedUpdateManyInput>
    /**
     * Filter which Fundos to update
     */
    where?: FundoWhereInput
    /**
     * Limit how many Fundos to update.
     */
    limit?: number
  }

  /**
   * Fundo upsert
   */
  export type FundoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundoInclude<ExtArgs> | null
    /**
     * The filter to search for the Fundo to update in case it exists.
     */
    where: FundoWhereUniqueInput
    /**
     * In case the Fundo found by the `where` argument doesn't exist, create a new Fundo with this data.
     */
    create: XOR<FundoCreateInput, FundoUncheckedCreateInput>
    /**
     * In case the Fundo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundoUpdateInput, FundoUncheckedUpdateInput>
  }

  /**
   * Fundo delete
   */
  export type FundoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundoInclude<ExtArgs> | null
    /**
     * Filter which Fundo to delete.
     */
    where: FundoWhereUniqueInput
  }

  /**
   * Fundo deleteMany
   */
  export type FundoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fundos to delete
     */
    where?: FundoWhereInput
    /**
     * Limit how many Fundos to delete.
     */
    limit?: number
  }

  /**
   * Fundo.userFundos
   */
  export type Fundo$userFundosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    where?: UserFundoWhereInput
    orderBy?: UserFundoOrderByWithRelationInput | UserFundoOrderByWithRelationInput[]
    cursor?: UserFundoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFundoScalarFieldEnum | UserFundoScalarFieldEnum[]
  }

  /**
   * Fundo without action
   */
  export type FundoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fundo
     */
    select?: FundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fundo
     */
    omit?: FundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundoInclude<ExtArgs> | null
  }


  /**
   * Model UserFundo
   */

  export type AggregateUserFundo = {
    _count: UserFundoCountAggregateOutputType | null
    _min: UserFundoMinAggregateOutputType | null
    _max: UserFundoMaxAggregateOutputType | null
  }

  export type UserFundoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fundoId: string | null
    assignedAt: Date | null
    rolId: string | null
  }

  export type UserFundoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fundoId: string | null
    assignedAt: Date | null
    rolId: string | null
  }

  export type UserFundoCountAggregateOutputType = {
    id: number
    userId: number
    fundoId: number
    assignedAt: number
    rolId: number
    _all: number
  }


  export type UserFundoMinAggregateInputType = {
    id?: true
    userId?: true
    fundoId?: true
    assignedAt?: true
    rolId?: true
  }

  export type UserFundoMaxAggregateInputType = {
    id?: true
    userId?: true
    fundoId?: true
    assignedAt?: true
    rolId?: true
  }

  export type UserFundoCountAggregateInputType = {
    id?: true
    userId?: true
    fundoId?: true
    assignedAt?: true
    rolId?: true
    _all?: true
  }

  export type UserFundoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFundo to aggregate.
     */
    where?: UserFundoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFundos to fetch.
     */
    orderBy?: UserFundoOrderByWithRelationInput | UserFundoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFundoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFundos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFundos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFundos
    **/
    _count?: true | UserFundoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFundoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFundoMaxAggregateInputType
  }

  export type GetUserFundoAggregateType<T extends UserFundoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFundo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFundo[P]>
      : GetScalarType<T[P], AggregateUserFundo[P]>
  }




  export type UserFundoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFundoWhereInput
    orderBy?: UserFundoOrderByWithAggregationInput | UserFundoOrderByWithAggregationInput[]
    by: UserFundoScalarFieldEnum[] | UserFundoScalarFieldEnum
    having?: UserFundoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFundoCountAggregateInputType | true
    _min?: UserFundoMinAggregateInputType
    _max?: UserFundoMaxAggregateInputType
  }

  export type UserFundoGroupByOutputType = {
    id: string
    userId: string
    fundoId: string
    assignedAt: Date
    rolId: string
    _count: UserFundoCountAggregateOutputType | null
    _min: UserFundoMinAggregateOutputType | null
    _max: UserFundoMaxAggregateOutputType | null
  }

  type GetUserFundoGroupByPayload<T extends UserFundoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFundoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFundoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFundoGroupByOutputType[P]>
            : GetScalarType<T[P], UserFundoGroupByOutputType[P]>
        }
      >
    >


  export type UserFundoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fundoId?: boolean
    assignedAt?: boolean
    rolId?: boolean
    fundo?: boolean | FundoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
    terrenos?: boolean | UserFundo$terrenosArgs<ExtArgs>
    _count?: boolean | UserFundoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFundo"]>

  export type UserFundoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fundoId?: boolean
    assignedAt?: boolean
    rolId?: boolean
    fundo?: boolean | FundoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFundo"]>

  export type UserFundoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fundoId?: boolean
    assignedAt?: boolean
    rolId?: boolean
    fundo?: boolean | FundoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFundo"]>

  export type UserFundoSelectScalar = {
    id?: boolean
    userId?: boolean
    fundoId?: boolean
    assignedAt?: boolean
    rolId?: boolean
  }

  export type UserFundoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fundoId" | "assignedAt" | "rolId", ExtArgs["result"]["userFundo"]>
  export type UserFundoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fundo?: boolean | FundoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
    terrenos?: boolean | UserFundo$terrenosArgs<ExtArgs>
    _count?: boolean | UserFundoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserFundoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fundo?: boolean | FundoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UserFundoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fundo?: boolean | FundoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $UserFundoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFundo"
    objects: {
      fundo: Prisma.$FundoPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      rol: Prisma.$RolPayload<ExtArgs>
      terrenos: Prisma.$TerrenoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fundoId: string
      assignedAt: Date
      rolId: string
    }, ExtArgs["result"]["userFundo"]>
    composites: {}
  }

  type UserFundoGetPayload<S extends boolean | null | undefined | UserFundoDefaultArgs> = $Result.GetResult<Prisma.$UserFundoPayload, S>

  type UserFundoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFundoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFundoCountAggregateInputType | true
    }

  export interface UserFundoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFundo'], meta: { name: 'UserFundo' } }
    /**
     * Find zero or one UserFundo that matches the filter.
     * @param {UserFundoFindUniqueArgs} args - Arguments to find a UserFundo
     * @example
     * // Get one UserFundo
     * const userFundo = await prisma.userFundo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFundoFindUniqueArgs>(args: SelectSubset<T, UserFundoFindUniqueArgs<ExtArgs>>): Prisma__UserFundoClient<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFundo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFundoFindUniqueOrThrowArgs} args - Arguments to find a UserFundo
     * @example
     * // Get one UserFundo
     * const userFundo = await prisma.userFundo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFundoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFundoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFundoClient<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFundo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFundoFindFirstArgs} args - Arguments to find a UserFundo
     * @example
     * // Get one UserFundo
     * const userFundo = await prisma.userFundo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFundoFindFirstArgs>(args?: SelectSubset<T, UserFundoFindFirstArgs<ExtArgs>>): Prisma__UserFundoClient<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFundo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFundoFindFirstOrThrowArgs} args - Arguments to find a UserFundo
     * @example
     * // Get one UserFundo
     * const userFundo = await prisma.userFundo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFundoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFundoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFundoClient<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFundos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFundoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFundos
     * const userFundos = await prisma.userFundo.findMany()
     * 
     * // Get first 10 UserFundos
     * const userFundos = await prisma.userFundo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFundoWithIdOnly = await prisma.userFundo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFundoFindManyArgs>(args?: SelectSubset<T, UserFundoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFundo.
     * @param {UserFundoCreateArgs} args - Arguments to create a UserFundo.
     * @example
     * // Create one UserFundo
     * const UserFundo = await prisma.userFundo.create({
     *   data: {
     *     // ... data to create a UserFundo
     *   }
     * })
     * 
     */
    create<T extends UserFundoCreateArgs>(args: SelectSubset<T, UserFundoCreateArgs<ExtArgs>>): Prisma__UserFundoClient<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFundos.
     * @param {UserFundoCreateManyArgs} args - Arguments to create many UserFundos.
     * @example
     * // Create many UserFundos
     * const userFundo = await prisma.userFundo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFundoCreateManyArgs>(args?: SelectSubset<T, UserFundoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFundos and returns the data saved in the database.
     * @param {UserFundoCreateManyAndReturnArgs} args - Arguments to create many UserFundos.
     * @example
     * // Create many UserFundos
     * const userFundo = await prisma.userFundo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFundos and only return the `id`
     * const userFundoWithIdOnly = await prisma.userFundo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFundoCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFundoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFundo.
     * @param {UserFundoDeleteArgs} args - Arguments to delete one UserFundo.
     * @example
     * // Delete one UserFundo
     * const UserFundo = await prisma.userFundo.delete({
     *   where: {
     *     // ... filter to delete one UserFundo
     *   }
     * })
     * 
     */
    delete<T extends UserFundoDeleteArgs>(args: SelectSubset<T, UserFundoDeleteArgs<ExtArgs>>): Prisma__UserFundoClient<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFundo.
     * @param {UserFundoUpdateArgs} args - Arguments to update one UserFundo.
     * @example
     * // Update one UserFundo
     * const userFundo = await prisma.userFundo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFundoUpdateArgs>(args: SelectSubset<T, UserFundoUpdateArgs<ExtArgs>>): Prisma__UserFundoClient<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFundos.
     * @param {UserFundoDeleteManyArgs} args - Arguments to filter UserFundos to delete.
     * @example
     * // Delete a few UserFundos
     * const { count } = await prisma.userFundo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFundoDeleteManyArgs>(args?: SelectSubset<T, UserFundoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFundos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFundoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFundos
     * const userFundo = await prisma.userFundo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFundoUpdateManyArgs>(args: SelectSubset<T, UserFundoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFundos and returns the data updated in the database.
     * @param {UserFundoUpdateManyAndReturnArgs} args - Arguments to update many UserFundos.
     * @example
     * // Update many UserFundos
     * const userFundo = await prisma.userFundo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFundos and only return the `id`
     * const userFundoWithIdOnly = await prisma.userFundo.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserFundoUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFundoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFundo.
     * @param {UserFundoUpsertArgs} args - Arguments to update or create a UserFundo.
     * @example
     * // Update or create a UserFundo
     * const userFundo = await prisma.userFundo.upsert({
     *   create: {
     *     // ... data to create a UserFundo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFundo we want to update
     *   }
     * })
     */
    upsert<T extends UserFundoUpsertArgs>(args: SelectSubset<T, UserFundoUpsertArgs<ExtArgs>>): Prisma__UserFundoClient<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFundos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFundoCountArgs} args - Arguments to filter UserFundos to count.
     * @example
     * // Count the number of UserFundos
     * const count = await prisma.userFundo.count({
     *   where: {
     *     // ... the filter for the UserFundos we want to count
     *   }
     * })
    **/
    count<T extends UserFundoCountArgs>(
      args?: Subset<T, UserFundoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFundoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFundo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFundoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserFundoAggregateArgs>(args: Subset<T, UserFundoAggregateArgs>): Prisma.PrismaPromise<GetUserFundoAggregateType<T>>

    /**
     * Group by UserFundo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFundoGroupByArgs} args - Group by arguments.
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
      T extends UserFundoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFundoGroupByArgs['orderBy'] }
        : { orderBy?: UserFundoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserFundoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFundoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFundo model
   */
  readonly fields: UserFundoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFundo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFundoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fundo<T extends FundoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FundoDefaultArgs<ExtArgs>>): Prisma__FundoClient<$Result.GetResult<Prisma.$FundoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    terrenos<T extends UserFundo$terrenosArgs<ExtArgs> = {}>(args?: Subset<T, UserFundo$terrenosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserFundo model
   */
  interface UserFundoFieldRefs {
    readonly id: FieldRef<"UserFundo", 'String'>
    readonly userId: FieldRef<"UserFundo", 'String'>
    readonly fundoId: FieldRef<"UserFundo", 'String'>
    readonly assignedAt: FieldRef<"UserFundo", 'DateTime'>
    readonly rolId: FieldRef<"UserFundo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserFundo findUnique
   */
  export type UserFundoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    /**
     * Filter, which UserFundo to fetch.
     */
    where: UserFundoWhereUniqueInput
  }

  /**
   * UserFundo findUniqueOrThrow
   */
  export type UserFundoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    /**
     * Filter, which UserFundo to fetch.
     */
    where: UserFundoWhereUniqueInput
  }

  /**
   * UserFundo findFirst
   */
  export type UserFundoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    /**
     * Filter, which UserFundo to fetch.
     */
    where?: UserFundoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFundos to fetch.
     */
    orderBy?: UserFundoOrderByWithRelationInput | UserFundoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFundos.
     */
    cursor?: UserFundoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFundos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFundos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFundos.
     */
    distinct?: UserFundoScalarFieldEnum | UserFundoScalarFieldEnum[]
  }

  /**
   * UserFundo findFirstOrThrow
   */
  export type UserFundoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    /**
     * Filter, which UserFundo to fetch.
     */
    where?: UserFundoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFundos to fetch.
     */
    orderBy?: UserFundoOrderByWithRelationInput | UserFundoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFundos.
     */
    cursor?: UserFundoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFundos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFundos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFundos.
     */
    distinct?: UserFundoScalarFieldEnum | UserFundoScalarFieldEnum[]
  }

  /**
   * UserFundo findMany
   */
  export type UserFundoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    /**
     * Filter, which UserFundos to fetch.
     */
    where?: UserFundoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFundos to fetch.
     */
    orderBy?: UserFundoOrderByWithRelationInput | UserFundoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFundos.
     */
    cursor?: UserFundoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFundos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFundos.
     */
    skip?: number
    distinct?: UserFundoScalarFieldEnum | UserFundoScalarFieldEnum[]
  }

  /**
   * UserFundo create
   */
  export type UserFundoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFundo.
     */
    data: XOR<UserFundoCreateInput, UserFundoUncheckedCreateInput>
  }

  /**
   * UserFundo createMany
   */
  export type UserFundoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFundos.
     */
    data: UserFundoCreateManyInput | UserFundoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFundo createManyAndReturn
   */
  export type UserFundoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * The data used to create many UserFundos.
     */
    data: UserFundoCreateManyInput | UserFundoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFundo update
   */
  export type UserFundoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFundo.
     */
    data: XOR<UserFundoUpdateInput, UserFundoUncheckedUpdateInput>
    /**
     * Choose, which UserFundo to update.
     */
    where: UserFundoWhereUniqueInput
  }

  /**
   * UserFundo updateMany
   */
  export type UserFundoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFundos.
     */
    data: XOR<UserFundoUpdateManyMutationInput, UserFundoUncheckedUpdateManyInput>
    /**
     * Filter which UserFundos to update
     */
    where?: UserFundoWhereInput
    /**
     * Limit how many UserFundos to update.
     */
    limit?: number
  }

  /**
   * UserFundo updateManyAndReturn
   */
  export type UserFundoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * The data used to update UserFundos.
     */
    data: XOR<UserFundoUpdateManyMutationInput, UserFundoUncheckedUpdateManyInput>
    /**
     * Filter which UserFundos to update
     */
    where?: UserFundoWhereInput
    /**
     * Limit how many UserFundos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFundo upsert
   */
  export type UserFundoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFundo to update in case it exists.
     */
    where: UserFundoWhereUniqueInput
    /**
     * In case the UserFundo found by the `where` argument doesn't exist, create a new UserFundo with this data.
     */
    create: XOR<UserFundoCreateInput, UserFundoUncheckedCreateInput>
    /**
     * In case the UserFundo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFundoUpdateInput, UserFundoUncheckedUpdateInput>
  }

  /**
   * UserFundo delete
   */
  export type UserFundoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
    /**
     * Filter which UserFundo to delete.
     */
    where: UserFundoWhereUniqueInput
  }

  /**
   * UserFundo deleteMany
   */
  export type UserFundoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFundos to delete
     */
    where?: UserFundoWhereInput
    /**
     * Limit how many UserFundos to delete.
     */
    limit?: number
  }

  /**
   * UserFundo.terrenos
   */
  export type UserFundo$terrenosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoInclude<ExtArgs> | null
    where?: TerrenoWhereInput
    orderBy?: TerrenoOrderByWithRelationInput | TerrenoOrderByWithRelationInput[]
    cursor?: TerrenoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TerrenoScalarFieldEnum | TerrenoScalarFieldEnum[]
  }

  /**
   * UserFundo without action
   */
  export type UserFundoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFundo
     */
    select?: UserFundoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFundo
     */
    omit?: UserFundoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFundoInclude<ExtArgs> | null
  }


  /**
   * Model Terreno
   */

  export type AggregateTerreno = {
    _count: TerrenoCountAggregateOutputType | null
    _avg: TerrenoAvgAggregateOutputType | null
    _sum: TerrenoSumAggregateOutputType | null
    _min: TerrenoMinAggregateOutputType | null
    _max: TerrenoMaxAggregateOutputType | null
  }

  export type TerrenoAvgAggregateOutputType = {
    areaHectareas: number | null
    lat: number | null
    lon: number | null
  }

  export type TerrenoSumAggregateOutputType = {
    areaHectareas: number | null
    lat: number | null
    lon: number | null
  }

  export type TerrenoMinAggregateOutputType = {
    id: string | null
    areaHectareas: number | null
    createdAt: Date | null
    updatedAt: Date | null
    creadoPor: string | null
    lat: number | null
    lon: number | null
    codeSagGrower: string | null
    userFundoId: string | null
  }

  export type TerrenoMaxAggregateOutputType = {
    id: string | null
    areaHectareas: number | null
    createdAt: Date | null
    updatedAt: Date | null
    creadoPor: string | null
    lat: number | null
    lon: number | null
    codeSagGrower: string | null
    userFundoId: string | null
  }

  export type TerrenoCountAggregateOutputType = {
    id: number
    areaHectareas: number
    createdAt: number
    updatedAt: number
    creadoPor: number
    lat: number
    lon: number
    codeSagGrower: number
    userFundoId: number
    _all: number
  }


  export type TerrenoAvgAggregateInputType = {
    areaHectareas?: true
    lat?: true
    lon?: true
  }

  export type TerrenoSumAggregateInputType = {
    areaHectareas?: true
    lat?: true
    lon?: true
  }

  export type TerrenoMinAggregateInputType = {
    id?: true
    areaHectareas?: true
    createdAt?: true
    updatedAt?: true
    creadoPor?: true
    lat?: true
    lon?: true
    codeSagGrower?: true
    userFundoId?: true
  }

  export type TerrenoMaxAggregateInputType = {
    id?: true
    areaHectareas?: true
    createdAt?: true
    updatedAt?: true
    creadoPor?: true
    lat?: true
    lon?: true
    codeSagGrower?: true
    userFundoId?: true
  }

  export type TerrenoCountAggregateInputType = {
    id?: true
    areaHectareas?: true
    createdAt?: true
    updatedAt?: true
    creadoPor?: true
    lat?: true
    lon?: true
    codeSagGrower?: true
    userFundoId?: true
    _all?: true
  }

  export type TerrenoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terreno to aggregate.
     */
    where?: TerrenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terrenos to fetch.
     */
    orderBy?: TerrenoOrderByWithRelationInput | TerrenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TerrenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terrenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terrenos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Terrenos
    **/
    _count?: true | TerrenoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TerrenoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TerrenoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TerrenoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TerrenoMaxAggregateInputType
  }

  export type GetTerrenoAggregateType<T extends TerrenoAggregateArgs> = {
        [P in keyof T & keyof AggregateTerreno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerreno[P]>
      : GetScalarType<T[P], AggregateTerreno[P]>
  }




  export type TerrenoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerrenoWhereInput
    orderBy?: TerrenoOrderByWithAggregationInput | TerrenoOrderByWithAggregationInput[]
    by: TerrenoScalarFieldEnum[] | TerrenoScalarFieldEnum
    having?: TerrenoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TerrenoCountAggregateInputType | true
    _avg?: TerrenoAvgAggregateInputType
    _sum?: TerrenoSumAggregateInputType
    _min?: TerrenoMinAggregateInputType
    _max?: TerrenoMaxAggregateInputType
  }

  export type TerrenoGroupByOutputType = {
    id: string
    areaHectareas: number
    createdAt: Date
    updatedAt: Date
    creadoPor: string
    lat: number
    lon: number
    codeSagGrower: string
    userFundoId: string
    _count: TerrenoCountAggregateOutputType | null
    _avg: TerrenoAvgAggregateOutputType | null
    _sum: TerrenoSumAggregateOutputType | null
    _min: TerrenoMinAggregateOutputType | null
    _max: TerrenoMaxAggregateOutputType | null
  }

  type GetTerrenoGroupByPayload<T extends TerrenoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TerrenoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TerrenoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TerrenoGroupByOutputType[P]>
            : GetScalarType<T[P], TerrenoGroupByOutputType[P]>
        }
      >
    >


  export type TerrenoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaHectareas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creadoPor?: boolean
    lat?: boolean
    lon?: boolean
    codeSagGrower?: boolean
    userFundoId?: boolean
    userFundo?: boolean | UserFundoDefaultArgs<ExtArgs>
    cuarteles?: boolean | Terreno$cuartelesArgs<ExtArgs>
    _count?: boolean | TerrenoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["terreno"]>

  export type TerrenoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaHectareas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creadoPor?: boolean
    lat?: boolean
    lon?: boolean
    codeSagGrower?: boolean
    userFundoId?: boolean
    userFundo?: boolean | UserFundoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["terreno"]>

  export type TerrenoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaHectareas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creadoPor?: boolean
    lat?: boolean
    lon?: boolean
    codeSagGrower?: boolean
    userFundoId?: boolean
    userFundo?: boolean | UserFundoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["terreno"]>

  export type TerrenoSelectScalar = {
    id?: boolean
    areaHectareas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creadoPor?: boolean
    lat?: boolean
    lon?: boolean
    codeSagGrower?: boolean
    userFundoId?: boolean
  }

  export type TerrenoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "areaHectareas" | "createdAt" | "updatedAt" | "creadoPor" | "lat" | "lon" | "codeSagGrower" | "userFundoId", ExtArgs["result"]["terreno"]>
  export type TerrenoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFundo?: boolean | UserFundoDefaultArgs<ExtArgs>
    cuarteles?: boolean | Terreno$cuartelesArgs<ExtArgs>
    _count?: boolean | TerrenoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TerrenoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFundo?: boolean | UserFundoDefaultArgs<ExtArgs>
  }
  export type TerrenoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFundo?: boolean | UserFundoDefaultArgs<ExtArgs>
  }

  export type $TerrenoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Terreno"
    objects: {
      userFundo: Prisma.$UserFundoPayload<ExtArgs>
      cuarteles: Prisma.$cuartelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      areaHectareas: number
      createdAt: Date
      updatedAt: Date
      creadoPor: string
      lat: number
      lon: number
      codeSagGrower: string
      userFundoId: string
    }, ExtArgs["result"]["terreno"]>
    composites: {}
  }

  type TerrenoGetPayload<S extends boolean | null | undefined | TerrenoDefaultArgs> = $Result.GetResult<Prisma.$TerrenoPayload, S>

  type TerrenoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TerrenoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TerrenoCountAggregateInputType | true
    }

  export interface TerrenoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Terreno'], meta: { name: 'Terreno' } }
    /**
     * Find zero or one Terreno that matches the filter.
     * @param {TerrenoFindUniqueArgs} args - Arguments to find a Terreno
     * @example
     * // Get one Terreno
     * const terreno = await prisma.terreno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TerrenoFindUniqueArgs>(args: SelectSubset<T, TerrenoFindUniqueArgs<ExtArgs>>): Prisma__TerrenoClient<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Terreno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TerrenoFindUniqueOrThrowArgs} args - Arguments to find a Terreno
     * @example
     * // Get one Terreno
     * const terreno = await prisma.terreno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TerrenoFindUniqueOrThrowArgs>(args: SelectSubset<T, TerrenoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TerrenoClient<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Terreno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerrenoFindFirstArgs} args - Arguments to find a Terreno
     * @example
     * // Get one Terreno
     * const terreno = await prisma.terreno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TerrenoFindFirstArgs>(args?: SelectSubset<T, TerrenoFindFirstArgs<ExtArgs>>): Prisma__TerrenoClient<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Terreno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerrenoFindFirstOrThrowArgs} args - Arguments to find a Terreno
     * @example
     * // Get one Terreno
     * const terreno = await prisma.terreno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TerrenoFindFirstOrThrowArgs>(args?: SelectSubset<T, TerrenoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TerrenoClient<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Terrenos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerrenoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Terrenos
     * const terrenos = await prisma.terreno.findMany()
     * 
     * // Get first 10 Terrenos
     * const terrenos = await prisma.terreno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const terrenoWithIdOnly = await prisma.terreno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TerrenoFindManyArgs>(args?: SelectSubset<T, TerrenoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Terreno.
     * @param {TerrenoCreateArgs} args - Arguments to create a Terreno.
     * @example
     * // Create one Terreno
     * const Terreno = await prisma.terreno.create({
     *   data: {
     *     // ... data to create a Terreno
     *   }
     * })
     * 
     */
    create<T extends TerrenoCreateArgs>(args: SelectSubset<T, TerrenoCreateArgs<ExtArgs>>): Prisma__TerrenoClient<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Terrenos.
     * @param {TerrenoCreateManyArgs} args - Arguments to create many Terrenos.
     * @example
     * // Create many Terrenos
     * const terreno = await prisma.terreno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TerrenoCreateManyArgs>(args?: SelectSubset<T, TerrenoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Terrenos and returns the data saved in the database.
     * @param {TerrenoCreateManyAndReturnArgs} args - Arguments to create many Terrenos.
     * @example
     * // Create many Terrenos
     * const terreno = await prisma.terreno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Terrenos and only return the `id`
     * const terrenoWithIdOnly = await prisma.terreno.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TerrenoCreateManyAndReturnArgs>(args?: SelectSubset<T, TerrenoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Terreno.
     * @param {TerrenoDeleteArgs} args - Arguments to delete one Terreno.
     * @example
     * // Delete one Terreno
     * const Terreno = await prisma.terreno.delete({
     *   where: {
     *     // ... filter to delete one Terreno
     *   }
     * })
     * 
     */
    delete<T extends TerrenoDeleteArgs>(args: SelectSubset<T, TerrenoDeleteArgs<ExtArgs>>): Prisma__TerrenoClient<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Terreno.
     * @param {TerrenoUpdateArgs} args - Arguments to update one Terreno.
     * @example
     * // Update one Terreno
     * const terreno = await prisma.terreno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TerrenoUpdateArgs>(args: SelectSubset<T, TerrenoUpdateArgs<ExtArgs>>): Prisma__TerrenoClient<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Terrenos.
     * @param {TerrenoDeleteManyArgs} args - Arguments to filter Terrenos to delete.
     * @example
     * // Delete a few Terrenos
     * const { count } = await prisma.terreno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TerrenoDeleteManyArgs>(args?: SelectSubset<T, TerrenoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Terrenos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerrenoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Terrenos
     * const terreno = await prisma.terreno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TerrenoUpdateManyArgs>(args: SelectSubset<T, TerrenoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Terrenos and returns the data updated in the database.
     * @param {TerrenoUpdateManyAndReturnArgs} args - Arguments to update many Terrenos.
     * @example
     * // Update many Terrenos
     * const terreno = await prisma.terreno.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Terrenos and only return the `id`
     * const terrenoWithIdOnly = await prisma.terreno.updateManyAndReturn({
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
    updateManyAndReturn<T extends TerrenoUpdateManyAndReturnArgs>(args: SelectSubset<T, TerrenoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Terreno.
     * @param {TerrenoUpsertArgs} args - Arguments to update or create a Terreno.
     * @example
     * // Update or create a Terreno
     * const terreno = await prisma.terreno.upsert({
     *   create: {
     *     // ... data to create a Terreno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Terreno we want to update
     *   }
     * })
     */
    upsert<T extends TerrenoUpsertArgs>(args: SelectSubset<T, TerrenoUpsertArgs<ExtArgs>>): Prisma__TerrenoClient<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Terrenos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerrenoCountArgs} args - Arguments to filter Terrenos to count.
     * @example
     * // Count the number of Terrenos
     * const count = await prisma.terreno.count({
     *   where: {
     *     // ... the filter for the Terrenos we want to count
     *   }
     * })
    **/
    count<T extends TerrenoCountArgs>(
      args?: Subset<T, TerrenoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TerrenoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Terreno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerrenoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TerrenoAggregateArgs>(args: Subset<T, TerrenoAggregateArgs>): Prisma.PrismaPromise<GetTerrenoAggregateType<T>>

    /**
     * Group by Terreno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerrenoGroupByArgs} args - Group by arguments.
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
      T extends TerrenoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TerrenoGroupByArgs['orderBy'] }
        : { orderBy?: TerrenoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TerrenoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTerrenoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Terreno model
   */
  readonly fields: TerrenoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Terreno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TerrenoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userFundo<T extends UserFundoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserFundoDefaultArgs<ExtArgs>>): Prisma__UserFundoClient<$Result.GetResult<Prisma.$UserFundoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cuarteles<T extends Terreno$cuartelesArgs<ExtArgs> = {}>(args?: Subset<T, Terreno$cuartelesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Terreno model
   */
  interface TerrenoFieldRefs {
    readonly id: FieldRef<"Terreno", 'String'>
    readonly areaHectareas: FieldRef<"Terreno", 'Float'>
    readonly createdAt: FieldRef<"Terreno", 'DateTime'>
    readonly updatedAt: FieldRef<"Terreno", 'DateTime'>
    readonly creadoPor: FieldRef<"Terreno", 'String'>
    readonly lat: FieldRef<"Terreno", 'Float'>
    readonly lon: FieldRef<"Terreno", 'Float'>
    readonly codeSagGrower: FieldRef<"Terreno", 'String'>
    readonly userFundoId: FieldRef<"Terreno", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Terreno findUnique
   */
  export type TerrenoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoInclude<ExtArgs> | null
    /**
     * Filter, which Terreno to fetch.
     */
    where: TerrenoWhereUniqueInput
  }

  /**
   * Terreno findUniqueOrThrow
   */
  export type TerrenoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoInclude<ExtArgs> | null
    /**
     * Filter, which Terreno to fetch.
     */
    where: TerrenoWhereUniqueInput
  }

  /**
   * Terreno findFirst
   */
  export type TerrenoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoInclude<ExtArgs> | null
    /**
     * Filter, which Terreno to fetch.
     */
    where?: TerrenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terrenos to fetch.
     */
    orderBy?: TerrenoOrderByWithRelationInput | TerrenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terrenos.
     */
    cursor?: TerrenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terrenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terrenos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terrenos.
     */
    distinct?: TerrenoScalarFieldEnum | TerrenoScalarFieldEnum[]
  }

  /**
   * Terreno findFirstOrThrow
   */
  export type TerrenoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoInclude<ExtArgs> | null
    /**
     * Filter, which Terreno to fetch.
     */
    where?: TerrenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terrenos to fetch.
     */
    orderBy?: TerrenoOrderByWithRelationInput | TerrenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terrenos.
     */
    cursor?: TerrenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terrenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terrenos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terrenos.
     */
    distinct?: TerrenoScalarFieldEnum | TerrenoScalarFieldEnum[]
  }

  /**
   * Terreno findMany
   */
  export type TerrenoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoInclude<ExtArgs> | null
    /**
     * Filter, which Terrenos to fetch.
     */
    where?: TerrenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terrenos to fetch.
     */
    orderBy?: TerrenoOrderByWithRelationInput | TerrenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Terrenos.
     */
    cursor?: TerrenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terrenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terrenos.
     */
    skip?: number
    distinct?: TerrenoScalarFieldEnum | TerrenoScalarFieldEnum[]
  }

  /**
   * Terreno create
   */
  export type TerrenoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoInclude<ExtArgs> | null
    /**
     * The data needed to create a Terreno.
     */
    data: XOR<TerrenoCreateInput, TerrenoUncheckedCreateInput>
  }

  /**
   * Terreno createMany
   */
  export type TerrenoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Terrenos.
     */
    data: TerrenoCreateManyInput | TerrenoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Terreno createManyAndReturn
   */
  export type TerrenoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * The data used to create many Terrenos.
     */
    data: TerrenoCreateManyInput | TerrenoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Terreno update
   */
  export type TerrenoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoInclude<ExtArgs> | null
    /**
     * The data needed to update a Terreno.
     */
    data: XOR<TerrenoUpdateInput, TerrenoUncheckedUpdateInput>
    /**
     * Choose, which Terreno to update.
     */
    where: TerrenoWhereUniqueInput
  }

  /**
   * Terreno updateMany
   */
  export type TerrenoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Terrenos.
     */
    data: XOR<TerrenoUpdateManyMutationInput, TerrenoUncheckedUpdateManyInput>
    /**
     * Filter which Terrenos to update
     */
    where?: TerrenoWhereInput
    /**
     * Limit how many Terrenos to update.
     */
    limit?: number
  }

  /**
   * Terreno updateManyAndReturn
   */
  export type TerrenoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * The data used to update Terrenos.
     */
    data: XOR<TerrenoUpdateManyMutationInput, TerrenoUncheckedUpdateManyInput>
    /**
     * Filter which Terrenos to update
     */
    where?: TerrenoWhereInput
    /**
     * Limit how many Terrenos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Terreno upsert
   */
  export type TerrenoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoInclude<ExtArgs> | null
    /**
     * The filter to search for the Terreno to update in case it exists.
     */
    where: TerrenoWhereUniqueInput
    /**
     * In case the Terreno found by the `where` argument doesn't exist, create a new Terreno with this data.
     */
    create: XOR<TerrenoCreateInput, TerrenoUncheckedCreateInput>
    /**
     * In case the Terreno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TerrenoUpdateInput, TerrenoUncheckedUpdateInput>
  }

  /**
   * Terreno delete
   */
  export type TerrenoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoInclude<ExtArgs> | null
    /**
     * Filter which Terreno to delete.
     */
    where: TerrenoWhereUniqueInput
  }

  /**
   * Terreno deleteMany
   */
  export type TerrenoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terrenos to delete
     */
    where?: TerrenoWhereInput
    /**
     * Limit how many Terrenos to delete.
     */
    limit?: number
  }

  /**
   * Terreno.cuarteles
   */
  export type Terreno$cuartelesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    where?: cuartelWhereInput
    orderBy?: cuartelOrderByWithRelationInput | cuartelOrderByWithRelationInput[]
    cursor?: cuartelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuartelScalarFieldEnum | CuartelScalarFieldEnum[]
  }

  /**
   * Terreno without action
   */
  export type TerrenoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreno
     */
    select?: TerrenoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreno
     */
    omit?: TerrenoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerrenoInclude<ExtArgs> | null
  }


  /**
   * Model Suelo
   */

  export type AggregateSuelo = {
    _count: SueloCountAggregateOutputType | null
    _min: SueloMinAggregateOutputType | null
    _max: SueloMaxAggregateOutputType | null
  }

  export type SueloMinAggregateOutputType = {
    id: string | null
    tipo: string | null
    caracteristicas: string | null
  }

  export type SueloMaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    caracteristicas: string | null
  }

  export type SueloCountAggregateOutputType = {
    id: number
    tipo: number
    caracteristicas: number
    _all: number
  }


  export type SueloMinAggregateInputType = {
    id?: true
    tipo?: true
    caracteristicas?: true
  }

  export type SueloMaxAggregateInputType = {
    id?: true
    tipo?: true
    caracteristicas?: true
  }

  export type SueloCountAggregateInputType = {
    id?: true
    tipo?: true
    caracteristicas?: true
    _all?: true
  }

  export type SueloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suelo to aggregate.
     */
    where?: SueloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suelos to fetch.
     */
    orderBy?: SueloOrderByWithRelationInput | SueloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SueloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suelos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suelos
    **/
    _count?: true | SueloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SueloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SueloMaxAggregateInputType
  }

  export type GetSueloAggregateType<T extends SueloAggregateArgs> = {
        [P in keyof T & keyof AggregateSuelo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuelo[P]>
      : GetScalarType<T[P], AggregateSuelo[P]>
  }




  export type SueloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SueloWhereInput
    orderBy?: SueloOrderByWithAggregationInput | SueloOrderByWithAggregationInput[]
    by: SueloScalarFieldEnum[] | SueloScalarFieldEnum
    having?: SueloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SueloCountAggregateInputType | true
    _min?: SueloMinAggregateInputType
    _max?: SueloMaxAggregateInputType
  }

  export type SueloGroupByOutputType = {
    id: string
    tipo: string
    caracteristicas: string
    _count: SueloCountAggregateOutputType | null
    _min: SueloMinAggregateOutputType | null
    _max: SueloMaxAggregateOutputType | null
  }

  type GetSueloGroupByPayload<T extends SueloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SueloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SueloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SueloGroupByOutputType[P]>
            : GetScalarType<T[P], SueloGroupByOutputType[P]>
        }
      >
    >


  export type SueloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    caracteristicas?: boolean
    sueloPlanta?: boolean | Suelo$sueloPlantaArgs<ExtArgs>
    cuartel?: boolean | Suelo$cuartelArgs<ExtArgs>
    _count?: boolean | SueloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suelo"]>

  export type SueloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    caracteristicas?: boolean
  }, ExtArgs["result"]["suelo"]>

  export type SueloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    caracteristicas?: boolean
  }, ExtArgs["result"]["suelo"]>

  export type SueloSelectScalar = {
    id?: boolean
    tipo?: boolean
    caracteristicas?: boolean
  }

  export type SueloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "caracteristicas", ExtArgs["result"]["suelo"]>
  export type SueloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sueloPlanta?: boolean | Suelo$sueloPlantaArgs<ExtArgs>
    cuartel?: boolean | Suelo$cuartelArgs<ExtArgs>
    _count?: boolean | SueloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SueloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SueloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SueloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suelo"
    objects: {
      sueloPlanta: Prisma.$sueloPlantaPayload<ExtArgs>[]
      cuartel: Prisma.$cuartelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      caracteristicas: string
    }, ExtArgs["result"]["suelo"]>
    composites: {}
  }

  type SueloGetPayload<S extends boolean | null | undefined | SueloDefaultArgs> = $Result.GetResult<Prisma.$SueloPayload, S>

  type SueloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SueloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SueloCountAggregateInputType | true
    }

  export interface SueloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suelo'], meta: { name: 'Suelo' } }
    /**
     * Find zero or one Suelo that matches the filter.
     * @param {SueloFindUniqueArgs} args - Arguments to find a Suelo
     * @example
     * // Get one Suelo
     * const suelo = await prisma.suelo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SueloFindUniqueArgs>(args: SelectSubset<T, SueloFindUniqueArgs<ExtArgs>>): Prisma__SueloClient<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suelo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SueloFindUniqueOrThrowArgs} args - Arguments to find a Suelo
     * @example
     * // Get one Suelo
     * const suelo = await prisma.suelo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SueloFindUniqueOrThrowArgs>(args: SelectSubset<T, SueloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SueloClient<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suelo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SueloFindFirstArgs} args - Arguments to find a Suelo
     * @example
     * // Get one Suelo
     * const suelo = await prisma.suelo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SueloFindFirstArgs>(args?: SelectSubset<T, SueloFindFirstArgs<ExtArgs>>): Prisma__SueloClient<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suelo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SueloFindFirstOrThrowArgs} args - Arguments to find a Suelo
     * @example
     * // Get one Suelo
     * const suelo = await prisma.suelo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SueloFindFirstOrThrowArgs>(args?: SelectSubset<T, SueloFindFirstOrThrowArgs<ExtArgs>>): Prisma__SueloClient<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suelos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SueloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suelos
     * const suelos = await prisma.suelo.findMany()
     * 
     * // Get first 10 Suelos
     * const suelos = await prisma.suelo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sueloWithIdOnly = await prisma.suelo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SueloFindManyArgs>(args?: SelectSubset<T, SueloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suelo.
     * @param {SueloCreateArgs} args - Arguments to create a Suelo.
     * @example
     * // Create one Suelo
     * const Suelo = await prisma.suelo.create({
     *   data: {
     *     // ... data to create a Suelo
     *   }
     * })
     * 
     */
    create<T extends SueloCreateArgs>(args: SelectSubset<T, SueloCreateArgs<ExtArgs>>): Prisma__SueloClient<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suelos.
     * @param {SueloCreateManyArgs} args - Arguments to create many Suelos.
     * @example
     * // Create many Suelos
     * const suelo = await prisma.suelo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SueloCreateManyArgs>(args?: SelectSubset<T, SueloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suelos and returns the data saved in the database.
     * @param {SueloCreateManyAndReturnArgs} args - Arguments to create many Suelos.
     * @example
     * // Create many Suelos
     * const suelo = await prisma.suelo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suelos and only return the `id`
     * const sueloWithIdOnly = await prisma.suelo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SueloCreateManyAndReturnArgs>(args?: SelectSubset<T, SueloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suelo.
     * @param {SueloDeleteArgs} args - Arguments to delete one Suelo.
     * @example
     * // Delete one Suelo
     * const Suelo = await prisma.suelo.delete({
     *   where: {
     *     // ... filter to delete one Suelo
     *   }
     * })
     * 
     */
    delete<T extends SueloDeleteArgs>(args: SelectSubset<T, SueloDeleteArgs<ExtArgs>>): Prisma__SueloClient<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suelo.
     * @param {SueloUpdateArgs} args - Arguments to update one Suelo.
     * @example
     * // Update one Suelo
     * const suelo = await prisma.suelo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SueloUpdateArgs>(args: SelectSubset<T, SueloUpdateArgs<ExtArgs>>): Prisma__SueloClient<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suelos.
     * @param {SueloDeleteManyArgs} args - Arguments to filter Suelos to delete.
     * @example
     * // Delete a few Suelos
     * const { count } = await prisma.suelo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SueloDeleteManyArgs>(args?: SelectSubset<T, SueloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suelos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SueloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suelos
     * const suelo = await prisma.suelo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SueloUpdateManyArgs>(args: SelectSubset<T, SueloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suelos and returns the data updated in the database.
     * @param {SueloUpdateManyAndReturnArgs} args - Arguments to update many Suelos.
     * @example
     * // Update many Suelos
     * const suelo = await prisma.suelo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suelos and only return the `id`
     * const sueloWithIdOnly = await prisma.suelo.updateManyAndReturn({
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
    updateManyAndReturn<T extends SueloUpdateManyAndReturnArgs>(args: SelectSubset<T, SueloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suelo.
     * @param {SueloUpsertArgs} args - Arguments to update or create a Suelo.
     * @example
     * // Update or create a Suelo
     * const suelo = await prisma.suelo.upsert({
     *   create: {
     *     // ... data to create a Suelo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suelo we want to update
     *   }
     * })
     */
    upsert<T extends SueloUpsertArgs>(args: SelectSubset<T, SueloUpsertArgs<ExtArgs>>): Prisma__SueloClient<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suelos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SueloCountArgs} args - Arguments to filter Suelos to count.
     * @example
     * // Count the number of Suelos
     * const count = await prisma.suelo.count({
     *   where: {
     *     // ... the filter for the Suelos we want to count
     *   }
     * })
    **/
    count<T extends SueloCountArgs>(
      args?: Subset<T, SueloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SueloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suelo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SueloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SueloAggregateArgs>(args: Subset<T, SueloAggregateArgs>): Prisma.PrismaPromise<GetSueloAggregateType<T>>

    /**
     * Group by Suelo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SueloGroupByArgs} args - Group by arguments.
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
      T extends SueloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SueloGroupByArgs['orderBy'] }
        : { orderBy?: SueloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SueloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSueloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suelo model
   */
  readonly fields: SueloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suelo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SueloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sueloPlanta<T extends Suelo$sueloPlantaArgs<ExtArgs> = {}>(args?: Subset<T, Suelo$sueloPlantaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cuartel<T extends Suelo$cuartelArgs<ExtArgs> = {}>(args?: Subset<T, Suelo$cuartelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Suelo model
   */
  interface SueloFieldRefs {
    readonly id: FieldRef<"Suelo", 'String'>
    readonly tipo: FieldRef<"Suelo", 'String'>
    readonly caracteristicas: FieldRef<"Suelo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Suelo findUnique
   */
  export type SueloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SueloInclude<ExtArgs> | null
    /**
     * Filter, which Suelo to fetch.
     */
    where: SueloWhereUniqueInput
  }

  /**
   * Suelo findUniqueOrThrow
   */
  export type SueloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SueloInclude<ExtArgs> | null
    /**
     * Filter, which Suelo to fetch.
     */
    where: SueloWhereUniqueInput
  }

  /**
   * Suelo findFirst
   */
  export type SueloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SueloInclude<ExtArgs> | null
    /**
     * Filter, which Suelo to fetch.
     */
    where?: SueloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suelos to fetch.
     */
    orderBy?: SueloOrderByWithRelationInput | SueloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suelos.
     */
    cursor?: SueloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suelos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suelos.
     */
    distinct?: SueloScalarFieldEnum | SueloScalarFieldEnum[]
  }

  /**
   * Suelo findFirstOrThrow
   */
  export type SueloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SueloInclude<ExtArgs> | null
    /**
     * Filter, which Suelo to fetch.
     */
    where?: SueloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suelos to fetch.
     */
    orderBy?: SueloOrderByWithRelationInput | SueloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suelos.
     */
    cursor?: SueloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suelos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suelos.
     */
    distinct?: SueloScalarFieldEnum | SueloScalarFieldEnum[]
  }

  /**
   * Suelo findMany
   */
  export type SueloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SueloInclude<ExtArgs> | null
    /**
     * Filter, which Suelos to fetch.
     */
    where?: SueloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suelos to fetch.
     */
    orderBy?: SueloOrderByWithRelationInput | SueloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suelos.
     */
    cursor?: SueloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suelos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suelos.
     */
    skip?: number
    distinct?: SueloScalarFieldEnum | SueloScalarFieldEnum[]
  }

  /**
   * Suelo create
   */
  export type SueloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SueloInclude<ExtArgs> | null
    /**
     * The data needed to create a Suelo.
     */
    data: XOR<SueloCreateInput, SueloUncheckedCreateInput>
  }

  /**
   * Suelo createMany
   */
  export type SueloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suelos.
     */
    data: SueloCreateManyInput | SueloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suelo createManyAndReturn
   */
  export type SueloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * The data used to create many Suelos.
     */
    data: SueloCreateManyInput | SueloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suelo update
   */
  export type SueloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SueloInclude<ExtArgs> | null
    /**
     * The data needed to update a Suelo.
     */
    data: XOR<SueloUpdateInput, SueloUncheckedUpdateInput>
    /**
     * Choose, which Suelo to update.
     */
    where: SueloWhereUniqueInput
  }

  /**
   * Suelo updateMany
   */
  export type SueloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suelos.
     */
    data: XOR<SueloUpdateManyMutationInput, SueloUncheckedUpdateManyInput>
    /**
     * Filter which Suelos to update
     */
    where?: SueloWhereInput
    /**
     * Limit how many Suelos to update.
     */
    limit?: number
  }

  /**
   * Suelo updateManyAndReturn
   */
  export type SueloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * The data used to update Suelos.
     */
    data: XOR<SueloUpdateManyMutationInput, SueloUncheckedUpdateManyInput>
    /**
     * Filter which Suelos to update
     */
    where?: SueloWhereInput
    /**
     * Limit how many Suelos to update.
     */
    limit?: number
  }

  /**
   * Suelo upsert
   */
  export type SueloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SueloInclude<ExtArgs> | null
    /**
     * The filter to search for the Suelo to update in case it exists.
     */
    where: SueloWhereUniqueInput
    /**
     * In case the Suelo found by the `where` argument doesn't exist, create a new Suelo with this data.
     */
    create: XOR<SueloCreateInput, SueloUncheckedCreateInput>
    /**
     * In case the Suelo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SueloUpdateInput, SueloUncheckedUpdateInput>
  }

  /**
   * Suelo delete
   */
  export type SueloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SueloInclude<ExtArgs> | null
    /**
     * Filter which Suelo to delete.
     */
    where: SueloWhereUniqueInput
  }

  /**
   * Suelo deleteMany
   */
  export type SueloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suelos to delete
     */
    where?: SueloWhereInput
    /**
     * Limit how many Suelos to delete.
     */
    limit?: number
  }

  /**
   * Suelo.sueloPlanta
   */
  export type Suelo$sueloPlantaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
    where?: sueloPlantaWhereInput
    orderBy?: sueloPlantaOrderByWithRelationInput | sueloPlantaOrderByWithRelationInput[]
    cursor?: sueloPlantaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SueloPlantaScalarFieldEnum | SueloPlantaScalarFieldEnum[]
  }

  /**
   * Suelo.cuartel
   */
  export type Suelo$cuartelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    where?: cuartelWhereInput
    orderBy?: cuartelOrderByWithRelationInput | cuartelOrderByWithRelationInput[]
    cursor?: cuartelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuartelScalarFieldEnum | CuartelScalarFieldEnum[]
  }

  /**
   * Suelo without action
   */
  export type SueloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suelo
     */
    select?: SueloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suelo
     */
    omit?: SueloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SueloInclude<ExtArgs> | null
  }


  /**
   * Model Planta
   */

  export type AggregatePlanta = {
    _count: PlantaCountAggregateOutputType | null
    _avg: PlantaAvgAggregateOutputType | null
    _sum: PlantaSumAggregateOutputType | null
    _min: PlantaMinAggregateOutputType | null
    _max: PlantaMaxAggregateOutputType | null
  }

  export type PlantaAvgAggregateOutputType = {
    espacioAncho: number | null
    espacioLargo: number | null
    produccion: number | null
  }

  export type PlantaSumAggregateOutputType = {
    espacioAncho: number | null
    espacioLargo: number | null
    produccion: number | null
  }

  export type PlantaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    espacioAncho: number | null
    espacioLargo: number | null
    produccion: number | null
    descripcion: string | null
    variedad: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlantaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    espacioAncho: number | null
    espacioLargo: number | null
    produccion: number | null
    descripcion: string | null
    variedad: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlantaCountAggregateOutputType = {
    id: number
    nombre: number
    espacioAncho: number
    espacioLargo: number
    produccion: number
    descripcion: number
    variedad: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlantaAvgAggregateInputType = {
    espacioAncho?: true
    espacioLargo?: true
    produccion?: true
  }

  export type PlantaSumAggregateInputType = {
    espacioAncho?: true
    espacioLargo?: true
    produccion?: true
  }

  export type PlantaMinAggregateInputType = {
    id?: true
    nombre?: true
    espacioAncho?: true
    espacioLargo?: true
    produccion?: true
    descripcion?: true
    variedad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlantaMaxAggregateInputType = {
    id?: true
    nombre?: true
    espacioAncho?: true
    espacioLargo?: true
    produccion?: true
    descripcion?: true
    variedad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlantaCountAggregateInputType = {
    id?: true
    nombre?: true
    espacioAncho?: true
    espacioLargo?: true
    produccion?: true
    descripcion?: true
    variedad?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlantaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planta to aggregate.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plantas
    **/
    _count?: true | PlantaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantaMaxAggregateInputType
  }

  export type GetPlantaAggregateType<T extends PlantaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanta[P]>
      : GetScalarType<T[P], AggregatePlanta[P]>
  }




  export type PlantaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantaWhereInput
    orderBy?: PlantaOrderByWithAggregationInput | PlantaOrderByWithAggregationInput[]
    by: PlantaScalarFieldEnum[] | PlantaScalarFieldEnum
    having?: PlantaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantaCountAggregateInputType | true
    _avg?: PlantaAvgAggregateInputType
    _sum?: PlantaSumAggregateInputType
    _min?: PlantaMinAggregateInputType
    _max?: PlantaMaxAggregateInputType
  }

  export type PlantaGroupByOutputType = {
    id: string
    nombre: string
    espacioAncho: number
    espacioLargo: number
    produccion: number
    descripcion: string
    variedad: string
    createdAt: Date
    updatedAt: Date
    _count: PlantaCountAggregateOutputType | null
    _avg: PlantaAvgAggregateOutputType | null
    _sum: PlantaSumAggregateOutputType | null
    _min: PlantaMinAggregateOutputType | null
    _max: PlantaMaxAggregateOutputType | null
  }

  type GetPlantaGroupByPayload<T extends PlantaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantaGroupByOutputType[P]>
            : GetScalarType<T[P], PlantaGroupByOutputType[P]>
        }
      >
    >


  export type PlantaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    espacioAncho?: boolean
    espacioLargo?: boolean
    produccion?: boolean
    descripcion?: boolean
    variedad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sueloPlanta?: boolean | Planta$sueloPlantaArgs<ExtArgs>
    cuartel?: boolean | Planta$cuartelArgs<ExtArgs>
    _count?: boolean | PlantaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planta"]>

  export type PlantaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    espacioAncho?: boolean
    espacioLargo?: boolean
    produccion?: boolean
    descripcion?: boolean
    variedad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planta"]>

  export type PlantaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    espacioAncho?: boolean
    espacioLargo?: boolean
    produccion?: boolean
    descripcion?: boolean
    variedad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planta"]>

  export type PlantaSelectScalar = {
    id?: boolean
    nombre?: boolean
    espacioAncho?: boolean
    espacioLargo?: boolean
    produccion?: boolean
    descripcion?: boolean
    variedad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlantaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "espacioAncho" | "espacioLargo" | "produccion" | "descripcion" | "variedad" | "createdAt" | "updatedAt", ExtArgs["result"]["planta"]>
  export type PlantaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sueloPlanta?: boolean | Planta$sueloPlantaArgs<ExtArgs>
    cuartel?: boolean | Planta$cuartelArgs<ExtArgs>
    _count?: boolean | PlantaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlantaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlantaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlantaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Planta"
    objects: {
      sueloPlanta: Prisma.$sueloPlantaPayload<ExtArgs>[]
      cuartel: Prisma.$cuartelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      espacioAncho: number
      espacioLargo: number
      produccion: number
      descripcion: string
      variedad: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["planta"]>
    composites: {}
  }

  type PlantaGetPayload<S extends boolean | null | undefined | PlantaDefaultArgs> = $Result.GetResult<Prisma.$PlantaPayload, S>

  type PlantaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantaCountAggregateInputType | true
    }

  export interface PlantaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Planta'], meta: { name: 'Planta' } }
    /**
     * Find zero or one Planta that matches the filter.
     * @param {PlantaFindUniqueArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantaFindUniqueArgs>(args: SelectSubset<T, PlantaFindUniqueArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Planta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantaFindUniqueOrThrowArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaFindFirstArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantaFindFirstArgs>(args?: SelectSubset<T, PlantaFindFirstArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaFindFirstOrThrowArgs} args - Arguments to find a Planta
     * @example
     * // Get one Planta
     * const planta = await prisma.planta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plantas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plantas
     * const plantas = await prisma.planta.findMany()
     * 
     * // Get first 10 Plantas
     * const plantas = await prisma.planta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantaWithIdOnly = await prisma.planta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantaFindManyArgs>(args?: SelectSubset<T, PlantaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Planta.
     * @param {PlantaCreateArgs} args - Arguments to create a Planta.
     * @example
     * // Create one Planta
     * const Planta = await prisma.planta.create({
     *   data: {
     *     // ... data to create a Planta
     *   }
     * })
     * 
     */
    create<T extends PlantaCreateArgs>(args: SelectSubset<T, PlantaCreateArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plantas.
     * @param {PlantaCreateManyArgs} args - Arguments to create many Plantas.
     * @example
     * // Create many Plantas
     * const planta = await prisma.planta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantaCreateManyArgs>(args?: SelectSubset<T, PlantaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plantas and returns the data saved in the database.
     * @param {PlantaCreateManyAndReturnArgs} args - Arguments to create many Plantas.
     * @example
     * // Create many Plantas
     * const planta = await prisma.planta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plantas and only return the `id`
     * const plantaWithIdOnly = await prisma.planta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantaCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Planta.
     * @param {PlantaDeleteArgs} args - Arguments to delete one Planta.
     * @example
     * // Delete one Planta
     * const Planta = await prisma.planta.delete({
     *   where: {
     *     // ... filter to delete one Planta
     *   }
     * })
     * 
     */
    delete<T extends PlantaDeleteArgs>(args: SelectSubset<T, PlantaDeleteArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Planta.
     * @param {PlantaUpdateArgs} args - Arguments to update one Planta.
     * @example
     * // Update one Planta
     * const planta = await prisma.planta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantaUpdateArgs>(args: SelectSubset<T, PlantaUpdateArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plantas.
     * @param {PlantaDeleteManyArgs} args - Arguments to filter Plantas to delete.
     * @example
     * // Delete a few Plantas
     * const { count } = await prisma.planta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantaDeleteManyArgs>(args?: SelectSubset<T, PlantaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plantas
     * const planta = await prisma.planta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantaUpdateManyArgs>(args: SelectSubset<T, PlantaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantas and returns the data updated in the database.
     * @param {PlantaUpdateManyAndReturnArgs} args - Arguments to update many Plantas.
     * @example
     * // Update many Plantas
     * const planta = await prisma.planta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plantas and only return the `id`
     * const plantaWithIdOnly = await prisma.planta.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlantaUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Planta.
     * @param {PlantaUpsertArgs} args - Arguments to update or create a Planta.
     * @example
     * // Update or create a Planta
     * const planta = await prisma.planta.upsert({
     *   create: {
     *     // ... data to create a Planta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planta we want to update
     *   }
     * })
     */
    upsert<T extends PlantaUpsertArgs>(args: SelectSubset<T, PlantaUpsertArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plantas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaCountArgs} args - Arguments to filter Plantas to count.
     * @example
     * // Count the number of Plantas
     * const count = await prisma.planta.count({
     *   where: {
     *     // ... the filter for the Plantas we want to count
     *   }
     * })
    **/
    count<T extends PlantaCountArgs>(
      args?: Subset<T, PlantaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantaAggregateArgs>(args: Subset<T, PlantaAggregateArgs>): Prisma.PrismaPromise<GetPlantaAggregateType<T>>

    /**
     * Group by Planta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantaGroupByArgs} args - Group by arguments.
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
      T extends PlantaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantaGroupByArgs['orderBy'] }
        : { orderBy?: PlantaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Planta model
   */
  readonly fields: PlantaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Planta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sueloPlanta<T extends Planta$sueloPlantaArgs<ExtArgs> = {}>(args?: Subset<T, Planta$sueloPlantaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cuartel<T extends Planta$cuartelArgs<ExtArgs> = {}>(args?: Subset<T, Planta$cuartelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Planta model
   */
  interface PlantaFieldRefs {
    readonly id: FieldRef<"Planta", 'String'>
    readonly nombre: FieldRef<"Planta", 'String'>
    readonly espacioAncho: FieldRef<"Planta", 'Float'>
    readonly espacioLargo: FieldRef<"Planta", 'Float'>
    readonly produccion: FieldRef<"Planta", 'Int'>
    readonly descripcion: FieldRef<"Planta", 'String'>
    readonly variedad: FieldRef<"Planta", 'String'>
    readonly createdAt: FieldRef<"Planta", 'DateTime'>
    readonly updatedAt: FieldRef<"Planta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Planta findUnique
   */
  export type PlantaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta findUniqueOrThrow
   */
  export type PlantaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta findFirst
   */
  export type PlantaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantas.
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantas.
     */
    distinct?: PlantaScalarFieldEnum | PlantaScalarFieldEnum[]
  }

  /**
   * Planta findFirstOrThrow
   */
  export type PlantaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Planta to fetch.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantas.
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantas.
     */
    distinct?: PlantaScalarFieldEnum | PlantaScalarFieldEnum[]
  }

  /**
   * Planta findMany
   */
  export type PlantaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter, which Plantas to fetch.
     */
    where?: PlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantas to fetch.
     */
    orderBy?: PlantaOrderByWithRelationInput | PlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plantas.
     */
    cursor?: PlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantas.
     */
    skip?: number
    distinct?: PlantaScalarFieldEnum | PlantaScalarFieldEnum[]
  }

  /**
   * Planta create
   */
  export type PlantaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * The data needed to create a Planta.
     */
    data: XOR<PlantaCreateInput, PlantaUncheckedCreateInput>
  }

  /**
   * Planta createMany
   */
  export type PlantaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plantas.
     */
    data: PlantaCreateManyInput | PlantaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Planta createManyAndReturn
   */
  export type PlantaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * The data used to create many Plantas.
     */
    data: PlantaCreateManyInput | PlantaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Planta update
   */
  export type PlantaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * The data needed to update a Planta.
     */
    data: XOR<PlantaUpdateInput, PlantaUncheckedUpdateInput>
    /**
     * Choose, which Planta to update.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta updateMany
   */
  export type PlantaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plantas.
     */
    data: XOR<PlantaUpdateManyMutationInput, PlantaUncheckedUpdateManyInput>
    /**
     * Filter which Plantas to update
     */
    where?: PlantaWhereInput
    /**
     * Limit how many Plantas to update.
     */
    limit?: number
  }

  /**
   * Planta updateManyAndReturn
   */
  export type PlantaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * The data used to update Plantas.
     */
    data: XOR<PlantaUpdateManyMutationInput, PlantaUncheckedUpdateManyInput>
    /**
     * Filter which Plantas to update
     */
    where?: PlantaWhereInput
    /**
     * Limit how many Plantas to update.
     */
    limit?: number
  }

  /**
   * Planta upsert
   */
  export type PlantaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * The filter to search for the Planta to update in case it exists.
     */
    where: PlantaWhereUniqueInput
    /**
     * In case the Planta found by the `where` argument doesn't exist, create a new Planta with this data.
     */
    create: XOR<PlantaCreateInput, PlantaUncheckedCreateInput>
    /**
     * In case the Planta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantaUpdateInput, PlantaUncheckedUpdateInput>
  }

  /**
   * Planta delete
   */
  export type PlantaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
    /**
     * Filter which Planta to delete.
     */
    where: PlantaWhereUniqueInput
  }

  /**
   * Planta deleteMany
   */
  export type PlantaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plantas to delete
     */
    where?: PlantaWhereInput
    /**
     * Limit how many Plantas to delete.
     */
    limit?: number
  }

  /**
   * Planta.sueloPlanta
   */
  export type Planta$sueloPlantaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
    where?: sueloPlantaWhereInput
    orderBy?: sueloPlantaOrderByWithRelationInput | sueloPlantaOrderByWithRelationInput[]
    cursor?: sueloPlantaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SueloPlantaScalarFieldEnum | SueloPlantaScalarFieldEnum[]
  }

  /**
   * Planta.cuartel
   */
  export type Planta$cuartelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    where?: cuartelWhereInput
    orderBy?: cuartelOrderByWithRelationInput | cuartelOrderByWithRelationInput[]
    cursor?: cuartelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuartelScalarFieldEnum | CuartelScalarFieldEnum[]
  }

  /**
   * Planta without action
   */
  export type PlantaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planta
     */
    select?: PlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planta
     */
    omit?: PlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantaInclude<ExtArgs> | null
  }


  /**
   * Model cuartel
   */

  export type AggregateCuartel = {
    _count: CuartelCountAggregateOutputType | null
    _avg: CuartelAvgAggregateOutputType | null
    _sum: CuartelSumAggregateOutputType | null
    _min: CuartelMinAggregateOutputType | null
    _max: CuartelMaxAggregateOutputType | null
  }

  export type CuartelAvgAggregateOutputType = {
    hectareas: number | null
  }

  export type CuartelSumAggregateOutputType = {
    hectareas: number | null
  }

  export type CuartelMinAggregateOutputType = {
    id: string | null
    hectareas: number | null
    createdAt: Date | null
    updatedAt: Date | null
    terrenoId: string | null
    sueloId: string | null
    plantaId: string | null
  }

  export type CuartelMaxAggregateOutputType = {
    id: string | null
    hectareas: number | null
    createdAt: Date | null
    updatedAt: Date | null
    terrenoId: string | null
    sueloId: string | null
    plantaId: string | null
  }

  export type CuartelCountAggregateOutputType = {
    id: number
    hectareas: number
    createdAt: number
    updatedAt: number
    terrenoId: number
    sueloId: number
    plantaId: number
    _all: number
  }


  export type CuartelAvgAggregateInputType = {
    hectareas?: true
  }

  export type CuartelSumAggregateInputType = {
    hectareas?: true
  }

  export type CuartelMinAggregateInputType = {
    id?: true
    hectareas?: true
    createdAt?: true
    updatedAt?: true
    terrenoId?: true
    sueloId?: true
    plantaId?: true
  }

  export type CuartelMaxAggregateInputType = {
    id?: true
    hectareas?: true
    createdAt?: true
    updatedAt?: true
    terrenoId?: true
    sueloId?: true
    plantaId?: true
  }

  export type CuartelCountAggregateInputType = {
    id?: true
    hectareas?: true
    createdAt?: true
    updatedAt?: true
    terrenoId?: true
    sueloId?: true
    plantaId?: true
    _all?: true
  }

  export type CuartelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuartel to aggregate.
     */
    where?: cuartelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuartels to fetch.
     */
    orderBy?: cuartelOrderByWithRelationInput | cuartelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cuartelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuartels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuartels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cuartels
    **/
    _count?: true | CuartelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuartelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuartelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuartelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuartelMaxAggregateInputType
  }

  export type GetCuartelAggregateType<T extends CuartelAggregateArgs> = {
        [P in keyof T & keyof AggregateCuartel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuartel[P]>
      : GetScalarType<T[P], AggregateCuartel[P]>
  }




  export type cuartelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuartelWhereInput
    orderBy?: cuartelOrderByWithAggregationInput | cuartelOrderByWithAggregationInput[]
    by: CuartelScalarFieldEnum[] | CuartelScalarFieldEnum
    having?: cuartelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuartelCountAggregateInputType | true
    _avg?: CuartelAvgAggregateInputType
    _sum?: CuartelSumAggregateInputType
    _min?: CuartelMinAggregateInputType
    _max?: CuartelMaxAggregateInputType
  }

  export type CuartelGroupByOutputType = {
    id: string
    hectareas: number
    createdAt: Date
    updatedAt: Date
    terrenoId: string
    sueloId: string
    plantaId: string
    _count: CuartelCountAggregateOutputType | null
    _avg: CuartelAvgAggregateOutputType | null
    _sum: CuartelSumAggregateOutputType | null
    _min: CuartelMinAggregateOutputType | null
    _max: CuartelMaxAggregateOutputType | null
  }

  type GetCuartelGroupByPayload<T extends cuartelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuartelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuartelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuartelGroupByOutputType[P]>
            : GetScalarType<T[P], CuartelGroupByOutputType[P]>
        }
      >
    >


  export type cuartelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hectareas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    terrenoId?: boolean
    sueloId?: boolean
    plantaId?: boolean
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
    terreno?: boolean | TerrenoDefaultArgs<ExtArgs>
    tarea?: boolean | cuartel$tareaArgs<ExtArgs>
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    _count?: boolean | CuartelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuartel"]>

  export type cuartelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hectareas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    terrenoId?: boolean
    sueloId?: boolean
    plantaId?: boolean
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
    terreno?: boolean | TerrenoDefaultArgs<ExtArgs>
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuartel"]>

  export type cuartelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hectareas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    terrenoId?: boolean
    sueloId?: boolean
    plantaId?: boolean
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
    terreno?: boolean | TerrenoDefaultArgs<ExtArgs>
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuartel"]>

  export type cuartelSelectScalar = {
    id?: boolean
    hectareas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    terrenoId?: boolean
    sueloId?: boolean
    plantaId?: boolean
  }

  export type cuartelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hectareas" | "createdAt" | "updatedAt" | "terrenoId" | "sueloId" | "plantaId", ExtArgs["result"]["cuartel"]>
  export type cuartelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
    terreno?: boolean | TerrenoDefaultArgs<ExtArgs>
    tarea?: boolean | cuartel$tareaArgs<ExtArgs>
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    _count?: boolean | CuartelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cuartelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
    terreno?: boolean | TerrenoDefaultArgs<ExtArgs>
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
  }
  export type cuartelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
    terreno?: boolean | TerrenoDefaultArgs<ExtArgs>
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
  }

  export type $cuartelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cuartel"
    objects: {
      suelo: Prisma.$SueloPayload<ExtArgs>
      terreno: Prisma.$TerrenoPayload<ExtArgs>
      tarea: Prisma.$TareaPayload<ExtArgs>[]
      planta: Prisma.$PlantaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hectareas: number
      createdAt: Date
      updatedAt: Date
      terrenoId: string
      sueloId: string
      plantaId: string
    }, ExtArgs["result"]["cuartel"]>
    composites: {}
  }

  type cuartelGetPayload<S extends boolean | null | undefined | cuartelDefaultArgs> = $Result.GetResult<Prisma.$cuartelPayload, S>

  type cuartelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cuartelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuartelCountAggregateInputType | true
    }

  export interface cuartelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cuartel'], meta: { name: 'cuartel' } }
    /**
     * Find zero or one Cuartel that matches the filter.
     * @param {cuartelFindUniqueArgs} args - Arguments to find a Cuartel
     * @example
     * // Get one Cuartel
     * const cuartel = await prisma.cuartel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cuartelFindUniqueArgs>(args: SelectSubset<T, cuartelFindUniqueArgs<ExtArgs>>): Prisma__cuartelClient<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cuartel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cuartelFindUniqueOrThrowArgs} args - Arguments to find a Cuartel
     * @example
     * // Get one Cuartel
     * const cuartel = await prisma.cuartel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cuartelFindUniqueOrThrowArgs>(args: SelectSubset<T, cuartelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cuartelClient<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuartel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuartelFindFirstArgs} args - Arguments to find a Cuartel
     * @example
     * // Get one Cuartel
     * const cuartel = await prisma.cuartel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cuartelFindFirstArgs>(args?: SelectSubset<T, cuartelFindFirstArgs<ExtArgs>>): Prisma__cuartelClient<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuartel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuartelFindFirstOrThrowArgs} args - Arguments to find a Cuartel
     * @example
     * // Get one Cuartel
     * const cuartel = await prisma.cuartel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cuartelFindFirstOrThrowArgs>(args?: SelectSubset<T, cuartelFindFirstOrThrowArgs<ExtArgs>>): Prisma__cuartelClient<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cuartels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuartelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuartels
     * const cuartels = await prisma.cuartel.findMany()
     * 
     * // Get first 10 Cuartels
     * const cuartels = await prisma.cuartel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuartelWithIdOnly = await prisma.cuartel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cuartelFindManyArgs>(args?: SelectSubset<T, cuartelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cuartel.
     * @param {cuartelCreateArgs} args - Arguments to create a Cuartel.
     * @example
     * // Create one Cuartel
     * const Cuartel = await prisma.cuartel.create({
     *   data: {
     *     // ... data to create a Cuartel
     *   }
     * })
     * 
     */
    create<T extends cuartelCreateArgs>(args: SelectSubset<T, cuartelCreateArgs<ExtArgs>>): Prisma__cuartelClient<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cuartels.
     * @param {cuartelCreateManyArgs} args - Arguments to create many Cuartels.
     * @example
     * // Create many Cuartels
     * const cuartel = await prisma.cuartel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cuartelCreateManyArgs>(args?: SelectSubset<T, cuartelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cuartels and returns the data saved in the database.
     * @param {cuartelCreateManyAndReturnArgs} args - Arguments to create many Cuartels.
     * @example
     * // Create many Cuartels
     * const cuartel = await prisma.cuartel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cuartels and only return the `id`
     * const cuartelWithIdOnly = await prisma.cuartel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cuartelCreateManyAndReturnArgs>(args?: SelectSubset<T, cuartelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cuartel.
     * @param {cuartelDeleteArgs} args - Arguments to delete one Cuartel.
     * @example
     * // Delete one Cuartel
     * const Cuartel = await prisma.cuartel.delete({
     *   where: {
     *     // ... filter to delete one Cuartel
     *   }
     * })
     * 
     */
    delete<T extends cuartelDeleteArgs>(args: SelectSubset<T, cuartelDeleteArgs<ExtArgs>>): Prisma__cuartelClient<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cuartel.
     * @param {cuartelUpdateArgs} args - Arguments to update one Cuartel.
     * @example
     * // Update one Cuartel
     * const cuartel = await prisma.cuartel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cuartelUpdateArgs>(args: SelectSubset<T, cuartelUpdateArgs<ExtArgs>>): Prisma__cuartelClient<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cuartels.
     * @param {cuartelDeleteManyArgs} args - Arguments to filter Cuartels to delete.
     * @example
     * // Delete a few Cuartels
     * const { count } = await prisma.cuartel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cuartelDeleteManyArgs>(args?: SelectSubset<T, cuartelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuartels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuartelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuartels
     * const cuartel = await prisma.cuartel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cuartelUpdateManyArgs>(args: SelectSubset<T, cuartelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuartels and returns the data updated in the database.
     * @param {cuartelUpdateManyAndReturnArgs} args - Arguments to update many Cuartels.
     * @example
     * // Update many Cuartels
     * const cuartel = await prisma.cuartel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cuartels and only return the `id`
     * const cuartelWithIdOnly = await prisma.cuartel.updateManyAndReturn({
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
    updateManyAndReturn<T extends cuartelUpdateManyAndReturnArgs>(args: SelectSubset<T, cuartelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cuartel.
     * @param {cuartelUpsertArgs} args - Arguments to update or create a Cuartel.
     * @example
     * // Update or create a Cuartel
     * const cuartel = await prisma.cuartel.upsert({
     *   create: {
     *     // ... data to create a Cuartel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuartel we want to update
     *   }
     * })
     */
    upsert<T extends cuartelUpsertArgs>(args: SelectSubset<T, cuartelUpsertArgs<ExtArgs>>): Prisma__cuartelClient<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cuartels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuartelCountArgs} args - Arguments to filter Cuartels to count.
     * @example
     * // Count the number of Cuartels
     * const count = await prisma.cuartel.count({
     *   where: {
     *     // ... the filter for the Cuartels we want to count
     *   }
     * })
    **/
    count<T extends cuartelCountArgs>(
      args?: Subset<T, cuartelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuartelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuartel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuartelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuartelAggregateArgs>(args: Subset<T, CuartelAggregateArgs>): Prisma.PrismaPromise<GetCuartelAggregateType<T>>

    /**
     * Group by Cuartel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuartelGroupByArgs} args - Group by arguments.
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
      T extends cuartelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cuartelGroupByArgs['orderBy'] }
        : { orderBy?: cuartelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cuartelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuartelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cuartel model
   */
  readonly fields: cuartelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cuartel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cuartelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suelo<T extends SueloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SueloDefaultArgs<ExtArgs>>): Prisma__SueloClient<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    terreno<T extends TerrenoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TerrenoDefaultArgs<ExtArgs>>): Prisma__TerrenoClient<$Result.GetResult<Prisma.$TerrenoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tarea<T extends cuartel$tareaArgs<ExtArgs> = {}>(args?: Subset<T, cuartel$tareaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planta<T extends PlantaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantaDefaultArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the cuartel model
   */
  interface cuartelFieldRefs {
    readonly id: FieldRef<"cuartel", 'String'>
    readonly hectareas: FieldRef<"cuartel", 'Float'>
    readonly createdAt: FieldRef<"cuartel", 'DateTime'>
    readonly updatedAt: FieldRef<"cuartel", 'DateTime'>
    readonly terrenoId: FieldRef<"cuartel", 'String'>
    readonly sueloId: FieldRef<"cuartel", 'String'>
    readonly plantaId: FieldRef<"cuartel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cuartel findUnique
   */
  export type cuartelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    /**
     * Filter, which cuartel to fetch.
     */
    where: cuartelWhereUniqueInput
  }

  /**
   * cuartel findUniqueOrThrow
   */
  export type cuartelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    /**
     * Filter, which cuartel to fetch.
     */
    where: cuartelWhereUniqueInput
  }

  /**
   * cuartel findFirst
   */
  export type cuartelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    /**
     * Filter, which cuartel to fetch.
     */
    where?: cuartelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuartels to fetch.
     */
    orderBy?: cuartelOrderByWithRelationInput | cuartelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuartels.
     */
    cursor?: cuartelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuartels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuartels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuartels.
     */
    distinct?: CuartelScalarFieldEnum | CuartelScalarFieldEnum[]
  }

  /**
   * cuartel findFirstOrThrow
   */
  export type cuartelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    /**
     * Filter, which cuartel to fetch.
     */
    where?: cuartelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuartels to fetch.
     */
    orderBy?: cuartelOrderByWithRelationInput | cuartelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuartels.
     */
    cursor?: cuartelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuartels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuartels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuartels.
     */
    distinct?: CuartelScalarFieldEnum | CuartelScalarFieldEnum[]
  }

  /**
   * cuartel findMany
   */
  export type cuartelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    /**
     * Filter, which cuartels to fetch.
     */
    where?: cuartelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuartels to fetch.
     */
    orderBy?: cuartelOrderByWithRelationInput | cuartelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cuartels.
     */
    cursor?: cuartelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuartels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuartels.
     */
    skip?: number
    distinct?: CuartelScalarFieldEnum | CuartelScalarFieldEnum[]
  }

  /**
   * cuartel create
   */
  export type cuartelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    /**
     * The data needed to create a cuartel.
     */
    data: XOR<cuartelCreateInput, cuartelUncheckedCreateInput>
  }

  /**
   * cuartel createMany
   */
  export type cuartelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cuartels.
     */
    data: cuartelCreateManyInput | cuartelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cuartel createManyAndReturn
   */
  export type cuartelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * The data used to create many cuartels.
     */
    data: cuartelCreateManyInput | cuartelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cuartel update
   */
  export type cuartelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    /**
     * The data needed to update a cuartel.
     */
    data: XOR<cuartelUpdateInput, cuartelUncheckedUpdateInput>
    /**
     * Choose, which cuartel to update.
     */
    where: cuartelWhereUniqueInput
  }

  /**
   * cuartel updateMany
   */
  export type cuartelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cuartels.
     */
    data: XOR<cuartelUpdateManyMutationInput, cuartelUncheckedUpdateManyInput>
    /**
     * Filter which cuartels to update
     */
    where?: cuartelWhereInput
    /**
     * Limit how many cuartels to update.
     */
    limit?: number
  }

  /**
   * cuartel updateManyAndReturn
   */
  export type cuartelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * The data used to update cuartels.
     */
    data: XOR<cuartelUpdateManyMutationInput, cuartelUncheckedUpdateManyInput>
    /**
     * Filter which cuartels to update
     */
    where?: cuartelWhereInput
    /**
     * Limit how many cuartels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cuartel upsert
   */
  export type cuartelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    /**
     * The filter to search for the cuartel to update in case it exists.
     */
    where: cuartelWhereUniqueInput
    /**
     * In case the cuartel found by the `where` argument doesn't exist, create a new cuartel with this data.
     */
    create: XOR<cuartelCreateInput, cuartelUncheckedCreateInput>
    /**
     * In case the cuartel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cuartelUpdateInput, cuartelUncheckedUpdateInput>
  }

  /**
   * cuartel delete
   */
  export type cuartelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
    /**
     * Filter which cuartel to delete.
     */
    where: cuartelWhereUniqueInput
  }

  /**
   * cuartel deleteMany
   */
  export type cuartelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuartels to delete
     */
    where?: cuartelWhereInput
    /**
     * Limit how many cuartels to delete.
     */
    limit?: number
  }

  /**
   * cuartel.tarea
   */
  export type cuartel$tareaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    where?: TareaWhereInput
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    cursor?: TareaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * cuartel without action
   */
  export type cuartelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuartel
     */
    select?: cuartelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuartel
     */
    omit?: cuartelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuartelInclude<ExtArgs> | null
  }


  /**
   * Model sueloPlanta
   */

  export type AggregateSueloPlanta = {
    _count: SueloPlantaCountAggregateOutputType | null
    _min: SueloPlantaMinAggregateOutputType | null
    _max: SueloPlantaMaxAggregateOutputType | null
  }

  export type SueloPlantaMinAggregateOutputType = {
    id: string | null
    compatibilidad: string | null
    plantaId: string | null
    sueloId: string | null
  }

  export type SueloPlantaMaxAggregateOutputType = {
    id: string | null
    compatibilidad: string | null
    plantaId: string | null
    sueloId: string | null
  }

  export type SueloPlantaCountAggregateOutputType = {
    id: number
    compatibilidad: number
    plantaId: number
    sueloId: number
    _all: number
  }


  export type SueloPlantaMinAggregateInputType = {
    id?: true
    compatibilidad?: true
    plantaId?: true
    sueloId?: true
  }

  export type SueloPlantaMaxAggregateInputType = {
    id?: true
    compatibilidad?: true
    plantaId?: true
    sueloId?: true
  }

  export type SueloPlantaCountAggregateInputType = {
    id?: true
    compatibilidad?: true
    plantaId?: true
    sueloId?: true
    _all?: true
  }

  export type SueloPlantaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sueloPlanta to aggregate.
     */
    where?: sueloPlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sueloPlantas to fetch.
     */
    orderBy?: sueloPlantaOrderByWithRelationInput | sueloPlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sueloPlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sueloPlantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sueloPlantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sueloPlantas
    **/
    _count?: true | SueloPlantaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SueloPlantaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SueloPlantaMaxAggregateInputType
  }

  export type GetSueloPlantaAggregateType<T extends SueloPlantaAggregateArgs> = {
        [P in keyof T & keyof AggregateSueloPlanta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSueloPlanta[P]>
      : GetScalarType<T[P], AggregateSueloPlanta[P]>
  }




  export type sueloPlantaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sueloPlantaWhereInput
    orderBy?: sueloPlantaOrderByWithAggregationInput | sueloPlantaOrderByWithAggregationInput[]
    by: SueloPlantaScalarFieldEnum[] | SueloPlantaScalarFieldEnum
    having?: sueloPlantaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SueloPlantaCountAggregateInputType | true
    _min?: SueloPlantaMinAggregateInputType
    _max?: SueloPlantaMaxAggregateInputType
  }

  export type SueloPlantaGroupByOutputType = {
    id: string
    compatibilidad: string
    plantaId: string
    sueloId: string
    _count: SueloPlantaCountAggregateOutputType | null
    _min: SueloPlantaMinAggregateOutputType | null
    _max: SueloPlantaMaxAggregateOutputType | null
  }

  type GetSueloPlantaGroupByPayload<T extends sueloPlantaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SueloPlantaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SueloPlantaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SueloPlantaGroupByOutputType[P]>
            : GetScalarType<T[P], SueloPlantaGroupByOutputType[P]>
        }
      >
    >


  export type sueloPlantaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compatibilidad?: boolean
    plantaId?: boolean
    sueloId?: boolean
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sueloPlanta"]>

  export type sueloPlantaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compatibilidad?: boolean
    plantaId?: boolean
    sueloId?: boolean
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sueloPlanta"]>

  export type sueloPlantaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compatibilidad?: boolean
    plantaId?: boolean
    sueloId?: boolean
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sueloPlanta"]>

  export type sueloPlantaSelectScalar = {
    id?: boolean
    compatibilidad?: boolean
    plantaId?: boolean
    sueloId?: boolean
  }

  export type sueloPlantaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "compatibilidad" | "plantaId" | "sueloId", ExtArgs["result"]["sueloPlanta"]>
  export type sueloPlantaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
  }
  export type sueloPlantaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
  }
  export type sueloPlantaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planta?: boolean | PlantaDefaultArgs<ExtArgs>
    suelo?: boolean | SueloDefaultArgs<ExtArgs>
  }

  export type $sueloPlantaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sueloPlanta"
    objects: {
      planta: Prisma.$PlantaPayload<ExtArgs>
      suelo: Prisma.$SueloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      compatibilidad: string
      plantaId: string
      sueloId: string
    }, ExtArgs["result"]["sueloPlanta"]>
    composites: {}
  }

  type sueloPlantaGetPayload<S extends boolean | null | undefined | sueloPlantaDefaultArgs> = $Result.GetResult<Prisma.$sueloPlantaPayload, S>

  type sueloPlantaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sueloPlantaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SueloPlantaCountAggregateInputType | true
    }

  export interface sueloPlantaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sueloPlanta'], meta: { name: 'sueloPlanta' } }
    /**
     * Find zero or one SueloPlanta that matches the filter.
     * @param {sueloPlantaFindUniqueArgs} args - Arguments to find a SueloPlanta
     * @example
     * // Get one SueloPlanta
     * const sueloPlanta = await prisma.sueloPlanta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sueloPlantaFindUniqueArgs>(args: SelectSubset<T, sueloPlantaFindUniqueArgs<ExtArgs>>): Prisma__sueloPlantaClient<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SueloPlanta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sueloPlantaFindUniqueOrThrowArgs} args - Arguments to find a SueloPlanta
     * @example
     * // Get one SueloPlanta
     * const sueloPlanta = await prisma.sueloPlanta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sueloPlantaFindUniqueOrThrowArgs>(args: SelectSubset<T, sueloPlantaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sueloPlantaClient<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SueloPlanta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sueloPlantaFindFirstArgs} args - Arguments to find a SueloPlanta
     * @example
     * // Get one SueloPlanta
     * const sueloPlanta = await prisma.sueloPlanta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sueloPlantaFindFirstArgs>(args?: SelectSubset<T, sueloPlantaFindFirstArgs<ExtArgs>>): Prisma__sueloPlantaClient<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SueloPlanta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sueloPlantaFindFirstOrThrowArgs} args - Arguments to find a SueloPlanta
     * @example
     * // Get one SueloPlanta
     * const sueloPlanta = await prisma.sueloPlanta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sueloPlantaFindFirstOrThrowArgs>(args?: SelectSubset<T, sueloPlantaFindFirstOrThrowArgs<ExtArgs>>): Prisma__sueloPlantaClient<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SueloPlantas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sueloPlantaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SueloPlantas
     * const sueloPlantas = await prisma.sueloPlanta.findMany()
     * 
     * // Get first 10 SueloPlantas
     * const sueloPlantas = await prisma.sueloPlanta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sueloPlantaWithIdOnly = await prisma.sueloPlanta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sueloPlantaFindManyArgs>(args?: SelectSubset<T, sueloPlantaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SueloPlanta.
     * @param {sueloPlantaCreateArgs} args - Arguments to create a SueloPlanta.
     * @example
     * // Create one SueloPlanta
     * const SueloPlanta = await prisma.sueloPlanta.create({
     *   data: {
     *     // ... data to create a SueloPlanta
     *   }
     * })
     * 
     */
    create<T extends sueloPlantaCreateArgs>(args: SelectSubset<T, sueloPlantaCreateArgs<ExtArgs>>): Prisma__sueloPlantaClient<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SueloPlantas.
     * @param {sueloPlantaCreateManyArgs} args - Arguments to create many SueloPlantas.
     * @example
     * // Create many SueloPlantas
     * const sueloPlanta = await prisma.sueloPlanta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sueloPlantaCreateManyArgs>(args?: SelectSubset<T, sueloPlantaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SueloPlantas and returns the data saved in the database.
     * @param {sueloPlantaCreateManyAndReturnArgs} args - Arguments to create many SueloPlantas.
     * @example
     * // Create many SueloPlantas
     * const sueloPlanta = await prisma.sueloPlanta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SueloPlantas and only return the `id`
     * const sueloPlantaWithIdOnly = await prisma.sueloPlanta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sueloPlantaCreateManyAndReturnArgs>(args?: SelectSubset<T, sueloPlantaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SueloPlanta.
     * @param {sueloPlantaDeleteArgs} args - Arguments to delete one SueloPlanta.
     * @example
     * // Delete one SueloPlanta
     * const SueloPlanta = await prisma.sueloPlanta.delete({
     *   where: {
     *     // ... filter to delete one SueloPlanta
     *   }
     * })
     * 
     */
    delete<T extends sueloPlantaDeleteArgs>(args: SelectSubset<T, sueloPlantaDeleteArgs<ExtArgs>>): Prisma__sueloPlantaClient<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SueloPlanta.
     * @param {sueloPlantaUpdateArgs} args - Arguments to update one SueloPlanta.
     * @example
     * // Update one SueloPlanta
     * const sueloPlanta = await prisma.sueloPlanta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sueloPlantaUpdateArgs>(args: SelectSubset<T, sueloPlantaUpdateArgs<ExtArgs>>): Prisma__sueloPlantaClient<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SueloPlantas.
     * @param {sueloPlantaDeleteManyArgs} args - Arguments to filter SueloPlantas to delete.
     * @example
     * // Delete a few SueloPlantas
     * const { count } = await prisma.sueloPlanta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sueloPlantaDeleteManyArgs>(args?: SelectSubset<T, sueloPlantaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SueloPlantas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sueloPlantaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SueloPlantas
     * const sueloPlanta = await prisma.sueloPlanta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sueloPlantaUpdateManyArgs>(args: SelectSubset<T, sueloPlantaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SueloPlantas and returns the data updated in the database.
     * @param {sueloPlantaUpdateManyAndReturnArgs} args - Arguments to update many SueloPlantas.
     * @example
     * // Update many SueloPlantas
     * const sueloPlanta = await prisma.sueloPlanta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SueloPlantas and only return the `id`
     * const sueloPlantaWithIdOnly = await prisma.sueloPlanta.updateManyAndReturn({
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
    updateManyAndReturn<T extends sueloPlantaUpdateManyAndReturnArgs>(args: SelectSubset<T, sueloPlantaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SueloPlanta.
     * @param {sueloPlantaUpsertArgs} args - Arguments to update or create a SueloPlanta.
     * @example
     * // Update or create a SueloPlanta
     * const sueloPlanta = await prisma.sueloPlanta.upsert({
     *   create: {
     *     // ... data to create a SueloPlanta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SueloPlanta we want to update
     *   }
     * })
     */
    upsert<T extends sueloPlantaUpsertArgs>(args: SelectSubset<T, sueloPlantaUpsertArgs<ExtArgs>>): Prisma__sueloPlantaClient<$Result.GetResult<Prisma.$sueloPlantaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SueloPlantas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sueloPlantaCountArgs} args - Arguments to filter SueloPlantas to count.
     * @example
     * // Count the number of SueloPlantas
     * const count = await prisma.sueloPlanta.count({
     *   where: {
     *     // ... the filter for the SueloPlantas we want to count
     *   }
     * })
    **/
    count<T extends sueloPlantaCountArgs>(
      args?: Subset<T, sueloPlantaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SueloPlantaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SueloPlanta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SueloPlantaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SueloPlantaAggregateArgs>(args: Subset<T, SueloPlantaAggregateArgs>): Prisma.PrismaPromise<GetSueloPlantaAggregateType<T>>

    /**
     * Group by SueloPlanta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sueloPlantaGroupByArgs} args - Group by arguments.
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
      T extends sueloPlantaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sueloPlantaGroupByArgs['orderBy'] }
        : { orderBy?: sueloPlantaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sueloPlantaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSueloPlantaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sueloPlanta model
   */
  readonly fields: sueloPlantaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sueloPlanta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sueloPlantaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planta<T extends PlantaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantaDefaultArgs<ExtArgs>>): Prisma__PlantaClient<$Result.GetResult<Prisma.$PlantaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    suelo<T extends SueloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SueloDefaultArgs<ExtArgs>>): Prisma__SueloClient<$Result.GetResult<Prisma.$SueloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sueloPlanta model
   */
  interface sueloPlantaFieldRefs {
    readonly id: FieldRef<"sueloPlanta", 'String'>
    readonly compatibilidad: FieldRef<"sueloPlanta", 'String'>
    readonly plantaId: FieldRef<"sueloPlanta", 'String'>
    readonly sueloId: FieldRef<"sueloPlanta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sueloPlanta findUnique
   */
  export type sueloPlantaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
    /**
     * Filter, which sueloPlanta to fetch.
     */
    where: sueloPlantaWhereUniqueInput
  }

  /**
   * sueloPlanta findUniqueOrThrow
   */
  export type sueloPlantaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
    /**
     * Filter, which sueloPlanta to fetch.
     */
    where: sueloPlantaWhereUniqueInput
  }

  /**
   * sueloPlanta findFirst
   */
  export type sueloPlantaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
    /**
     * Filter, which sueloPlanta to fetch.
     */
    where?: sueloPlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sueloPlantas to fetch.
     */
    orderBy?: sueloPlantaOrderByWithRelationInput | sueloPlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sueloPlantas.
     */
    cursor?: sueloPlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sueloPlantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sueloPlantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sueloPlantas.
     */
    distinct?: SueloPlantaScalarFieldEnum | SueloPlantaScalarFieldEnum[]
  }

  /**
   * sueloPlanta findFirstOrThrow
   */
  export type sueloPlantaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
    /**
     * Filter, which sueloPlanta to fetch.
     */
    where?: sueloPlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sueloPlantas to fetch.
     */
    orderBy?: sueloPlantaOrderByWithRelationInput | sueloPlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sueloPlantas.
     */
    cursor?: sueloPlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sueloPlantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sueloPlantas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sueloPlantas.
     */
    distinct?: SueloPlantaScalarFieldEnum | SueloPlantaScalarFieldEnum[]
  }

  /**
   * sueloPlanta findMany
   */
  export type sueloPlantaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
    /**
     * Filter, which sueloPlantas to fetch.
     */
    where?: sueloPlantaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sueloPlantas to fetch.
     */
    orderBy?: sueloPlantaOrderByWithRelationInput | sueloPlantaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sueloPlantas.
     */
    cursor?: sueloPlantaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sueloPlantas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sueloPlantas.
     */
    skip?: number
    distinct?: SueloPlantaScalarFieldEnum | SueloPlantaScalarFieldEnum[]
  }

  /**
   * sueloPlanta create
   */
  export type sueloPlantaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
    /**
     * The data needed to create a sueloPlanta.
     */
    data: XOR<sueloPlantaCreateInput, sueloPlantaUncheckedCreateInput>
  }

  /**
   * sueloPlanta createMany
   */
  export type sueloPlantaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sueloPlantas.
     */
    data: sueloPlantaCreateManyInput | sueloPlantaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sueloPlanta createManyAndReturn
   */
  export type sueloPlantaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * The data used to create many sueloPlantas.
     */
    data: sueloPlantaCreateManyInput | sueloPlantaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sueloPlanta update
   */
  export type sueloPlantaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
    /**
     * The data needed to update a sueloPlanta.
     */
    data: XOR<sueloPlantaUpdateInput, sueloPlantaUncheckedUpdateInput>
    /**
     * Choose, which sueloPlanta to update.
     */
    where: sueloPlantaWhereUniqueInput
  }

  /**
   * sueloPlanta updateMany
   */
  export type sueloPlantaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sueloPlantas.
     */
    data: XOR<sueloPlantaUpdateManyMutationInput, sueloPlantaUncheckedUpdateManyInput>
    /**
     * Filter which sueloPlantas to update
     */
    where?: sueloPlantaWhereInput
    /**
     * Limit how many sueloPlantas to update.
     */
    limit?: number
  }

  /**
   * sueloPlanta updateManyAndReturn
   */
  export type sueloPlantaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * The data used to update sueloPlantas.
     */
    data: XOR<sueloPlantaUpdateManyMutationInput, sueloPlantaUncheckedUpdateManyInput>
    /**
     * Filter which sueloPlantas to update
     */
    where?: sueloPlantaWhereInput
    /**
     * Limit how many sueloPlantas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sueloPlanta upsert
   */
  export type sueloPlantaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
    /**
     * The filter to search for the sueloPlanta to update in case it exists.
     */
    where: sueloPlantaWhereUniqueInput
    /**
     * In case the sueloPlanta found by the `where` argument doesn't exist, create a new sueloPlanta with this data.
     */
    create: XOR<sueloPlantaCreateInput, sueloPlantaUncheckedCreateInput>
    /**
     * In case the sueloPlanta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sueloPlantaUpdateInput, sueloPlantaUncheckedUpdateInput>
  }

  /**
   * sueloPlanta delete
   */
  export type sueloPlantaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
    /**
     * Filter which sueloPlanta to delete.
     */
    where: sueloPlantaWhereUniqueInput
  }

  /**
   * sueloPlanta deleteMany
   */
  export type sueloPlantaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sueloPlantas to delete
     */
    where?: sueloPlantaWhereInput
    /**
     * Limit how many sueloPlantas to delete.
     */
    limit?: number
  }

  /**
   * sueloPlanta without action
   */
  export type sueloPlantaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sueloPlanta
     */
    select?: sueloPlantaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sueloPlanta
     */
    omit?: sueloPlantaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sueloPlantaInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    tipo: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
    cuartelId: string | null
    creadoPor: string | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    tipo: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
    cuartelId: string | null
    creadoPor: string | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    tipo: number
    descripcion: number
    createdAt: number
    updatedAt: number
    cuartelId: number
    creadoPor: number
    _all: number
  }


  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    cuartelId?: true
    creadoPor?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    cuartelId?: true
    creadoPor?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    cuartelId?: true
    creadoPor?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: string
    nombre: string
    tipo: string
    descripcion: string
    createdAt: Date
    updatedAt: Date
    cuartelId: string
    creadoPor: string
    _count: ProductoCountAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cuartelId?: boolean
    creadoPor?: boolean
    tarea?: boolean | Producto$tareaArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cuartelId?: boolean
    creadoPor?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cuartelId?: boolean
    creadoPor?: boolean
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cuartelId?: boolean
    creadoPor?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "tipo" | "descripcion" | "createdAt" | "updatedAt" | "cuartelId" | "creadoPor", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarea?: boolean | Producto$tareaArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      tarea: Prisma.$TareaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      tipo: string
      descripcion: string
      createdAt: Date
      updatedAt: Date
      cuartelId: string
      creadoPor: string
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
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
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tarea<T extends Producto$tareaArgs<ExtArgs> = {}>(args?: Subset<T, Producto$tareaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'String'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly tipo: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly createdAt: FieldRef<"Producto", 'DateTime'>
    readonly updatedAt: FieldRef<"Producto", 'DateTime'>
    readonly cuartelId: FieldRef<"Producto", 'String'>
    readonly creadoPor: FieldRef<"Producto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.tarea
   */
  export type Producto$tareaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    where?: TareaWhereInput
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    cursor?: TareaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Tarea
   */

  export type AggregateTarea = {
    _count: TareaCountAggregateOutputType | null
    _min: TareaMinAggregateOutputType | null
    _max: TareaMaxAggregateOutputType | null
  }

  export type TareaMinAggregateOutputType = {
    id: string | null
    tipo: string | null
    descripcion: string | null
    fecha: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    cuartelId: string | null
    productoId: string | null
  }

  export type TareaMaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    descripcion: string | null
    fecha: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    cuartelId: string | null
    productoId: string | null
  }

  export type TareaCountAggregateOutputType = {
    id: number
    tipo: number
    descripcion: number
    fecha: number
    createdAt: number
    updatedAt: number
    cuartelId: number
    productoId: number
    _all: number
  }


  export type TareaMinAggregateInputType = {
    id?: true
    tipo?: true
    descripcion?: true
    fecha?: true
    createdAt?: true
    updatedAt?: true
    cuartelId?: true
    productoId?: true
  }

  export type TareaMaxAggregateInputType = {
    id?: true
    tipo?: true
    descripcion?: true
    fecha?: true
    createdAt?: true
    updatedAt?: true
    cuartelId?: true
    productoId?: true
  }

  export type TareaCountAggregateInputType = {
    id?: true
    tipo?: true
    descripcion?: true
    fecha?: true
    createdAt?: true
    updatedAt?: true
    cuartelId?: true
    productoId?: true
    _all?: true
  }

  export type TareaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarea to aggregate.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tareas
    **/
    _count?: true | TareaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TareaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TareaMaxAggregateInputType
  }

  export type GetTareaAggregateType<T extends TareaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarea[P]>
      : GetScalarType<T[P], AggregateTarea[P]>
  }




  export type TareaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TareaWhereInput
    orderBy?: TareaOrderByWithAggregationInput | TareaOrderByWithAggregationInput[]
    by: TareaScalarFieldEnum[] | TareaScalarFieldEnum
    having?: TareaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TareaCountAggregateInputType | true
    _min?: TareaMinAggregateInputType
    _max?: TareaMaxAggregateInputType
  }

  export type TareaGroupByOutputType = {
    id: string
    tipo: string
    descripcion: string
    fecha: Date
    createdAt: Date
    updatedAt: Date
    cuartelId: string
    productoId: string
    _count: TareaCountAggregateOutputType | null
    _min: TareaMinAggregateOutputType | null
    _max: TareaMaxAggregateOutputType | null
  }

  type GetTareaGroupByPayload<T extends TareaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TareaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TareaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TareaGroupByOutputType[P]>
            : GetScalarType<T[P], TareaGroupByOutputType[P]>
        }
      >
    >


  export type TareaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cuartelId?: boolean
    productoId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    cuartel?: boolean | cuartelDefaultArgs<ExtArgs>
    ordenAplicacion?: boolean | Tarea$ordenAplicacionArgs<ExtArgs>
    _count?: boolean | TareaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarea"]>

  export type TareaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cuartelId?: boolean
    productoId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    cuartel?: boolean | cuartelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarea"]>

  export type TareaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cuartelId?: boolean
    productoId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    cuartel?: boolean | cuartelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarea"]>

  export type TareaSelectScalar = {
    id?: boolean
    tipo?: boolean
    descripcion?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cuartelId?: boolean
    productoId?: boolean
  }

  export type TareaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "descripcion" | "fecha" | "createdAt" | "updatedAt" | "cuartelId" | "productoId", ExtArgs["result"]["tarea"]>
  export type TareaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    cuartel?: boolean | cuartelDefaultArgs<ExtArgs>
    ordenAplicacion?: boolean | Tarea$ordenAplicacionArgs<ExtArgs>
    _count?: boolean | TareaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TareaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    cuartel?: boolean | cuartelDefaultArgs<ExtArgs>
  }
  export type TareaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    cuartel?: boolean | cuartelDefaultArgs<ExtArgs>
  }

  export type $TareaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tarea"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
      cuartel: Prisma.$cuartelPayload<ExtArgs>
      ordenAplicacion: Prisma.$OrdenAplicacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      descripcion: string
      fecha: Date
      createdAt: Date
      updatedAt: Date
      cuartelId: string
      productoId: string
    }, ExtArgs["result"]["tarea"]>
    composites: {}
  }

  type TareaGetPayload<S extends boolean | null | undefined | TareaDefaultArgs> = $Result.GetResult<Prisma.$TareaPayload, S>

  type TareaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TareaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TareaCountAggregateInputType | true
    }

  export interface TareaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tarea'], meta: { name: 'Tarea' } }
    /**
     * Find zero or one Tarea that matches the filter.
     * @param {TareaFindUniqueArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TareaFindUniqueArgs>(args: SelectSubset<T, TareaFindUniqueArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tarea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TareaFindUniqueOrThrowArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TareaFindUniqueOrThrowArgs>(args: SelectSubset<T, TareaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaFindFirstArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TareaFindFirstArgs>(args?: SelectSubset<T, TareaFindFirstArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaFindFirstOrThrowArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TareaFindFirstOrThrowArgs>(args?: SelectSubset<T, TareaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tareas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tareas
     * const tareas = await prisma.tarea.findMany()
     * 
     * // Get first 10 Tareas
     * const tareas = await prisma.tarea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tareaWithIdOnly = await prisma.tarea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TareaFindManyArgs>(args?: SelectSubset<T, TareaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tarea.
     * @param {TareaCreateArgs} args - Arguments to create a Tarea.
     * @example
     * // Create one Tarea
     * const Tarea = await prisma.tarea.create({
     *   data: {
     *     // ... data to create a Tarea
     *   }
     * })
     * 
     */
    create<T extends TareaCreateArgs>(args: SelectSubset<T, TareaCreateArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tareas.
     * @param {TareaCreateManyArgs} args - Arguments to create many Tareas.
     * @example
     * // Create many Tareas
     * const tarea = await prisma.tarea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TareaCreateManyArgs>(args?: SelectSubset<T, TareaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tareas and returns the data saved in the database.
     * @param {TareaCreateManyAndReturnArgs} args - Arguments to create many Tareas.
     * @example
     * // Create many Tareas
     * const tarea = await prisma.tarea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tareas and only return the `id`
     * const tareaWithIdOnly = await prisma.tarea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TareaCreateManyAndReturnArgs>(args?: SelectSubset<T, TareaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tarea.
     * @param {TareaDeleteArgs} args - Arguments to delete one Tarea.
     * @example
     * // Delete one Tarea
     * const Tarea = await prisma.tarea.delete({
     *   where: {
     *     // ... filter to delete one Tarea
     *   }
     * })
     * 
     */
    delete<T extends TareaDeleteArgs>(args: SelectSubset<T, TareaDeleteArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tarea.
     * @param {TareaUpdateArgs} args - Arguments to update one Tarea.
     * @example
     * // Update one Tarea
     * const tarea = await prisma.tarea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TareaUpdateArgs>(args: SelectSubset<T, TareaUpdateArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tareas.
     * @param {TareaDeleteManyArgs} args - Arguments to filter Tareas to delete.
     * @example
     * // Delete a few Tareas
     * const { count } = await prisma.tarea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TareaDeleteManyArgs>(args?: SelectSubset<T, TareaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tareas
     * const tarea = await prisma.tarea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TareaUpdateManyArgs>(args: SelectSubset<T, TareaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tareas and returns the data updated in the database.
     * @param {TareaUpdateManyAndReturnArgs} args - Arguments to update many Tareas.
     * @example
     * // Update many Tareas
     * const tarea = await prisma.tarea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tareas and only return the `id`
     * const tareaWithIdOnly = await prisma.tarea.updateManyAndReturn({
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
    updateManyAndReturn<T extends TareaUpdateManyAndReturnArgs>(args: SelectSubset<T, TareaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tarea.
     * @param {TareaUpsertArgs} args - Arguments to update or create a Tarea.
     * @example
     * // Update or create a Tarea
     * const tarea = await prisma.tarea.upsert({
     *   create: {
     *     // ... data to create a Tarea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tarea we want to update
     *   }
     * })
     */
    upsert<T extends TareaUpsertArgs>(args: SelectSubset<T, TareaUpsertArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaCountArgs} args - Arguments to filter Tareas to count.
     * @example
     * // Count the number of Tareas
     * const count = await prisma.tarea.count({
     *   where: {
     *     // ... the filter for the Tareas we want to count
     *   }
     * })
    **/
    count<T extends TareaCountArgs>(
      args?: Subset<T, TareaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TareaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tarea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TareaAggregateArgs>(args: Subset<T, TareaAggregateArgs>): Prisma.PrismaPromise<GetTareaAggregateType<T>>

    /**
     * Group by Tarea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaGroupByArgs} args - Group by arguments.
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
      T extends TareaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TareaGroupByArgs['orderBy'] }
        : { orderBy?: TareaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TareaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTareaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tarea model
   */
  readonly fields: TareaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tarea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TareaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cuartel<T extends cuartelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cuartelDefaultArgs<ExtArgs>>): Prisma__cuartelClient<$Result.GetResult<Prisma.$cuartelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ordenAplicacion<T extends Tarea$ordenAplicacionArgs<ExtArgs> = {}>(args?: Subset<T, Tarea$ordenAplicacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tarea model
   */
  interface TareaFieldRefs {
    readonly id: FieldRef<"Tarea", 'String'>
    readonly tipo: FieldRef<"Tarea", 'String'>
    readonly descripcion: FieldRef<"Tarea", 'String'>
    readonly fecha: FieldRef<"Tarea", 'DateTime'>
    readonly createdAt: FieldRef<"Tarea", 'DateTime'>
    readonly updatedAt: FieldRef<"Tarea", 'DateTime'>
    readonly cuartelId: FieldRef<"Tarea", 'String'>
    readonly productoId: FieldRef<"Tarea", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tarea findUnique
   */
  export type TareaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea findUniqueOrThrow
   */
  export type TareaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea findFirst
   */
  export type TareaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tareas.
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tareas.
     */
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Tarea findFirstOrThrow
   */
  export type TareaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tareas.
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tareas.
     */
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Tarea findMany
   */
  export type TareaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tareas to fetch.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tareas.
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Tarea create
   */
  export type TareaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tarea.
     */
    data: XOR<TareaCreateInput, TareaUncheckedCreateInput>
  }

  /**
   * Tarea createMany
   */
  export type TareaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tareas.
     */
    data: TareaCreateManyInput | TareaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tarea createManyAndReturn
   */
  export type TareaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * The data used to create many Tareas.
     */
    data: TareaCreateManyInput | TareaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarea update
   */
  export type TareaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tarea.
     */
    data: XOR<TareaUpdateInput, TareaUncheckedUpdateInput>
    /**
     * Choose, which Tarea to update.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea updateMany
   */
  export type TareaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tareas.
     */
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyInput>
    /**
     * Filter which Tareas to update
     */
    where?: TareaWhereInput
    /**
     * Limit how many Tareas to update.
     */
    limit?: number
  }

  /**
   * Tarea updateManyAndReturn
   */
  export type TareaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * The data used to update Tareas.
     */
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyInput>
    /**
     * Filter which Tareas to update
     */
    where?: TareaWhereInput
    /**
     * Limit how many Tareas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarea upsert
   */
  export type TareaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tarea to update in case it exists.
     */
    where: TareaWhereUniqueInput
    /**
     * In case the Tarea found by the `where` argument doesn't exist, create a new Tarea with this data.
     */
    create: XOR<TareaCreateInput, TareaUncheckedCreateInput>
    /**
     * In case the Tarea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TareaUpdateInput, TareaUncheckedUpdateInput>
  }

  /**
   * Tarea delete
   */
  export type TareaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter which Tarea to delete.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea deleteMany
   */
  export type TareaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tareas to delete
     */
    where?: TareaWhereInput
    /**
     * Limit how many Tareas to delete.
     */
    limit?: number
  }

  /**
   * Tarea.ordenAplicacion
   */
  export type Tarea$ordenAplicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionInclude<ExtArgs> | null
    where?: OrdenAplicacionWhereInput
    orderBy?: OrdenAplicacionOrderByWithRelationInput | OrdenAplicacionOrderByWithRelationInput[]
    cursor?: OrdenAplicacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenAplicacionScalarFieldEnum | OrdenAplicacionScalarFieldEnum[]
  }

  /**
   * Tarea without action
   */
  export type TareaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
  }


  /**
   * Model OrdenAplicacion
   */

  export type AggregateOrdenAplicacion = {
    _count: OrdenAplicacionCountAggregateOutputType | null
    _avg: OrdenAplicacionAvgAggregateOutputType | null
    _sum: OrdenAplicacionSumAggregateOutputType | null
    _min: OrdenAplicacionMinAggregateOutputType | null
    _max: OrdenAplicacionMaxAggregateOutputType | null
  }

  export type OrdenAplicacionAvgAggregateOutputType = {
    dosis: number | null
    cantidadApli: number | null
    numMaquinadas: number | null
    gastoTotal: number | null
  }

  export type OrdenAplicacionSumAggregateOutputType = {
    dosis: number | null
    cantidadApli: number | null
    numMaquinadas: number | null
    gastoTotal: number | null
  }

  export type OrdenAplicacionMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    fechaEntrega: Date | null
    fechaAplicacion: Date | null
    dosis: number | null
    cantidadApli: number | null
    objetivo: string | null
    mojamientoRecomendado: string | null
    mojamientoReal: string | null
    numMaquinadas: number | null
    gastoTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tareaId: string | null
  }

  export type OrdenAplicacionMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    fechaEntrega: Date | null
    fechaAplicacion: Date | null
    dosis: number | null
    cantidadApli: number | null
    objetivo: string | null
    mojamientoRecomendado: string | null
    mojamientoReal: string | null
    numMaquinadas: number | null
    gastoTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tareaId: string | null
  }

  export type OrdenAplicacionCountAggregateOutputType = {
    id: number
    nombre: number
    fechaEntrega: number
    fechaAplicacion: number
    dosis: number
    cantidadApli: number
    objetivo: number
    mojamientoRecomendado: number
    mojamientoReal: number
    numMaquinadas: number
    gastoTotal: number
    createdAt: number
    updatedAt: number
    tareaId: number
    _all: number
  }


  export type OrdenAplicacionAvgAggregateInputType = {
    dosis?: true
    cantidadApli?: true
    numMaquinadas?: true
    gastoTotal?: true
  }

  export type OrdenAplicacionSumAggregateInputType = {
    dosis?: true
    cantidadApli?: true
    numMaquinadas?: true
    gastoTotal?: true
  }

  export type OrdenAplicacionMinAggregateInputType = {
    id?: true
    nombre?: true
    fechaEntrega?: true
    fechaAplicacion?: true
    dosis?: true
    cantidadApli?: true
    objetivo?: true
    mojamientoRecomendado?: true
    mojamientoReal?: true
    numMaquinadas?: true
    gastoTotal?: true
    createdAt?: true
    updatedAt?: true
    tareaId?: true
  }

  export type OrdenAplicacionMaxAggregateInputType = {
    id?: true
    nombre?: true
    fechaEntrega?: true
    fechaAplicacion?: true
    dosis?: true
    cantidadApli?: true
    objetivo?: true
    mojamientoRecomendado?: true
    mojamientoReal?: true
    numMaquinadas?: true
    gastoTotal?: true
    createdAt?: true
    updatedAt?: true
    tareaId?: true
  }

  export type OrdenAplicacionCountAggregateInputType = {
    id?: true
    nombre?: true
    fechaEntrega?: true
    fechaAplicacion?: true
    dosis?: true
    cantidadApli?: true
    objetivo?: true
    mojamientoRecomendado?: true
    mojamientoReal?: true
    numMaquinadas?: true
    gastoTotal?: true
    createdAt?: true
    updatedAt?: true
    tareaId?: true
    _all?: true
  }

  export type OrdenAplicacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenAplicacion to aggregate.
     */
    where?: OrdenAplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenAplicacions to fetch.
     */
    orderBy?: OrdenAplicacionOrderByWithRelationInput | OrdenAplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenAplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenAplicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenAplicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrdenAplicacions
    **/
    _count?: true | OrdenAplicacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenAplicacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenAplicacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenAplicacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenAplicacionMaxAggregateInputType
  }

  export type GetOrdenAplicacionAggregateType<T extends OrdenAplicacionAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdenAplicacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdenAplicacion[P]>
      : GetScalarType<T[P], AggregateOrdenAplicacion[P]>
  }




  export type OrdenAplicacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenAplicacionWhereInput
    orderBy?: OrdenAplicacionOrderByWithAggregationInput | OrdenAplicacionOrderByWithAggregationInput[]
    by: OrdenAplicacionScalarFieldEnum[] | OrdenAplicacionScalarFieldEnum
    having?: OrdenAplicacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenAplicacionCountAggregateInputType | true
    _avg?: OrdenAplicacionAvgAggregateInputType
    _sum?: OrdenAplicacionSumAggregateInputType
    _min?: OrdenAplicacionMinAggregateInputType
    _max?: OrdenAplicacionMaxAggregateInputType
  }

  export type OrdenAplicacionGroupByOutputType = {
    id: string
    nombre: string
    fechaEntrega: Date
    fechaAplicacion: Date
    dosis: number
    cantidadApli: number
    objetivo: string
    mojamientoRecomendado: string
    mojamientoReal: string
    numMaquinadas: number
    gastoTotal: number
    createdAt: Date
    updatedAt: Date
    tareaId: string
    _count: OrdenAplicacionCountAggregateOutputType | null
    _avg: OrdenAplicacionAvgAggregateOutputType | null
    _sum: OrdenAplicacionSumAggregateOutputType | null
    _min: OrdenAplicacionMinAggregateOutputType | null
    _max: OrdenAplicacionMaxAggregateOutputType | null
  }

  type GetOrdenAplicacionGroupByPayload<T extends OrdenAplicacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenAplicacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenAplicacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenAplicacionGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenAplicacionGroupByOutputType[P]>
        }
      >
    >


  export type OrdenAplicacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fechaEntrega?: boolean
    fechaAplicacion?: boolean
    dosis?: boolean
    cantidadApli?: boolean
    objetivo?: boolean
    mojamientoRecomendado?: boolean
    mojamientoReal?: boolean
    numMaquinadas?: boolean
    gastoTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tareaId?: boolean
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenAplicacion"]>

  export type OrdenAplicacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fechaEntrega?: boolean
    fechaAplicacion?: boolean
    dosis?: boolean
    cantidadApli?: boolean
    objetivo?: boolean
    mojamientoRecomendado?: boolean
    mojamientoReal?: boolean
    numMaquinadas?: boolean
    gastoTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tareaId?: boolean
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenAplicacion"]>

  export type OrdenAplicacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fechaEntrega?: boolean
    fechaAplicacion?: boolean
    dosis?: boolean
    cantidadApli?: boolean
    objetivo?: boolean
    mojamientoRecomendado?: boolean
    mojamientoReal?: boolean
    numMaquinadas?: boolean
    gastoTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tareaId?: boolean
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenAplicacion"]>

  export type OrdenAplicacionSelectScalar = {
    id?: boolean
    nombre?: boolean
    fechaEntrega?: boolean
    fechaAplicacion?: boolean
    dosis?: boolean
    cantidadApli?: boolean
    objetivo?: boolean
    mojamientoRecomendado?: boolean
    mojamientoReal?: boolean
    numMaquinadas?: boolean
    gastoTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tareaId?: boolean
  }

  export type OrdenAplicacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "fechaEntrega" | "fechaAplicacion" | "dosis" | "cantidadApli" | "objetivo" | "mojamientoRecomendado" | "mojamientoReal" | "numMaquinadas" | "gastoTotal" | "createdAt" | "updatedAt" | "tareaId", ExtArgs["result"]["ordenAplicacion"]>
  export type OrdenAplicacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }
  export type OrdenAplicacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }
  export type OrdenAplicacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }

  export type $OrdenAplicacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrdenAplicacion"
    objects: {
      tarea: Prisma.$TareaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      fechaEntrega: Date
      fechaAplicacion: Date
      dosis: number
      cantidadApli: number
      objetivo: string
      mojamientoRecomendado: string
      mojamientoReal: string
      numMaquinadas: number
      gastoTotal: number
      createdAt: Date
      updatedAt: Date
      tareaId: string
    }, ExtArgs["result"]["ordenAplicacion"]>
    composites: {}
  }

  type OrdenAplicacionGetPayload<S extends boolean | null | undefined | OrdenAplicacionDefaultArgs> = $Result.GetResult<Prisma.$OrdenAplicacionPayload, S>

  type OrdenAplicacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenAplicacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenAplicacionCountAggregateInputType | true
    }

  export interface OrdenAplicacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrdenAplicacion'], meta: { name: 'OrdenAplicacion' } }
    /**
     * Find zero or one OrdenAplicacion that matches the filter.
     * @param {OrdenAplicacionFindUniqueArgs} args - Arguments to find a OrdenAplicacion
     * @example
     * // Get one OrdenAplicacion
     * const ordenAplicacion = await prisma.ordenAplicacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenAplicacionFindUniqueArgs>(args: SelectSubset<T, OrdenAplicacionFindUniqueArgs<ExtArgs>>): Prisma__OrdenAplicacionClient<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrdenAplicacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenAplicacionFindUniqueOrThrowArgs} args - Arguments to find a OrdenAplicacion
     * @example
     * // Get one OrdenAplicacion
     * const ordenAplicacion = await prisma.ordenAplicacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenAplicacionFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenAplicacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenAplicacionClient<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenAplicacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAplicacionFindFirstArgs} args - Arguments to find a OrdenAplicacion
     * @example
     * // Get one OrdenAplicacion
     * const ordenAplicacion = await prisma.ordenAplicacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenAplicacionFindFirstArgs>(args?: SelectSubset<T, OrdenAplicacionFindFirstArgs<ExtArgs>>): Prisma__OrdenAplicacionClient<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenAplicacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAplicacionFindFirstOrThrowArgs} args - Arguments to find a OrdenAplicacion
     * @example
     * // Get one OrdenAplicacion
     * const ordenAplicacion = await prisma.ordenAplicacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenAplicacionFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenAplicacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenAplicacionClient<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrdenAplicacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAplicacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdenAplicacions
     * const ordenAplicacions = await prisma.ordenAplicacion.findMany()
     * 
     * // Get first 10 OrdenAplicacions
     * const ordenAplicacions = await prisma.ordenAplicacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordenAplicacionWithIdOnly = await prisma.ordenAplicacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdenAplicacionFindManyArgs>(args?: SelectSubset<T, OrdenAplicacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrdenAplicacion.
     * @param {OrdenAplicacionCreateArgs} args - Arguments to create a OrdenAplicacion.
     * @example
     * // Create one OrdenAplicacion
     * const OrdenAplicacion = await prisma.ordenAplicacion.create({
     *   data: {
     *     // ... data to create a OrdenAplicacion
     *   }
     * })
     * 
     */
    create<T extends OrdenAplicacionCreateArgs>(args: SelectSubset<T, OrdenAplicacionCreateArgs<ExtArgs>>): Prisma__OrdenAplicacionClient<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrdenAplicacions.
     * @param {OrdenAplicacionCreateManyArgs} args - Arguments to create many OrdenAplicacions.
     * @example
     * // Create many OrdenAplicacions
     * const ordenAplicacion = await prisma.ordenAplicacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenAplicacionCreateManyArgs>(args?: SelectSubset<T, OrdenAplicacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrdenAplicacions and returns the data saved in the database.
     * @param {OrdenAplicacionCreateManyAndReturnArgs} args - Arguments to create many OrdenAplicacions.
     * @example
     * // Create many OrdenAplicacions
     * const ordenAplicacion = await prisma.ordenAplicacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrdenAplicacions and only return the `id`
     * const ordenAplicacionWithIdOnly = await prisma.ordenAplicacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdenAplicacionCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdenAplicacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrdenAplicacion.
     * @param {OrdenAplicacionDeleteArgs} args - Arguments to delete one OrdenAplicacion.
     * @example
     * // Delete one OrdenAplicacion
     * const OrdenAplicacion = await prisma.ordenAplicacion.delete({
     *   where: {
     *     // ... filter to delete one OrdenAplicacion
     *   }
     * })
     * 
     */
    delete<T extends OrdenAplicacionDeleteArgs>(args: SelectSubset<T, OrdenAplicacionDeleteArgs<ExtArgs>>): Prisma__OrdenAplicacionClient<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrdenAplicacion.
     * @param {OrdenAplicacionUpdateArgs} args - Arguments to update one OrdenAplicacion.
     * @example
     * // Update one OrdenAplicacion
     * const ordenAplicacion = await prisma.ordenAplicacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenAplicacionUpdateArgs>(args: SelectSubset<T, OrdenAplicacionUpdateArgs<ExtArgs>>): Prisma__OrdenAplicacionClient<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrdenAplicacions.
     * @param {OrdenAplicacionDeleteManyArgs} args - Arguments to filter OrdenAplicacions to delete.
     * @example
     * // Delete a few OrdenAplicacions
     * const { count } = await prisma.ordenAplicacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenAplicacionDeleteManyArgs>(args?: SelectSubset<T, OrdenAplicacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenAplicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAplicacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdenAplicacions
     * const ordenAplicacion = await prisma.ordenAplicacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenAplicacionUpdateManyArgs>(args: SelectSubset<T, OrdenAplicacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenAplicacions and returns the data updated in the database.
     * @param {OrdenAplicacionUpdateManyAndReturnArgs} args - Arguments to update many OrdenAplicacions.
     * @example
     * // Update many OrdenAplicacions
     * const ordenAplicacion = await prisma.ordenAplicacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrdenAplicacions and only return the `id`
     * const ordenAplicacionWithIdOnly = await prisma.ordenAplicacion.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrdenAplicacionUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdenAplicacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrdenAplicacion.
     * @param {OrdenAplicacionUpsertArgs} args - Arguments to update or create a OrdenAplicacion.
     * @example
     * // Update or create a OrdenAplicacion
     * const ordenAplicacion = await prisma.ordenAplicacion.upsert({
     *   create: {
     *     // ... data to create a OrdenAplicacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdenAplicacion we want to update
     *   }
     * })
     */
    upsert<T extends OrdenAplicacionUpsertArgs>(args: SelectSubset<T, OrdenAplicacionUpsertArgs<ExtArgs>>): Prisma__OrdenAplicacionClient<$Result.GetResult<Prisma.$OrdenAplicacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrdenAplicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAplicacionCountArgs} args - Arguments to filter OrdenAplicacions to count.
     * @example
     * // Count the number of OrdenAplicacions
     * const count = await prisma.ordenAplicacion.count({
     *   where: {
     *     // ... the filter for the OrdenAplicacions we want to count
     *   }
     * })
    **/
    count<T extends OrdenAplicacionCountArgs>(
      args?: Subset<T, OrdenAplicacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenAplicacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrdenAplicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAplicacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdenAplicacionAggregateArgs>(args: Subset<T, OrdenAplicacionAggregateArgs>): Prisma.PrismaPromise<GetOrdenAplicacionAggregateType<T>>

    /**
     * Group by OrdenAplicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAplicacionGroupByArgs} args - Group by arguments.
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
      T extends OrdenAplicacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenAplicacionGroupByArgs['orderBy'] }
        : { orderBy?: OrdenAplicacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdenAplicacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenAplicacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrdenAplicacion model
   */
  readonly fields: OrdenAplicacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrdenAplicacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenAplicacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tarea<T extends TareaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TareaDefaultArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrdenAplicacion model
   */
  interface OrdenAplicacionFieldRefs {
    readonly id: FieldRef<"OrdenAplicacion", 'String'>
    readonly nombre: FieldRef<"OrdenAplicacion", 'String'>
    readonly fechaEntrega: FieldRef<"OrdenAplicacion", 'DateTime'>
    readonly fechaAplicacion: FieldRef<"OrdenAplicacion", 'DateTime'>
    readonly dosis: FieldRef<"OrdenAplicacion", 'Float'>
    readonly cantidadApli: FieldRef<"OrdenAplicacion", 'Float'>
    readonly objetivo: FieldRef<"OrdenAplicacion", 'String'>
    readonly mojamientoRecomendado: FieldRef<"OrdenAplicacion", 'String'>
    readonly mojamientoReal: FieldRef<"OrdenAplicacion", 'String'>
    readonly numMaquinadas: FieldRef<"OrdenAplicacion", 'Int'>
    readonly gastoTotal: FieldRef<"OrdenAplicacion", 'Float'>
    readonly createdAt: FieldRef<"OrdenAplicacion", 'DateTime'>
    readonly updatedAt: FieldRef<"OrdenAplicacion", 'DateTime'>
    readonly tareaId: FieldRef<"OrdenAplicacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrdenAplicacion findUnique
   */
  export type OrdenAplicacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionInclude<ExtArgs> | null
    /**
     * Filter, which OrdenAplicacion to fetch.
     */
    where: OrdenAplicacionWhereUniqueInput
  }

  /**
   * OrdenAplicacion findUniqueOrThrow
   */
  export type OrdenAplicacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionInclude<ExtArgs> | null
    /**
     * Filter, which OrdenAplicacion to fetch.
     */
    where: OrdenAplicacionWhereUniqueInput
  }

  /**
   * OrdenAplicacion findFirst
   */
  export type OrdenAplicacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionInclude<ExtArgs> | null
    /**
     * Filter, which OrdenAplicacion to fetch.
     */
    where?: OrdenAplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenAplicacions to fetch.
     */
    orderBy?: OrdenAplicacionOrderByWithRelationInput | OrdenAplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenAplicacions.
     */
    cursor?: OrdenAplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenAplicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenAplicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenAplicacions.
     */
    distinct?: OrdenAplicacionScalarFieldEnum | OrdenAplicacionScalarFieldEnum[]
  }

  /**
   * OrdenAplicacion findFirstOrThrow
   */
  export type OrdenAplicacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionInclude<ExtArgs> | null
    /**
     * Filter, which OrdenAplicacion to fetch.
     */
    where?: OrdenAplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenAplicacions to fetch.
     */
    orderBy?: OrdenAplicacionOrderByWithRelationInput | OrdenAplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenAplicacions.
     */
    cursor?: OrdenAplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenAplicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenAplicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenAplicacions.
     */
    distinct?: OrdenAplicacionScalarFieldEnum | OrdenAplicacionScalarFieldEnum[]
  }

  /**
   * OrdenAplicacion findMany
   */
  export type OrdenAplicacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionInclude<ExtArgs> | null
    /**
     * Filter, which OrdenAplicacions to fetch.
     */
    where?: OrdenAplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenAplicacions to fetch.
     */
    orderBy?: OrdenAplicacionOrderByWithRelationInput | OrdenAplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrdenAplicacions.
     */
    cursor?: OrdenAplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenAplicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenAplicacions.
     */
    skip?: number
    distinct?: OrdenAplicacionScalarFieldEnum | OrdenAplicacionScalarFieldEnum[]
  }

  /**
   * OrdenAplicacion create
   */
  export type OrdenAplicacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionInclude<ExtArgs> | null
    /**
     * The data needed to create a OrdenAplicacion.
     */
    data: XOR<OrdenAplicacionCreateInput, OrdenAplicacionUncheckedCreateInput>
  }

  /**
   * OrdenAplicacion createMany
   */
  export type OrdenAplicacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdenAplicacions.
     */
    data: OrdenAplicacionCreateManyInput | OrdenAplicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdenAplicacion createManyAndReturn
   */
  export type OrdenAplicacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * The data used to create many OrdenAplicacions.
     */
    data: OrdenAplicacionCreateManyInput | OrdenAplicacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenAplicacion update
   */
  export type OrdenAplicacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionInclude<ExtArgs> | null
    /**
     * The data needed to update a OrdenAplicacion.
     */
    data: XOR<OrdenAplicacionUpdateInput, OrdenAplicacionUncheckedUpdateInput>
    /**
     * Choose, which OrdenAplicacion to update.
     */
    where: OrdenAplicacionWhereUniqueInput
  }

  /**
   * OrdenAplicacion updateMany
   */
  export type OrdenAplicacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdenAplicacions.
     */
    data: XOR<OrdenAplicacionUpdateManyMutationInput, OrdenAplicacionUncheckedUpdateManyInput>
    /**
     * Filter which OrdenAplicacions to update
     */
    where?: OrdenAplicacionWhereInput
    /**
     * Limit how many OrdenAplicacions to update.
     */
    limit?: number
  }

  /**
   * OrdenAplicacion updateManyAndReturn
   */
  export type OrdenAplicacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * The data used to update OrdenAplicacions.
     */
    data: XOR<OrdenAplicacionUpdateManyMutationInput, OrdenAplicacionUncheckedUpdateManyInput>
    /**
     * Filter which OrdenAplicacions to update
     */
    where?: OrdenAplicacionWhereInput
    /**
     * Limit how many OrdenAplicacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenAplicacion upsert
   */
  export type OrdenAplicacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionInclude<ExtArgs> | null
    /**
     * The filter to search for the OrdenAplicacion to update in case it exists.
     */
    where: OrdenAplicacionWhereUniqueInput
    /**
     * In case the OrdenAplicacion found by the `where` argument doesn't exist, create a new OrdenAplicacion with this data.
     */
    create: XOR<OrdenAplicacionCreateInput, OrdenAplicacionUncheckedCreateInput>
    /**
     * In case the OrdenAplicacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenAplicacionUpdateInput, OrdenAplicacionUncheckedUpdateInput>
  }

  /**
   * OrdenAplicacion delete
   */
  export type OrdenAplicacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionInclude<ExtArgs> | null
    /**
     * Filter which OrdenAplicacion to delete.
     */
    where: OrdenAplicacionWhereUniqueInput
  }

  /**
   * OrdenAplicacion deleteMany
   */
  export type OrdenAplicacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenAplicacions to delete
     */
    where?: OrdenAplicacionWhereInput
    /**
     * Limit how many OrdenAplicacions to delete.
     */
    limit?: number
  }

  /**
   * OrdenAplicacion without action
   */
  export type OrdenAplicacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenAplicacion
     */
    select?: OrdenAplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenAplicacion
     */
    omit?: OrdenAplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenAplicacionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    password: 'password',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const FundoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    rut: 'rut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creadoPor: 'creadoPor'
  };

  export type FundoScalarFieldEnum = (typeof FundoScalarFieldEnum)[keyof typeof FundoScalarFieldEnum]


  export const UserFundoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fundoId: 'fundoId',
    assignedAt: 'assignedAt',
    rolId: 'rolId'
  };

  export type UserFundoScalarFieldEnum = (typeof UserFundoScalarFieldEnum)[keyof typeof UserFundoScalarFieldEnum]


  export const TerrenoScalarFieldEnum: {
    id: 'id',
    areaHectareas: 'areaHectareas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creadoPor: 'creadoPor',
    lat: 'lat',
    lon: 'lon',
    codeSagGrower: 'codeSagGrower',
    userFundoId: 'userFundoId'
  };

  export type TerrenoScalarFieldEnum = (typeof TerrenoScalarFieldEnum)[keyof typeof TerrenoScalarFieldEnum]


  export const SueloScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    caracteristicas: 'caracteristicas'
  };

  export type SueloScalarFieldEnum = (typeof SueloScalarFieldEnum)[keyof typeof SueloScalarFieldEnum]


  export const PlantaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    espacioAncho: 'espacioAncho',
    espacioLargo: 'espacioLargo',
    produccion: 'produccion',
    descripcion: 'descripcion',
    variedad: 'variedad',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlantaScalarFieldEnum = (typeof PlantaScalarFieldEnum)[keyof typeof PlantaScalarFieldEnum]


  export const CuartelScalarFieldEnum: {
    id: 'id',
    hectareas: 'hectareas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    terrenoId: 'terrenoId',
    sueloId: 'sueloId',
    plantaId: 'plantaId'
  };

  export type CuartelScalarFieldEnum = (typeof CuartelScalarFieldEnum)[keyof typeof CuartelScalarFieldEnum]


  export const SueloPlantaScalarFieldEnum: {
    id: 'id',
    compatibilidad: 'compatibilidad',
    plantaId: 'plantaId',
    sueloId: 'sueloId'
  };

  export type SueloPlantaScalarFieldEnum = (typeof SueloPlantaScalarFieldEnum)[keyof typeof SueloPlantaScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    tipo: 'tipo',
    descripcion: 'descripcion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    cuartelId: 'cuartelId',
    creadoPor: 'creadoPor'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const TareaScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    descripcion: 'descripcion',
    fecha: 'fecha',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    cuartelId: 'cuartelId',
    productoId: 'productoId'
  };

  export type TareaScalarFieldEnum = (typeof TareaScalarFieldEnum)[keyof typeof TareaScalarFieldEnum]


  export const OrdenAplicacionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    fechaEntrega: 'fechaEntrega',
    fechaAplicacion: 'fechaAplicacion',
    dosis: 'dosis',
    cantidadApli: 'cantidadApli',
    objetivo: 'objetivo',
    mojamientoRecomendado: 'mojamientoRecomendado',
    mojamientoReal: 'mojamientoReal',
    numMaquinadas: 'numMaquinadas',
    gastoTotal: 'gastoTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tareaId: 'tareaId'
  };

  export type OrdenAplicacionScalarFieldEnum = (typeof OrdenAplicacionScalarFieldEnum)[keyof typeof OrdenAplicacionScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nombre?: StringFilter<"User"> | string
    apellido?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userFundos?: UserFundoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userFundos?: UserFundoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nombre?: StringFilter<"User"> | string
    apellido?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userFundos?: UserFundoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nombre?: StringWithAggregatesFilter<"User"> | string
    apellido?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: StringFilter<"Rol"> | string
    nombre?: StringFilter<"Rol"> | string
    descripcion?: StringNullableFilter<"Rol"> | string | null
    userFundos?: UserFundoListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    userFundos?: UserFundoOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    descripcion?: StringNullableFilter<"Rol"> | string | null
    userFundos?: UserFundoListRelationFilter
  }, "id" | "nombre">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: RolCountOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rol"> | string
    nombre?: StringWithAggregatesFilter<"Rol"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Rol"> | string | null
  }

  export type FundoWhereInput = {
    AND?: FundoWhereInput | FundoWhereInput[]
    OR?: FundoWhereInput[]
    NOT?: FundoWhereInput | FundoWhereInput[]
    id?: StringFilter<"Fundo"> | string
    nombre?: StringFilter<"Fundo"> | string
    direccion?: StringFilter<"Fundo"> | string
    rut?: StringFilter<"Fundo"> | string
    createdAt?: DateTimeFilter<"Fundo"> | Date | string
    updatedAt?: DateTimeFilter<"Fundo"> | Date | string
    creadoPor?: StringFilter<"Fundo"> | string
    userFundos?: UserFundoListRelationFilter
  }

  export type FundoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    rut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creadoPor?: SortOrder
    userFundos?: UserFundoOrderByRelationAggregateInput
  }

  export type FundoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rut?: string
    AND?: FundoWhereInput | FundoWhereInput[]
    OR?: FundoWhereInput[]
    NOT?: FundoWhereInput | FundoWhereInput[]
    nombre?: StringFilter<"Fundo"> | string
    direccion?: StringFilter<"Fundo"> | string
    createdAt?: DateTimeFilter<"Fundo"> | Date | string
    updatedAt?: DateTimeFilter<"Fundo"> | Date | string
    creadoPor?: StringFilter<"Fundo"> | string
    userFundos?: UserFundoListRelationFilter
  }, "id" | "rut">

  export type FundoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    rut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creadoPor?: SortOrder
    _count?: FundoCountOrderByAggregateInput
    _max?: FundoMaxOrderByAggregateInput
    _min?: FundoMinOrderByAggregateInput
  }

  export type FundoScalarWhereWithAggregatesInput = {
    AND?: FundoScalarWhereWithAggregatesInput | FundoScalarWhereWithAggregatesInput[]
    OR?: FundoScalarWhereWithAggregatesInput[]
    NOT?: FundoScalarWhereWithAggregatesInput | FundoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fundo"> | string
    nombre?: StringWithAggregatesFilter<"Fundo"> | string
    direccion?: StringWithAggregatesFilter<"Fundo"> | string
    rut?: StringWithAggregatesFilter<"Fundo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fundo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fundo"> | Date | string
    creadoPor?: StringWithAggregatesFilter<"Fundo"> | string
  }

  export type UserFundoWhereInput = {
    AND?: UserFundoWhereInput | UserFundoWhereInput[]
    OR?: UserFundoWhereInput[]
    NOT?: UserFundoWhereInput | UserFundoWhereInput[]
    id?: StringFilter<"UserFundo"> | string
    userId?: StringFilter<"UserFundo"> | string
    fundoId?: StringFilter<"UserFundo"> | string
    assignedAt?: DateTimeFilter<"UserFundo"> | Date | string
    rolId?: StringFilter<"UserFundo"> | string
    fundo?: XOR<FundoScalarRelationFilter, FundoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    terrenos?: TerrenoListRelationFilter
  }

  export type UserFundoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fundoId?: SortOrder
    assignedAt?: SortOrder
    rolId?: SortOrder
    fundo?: FundoOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    rol?: RolOrderByWithRelationInput
    terrenos?: TerrenoOrderByRelationAggregateInput
  }

  export type UserFundoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserFundoWhereInput | UserFundoWhereInput[]
    OR?: UserFundoWhereInput[]
    NOT?: UserFundoWhereInput | UserFundoWhereInput[]
    userId?: StringFilter<"UserFundo"> | string
    fundoId?: StringFilter<"UserFundo"> | string
    assignedAt?: DateTimeFilter<"UserFundo"> | Date | string
    rolId?: StringFilter<"UserFundo"> | string
    fundo?: XOR<FundoScalarRelationFilter, FundoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    terrenos?: TerrenoListRelationFilter
  }, "id">

  export type UserFundoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fundoId?: SortOrder
    assignedAt?: SortOrder
    rolId?: SortOrder
    _count?: UserFundoCountOrderByAggregateInput
    _max?: UserFundoMaxOrderByAggregateInput
    _min?: UserFundoMinOrderByAggregateInput
  }

  export type UserFundoScalarWhereWithAggregatesInput = {
    AND?: UserFundoScalarWhereWithAggregatesInput | UserFundoScalarWhereWithAggregatesInput[]
    OR?: UserFundoScalarWhereWithAggregatesInput[]
    NOT?: UserFundoScalarWhereWithAggregatesInput | UserFundoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFundo"> | string
    userId?: StringWithAggregatesFilter<"UserFundo"> | string
    fundoId?: StringWithAggregatesFilter<"UserFundo"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"UserFundo"> | Date | string
    rolId?: StringWithAggregatesFilter<"UserFundo"> | string
  }

  export type TerrenoWhereInput = {
    AND?: TerrenoWhereInput | TerrenoWhereInput[]
    OR?: TerrenoWhereInput[]
    NOT?: TerrenoWhereInput | TerrenoWhereInput[]
    id?: StringFilter<"Terreno"> | string
    areaHectareas?: FloatFilter<"Terreno"> | number
    createdAt?: DateTimeFilter<"Terreno"> | Date | string
    updatedAt?: DateTimeFilter<"Terreno"> | Date | string
    creadoPor?: StringFilter<"Terreno"> | string
    lat?: FloatFilter<"Terreno"> | number
    lon?: FloatFilter<"Terreno"> | number
    codeSagGrower?: StringFilter<"Terreno"> | string
    userFundoId?: StringFilter<"Terreno"> | string
    userFundo?: XOR<UserFundoScalarRelationFilter, UserFundoWhereInput>
    cuarteles?: CuartelListRelationFilter
  }

  export type TerrenoOrderByWithRelationInput = {
    id?: SortOrder
    areaHectareas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creadoPor?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    codeSagGrower?: SortOrder
    userFundoId?: SortOrder
    userFundo?: UserFundoOrderByWithRelationInput
    cuarteles?: cuartelOrderByRelationAggregateInput
  }

  export type TerrenoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TerrenoWhereInput | TerrenoWhereInput[]
    OR?: TerrenoWhereInput[]
    NOT?: TerrenoWhereInput | TerrenoWhereInput[]
    areaHectareas?: FloatFilter<"Terreno"> | number
    createdAt?: DateTimeFilter<"Terreno"> | Date | string
    updatedAt?: DateTimeFilter<"Terreno"> | Date | string
    creadoPor?: StringFilter<"Terreno"> | string
    lat?: FloatFilter<"Terreno"> | number
    lon?: FloatFilter<"Terreno"> | number
    codeSagGrower?: StringFilter<"Terreno"> | string
    userFundoId?: StringFilter<"Terreno"> | string
    userFundo?: XOR<UserFundoScalarRelationFilter, UserFundoWhereInput>
    cuarteles?: CuartelListRelationFilter
  }, "id">

  export type TerrenoOrderByWithAggregationInput = {
    id?: SortOrder
    areaHectareas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creadoPor?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    codeSagGrower?: SortOrder
    userFundoId?: SortOrder
    _count?: TerrenoCountOrderByAggregateInput
    _avg?: TerrenoAvgOrderByAggregateInput
    _max?: TerrenoMaxOrderByAggregateInput
    _min?: TerrenoMinOrderByAggregateInput
    _sum?: TerrenoSumOrderByAggregateInput
  }

  export type TerrenoScalarWhereWithAggregatesInput = {
    AND?: TerrenoScalarWhereWithAggregatesInput | TerrenoScalarWhereWithAggregatesInput[]
    OR?: TerrenoScalarWhereWithAggregatesInput[]
    NOT?: TerrenoScalarWhereWithAggregatesInput | TerrenoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Terreno"> | string
    areaHectareas?: FloatWithAggregatesFilter<"Terreno"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Terreno"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Terreno"> | Date | string
    creadoPor?: StringWithAggregatesFilter<"Terreno"> | string
    lat?: FloatWithAggregatesFilter<"Terreno"> | number
    lon?: FloatWithAggregatesFilter<"Terreno"> | number
    codeSagGrower?: StringWithAggregatesFilter<"Terreno"> | string
    userFundoId?: StringWithAggregatesFilter<"Terreno"> | string
  }

  export type SueloWhereInput = {
    AND?: SueloWhereInput | SueloWhereInput[]
    OR?: SueloWhereInput[]
    NOT?: SueloWhereInput | SueloWhereInput[]
    id?: StringFilter<"Suelo"> | string
    tipo?: StringFilter<"Suelo"> | string
    caracteristicas?: StringFilter<"Suelo"> | string
    sueloPlanta?: SueloPlantaListRelationFilter
    cuartel?: CuartelListRelationFilter
  }

  export type SueloOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    caracteristicas?: SortOrder
    sueloPlanta?: sueloPlantaOrderByRelationAggregateInput
    cuartel?: cuartelOrderByRelationAggregateInput
  }

  export type SueloWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SueloWhereInput | SueloWhereInput[]
    OR?: SueloWhereInput[]
    NOT?: SueloWhereInput | SueloWhereInput[]
    tipo?: StringFilter<"Suelo"> | string
    caracteristicas?: StringFilter<"Suelo"> | string
    sueloPlanta?: SueloPlantaListRelationFilter
    cuartel?: CuartelListRelationFilter
  }, "id">

  export type SueloOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    caracteristicas?: SortOrder
    _count?: SueloCountOrderByAggregateInput
    _max?: SueloMaxOrderByAggregateInput
    _min?: SueloMinOrderByAggregateInput
  }

  export type SueloScalarWhereWithAggregatesInput = {
    AND?: SueloScalarWhereWithAggregatesInput | SueloScalarWhereWithAggregatesInput[]
    OR?: SueloScalarWhereWithAggregatesInput[]
    NOT?: SueloScalarWhereWithAggregatesInput | SueloScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Suelo"> | string
    tipo?: StringWithAggregatesFilter<"Suelo"> | string
    caracteristicas?: StringWithAggregatesFilter<"Suelo"> | string
  }

  export type PlantaWhereInput = {
    AND?: PlantaWhereInput | PlantaWhereInput[]
    OR?: PlantaWhereInput[]
    NOT?: PlantaWhereInput | PlantaWhereInput[]
    id?: StringFilter<"Planta"> | string
    nombre?: StringFilter<"Planta"> | string
    espacioAncho?: FloatFilter<"Planta"> | number
    espacioLargo?: FloatFilter<"Planta"> | number
    produccion?: IntFilter<"Planta"> | number
    descripcion?: StringFilter<"Planta"> | string
    variedad?: StringFilter<"Planta"> | string
    createdAt?: DateTimeFilter<"Planta"> | Date | string
    updatedAt?: DateTimeFilter<"Planta"> | Date | string
    sueloPlanta?: SueloPlantaListRelationFilter
    cuartel?: CuartelListRelationFilter
  }

  export type PlantaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    espacioAncho?: SortOrder
    espacioLargo?: SortOrder
    produccion?: SortOrder
    descripcion?: SortOrder
    variedad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sueloPlanta?: sueloPlantaOrderByRelationAggregateInput
    cuartel?: cuartelOrderByRelationAggregateInput
  }

  export type PlantaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlantaWhereInput | PlantaWhereInput[]
    OR?: PlantaWhereInput[]
    NOT?: PlantaWhereInput | PlantaWhereInput[]
    nombre?: StringFilter<"Planta"> | string
    espacioAncho?: FloatFilter<"Planta"> | number
    espacioLargo?: FloatFilter<"Planta"> | number
    produccion?: IntFilter<"Planta"> | number
    descripcion?: StringFilter<"Planta"> | string
    variedad?: StringFilter<"Planta"> | string
    createdAt?: DateTimeFilter<"Planta"> | Date | string
    updatedAt?: DateTimeFilter<"Planta"> | Date | string
    sueloPlanta?: SueloPlantaListRelationFilter
    cuartel?: CuartelListRelationFilter
  }, "id">

  export type PlantaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    espacioAncho?: SortOrder
    espacioLargo?: SortOrder
    produccion?: SortOrder
    descripcion?: SortOrder
    variedad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlantaCountOrderByAggregateInput
    _avg?: PlantaAvgOrderByAggregateInput
    _max?: PlantaMaxOrderByAggregateInput
    _min?: PlantaMinOrderByAggregateInput
    _sum?: PlantaSumOrderByAggregateInput
  }

  export type PlantaScalarWhereWithAggregatesInput = {
    AND?: PlantaScalarWhereWithAggregatesInput | PlantaScalarWhereWithAggregatesInput[]
    OR?: PlantaScalarWhereWithAggregatesInput[]
    NOT?: PlantaScalarWhereWithAggregatesInput | PlantaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Planta"> | string
    nombre?: StringWithAggregatesFilter<"Planta"> | string
    espacioAncho?: FloatWithAggregatesFilter<"Planta"> | number
    espacioLargo?: FloatWithAggregatesFilter<"Planta"> | number
    produccion?: IntWithAggregatesFilter<"Planta"> | number
    descripcion?: StringWithAggregatesFilter<"Planta"> | string
    variedad?: StringWithAggregatesFilter<"Planta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Planta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Planta"> | Date | string
  }

  export type cuartelWhereInput = {
    AND?: cuartelWhereInput | cuartelWhereInput[]
    OR?: cuartelWhereInput[]
    NOT?: cuartelWhereInput | cuartelWhereInput[]
    id?: StringFilter<"cuartel"> | string
    hectareas?: FloatFilter<"cuartel"> | number
    createdAt?: DateTimeFilter<"cuartel"> | Date | string
    updatedAt?: DateTimeFilter<"cuartel"> | Date | string
    terrenoId?: StringFilter<"cuartel"> | string
    sueloId?: StringFilter<"cuartel"> | string
    plantaId?: StringFilter<"cuartel"> | string
    suelo?: XOR<SueloScalarRelationFilter, SueloWhereInput>
    terreno?: XOR<TerrenoScalarRelationFilter, TerrenoWhereInput>
    tarea?: TareaListRelationFilter
    planta?: XOR<PlantaScalarRelationFilter, PlantaWhereInput>
  }

  export type cuartelOrderByWithRelationInput = {
    id?: SortOrder
    hectareas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    terrenoId?: SortOrder
    sueloId?: SortOrder
    plantaId?: SortOrder
    suelo?: SueloOrderByWithRelationInput
    terreno?: TerrenoOrderByWithRelationInput
    tarea?: TareaOrderByRelationAggregateInput
    planta?: PlantaOrderByWithRelationInput
  }

  export type cuartelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cuartelWhereInput | cuartelWhereInput[]
    OR?: cuartelWhereInput[]
    NOT?: cuartelWhereInput | cuartelWhereInput[]
    hectareas?: FloatFilter<"cuartel"> | number
    createdAt?: DateTimeFilter<"cuartel"> | Date | string
    updatedAt?: DateTimeFilter<"cuartel"> | Date | string
    terrenoId?: StringFilter<"cuartel"> | string
    sueloId?: StringFilter<"cuartel"> | string
    plantaId?: StringFilter<"cuartel"> | string
    suelo?: XOR<SueloScalarRelationFilter, SueloWhereInput>
    terreno?: XOR<TerrenoScalarRelationFilter, TerrenoWhereInput>
    tarea?: TareaListRelationFilter
    planta?: XOR<PlantaScalarRelationFilter, PlantaWhereInput>
  }, "id">

  export type cuartelOrderByWithAggregationInput = {
    id?: SortOrder
    hectareas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    terrenoId?: SortOrder
    sueloId?: SortOrder
    plantaId?: SortOrder
    _count?: cuartelCountOrderByAggregateInput
    _avg?: cuartelAvgOrderByAggregateInput
    _max?: cuartelMaxOrderByAggregateInput
    _min?: cuartelMinOrderByAggregateInput
    _sum?: cuartelSumOrderByAggregateInput
  }

  export type cuartelScalarWhereWithAggregatesInput = {
    AND?: cuartelScalarWhereWithAggregatesInput | cuartelScalarWhereWithAggregatesInput[]
    OR?: cuartelScalarWhereWithAggregatesInput[]
    NOT?: cuartelScalarWhereWithAggregatesInput | cuartelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cuartel"> | string
    hectareas?: FloatWithAggregatesFilter<"cuartel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"cuartel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"cuartel"> | Date | string
    terrenoId?: StringWithAggregatesFilter<"cuartel"> | string
    sueloId?: StringWithAggregatesFilter<"cuartel"> | string
    plantaId?: StringWithAggregatesFilter<"cuartel"> | string
  }

  export type sueloPlantaWhereInput = {
    AND?: sueloPlantaWhereInput | sueloPlantaWhereInput[]
    OR?: sueloPlantaWhereInput[]
    NOT?: sueloPlantaWhereInput | sueloPlantaWhereInput[]
    id?: StringFilter<"sueloPlanta"> | string
    compatibilidad?: StringFilter<"sueloPlanta"> | string
    plantaId?: StringFilter<"sueloPlanta"> | string
    sueloId?: StringFilter<"sueloPlanta"> | string
    planta?: XOR<PlantaScalarRelationFilter, PlantaWhereInput>
    suelo?: XOR<SueloScalarRelationFilter, SueloWhereInput>
  }

  export type sueloPlantaOrderByWithRelationInput = {
    id?: SortOrder
    compatibilidad?: SortOrder
    plantaId?: SortOrder
    sueloId?: SortOrder
    planta?: PlantaOrderByWithRelationInput
    suelo?: SueloOrderByWithRelationInput
  }

  export type sueloPlantaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sueloPlantaWhereInput | sueloPlantaWhereInput[]
    OR?: sueloPlantaWhereInput[]
    NOT?: sueloPlantaWhereInput | sueloPlantaWhereInput[]
    compatibilidad?: StringFilter<"sueloPlanta"> | string
    plantaId?: StringFilter<"sueloPlanta"> | string
    sueloId?: StringFilter<"sueloPlanta"> | string
    planta?: XOR<PlantaScalarRelationFilter, PlantaWhereInput>
    suelo?: XOR<SueloScalarRelationFilter, SueloWhereInput>
  }, "id">

  export type sueloPlantaOrderByWithAggregationInput = {
    id?: SortOrder
    compatibilidad?: SortOrder
    plantaId?: SortOrder
    sueloId?: SortOrder
    _count?: sueloPlantaCountOrderByAggregateInput
    _max?: sueloPlantaMaxOrderByAggregateInput
    _min?: sueloPlantaMinOrderByAggregateInput
  }

  export type sueloPlantaScalarWhereWithAggregatesInput = {
    AND?: sueloPlantaScalarWhereWithAggregatesInput | sueloPlantaScalarWhereWithAggregatesInput[]
    OR?: sueloPlantaScalarWhereWithAggregatesInput[]
    NOT?: sueloPlantaScalarWhereWithAggregatesInput | sueloPlantaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sueloPlanta"> | string
    compatibilidad?: StringWithAggregatesFilter<"sueloPlanta"> | string
    plantaId?: StringWithAggregatesFilter<"sueloPlanta"> | string
    sueloId?: StringWithAggregatesFilter<"sueloPlanta"> | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: StringFilter<"Producto"> | string
    nombre?: StringFilter<"Producto"> | string
    tipo?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    cuartelId?: StringFilter<"Producto"> | string
    creadoPor?: StringFilter<"Producto"> | string
    tarea?: TareaListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuartelId?: SortOrder
    creadoPor?: SortOrder
    tarea?: TareaOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    tipo?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    cuartelId?: StringFilter<"Producto"> | string
    creadoPor?: StringFilter<"Producto"> | string
    tarea?: TareaListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuartelId?: SortOrder
    creadoPor?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Producto"> | string
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    tipo?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringWithAggregatesFilter<"Producto"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    cuartelId?: StringWithAggregatesFilter<"Producto"> | string
    creadoPor?: StringWithAggregatesFilter<"Producto"> | string
  }

  export type TareaWhereInput = {
    AND?: TareaWhereInput | TareaWhereInput[]
    OR?: TareaWhereInput[]
    NOT?: TareaWhereInput | TareaWhereInput[]
    id?: StringFilter<"Tarea"> | string
    tipo?: StringFilter<"Tarea"> | string
    descripcion?: StringFilter<"Tarea"> | string
    fecha?: DateTimeFilter<"Tarea"> | Date | string
    createdAt?: DateTimeFilter<"Tarea"> | Date | string
    updatedAt?: DateTimeFilter<"Tarea"> | Date | string
    cuartelId?: StringFilter<"Tarea"> | string
    productoId?: StringFilter<"Tarea"> | string
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    cuartel?: XOR<CuartelScalarRelationFilter, cuartelWhereInput>
    ordenAplicacion?: OrdenAplicacionListRelationFilter
  }

  export type TareaOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuartelId?: SortOrder
    productoId?: SortOrder
    producto?: ProductoOrderByWithRelationInput
    cuartel?: cuartelOrderByWithRelationInput
    ordenAplicacion?: OrdenAplicacionOrderByRelationAggregateInput
  }

  export type TareaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TareaWhereInput | TareaWhereInput[]
    OR?: TareaWhereInput[]
    NOT?: TareaWhereInput | TareaWhereInput[]
    tipo?: StringFilter<"Tarea"> | string
    descripcion?: StringFilter<"Tarea"> | string
    fecha?: DateTimeFilter<"Tarea"> | Date | string
    createdAt?: DateTimeFilter<"Tarea"> | Date | string
    updatedAt?: DateTimeFilter<"Tarea"> | Date | string
    cuartelId?: StringFilter<"Tarea"> | string
    productoId?: StringFilter<"Tarea"> | string
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    cuartel?: XOR<CuartelScalarRelationFilter, cuartelWhereInput>
    ordenAplicacion?: OrdenAplicacionListRelationFilter
  }, "id">

  export type TareaOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuartelId?: SortOrder
    productoId?: SortOrder
    _count?: TareaCountOrderByAggregateInput
    _max?: TareaMaxOrderByAggregateInput
    _min?: TareaMinOrderByAggregateInput
  }

  export type TareaScalarWhereWithAggregatesInput = {
    AND?: TareaScalarWhereWithAggregatesInput | TareaScalarWhereWithAggregatesInput[]
    OR?: TareaScalarWhereWithAggregatesInput[]
    NOT?: TareaScalarWhereWithAggregatesInput | TareaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tarea"> | string
    tipo?: StringWithAggregatesFilter<"Tarea"> | string
    descripcion?: StringWithAggregatesFilter<"Tarea"> | string
    fecha?: DateTimeWithAggregatesFilter<"Tarea"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Tarea"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tarea"> | Date | string
    cuartelId?: StringWithAggregatesFilter<"Tarea"> | string
    productoId?: StringWithAggregatesFilter<"Tarea"> | string
  }

  export type OrdenAplicacionWhereInput = {
    AND?: OrdenAplicacionWhereInput | OrdenAplicacionWhereInput[]
    OR?: OrdenAplicacionWhereInput[]
    NOT?: OrdenAplicacionWhereInput | OrdenAplicacionWhereInput[]
    id?: StringFilter<"OrdenAplicacion"> | string
    nombre?: StringFilter<"OrdenAplicacion"> | string
    fechaEntrega?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    fechaAplicacion?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    dosis?: FloatFilter<"OrdenAplicacion"> | number
    cantidadApli?: FloatFilter<"OrdenAplicacion"> | number
    objetivo?: StringFilter<"OrdenAplicacion"> | string
    mojamientoRecomendado?: StringFilter<"OrdenAplicacion"> | string
    mojamientoReal?: StringFilter<"OrdenAplicacion"> | string
    numMaquinadas?: IntFilter<"OrdenAplicacion"> | number
    gastoTotal?: FloatFilter<"OrdenAplicacion"> | number
    createdAt?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    updatedAt?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    tareaId?: StringFilter<"OrdenAplicacion"> | string
    tarea?: XOR<TareaScalarRelationFilter, TareaWhereInput>
  }

  export type OrdenAplicacionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fechaEntrega?: SortOrder
    fechaAplicacion?: SortOrder
    dosis?: SortOrder
    cantidadApli?: SortOrder
    objetivo?: SortOrder
    mojamientoRecomendado?: SortOrder
    mojamientoReal?: SortOrder
    numMaquinadas?: SortOrder
    gastoTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tareaId?: SortOrder
    tarea?: TareaOrderByWithRelationInput
  }

  export type OrdenAplicacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdenAplicacionWhereInput | OrdenAplicacionWhereInput[]
    OR?: OrdenAplicacionWhereInput[]
    NOT?: OrdenAplicacionWhereInput | OrdenAplicacionWhereInput[]
    nombre?: StringFilter<"OrdenAplicacion"> | string
    fechaEntrega?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    fechaAplicacion?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    dosis?: FloatFilter<"OrdenAplicacion"> | number
    cantidadApli?: FloatFilter<"OrdenAplicacion"> | number
    objetivo?: StringFilter<"OrdenAplicacion"> | string
    mojamientoRecomendado?: StringFilter<"OrdenAplicacion"> | string
    mojamientoReal?: StringFilter<"OrdenAplicacion"> | string
    numMaquinadas?: IntFilter<"OrdenAplicacion"> | number
    gastoTotal?: FloatFilter<"OrdenAplicacion"> | number
    createdAt?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    updatedAt?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    tareaId?: StringFilter<"OrdenAplicacion"> | string
    tarea?: XOR<TareaScalarRelationFilter, TareaWhereInput>
  }, "id">

  export type OrdenAplicacionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fechaEntrega?: SortOrder
    fechaAplicacion?: SortOrder
    dosis?: SortOrder
    cantidadApli?: SortOrder
    objetivo?: SortOrder
    mojamientoRecomendado?: SortOrder
    mojamientoReal?: SortOrder
    numMaquinadas?: SortOrder
    gastoTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tareaId?: SortOrder
    _count?: OrdenAplicacionCountOrderByAggregateInput
    _avg?: OrdenAplicacionAvgOrderByAggregateInput
    _max?: OrdenAplicacionMaxOrderByAggregateInput
    _min?: OrdenAplicacionMinOrderByAggregateInput
    _sum?: OrdenAplicacionSumOrderByAggregateInput
  }

  export type OrdenAplicacionScalarWhereWithAggregatesInput = {
    AND?: OrdenAplicacionScalarWhereWithAggregatesInput | OrdenAplicacionScalarWhereWithAggregatesInput[]
    OR?: OrdenAplicacionScalarWhereWithAggregatesInput[]
    NOT?: OrdenAplicacionScalarWhereWithAggregatesInput | OrdenAplicacionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrdenAplicacion"> | string
    nombre?: StringWithAggregatesFilter<"OrdenAplicacion"> | string
    fechaEntrega?: DateTimeWithAggregatesFilter<"OrdenAplicacion"> | Date | string
    fechaAplicacion?: DateTimeWithAggregatesFilter<"OrdenAplicacion"> | Date | string
    dosis?: FloatWithAggregatesFilter<"OrdenAplicacion"> | number
    cantidadApli?: FloatWithAggregatesFilter<"OrdenAplicacion"> | number
    objetivo?: StringWithAggregatesFilter<"OrdenAplicacion"> | string
    mojamientoRecomendado?: StringWithAggregatesFilter<"OrdenAplicacion"> | string
    mojamientoReal?: StringWithAggregatesFilter<"OrdenAplicacion"> | string
    numMaquinadas?: IntWithAggregatesFilter<"OrdenAplicacion"> | number
    gastoTotal?: FloatWithAggregatesFilter<"OrdenAplicacion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OrdenAplicacion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrdenAplicacion"> | Date | string
    tareaId?: StringWithAggregatesFilter<"OrdenAplicacion"> | string
  }

  export type UserCreateInput = {
    id?: string
    nombre: string
    apellido: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userFundos?: UserFundoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nombre: string
    apellido: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userFundos?: UserFundoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFundos?: UserFundoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFundos?: UserFundoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nombre: string
    apellido: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    userFundos?: UserFundoCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    userFundos?: UserFundoUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    userFundos?: UserFundoUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    userFundos?: UserFundoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
  }

  export type RolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FundoCreateInput = {
    id?: string
    nombre: string
    direccion: string
    rut: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
    userFundos?: UserFundoCreateNestedManyWithoutFundoInput
  }

  export type FundoUncheckedCreateInput = {
    id?: string
    nombre: string
    direccion: string
    rut: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
    userFundos?: UserFundoUncheckedCreateNestedManyWithoutFundoInput
  }

  export type FundoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    userFundos?: UserFundoUpdateManyWithoutFundoNestedInput
  }

  export type FundoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    userFundos?: UserFundoUncheckedUpdateManyWithoutFundoNestedInput
  }

  export type FundoCreateManyInput = {
    id?: string
    nombre: string
    direccion: string
    rut: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
  }

  export type FundoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
  }

  export type FundoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
  }

  export type UserFundoCreateInput = {
    id?: string
    assignedAt?: Date | string
    fundo: FundoCreateNestedOneWithoutUserFundosInput
    user: UserCreateNestedOneWithoutUserFundosInput
    rol: RolCreateNestedOneWithoutUserFundosInput
    terrenos?: TerrenoCreateNestedManyWithoutUserFundoInput
  }

  export type UserFundoUncheckedCreateInput = {
    id?: string
    userId: string
    fundoId: string
    assignedAt?: Date | string
    rolId: string
    terrenos?: TerrenoUncheckedCreateNestedManyWithoutUserFundoInput
  }

  export type UserFundoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fundo?: FundoUpdateOneRequiredWithoutUserFundosNestedInput
    user?: UserUpdateOneRequiredWithoutUserFundosNestedInput
    rol?: RolUpdateOneRequiredWithoutUserFundosNestedInput
    terrenos?: TerrenoUpdateManyWithoutUserFundoNestedInput
  }

  export type UserFundoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundoId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: StringFieldUpdateOperationsInput | string
    terrenos?: TerrenoUncheckedUpdateManyWithoutUserFundoNestedInput
  }

  export type UserFundoCreateManyInput = {
    id?: string
    userId: string
    fundoId: string
    assignedAt?: Date | string
    rolId: string
  }

  export type UserFundoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFundoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundoId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: StringFieldUpdateOperationsInput | string
  }

  export type TerrenoCreateInput = {
    id?: string
    areaHectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
    lat: number
    lon: number
    codeSagGrower: string
    userFundo: UserFundoCreateNestedOneWithoutTerrenosInput
    cuarteles?: cuartelCreateNestedManyWithoutTerrenoInput
  }

  export type TerrenoUncheckedCreateInput = {
    id?: string
    areaHectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
    lat: number
    lon: number
    codeSagGrower: string
    userFundoId: string
    cuarteles?: cuartelUncheckedCreateNestedManyWithoutTerrenoInput
  }

  export type TerrenoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaHectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    codeSagGrower?: StringFieldUpdateOperationsInput | string
    userFundo?: UserFundoUpdateOneRequiredWithoutTerrenosNestedInput
    cuarteles?: cuartelUpdateManyWithoutTerrenoNestedInput
  }

  export type TerrenoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaHectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    codeSagGrower?: StringFieldUpdateOperationsInput | string
    userFundoId?: StringFieldUpdateOperationsInput | string
    cuarteles?: cuartelUncheckedUpdateManyWithoutTerrenoNestedInput
  }

  export type TerrenoCreateManyInput = {
    id?: string
    areaHectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
    lat: number
    lon: number
    codeSagGrower: string
    userFundoId: string
  }

  export type TerrenoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaHectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    codeSagGrower?: StringFieldUpdateOperationsInput | string
  }

  export type TerrenoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaHectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    codeSagGrower?: StringFieldUpdateOperationsInput | string
    userFundoId?: StringFieldUpdateOperationsInput | string
  }

  export type SueloCreateInput = {
    id?: string
    tipo: string
    caracteristicas: string
    sueloPlanta?: sueloPlantaCreateNestedManyWithoutSueloInput
    cuartel?: cuartelCreateNestedManyWithoutSueloInput
  }

  export type SueloUncheckedCreateInput = {
    id?: string
    tipo: string
    caracteristicas: string
    sueloPlanta?: sueloPlantaUncheckedCreateNestedManyWithoutSueloInput
    cuartel?: cuartelUncheckedCreateNestedManyWithoutSueloInput
  }

  export type SueloUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caracteristicas?: StringFieldUpdateOperationsInput | string
    sueloPlanta?: sueloPlantaUpdateManyWithoutSueloNestedInput
    cuartel?: cuartelUpdateManyWithoutSueloNestedInput
  }

  export type SueloUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caracteristicas?: StringFieldUpdateOperationsInput | string
    sueloPlanta?: sueloPlantaUncheckedUpdateManyWithoutSueloNestedInput
    cuartel?: cuartelUncheckedUpdateManyWithoutSueloNestedInput
  }

  export type SueloCreateManyInput = {
    id?: string
    tipo: string
    caracteristicas: string
  }

  export type SueloUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caracteristicas?: StringFieldUpdateOperationsInput | string
  }

  export type SueloUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caracteristicas?: StringFieldUpdateOperationsInput | string
  }

  export type PlantaCreateInput = {
    id?: string
    nombre: string
    espacioAncho: number
    espacioLargo: number
    produccion: number
    descripcion: string
    variedad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sueloPlanta?: sueloPlantaCreateNestedManyWithoutPlantaInput
    cuartel?: cuartelCreateNestedManyWithoutPlantaInput
  }

  export type PlantaUncheckedCreateInput = {
    id?: string
    nombre: string
    espacioAncho: number
    espacioLargo: number
    produccion: number
    descripcion: string
    variedad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sueloPlanta?: sueloPlantaUncheckedCreateNestedManyWithoutPlantaInput
    cuartel?: cuartelUncheckedCreateNestedManyWithoutPlantaInput
  }

  export type PlantaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    espacioAncho?: FloatFieldUpdateOperationsInput | number
    espacioLargo?: FloatFieldUpdateOperationsInput | number
    produccion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    variedad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sueloPlanta?: sueloPlantaUpdateManyWithoutPlantaNestedInput
    cuartel?: cuartelUpdateManyWithoutPlantaNestedInput
  }

  export type PlantaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    espacioAncho?: FloatFieldUpdateOperationsInput | number
    espacioLargo?: FloatFieldUpdateOperationsInput | number
    produccion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    variedad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sueloPlanta?: sueloPlantaUncheckedUpdateManyWithoutPlantaNestedInput
    cuartel?: cuartelUncheckedUpdateManyWithoutPlantaNestedInput
  }

  export type PlantaCreateManyInput = {
    id?: string
    nombre: string
    espacioAncho: number
    espacioLargo: number
    produccion: number
    descripcion: string
    variedad: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlantaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    espacioAncho?: FloatFieldUpdateOperationsInput | number
    espacioLargo?: FloatFieldUpdateOperationsInput | number
    produccion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    variedad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    espacioAncho?: FloatFieldUpdateOperationsInput | number
    espacioLargo?: FloatFieldUpdateOperationsInput | number
    produccion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    variedad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cuartelCreateInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    suelo: SueloCreateNestedOneWithoutCuartelInput
    terreno: TerrenoCreateNestedOneWithoutCuartelesInput
    tarea?: TareaCreateNestedManyWithoutCuartelInput
    planta: PlantaCreateNestedOneWithoutCuartelInput
  }

  export type cuartelUncheckedCreateInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    terrenoId: string
    sueloId: string
    plantaId: string
    tarea?: TareaUncheckedCreateNestedManyWithoutCuartelInput
  }

  export type cuartelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suelo?: SueloUpdateOneRequiredWithoutCuartelNestedInput
    terreno?: TerrenoUpdateOneRequiredWithoutCuartelesNestedInput
    tarea?: TareaUpdateManyWithoutCuartelNestedInput
    planta?: PlantaUpdateOneRequiredWithoutCuartelNestedInput
  }

  export type cuartelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terrenoId?: StringFieldUpdateOperationsInput | string
    sueloId?: StringFieldUpdateOperationsInput | string
    plantaId?: StringFieldUpdateOperationsInput | string
    tarea?: TareaUncheckedUpdateManyWithoutCuartelNestedInput
  }

  export type cuartelCreateManyInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    terrenoId: string
    sueloId: string
    plantaId: string
  }

  export type cuartelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cuartelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terrenoId?: StringFieldUpdateOperationsInput | string
    sueloId?: StringFieldUpdateOperationsInput | string
    plantaId?: StringFieldUpdateOperationsInput | string
  }

  export type sueloPlantaCreateInput = {
    id?: string
    compatibilidad: string
    planta: PlantaCreateNestedOneWithoutSueloPlantaInput
    suelo: SueloCreateNestedOneWithoutSueloPlantaInput
  }

  export type sueloPlantaUncheckedCreateInput = {
    id?: string
    compatibilidad: string
    plantaId: string
    sueloId: string
  }

  export type sueloPlantaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilidad?: StringFieldUpdateOperationsInput | string
    planta?: PlantaUpdateOneRequiredWithoutSueloPlantaNestedInput
    suelo?: SueloUpdateOneRequiredWithoutSueloPlantaNestedInput
  }

  export type sueloPlantaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilidad?: StringFieldUpdateOperationsInput | string
    plantaId?: StringFieldUpdateOperationsInput | string
    sueloId?: StringFieldUpdateOperationsInput | string
  }

  export type sueloPlantaCreateManyInput = {
    id?: string
    compatibilidad: string
    plantaId: string
    sueloId: string
  }

  export type sueloPlantaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilidad?: StringFieldUpdateOperationsInput | string
  }

  export type sueloPlantaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilidad?: StringFieldUpdateOperationsInput | string
    plantaId?: StringFieldUpdateOperationsInput | string
    sueloId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoCreateInput = {
    id?: string
    nombre: string
    tipo: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartelId: string
    creadoPor: string
    tarea?: TareaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: string
    nombre: string
    tipo: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartelId: string
    creadoPor: string
    tarea?: TareaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartelId?: StringFieldUpdateOperationsInput | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    tarea?: TareaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartelId?: StringFieldUpdateOperationsInput | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    tarea?: TareaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: string
    nombre: string
    tipo: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartelId: string
    creadoPor: string
  }

  export type ProductoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartelId?: StringFieldUpdateOperationsInput | string
    creadoPor?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartelId?: StringFieldUpdateOperationsInput | string
    creadoPor?: StringFieldUpdateOperationsInput | string
  }

  export type TareaCreateInput = {
    id?: string
    tipo: string
    descripcion: string
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    producto: ProductoCreateNestedOneWithoutTareaInput
    cuartel: cuartelCreateNestedOneWithoutTareaInput
    ordenAplicacion?: OrdenAplicacionCreateNestedManyWithoutTareaInput
  }

  export type TareaUncheckedCreateInput = {
    id?: string
    tipo: string
    descripcion: string
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartelId: string
    productoId: string
    ordenAplicacion?: OrdenAplicacionUncheckedCreateNestedManyWithoutTareaInput
  }

  export type TareaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutTareaNestedInput
    cuartel?: cuartelUpdateOneRequiredWithoutTareaNestedInput
    ordenAplicacion?: OrdenAplicacionUpdateManyWithoutTareaNestedInput
  }

  export type TareaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartelId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    ordenAplicacion?: OrdenAplicacionUncheckedUpdateManyWithoutTareaNestedInput
  }

  export type TareaCreateManyInput = {
    id?: string
    tipo: string
    descripcion: string
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartelId: string
    productoId: string
  }

  export type TareaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TareaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartelId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenAplicacionCreateInput = {
    id?: string
    nombre: string
    fechaEntrega: Date | string
    fechaAplicacion: Date | string
    dosis: number
    cantidadApli: number
    objetivo: string
    mojamientoRecomendado: string
    mojamientoReal: string
    numMaquinadas: number
    gastoTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tarea: TareaCreateNestedOneWithoutOrdenAplicacionInput
  }

  export type OrdenAplicacionUncheckedCreateInput = {
    id?: string
    nombre: string
    fechaEntrega: Date | string
    fechaAplicacion: Date | string
    dosis: number
    cantidadApli: number
    objetivo: string
    mojamientoRecomendado: string
    mojamientoReal: string
    numMaquinadas: number
    gastoTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tareaId: string
  }

  export type OrdenAplicacionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaAplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: FloatFieldUpdateOperationsInput | number
    cantidadApli?: FloatFieldUpdateOperationsInput | number
    objetivo?: StringFieldUpdateOperationsInput | string
    mojamientoRecomendado?: StringFieldUpdateOperationsInput | string
    mojamientoReal?: StringFieldUpdateOperationsInput | string
    numMaquinadas?: IntFieldUpdateOperationsInput | number
    gastoTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tarea?: TareaUpdateOneRequiredWithoutOrdenAplicacionNestedInput
  }

  export type OrdenAplicacionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaAplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: FloatFieldUpdateOperationsInput | number
    cantidadApli?: FloatFieldUpdateOperationsInput | number
    objetivo?: StringFieldUpdateOperationsInput | string
    mojamientoRecomendado?: StringFieldUpdateOperationsInput | string
    mojamientoReal?: StringFieldUpdateOperationsInput | string
    numMaquinadas?: IntFieldUpdateOperationsInput | number
    gastoTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tareaId?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenAplicacionCreateManyInput = {
    id?: string
    nombre: string
    fechaEntrega: Date | string
    fechaAplicacion: Date | string
    dosis: number
    cantidadApli: number
    objetivo: string
    mojamientoRecomendado: string
    mojamientoReal: string
    numMaquinadas: number
    gastoTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tareaId: string
  }

  export type OrdenAplicacionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaAplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: FloatFieldUpdateOperationsInput | number
    cantidadApli?: FloatFieldUpdateOperationsInput | number
    objetivo?: StringFieldUpdateOperationsInput | string
    mojamientoRecomendado?: StringFieldUpdateOperationsInput | string
    mojamientoReal?: StringFieldUpdateOperationsInput | string
    numMaquinadas?: IntFieldUpdateOperationsInput | number
    gastoTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenAplicacionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaAplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: FloatFieldUpdateOperationsInput | number
    cantidadApli?: FloatFieldUpdateOperationsInput | number
    objetivo?: StringFieldUpdateOperationsInput | string
    mojamientoRecomendado?: StringFieldUpdateOperationsInput | string
    mojamientoReal?: StringFieldUpdateOperationsInput | string
    numMaquinadas?: IntFieldUpdateOperationsInput | number
    gastoTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tareaId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserFundoListRelationFilter = {
    every?: UserFundoWhereInput
    some?: UserFundoWhereInput
    none?: UserFundoWhereInput
  }

  export type UserFundoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
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

  export type FundoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    rut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creadoPor?: SortOrder
  }

  export type FundoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    rut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creadoPor?: SortOrder
  }

  export type FundoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    rut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creadoPor?: SortOrder
  }

  export type FundoScalarRelationFilter = {
    is?: FundoWhereInput
    isNot?: FundoWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type TerrenoListRelationFilter = {
    every?: TerrenoWhereInput
    some?: TerrenoWhereInput
    none?: TerrenoWhereInput
  }

  export type TerrenoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFundoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fundoId?: SortOrder
    assignedAt?: SortOrder
    rolId?: SortOrder
  }

  export type UserFundoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fundoId?: SortOrder
    assignedAt?: SortOrder
    rolId?: SortOrder
  }

  export type UserFundoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fundoId?: SortOrder
    assignedAt?: SortOrder
    rolId?: SortOrder
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

  export type UserFundoScalarRelationFilter = {
    is?: UserFundoWhereInput
    isNot?: UserFundoWhereInput
  }

  export type CuartelListRelationFilter = {
    every?: cuartelWhereInput
    some?: cuartelWhereInput
    none?: cuartelWhereInput
  }

  export type cuartelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TerrenoCountOrderByAggregateInput = {
    id?: SortOrder
    areaHectareas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creadoPor?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    codeSagGrower?: SortOrder
    userFundoId?: SortOrder
  }

  export type TerrenoAvgOrderByAggregateInput = {
    areaHectareas?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
  }

  export type TerrenoMaxOrderByAggregateInput = {
    id?: SortOrder
    areaHectareas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creadoPor?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    codeSagGrower?: SortOrder
    userFundoId?: SortOrder
  }

  export type TerrenoMinOrderByAggregateInput = {
    id?: SortOrder
    areaHectareas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creadoPor?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    codeSagGrower?: SortOrder
    userFundoId?: SortOrder
  }

  export type TerrenoSumOrderByAggregateInput = {
    areaHectareas?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
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

  export type SueloPlantaListRelationFilter = {
    every?: sueloPlantaWhereInput
    some?: sueloPlantaWhereInput
    none?: sueloPlantaWhereInput
  }

  export type sueloPlantaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SueloCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    caracteristicas?: SortOrder
  }

  export type SueloMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    caracteristicas?: SortOrder
  }

  export type SueloMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    caracteristicas?: SortOrder
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

  export type PlantaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    espacioAncho?: SortOrder
    espacioLargo?: SortOrder
    produccion?: SortOrder
    descripcion?: SortOrder
    variedad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantaAvgOrderByAggregateInput = {
    espacioAncho?: SortOrder
    espacioLargo?: SortOrder
    produccion?: SortOrder
  }

  export type PlantaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    espacioAncho?: SortOrder
    espacioLargo?: SortOrder
    produccion?: SortOrder
    descripcion?: SortOrder
    variedad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    espacioAncho?: SortOrder
    espacioLargo?: SortOrder
    produccion?: SortOrder
    descripcion?: SortOrder
    variedad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantaSumOrderByAggregateInput = {
    espacioAncho?: SortOrder
    espacioLargo?: SortOrder
    produccion?: SortOrder
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

  export type SueloScalarRelationFilter = {
    is?: SueloWhereInput
    isNot?: SueloWhereInput
  }

  export type TerrenoScalarRelationFilter = {
    is?: TerrenoWhereInput
    isNot?: TerrenoWhereInput
  }

  export type TareaListRelationFilter = {
    every?: TareaWhereInput
    some?: TareaWhereInput
    none?: TareaWhereInput
  }

  export type PlantaScalarRelationFilter = {
    is?: PlantaWhereInput
    isNot?: PlantaWhereInput
  }

  export type TareaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cuartelCountOrderByAggregateInput = {
    id?: SortOrder
    hectareas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    terrenoId?: SortOrder
    sueloId?: SortOrder
    plantaId?: SortOrder
  }

  export type cuartelAvgOrderByAggregateInput = {
    hectareas?: SortOrder
  }

  export type cuartelMaxOrderByAggregateInput = {
    id?: SortOrder
    hectareas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    terrenoId?: SortOrder
    sueloId?: SortOrder
    plantaId?: SortOrder
  }

  export type cuartelMinOrderByAggregateInput = {
    id?: SortOrder
    hectareas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    terrenoId?: SortOrder
    sueloId?: SortOrder
    plantaId?: SortOrder
  }

  export type cuartelSumOrderByAggregateInput = {
    hectareas?: SortOrder
  }

  export type sueloPlantaCountOrderByAggregateInput = {
    id?: SortOrder
    compatibilidad?: SortOrder
    plantaId?: SortOrder
    sueloId?: SortOrder
  }

  export type sueloPlantaMaxOrderByAggregateInput = {
    id?: SortOrder
    compatibilidad?: SortOrder
    plantaId?: SortOrder
    sueloId?: SortOrder
  }

  export type sueloPlantaMinOrderByAggregateInput = {
    id?: SortOrder
    compatibilidad?: SortOrder
    plantaId?: SortOrder
    sueloId?: SortOrder
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuartelId?: SortOrder
    creadoPor?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuartelId?: SortOrder
    creadoPor?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuartelId?: SortOrder
    creadoPor?: SortOrder
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type CuartelScalarRelationFilter = {
    is?: cuartelWhereInput
    isNot?: cuartelWhereInput
  }

  export type OrdenAplicacionListRelationFilter = {
    every?: OrdenAplicacionWhereInput
    some?: OrdenAplicacionWhereInput
    none?: OrdenAplicacionWhereInput
  }

  export type OrdenAplicacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TareaCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuartelId?: SortOrder
    productoId?: SortOrder
  }

  export type TareaMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuartelId?: SortOrder
    productoId?: SortOrder
  }

  export type TareaMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cuartelId?: SortOrder
    productoId?: SortOrder
  }

  export type TareaScalarRelationFilter = {
    is?: TareaWhereInput
    isNot?: TareaWhereInput
  }

  export type OrdenAplicacionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fechaEntrega?: SortOrder
    fechaAplicacion?: SortOrder
    dosis?: SortOrder
    cantidadApli?: SortOrder
    objetivo?: SortOrder
    mojamientoRecomendado?: SortOrder
    mojamientoReal?: SortOrder
    numMaquinadas?: SortOrder
    gastoTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tareaId?: SortOrder
  }

  export type OrdenAplicacionAvgOrderByAggregateInput = {
    dosis?: SortOrder
    cantidadApli?: SortOrder
    numMaquinadas?: SortOrder
    gastoTotal?: SortOrder
  }

  export type OrdenAplicacionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fechaEntrega?: SortOrder
    fechaAplicacion?: SortOrder
    dosis?: SortOrder
    cantidadApli?: SortOrder
    objetivo?: SortOrder
    mojamientoRecomendado?: SortOrder
    mojamientoReal?: SortOrder
    numMaquinadas?: SortOrder
    gastoTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tareaId?: SortOrder
  }

  export type OrdenAplicacionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fechaEntrega?: SortOrder
    fechaAplicacion?: SortOrder
    dosis?: SortOrder
    cantidadApli?: SortOrder
    objetivo?: SortOrder
    mojamientoRecomendado?: SortOrder
    mojamientoReal?: SortOrder
    numMaquinadas?: SortOrder
    gastoTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tareaId?: SortOrder
  }

  export type OrdenAplicacionSumOrderByAggregateInput = {
    dosis?: SortOrder
    cantidadApli?: SortOrder
    numMaquinadas?: SortOrder
    gastoTotal?: SortOrder
  }

  export type UserFundoCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFundoCreateWithoutUserInput, UserFundoUncheckedCreateWithoutUserInput> | UserFundoCreateWithoutUserInput[] | UserFundoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutUserInput | UserFundoCreateOrConnectWithoutUserInput[]
    createMany?: UserFundoCreateManyUserInputEnvelope
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
  }

  export type UserFundoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFundoCreateWithoutUserInput, UserFundoUncheckedCreateWithoutUserInput> | UserFundoCreateWithoutUserInput[] | UserFundoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutUserInput | UserFundoCreateOrConnectWithoutUserInput[]
    createMany?: UserFundoCreateManyUserInputEnvelope
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserFundoUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFundoCreateWithoutUserInput, UserFundoUncheckedCreateWithoutUserInput> | UserFundoCreateWithoutUserInput[] | UserFundoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutUserInput | UserFundoCreateOrConnectWithoutUserInput[]
    upsert?: UserFundoUpsertWithWhereUniqueWithoutUserInput | UserFundoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFundoCreateManyUserInputEnvelope
    set?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    disconnect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    delete?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    update?: UserFundoUpdateWithWhereUniqueWithoutUserInput | UserFundoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFundoUpdateManyWithWhereWithoutUserInput | UserFundoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFundoScalarWhereInput | UserFundoScalarWhereInput[]
  }

  export type UserFundoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFundoCreateWithoutUserInput, UserFundoUncheckedCreateWithoutUserInput> | UserFundoCreateWithoutUserInput[] | UserFundoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutUserInput | UserFundoCreateOrConnectWithoutUserInput[]
    upsert?: UserFundoUpsertWithWhereUniqueWithoutUserInput | UserFundoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFundoCreateManyUserInputEnvelope
    set?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    disconnect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    delete?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    update?: UserFundoUpdateWithWhereUniqueWithoutUserInput | UserFundoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFundoUpdateManyWithWhereWithoutUserInput | UserFundoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFundoScalarWhereInput | UserFundoScalarWhereInput[]
  }

  export type UserFundoCreateNestedManyWithoutRolInput = {
    create?: XOR<UserFundoCreateWithoutRolInput, UserFundoUncheckedCreateWithoutRolInput> | UserFundoCreateWithoutRolInput[] | UserFundoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutRolInput | UserFundoCreateOrConnectWithoutRolInput[]
    createMany?: UserFundoCreateManyRolInputEnvelope
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
  }

  export type UserFundoUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UserFundoCreateWithoutRolInput, UserFundoUncheckedCreateWithoutRolInput> | UserFundoCreateWithoutRolInput[] | UserFundoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutRolInput | UserFundoCreateOrConnectWithoutRolInput[]
    createMany?: UserFundoCreateManyRolInputEnvelope
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserFundoUpdateManyWithoutRolNestedInput = {
    create?: XOR<UserFundoCreateWithoutRolInput, UserFundoUncheckedCreateWithoutRolInput> | UserFundoCreateWithoutRolInput[] | UserFundoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutRolInput | UserFundoCreateOrConnectWithoutRolInput[]
    upsert?: UserFundoUpsertWithWhereUniqueWithoutRolInput | UserFundoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UserFundoCreateManyRolInputEnvelope
    set?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    disconnect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    delete?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    update?: UserFundoUpdateWithWhereUniqueWithoutRolInput | UserFundoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UserFundoUpdateManyWithWhereWithoutRolInput | UserFundoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UserFundoScalarWhereInput | UserFundoScalarWhereInput[]
  }

  export type UserFundoUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UserFundoCreateWithoutRolInput, UserFundoUncheckedCreateWithoutRolInput> | UserFundoCreateWithoutRolInput[] | UserFundoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutRolInput | UserFundoCreateOrConnectWithoutRolInput[]
    upsert?: UserFundoUpsertWithWhereUniqueWithoutRolInput | UserFundoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UserFundoCreateManyRolInputEnvelope
    set?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    disconnect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    delete?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    update?: UserFundoUpdateWithWhereUniqueWithoutRolInput | UserFundoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UserFundoUpdateManyWithWhereWithoutRolInput | UserFundoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UserFundoScalarWhereInput | UserFundoScalarWhereInput[]
  }

  export type UserFundoCreateNestedManyWithoutFundoInput = {
    create?: XOR<UserFundoCreateWithoutFundoInput, UserFundoUncheckedCreateWithoutFundoInput> | UserFundoCreateWithoutFundoInput[] | UserFundoUncheckedCreateWithoutFundoInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutFundoInput | UserFundoCreateOrConnectWithoutFundoInput[]
    createMany?: UserFundoCreateManyFundoInputEnvelope
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
  }

  export type UserFundoUncheckedCreateNestedManyWithoutFundoInput = {
    create?: XOR<UserFundoCreateWithoutFundoInput, UserFundoUncheckedCreateWithoutFundoInput> | UserFundoCreateWithoutFundoInput[] | UserFundoUncheckedCreateWithoutFundoInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutFundoInput | UserFundoCreateOrConnectWithoutFundoInput[]
    createMany?: UserFundoCreateManyFundoInputEnvelope
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
  }

  export type UserFundoUpdateManyWithoutFundoNestedInput = {
    create?: XOR<UserFundoCreateWithoutFundoInput, UserFundoUncheckedCreateWithoutFundoInput> | UserFundoCreateWithoutFundoInput[] | UserFundoUncheckedCreateWithoutFundoInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutFundoInput | UserFundoCreateOrConnectWithoutFundoInput[]
    upsert?: UserFundoUpsertWithWhereUniqueWithoutFundoInput | UserFundoUpsertWithWhereUniqueWithoutFundoInput[]
    createMany?: UserFundoCreateManyFundoInputEnvelope
    set?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    disconnect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    delete?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    update?: UserFundoUpdateWithWhereUniqueWithoutFundoInput | UserFundoUpdateWithWhereUniqueWithoutFundoInput[]
    updateMany?: UserFundoUpdateManyWithWhereWithoutFundoInput | UserFundoUpdateManyWithWhereWithoutFundoInput[]
    deleteMany?: UserFundoScalarWhereInput | UserFundoScalarWhereInput[]
  }

  export type UserFundoUncheckedUpdateManyWithoutFundoNestedInput = {
    create?: XOR<UserFundoCreateWithoutFundoInput, UserFundoUncheckedCreateWithoutFundoInput> | UserFundoCreateWithoutFundoInput[] | UserFundoUncheckedCreateWithoutFundoInput[]
    connectOrCreate?: UserFundoCreateOrConnectWithoutFundoInput | UserFundoCreateOrConnectWithoutFundoInput[]
    upsert?: UserFundoUpsertWithWhereUniqueWithoutFundoInput | UserFundoUpsertWithWhereUniqueWithoutFundoInput[]
    createMany?: UserFundoCreateManyFundoInputEnvelope
    set?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    disconnect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    delete?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    connect?: UserFundoWhereUniqueInput | UserFundoWhereUniqueInput[]
    update?: UserFundoUpdateWithWhereUniqueWithoutFundoInput | UserFundoUpdateWithWhereUniqueWithoutFundoInput[]
    updateMany?: UserFundoUpdateManyWithWhereWithoutFundoInput | UserFundoUpdateManyWithWhereWithoutFundoInput[]
    deleteMany?: UserFundoScalarWhereInput | UserFundoScalarWhereInput[]
  }

  export type FundoCreateNestedOneWithoutUserFundosInput = {
    create?: XOR<FundoCreateWithoutUserFundosInput, FundoUncheckedCreateWithoutUserFundosInput>
    connectOrCreate?: FundoCreateOrConnectWithoutUserFundosInput
    connect?: FundoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserFundosInput = {
    create?: XOR<UserCreateWithoutUserFundosInput, UserUncheckedCreateWithoutUserFundosInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFundosInput
    connect?: UserWhereUniqueInput
  }

  export type RolCreateNestedOneWithoutUserFundosInput = {
    create?: XOR<RolCreateWithoutUserFundosInput, RolUncheckedCreateWithoutUserFundosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUserFundosInput
    connect?: RolWhereUniqueInput
  }

  export type TerrenoCreateNestedManyWithoutUserFundoInput = {
    create?: XOR<TerrenoCreateWithoutUserFundoInput, TerrenoUncheckedCreateWithoutUserFundoInput> | TerrenoCreateWithoutUserFundoInput[] | TerrenoUncheckedCreateWithoutUserFundoInput[]
    connectOrCreate?: TerrenoCreateOrConnectWithoutUserFundoInput | TerrenoCreateOrConnectWithoutUserFundoInput[]
    createMany?: TerrenoCreateManyUserFundoInputEnvelope
    connect?: TerrenoWhereUniqueInput | TerrenoWhereUniqueInput[]
  }

  export type TerrenoUncheckedCreateNestedManyWithoutUserFundoInput = {
    create?: XOR<TerrenoCreateWithoutUserFundoInput, TerrenoUncheckedCreateWithoutUserFundoInput> | TerrenoCreateWithoutUserFundoInput[] | TerrenoUncheckedCreateWithoutUserFundoInput[]
    connectOrCreate?: TerrenoCreateOrConnectWithoutUserFundoInput | TerrenoCreateOrConnectWithoutUserFundoInput[]
    createMany?: TerrenoCreateManyUserFundoInputEnvelope
    connect?: TerrenoWhereUniqueInput | TerrenoWhereUniqueInput[]
  }

  export type FundoUpdateOneRequiredWithoutUserFundosNestedInput = {
    create?: XOR<FundoCreateWithoutUserFundosInput, FundoUncheckedCreateWithoutUserFundosInput>
    connectOrCreate?: FundoCreateOrConnectWithoutUserFundosInput
    upsert?: FundoUpsertWithoutUserFundosInput
    connect?: FundoWhereUniqueInput
    update?: XOR<XOR<FundoUpdateToOneWithWhereWithoutUserFundosInput, FundoUpdateWithoutUserFundosInput>, FundoUncheckedUpdateWithoutUserFundosInput>
  }

  export type UserUpdateOneRequiredWithoutUserFundosNestedInput = {
    create?: XOR<UserCreateWithoutUserFundosInput, UserUncheckedCreateWithoutUserFundosInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFundosInput
    upsert?: UserUpsertWithoutUserFundosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserFundosInput, UserUpdateWithoutUserFundosInput>, UserUncheckedUpdateWithoutUserFundosInput>
  }

  export type RolUpdateOneRequiredWithoutUserFundosNestedInput = {
    create?: XOR<RolCreateWithoutUserFundosInput, RolUncheckedCreateWithoutUserFundosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUserFundosInput
    upsert?: RolUpsertWithoutUserFundosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUserFundosInput, RolUpdateWithoutUserFundosInput>, RolUncheckedUpdateWithoutUserFundosInput>
  }

  export type TerrenoUpdateManyWithoutUserFundoNestedInput = {
    create?: XOR<TerrenoCreateWithoutUserFundoInput, TerrenoUncheckedCreateWithoutUserFundoInput> | TerrenoCreateWithoutUserFundoInput[] | TerrenoUncheckedCreateWithoutUserFundoInput[]
    connectOrCreate?: TerrenoCreateOrConnectWithoutUserFundoInput | TerrenoCreateOrConnectWithoutUserFundoInput[]
    upsert?: TerrenoUpsertWithWhereUniqueWithoutUserFundoInput | TerrenoUpsertWithWhereUniqueWithoutUserFundoInput[]
    createMany?: TerrenoCreateManyUserFundoInputEnvelope
    set?: TerrenoWhereUniqueInput | TerrenoWhereUniqueInput[]
    disconnect?: TerrenoWhereUniqueInput | TerrenoWhereUniqueInput[]
    delete?: TerrenoWhereUniqueInput | TerrenoWhereUniqueInput[]
    connect?: TerrenoWhereUniqueInput | TerrenoWhereUniqueInput[]
    update?: TerrenoUpdateWithWhereUniqueWithoutUserFundoInput | TerrenoUpdateWithWhereUniqueWithoutUserFundoInput[]
    updateMany?: TerrenoUpdateManyWithWhereWithoutUserFundoInput | TerrenoUpdateManyWithWhereWithoutUserFundoInput[]
    deleteMany?: TerrenoScalarWhereInput | TerrenoScalarWhereInput[]
  }

  export type TerrenoUncheckedUpdateManyWithoutUserFundoNestedInput = {
    create?: XOR<TerrenoCreateWithoutUserFundoInput, TerrenoUncheckedCreateWithoutUserFundoInput> | TerrenoCreateWithoutUserFundoInput[] | TerrenoUncheckedCreateWithoutUserFundoInput[]
    connectOrCreate?: TerrenoCreateOrConnectWithoutUserFundoInput | TerrenoCreateOrConnectWithoutUserFundoInput[]
    upsert?: TerrenoUpsertWithWhereUniqueWithoutUserFundoInput | TerrenoUpsertWithWhereUniqueWithoutUserFundoInput[]
    createMany?: TerrenoCreateManyUserFundoInputEnvelope
    set?: TerrenoWhereUniqueInput | TerrenoWhereUniqueInput[]
    disconnect?: TerrenoWhereUniqueInput | TerrenoWhereUniqueInput[]
    delete?: TerrenoWhereUniqueInput | TerrenoWhereUniqueInput[]
    connect?: TerrenoWhereUniqueInput | TerrenoWhereUniqueInput[]
    update?: TerrenoUpdateWithWhereUniqueWithoutUserFundoInput | TerrenoUpdateWithWhereUniqueWithoutUserFundoInput[]
    updateMany?: TerrenoUpdateManyWithWhereWithoutUserFundoInput | TerrenoUpdateManyWithWhereWithoutUserFundoInput[]
    deleteMany?: TerrenoScalarWhereInput | TerrenoScalarWhereInput[]
  }

  export type UserFundoCreateNestedOneWithoutTerrenosInput = {
    create?: XOR<UserFundoCreateWithoutTerrenosInput, UserFundoUncheckedCreateWithoutTerrenosInput>
    connectOrCreate?: UserFundoCreateOrConnectWithoutTerrenosInput
    connect?: UserFundoWhereUniqueInput
  }

  export type cuartelCreateNestedManyWithoutTerrenoInput = {
    create?: XOR<cuartelCreateWithoutTerrenoInput, cuartelUncheckedCreateWithoutTerrenoInput> | cuartelCreateWithoutTerrenoInput[] | cuartelUncheckedCreateWithoutTerrenoInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutTerrenoInput | cuartelCreateOrConnectWithoutTerrenoInput[]
    createMany?: cuartelCreateManyTerrenoInputEnvelope
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
  }

  export type cuartelUncheckedCreateNestedManyWithoutTerrenoInput = {
    create?: XOR<cuartelCreateWithoutTerrenoInput, cuartelUncheckedCreateWithoutTerrenoInput> | cuartelCreateWithoutTerrenoInput[] | cuartelUncheckedCreateWithoutTerrenoInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutTerrenoInput | cuartelCreateOrConnectWithoutTerrenoInput[]
    createMany?: cuartelCreateManyTerrenoInputEnvelope
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserFundoUpdateOneRequiredWithoutTerrenosNestedInput = {
    create?: XOR<UserFundoCreateWithoutTerrenosInput, UserFundoUncheckedCreateWithoutTerrenosInput>
    connectOrCreate?: UserFundoCreateOrConnectWithoutTerrenosInput
    upsert?: UserFundoUpsertWithoutTerrenosInput
    connect?: UserFundoWhereUniqueInput
    update?: XOR<XOR<UserFundoUpdateToOneWithWhereWithoutTerrenosInput, UserFundoUpdateWithoutTerrenosInput>, UserFundoUncheckedUpdateWithoutTerrenosInput>
  }

  export type cuartelUpdateManyWithoutTerrenoNestedInput = {
    create?: XOR<cuartelCreateWithoutTerrenoInput, cuartelUncheckedCreateWithoutTerrenoInput> | cuartelCreateWithoutTerrenoInput[] | cuartelUncheckedCreateWithoutTerrenoInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutTerrenoInput | cuartelCreateOrConnectWithoutTerrenoInput[]
    upsert?: cuartelUpsertWithWhereUniqueWithoutTerrenoInput | cuartelUpsertWithWhereUniqueWithoutTerrenoInput[]
    createMany?: cuartelCreateManyTerrenoInputEnvelope
    set?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    disconnect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    delete?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    update?: cuartelUpdateWithWhereUniqueWithoutTerrenoInput | cuartelUpdateWithWhereUniqueWithoutTerrenoInput[]
    updateMany?: cuartelUpdateManyWithWhereWithoutTerrenoInput | cuartelUpdateManyWithWhereWithoutTerrenoInput[]
    deleteMany?: cuartelScalarWhereInput | cuartelScalarWhereInput[]
  }

  export type cuartelUncheckedUpdateManyWithoutTerrenoNestedInput = {
    create?: XOR<cuartelCreateWithoutTerrenoInput, cuartelUncheckedCreateWithoutTerrenoInput> | cuartelCreateWithoutTerrenoInput[] | cuartelUncheckedCreateWithoutTerrenoInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutTerrenoInput | cuartelCreateOrConnectWithoutTerrenoInput[]
    upsert?: cuartelUpsertWithWhereUniqueWithoutTerrenoInput | cuartelUpsertWithWhereUniqueWithoutTerrenoInput[]
    createMany?: cuartelCreateManyTerrenoInputEnvelope
    set?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    disconnect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    delete?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    update?: cuartelUpdateWithWhereUniqueWithoutTerrenoInput | cuartelUpdateWithWhereUniqueWithoutTerrenoInput[]
    updateMany?: cuartelUpdateManyWithWhereWithoutTerrenoInput | cuartelUpdateManyWithWhereWithoutTerrenoInput[]
    deleteMany?: cuartelScalarWhereInput | cuartelScalarWhereInput[]
  }

  export type sueloPlantaCreateNestedManyWithoutSueloInput = {
    create?: XOR<sueloPlantaCreateWithoutSueloInput, sueloPlantaUncheckedCreateWithoutSueloInput> | sueloPlantaCreateWithoutSueloInput[] | sueloPlantaUncheckedCreateWithoutSueloInput[]
    connectOrCreate?: sueloPlantaCreateOrConnectWithoutSueloInput | sueloPlantaCreateOrConnectWithoutSueloInput[]
    createMany?: sueloPlantaCreateManySueloInputEnvelope
    connect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
  }

  export type cuartelCreateNestedManyWithoutSueloInput = {
    create?: XOR<cuartelCreateWithoutSueloInput, cuartelUncheckedCreateWithoutSueloInput> | cuartelCreateWithoutSueloInput[] | cuartelUncheckedCreateWithoutSueloInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutSueloInput | cuartelCreateOrConnectWithoutSueloInput[]
    createMany?: cuartelCreateManySueloInputEnvelope
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
  }

  export type sueloPlantaUncheckedCreateNestedManyWithoutSueloInput = {
    create?: XOR<sueloPlantaCreateWithoutSueloInput, sueloPlantaUncheckedCreateWithoutSueloInput> | sueloPlantaCreateWithoutSueloInput[] | sueloPlantaUncheckedCreateWithoutSueloInput[]
    connectOrCreate?: sueloPlantaCreateOrConnectWithoutSueloInput | sueloPlantaCreateOrConnectWithoutSueloInput[]
    createMany?: sueloPlantaCreateManySueloInputEnvelope
    connect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
  }

  export type cuartelUncheckedCreateNestedManyWithoutSueloInput = {
    create?: XOR<cuartelCreateWithoutSueloInput, cuartelUncheckedCreateWithoutSueloInput> | cuartelCreateWithoutSueloInput[] | cuartelUncheckedCreateWithoutSueloInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutSueloInput | cuartelCreateOrConnectWithoutSueloInput[]
    createMany?: cuartelCreateManySueloInputEnvelope
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
  }

  export type sueloPlantaUpdateManyWithoutSueloNestedInput = {
    create?: XOR<sueloPlantaCreateWithoutSueloInput, sueloPlantaUncheckedCreateWithoutSueloInput> | sueloPlantaCreateWithoutSueloInput[] | sueloPlantaUncheckedCreateWithoutSueloInput[]
    connectOrCreate?: sueloPlantaCreateOrConnectWithoutSueloInput | sueloPlantaCreateOrConnectWithoutSueloInput[]
    upsert?: sueloPlantaUpsertWithWhereUniqueWithoutSueloInput | sueloPlantaUpsertWithWhereUniqueWithoutSueloInput[]
    createMany?: sueloPlantaCreateManySueloInputEnvelope
    set?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    disconnect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    delete?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    connect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    update?: sueloPlantaUpdateWithWhereUniqueWithoutSueloInput | sueloPlantaUpdateWithWhereUniqueWithoutSueloInput[]
    updateMany?: sueloPlantaUpdateManyWithWhereWithoutSueloInput | sueloPlantaUpdateManyWithWhereWithoutSueloInput[]
    deleteMany?: sueloPlantaScalarWhereInput | sueloPlantaScalarWhereInput[]
  }

  export type cuartelUpdateManyWithoutSueloNestedInput = {
    create?: XOR<cuartelCreateWithoutSueloInput, cuartelUncheckedCreateWithoutSueloInput> | cuartelCreateWithoutSueloInput[] | cuartelUncheckedCreateWithoutSueloInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutSueloInput | cuartelCreateOrConnectWithoutSueloInput[]
    upsert?: cuartelUpsertWithWhereUniqueWithoutSueloInput | cuartelUpsertWithWhereUniqueWithoutSueloInput[]
    createMany?: cuartelCreateManySueloInputEnvelope
    set?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    disconnect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    delete?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    update?: cuartelUpdateWithWhereUniqueWithoutSueloInput | cuartelUpdateWithWhereUniqueWithoutSueloInput[]
    updateMany?: cuartelUpdateManyWithWhereWithoutSueloInput | cuartelUpdateManyWithWhereWithoutSueloInput[]
    deleteMany?: cuartelScalarWhereInput | cuartelScalarWhereInput[]
  }

  export type sueloPlantaUncheckedUpdateManyWithoutSueloNestedInput = {
    create?: XOR<sueloPlantaCreateWithoutSueloInput, sueloPlantaUncheckedCreateWithoutSueloInput> | sueloPlantaCreateWithoutSueloInput[] | sueloPlantaUncheckedCreateWithoutSueloInput[]
    connectOrCreate?: sueloPlantaCreateOrConnectWithoutSueloInput | sueloPlantaCreateOrConnectWithoutSueloInput[]
    upsert?: sueloPlantaUpsertWithWhereUniqueWithoutSueloInput | sueloPlantaUpsertWithWhereUniqueWithoutSueloInput[]
    createMany?: sueloPlantaCreateManySueloInputEnvelope
    set?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    disconnect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    delete?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    connect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    update?: sueloPlantaUpdateWithWhereUniqueWithoutSueloInput | sueloPlantaUpdateWithWhereUniqueWithoutSueloInput[]
    updateMany?: sueloPlantaUpdateManyWithWhereWithoutSueloInput | sueloPlantaUpdateManyWithWhereWithoutSueloInput[]
    deleteMany?: sueloPlantaScalarWhereInput | sueloPlantaScalarWhereInput[]
  }

  export type cuartelUncheckedUpdateManyWithoutSueloNestedInput = {
    create?: XOR<cuartelCreateWithoutSueloInput, cuartelUncheckedCreateWithoutSueloInput> | cuartelCreateWithoutSueloInput[] | cuartelUncheckedCreateWithoutSueloInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutSueloInput | cuartelCreateOrConnectWithoutSueloInput[]
    upsert?: cuartelUpsertWithWhereUniqueWithoutSueloInput | cuartelUpsertWithWhereUniqueWithoutSueloInput[]
    createMany?: cuartelCreateManySueloInputEnvelope
    set?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    disconnect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    delete?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    update?: cuartelUpdateWithWhereUniqueWithoutSueloInput | cuartelUpdateWithWhereUniqueWithoutSueloInput[]
    updateMany?: cuartelUpdateManyWithWhereWithoutSueloInput | cuartelUpdateManyWithWhereWithoutSueloInput[]
    deleteMany?: cuartelScalarWhereInput | cuartelScalarWhereInput[]
  }

  export type sueloPlantaCreateNestedManyWithoutPlantaInput = {
    create?: XOR<sueloPlantaCreateWithoutPlantaInput, sueloPlantaUncheckedCreateWithoutPlantaInput> | sueloPlantaCreateWithoutPlantaInput[] | sueloPlantaUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: sueloPlantaCreateOrConnectWithoutPlantaInput | sueloPlantaCreateOrConnectWithoutPlantaInput[]
    createMany?: sueloPlantaCreateManyPlantaInputEnvelope
    connect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
  }

  export type cuartelCreateNestedManyWithoutPlantaInput = {
    create?: XOR<cuartelCreateWithoutPlantaInput, cuartelUncheckedCreateWithoutPlantaInput> | cuartelCreateWithoutPlantaInput[] | cuartelUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutPlantaInput | cuartelCreateOrConnectWithoutPlantaInput[]
    createMany?: cuartelCreateManyPlantaInputEnvelope
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
  }

  export type sueloPlantaUncheckedCreateNestedManyWithoutPlantaInput = {
    create?: XOR<sueloPlantaCreateWithoutPlantaInput, sueloPlantaUncheckedCreateWithoutPlantaInput> | sueloPlantaCreateWithoutPlantaInput[] | sueloPlantaUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: sueloPlantaCreateOrConnectWithoutPlantaInput | sueloPlantaCreateOrConnectWithoutPlantaInput[]
    createMany?: sueloPlantaCreateManyPlantaInputEnvelope
    connect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
  }

  export type cuartelUncheckedCreateNestedManyWithoutPlantaInput = {
    create?: XOR<cuartelCreateWithoutPlantaInput, cuartelUncheckedCreateWithoutPlantaInput> | cuartelCreateWithoutPlantaInput[] | cuartelUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutPlantaInput | cuartelCreateOrConnectWithoutPlantaInput[]
    createMany?: cuartelCreateManyPlantaInputEnvelope
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sueloPlantaUpdateManyWithoutPlantaNestedInput = {
    create?: XOR<sueloPlantaCreateWithoutPlantaInput, sueloPlantaUncheckedCreateWithoutPlantaInput> | sueloPlantaCreateWithoutPlantaInput[] | sueloPlantaUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: sueloPlantaCreateOrConnectWithoutPlantaInput | sueloPlantaCreateOrConnectWithoutPlantaInput[]
    upsert?: sueloPlantaUpsertWithWhereUniqueWithoutPlantaInput | sueloPlantaUpsertWithWhereUniqueWithoutPlantaInput[]
    createMany?: sueloPlantaCreateManyPlantaInputEnvelope
    set?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    disconnect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    delete?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    connect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    update?: sueloPlantaUpdateWithWhereUniqueWithoutPlantaInput | sueloPlantaUpdateWithWhereUniqueWithoutPlantaInput[]
    updateMany?: sueloPlantaUpdateManyWithWhereWithoutPlantaInput | sueloPlantaUpdateManyWithWhereWithoutPlantaInput[]
    deleteMany?: sueloPlantaScalarWhereInput | sueloPlantaScalarWhereInput[]
  }

  export type cuartelUpdateManyWithoutPlantaNestedInput = {
    create?: XOR<cuartelCreateWithoutPlantaInput, cuartelUncheckedCreateWithoutPlantaInput> | cuartelCreateWithoutPlantaInput[] | cuartelUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutPlantaInput | cuartelCreateOrConnectWithoutPlantaInput[]
    upsert?: cuartelUpsertWithWhereUniqueWithoutPlantaInput | cuartelUpsertWithWhereUniqueWithoutPlantaInput[]
    createMany?: cuartelCreateManyPlantaInputEnvelope
    set?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    disconnect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    delete?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    update?: cuartelUpdateWithWhereUniqueWithoutPlantaInput | cuartelUpdateWithWhereUniqueWithoutPlantaInput[]
    updateMany?: cuartelUpdateManyWithWhereWithoutPlantaInput | cuartelUpdateManyWithWhereWithoutPlantaInput[]
    deleteMany?: cuartelScalarWhereInput | cuartelScalarWhereInput[]
  }

  export type sueloPlantaUncheckedUpdateManyWithoutPlantaNestedInput = {
    create?: XOR<sueloPlantaCreateWithoutPlantaInput, sueloPlantaUncheckedCreateWithoutPlantaInput> | sueloPlantaCreateWithoutPlantaInput[] | sueloPlantaUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: sueloPlantaCreateOrConnectWithoutPlantaInput | sueloPlantaCreateOrConnectWithoutPlantaInput[]
    upsert?: sueloPlantaUpsertWithWhereUniqueWithoutPlantaInput | sueloPlantaUpsertWithWhereUniqueWithoutPlantaInput[]
    createMany?: sueloPlantaCreateManyPlantaInputEnvelope
    set?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    disconnect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    delete?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    connect?: sueloPlantaWhereUniqueInput | sueloPlantaWhereUniqueInput[]
    update?: sueloPlantaUpdateWithWhereUniqueWithoutPlantaInput | sueloPlantaUpdateWithWhereUniqueWithoutPlantaInput[]
    updateMany?: sueloPlantaUpdateManyWithWhereWithoutPlantaInput | sueloPlantaUpdateManyWithWhereWithoutPlantaInput[]
    deleteMany?: sueloPlantaScalarWhereInput | sueloPlantaScalarWhereInput[]
  }

  export type cuartelUncheckedUpdateManyWithoutPlantaNestedInput = {
    create?: XOR<cuartelCreateWithoutPlantaInput, cuartelUncheckedCreateWithoutPlantaInput> | cuartelCreateWithoutPlantaInput[] | cuartelUncheckedCreateWithoutPlantaInput[]
    connectOrCreate?: cuartelCreateOrConnectWithoutPlantaInput | cuartelCreateOrConnectWithoutPlantaInput[]
    upsert?: cuartelUpsertWithWhereUniqueWithoutPlantaInput | cuartelUpsertWithWhereUniqueWithoutPlantaInput[]
    createMany?: cuartelCreateManyPlantaInputEnvelope
    set?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    disconnect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    delete?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    connect?: cuartelWhereUniqueInput | cuartelWhereUniqueInput[]
    update?: cuartelUpdateWithWhereUniqueWithoutPlantaInput | cuartelUpdateWithWhereUniqueWithoutPlantaInput[]
    updateMany?: cuartelUpdateManyWithWhereWithoutPlantaInput | cuartelUpdateManyWithWhereWithoutPlantaInput[]
    deleteMany?: cuartelScalarWhereInput | cuartelScalarWhereInput[]
  }

  export type SueloCreateNestedOneWithoutCuartelInput = {
    create?: XOR<SueloCreateWithoutCuartelInput, SueloUncheckedCreateWithoutCuartelInput>
    connectOrCreate?: SueloCreateOrConnectWithoutCuartelInput
    connect?: SueloWhereUniqueInput
  }

  export type TerrenoCreateNestedOneWithoutCuartelesInput = {
    create?: XOR<TerrenoCreateWithoutCuartelesInput, TerrenoUncheckedCreateWithoutCuartelesInput>
    connectOrCreate?: TerrenoCreateOrConnectWithoutCuartelesInput
    connect?: TerrenoWhereUniqueInput
  }

  export type TareaCreateNestedManyWithoutCuartelInput = {
    create?: XOR<TareaCreateWithoutCuartelInput, TareaUncheckedCreateWithoutCuartelInput> | TareaCreateWithoutCuartelInput[] | TareaUncheckedCreateWithoutCuartelInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutCuartelInput | TareaCreateOrConnectWithoutCuartelInput[]
    createMany?: TareaCreateManyCuartelInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type PlantaCreateNestedOneWithoutCuartelInput = {
    create?: XOR<PlantaCreateWithoutCuartelInput, PlantaUncheckedCreateWithoutCuartelInput>
    connectOrCreate?: PlantaCreateOrConnectWithoutCuartelInput
    connect?: PlantaWhereUniqueInput
  }

  export type TareaUncheckedCreateNestedManyWithoutCuartelInput = {
    create?: XOR<TareaCreateWithoutCuartelInput, TareaUncheckedCreateWithoutCuartelInput> | TareaCreateWithoutCuartelInput[] | TareaUncheckedCreateWithoutCuartelInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutCuartelInput | TareaCreateOrConnectWithoutCuartelInput[]
    createMany?: TareaCreateManyCuartelInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type SueloUpdateOneRequiredWithoutCuartelNestedInput = {
    create?: XOR<SueloCreateWithoutCuartelInput, SueloUncheckedCreateWithoutCuartelInput>
    connectOrCreate?: SueloCreateOrConnectWithoutCuartelInput
    upsert?: SueloUpsertWithoutCuartelInput
    connect?: SueloWhereUniqueInput
    update?: XOR<XOR<SueloUpdateToOneWithWhereWithoutCuartelInput, SueloUpdateWithoutCuartelInput>, SueloUncheckedUpdateWithoutCuartelInput>
  }

  export type TerrenoUpdateOneRequiredWithoutCuartelesNestedInput = {
    create?: XOR<TerrenoCreateWithoutCuartelesInput, TerrenoUncheckedCreateWithoutCuartelesInput>
    connectOrCreate?: TerrenoCreateOrConnectWithoutCuartelesInput
    upsert?: TerrenoUpsertWithoutCuartelesInput
    connect?: TerrenoWhereUniqueInput
    update?: XOR<XOR<TerrenoUpdateToOneWithWhereWithoutCuartelesInput, TerrenoUpdateWithoutCuartelesInput>, TerrenoUncheckedUpdateWithoutCuartelesInput>
  }

  export type TareaUpdateManyWithoutCuartelNestedInput = {
    create?: XOR<TareaCreateWithoutCuartelInput, TareaUncheckedCreateWithoutCuartelInput> | TareaCreateWithoutCuartelInput[] | TareaUncheckedCreateWithoutCuartelInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutCuartelInput | TareaCreateOrConnectWithoutCuartelInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutCuartelInput | TareaUpsertWithWhereUniqueWithoutCuartelInput[]
    createMany?: TareaCreateManyCuartelInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutCuartelInput | TareaUpdateWithWhereUniqueWithoutCuartelInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutCuartelInput | TareaUpdateManyWithWhereWithoutCuartelInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type PlantaUpdateOneRequiredWithoutCuartelNestedInput = {
    create?: XOR<PlantaCreateWithoutCuartelInput, PlantaUncheckedCreateWithoutCuartelInput>
    connectOrCreate?: PlantaCreateOrConnectWithoutCuartelInput
    upsert?: PlantaUpsertWithoutCuartelInput
    connect?: PlantaWhereUniqueInput
    update?: XOR<XOR<PlantaUpdateToOneWithWhereWithoutCuartelInput, PlantaUpdateWithoutCuartelInput>, PlantaUncheckedUpdateWithoutCuartelInput>
  }

  export type TareaUncheckedUpdateManyWithoutCuartelNestedInput = {
    create?: XOR<TareaCreateWithoutCuartelInput, TareaUncheckedCreateWithoutCuartelInput> | TareaCreateWithoutCuartelInput[] | TareaUncheckedCreateWithoutCuartelInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutCuartelInput | TareaCreateOrConnectWithoutCuartelInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutCuartelInput | TareaUpsertWithWhereUniqueWithoutCuartelInput[]
    createMany?: TareaCreateManyCuartelInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutCuartelInput | TareaUpdateWithWhereUniqueWithoutCuartelInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutCuartelInput | TareaUpdateManyWithWhereWithoutCuartelInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type PlantaCreateNestedOneWithoutSueloPlantaInput = {
    create?: XOR<PlantaCreateWithoutSueloPlantaInput, PlantaUncheckedCreateWithoutSueloPlantaInput>
    connectOrCreate?: PlantaCreateOrConnectWithoutSueloPlantaInput
    connect?: PlantaWhereUniqueInput
  }

  export type SueloCreateNestedOneWithoutSueloPlantaInput = {
    create?: XOR<SueloCreateWithoutSueloPlantaInput, SueloUncheckedCreateWithoutSueloPlantaInput>
    connectOrCreate?: SueloCreateOrConnectWithoutSueloPlantaInput
    connect?: SueloWhereUniqueInput
  }

  export type PlantaUpdateOneRequiredWithoutSueloPlantaNestedInput = {
    create?: XOR<PlantaCreateWithoutSueloPlantaInput, PlantaUncheckedCreateWithoutSueloPlantaInput>
    connectOrCreate?: PlantaCreateOrConnectWithoutSueloPlantaInput
    upsert?: PlantaUpsertWithoutSueloPlantaInput
    connect?: PlantaWhereUniqueInput
    update?: XOR<XOR<PlantaUpdateToOneWithWhereWithoutSueloPlantaInput, PlantaUpdateWithoutSueloPlantaInput>, PlantaUncheckedUpdateWithoutSueloPlantaInput>
  }

  export type SueloUpdateOneRequiredWithoutSueloPlantaNestedInput = {
    create?: XOR<SueloCreateWithoutSueloPlantaInput, SueloUncheckedCreateWithoutSueloPlantaInput>
    connectOrCreate?: SueloCreateOrConnectWithoutSueloPlantaInput
    upsert?: SueloUpsertWithoutSueloPlantaInput
    connect?: SueloWhereUniqueInput
    update?: XOR<XOR<SueloUpdateToOneWithWhereWithoutSueloPlantaInput, SueloUpdateWithoutSueloPlantaInput>, SueloUncheckedUpdateWithoutSueloPlantaInput>
  }

  export type TareaCreateNestedManyWithoutProductoInput = {
    create?: XOR<TareaCreateWithoutProductoInput, TareaUncheckedCreateWithoutProductoInput> | TareaCreateWithoutProductoInput[] | TareaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutProductoInput | TareaCreateOrConnectWithoutProductoInput[]
    createMany?: TareaCreateManyProductoInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type TareaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<TareaCreateWithoutProductoInput, TareaUncheckedCreateWithoutProductoInput> | TareaCreateWithoutProductoInput[] | TareaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutProductoInput | TareaCreateOrConnectWithoutProductoInput[]
    createMany?: TareaCreateManyProductoInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type TareaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<TareaCreateWithoutProductoInput, TareaUncheckedCreateWithoutProductoInput> | TareaCreateWithoutProductoInput[] | TareaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutProductoInput | TareaCreateOrConnectWithoutProductoInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutProductoInput | TareaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: TareaCreateManyProductoInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutProductoInput | TareaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutProductoInput | TareaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type TareaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<TareaCreateWithoutProductoInput, TareaUncheckedCreateWithoutProductoInput> | TareaCreateWithoutProductoInput[] | TareaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutProductoInput | TareaCreateOrConnectWithoutProductoInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutProductoInput | TareaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: TareaCreateManyProductoInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutProductoInput | TareaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutProductoInput | TareaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutTareaInput = {
    create?: XOR<ProductoCreateWithoutTareaInput, ProductoUncheckedCreateWithoutTareaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutTareaInput
    connect?: ProductoWhereUniqueInput
  }

  export type cuartelCreateNestedOneWithoutTareaInput = {
    create?: XOR<cuartelCreateWithoutTareaInput, cuartelUncheckedCreateWithoutTareaInput>
    connectOrCreate?: cuartelCreateOrConnectWithoutTareaInput
    connect?: cuartelWhereUniqueInput
  }

  export type OrdenAplicacionCreateNestedManyWithoutTareaInput = {
    create?: XOR<OrdenAplicacionCreateWithoutTareaInput, OrdenAplicacionUncheckedCreateWithoutTareaInput> | OrdenAplicacionCreateWithoutTareaInput[] | OrdenAplicacionUncheckedCreateWithoutTareaInput[]
    connectOrCreate?: OrdenAplicacionCreateOrConnectWithoutTareaInput | OrdenAplicacionCreateOrConnectWithoutTareaInput[]
    createMany?: OrdenAplicacionCreateManyTareaInputEnvelope
    connect?: OrdenAplicacionWhereUniqueInput | OrdenAplicacionWhereUniqueInput[]
  }

  export type OrdenAplicacionUncheckedCreateNestedManyWithoutTareaInput = {
    create?: XOR<OrdenAplicacionCreateWithoutTareaInput, OrdenAplicacionUncheckedCreateWithoutTareaInput> | OrdenAplicacionCreateWithoutTareaInput[] | OrdenAplicacionUncheckedCreateWithoutTareaInput[]
    connectOrCreate?: OrdenAplicacionCreateOrConnectWithoutTareaInput | OrdenAplicacionCreateOrConnectWithoutTareaInput[]
    createMany?: OrdenAplicacionCreateManyTareaInputEnvelope
    connect?: OrdenAplicacionWhereUniqueInput | OrdenAplicacionWhereUniqueInput[]
  }

  export type ProductoUpdateOneRequiredWithoutTareaNestedInput = {
    create?: XOR<ProductoCreateWithoutTareaInput, ProductoUncheckedCreateWithoutTareaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutTareaInput
    upsert?: ProductoUpsertWithoutTareaInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutTareaInput, ProductoUpdateWithoutTareaInput>, ProductoUncheckedUpdateWithoutTareaInput>
  }

  export type cuartelUpdateOneRequiredWithoutTareaNestedInput = {
    create?: XOR<cuartelCreateWithoutTareaInput, cuartelUncheckedCreateWithoutTareaInput>
    connectOrCreate?: cuartelCreateOrConnectWithoutTareaInput
    upsert?: cuartelUpsertWithoutTareaInput
    connect?: cuartelWhereUniqueInput
    update?: XOR<XOR<cuartelUpdateToOneWithWhereWithoutTareaInput, cuartelUpdateWithoutTareaInput>, cuartelUncheckedUpdateWithoutTareaInput>
  }

  export type OrdenAplicacionUpdateManyWithoutTareaNestedInput = {
    create?: XOR<OrdenAplicacionCreateWithoutTareaInput, OrdenAplicacionUncheckedCreateWithoutTareaInput> | OrdenAplicacionCreateWithoutTareaInput[] | OrdenAplicacionUncheckedCreateWithoutTareaInput[]
    connectOrCreate?: OrdenAplicacionCreateOrConnectWithoutTareaInput | OrdenAplicacionCreateOrConnectWithoutTareaInput[]
    upsert?: OrdenAplicacionUpsertWithWhereUniqueWithoutTareaInput | OrdenAplicacionUpsertWithWhereUniqueWithoutTareaInput[]
    createMany?: OrdenAplicacionCreateManyTareaInputEnvelope
    set?: OrdenAplicacionWhereUniqueInput | OrdenAplicacionWhereUniqueInput[]
    disconnect?: OrdenAplicacionWhereUniqueInput | OrdenAplicacionWhereUniqueInput[]
    delete?: OrdenAplicacionWhereUniqueInput | OrdenAplicacionWhereUniqueInput[]
    connect?: OrdenAplicacionWhereUniqueInput | OrdenAplicacionWhereUniqueInput[]
    update?: OrdenAplicacionUpdateWithWhereUniqueWithoutTareaInput | OrdenAplicacionUpdateWithWhereUniqueWithoutTareaInput[]
    updateMany?: OrdenAplicacionUpdateManyWithWhereWithoutTareaInput | OrdenAplicacionUpdateManyWithWhereWithoutTareaInput[]
    deleteMany?: OrdenAplicacionScalarWhereInput | OrdenAplicacionScalarWhereInput[]
  }

  export type OrdenAplicacionUncheckedUpdateManyWithoutTareaNestedInput = {
    create?: XOR<OrdenAplicacionCreateWithoutTareaInput, OrdenAplicacionUncheckedCreateWithoutTareaInput> | OrdenAplicacionCreateWithoutTareaInput[] | OrdenAplicacionUncheckedCreateWithoutTareaInput[]
    connectOrCreate?: OrdenAplicacionCreateOrConnectWithoutTareaInput | OrdenAplicacionCreateOrConnectWithoutTareaInput[]
    upsert?: OrdenAplicacionUpsertWithWhereUniqueWithoutTareaInput | OrdenAplicacionUpsertWithWhereUniqueWithoutTareaInput[]
    createMany?: OrdenAplicacionCreateManyTareaInputEnvelope
    set?: OrdenAplicacionWhereUniqueInput | OrdenAplicacionWhereUniqueInput[]
    disconnect?: OrdenAplicacionWhereUniqueInput | OrdenAplicacionWhereUniqueInput[]
    delete?: OrdenAplicacionWhereUniqueInput | OrdenAplicacionWhereUniqueInput[]
    connect?: OrdenAplicacionWhereUniqueInput | OrdenAplicacionWhereUniqueInput[]
    update?: OrdenAplicacionUpdateWithWhereUniqueWithoutTareaInput | OrdenAplicacionUpdateWithWhereUniqueWithoutTareaInput[]
    updateMany?: OrdenAplicacionUpdateManyWithWhereWithoutTareaInput | OrdenAplicacionUpdateManyWithWhereWithoutTareaInput[]
    deleteMany?: OrdenAplicacionScalarWhereInput | OrdenAplicacionScalarWhereInput[]
  }

  export type TareaCreateNestedOneWithoutOrdenAplicacionInput = {
    create?: XOR<TareaCreateWithoutOrdenAplicacionInput, TareaUncheckedCreateWithoutOrdenAplicacionInput>
    connectOrCreate?: TareaCreateOrConnectWithoutOrdenAplicacionInput
    connect?: TareaWhereUniqueInput
  }

  export type TareaUpdateOneRequiredWithoutOrdenAplicacionNestedInput = {
    create?: XOR<TareaCreateWithoutOrdenAplicacionInput, TareaUncheckedCreateWithoutOrdenAplicacionInput>
    connectOrCreate?: TareaCreateOrConnectWithoutOrdenAplicacionInput
    upsert?: TareaUpsertWithoutOrdenAplicacionInput
    connect?: TareaWhereUniqueInput
    update?: XOR<XOR<TareaUpdateToOneWithWhereWithoutOrdenAplicacionInput, TareaUpdateWithoutOrdenAplicacionInput>, TareaUncheckedUpdateWithoutOrdenAplicacionInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserFundoCreateWithoutUserInput = {
    id?: string
    assignedAt?: Date | string
    fundo: FundoCreateNestedOneWithoutUserFundosInput
    rol: RolCreateNestedOneWithoutUserFundosInput
    terrenos?: TerrenoCreateNestedManyWithoutUserFundoInput
  }

  export type UserFundoUncheckedCreateWithoutUserInput = {
    id?: string
    fundoId: string
    assignedAt?: Date | string
    rolId: string
    terrenos?: TerrenoUncheckedCreateNestedManyWithoutUserFundoInput
  }

  export type UserFundoCreateOrConnectWithoutUserInput = {
    where: UserFundoWhereUniqueInput
    create: XOR<UserFundoCreateWithoutUserInput, UserFundoUncheckedCreateWithoutUserInput>
  }

  export type UserFundoCreateManyUserInputEnvelope = {
    data: UserFundoCreateManyUserInput | UserFundoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFundoUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFundoWhereUniqueInput
    update: XOR<UserFundoUpdateWithoutUserInput, UserFundoUncheckedUpdateWithoutUserInput>
    create: XOR<UserFundoCreateWithoutUserInput, UserFundoUncheckedCreateWithoutUserInput>
  }

  export type UserFundoUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFundoWhereUniqueInput
    data: XOR<UserFundoUpdateWithoutUserInput, UserFundoUncheckedUpdateWithoutUserInput>
  }

  export type UserFundoUpdateManyWithWhereWithoutUserInput = {
    where: UserFundoScalarWhereInput
    data: XOR<UserFundoUpdateManyMutationInput, UserFundoUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFundoScalarWhereInput = {
    AND?: UserFundoScalarWhereInput | UserFundoScalarWhereInput[]
    OR?: UserFundoScalarWhereInput[]
    NOT?: UserFundoScalarWhereInput | UserFundoScalarWhereInput[]
    id?: StringFilter<"UserFundo"> | string
    userId?: StringFilter<"UserFundo"> | string
    fundoId?: StringFilter<"UserFundo"> | string
    assignedAt?: DateTimeFilter<"UserFundo"> | Date | string
    rolId?: StringFilter<"UserFundo"> | string
  }

  export type UserFundoCreateWithoutRolInput = {
    id?: string
    assignedAt?: Date | string
    fundo: FundoCreateNestedOneWithoutUserFundosInput
    user: UserCreateNestedOneWithoutUserFundosInput
    terrenos?: TerrenoCreateNestedManyWithoutUserFundoInput
  }

  export type UserFundoUncheckedCreateWithoutRolInput = {
    id?: string
    userId: string
    fundoId: string
    assignedAt?: Date | string
    terrenos?: TerrenoUncheckedCreateNestedManyWithoutUserFundoInput
  }

  export type UserFundoCreateOrConnectWithoutRolInput = {
    where: UserFundoWhereUniqueInput
    create: XOR<UserFundoCreateWithoutRolInput, UserFundoUncheckedCreateWithoutRolInput>
  }

  export type UserFundoCreateManyRolInputEnvelope = {
    data: UserFundoCreateManyRolInput | UserFundoCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UserFundoUpsertWithWhereUniqueWithoutRolInput = {
    where: UserFundoWhereUniqueInput
    update: XOR<UserFundoUpdateWithoutRolInput, UserFundoUncheckedUpdateWithoutRolInput>
    create: XOR<UserFundoCreateWithoutRolInput, UserFundoUncheckedCreateWithoutRolInput>
  }

  export type UserFundoUpdateWithWhereUniqueWithoutRolInput = {
    where: UserFundoWhereUniqueInput
    data: XOR<UserFundoUpdateWithoutRolInput, UserFundoUncheckedUpdateWithoutRolInput>
  }

  export type UserFundoUpdateManyWithWhereWithoutRolInput = {
    where: UserFundoScalarWhereInput
    data: XOR<UserFundoUpdateManyMutationInput, UserFundoUncheckedUpdateManyWithoutRolInput>
  }

  export type UserFundoCreateWithoutFundoInput = {
    id?: string
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutUserFundosInput
    rol: RolCreateNestedOneWithoutUserFundosInput
    terrenos?: TerrenoCreateNestedManyWithoutUserFundoInput
  }

  export type UserFundoUncheckedCreateWithoutFundoInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
    rolId: string
    terrenos?: TerrenoUncheckedCreateNestedManyWithoutUserFundoInput
  }

  export type UserFundoCreateOrConnectWithoutFundoInput = {
    where: UserFundoWhereUniqueInput
    create: XOR<UserFundoCreateWithoutFundoInput, UserFundoUncheckedCreateWithoutFundoInput>
  }

  export type UserFundoCreateManyFundoInputEnvelope = {
    data: UserFundoCreateManyFundoInput | UserFundoCreateManyFundoInput[]
    skipDuplicates?: boolean
  }

  export type UserFundoUpsertWithWhereUniqueWithoutFundoInput = {
    where: UserFundoWhereUniqueInput
    update: XOR<UserFundoUpdateWithoutFundoInput, UserFundoUncheckedUpdateWithoutFundoInput>
    create: XOR<UserFundoCreateWithoutFundoInput, UserFundoUncheckedCreateWithoutFundoInput>
  }

  export type UserFundoUpdateWithWhereUniqueWithoutFundoInput = {
    where: UserFundoWhereUniqueInput
    data: XOR<UserFundoUpdateWithoutFundoInput, UserFundoUncheckedUpdateWithoutFundoInput>
  }

  export type UserFundoUpdateManyWithWhereWithoutFundoInput = {
    where: UserFundoScalarWhereInput
    data: XOR<UserFundoUpdateManyMutationInput, UserFundoUncheckedUpdateManyWithoutFundoInput>
  }

  export type FundoCreateWithoutUserFundosInput = {
    id?: string
    nombre: string
    direccion: string
    rut: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
  }

  export type FundoUncheckedCreateWithoutUserFundosInput = {
    id?: string
    nombre: string
    direccion: string
    rut: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
  }

  export type FundoCreateOrConnectWithoutUserFundosInput = {
    where: FundoWhereUniqueInput
    create: XOR<FundoCreateWithoutUserFundosInput, FundoUncheckedCreateWithoutUserFundosInput>
  }

  export type UserCreateWithoutUserFundosInput = {
    id?: string
    nombre: string
    apellido: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUserFundosInput = {
    id?: string
    nombre: string
    apellido: string
    email: string
    password: string
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserFundosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserFundosInput, UserUncheckedCreateWithoutUserFundosInput>
  }

  export type RolCreateWithoutUserFundosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
  }

  export type RolUncheckedCreateWithoutUserFundosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
  }

  export type RolCreateOrConnectWithoutUserFundosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUserFundosInput, RolUncheckedCreateWithoutUserFundosInput>
  }

  export type TerrenoCreateWithoutUserFundoInput = {
    id?: string
    areaHectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
    lat: number
    lon: number
    codeSagGrower: string
    cuarteles?: cuartelCreateNestedManyWithoutTerrenoInput
  }

  export type TerrenoUncheckedCreateWithoutUserFundoInput = {
    id?: string
    areaHectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
    lat: number
    lon: number
    codeSagGrower: string
    cuarteles?: cuartelUncheckedCreateNestedManyWithoutTerrenoInput
  }

  export type TerrenoCreateOrConnectWithoutUserFundoInput = {
    where: TerrenoWhereUniqueInput
    create: XOR<TerrenoCreateWithoutUserFundoInput, TerrenoUncheckedCreateWithoutUserFundoInput>
  }

  export type TerrenoCreateManyUserFundoInputEnvelope = {
    data: TerrenoCreateManyUserFundoInput | TerrenoCreateManyUserFundoInput[]
    skipDuplicates?: boolean
  }

  export type FundoUpsertWithoutUserFundosInput = {
    update: XOR<FundoUpdateWithoutUserFundosInput, FundoUncheckedUpdateWithoutUserFundosInput>
    create: XOR<FundoCreateWithoutUserFundosInput, FundoUncheckedCreateWithoutUserFundosInput>
    where?: FundoWhereInput
  }

  export type FundoUpdateToOneWithWhereWithoutUserFundosInput = {
    where?: FundoWhereInput
    data: XOR<FundoUpdateWithoutUserFundosInput, FundoUncheckedUpdateWithoutUserFundosInput>
  }

  export type FundoUpdateWithoutUserFundosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
  }

  export type FundoUncheckedUpdateWithoutUserFundosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    rut?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutUserFundosInput = {
    update: XOR<UserUpdateWithoutUserFundosInput, UserUncheckedUpdateWithoutUserFundosInput>
    create: XOR<UserCreateWithoutUserFundosInput, UserUncheckedCreateWithoutUserFundosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserFundosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserFundosInput, UserUncheckedUpdateWithoutUserFundosInput>
  }

  export type UserUpdateWithoutUserFundosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserFundosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolUpsertWithoutUserFundosInput = {
    update: XOR<RolUpdateWithoutUserFundosInput, RolUncheckedUpdateWithoutUserFundosInput>
    create: XOR<RolCreateWithoutUserFundosInput, RolUncheckedCreateWithoutUserFundosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUserFundosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUserFundosInput, RolUncheckedUpdateWithoutUserFundosInput>
  }

  export type RolUpdateWithoutUserFundosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolUncheckedUpdateWithoutUserFundosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TerrenoUpsertWithWhereUniqueWithoutUserFundoInput = {
    where: TerrenoWhereUniqueInput
    update: XOR<TerrenoUpdateWithoutUserFundoInput, TerrenoUncheckedUpdateWithoutUserFundoInput>
    create: XOR<TerrenoCreateWithoutUserFundoInput, TerrenoUncheckedCreateWithoutUserFundoInput>
  }

  export type TerrenoUpdateWithWhereUniqueWithoutUserFundoInput = {
    where: TerrenoWhereUniqueInput
    data: XOR<TerrenoUpdateWithoutUserFundoInput, TerrenoUncheckedUpdateWithoutUserFundoInput>
  }

  export type TerrenoUpdateManyWithWhereWithoutUserFundoInput = {
    where: TerrenoScalarWhereInput
    data: XOR<TerrenoUpdateManyMutationInput, TerrenoUncheckedUpdateManyWithoutUserFundoInput>
  }

  export type TerrenoScalarWhereInput = {
    AND?: TerrenoScalarWhereInput | TerrenoScalarWhereInput[]
    OR?: TerrenoScalarWhereInput[]
    NOT?: TerrenoScalarWhereInput | TerrenoScalarWhereInput[]
    id?: StringFilter<"Terreno"> | string
    areaHectareas?: FloatFilter<"Terreno"> | number
    createdAt?: DateTimeFilter<"Terreno"> | Date | string
    updatedAt?: DateTimeFilter<"Terreno"> | Date | string
    creadoPor?: StringFilter<"Terreno"> | string
    lat?: FloatFilter<"Terreno"> | number
    lon?: FloatFilter<"Terreno"> | number
    codeSagGrower?: StringFilter<"Terreno"> | string
    userFundoId?: StringFilter<"Terreno"> | string
  }

  export type UserFundoCreateWithoutTerrenosInput = {
    id?: string
    assignedAt?: Date | string
    fundo: FundoCreateNestedOneWithoutUserFundosInput
    user: UserCreateNestedOneWithoutUserFundosInput
    rol: RolCreateNestedOneWithoutUserFundosInput
  }

  export type UserFundoUncheckedCreateWithoutTerrenosInput = {
    id?: string
    userId: string
    fundoId: string
    assignedAt?: Date | string
    rolId: string
  }

  export type UserFundoCreateOrConnectWithoutTerrenosInput = {
    where: UserFundoWhereUniqueInput
    create: XOR<UserFundoCreateWithoutTerrenosInput, UserFundoUncheckedCreateWithoutTerrenosInput>
  }

  export type cuartelCreateWithoutTerrenoInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    suelo: SueloCreateNestedOneWithoutCuartelInput
    tarea?: TareaCreateNestedManyWithoutCuartelInput
    planta: PlantaCreateNestedOneWithoutCuartelInput
  }

  export type cuartelUncheckedCreateWithoutTerrenoInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sueloId: string
    plantaId: string
    tarea?: TareaUncheckedCreateNestedManyWithoutCuartelInput
  }

  export type cuartelCreateOrConnectWithoutTerrenoInput = {
    where: cuartelWhereUniqueInput
    create: XOR<cuartelCreateWithoutTerrenoInput, cuartelUncheckedCreateWithoutTerrenoInput>
  }

  export type cuartelCreateManyTerrenoInputEnvelope = {
    data: cuartelCreateManyTerrenoInput | cuartelCreateManyTerrenoInput[]
    skipDuplicates?: boolean
  }

  export type UserFundoUpsertWithoutTerrenosInput = {
    update: XOR<UserFundoUpdateWithoutTerrenosInput, UserFundoUncheckedUpdateWithoutTerrenosInput>
    create: XOR<UserFundoCreateWithoutTerrenosInput, UserFundoUncheckedCreateWithoutTerrenosInput>
    where?: UserFundoWhereInput
  }

  export type UserFundoUpdateToOneWithWhereWithoutTerrenosInput = {
    where?: UserFundoWhereInput
    data: XOR<UserFundoUpdateWithoutTerrenosInput, UserFundoUncheckedUpdateWithoutTerrenosInput>
  }

  export type UserFundoUpdateWithoutTerrenosInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fundo?: FundoUpdateOneRequiredWithoutUserFundosNestedInput
    user?: UserUpdateOneRequiredWithoutUserFundosNestedInput
    rol?: RolUpdateOneRequiredWithoutUserFundosNestedInput
  }

  export type UserFundoUncheckedUpdateWithoutTerrenosInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundoId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: StringFieldUpdateOperationsInput | string
  }

  export type cuartelUpsertWithWhereUniqueWithoutTerrenoInput = {
    where: cuartelWhereUniqueInput
    update: XOR<cuartelUpdateWithoutTerrenoInput, cuartelUncheckedUpdateWithoutTerrenoInput>
    create: XOR<cuartelCreateWithoutTerrenoInput, cuartelUncheckedCreateWithoutTerrenoInput>
  }

  export type cuartelUpdateWithWhereUniqueWithoutTerrenoInput = {
    where: cuartelWhereUniqueInput
    data: XOR<cuartelUpdateWithoutTerrenoInput, cuartelUncheckedUpdateWithoutTerrenoInput>
  }

  export type cuartelUpdateManyWithWhereWithoutTerrenoInput = {
    where: cuartelScalarWhereInput
    data: XOR<cuartelUpdateManyMutationInput, cuartelUncheckedUpdateManyWithoutTerrenoInput>
  }

  export type cuartelScalarWhereInput = {
    AND?: cuartelScalarWhereInput | cuartelScalarWhereInput[]
    OR?: cuartelScalarWhereInput[]
    NOT?: cuartelScalarWhereInput | cuartelScalarWhereInput[]
    id?: StringFilter<"cuartel"> | string
    hectareas?: FloatFilter<"cuartel"> | number
    createdAt?: DateTimeFilter<"cuartel"> | Date | string
    updatedAt?: DateTimeFilter<"cuartel"> | Date | string
    terrenoId?: StringFilter<"cuartel"> | string
    sueloId?: StringFilter<"cuartel"> | string
    plantaId?: StringFilter<"cuartel"> | string
  }

  export type sueloPlantaCreateWithoutSueloInput = {
    id?: string
    compatibilidad: string
    planta: PlantaCreateNestedOneWithoutSueloPlantaInput
  }

  export type sueloPlantaUncheckedCreateWithoutSueloInput = {
    id?: string
    compatibilidad: string
    plantaId: string
  }

  export type sueloPlantaCreateOrConnectWithoutSueloInput = {
    where: sueloPlantaWhereUniqueInput
    create: XOR<sueloPlantaCreateWithoutSueloInput, sueloPlantaUncheckedCreateWithoutSueloInput>
  }

  export type sueloPlantaCreateManySueloInputEnvelope = {
    data: sueloPlantaCreateManySueloInput | sueloPlantaCreateManySueloInput[]
    skipDuplicates?: boolean
  }

  export type cuartelCreateWithoutSueloInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    terreno: TerrenoCreateNestedOneWithoutCuartelesInput
    tarea?: TareaCreateNestedManyWithoutCuartelInput
    planta: PlantaCreateNestedOneWithoutCuartelInput
  }

  export type cuartelUncheckedCreateWithoutSueloInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    terrenoId: string
    plantaId: string
    tarea?: TareaUncheckedCreateNestedManyWithoutCuartelInput
  }

  export type cuartelCreateOrConnectWithoutSueloInput = {
    where: cuartelWhereUniqueInput
    create: XOR<cuartelCreateWithoutSueloInput, cuartelUncheckedCreateWithoutSueloInput>
  }

  export type cuartelCreateManySueloInputEnvelope = {
    data: cuartelCreateManySueloInput | cuartelCreateManySueloInput[]
    skipDuplicates?: boolean
  }

  export type sueloPlantaUpsertWithWhereUniqueWithoutSueloInput = {
    where: sueloPlantaWhereUniqueInput
    update: XOR<sueloPlantaUpdateWithoutSueloInput, sueloPlantaUncheckedUpdateWithoutSueloInput>
    create: XOR<sueloPlantaCreateWithoutSueloInput, sueloPlantaUncheckedCreateWithoutSueloInput>
  }

  export type sueloPlantaUpdateWithWhereUniqueWithoutSueloInput = {
    where: sueloPlantaWhereUniqueInput
    data: XOR<sueloPlantaUpdateWithoutSueloInput, sueloPlantaUncheckedUpdateWithoutSueloInput>
  }

  export type sueloPlantaUpdateManyWithWhereWithoutSueloInput = {
    where: sueloPlantaScalarWhereInput
    data: XOR<sueloPlantaUpdateManyMutationInput, sueloPlantaUncheckedUpdateManyWithoutSueloInput>
  }

  export type sueloPlantaScalarWhereInput = {
    AND?: sueloPlantaScalarWhereInput | sueloPlantaScalarWhereInput[]
    OR?: sueloPlantaScalarWhereInput[]
    NOT?: sueloPlantaScalarWhereInput | sueloPlantaScalarWhereInput[]
    id?: StringFilter<"sueloPlanta"> | string
    compatibilidad?: StringFilter<"sueloPlanta"> | string
    plantaId?: StringFilter<"sueloPlanta"> | string
    sueloId?: StringFilter<"sueloPlanta"> | string
  }

  export type cuartelUpsertWithWhereUniqueWithoutSueloInput = {
    where: cuartelWhereUniqueInput
    update: XOR<cuartelUpdateWithoutSueloInput, cuartelUncheckedUpdateWithoutSueloInput>
    create: XOR<cuartelCreateWithoutSueloInput, cuartelUncheckedCreateWithoutSueloInput>
  }

  export type cuartelUpdateWithWhereUniqueWithoutSueloInput = {
    where: cuartelWhereUniqueInput
    data: XOR<cuartelUpdateWithoutSueloInput, cuartelUncheckedUpdateWithoutSueloInput>
  }

  export type cuartelUpdateManyWithWhereWithoutSueloInput = {
    where: cuartelScalarWhereInput
    data: XOR<cuartelUpdateManyMutationInput, cuartelUncheckedUpdateManyWithoutSueloInput>
  }

  export type sueloPlantaCreateWithoutPlantaInput = {
    id?: string
    compatibilidad: string
    suelo: SueloCreateNestedOneWithoutSueloPlantaInput
  }

  export type sueloPlantaUncheckedCreateWithoutPlantaInput = {
    id?: string
    compatibilidad: string
    sueloId: string
  }

  export type sueloPlantaCreateOrConnectWithoutPlantaInput = {
    where: sueloPlantaWhereUniqueInput
    create: XOR<sueloPlantaCreateWithoutPlantaInput, sueloPlantaUncheckedCreateWithoutPlantaInput>
  }

  export type sueloPlantaCreateManyPlantaInputEnvelope = {
    data: sueloPlantaCreateManyPlantaInput | sueloPlantaCreateManyPlantaInput[]
    skipDuplicates?: boolean
  }

  export type cuartelCreateWithoutPlantaInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    suelo: SueloCreateNestedOneWithoutCuartelInput
    terreno: TerrenoCreateNestedOneWithoutCuartelesInput
    tarea?: TareaCreateNestedManyWithoutCuartelInput
  }

  export type cuartelUncheckedCreateWithoutPlantaInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    terrenoId: string
    sueloId: string
    tarea?: TareaUncheckedCreateNestedManyWithoutCuartelInput
  }

  export type cuartelCreateOrConnectWithoutPlantaInput = {
    where: cuartelWhereUniqueInput
    create: XOR<cuartelCreateWithoutPlantaInput, cuartelUncheckedCreateWithoutPlantaInput>
  }

  export type cuartelCreateManyPlantaInputEnvelope = {
    data: cuartelCreateManyPlantaInput | cuartelCreateManyPlantaInput[]
    skipDuplicates?: boolean
  }

  export type sueloPlantaUpsertWithWhereUniqueWithoutPlantaInput = {
    where: sueloPlantaWhereUniqueInput
    update: XOR<sueloPlantaUpdateWithoutPlantaInput, sueloPlantaUncheckedUpdateWithoutPlantaInput>
    create: XOR<sueloPlantaCreateWithoutPlantaInput, sueloPlantaUncheckedCreateWithoutPlantaInput>
  }

  export type sueloPlantaUpdateWithWhereUniqueWithoutPlantaInput = {
    where: sueloPlantaWhereUniqueInput
    data: XOR<sueloPlantaUpdateWithoutPlantaInput, sueloPlantaUncheckedUpdateWithoutPlantaInput>
  }

  export type sueloPlantaUpdateManyWithWhereWithoutPlantaInput = {
    where: sueloPlantaScalarWhereInput
    data: XOR<sueloPlantaUpdateManyMutationInput, sueloPlantaUncheckedUpdateManyWithoutPlantaInput>
  }

  export type cuartelUpsertWithWhereUniqueWithoutPlantaInput = {
    where: cuartelWhereUniqueInput
    update: XOR<cuartelUpdateWithoutPlantaInput, cuartelUncheckedUpdateWithoutPlantaInput>
    create: XOR<cuartelCreateWithoutPlantaInput, cuartelUncheckedCreateWithoutPlantaInput>
  }

  export type cuartelUpdateWithWhereUniqueWithoutPlantaInput = {
    where: cuartelWhereUniqueInput
    data: XOR<cuartelUpdateWithoutPlantaInput, cuartelUncheckedUpdateWithoutPlantaInput>
  }

  export type cuartelUpdateManyWithWhereWithoutPlantaInput = {
    where: cuartelScalarWhereInput
    data: XOR<cuartelUpdateManyMutationInput, cuartelUncheckedUpdateManyWithoutPlantaInput>
  }

  export type SueloCreateWithoutCuartelInput = {
    id?: string
    tipo: string
    caracteristicas: string
    sueloPlanta?: sueloPlantaCreateNestedManyWithoutSueloInput
  }

  export type SueloUncheckedCreateWithoutCuartelInput = {
    id?: string
    tipo: string
    caracteristicas: string
    sueloPlanta?: sueloPlantaUncheckedCreateNestedManyWithoutSueloInput
  }

  export type SueloCreateOrConnectWithoutCuartelInput = {
    where: SueloWhereUniqueInput
    create: XOR<SueloCreateWithoutCuartelInput, SueloUncheckedCreateWithoutCuartelInput>
  }

  export type TerrenoCreateWithoutCuartelesInput = {
    id?: string
    areaHectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
    lat: number
    lon: number
    codeSagGrower: string
    userFundo: UserFundoCreateNestedOneWithoutTerrenosInput
  }

  export type TerrenoUncheckedCreateWithoutCuartelesInput = {
    id?: string
    areaHectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
    lat: number
    lon: number
    codeSagGrower: string
    userFundoId: string
  }

  export type TerrenoCreateOrConnectWithoutCuartelesInput = {
    where: TerrenoWhereUniqueInput
    create: XOR<TerrenoCreateWithoutCuartelesInput, TerrenoUncheckedCreateWithoutCuartelesInput>
  }

  export type TareaCreateWithoutCuartelInput = {
    id?: string
    tipo: string
    descripcion: string
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    producto: ProductoCreateNestedOneWithoutTareaInput
    ordenAplicacion?: OrdenAplicacionCreateNestedManyWithoutTareaInput
  }

  export type TareaUncheckedCreateWithoutCuartelInput = {
    id?: string
    tipo: string
    descripcion: string
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    productoId: string
    ordenAplicacion?: OrdenAplicacionUncheckedCreateNestedManyWithoutTareaInput
  }

  export type TareaCreateOrConnectWithoutCuartelInput = {
    where: TareaWhereUniqueInput
    create: XOR<TareaCreateWithoutCuartelInput, TareaUncheckedCreateWithoutCuartelInput>
  }

  export type TareaCreateManyCuartelInputEnvelope = {
    data: TareaCreateManyCuartelInput | TareaCreateManyCuartelInput[]
    skipDuplicates?: boolean
  }

  export type PlantaCreateWithoutCuartelInput = {
    id?: string
    nombre: string
    espacioAncho: number
    espacioLargo: number
    produccion: number
    descripcion: string
    variedad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sueloPlanta?: sueloPlantaCreateNestedManyWithoutPlantaInput
  }

  export type PlantaUncheckedCreateWithoutCuartelInput = {
    id?: string
    nombre: string
    espacioAncho: number
    espacioLargo: number
    produccion: number
    descripcion: string
    variedad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sueloPlanta?: sueloPlantaUncheckedCreateNestedManyWithoutPlantaInput
  }

  export type PlantaCreateOrConnectWithoutCuartelInput = {
    where: PlantaWhereUniqueInput
    create: XOR<PlantaCreateWithoutCuartelInput, PlantaUncheckedCreateWithoutCuartelInput>
  }

  export type SueloUpsertWithoutCuartelInput = {
    update: XOR<SueloUpdateWithoutCuartelInput, SueloUncheckedUpdateWithoutCuartelInput>
    create: XOR<SueloCreateWithoutCuartelInput, SueloUncheckedCreateWithoutCuartelInput>
    where?: SueloWhereInput
  }

  export type SueloUpdateToOneWithWhereWithoutCuartelInput = {
    where?: SueloWhereInput
    data: XOR<SueloUpdateWithoutCuartelInput, SueloUncheckedUpdateWithoutCuartelInput>
  }

  export type SueloUpdateWithoutCuartelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caracteristicas?: StringFieldUpdateOperationsInput | string
    sueloPlanta?: sueloPlantaUpdateManyWithoutSueloNestedInput
  }

  export type SueloUncheckedUpdateWithoutCuartelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caracteristicas?: StringFieldUpdateOperationsInput | string
    sueloPlanta?: sueloPlantaUncheckedUpdateManyWithoutSueloNestedInput
  }

  export type TerrenoUpsertWithoutCuartelesInput = {
    update: XOR<TerrenoUpdateWithoutCuartelesInput, TerrenoUncheckedUpdateWithoutCuartelesInput>
    create: XOR<TerrenoCreateWithoutCuartelesInput, TerrenoUncheckedCreateWithoutCuartelesInput>
    where?: TerrenoWhereInput
  }

  export type TerrenoUpdateToOneWithWhereWithoutCuartelesInput = {
    where?: TerrenoWhereInput
    data: XOR<TerrenoUpdateWithoutCuartelesInput, TerrenoUncheckedUpdateWithoutCuartelesInput>
  }

  export type TerrenoUpdateWithoutCuartelesInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaHectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    codeSagGrower?: StringFieldUpdateOperationsInput | string
    userFundo?: UserFundoUpdateOneRequiredWithoutTerrenosNestedInput
  }

  export type TerrenoUncheckedUpdateWithoutCuartelesInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaHectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    codeSagGrower?: StringFieldUpdateOperationsInput | string
    userFundoId?: StringFieldUpdateOperationsInput | string
  }

  export type TareaUpsertWithWhereUniqueWithoutCuartelInput = {
    where: TareaWhereUniqueInput
    update: XOR<TareaUpdateWithoutCuartelInput, TareaUncheckedUpdateWithoutCuartelInput>
    create: XOR<TareaCreateWithoutCuartelInput, TareaUncheckedCreateWithoutCuartelInput>
  }

  export type TareaUpdateWithWhereUniqueWithoutCuartelInput = {
    where: TareaWhereUniqueInput
    data: XOR<TareaUpdateWithoutCuartelInput, TareaUncheckedUpdateWithoutCuartelInput>
  }

  export type TareaUpdateManyWithWhereWithoutCuartelInput = {
    where: TareaScalarWhereInput
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyWithoutCuartelInput>
  }

  export type TareaScalarWhereInput = {
    AND?: TareaScalarWhereInput | TareaScalarWhereInput[]
    OR?: TareaScalarWhereInput[]
    NOT?: TareaScalarWhereInput | TareaScalarWhereInput[]
    id?: StringFilter<"Tarea"> | string
    tipo?: StringFilter<"Tarea"> | string
    descripcion?: StringFilter<"Tarea"> | string
    fecha?: DateTimeFilter<"Tarea"> | Date | string
    createdAt?: DateTimeFilter<"Tarea"> | Date | string
    updatedAt?: DateTimeFilter<"Tarea"> | Date | string
    cuartelId?: StringFilter<"Tarea"> | string
    productoId?: StringFilter<"Tarea"> | string
  }

  export type PlantaUpsertWithoutCuartelInput = {
    update: XOR<PlantaUpdateWithoutCuartelInput, PlantaUncheckedUpdateWithoutCuartelInput>
    create: XOR<PlantaCreateWithoutCuartelInput, PlantaUncheckedCreateWithoutCuartelInput>
    where?: PlantaWhereInput
  }

  export type PlantaUpdateToOneWithWhereWithoutCuartelInput = {
    where?: PlantaWhereInput
    data: XOR<PlantaUpdateWithoutCuartelInput, PlantaUncheckedUpdateWithoutCuartelInput>
  }

  export type PlantaUpdateWithoutCuartelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    espacioAncho?: FloatFieldUpdateOperationsInput | number
    espacioLargo?: FloatFieldUpdateOperationsInput | number
    produccion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    variedad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sueloPlanta?: sueloPlantaUpdateManyWithoutPlantaNestedInput
  }

  export type PlantaUncheckedUpdateWithoutCuartelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    espacioAncho?: FloatFieldUpdateOperationsInput | number
    espacioLargo?: FloatFieldUpdateOperationsInput | number
    produccion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    variedad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sueloPlanta?: sueloPlantaUncheckedUpdateManyWithoutPlantaNestedInput
  }

  export type PlantaCreateWithoutSueloPlantaInput = {
    id?: string
    nombre: string
    espacioAncho: number
    espacioLargo: number
    produccion: number
    descripcion: string
    variedad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartel?: cuartelCreateNestedManyWithoutPlantaInput
  }

  export type PlantaUncheckedCreateWithoutSueloPlantaInput = {
    id?: string
    nombre: string
    espacioAncho: number
    espacioLargo: number
    produccion: number
    descripcion: string
    variedad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartel?: cuartelUncheckedCreateNestedManyWithoutPlantaInput
  }

  export type PlantaCreateOrConnectWithoutSueloPlantaInput = {
    where: PlantaWhereUniqueInput
    create: XOR<PlantaCreateWithoutSueloPlantaInput, PlantaUncheckedCreateWithoutSueloPlantaInput>
  }

  export type SueloCreateWithoutSueloPlantaInput = {
    id?: string
    tipo: string
    caracteristicas: string
    cuartel?: cuartelCreateNestedManyWithoutSueloInput
  }

  export type SueloUncheckedCreateWithoutSueloPlantaInput = {
    id?: string
    tipo: string
    caracteristicas: string
    cuartel?: cuartelUncheckedCreateNestedManyWithoutSueloInput
  }

  export type SueloCreateOrConnectWithoutSueloPlantaInput = {
    where: SueloWhereUniqueInput
    create: XOR<SueloCreateWithoutSueloPlantaInput, SueloUncheckedCreateWithoutSueloPlantaInput>
  }

  export type PlantaUpsertWithoutSueloPlantaInput = {
    update: XOR<PlantaUpdateWithoutSueloPlantaInput, PlantaUncheckedUpdateWithoutSueloPlantaInput>
    create: XOR<PlantaCreateWithoutSueloPlantaInput, PlantaUncheckedCreateWithoutSueloPlantaInput>
    where?: PlantaWhereInput
  }

  export type PlantaUpdateToOneWithWhereWithoutSueloPlantaInput = {
    where?: PlantaWhereInput
    data: XOR<PlantaUpdateWithoutSueloPlantaInput, PlantaUncheckedUpdateWithoutSueloPlantaInput>
  }

  export type PlantaUpdateWithoutSueloPlantaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    espacioAncho?: FloatFieldUpdateOperationsInput | number
    espacioLargo?: FloatFieldUpdateOperationsInput | number
    produccion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    variedad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartel?: cuartelUpdateManyWithoutPlantaNestedInput
  }

  export type PlantaUncheckedUpdateWithoutSueloPlantaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    espacioAncho?: FloatFieldUpdateOperationsInput | number
    espacioLargo?: FloatFieldUpdateOperationsInput | number
    produccion?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    variedad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartel?: cuartelUncheckedUpdateManyWithoutPlantaNestedInput
  }

  export type SueloUpsertWithoutSueloPlantaInput = {
    update: XOR<SueloUpdateWithoutSueloPlantaInput, SueloUncheckedUpdateWithoutSueloPlantaInput>
    create: XOR<SueloCreateWithoutSueloPlantaInput, SueloUncheckedCreateWithoutSueloPlantaInput>
    where?: SueloWhereInput
  }

  export type SueloUpdateToOneWithWhereWithoutSueloPlantaInput = {
    where?: SueloWhereInput
    data: XOR<SueloUpdateWithoutSueloPlantaInput, SueloUncheckedUpdateWithoutSueloPlantaInput>
  }

  export type SueloUpdateWithoutSueloPlantaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caracteristicas?: StringFieldUpdateOperationsInput | string
    cuartel?: cuartelUpdateManyWithoutSueloNestedInput
  }

  export type SueloUncheckedUpdateWithoutSueloPlantaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caracteristicas?: StringFieldUpdateOperationsInput | string
    cuartel?: cuartelUncheckedUpdateManyWithoutSueloNestedInput
  }

  export type TareaCreateWithoutProductoInput = {
    id?: string
    tipo: string
    descripcion: string
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartel: cuartelCreateNestedOneWithoutTareaInput
    ordenAplicacion?: OrdenAplicacionCreateNestedManyWithoutTareaInput
  }

  export type TareaUncheckedCreateWithoutProductoInput = {
    id?: string
    tipo: string
    descripcion: string
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartelId: string
    ordenAplicacion?: OrdenAplicacionUncheckedCreateNestedManyWithoutTareaInput
  }

  export type TareaCreateOrConnectWithoutProductoInput = {
    where: TareaWhereUniqueInput
    create: XOR<TareaCreateWithoutProductoInput, TareaUncheckedCreateWithoutProductoInput>
  }

  export type TareaCreateManyProductoInputEnvelope = {
    data: TareaCreateManyProductoInput | TareaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type TareaUpsertWithWhereUniqueWithoutProductoInput = {
    where: TareaWhereUniqueInput
    update: XOR<TareaUpdateWithoutProductoInput, TareaUncheckedUpdateWithoutProductoInput>
    create: XOR<TareaCreateWithoutProductoInput, TareaUncheckedCreateWithoutProductoInput>
  }

  export type TareaUpdateWithWhereUniqueWithoutProductoInput = {
    where: TareaWhereUniqueInput
    data: XOR<TareaUpdateWithoutProductoInput, TareaUncheckedUpdateWithoutProductoInput>
  }

  export type TareaUpdateManyWithWhereWithoutProductoInput = {
    where: TareaScalarWhereInput
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyWithoutProductoInput>
  }

  export type ProductoCreateWithoutTareaInput = {
    id?: string
    nombre: string
    tipo: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartelId: string
    creadoPor: string
  }

  export type ProductoUncheckedCreateWithoutTareaInput = {
    id?: string
    nombre: string
    tipo: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartelId: string
    creadoPor: string
  }

  export type ProductoCreateOrConnectWithoutTareaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutTareaInput, ProductoUncheckedCreateWithoutTareaInput>
  }

  export type cuartelCreateWithoutTareaInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    suelo: SueloCreateNestedOneWithoutCuartelInput
    terreno: TerrenoCreateNestedOneWithoutCuartelesInput
    planta: PlantaCreateNestedOneWithoutCuartelInput
  }

  export type cuartelUncheckedCreateWithoutTareaInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    terrenoId: string
    sueloId: string
    plantaId: string
  }

  export type cuartelCreateOrConnectWithoutTareaInput = {
    where: cuartelWhereUniqueInput
    create: XOR<cuartelCreateWithoutTareaInput, cuartelUncheckedCreateWithoutTareaInput>
  }

  export type OrdenAplicacionCreateWithoutTareaInput = {
    id?: string
    nombre: string
    fechaEntrega: Date | string
    fechaAplicacion: Date | string
    dosis: number
    cantidadApli: number
    objetivo: string
    mojamientoRecomendado: string
    mojamientoReal: string
    numMaquinadas: number
    gastoTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdenAplicacionUncheckedCreateWithoutTareaInput = {
    id?: string
    nombre: string
    fechaEntrega: Date | string
    fechaAplicacion: Date | string
    dosis: number
    cantidadApli: number
    objetivo: string
    mojamientoRecomendado: string
    mojamientoReal: string
    numMaquinadas: number
    gastoTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdenAplicacionCreateOrConnectWithoutTareaInput = {
    where: OrdenAplicacionWhereUniqueInput
    create: XOR<OrdenAplicacionCreateWithoutTareaInput, OrdenAplicacionUncheckedCreateWithoutTareaInput>
  }

  export type OrdenAplicacionCreateManyTareaInputEnvelope = {
    data: OrdenAplicacionCreateManyTareaInput | OrdenAplicacionCreateManyTareaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithoutTareaInput = {
    update: XOR<ProductoUpdateWithoutTareaInput, ProductoUncheckedUpdateWithoutTareaInput>
    create: XOR<ProductoCreateWithoutTareaInput, ProductoUncheckedCreateWithoutTareaInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutTareaInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutTareaInput, ProductoUncheckedUpdateWithoutTareaInput>
  }

  export type ProductoUpdateWithoutTareaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartelId?: StringFieldUpdateOperationsInput | string
    creadoPor?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoUncheckedUpdateWithoutTareaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartelId?: StringFieldUpdateOperationsInput | string
    creadoPor?: StringFieldUpdateOperationsInput | string
  }

  export type cuartelUpsertWithoutTareaInput = {
    update: XOR<cuartelUpdateWithoutTareaInput, cuartelUncheckedUpdateWithoutTareaInput>
    create: XOR<cuartelCreateWithoutTareaInput, cuartelUncheckedCreateWithoutTareaInput>
    where?: cuartelWhereInput
  }

  export type cuartelUpdateToOneWithWhereWithoutTareaInput = {
    where?: cuartelWhereInput
    data: XOR<cuartelUpdateWithoutTareaInput, cuartelUncheckedUpdateWithoutTareaInput>
  }

  export type cuartelUpdateWithoutTareaInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suelo?: SueloUpdateOneRequiredWithoutCuartelNestedInput
    terreno?: TerrenoUpdateOneRequiredWithoutCuartelesNestedInput
    planta?: PlantaUpdateOneRequiredWithoutCuartelNestedInput
  }

  export type cuartelUncheckedUpdateWithoutTareaInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terrenoId?: StringFieldUpdateOperationsInput | string
    sueloId?: StringFieldUpdateOperationsInput | string
    plantaId?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenAplicacionUpsertWithWhereUniqueWithoutTareaInput = {
    where: OrdenAplicacionWhereUniqueInput
    update: XOR<OrdenAplicacionUpdateWithoutTareaInput, OrdenAplicacionUncheckedUpdateWithoutTareaInput>
    create: XOR<OrdenAplicacionCreateWithoutTareaInput, OrdenAplicacionUncheckedCreateWithoutTareaInput>
  }

  export type OrdenAplicacionUpdateWithWhereUniqueWithoutTareaInput = {
    where: OrdenAplicacionWhereUniqueInput
    data: XOR<OrdenAplicacionUpdateWithoutTareaInput, OrdenAplicacionUncheckedUpdateWithoutTareaInput>
  }

  export type OrdenAplicacionUpdateManyWithWhereWithoutTareaInput = {
    where: OrdenAplicacionScalarWhereInput
    data: XOR<OrdenAplicacionUpdateManyMutationInput, OrdenAplicacionUncheckedUpdateManyWithoutTareaInput>
  }

  export type OrdenAplicacionScalarWhereInput = {
    AND?: OrdenAplicacionScalarWhereInput | OrdenAplicacionScalarWhereInput[]
    OR?: OrdenAplicacionScalarWhereInput[]
    NOT?: OrdenAplicacionScalarWhereInput | OrdenAplicacionScalarWhereInput[]
    id?: StringFilter<"OrdenAplicacion"> | string
    nombre?: StringFilter<"OrdenAplicacion"> | string
    fechaEntrega?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    fechaAplicacion?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    dosis?: FloatFilter<"OrdenAplicacion"> | number
    cantidadApli?: FloatFilter<"OrdenAplicacion"> | number
    objetivo?: StringFilter<"OrdenAplicacion"> | string
    mojamientoRecomendado?: StringFilter<"OrdenAplicacion"> | string
    mojamientoReal?: StringFilter<"OrdenAplicacion"> | string
    numMaquinadas?: IntFilter<"OrdenAplicacion"> | number
    gastoTotal?: FloatFilter<"OrdenAplicacion"> | number
    createdAt?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    updatedAt?: DateTimeFilter<"OrdenAplicacion"> | Date | string
    tareaId?: StringFilter<"OrdenAplicacion"> | string
  }

  export type TareaCreateWithoutOrdenAplicacionInput = {
    id?: string
    tipo: string
    descripcion: string
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    producto: ProductoCreateNestedOneWithoutTareaInput
    cuartel: cuartelCreateNestedOneWithoutTareaInput
  }

  export type TareaUncheckedCreateWithoutOrdenAplicacionInput = {
    id?: string
    tipo: string
    descripcion: string
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartelId: string
    productoId: string
  }

  export type TareaCreateOrConnectWithoutOrdenAplicacionInput = {
    where: TareaWhereUniqueInput
    create: XOR<TareaCreateWithoutOrdenAplicacionInput, TareaUncheckedCreateWithoutOrdenAplicacionInput>
  }

  export type TareaUpsertWithoutOrdenAplicacionInput = {
    update: XOR<TareaUpdateWithoutOrdenAplicacionInput, TareaUncheckedUpdateWithoutOrdenAplicacionInput>
    create: XOR<TareaCreateWithoutOrdenAplicacionInput, TareaUncheckedCreateWithoutOrdenAplicacionInput>
    where?: TareaWhereInput
  }

  export type TareaUpdateToOneWithWhereWithoutOrdenAplicacionInput = {
    where?: TareaWhereInput
    data: XOR<TareaUpdateWithoutOrdenAplicacionInput, TareaUncheckedUpdateWithoutOrdenAplicacionInput>
  }

  export type TareaUpdateWithoutOrdenAplicacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutTareaNestedInput
    cuartel?: cuartelUpdateOneRequiredWithoutTareaNestedInput
  }

  export type TareaUncheckedUpdateWithoutOrdenAplicacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartelId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFundoCreateManyUserInput = {
    id?: string
    fundoId: string
    assignedAt?: Date | string
    rolId: string
  }

  export type UserFundoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fundo?: FundoUpdateOneRequiredWithoutUserFundosNestedInput
    rol?: RolUpdateOneRequiredWithoutUserFundosNestedInput
    terrenos?: TerrenoUpdateManyWithoutUserFundoNestedInput
  }

  export type UserFundoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundoId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: StringFieldUpdateOperationsInput | string
    terrenos?: TerrenoUncheckedUpdateManyWithoutUserFundoNestedInput
  }

  export type UserFundoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundoId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFundoCreateManyRolInput = {
    id?: string
    userId: string
    fundoId: string
    assignedAt?: Date | string
  }

  export type UserFundoUpdateWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fundo?: FundoUpdateOneRequiredWithoutUserFundosNestedInput
    user?: UserUpdateOneRequiredWithoutUserFundosNestedInput
    terrenos?: TerrenoUpdateManyWithoutUserFundoNestedInput
  }

  export type UserFundoUncheckedUpdateWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundoId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terrenos?: TerrenoUncheckedUpdateManyWithoutUserFundoNestedInput
  }

  export type UserFundoUncheckedUpdateManyWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fundoId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFundoCreateManyFundoInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
    rolId: string
  }

  export type UserFundoUpdateWithoutFundoInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserFundosNestedInput
    rol?: RolUpdateOneRequiredWithoutUserFundosNestedInput
    terrenos?: TerrenoUpdateManyWithoutUserFundoNestedInput
  }

  export type UserFundoUncheckedUpdateWithoutFundoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: StringFieldUpdateOperationsInput | string
    terrenos?: TerrenoUncheckedUpdateManyWithoutUserFundoNestedInput
  }

  export type UserFundoUncheckedUpdateManyWithoutFundoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: StringFieldUpdateOperationsInput | string
  }

  export type TerrenoCreateManyUserFundoInput = {
    id?: string
    areaHectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creadoPor: string
    lat: number
    lon: number
    codeSagGrower: string
  }

  export type TerrenoUpdateWithoutUserFundoInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaHectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    codeSagGrower?: StringFieldUpdateOperationsInput | string
    cuarteles?: cuartelUpdateManyWithoutTerrenoNestedInput
  }

  export type TerrenoUncheckedUpdateWithoutUserFundoInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaHectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    codeSagGrower?: StringFieldUpdateOperationsInput | string
    cuarteles?: cuartelUncheckedUpdateManyWithoutTerrenoNestedInput
  }

  export type TerrenoUncheckedUpdateManyWithoutUserFundoInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaHectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    codeSagGrower?: StringFieldUpdateOperationsInput | string
  }

  export type cuartelCreateManyTerrenoInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sueloId: string
    plantaId: string
  }

  export type cuartelUpdateWithoutTerrenoInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suelo?: SueloUpdateOneRequiredWithoutCuartelNestedInput
    tarea?: TareaUpdateManyWithoutCuartelNestedInput
    planta?: PlantaUpdateOneRequiredWithoutCuartelNestedInput
  }

  export type cuartelUncheckedUpdateWithoutTerrenoInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sueloId?: StringFieldUpdateOperationsInput | string
    plantaId?: StringFieldUpdateOperationsInput | string
    tarea?: TareaUncheckedUpdateManyWithoutCuartelNestedInput
  }

  export type cuartelUncheckedUpdateManyWithoutTerrenoInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sueloId?: StringFieldUpdateOperationsInput | string
    plantaId?: StringFieldUpdateOperationsInput | string
  }

  export type sueloPlantaCreateManySueloInput = {
    id?: string
    compatibilidad: string
    plantaId: string
  }

  export type cuartelCreateManySueloInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    terrenoId: string
    plantaId: string
  }

  export type sueloPlantaUpdateWithoutSueloInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilidad?: StringFieldUpdateOperationsInput | string
    planta?: PlantaUpdateOneRequiredWithoutSueloPlantaNestedInput
  }

  export type sueloPlantaUncheckedUpdateWithoutSueloInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilidad?: StringFieldUpdateOperationsInput | string
    plantaId?: StringFieldUpdateOperationsInput | string
  }

  export type sueloPlantaUncheckedUpdateManyWithoutSueloInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilidad?: StringFieldUpdateOperationsInput | string
    plantaId?: StringFieldUpdateOperationsInput | string
  }

  export type cuartelUpdateWithoutSueloInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terreno?: TerrenoUpdateOneRequiredWithoutCuartelesNestedInput
    tarea?: TareaUpdateManyWithoutCuartelNestedInput
    planta?: PlantaUpdateOneRequiredWithoutCuartelNestedInput
  }

  export type cuartelUncheckedUpdateWithoutSueloInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terrenoId?: StringFieldUpdateOperationsInput | string
    plantaId?: StringFieldUpdateOperationsInput | string
    tarea?: TareaUncheckedUpdateManyWithoutCuartelNestedInput
  }

  export type cuartelUncheckedUpdateManyWithoutSueloInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terrenoId?: StringFieldUpdateOperationsInput | string
    plantaId?: StringFieldUpdateOperationsInput | string
  }

  export type sueloPlantaCreateManyPlantaInput = {
    id?: string
    compatibilidad: string
    sueloId: string
  }

  export type cuartelCreateManyPlantaInput = {
    id?: string
    hectareas: number
    createdAt?: Date | string
    updatedAt?: Date | string
    terrenoId: string
    sueloId: string
  }

  export type sueloPlantaUpdateWithoutPlantaInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilidad?: StringFieldUpdateOperationsInput | string
    suelo?: SueloUpdateOneRequiredWithoutSueloPlantaNestedInput
  }

  export type sueloPlantaUncheckedUpdateWithoutPlantaInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilidad?: StringFieldUpdateOperationsInput | string
    sueloId?: StringFieldUpdateOperationsInput | string
  }

  export type sueloPlantaUncheckedUpdateManyWithoutPlantaInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilidad?: StringFieldUpdateOperationsInput | string
    sueloId?: StringFieldUpdateOperationsInput | string
  }

  export type cuartelUpdateWithoutPlantaInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suelo?: SueloUpdateOneRequiredWithoutCuartelNestedInput
    terreno?: TerrenoUpdateOneRequiredWithoutCuartelesNestedInput
    tarea?: TareaUpdateManyWithoutCuartelNestedInput
  }

  export type cuartelUncheckedUpdateWithoutPlantaInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terrenoId?: StringFieldUpdateOperationsInput | string
    sueloId?: StringFieldUpdateOperationsInput | string
    tarea?: TareaUncheckedUpdateManyWithoutCuartelNestedInput
  }

  export type cuartelUncheckedUpdateManyWithoutPlantaInput = {
    id?: StringFieldUpdateOperationsInput | string
    hectareas?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terrenoId?: StringFieldUpdateOperationsInput | string
    sueloId?: StringFieldUpdateOperationsInput | string
  }

  export type TareaCreateManyCuartelInput = {
    id?: string
    tipo: string
    descripcion: string
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    productoId: string
  }

  export type TareaUpdateWithoutCuartelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutTareaNestedInput
    ordenAplicacion?: OrdenAplicacionUpdateManyWithoutTareaNestedInput
  }

  export type TareaUncheckedUpdateWithoutCuartelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productoId?: StringFieldUpdateOperationsInput | string
    ordenAplicacion?: OrdenAplicacionUncheckedUpdateManyWithoutTareaNestedInput
  }

  export type TareaUncheckedUpdateManyWithoutCuartelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productoId?: StringFieldUpdateOperationsInput | string
  }

  export type TareaCreateManyProductoInput = {
    id?: string
    tipo: string
    descripcion: string
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cuartelId: string
  }

  export type TareaUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartel?: cuartelUpdateOneRequiredWithoutTareaNestedInput
    ordenAplicacion?: OrdenAplicacionUpdateManyWithoutTareaNestedInput
  }

  export type TareaUncheckedUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartelId?: StringFieldUpdateOperationsInput | string
    ordenAplicacion?: OrdenAplicacionUncheckedUpdateManyWithoutTareaNestedInput
  }

  export type TareaUncheckedUpdateManyWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cuartelId?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenAplicacionCreateManyTareaInput = {
    id?: string
    nombre: string
    fechaEntrega: Date | string
    fechaAplicacion: Date | string
    dosis: number
    cantidadApli: number
    objetivo: string
    mojamientoRecomendado: string
    mojamientoReal: string
    numMaquinadas: number
    gastoTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdenAplicacionUpdateWithoutTareaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaAplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: FloatFieldUpdateOperationsInput | number
    cantidadApli?: FloatFieldUpdateOperationsInput | number
    objetivo?: StringFieldUpdateOperationsInput | string
    mojamientoRecomendado?: StringFieldUpdateOperationsInput | string
    mojamientoReal?: StringFieldUpdateOperationsInput | string
    numMaquinadas?: IntFieldUpdateOperationsInput | number
    gastoTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenAplicacionUncheckedUpdateWithoutTareaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaAplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: FloatFieldUpdateOperationsInput | number
    cantidadApli?: FloatFieldUpdateOperationsInput | number
    objetivo?: StringFieldUpdateOperationsInput | string
    mojamientoRecomendado?: StringFieldUpdateOperationsInput | string
    mojamientoReal?: StringFieldUpdateOperationsInput | string
    numMaquinadas?: IntFieldUpdateOperationsInput | number
    gastoTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenAplicacionUncheckedUpdateManyWithoutTareaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaAplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    dosis?: FloatFieldUpdateOperationsInput | number
    cantidadApli?: FloatFieldUpdateOperationsInput | number
    objetivo?: StringFieldUpdateOperationsInput | string
    mojamientoRecomendado?: StringFieldUpdateOperationsInput | string
    mojamientoReal?: StringFieldUpdateOperationsInput | string
    numMaquinadas?: IntFieldUpdateOperationsInput | number
    gastoTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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