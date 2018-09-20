import React, { Component } from 'react'
import TodoListItem from './todo_list_item'
import TodoListForm from './todo_list_form'

class TodoList extends Component {
  componentDidMount () {
    this.props.fetchTodos()
  }

  render () {
    const { createTodo, errors, removeTodo, toggleCompleteTodo, todos } = this.props

    return (
      <div className="row mt-3 todo-list justify-content-center">
        <ul className="row col-10 col-sm-8 rounded"
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
        <div className="row justify-content-center col-10 col-sm-8">
          <TodoListForm createTodo={createTodo} errors={errors} />
        </div>
      </div>
    )
  }
}

export default TodoList;