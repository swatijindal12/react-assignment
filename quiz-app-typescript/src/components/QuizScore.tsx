import React, { useContext } from 'react'
import './QuizScore.css'
import { QuizContext } from './QuizContext'
import { useNavigate } from 'react-router-dom'
import { QuizContextValue } from './QuizState'

const QuizScore = () => {
  const quizContext = useContext<QuizContextValue | undefined>(QuizContext)
  const { state } = quizContext ?? {}
  const { score } = state ?? {}
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
          <p style={{ fontWeight: 'lighter', fontStyle: 'italic' }}>
            Thank you for participating!!
          </p>
        </>
      )}
      <div>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

export default QuizScore
