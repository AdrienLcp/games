import { type FC, useCallback, useEffect, useState } from 'react'

import { useParams } from '@/application/hooks'
import { GameService } from '@/application/services'
import type { Game } from '@/domain/game'
import { i18n } from '@/infrastructure/i18n'
import { GamePlay, Loader } from '@/presentation/components'

import './GamePage.sass'

const DEFAULT_ERROR_MESSAGE = i18n('games.page.error')

const GamePage: FC = () => {
  const { gameSlug } = useParams()

  const [isLoadingGame, setIsLoadingGame] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [game, setGame] = useState<Game | null>(null)

  const loadGame = useCallback(async () => {
    if (!gameSlug) {
      setErrorMessage(i18n('games.page.notFound'))
      setIsLoadingGame(false)
      return
    }

    setIsLoadingGame(true)
    setErrorMessage(null)

    try {
      const gameResult = await GameService.findGameBySlug(gameSlug)

      if (gameResult.status === 'error') {
        setErrorMessage(DEFAULT_ERROR_MESSAGE)
        return
      }

      setGame(gameResult.data)
    } catch (error) {
      console.error('Error fetching game:', error)
      setErrorMessage(DEFAULT_ERROR_MESSAGE)
    } finally {
      setIsLoadingGame(false)
    }
  }, [gameSlug])

  useEffect(() => {
    loadGame()
  }, [loadGame])

  if (isLoadingGame) {
    return <Loader />
  }

  if (errorMessage) {
    return (
      <p className='game-page-error-message'>
        {errorMessage ?? DEFAULT_ERROR_MESSAGE}
      </p>
    )
  }

  if (!game) {
    return (
      <p className='game-page-error-message'>
        {i18n('games.page.notFound')}
      </p>
    )
  }

  return (
    <>
      <header className='game-page-header'>
        <h1>{game.name}</h1>

        {game.rules.length > 0 && (
          <ul className='game-rules'>
            {game.rules.map(rule => <li key={rule}>{rule}</li>)}
          </ul>
        )}
      </header>

      <GamePlay game={game} />
    </>
  )
}

export default GamePage
