import { RefreshCcwIcon } from 'lucide-react'
import type { FC } from 'react'

import { Button, ErrorActions, ErrorContent, ErrorTitle, ErrorWrapper } from '@/presentation/components'
import { i18n } from '@/infrastructure/i18n'

type FallbackProps = {
  /** Error message to display */
  message?: string

  /** Error title to display */
  title?: string
}

export const Fallback: FC<FallbackProps> = ({ message, title }) => (
  <ErrorWrapper>
    <ErrorTitle>
      {title ?? i18n('components.fallback.title')}
    </ErrorTitle>

    <ErrorContent>
      {message ?? i18n('components.fallback.message')}
    </ErrorContent>

    <ErrorActions>
      <Button
        Icon={<RefreshCcwIcon />}
        onPress={() => window.location.reload() }
        variant='filled'
      >
        {i18n('components.fallback.reload')}
      </Button>
    </ErrorActions>
  </ErrorWrapper>
)
