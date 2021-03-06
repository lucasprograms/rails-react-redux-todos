import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions'

const stepsReducer = (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_STEPS:
      return Object.keys(action.steps).reduce(
        (accum, key) => { accum[action.steps[key]['id']] = action.steps[key]; return accum }, {}
      )
    case RECEIVE_STEP:
      return ({
        ...state,
        [action.step.id]: action.step
      })
    case REMOVE_STEP:
      const { [`${action.step.id}`]: _, ...newSteps } = state
      return newSteps
    default:
      return state
  }
}

export default stepsReducer