import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import moment from 'moment'

export const PastQuizCard = props => {
  const {quiz} = props

  return (
    <div className="container pastQuizCard">
      <div>
        <div>
          Start Time: {moment(quiz.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <div>
          Finish Time:{' '}
          {moment(quiz.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <div>
          <strong>Score: {quiz.percentage}</strong>
        </div>
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
