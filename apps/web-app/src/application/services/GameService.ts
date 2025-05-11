import type { Game } from '@/domain/game'
import { GameRepository } from '@/infrastructure/repositories/GameRepository'
import { failure, type Result, success } from '@/infrastructure/utils'

export const GameService = {
  findGameBySlug: async (slug: string): Promise<Result<Game, string>> => {
    try {
      const gameResult = await GameRepository.findGameBySlug(slug)

      if (gameResult.status === 'error') {
        return gameResult
      }

      const game = gameResult.data

      if (game.questions.length === 0) {
        return failure('There is no questions in this game : ' + game.name)
      }

      const incorrectQuestionCorrectOptionId = game.questions.some(question => {
        return !question.options.some(option => option.id === question.correctOptionId)
      })

      if (incorrectQuestionCorrectOptionId) {
        return failure(`A correct option id is incorrect in the game : ${game.name}`)
      }

      // randomize questions options order
      const questionsWithRandomizedOrderOptions = game.questions.map(question => {
        const randomizedOrderOptions = question.options.toSorted(() => 0.5 - Math.random())

        return {
          ...question,
          options: randomizedOrderOptions
        }
      })

      // randomize questions order
      const randomizedOrderQuestions = questionsWithRandomizedOrderOptions.toSorted(() => 0.5 - Math.random())

      const randomizedGame = {
        ...game,
        questions: randomizedOrderQuestions
      }

      return success(randomizedGame)
    } catch (error) {
      console.error('Error fetching game:', error)
      return failure('An unexpected error occurred while fetching game')
    }
  },

  getAllGames: async (): Promise<Result<Game[], string>> => {
    try {
      const gamesResult =  await GameRepository.getAllGames()

      if (gamesResult.status === 'error') {
        return gamesResult
      }

      const gamesList = gamesResult.data

      const gameWithoutQuestion = gamesList.find(game => game.questions.length === 0)

      if (gameWithoutQuestion) {
        return failure('There is no questions in this game : ' + gameWithoutQuestion.name)
      }

      const gameWithIncorrectQuestionCorrectOptionId = gamesList.find(game => {
        return game.questions.some(question => {
          return !question.options.some(option => option.id === question.correctOptionId)
        })
      })

      if (gameWithIncorrectQuestionCorrectOptionId) {
        return failure(`A correct option id is incorrect in the game : ${gameWithIncorrectQuestionCorrectOptionId.name}`)
      }

      return success(gamesList)
    } catch (error) {
      console.error('Error fetching games:', error)
      return failure('An unexpected error occurred while fetching games')
    }
  }
}
