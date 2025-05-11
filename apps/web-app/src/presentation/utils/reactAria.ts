import type { ReactNode } from 'react'

import { type ClassNames, mergeClassNames } from './classNames'

export type ReactAriaComponentRenderProps = unknown

export type RenderPropsValues <T extends ReactAriaComponentRenderProps> = T & {
  defaultClassName: string | undefined
}

export type ReactAriaClassName <T extends ReactAriaComponentRenderProps>
  = string
  | ((values: RenderPropsValues<T>) => string)
  | undefined

export const mergeReactAriaClassNames = <T extends ReactAriaComponentRenderProps> (
  values: RenderPropsValues<T>,
  className: ReactAriaClassName<T>,
  ...baseClassName: ClassNames[]
) => {
  const classNameOverride = typeof className === 'function'
    ? className(values)
    : className

  return mergeClassNames(...baseClassName, classNameOverride)
}

export type GlobalFormErrors = 'form'
export type ValidationErrors <T extends string = string> = Partial<Record<T | GlobalFormErrors, string | string[]>>

type ReactAriaComponentChildrenValues <T extends ReactAriaComponentRenderProps> = T & { defaultChildren: ReactNode | undefined }

type ReactAriaComponentChildren <T extends ReactAriaComponentRenderProps> =
  | ((values: ReactAriaComponentChildrenValues<T>) => ReactNode)
  | ReactNode

export const renderReactAriaChildren = <T extends ReactAriaComponentRenderProps> (
  children: ReactAriaComponentChildren<T>,
  values: ReactAriaComponentChildrenValues<T>
) => {
  return typeof children === 'function'
    ? children(values)
    : children
}
