import { type FC, useState } from 'react'

import type { Game } from '@/domain/game'
import { i18n } from '@/infrastructure/i18n'
import { QuestionOptions } from '@/presentation/components'

import './GamePlay.sass'

type GameProps = {
  game: Game
  onLoose: () => void
  onWin: () => void
}

const wrongAnswerDurationInMs = 2000

export const GamePlay: FC<GameProps> = ({ game, onLoose, onWin }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [hasWrongAnswer, setHasWrongAnswer] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  const test = game.questions[currentQuestionIndex] ?? null
  console.log('test', test)
  const currentQuestion = game.questions[0] ?? null

  if (score >= game.requiredCorrectAnswerCount) {
    onWin()
    return null
  }

  if (!currentQuestion) {
    onLoose()
    return null
  }

  const onCorrectAnswer = () => {
    setScore(previousScore => previousScore + 1)
    setCurrentQuestionIndex(previousIndex => previousIndex + 1)
  }

  const onWrongAnswer = () => {
    setHasWrongAnswer(true)

    setTimeout(() => {
      setHasWrongAnswer(false)
      setCurrentQuestionIndex(previousIndex => previousIndex + 1)
    }, wrongAnswerDurationInMs)
  }

  const onOptionPress = (optionId: string) => {
    const isCorrectAnswer = optionId === currentQuestion.correctOptionId

    return isCorrectAnswer
      ? onCorrectAnswer()
      : onWrongAnswer()
  }

  return (
    <>
      <main>
        <h2 className='question'>{currentQuestion.text}</h2>

        {hasWrongAnswer
          ? <p className='error-message'>
              {i18n('games.wrongAnswer')}
            </p>
          : <QuestionOptions
              onOptionPress={onOptionPress}
              options={currentQuestion.options}
            />
        }
      </main>

      <footer className='score'>
        {score > 0 && i18n('games.score', { score })}
      </footer>
    </>
  )
}
