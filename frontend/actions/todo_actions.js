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
