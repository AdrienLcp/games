export type QuestionOption = {
  id: string
  imageUri?: string
  text?: string
}

export type Question = {
  id: string
  imageUri?: string
  text: string
  options: QuestionOption[]
  correctOptionId: string
}

export type Game = {
  id: string
  imageUri?: string
  name?: string
  slug: string
  questions: Question[]
  requiredCorrectAnswerCount: number
}
