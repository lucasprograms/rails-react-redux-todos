import React, { Component } from 'react'

export default class TodoExpanded extends Component {
  constructor (props) {
    super(props)

    this.state = {
      body: this.props.todo.body
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.todo.id !== this.props.todo.id) {
      if (prevProps.todo.body !== this.state.body) {
        this.props.updateTodo({ ...prevProps.todo, body: this.state.body })
      }

      this.setState({
        body: this.props.todo.body
      })

    }
  }
 
  handleBodyChange (e) {
    this.setState({
      body: e.target.value
    })
  }

  render() {
    const { body } = this.state

    return (
      <div className="col-8 todo-expanded">
        <textarea value={body} onChange={(e) => { this.handleBodyChange(e) }}/>
      </div>
    )
  }
}
