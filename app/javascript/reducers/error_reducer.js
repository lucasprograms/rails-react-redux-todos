import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions'

const initialState = { todos: [], todo: [], steps: [], tags: [] }
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return { ...state, [action.component]: action.errors }
    case CLEAR_ERRORS:
      return initialState
    default:
      return state
  }
}

export default errorReducer
