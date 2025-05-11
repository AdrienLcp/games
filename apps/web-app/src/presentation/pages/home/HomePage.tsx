import type { FC } from 'react'

import { i18n } from '@/infrastructure/i18n'
import { GamesList } from '@/presentation/components/games/GamesList'

import './HomePage.sass'

const HomePage: FC = () => (
  <>
    <header className='home-page-header'>
      <h1>{i18n('appName')}</h1>
    </header>

    <main className='home-page-main'>
      <GamesList />
    </main>
  </>
)

export default HomePage
