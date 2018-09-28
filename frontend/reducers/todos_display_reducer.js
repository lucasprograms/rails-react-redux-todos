import { SHOW_ALL_TODOS, FILTER_BY_TAG } from 'Actions/todo_display_actions'

const initialState = { tag: null }

const todosDisplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_TAG:
      return { tag: action.tag }
    case SHOW_ALL_TODOS:
      return initialState
    default:
      return state
  }
}

export default todosDisplayReducer
