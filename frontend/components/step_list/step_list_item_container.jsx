import { connect } from 'react-redux'
import { removeStep, toggleCompleteStep } from '../../actions/step_actions'
import StepListItem from './step_list_item'

const mapDispatchToProps = (dispatch) => ({
  removeStep: step => dispatch(removeStep(step)),
  toggleCompleteStep: step => dispatch(toggleCompleteStep(step))
})

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);