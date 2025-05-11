import { type FC, useState } from 'react'

import type { Game } from '@/domain/game'
import { QuestionOptions } from '@/presentation/components'

import './GamePlay.sass'

type GameProps = {
  game: Game
}

export const GamePlay: FC<GameProps> = ({ game }) => {
  const [score, setScore] = useState<number>(0)

  // We can use score as index & render the gift if the score is equal to the requiredCorrectAnswerCount
  // const currentQuestion = game.questions[score] ?? null

  // if (score >= game.requiredCorrectAnswerCount) {
  //   return (
  //     <main>
  //       <h2>Félicitations !</h2>
  //       <p>Vous avez débloqué l&apos;indice.</p>
  //       <p>L&apos;indice est ...</p>
  //     </main>
  //   )
  // }

  // if (!currentQuestion) {
  //   return (
  //     <main>
  //       <h2>Plus de question...</h2>
  //       <p>Désolé, t&apos;es trop nul.</p>
  //       <Button onPress={() => window.location.reload()}>Rafraichir</Button>
  //     </main>
  //   )
  // }

  const currentQuestion = game.questions[0] ?? null

  return (
    <>
      <main>
        <h2 className='question'>{currentQuestion.text}</h2>

        <QuestionOptions
          correctOptionId={currentQuestion.correctOptionId}
          options={currentQuestion.options}
          onCorrectAnswer={() => setScore(previousScore => previousScore + 1)}
        />
      </main>

      <footer className='score'>
        {score > 0 && `Score : ${score}`}
      </footer>
    </>
  )
}
