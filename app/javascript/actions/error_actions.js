export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const receiveErrors = (component, errors) => ({
  type: RECEIVE_ERRORS,
  component,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})