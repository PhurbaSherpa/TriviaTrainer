import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_QUIZZES = 'GET_ALL_QUIZZES'

/**
 * INITIAL STATE
 */
const defaultQuizzesState = []

/**
 * ACTION CREATORS
 */
const gotAllQuizzes = quizzes => ({type: GET_ALL_QUIZZES, quizzes})

/**
 * THUNK CREATORS
 */
export const getAllQuizzes = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/quiz')
    dispatch(gotAllQuizzes(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultQuizzesState, action) {
  switch (action.type) {
    case GET_ALL_QUIZZES:
      return action.quizzes
    default:
      return state
  }
}
