import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quizData: [],
  userResponse: [],
  score: 0,
}

const quizSlice = createSlice({
  name: 'Quiz',
  initialState,
  reducers: {
    setQuizData: (state, action) => {
      state.quizData = action.payload
    },
    setUserAnswer: (state, action) => {
      const { index, selectedOption } = action.payload
      state.userResponse[index] = selectedOption
    },
    setScore: (state, action) => {
      state.score = action.payload
    },
  },
})

export const { setQuizData, setUserAnswer, setScore } = quizSlice.actions
export default quizSlice.reducer
