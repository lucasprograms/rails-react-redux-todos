import React, { Component } from 'react'
import TodoListItem from './todo_list_item'
import TodoListForm from './todo_list_form'

class TodoList extends Component {
  componentDidMount () {
    this.props.fetchTodos().then(() => this.props.fetchSteps())
  }

  render () {
    const {
      createTodo,
      errors,
      filteredByTag,
      removeTodo,
      showAllTodos,
      todos,
      toggleCompleteTodo
    } = this.props

    const TodoPlaceholder = () => <li className="pt-2 pb-2">Todos go here!<br />Try building one using the form below &#x2193;</li>
    const FilteredByTagHeader = () => {
      return (
        <div className="d-flex justify-content-between align-items-center alert alert-info col-10 offset-1">
          <h5 className="mt-2">
            Showing <span className="badge badge-secondary">{filteredByTag.name}</span> Todos
          </h5>
          <button type="button" className="btn btn-outline-dark" onClick={showAllTodos}>Show All</button>
        </div>
      )
    }

    return (
      <div className="mt-3">
        <div className="row">
          { filteredByTag ? <FilteredByTagHeader /> : <div className="col-12 mb-2" style={{ height: '24px' }} />}
        </div>
        <div className="row todo-list justify-content-center">
          <ul className="row col-10 rounded"
            style={{ backgroundColor: 'beige' }}
          >
            {todos.length ? todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                toggleCompleteTodo={toggleCompleteTodo}
                showTooltip={todos.length === 1}
              />
            )) : <TodoPlaceholder />}
              </ul>
          <div className="row justify-content-center col-10">
            <TodoListForm createTodo={createTodo} errors={errors} />
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList;