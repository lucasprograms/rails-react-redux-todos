import { connect } from 'react-redux'
import TodoTagsView from './todo_tags_view'
import { createTag } from '../../actions/todo_actions'
import { filterByTag, showAllTodos } from '../../actions/todo_display_actions'

const mapStateToProps = (state) => ({
  errors: state.errors,
  currentTagFilterTag: state.todosDisplay.tag
})

const mapDispatchToProps = (dispatch) => ({
  createTag: (tag, todoId) => dispatch(createTag(tag, todoId)),
  filterByTag: tag => dispatch(filterByTag(tag)),
  showAllTodos: () => dispatch(showAllTodos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoTagsView);