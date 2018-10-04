import React, { Component } from 'react'
import DateTime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import { css } from 'react-emotion';
import { HashLoader } from 'react-spinners'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class TodoListForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      due_date: null,
      button: 'new'
    }
  }

  updateTitle (e) {
    this.setState({
      title: e.target.value
    })
  }

  updateBody (e) {
    this.setState({
      body: e.target.value
    })
  }

  updateDueDate (date) {
    if (!date.toDate) {
      return
    }
    this.setState({
      due_date: date.toDate()
    })
  }

  toggleButtonName () {
    this.setState({
      button: this.state.button === 'new' ? 'create' : 'new'
    })
  }

  handleSubmit (createTodo) {
    createTodo(this.state).then(() => {
      this.setState({
        title: '',
        body: '',
        due_date: null
      })
    }).then(() => {
      this.toggleButtonName()
      document.getElementById('create-todo-form').classList.remove('show')
    })
  }

  getErrorTitle (errors) {
    if (errors.length === 1) {
      return 'an error'
    } else {
      return `${errors.length} errors`
    }
  }

  render() {
    const { createTodo, errors, isCreating } = this.props

    const CreateTodoButton = () => (
      <button
        className="btn btn-outline-primary create-todo-button"
        style={{ minWidth: '113px' }}
        disabled={isCreating}
        onClick={(e) => { e.preventDefault(); this.handleSubmit(createTodo) }}
      >
        <HashLoader
          sizeUnit={"px"}
          size={25}
          color={'#123abc'}
          loading={isCreating}
        />
        { isCreating ? '' : 'Create Todo'}
      </button>
    )

    const NewTodoButton = () => (
      <button onClick={this.toggleButtonName.bind(this)} className="btn btn-outline-dark" data-toggle="collapse" href="#create-todo-form" role="button" aria-expanded="false" aria-controls="create-todo-form">
        New Todo
      </button>
    )

    return (
      <div className="col-12">
        <ul className={`alert alert-danger ${errors.todos[0] ? '' : 'd-none'}`}>
          <li className="font-weight-bold">We encountered {this.getErrorTitle(errors.todos)}:</li>
          {errors.todos.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
        <form>
          { this.state.button === 'new' ? <NewTodoButton /> : <CreateTodoButton />}
          <div className="collapse mt-2" id="create-todo-form">
          <div className="form-group">
            <label htmlFor="todo-title-input">Title:</label>
            <input id="todo-title-input" className="form-control" onChange={(e) => { this.updateTitle(e) }} value={this.state.title} />
          </div>
          <div className="form-group">
            <label htmlFor="todo-title-input">Body:</label>
            <input id="todo-body-input" className="form-control" onChange={(e) => { this.updateBody(e) }} value={this.state.body} />
          </div>
          <div className="form-group">
            <label>Due Date:</label>
            <DateTime
              onChange={(date) => { debugger; this.updateDueDate(date) }}
              timeConstraints={{minutes: { step: 15 }}}
              value={this.state.due_date}
            />
          </div>
          </div>
        </form>
      </div>
    )
  }
}
