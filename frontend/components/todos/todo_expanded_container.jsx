import { connect } from 'react-redux'
import { updateTodo } from 'Actions/todo_actions'
import TodoExpanded from './todo_expanded'

const mapStateToProps = state => ({
  todo: state.currentTodo
})

const mapDispatchToProps = dispatch => ({
  updateTodo: todo => dispatch(updateTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoExpanded)
