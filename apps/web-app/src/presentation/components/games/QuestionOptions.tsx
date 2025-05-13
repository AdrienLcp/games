import type { FC } from 'react'

import type { QuestionOption } from '@/domain/game'
import { Button } from '@/presentation/components'

import './QuestionOptions.sass'

type QuestionOptionsProps = {
  onOptionPress: (optionId: string) => void
  options: QuestionOption[]
}

export const QuestionOptions: FC<QuestionOptionsProps> = ({ onOptionPress, options }) => (
  <div className='question-options'>
    <ul className='options-list'>
      {options.map(option => (
        <li key={option.id}>
          <Button
            className='option'
            onPress={() => onOptionPress(option.id)}
          >
            {option.text}
          </Button>
        </li>
      ))}
    </ul>
  </div>
)
