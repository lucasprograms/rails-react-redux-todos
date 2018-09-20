import { connect } from 'react-redux'
import TodoList from './todo_list'
import { allTodos } from '../../reducers/selectors'
import { receiveTodo, fetchTodos, createTodo } from '../../actions/todo_actions'

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);