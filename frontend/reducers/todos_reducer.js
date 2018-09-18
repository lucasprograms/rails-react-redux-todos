import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, TOGGLE_COMPLETE_TODO } from '../actions/todo_actions'
import merge from 'lodash/merge'

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false,
    index: 0
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true,
    index: 1
  },
  3: {
    id: 3,
    title: 'eat car',
    body: 'with soap',
    done: false,
    index: 2
  },
  4: {
    id: 4,
    title: 'drink dog',
    body: 'with shampoo',
    done: true,
    index: 3
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.keys(action.todos[0]).reduce(
        (accum, key) => { accum[key] = action.todos[0][key]; return accum }, {}
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

