import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, TOGGLE_COMPLETE_TODO } from '../actions/todo_actions'
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
    case TOGGLE_COMPLETE_TODO:
      let newState = merge({}, state)
      
      return Object.keys(newState)
        .map((key) => {
          if (key == action.todo.id) {
            newState[key]['done'] = !newState[key]['done']
            return newState[key]
          } else {
            return newState[key]
          }
        }).reduce((accum, el) => { accum[el['id']] = newState[el['id']]; return accum }, {})
    default:
      return state
  }
}

export default todosReducer

