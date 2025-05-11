import type { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { lazyComponent } from '@/application/utils'
import { ROUTES } from '@/domain/navigation'
import { NotFoundPage } from '@/presentation/pages'

const GamePage = lazyComponent(() => import('@/presentation/pages/game/GamePage'), 'Game Page')
const HomePage = lazyComponent(() => import('@/presentation/pages/home/HomePage'), 'Home Page')

const CATCH_ROUTE = '*'

export const Router: FC = () => (
  <Routes>
    <Route element={<HomePage />} index path={ROUTES.home} />

    <Route element={<GamePage />} index path={ROUTES.game} />

    <Route element={<Navigate to={CATCH_ROUTE} />} path={ROUTES.notFound} />
    <Route element={<NotFoundPage />} path={CATCH_ROUTE} />
  </Routes>
)
