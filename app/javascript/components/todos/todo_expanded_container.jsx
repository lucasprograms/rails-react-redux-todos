import { connect } from 'react-redux'
import { nextTodo } from '../../reducers/selectors'
import { updateTodo, destroyTodo, receiveCurrentTodo } from '../../actions/todo_actions'
import TodoExpanded from './todo_expanded'

const mapStateToProps = state => ({
  todo: state.currentTodo,
  nextTodo: nextTodo(state)
})

const mapDispatchToProps = dispatch => ({
  updateTodo: todo => dispatch(updateTodo(todo)),
  destroyTodo: todo => dispatch(destroyTodo(todo)),
  receiveCurrentTodo: todo => dispatch(receiveCurrentTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoExpanded)
