import Category from './components/Category'
import QuizQuestion from './components/QuizQuestion'
import QuizScore from './components/QuizScore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/store/store'

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
