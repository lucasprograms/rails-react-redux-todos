import * as APIUtil from '../../util/todo_api_util'
import { clearErrors, receiveErrors } from './error_actions'

export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const RECEIVE_TODO = 'RECEIVE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO'

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
})

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
})

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
})

export const toggleCompleteTodo = (todo) => ({
  type: TOGGLE_COMPLETE_TODO,
  todo
})

export const fetchTodos = () => (dispatch) =>
  APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))

export const createTodo = todo => (dispatch) =>
  APIUtil.createTodo(todo)
    .then(
      todo => {
        dispatch(receiveTodo(todo))
        dispatch(clearErrors())
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )

export const updateTodo = todo => dispatch =>
  APIUtil.updateTodo(todo)
    .then(
      todo => {
        dispatch(receiveTodo(todo))
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )

export const destroyTodo = todo => dispatch =>
  APIUtil.destroyTodo(todo)
    .then(todo => dispatch(removeTodo(todo)))
