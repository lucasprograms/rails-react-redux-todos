export const fetchSteps = () =>
  $.get(`/api/steps`)

export const createStep = (step) =>
  $.ajax({
    url: `api/todos/${step.todo_id}/steps`,
    method: 'POST',
    data: { step }
  })

const createAjax = (method, step) =>
  $.ajax({
    url: `api/steps/${id}`,
    method,
    data: { step }
  })

export const updateStep = step => createAjax('PATCH', step)
export const destroyStep = step => createAjax('DELETE', step)
