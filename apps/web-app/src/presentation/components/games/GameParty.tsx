import { type FC, useState } from 'react'

import type { Game } from '@/domain/game'
import { i18n } from '@/infrastructure/i18n'
import { Button, GamePlay } from '@/presentation/components'

import './GameParty.sass'

type GameStatus = 'lost' | 'playing' | 'won'

type GamePartyProps = {
  game: Game
}

export const GameParty: FC<GamePartyProps> = ({ game }) => {
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing')

  if (gameStatus === 'lost') {
    return (
      <>
        <header className='game-party-header'>
          <h1>{i18n('games.loose.title')}</h1>
        </header>

        <main>
          <Button onPress={() => window.location.reload()}>
            {i18n('games.loose.retry')}
          </Button>
        </main>
      </>
    )
  }

  if (gameStatus === 'won') {
    return (
      <>
        <header className='game-party-header'>
          <h1>{i18n('games.win.congrats')}</h1>
        </header>

        <main>
          <p className='win-message'>
            {i18n('games.win.clue')}
          </p>

          <span className='clue'>
            {/* Mettre l'indice ici */}
            Indice ici
          </span>
        </main>
      </>
    )
  }

  return (
    <>
      <header className='game-party-header'>
        <h1>{game.name}</h1>

        <p>
          {i18n('games.rule', game.requiredCorrectAnswerCount)}
        </p>
      </header>

      <GamePlay
        game={game}
        onLoose={() => setGameStatus('lost')}
        onWin={() => setGameStatus('won')}
      />
    </>
  )
}
