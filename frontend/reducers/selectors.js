export const allTodos = (state) =>
  Object.keys(state.todos).map((key) => state.todos[key])

const allSteps = (state) =>
  Object.keys(state.steps).map((key) => state.steps[key])

export const stepsByTodoId = (state, todo_id) =>
  allSteps(state).filter(step => step.todo_id == todo_id)

