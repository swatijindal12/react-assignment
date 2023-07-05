import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './QuizQuestion.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setQuizData, setUserAnswer, setScore } from '../components/quizSlice'
import QuizOption from '../common/QuizOption'

const QuizQuestion = () => {
  const dispatch = useDispatch()
  const { quizData, userResponse } = useSelector((state) => state)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [index, setIndex] = useState(0)
  const { selectedCategory } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${selectedCategory}`,
        )
        const quizQuestions = res.data.results
        dispatch(setQuizData(quizQuestions))
      } catch (error) {
        console.log('error is:', error)
      }
    }
    fetchQuestions()
    return () => clearInterval()
  }, [selectedCategory, dispatch])

  const handleSave = () => {
    let updatedScore = 0
    quizData.map((questionAns, index) => {
      if (userResponse[index] === questionAns.correct_answer) {
        updatedScore++
      }
    })
    dispatch(setScore(updatedScore))
    navigate('/quiz-score')
  }

  const handleNext = () => {
    if (currentQuestion < quizData.length) {
      setCurrentQuestion(currentQuestion + 1)
      setIndex(index + 1)
      const selectedOption = userResponse[currentQuestion]
      dispatch(setUserAnswer({ index: currentQuestion, selectedOption }))
    }
  }

  const currentQuestions = quizData[currentQuestion]
  if (quizData.length === 0 || currentQuestions === 0) {
    return <div className="spin-loader"></div>
  }
  const incorrectAnswers = currentQuestions.incorrect_answers || []
  const answer_options = [...incorrectAnswers, currentQuestions.correct_answer]

  return (
    <div className="quiz-question">
      <h2>Quiz Questions</h2>
      {quizData.length > 0 ? (
        <h3>Category: {quizData[0].category}</h3>
      ) : (
        <div className="spin-loader"></div>
      )}
      <div className="quiz">
        <h3>
          {index + 1}. {''}
          <span
            dangerouslySetInnerHTML={{ __html: currentQuestions.question }}
          />
        </h3>

        <QuizOption
          answer_options={answer_options}
          currentQuestion={currentQuestion}
        />
      </div>
      <div className="button-save">
        {index === quizData.length - 1 ? (
          <button onClick={handleSave}>Calculate Score</button>
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </div>{' '}
    </div>
  )
}

export default QuizQuestion
