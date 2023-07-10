import React from 'react'
import { useSelector } from 'react-redux'
import './QuizQuestionAnswer.css'

const QuizQuestionAnswer = () => {
  const { userResponse, quizData } = useSelector((state) => state)

  return (
    <>
      {quizData.map((quizQuestion, index) => (
        <div key={index} className="quiz-score-1">
          <h3>
            {index + 1}.{' '}
            <span dangerouslySetInnerHTML={{ __html: quizQuestion.question }} />
          </h3>
          <p className="correct-ans">
            Correct Answer is:
            <span
              dangerouslySetInnerHTML={{ __html: quizQuestion.correct_answer }}
            />
          </p>
          <p className="user-response">
            Your Response is :{' '}
            <span dangerouslySetInnerHTML={{ __html: userResponse[index] }} />
          </p>
        </div>
      ))}
    </>
  )
}

export default QuizQuestionAnswer
