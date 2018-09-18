import { connect } from 'react-redux'
import TodoDetailView from './todo_detail_view'
import { toggleCompleteTodo, removeTodo } from '../../actions/todo_actions'

const mapDispatchToProps = (dispatch) => ({
  toggleCompleteTodo: todo => dispatch(toggleCompleteTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
})

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
