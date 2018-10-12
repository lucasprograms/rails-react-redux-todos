import { connect } from 'react-redux'
import TodoExpanded from './todo_expanded'
import { fetchTodo } from 'Actions/todo_actions'

const mapDispatchToProps = dispatch => ({
  fetchTodo: id => dispatch(fetchTodo(id))
})

const mapStateToProps = state => ({
  todo: state.currentTodo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoExpanded)
