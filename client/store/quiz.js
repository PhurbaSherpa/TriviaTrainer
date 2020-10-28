import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_QUIZZES = 'GET_ALL_QUIZZES'

/**
 * INITIAL STATE
 */
const defaultQuizState = {
  allQuizzes: [],
  selected: {}
}

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
export default function(state = defaultQuizState, action) {
  switch (action.type) {
    case GET_ALL_QUIZZES:
      return {...state, allQuizzes: action.quizzes}
    default:
      return state
  }
}
