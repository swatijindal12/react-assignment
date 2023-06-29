import React, { createContext, useReducer } from 'react'

const initialState = {
  quizData: [],
  userResponse: [],
  score: 0,
}

const reducer = (state, action) => {
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

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  )
}
