import React from 'react'
import PastQuizCard from './pastQuizCard'

const QuizzesPage = props => {
  const {quizzes} = props
  return (
    <div className="container">
      <div className="row">
        {quizzes.map((quiz, index) => {
          return <PastQuizCard key={index} quiz={quiz} />
        })}
      </div>
    </div>
  )
}

export default QuizzesPage
