import React from 'react'
import {Button} from 'react-bootstrap'

/**
 * COMPONENT
 */
export const PastQuizCard = props => {
  const {quiz} = props

  return (
    <div className="container pastQuizCard">
      <div>
        <div>Start Time: {quiz.createdAt}</div>
        <div>Finish Time: {quiz.updatedAt}</div>
        <div>Score: {quiz.percentage}</div>
      </div>
      <div>
        <Button className="reviewbutton" variant="danger">
          Review
        </Button>
      </div>
    </div>
  )
}

export default PastQuizCard
