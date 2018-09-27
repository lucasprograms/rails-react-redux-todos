import * as APIUtil from 'Util/todo_api_util'
import { clearErrors, receiveErrors } from './error_actions'

export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const RECEIVE_TODO = 'RECEIVE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const RECEIVE_TAG = 'RECEIVE_TAG'

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

export const receiveTag = (tag, todoId) => ({
  type: RECEIVE_TAG,
  tag,
  todoId
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
      err => dispatch(receiveErrors('todos', err.responseJSON))
    )

export const updateTodo = todo => dispatch =>
  APIUtil.updateTodo(todo)
    .then(
      todo => {
        dispatch(receiveTodo(todo))
        dispatch(clearErrors())
      },
      err => dispatch(receiveErrors('todos', err.responseJSON))
    )

export const destroyTodo = todo => dispatch =>
  APIUtil.destroyTodo(todo)
    .then(todo => dispatch(removeTodo(todo)))

export const createTag = (tag, todoId) => dispatch =>
  APIUtil.createTag(tag, todoId)
    .then(
      tag => {
        dispatch(receiveTag(tag, todoId))
        dispatch(clearErrors())
      },
      err => dispatch(receiveErrors('tags', err.responseJSON))
    )
