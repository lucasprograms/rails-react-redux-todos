import React, { Component } from 'react'
import DueDateBadge from '../utility/due_date_badge'

class TodoListItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      detail: false,
      detailShown: false
    }
  }

  toggleDetail () {
    this.setState({
      detail: !this.state.detail,
      detailShown: true
    })
  }

  render () {
    const { active, todo } = this.props

    return (
      <div className={`col-12 todo-list-item clearfix ${todo.done ? 'todo--complete' : 'todo--incomplete'} ${active ? 'active' : ''}`} onClick={this.props.fetchTodo}>
        <div className="float-left col-12 pl-0">{todo.title}</div>
        <div className="float-left">{todo.due_date ? <DueDateBadge dueDate={todo.due_date} /> : '' }</div>
      </div>
    )
  }
}

export default TodoListItem;