import Category from '../src/components/Category'
import QuizQuestion from '../src/components/QuizQuestion'
import QuizScore from '../src/components/QuizScore'
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

const App: React.FC = () => {
  return (
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  )
}

export default App
