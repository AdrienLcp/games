import type { FC } from 'react'

import type { Game } from '@/domain/game'
import { getGameRoute } from '@/domain/navigation'
import { Link } from '@/presentation/components'

import './GameCard.sass'

type GameCardProps = {
  game: Game
}

export const GameCard: FC<GameCardProps> = ({ game }) => (
  <Link className='game-card' href={getGameRoute(game.slug)}>
    {game.name}
  </Link>
)
