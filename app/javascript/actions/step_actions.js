import * as APIUtil from '../util/step_api_util'
import { clearErrors, receiveErrors } from './error_actions'

export const RECEIVE_STEPS = 'RECEIVE_STEPS'
export const RECEIVE_STEP = 'RECEIVE_STEP'
export const REMOVE_STEP = 'REMOVE_STEP'

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

export const fetchSteps = todoId => dispatch =>
  APIUtil.fetchSteps(todoId).then(steps => dispatch(receiveSteps(steps)))

export const createStep = (step) => dispatch =>
  APIUtil.createStep(step)
  .then(
    step => {
      dispatch(receiveStep(step))
      dispatch(clearErrors())
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )

export const updateStep = step => dispatch =>
  APIUtil.updateStep(step)
    .then(
      step => {
        dispatch(receiveStep(step))
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )

export const destroyStep = step => dispatch =>
  APIUtil.destroyStep(step)
    .then(step => dispatch(removeStep(step)))
