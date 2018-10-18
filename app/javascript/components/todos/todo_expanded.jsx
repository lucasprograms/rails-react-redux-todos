import React, { Component } from 'react'
import { debounce } from 'debounce'
import DateTime from 'react-datetime'
import moment from 'moment'

const UPDATE_TODO_DEBOUNCE_TIME_IN_MILLISECONDS = 500

export default class TodoExpanded extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todo: {
        title: '',
        body: '',
        due_date: null,
        done: false
      }
    }

    this.debouncedUpdateTodo = debounce(this.props.updateTodo, UPDATE_TODO_DEBOUNCE_TIME_IN_MILLISECONDS)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.todo.id !== this.props.todo.id) {
      if ((prevProps.todo.body !== this.state.todo.body) && this.state.todo.id) {
        this.props.updateTodo(this.state.todo)
      }

      this.setState({
        todo: this.props.todo
      })
    }
  }

  updateTodo (todo) {
    this.setState({ todo })
    this.debouncedUpdateTodo(todo)
  }
  
  handleBodyChange (e) {
    const todo = { ...this.state.todo, body: e.target.value }
    
    this.updateTodo(todo)
    this.debouncedUpdateTodo(todo)
  }

  handleCompletedStatusChange () {
    const todo = { ...this.state.todo, done: !this.state.todo.done }
    this.updateTodo(todo)
  }

  handleTitleChange (e) {
    const todo = { ...this.state.todo, title: e.target.value }
    
    this.updateTodo(todo)
  }

  handleDueDateChange (date) {
    if (!date.toDate) {
      return
    }

    const todo = { ...this.state.todo, due_date: date.toDate()}

    this.updateTodo(todo)
  }

  handleDeleteButtonClick () {
    this.props.destroyTodo(this.state.todo).then(() => {
      this.props.nextTodo ? this.props.receiveCurrentTodo(this.props.nextTodo) : this.props.receiveCurrentTodo({})
    })
  }

  render() {
    const { body, due_date, title } = this.state.todo

    if (Object.keys(this.props.todo).length) {
      return (
        <div className={`col-8 todo-expanded ${this.state.todo.done ? 'todo--complete' : 'todo--incomplete'}`}>
        <div className="d-flex justify-content-between">
          <div className="d-flex todo-expanded__title">
            <h2>
              <input value={title} onChange={(e) => { this.handleTitleChange(e) }} />
              <button
                className="btn btn-sm btn-outline-info mr-1 todo__complete-button"
                onClick={this.handleCompletedStatusChange.bind(this)}
              >
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={this.handleDeleteButtonClick.bind(this)}
              >
                {'\u2715'}
              </button>
            </h2>
            <div className="todo-expanded__datetime-container">
            <DateTime
              inputProps={{ placeholder: 'Due Date' }}
              onChange={(date) => { this.handleDueDateChange(date) }}
              timeConstraints={{minutes: { step: 15 }}}
              value={due_date ? moment(due_date).calendar() : null} 
            />
            </div>
          </div>
        </div>
        <textarea className="todo-expanded__body" placeholder={'buy apples...'} value={body} onChange={(e) => { this.handleBodyChange(e) }}/>
      </div>
      )
    } else {
      return <div className="col-8" style={{ height: '100%' }}></div>
    }

  }
}
