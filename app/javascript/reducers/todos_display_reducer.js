import { SHOW_ALL_TODOS, FILTER_BY_TAG, SORT_BY_DUE_DATE, SORT_BY_CREATED_DATE } from '../actions/todo_display_actions'

const initialState = { tag: null, sortByDate: false }

const todosDisplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_TAG:
      return { ...state, tag: action.tag }
    case SHOW_ALL_TODOS:
      return { ...state, tag: null }
    case SORT_BY_DUE_DATE:
      return { ...state, sortByDate: true }
    case SORT_BY_CREATED_DATE:
      return { ...state, sortByDate: false }
    default:
      return state
  }
}

export default todosDisplayReducer
