import { connect } from 'react-redux'
import { receiveStep } from '../../actions/step_actions'
import { stepsByTodoId } from '../../reducers/selectors'
import StepList from './step_list'

const mapDispatchToProps = (dispatch) => ({
  receiveStep: step => dispatch(receiveStep(step))
})

const mapStateToProps = (state, ownprops) => ({
  steps: stepsByTodoId(state, ownprops.todoId),
  todoId: ownprops.todoId
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);