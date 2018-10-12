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
    this.props.fetchTodos()
  }

  sortByDueDate () {
    this.props.sortByDueDate()
  }

  sortByCreatedDate () {
    this.props.sortByCreatedDate()
  }

  render () {
    const {
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
      <div className="col-lg-3 border-right no-gutters">
        <div className="col-12 d-flex justify-content-end pr-0">
          <div className="dropdown" style={{ width: '215px' }}>
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle pull-right" style={{ width: '215px' }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
          <ul className={`${isFetching ? 'd-none' : ''}`}>
            {todos.length ? todos.map((todo) => (
              <TodoListItemContainer
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                toggleCompleteTodo={toggleCompleteTodo}
              />
            )) : <TodoPlaceholder />}
              </ul>
          <div className="row justify-content-center col-10">
            <TodoListForm
              createTodo={createTodo}
              errors={errors}
              isCreating={isCreating}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList;