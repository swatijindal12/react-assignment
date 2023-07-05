import { configureStore } from '@reduxjs/toolkit'
import quizReducer from '../components/quizSlice'

const store = configureStore({
  reducer: quizReducer,
})

export default store
