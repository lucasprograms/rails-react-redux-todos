import { connect } from 'react-redux'
import TodoList from './todo_list'
import { allTodos } from 'Reducers/selectors'
import { receiveTodo, fetchTodos, createTodo } from 'Actions/todo_actions'
import { fetchSteps } from 'Actions/step_actions'

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  fetchSteps: () => dispatch(fetchSteps()),
  createTodo: todo => dispatch(createTodo(todo)),
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);