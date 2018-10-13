export const SHOW_ALL_TODOS = 'SHOW_ALL_TODOS'
export const FILTER_BY_TAG = 'FILTER_BY_TAG'
export const SORT_BY_DUE_DATE = 'SORT_BY_DUE_DATE'
export const SORT_BY_CREATED_DATE = 'SORT_BY_CREATED_DATE'

export const filterByTag = (tag) => ({
  type: FILTER_BY_TAG,
  tag
})

export const showAllTodos = () => ({
  type: SHOW_ALL_TODOS
})

export const sortByDueDate = () => ({
  type: SORT_BY_DUE_DATE,
})

export const sortByCreatedDate = () => ({
  type: SORT_BY_CREATED_DATE,
})

