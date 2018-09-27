import React, { Component } from 'react'

export default class TodoListForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
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

  handleSubmit (createTodo) {
    createTodo(this.state).then(() => {
      this.setState({
        title: '',
        body: ''
      })
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
    const { createTodo, errors } = this.props

    return (
      <div className="col-12">
        <ul className={`alert alert-danger ${errors.todos[0] ? '' : 'd-none'}`}>
          <li className="font-weight-bold">We encountered {this.getErrorTitle(errors.todos)}:</li>
          {errors.todos.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
        <form >
          <div className="form-group">
            <label htmlFor="todo-title-input">Title:</label>
            <input id="todo-title-input" className="form-control" onChange={(e) => { this.updateTitle(e) }} value={this.state.title} />
          </div>
          <div className="form-group">
            <label htmlFor="todo-title-input">Body:</label>
            <input id="todo-body-input" className="form-control" onChange={(e) => { this.updateBody(e) }} value={this.state.body} />
          </div>
          <button
            className="btn btn-outline-dark"
            onClick={(e) => { e.preventDefault(); this.handleSubmit(createTodo) }}
          >
            Create Todo
          </button>
        </form>
      </div>
    )
  }
}
