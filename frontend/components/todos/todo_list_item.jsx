import React, { Component } from 'react'
import moment from 'moment'
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

    const getDueDateBadgeColor = (date) => {
      if (moment(date).isBefore(moment.now())) {
        return 'danger'
      } else if (moment(date).isBetween(moment(), moment().add(2, 'days'))) {
        return 'warning'
      } else {
        return 'success'
      }
    }

    return (
      <div
        className={`card col-12 col-lg-8 mt-2 mb-2 ${todo.done ? 'todo--complete' : 'todo--incomplete'}`}
        style={{ width: '18rem' }}
      >
        <div className="card-body pl-0 pr-0" >
          <div
            className="card-titles justify-content-between d-flex"
            style={{ cursor: 'pointer' }}
            onClick={this.toggleDetail.bind(this)}
          >
            <div className="d-flex">
              <h5
                className="mr-2"
                style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
              >
                {todo.title}
              </h5>
              <a
                className={`position-relative toggle-detail-icon ${detail ? 'rotate-180' : ''}`}
              >
                {showTooltip && !detailShown ? <span className="alert alert-info position-absolute expand-arrow-tip">click arrow to show todo details</span> : ''}
                {'\u25b2'}
              </a>
            </div>
            {todo.due_date ?
              <p className={`badge badge-${getDueDateBadgeColor(todo.due_date)}`}>Due {moment(todo.due_date).calendar()}</p>
            : ''}
          </div>
          <TodoDetailContainer todo={todo} show={detail}/>
        </div>
      </div>
    )
  }
}

export default TodoListItem;