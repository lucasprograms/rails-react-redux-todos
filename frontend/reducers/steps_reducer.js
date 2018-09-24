import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions'
import merge from 'lodash/merge'

const stepsReducer = (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_STEPS:
      return Object.keys(action.steps).reduce(
        (accum, key) => { accum[action.steps[key]['id']] = action.steps[key]; return accum }, {}
      )
    case RECEIVE_STEP:
      return ({
        [action.step.id]: action.step,
        ...state
      })
    case REMOVE_STEP:
      const { [`${action.step.id}`]: _, ...newSteps } = state
      return newSteps
    default:
      return state
  }
}

export default stepsReducer