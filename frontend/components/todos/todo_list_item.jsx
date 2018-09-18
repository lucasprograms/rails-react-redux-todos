import React, { Component } from 'react'
import TodoDetailContainer from './todo_detail_container'

class TodoListItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      detail: false
    }
  }

  toggleDetail () {
    this.setState({
      detail: !this.state.detail
    })
  }

  render () {
    const todo = this.props.todo

    return (
      <div
        className={`card col-8 mt-2 mb-2 ${todo.done ? 'todo--complete' : 'todo--incomplete'}`}
        style={{ width: '18rem' }}
      >
        <div className="card-body" >
          <div
            className="card-titles justify-content-left d-flex"
            style={{ cursor: 'pointer' }}
            onClick={this.toggleDetail.bind(this)}
          >
            <h5
              className="mr-2"
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            >
              {todo.title}
            </h5>
            <div className={`toggle-detail-icon ${this.state.detail ? 'rotate-180' : ''}`}>{'\u25b2'}</div>
          </div>
          <TodoDetailContainer todo={todo} show={this.state.detail}/>
        </div>
      </div>
    )
  }
}


export default TodoListItem;