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

  handleSubmit (receiveTodo) {
    const uniqueId = () => new Date().getTime();

    receiveTodo({ id: uniqueId(), done: false, ...this.state })
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return (
      <form className="col-6">
        <div className="form-group">
          <label htmlFor="todo-title-input">Title:</label>
          <input id="todo-title-input" className="form-control" onChange={(e) => { this.updateTitle(e) }} value={this.state.title} />
        </div>
        <div className="form-group">
          <label htmlFor="todo-title-input">Body:</label>
          <input id="todo-body-input" className="form-control" onChange={(e) => { this.updateBody(e) }} value={this.state.body} />
        </div>
        <button className="btn btn-outline-dark" onClick={(e) => { e.preventDefault(); this.handleSubmit(this.props.receiveTodo) }}>Create Todo</button>
      </form>
    )
  }
}
