import type { ComponentProps, FC } from 'react'

import { Spinner } from '@/presentation/components'
import { mergeClassNames } from '@/presentation/utils'

import './Loader.sass'

export const Loader: FC<ComponentProps<'div'>> = ({ className, ...loaderProps }) => (
  <div {...loaderProps} className={mergeClassNames('loader', className)}>
    <Spinner size='3rem' />
  </div>
)
