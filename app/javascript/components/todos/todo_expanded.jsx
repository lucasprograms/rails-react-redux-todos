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
        due_date: null
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

  triggerCalendar (e) {
    this.setState({ ...this.state.todo, due_date: new Date()})
    debugger
    $('.todo-expanded__title .rdt').trigger('click')
  }

  render() {
    const { body, due_date, title } = this.state.todo

    return (
      <div className="col-8 todo-expanded">
        <div className="d-flex justify-content-between">
          <div className="d-flex todo-expanded__title">
            <h2><input value={title} onChange={(e) => { this.handleTitleChange(e) }} /></h2>
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
        <textarea className="todo-expanded__body" value={body} onChange={(e) => { this.handleBodyChange(e) }}/>
      </div>
    )
  }
}
