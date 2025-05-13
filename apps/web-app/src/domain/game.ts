export type QuestionOption = {
  id: string
  imageUri?: string
  text?: string
}

export type Question = {
  correctOptionId: string
  id: string
  imageUri?: string
  options: QuestionOption[]
  text: string
}

export type Game = {
  clue: string
  id: string
  imageUri?: string
  name?: string
  questions: Question[]
  requiredCorrectAnswerCount: number
  slug: string
}
