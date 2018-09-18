import { RECEIVE_STEP, REMOVE_STEP, TOGGLE_COMPLETE_STEP } from '../actions/step_actions'
import merge from 'lodash/merge'

const initialState = {
  1: {
    id: 1,
    title: 'walk to store',
    done: false,
    todo_id: 1
  },
  2: {
    id: 2,
    title: 'buy soap',
    done: false,
    todo_id: 1
  },
  3: {
    id: 3,
    title: 'crush the patriarchy',
    done: false,
    todo_id: 3
  },
  4: {
    id: 4,
    title: 'destroy soap',
    done: false,
    todo_id: 4
  }
}

const stepsReducer = (state = initialState, action) => {
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