export const fetchTodos = () =>
  $.get('/api/todos')

export const fetchTodo = id =>
  $.get(`/api/todos/${id}`)

const createUrlPath = (method, id) =>
  `api/todos${method.toLowerCase() === 'post' ? '' : `/${id}`}`

const createAjax = (method, todo) =>
  $.ajax({
    url: createUrlPath(method, todo.id),
    method,
    data: { todo }
  })

export const updateTodo = todo => createAjax('PATCH', todo)
export const destroyTodo = todo => createAjax('DELETE', todo)
export const createTodo = todo => createAjax('POST', todo)

export const createTag = (tag, todoId) =>
  $.ajax({
    url: `api/todos/${todoId}/tags`,
    method: 'POST',
    data: { tag }
  })
