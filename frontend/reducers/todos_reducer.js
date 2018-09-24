import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions'
import merge from 'lodash/merge'

const todosReducer = (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.keys(action.todos).reduce(
        (accum, key) => { accum[action.todos[key]['id']] = action.todos[key]; return accum }, {}
      )
    case RECEIVE_TODO:
      return ({
        [action.todo.id]: action.todo,
        ...state
      })
    case REMOVE_TODO:
      const { [`${action.todo.id}`]: _, ...newTodos } = state
      return newTodos
    default:
      return state
  }
}

export default todosReducer

