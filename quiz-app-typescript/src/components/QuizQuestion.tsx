import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import './QuizQuestion.css'
import { useParams, useNavigate } from 'react-router-dom'
import { QuizContext } from './QuizContext'
import { QuizContextValue } from './QuizState'

interface Quiz {
  question: string
  incorrect_answers: any[]
  correct_answer: any
}

const QuizQuestion: React.FC = () => {
  const quizContext = useContext<QuizContextValue | undefined>(QuizContext)
  const { state, dispatch } = quizContext ?? {}
  const { quizData, userResponse } = state ?? {}
  const { selectedCategory } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${selectedCategory}`,
        )
        const quizQuestions = res.data.results
        dispatch?.({ type: 'SET_QUIZ_DATA', payload: quizQuestions })
      } catch (error) {
        console.log('error is:', error)
      }
    }
    fetchQuestions()
  }, [selectedCategory, dispatch])

  const handleSave = () => {
    let updatedScore = 0
    quizData?.map((questionAns: Quiz, index: number) => {
      if (userResponse?.[index] === questionAns.correct_answer) {
        updatedScore++
      }
    })
    dispatch?.({ type: 'SET_SCORE', payload: updatedScore })
    navigate('/quiz-score')
  }

  const handleAnswer = (indexQues: number, selectedOption: any) => {
    dispatch?.({
      type: 'SET_USER_ANSWER',
      payload: { index: indexQues, selectedOption },
    })
  }

  return (
    <div className="quiz-question">
      <h2>Quiz Questions</h2>
      {quizData?.length && quizData.length > 0 ? (
        <h3>Category: {quizData?.[0].category}</h3>
      ) : (
        <div className="spin-loader"></div>
      )}
      {quizData?.map((quizQuestion: Quiz, index: number) => (
        <div key={index} className="quiz">
          <h3>
            {index + 1}. {quizQuestion.question}
          </h3>
          <div className="quiz-option">
            {quizQuestion.incorrect_answers.map(
              (option: any, optionIndex: number) => (
                <div key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={option}
                      checked={userResponse?.[index] === option}
                      onChange={() => handleAnswer(index, option)}
                    />
                    {option}
                  </label>
                </div>
              ),
            )}
            <label>
              <input
                type="radio"
                name={quizQuestion.correct_answer}
                value={quizQuestion.correct_answer}
                checked={userResponse?.[index] === quizQuestion.correct_answer}
                onChange={() =>
                  handleAnswer(index, quizQuestion.correct_answer)
                }
              />{' '}
              {quizQuestion.correct_answer}
            </label>
          </div>
        </div>
      ))}
      <div className="button-save">
        <button onClick={handleSave}>Calculate Score</button>
      </div>
    </div>
  )
}

export default QuizQuestion
