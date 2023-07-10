import React, { createContext, useReducer } from 'react'
import { QuizState, QuizAction, QuizContextValue } from './QuizState'

const initialState: QuizState = {
  quizData: [],
  userResponse: [],
  score: 0,
}

const reducer = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case 'SET_QUIZ_DATA':
      return { ...state, quizData: action.payload }
    case 'SET_USER_ANSWER':
      const { index, selectedOption } = action.payload
      const updatedAnswers = [...state.userResponse]
      updatedAnswers[index] = selectedOption
      return { ...state, userResponse: updatedAnswers }
    case 'SET_SCORE':
      return { ...state, score: action.payload }
    default:
      return state
  }
}

export const QuizContext = createContext<QuizContextValue | undefined>(
  undefined,
)

export const QuizProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  )
}
