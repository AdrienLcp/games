import { HomeIcon } from 'lucide-react'
import type { FC } from 'react'

import { ROUTE_DEFAULT } from '@/domain/navigation'
import { ErrorActions, ErrorContent, ErrorTitle, ErrorWrapper, Link } from '@/presentation/components'
import { i18n } from '@/infrastructure/i18n'

import './NotFoundPage.sass'

type NotFoundPageProps = {
  /** Path to redirect */
  redirectPath?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ redirectPath = ROUTE_DEFAULT }) => (
  <ErrorWrapper>
    <ErrorTitle>
      {i18n('pages.notFound.title')}
    </ErrorTitle>

    <ErrorContent>
      {i18n('pages.notFound.message')}
    </ErrorContent>

    <ErrorActions>
      <Link
        href={redirectPath}
        Icon={<HomeIcon />}
        variant='filled'
      >
        {i18n('pages.notFound.goBack')}
      </Link>
    </ErrorActions>
  </ErrorWrapper>
)
