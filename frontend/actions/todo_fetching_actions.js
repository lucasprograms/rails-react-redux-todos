export const FETCHING_TODOS = 'FETCHING_TODOS'
export const CREATING_TODO = 'CREATING_TODO'

export const fetchingTodos = (isFetching) => ({
  type: FETCHING_TODOS,
  isFetching
})

export const creatingTodo = (isCreating) => ({
  type: CREATING_TODO,
  isCreating
})

