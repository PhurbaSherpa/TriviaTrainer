import React from 'react'
import {Button} from 'react-bootstrap'
import history from 'history'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const PastQuizCard = props => {
  const {quiz, history} = props

  return (
    <div className="container pastQuizCard">
      <div>
        <div>Start Time: {quiz.createdAt}</div>
        <div>Finish Time: {quiz.updatedAt}</div>
        <div>Score: {quiz.percentage}</div>
      </div>
      <div>
        <Button
          as={Link}
          to={`/reviewquiz/${quiz.id}`}
          className="reviewbutton"
          variant="danger"
        >
          Review
        </Button>
      </div>
    </div>
  )
}

export default PastQuizCard
