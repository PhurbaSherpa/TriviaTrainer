import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import QuizCard from './quizCard'
import {Link} from 'react-router-dom'
import histroy from 'history'

/**
 * COMPONENT
 */
const Quiz = props => {
  const {history} = props
  const id = props.match.params.id
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [activeQuestion, setActiveQuestion] = useState(1)
  const [score, setScore] = useState(0)
  useEffect(() => {
    async function fetchRandomQuestions() {
      const {data} = await axios.get(`/api/questions`)
      console.log(data)
      setQuestions(data)
    }
    fetchRandomQuestions()
  }, [])

  const increaseScore = () => {
    setScore(score + 10)
  }

  const handleSubmit = async () => {
    for (let question of questions) {
      let choice = answers[question.id]
      answers[question.id] = question.options[choice].id
    }
    await axios.post('/api/quiz/submit', {
      quizId: id,
      questionAnswers: answers,
      percentage: score
    })
    history.push('/home')
  }

  return (
    <div className="container paddingtop mb-5">
      <div>
        <h3>Quiz#{id}</h3>
        <div>Score: {score}</div>
        <Button as={Link} to="/home" className="mb-5">
          Quit
        </Button>
      </div>
      {questions
        ? questions.sort((a, b) => b.id - a.id).map((question, index) => {
            return (
              <QuizCard
                question={question}
                key={index}
                questionNumber={index + 1}
                setAnswers={setAnswers}
                answers={answers}
                activeQuestion={activeQuestion}
                setActiveQuestion={setActiveQuestion}
                increaseScore={increaseScore}
              />
            )
          })
        : null}
      {activeQuestion > 10 ? (
        <Button className="my-5" onClick={handleSubmit}>
          Submit
        </Button>
      ) : null}
    </div>
  )
}

export default Quiz
