export const allTodos = (state) =>
  Object.keys(state.todos).map((key) => state.todos[key])

export const filterByTag = state =>
  allTodos(state)
    .filter(todo => todo.tags.filter(tag => tag.name === state.todosDisplay.tag.name).length)

const allSteps = (state) =>
  Object.keys(state.steps).map((key) => state.steps[key])

export const stepsByTodoId = (state, todo_id) =>
  allSteps(state).filter(step => step.todo_id == todo_id)

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

