import Category from './components/Category'
import QuizQuestion from './components/QuizQuestion'
import QuizScore from './components/QuizScore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QuizProvider } from './components/QuizContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Category />,
  },
  {
    path: '/quiz-question/:selectedCategory',
    element: <QuizQuestion />,
  },
  {
    path: '/quiz-score',
    element: <QuizScore />,
  },
])

const App = () => {
  return (
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  )
}

export default App
