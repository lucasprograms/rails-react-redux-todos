import React, { Component } from 'react'
import { debounce } from 'debounce'
import DueDateBadge from '../utility/due_date_badge'

const UPDATE_TODO_DEBOUNCE_TIME_IN_MILLISECONDS = 500

export default class TodoExpanded extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todo: this.props.todo
    }

    this.debouncedUpdateTodo = debounce(this.props.updateTodo, UPDATE_TODO_DEBOUNCE_TIME_IN_MILLISECONDS)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.todo.id !== this.props.todo.id) {
      if (prevProps.todo.body !== this.state.todo.body) {
        this.props.updateTodo(this.state.todo)
      }

      this.setState({
        todo: this.props.todo
      })
    }
  }
 
  handleBodyChange (e) {
    const todo = { ...this.state.todo, body: e.target.value }
    
    this.setState({ todo })
    this.debouncedUpdateTodo(todo)
  }

  handleTitleChange (e) {
    const todo = { ...this.state.todo, title: e.target.value }
    
    this.setState({ todo })
    this.debouncedUpdateTodo(todo)
  }

  render() {
    const { body, due_date, title } = this.state.todo

    return (
      <div className="col-8 todo-expanded">
        <div className="d-flex justify-content-between">
          <h2 className="d-flex todo-expanded__title"><input value={title} onChange={(e) => { this.handleTitleChange(e) }}/></h2>
          <DueDateBadge dueDate={due_date} />
        </div>
        <textarea className="todo-expanded__body" value={body} onChange={(e) => { this.handleBodyChange(e) }}/>
      </div>
    )
  }
}
