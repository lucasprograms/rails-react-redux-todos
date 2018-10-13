import { connect } from 'react-redux'
import TodoList from './todo_list'
import { allTodos, filterByTag, dueDateSort } from 'Reducers/selectors'
import { receiveTodo, fetchTodo, fetchTodos, createTodo } from 'Actions/todo_actions'
import { showAllTodos, sortByDueDate, sortByCreatedDate } from 'Actions/todo_display_actions'
import { fetchSteps } from 'Actions/step_actions'

const getTodos = (state) => {
  const todos = state.todosDisplay.tag ? filterByTag(state) : allTodos(state)
  
  return state.todosDisplay.sortByDate ? todos.sort(dueDateSort) : todos
}

const mapStateToProps = (state) => ({
  todos: getTodos(state),
  errors: state.errors,
  activeTodoId: state.currentTodo.id,
  filteredByTag: state.todosDisplay.tag,
  isFetching: state.todosFetching.isFetching,
  isCreating: state.todosFetching.isCreating,
  isSortedByDate: !!state.todosDisplay.sortByDate
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  fetchTodo: id => dispatch(fetchTodo(id)),
  createTodo: todo => dispatch(createTodo(todo)),
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  showAllTodos: () => dispatch(showAllTodos()),
  sortByDueDate: () => dispatch(sortByDueDate()),
  sortByCreatedDate: () => dispatch(sortByCreatedDate())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);