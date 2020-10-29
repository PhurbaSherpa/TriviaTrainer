import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import ReviewCard from './reviewCard'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const QuizReview = props => {
  const id = props.match.params.id
  const [quizQuestions, setquizQuestions] = useState({})
  useEffect(() => {
    async function fetchQuizQuestions() {
      const {data} = await axios.get(`/api/quiz/${id}`)
      console.log(data)
      setquizQuestions(data)
    }
    fetchQuizQuestions()
  }, [])

  return (
    <div className="container paddingtop mb-5">
      <div>
        <h3>Review Quiz#{id}</h3>
        <Button as={Link} to="/home" className="mb-5">
          Back
        </Button>
      </div>
      {quizQuestions.questions
        ? quizQuestions.questions.map((question, index) => {
            return (
              <ReviewCard
                question={question}
                key={index}
                questionNumber={index + 1}
              />
            )
          })
        : null}
    </div>
  )
}

export default QuizReview
