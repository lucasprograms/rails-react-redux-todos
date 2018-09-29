import { FETCHING_TODOS, CREATING_TODO } from 'Actions/todo_fetching_actions'

const initialState = { isFetching: false, isCreating: false }

const todosDisplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TODOS:
      return { ...state, isFetching: action.isFetching }
    case CREATING_TODO:
      return { ...state, isCreating: action.isCreating }
    default:
      return state
  }
}

export default todosDisplayReducer
