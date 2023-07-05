import React from 'react'
import './QuizScore.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import QuizQuestionAnswer from '../common/QuizQuestionAnswer'

const QuizScore = () => {
  const { quizData, score } = useSelector((state) => state)
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/')
  }

  return (
    <div className="quiz-score">
      <h2>Quiz Score</h2>
      {score === undefined ? (
        <p>Score is: 0/10</p>
      ) : (
        <>
          {' '}
          <p>Score is: {score}/10</p>
        </>
      )}
      <div>
        <>
          <QuizQuestionAnswer />
          <p style={{ fontWeight: 'lighter', fontStyle: 'italic' }}>
            Thank you for participating!!
          </p>
        </>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

export default QuizScore
