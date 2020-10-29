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
  useEffect(() => {
    async function fetchRandomQuestions() {
      const {data} = await axios.get(`/api/questions`)
      console.log(data)
      setQuestions(data)
    }
    fetchRandomQuestions()
  }, [])

  const calculateScore = () => {
    let score = 0
    for (let question of questions) {
      let choice = answers[question.id]
      if (question.options[choice].isCorrect) {
        score += 10
      }
      answers[question.id] = question.options[choice].id
    }
    return score
  }

  const handleSubmit = async () => {
    let score = calculateScore()
    await axios.post('/api/quiz/submit', {
      quizId: id,
      questionAnswers: answers,
      percentage: score
    })
    history.push('/quizcompleted')
  }

  return (
    <div className="container paddingtop mb-5">
      <div>
        <h3>Quiz#{id}</h3>
        <Button as={Link} to="/home" className="mb-5">
          Back
        </Button>
      </div>
      {questions
        ? questions.map((question, index) => {
            return (
              <QuizCard
                question={question}
                key={index}
                questionNumber={index + 1}
                setAnswers={setAnswers}
                answers={answers}
              />
            )
          })
        : null}
      <Button className="my-5" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}

export default Quiz
