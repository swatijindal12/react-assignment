import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAnswer } from '../components/quizSlice'

const QuizOption = ({ answer_options, currentQuestion }) => {
  const dispatch = useDispatch()
  const { userResponse } = useSelector((state) => state)

  const handleAnswer = (selectedOption) => {
    dispatch(setUserAnswer({ index: currentQuestion, selectedOption }))
  }

  return (
    <div className="quiz-option">
      {answer_options.map((option, optionIndex) => (
        <div key={optionIndex}>
          <label>
            <input
              type="radio"
              name={`question${currentQuestion}`}
              value={option}
              checked={userResponse[currentQuestion] === option}
              onChange={() => handleAnswer(option)}
            />
            <span dangerouslySetInnerHTML={{ __html: option }} />
          </label>
        </div>
      ))}
    </div>
  )
}

export default QuizOption
