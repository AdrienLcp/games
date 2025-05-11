import type { FC, ReactNode } from 'react'
import { type LinkRenderProps, Link as ReactAriaLink, type LinkProps as ReactAriaLinkProps } from 'react-aria-components'

import { mergeReactAriaPressableClassNames, type PressableProps } from './pressable'

type LinkProps = PressableProps & ReactAriaLinkProps

type LinkRenderPropsValues = LinkRenderProps & { defaultChildren: ReactNode | undefined }

const renderLinkChildren = (children: LinkProps['children'], renderValues: LinkRenderPropsValues) => {
  return typeof children === 'function' ? children(renderValues) : children
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  Icon,
  iconSide,
  size,
  variant,
  ...linkProps
}) => (
  <ReactAriaLink
    className={(values) => mergeReactAriaPressableClassNames(
      values,
      className,
      variant,
      Icon,
      iconSide,
      size,
      children
    )}
    {...linkProps}
  >
    {(values) => variant == null
      ? renderLinkChildren(children, values)
      : <>
          {Icon && (
            <div className='pressable-icon' role='presentation'>
              {Icon}
            </div>
          )}

          {children != null && (
            <div className='pressable-content'>
              {renderLinkChildren(children, values)}
            </div>
          )}
        </>
    }
  </ReactAriaLink>
)
