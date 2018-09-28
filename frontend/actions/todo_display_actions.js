export const SHOW_ALL_TODOS = 'SHOW_ALL_TODOS'
export const FILTER_BY_TAG = 'FILTER_BY_TAG'

export const filterByTag = (tag) => ({
  type: FILTER_BY_TAG,
  tag
})

export const showAllTodos = () => ({
  type: SHOW_ALL_TODOS
})