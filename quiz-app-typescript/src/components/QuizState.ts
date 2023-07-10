export interface QuizState {
  quizData: any[]
  userResponse: string[]
  score: number
}

export interface QuizAction {
  type: string
  payload?: any
}

export interface QuizContextValue {
  state: QuizState
  dispatch: React.Dispatch<QuizAction>
}
