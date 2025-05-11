import type { ComponentProps, FC } from 'react'

import { mergeClassNames } from '@/presentation/utils'

import './Error.sass'

export const ErrorWrapper: FC<ComponentProps<'div'>> = ({ className, ...errorWrapperProps }) => (
  <div className={mergeClassNames('error-wrapper', className)} {...errorWrapperProps} />
)

export const ErrorTitle: FC<ComponentProps<'h2'>> = ({ children, className, ...errorTitleProps }) => (
  <h2 className={mergeClassNames('error-title', className)} {...errorTitleProps}>{children}</h2>
)

export const ErrorContent: FC<ComponentProps<'div'>> = ({ className, ...errorContentProps }) => (
  <div className={mergeClassNames('error-content', className)} {...errorContentProps} />
)

export const ErrorActions: FC<ComponentProps<'div'>> = ({ className, ...errorActionsProps }) => (
  <div className={mergeClassNames('error-actions', className)} {...errorActionsProps} />
)
