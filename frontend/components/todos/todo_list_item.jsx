import React, { Component } from 'react'
import TodoDetailContainer from './todo_detail_container'

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
    const { todo, showTooltip } = this.props
    const { detailShown, detail } = this.state

    return (
      <div
        className={`card col-12 col-lg-8 mt-2 mb-2 ${todo.done ? 'todo--complete' : 'todo--incomplete'}`}
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
            <a
              className={`toggle-detail-icon ${detail ? 'rotate-180' : ''}`}
            >
              {'\u25b2'}
            </a>
            { showTooltip && !detailShown ? <small className="mt-1 ml-1">{'\u2190'} click to show todo details</small> : ''}
          </div>
          <TodoDetailContainer todo={todo} show={detail}/>
        </div>
      </div>
    )
  }
}

export default TodoListItem;