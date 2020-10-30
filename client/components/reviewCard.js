import React from 'react'

const ReviewCard = props => {
  const {question, questionNumber} = props

  return (
    <div>
      <h5>Question {questionNumber}:</h5>
      <div className="question">{question.question}</div>
      <ul>
        {question.options.sort((a, b) => b.id - a.id).map((option, index) => {
          return (
            <li
              key={index}
              style={
                option.isCorrect
                  ? {color: 'green'}
                  : question.quizQuestion.userChoice === option.id
                    ? {color: 'red'}
                    : {color: 'black'}
              }
            >
              {option.option}{' '}
              {option.isCorrect
                ? null
                : question.quizQuestion.userChoice === option.id
                  ? 'Your Answer'
                  : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ReviewCard
