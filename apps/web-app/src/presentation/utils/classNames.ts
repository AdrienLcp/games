export type ClassName
  = string
  | false
  | undefined
  | null

export type ClassNames = ClassName | ClassName[]

export const mergeClassNames = (...classNames: ClassNames[]): string => {
  return classNames
    .flat()
    .filter((value): value is string => typeof value === 'string' && Boolean(value))
    .join(' ')
}
