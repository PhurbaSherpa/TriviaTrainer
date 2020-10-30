import axios from 'axios'

const GET_ALL_QUIZZES = 'GET_ALL_QUIZZES'

const defaultQuizzesState = []

const gotAllQuizzes = quizzes => ({type: GET_ALL_QUIZZES, quizzes})

export const getAllQuizzes = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/quiz')
    dispatch(gotAllQuizzes(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultQuizzesState, action) {
  switch (action.type) {
    case GET_ALL_QUIZZES:
      return action.quizzes
    default:
      return state
  }
}
