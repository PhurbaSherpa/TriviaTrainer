import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {getAllQuizzes} from '../store'
import {PastQuizCard} from './pastQuizCard'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {username, getAllQuizzes, quizzes} = props

  useEffect(
    () => {
      getAllQuizzes()
    },
    [getAllQuizzes]
  )

  return (
    <div className="container paddingtop">
      <div className="welcome mb-5">
        <h1 className="mb-5">Welcome, {username}</h1>
        <Button className="quizbutton">Take Quiz</Button>
      </div>
      <div className="pastquizzes">
        <h3>Past Quizzes</h3>
        {quizzes && quizzes.length
          ? quizzes.map(quiz => {
              return <PastQuizCard quiz={quiz} />
            })
          : null}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({
  username: state.user.username,
  quizzes: state.quiz.allQuizzes
})
const mapDispatch = dispatch => ({
  getAllQuizzes: () => dispatch(getAllQuizzes())
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  username: PropTypes.string
}
