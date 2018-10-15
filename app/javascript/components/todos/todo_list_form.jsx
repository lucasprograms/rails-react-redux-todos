import React, { Component } from 'react'
import DateTime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import { css } from 'react-emotion';
import { HashLoader } from 'react-spinners'

const override = css`
    display: block;
    margin: 0 auto;
`;

export default class TodoListForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      due_date: null,
    }
  }

  updateTitle (e) {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit () {
    this.props.createTodo(this.state).then((todo) => {
      this.setState({
        title: '',
        body: '',
        due_date: null
      })
    })
  }

  getErrorTitle (errors) {
    if (!errors) {
      return
    }
    if (errors.length === 1) {
      return 'an error'
    } else {
      return `${errors.length} errors`
    }
  }

  render() {
    const { errors } = this.props

    return (
      <div className="todo-list-form">
        <ul className={`alert alert-danger ${errors.todos && errors.todos.length ? '' : 'd-none'}`}>
          <li className="font-weight-bold">We encountered {this.getErrorTitle(errors.todos)}:</li>
          {errors.todos && errors.todos.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="todo-list-form__input-container">
            <input
              placeholder="new todo..."
              id="todo-title-input"
              onChange={(e) => { this.updateTitle(e) }} value={this.state.title}
            />
            <button>{'\uff0b'}</button>
          </div>
        </form>
      </div>
    )
  }
}
