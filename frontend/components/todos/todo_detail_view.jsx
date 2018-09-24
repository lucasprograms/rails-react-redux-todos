import React from 'react'
import StepListItemContainer from 'Components/step_list/step_list_container'

const TodoDetailView = ({ todo, show, updateTodo, destroyTodo }) => (
  <div
    className="todo-detail-view p-1"
    style={{
      maxHeight: show ? '1000px' : '0px',
      height: show ? 'auto' : '0px',
      overflow: 'hidden'
    }}
  >
    <p className="card-text">{todo.body}</p>
    <StepListItemContainer todoId={todo.id} todo={todo}/>
    <a
      className="btn btn-outline-info btn-sm mr-3 todo__complete-button"
      onClick={() => updateTodo({ ...todo, done: !todo.done })}
      href="#"
      style={{
        fontSize: '14px',
        height: '31px',
        width: '29px'
      }}
    >
    </a>
    <a
      className="btn btn-outline-danger btn-sm todo__delete-button"
      onClick={() => destroyTodo(todo)}
      href="#"
      style={{
        fontSize: '14px',
        height: '31px',
        width: '29px'
      }}
    >
      {'\u2715'}
    </a>
  </div>
)

export default TodoDetailView
