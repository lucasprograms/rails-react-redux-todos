import { RECEIVE_ERRORS, CLEAR_ERRORS } from 'Actions/error_actions'

const initialState = { todos: [], steps: [], tags: [] }
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
