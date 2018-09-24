import * as APIUtil from '../../util/step_api_util'
import { clearErrors, receiveErrors } from './error_actions'

export const RECEIVE_STEPS = 'RECEIVE_STEPS'
export const RECEIVE_STEP = 'RECEIVE_STEP'
export const REMOVE_STEP = 'REMOVE_STEP'
export const TOGGLE_COMPLETE_STEP = 'TOGGLE_COMPLETE_STEP'

export const receiveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps
})

export const receiveStep = (step) => ({
  type: RECEIVE_STEP,
  step
})

export const removeStep = (step) => ({
  type: REMOVE_STEP,
  step
})

export const toggleCompleteStep = (step) => ({
  type: TOGGLE_COMPLETE_STEP,
  step
})

export const fetchSteps = todoId => dispatch =>
  APIUtil.fetchSteps(todoId).then(steps => dispatch(receiveSteps(steps)))

export const createStep = (step) => dispatch => {
  return APIUtil.createStep(step)
  .then(
    step => {
      dispatch(receiveStep(step))
      dispatch(clearErrors())
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
}
