import type { Game } from '@/domain/game'

export const games: Game[] = [
  {
    id: '1',
    clue: 'Indice 1',
    name: 'Logique',
    slug: 'logique',
    requiredCorrectAnswerCount: 5,
    questions: [
      {
        id: '1',
        text: 'Laquelle de ces phrases se lit de gauche à droite et de droite à gauche ?',
        correctOptionId: '2',
        options: [
          { id: '1', text: 'mon nom me nomme' },
          { id: '2', text: 'un roc si biscornu' },
          { id: '3', text: 'stop aux potes' }
        ]
      }
    ]
  },
  {
    id: '2',
    clue: 'Indice 2',
    name: 'Maths',
    slug: 'maths',
    requiredCorrectAnswerCount: 5,
    questions: [
      {
        id: '1',
        text: 'Laquelle de ces phrases se lit de gauche à droite et de droite à gauche ?',
        correctOptionId: '2',
        options: [
          { id: '1', text: 'mon nom me nomme' },
          { id: '2', text: 'un roc si biscornu' },
          { id: '3', text: 'stop aux potes' }
        ]
      }
    ]
  },
  {
    id: '3',
    clue: 'Indice 3',
    name: 'Énigmes',
    slug: 'enigmes',
    requiredCorrectAnswerCount: 5,
    questions: [
      {
        id: '1',
        text: 'Laquelle de ces phrases se lit de gauche à droite et de droite à gauche ?',
        correctOptionId: '2',
        options: [
          { id: '1', text: 'mon nom me nomme' },
          { id: '2', text: 'un roc si biscornu' },
          { id: '3', text: 'stop aux potes' }
        ]
      }
    ]
  }
]
