import { LoaderCircleIcon } from 'lucide-react'
import type { ComponentProps, FC } from 'react'

import { mergeClassNames } from '@/presentation/utils'

import './Spinner.sass'

type SpinnerProps = ComponentProps<typeof LoaderCircleIcon>

export const Spinner: FC<SpinnerProps> = ({ className, ...spinnerProps }) => (
  <LoaderCircleIcon className={mergeClassNames('spinner', className)} {...spinnerProps} />
)
