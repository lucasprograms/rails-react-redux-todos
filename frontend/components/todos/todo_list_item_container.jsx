import { connect } from 'react-redux'
import TodoListItem from './todo_list_item'
import { fetchTodo } from 'Actions/todo_actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTodo: () => dispatch(fetchTodo(ownProps.todo.id))
})

export default connect(
  null,
  mapDispatchToProps
)(TodoListItem)
