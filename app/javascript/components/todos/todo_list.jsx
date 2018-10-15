import React, { Component } from 'react'
import { css } from 'react-emotion';
import { HashLoader } from 'react-spinners'
import TodoListItemContainer from './todo_list_item_container'
import TodoListForm from './todo_list_form'

const override = css`
    flex: 0 0 100%;
`;


class TodoList extends Component {
  componentDidMount () {
    this.props.fetchTodos().then(
      todos => {
        const todoKeys = Object.keys(todos)
        if (todoKeys.length) {
          const todo = todos[todoKeys[0]]
          return this.props.fetchTodo(todo.id)
        }
    })
  }

  sortByDueDate () {
    this.props.sortByDueDate()
  }

  sortByCreatedDate () {
    this.props.sortByCreatedDate()
  }

  render () {
    const {
      activeTodoId,
      createTodo,
      errors,
      filteredByTag,
      isCreating,
      isFetching,
      isSortedByDate,
      removeTodo,
      showAllTodos,
      todos,
      toggleCompleteTodo
    } = this.props

    const TodoPlaceholder = () => <li className="pt-2 pb-2">Todos go here!<br />Try building one using the button below</li>
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
      <div className="col-lg-3 border-right">
        <div className="col-12 d-flex justify-content-end pr-0 mt-2">
          <div className="dropdown">
            <button className="btn btn-sm btn-link text-secondary pr-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Order By: {isSortedByDate ? 'Due Date' : 'Date Created'}
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" onClick={this.sortByCreatedDate.bind(this)} href="#">Date Created</a>
              <a className="dropdown-item" onClick={this.sortByDueDate.bind(this)} href="#">Due Date</a>
            </div>
          </div>
        </div>

        <div>
          <HashLoader
            className={override}
            sizeUnit={"px"}
            size={50}
            color={'#123abc'}
            loading={isFetching}
          />
          <div className={`${isFetching ? 'd-none' : ''}`}>
            {
              todos.map((todo) => (
                <TodoListItemContainer
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  toggleCompleteTodo={toggleCompleteTodo}
                  active={activeTodoId === todo.id}
                />
              ))
            }
            <div className="col-12 todo-list-item">
              <TodoListForm
                createTodo={createTodo}
                errors={errors}
                isCreating={isCreating}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList;