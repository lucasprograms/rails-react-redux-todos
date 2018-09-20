import { RECEIVE_STEP, REMOVE_STEP, TOGGLE_COMPLETE_STEP } from '../actions/step_actions'
import merge from 'lodash/merge'

const stepsReducer = (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_STEP:
      return ({
        [action.step.id]: action.step,
        ...state
      })
    case REMOVE_STEP:
      const { [`${action.step.id}`]: _, ...newSteps } = state
      return newSteps
    case TOGGLE_COMPLETE_STEP:
      let newState = merge({}, state)
      
      return Object.keys(newState)
        .map((key) => {
          if (key == action.step.id) {
            newState[key]['done'] = !newState[key]['done']
            return newState[key]
          } else {
            return newState[key]
          }
        }).reduce((accum, el) => { accum[el['id']] = newState[el['id']]; return accum }, {})
    default:
      return state
  }
}

export default stepsReducer