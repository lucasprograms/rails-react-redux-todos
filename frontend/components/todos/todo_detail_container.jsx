import { connect } from 'react-redux'
import TodoDetailView from './todo_detail_view'
import { updateTodo, destroyTodo } from 'Actions/todo_actions'

const mapDispatchToProps = (dispatch) => ({
  updateTodo: todo => dispatch(updateTodo(todo)),
  destroyTodo: todo => dispatch(destroyTodo(todo))
})

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
