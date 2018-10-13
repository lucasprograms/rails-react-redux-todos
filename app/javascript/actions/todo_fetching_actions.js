export const FETCHING_TODOS = 'FETCHING_TODOS'
export const CREATING_TODO = 'CREATING_TODO'
export const FETCHING_TODO = 'FETCHING_TODO'

export const fetchingTodos = (isFetching) => ({
  type: FETCHING_TODOS,
  isFetching
})

export const fetchingTodo = (isFetching) => ({
  type: FETCHING_TODO,
  isFetching
})


export const creatingTodo = (isCreating) => ({
  type: CREATING_TODO,
  isCreating
})

