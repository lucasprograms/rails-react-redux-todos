import { connect } from 'react-redux'
import { receiveStep, createStep } from '../../actions/step_actions'
import { formatStepsAsArray } from '../../reducers/selectors'
import StepList from './step_list'

const mapStateToProps = (state, ownprops) => ({
  steps: formatStepsAsArray(ownprops.steps)
})

const mapDispatchToProps = (dispatch) => ({
  receiveStep: step => dispatch(receiveStep(step)),
  createStep: step => dispatch(createStep(step))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);