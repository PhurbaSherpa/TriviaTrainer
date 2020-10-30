import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {getAllQuizzes} from '../store'
import QuizzesPage from './quizzesPage'
import PageStepper from './PageStepper'
import axios from 'axios'

export const UserHome = props => {
  const {username, getAllQuizzes, quizzes, history} = props

  const [page, setpage] = useState(0)

  useEffect(
    () => {
      getAllQuizzes()
    },
    [getAllQuizzes]
  )

  const createQuiz = async () => {
    const {data} = await axios.post('/api/quiz')
    history.push(`/quiz/${data.id}`)
  }

  return (
    <div className="container paddingtop">
      <div className="welcome mb-5">
        <h1 className="mb-5">Welcome, {username}</h1>
        <Button onClick={createQuiz} className="quizbutton">
          Take Quiz
        </Button>
      </div>
      <div className="pastquizzes mb-5">
        <PageStepper
          style={{margin: 'auto'}}
          quizzes={quizzes.length}
          page={page}
          setpage={setpage}
        />
        <h3>Past Quizzes</h3>
        <QuizzesPage
          quizzes={quizzes.slice(
            page === 0 ? 0 : page * 5 - (page - 1),
            (page + 1) * 5
          )}
        />
      </div>
    </div>
  )
}

const mapState = state => ({
  username: state.user.username,
  quizzes: state.quizzes
})
const mapDispatch = dispatch => ({
  getAllQuizzes: () => dispatch(getAllQuizzes())
})

export default connect(mapState, mapDispatch)(UserHome)

UserHome.propTypes = {
  username: PropTypes.string
}
