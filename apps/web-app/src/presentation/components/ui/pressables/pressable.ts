import type { ReactElement, ReactNode } from 'react'
import type { ButtonRenderProps, LinkRenderProps } from 'react-aria-components'

import { mergeReactAriaClassNames, type RenderPropsValues } from '@/presentation/utils'

import './Pressable.sass'

export type PressableIconSide = 'left' | 'right'

export type PressableSize = 'medium' | 'small'

export type PressableVariant =
  | 'filled'
  | 'outlined'
  | 'transparent'
  | 'underlined'

type PressableWithVariantProps = {
  /** Optional icon to display within the button. */
  Icon?: ReactElement

  /**
   * Determines the side of the button the icon should appear on. Defaults to 'left'.
   * @values 'left', 'right'
   * @default 'left'
   */
  iconSide?: PressableIconSide

  /**
   * Defines the size of the button. Can be 'default' or 'icon' for a button with only an icon.
   * @values 'small', undefined
   */
  size?: PressableSize

  /**
   * The visual style variant of the button.
   * @values 'primary', 'secondary', 'outline', 'ghost', 'destructive'
   * @default 'outline'
   */
  variant: PressableVariant
}

type PressableWithoutVariantProps = {
  Icon?: undefined
  iconSide?: undefined
  size?: undefined
  variant?: undefined
}

export type PressableProps = PressableWithVariantProps | PressableWithoutVariantProps

type PressableRenderProps
  = ButtonRenderProps
  | LinkRenderProps

type PressableChildren <T extends PressableRenderProps> =
  | ReactNode
  | ((values: T & { defaultChildren: ReactNode | undefined }) => ReactNode)

export function mergeReactAriaPressableClassNames <T extends PressableRenderProps> (
  values: RenderPropsValues<T>,
  className: string | ((values: RenderPropsValues<T>) => string) | undefined,
  variant: PressableProps['variant'],
  Icon: PressableProps['Icon'],
  iconSide: PressableProps['iconSide'] = 'left',
  size: PressableProps['size'],
  children?: PressableChildren<T>
) {
  const hasIcon = !!Icon
  const isIconButton = hasIcon && children == null
  const currentVariant: PressableProps['variant'] = variant == null && isIconButton ? 'transparent' : variant
  const currentSize: PressableProps['size'] = size === 'medium' ? undefined : size

  return mergeReactAriaClassNames(
    values,
    className,
    'pressable',
    currentVariant,
    hasIcon && !isIconButton && `icon-${iconSide}`,
    isIconButton && 'icon-size',
    currentSize
  )
}
