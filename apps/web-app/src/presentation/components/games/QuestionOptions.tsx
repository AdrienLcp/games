import { type FC, useEffect, useState } from 'react'

import type { QuestionOption } from '@/domain/game'
import { Button } from '@/presentation/components'

import './QuestionOptions.sass'

type QuestionOptionsProps = {
  correctOptionId: string
  onCorrectAnswer: () => void
  options: QuestionOption[]
}

const ERROR_MESSAGE_DURATION_IN_MS = 3000

export const QuestionOptions: FC<QuestionOptionsProps> = ({ correctOptionId, onCorrectAnswer, options }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!errorMessage) {
      return
    }

    const timeoutId = setTimeout(() => {
      setErrorMessage(null)
    }, ERROR_MESSAGE_DURATION_IN_MS)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [errorMessage])

  const onOptionPress = (optionId: string) => {
    if (optionId === correctOptionId) {
      onCorrectAnswer()
      return
    }

    setErrorMessage('Wrong answer!')
  }

  return (
    <div className='question-options'>
      <ul className='options-list'>
        {options.map(option => (
          <li key={option.id}>
            <Button
              className='option'
              isDisabled={!!errorMessage}
              onPress={() => onOptionPress(option.id)}
            >
              {option.text}
            </Button>
          </li>
        ))}
      </ul>

      {errorMessage && (
        <p className='error-message'>
          {errorMessage}
        </p>
      )}
    </div>
  )
}
