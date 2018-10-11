import { connect } from 'react-redux'
import { receiveStep, createStep } from 'Actions/step_actions'
import { formatStepsAsArray } from 'Reducers/selectors'
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