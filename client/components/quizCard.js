import React, {useState} from 'react'
import {InputGroup, Button} from 'react-bootstrap'

const QuizCard = props => {
  const {
    question,
    questionNumber,
    setAnswers,
    answers,
    activeQuestion,
    setActiveQuestion,
    increaseScore
  } = props
  const [prevAnswer, setPrevAnswer] = useState(-1)
  const [submitted, setSubmitted] = useState(-1)

  const handlePrevAnswer = e => {
    console.log(e.target.id, prevAnswer, 'handle')
    if (prevAnswer >= 0 && prevAnswer !== e.target.id) {
      let doc = document.getElementById(prevAnswer)
      console.dir(typeof prevAnswer)
      doc.checked = false
    }
    setPrevAnswer(e.target.id)
  }

  return (
    <div
      style={
        activeQuestion === questionNumber
          ? {display: 'block'}
          : {display: 'none'}
      }
    >
      <h5>Question {questionNumber}:</h5>
      <div className="question">{question.question}</div>
      <div className="options">
        {question.options.sort((a, b) => b.id - a.id).map((option, index) => {
          return (
            <div key={index}>
              <InputGroup className="radiobtn">
                <InputGroup.Prepend>
                  <InputGroup.Radio
                    disabled={submitted >= 0}
                    id={`${question.id}${index}`}
                    onClick={e => {
                      setAnswers({...answers, [question.id]: index})
                      handlePrevAnswer(e)
                    }}
                  />
                </InputGroup.Prepend>
                <div
                  style={
                    submitted >= 0 && option.isCorrect
                      ? {color: 'green'}
                      : {color: 'black'}
                  }
                >
                  {option.option}
                </div>
              </InputGroup>
            </div>
          )
        })}
        {questionNumber > 10 ? <div>You finsihed the quiz</div> : null}
      </div>

      {submitted >= 0 ? (
        <Button
          className="mt-3"
          onClick={() => {
            setActiveQuestion(questionNumber + 1)
          }}
        >
          Next Question
        </Button>
      ) : (
        <Button
          className="mt-3"
          disabled={!(prevAnswer >= 0)}
          onClick={() => {
            setSubmitted(prevAnswer)
            let userchoice = prevAnswer[prevAnswer.length - 1]
            if (question.options[userchoice].isCorrect) {
              increaseScore()
            }
          }}
        >
          Submit Answer
        </Button>
      )}
    </div>
  )
}

export default QuizCard
