import type { FC } from 'react'

import { ROUTE_DEFAULT } from '@/domain/navigation'

import './NotFoundPage.sass'

type NotFoundPageProps = {
  redirectPath?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ redirectPath = ROUTE_DEFAULT }) => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Page not found</p>
      <a href={redirectPath}>Revenir</a>
    </div>
  )
}
