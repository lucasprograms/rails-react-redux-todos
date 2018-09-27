import { connect } from 'react-redux'
import TodoTagsView from './todo_tags_view'
import { createTag } from 'Actions/todo_actions'

const mapStateToProps = (state) => ({
  errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  createTag: (tag, todoId) => dispatch(createTag(tag, todoId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoTagsView);