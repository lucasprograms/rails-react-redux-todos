import { connect } from 'react-redux'
import TodoList from './todo_list'
import { allTodos, filterByTag } from 'Reducers/selectors'
import { receiveTodo, fetchTodos, createTodo } from 'Actions/todo_actions'
import { showAllTodos } from 'Actions/todo_display_actions'
import { fetchSteps } from 'Actions/step_actions'

const mapStateToProps = (state) => ({
  todos: state.todosDisplay.tag ? filterByTag(state) : allTodos(state),
  errors: state.errors,
  filteredByTag: state.todosDisplay.tag
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  fetchSteps: () => dispatch(fetchSteps()),
  createTodo: todo => dispatch(createTodo(todo)),
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  showAllTodos: () => dispatch(showAllTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);