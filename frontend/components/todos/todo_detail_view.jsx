import React from 'react'
import StepListItemContainer from '../step_list/step_list_container'

const TodoDetailView = ({ todo, show, toggleCompleteTodo, removeTodo }) => (
  <div
    className="todo-detail-view p-1"
    style={{
      maxHeight: show ? '300px' : '0px',
      height: show ? 'auto' : '0px',
      overflow: 'hidden'
    }}
  >
    <p className="card-text">{todo.body}</p>
    <StepListItemContainer todoId={todo.id}/>
    <a
      className="btn btn-outline-info btn-sm mr-3 todo__complete-button"
      onClick={() => toggleCompleteTodo(todo)}
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
      onClick={() => removeTodo(todo)}
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
