export const allTodos = (state) =>
  Object.keys(state.todos).map((key) => state.todos[key])

export const nextTodo = (state) => {
  const todosArray = allTodos(state)
  const todoIndex = todosArray.indexOf(state.currentTodo)
  const nextIndex = todoIndex === todosArray.length - 1 ? 0 : todoIndex + 1
  return todosArray[nextIndex]
}
  

export const filterByTag = state =>
  allTodos(state)
    .filter(todo => todo.tags.filter(tag => tag.name === state.todosDisplay.tag.name).length)

export const formatStepsAsArray = (steps = {}) =>
  Object.keys(steps).map((key) => steps[key])

export const dueDateSort = (todo1, todo2) => {
  if (!todo1.due_date && !todo2.due_date) {
    return 0
  } else if (!todo1.due_date) {
    return 1
  } else if (!todo2.due_date) {
    return -1
  } else if (todo1.due_date < todo2.due_date) {
    return -1
  } else if (todo1.due_date > todo2.due_date) {
    return 1
  } else {
    return 0
  }
}

