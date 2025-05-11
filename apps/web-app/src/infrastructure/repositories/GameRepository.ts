import type { Game } from '@/domain/game'
import { games } from '@/infrastructure/datasource'
import { failure, type Result, success } from '@/infrastructure/utils'

export const GameRepository = {
  findGameBySlug: async (gameSlug: string): Promise<Result<Game, string>> => {
    const game = games.find(game => game.slug === gameSlug)

    if (!game) {
      return failure('Game not found')
    }

    return success(game)
  },

  getAllGames: async (): Promise<Result<Game[]>> => {
    return success(games)
  }
}
