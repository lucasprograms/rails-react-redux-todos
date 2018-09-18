import React from 'react'
import TodoListItem from './todo_list_item'
import TodoListForm from './todo_list_form'

const TodoList = ({ todos, receiveTodo, removeTodo, toggleCompleteTodo }) => (
  <div className="row mt-3 todo-list justify-content-center">
    <ul className="col-6 row container rounded"
      style={{ backgroundColor: 'beige' }}
    >
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleCompleteTodo={toggleCompleteTodo}
        />
      ))}
        </ul>
    <div className="row container justify-content-center col-12">
      <TodoListForm receiveTodo={receiveTodo} />
    </div>
  </div>
) 

export default TodoList;