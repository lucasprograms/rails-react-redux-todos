import { RECEIVE_CURRENT_TODO } from 'Actions/todo_actions'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_TODO:
      return action.todo
    default:
      return state
  }
}
