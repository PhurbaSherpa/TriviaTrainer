import React from 'react'
import {InputGroup} from 'react-bootstrap'

const QuizCard = props => {
  const {question, questionNumber, setAnswers, answers} = props

  return (
    <div>
      <h5>Question {questionNumber}:</h5>
      <div>{question.question}</div>
      <div>
        {question.options.map((option, index) => {
          return (
            <div key={index}>
              <InputGroup className="radiobtn">
                <InputGroup.Prepend>
                  <InputGroup.Radio
                    onClick={() => {
                      setAnswers({...answers, [question.id]: index})
                    }}
                    aria-label="Radio button for following text input"
                  />
                </InputGroup.Prepend>
                <div>{option.option}</div>
              </InputGroup>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuizCard
