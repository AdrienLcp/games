import { type FC, useCallback, useEffect, useState } from 'react'

import { GameService } from '@/application/services'
import type { Game } from '@/domain/game'
import { i18n } from '@/infrastructure/i18n'
import { GameCard, Loader } from '@/presentation/components'

import './GamesList.sass'

const DEFAULT_ERROR_MESSAGE = i18n('games.list.error')

export const GamesList: FC = () => {
  const [isLoadingGames, setIsLoadingGames] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [games, setGames] = useState<Game[] | null>(null)

  const loadGames = useCallback(async () => {
    setIsLoadingGames(true)
    setErrorMessage(null)

    try {
      const gamesResult = await GameService.getAllGames()

      if (gamesResult.status === 'error') {
        setErrorMessage(DEFAULT_ERROR_MESSAGE)
        return
      }

      setGames(gamesResult.data)
    } catch (error) {
      console.error('Error fetching games:', error)
      setErrorMessage(DEFAULT_ERROR_MESSAGE)
    } finally {
      setIsLoadingGames(false)
    }
  }, [])

  useEffect(() => {
    loadGames()
  }, [loadGames])

  if (isLoadingGames) {
    return <Loader />
  }

  if (errorMessage || !games) {
    return (
      <p className='games-list-error-message'>
        {errorMessage ?? DEFAULT_ERROR_MESSAGE}
      </p>
    )
  }

  if (games.length === 0) {
    return (
      <p className='games-list-empty-message'>
        {i18n('games.list.empty')}
      </p>
    )
  }

  return (
    <ul className='games-list'>
      {games.map(game => (
        <li key={game.id}>
          <GameCard game={game} />
        </li>
      ))}
    </ul>
  )
}
