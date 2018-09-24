import { connect } from 'react-redux'
import { destroyStep, updateStep } from '../../actions/step_actions'
import StepListItem from './step_list_item'

const mapDispatchToProps = (dispatch) => ({
  destroyStep: step => dispatch(destroyStep(step)),
  updateStep: step => dispatch(updateStep(step))
})

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);