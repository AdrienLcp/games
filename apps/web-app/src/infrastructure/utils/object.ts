type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`

export type DotNestedKeys<T> = (
  T extends object ? {
    [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}`
  }[Exclude<keyof T, symbol>] : ''
) extends infer D
  ? Extract<D, string>
  : never

export type ValueOf <T extends object> = T[keyof T]

export const getObjectEntries = <T extends Record<string, ValueOf<T>>> (obj: T): Array<[keyof T, ValueOf<T>]> => {
  return Object.entries(obj)
}

export const getObjectKeys = <T extends Record<string, unknown>> (obj: T): Array<keyof T> => {
  return Object.keys(obj)
}
