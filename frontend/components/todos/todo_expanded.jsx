import React, { Component } from 'react'
import { debounce } from 'debounce'

export default class TodoExpanded extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todo: this.props.todo
    }

    this.updateTodo = debounce(this.props.updateTodo, 2500)
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
    this.setState({
      todo: { ...this.state.todo, body: e.target.value }
    })

    this.updateTodo({ ...this.props.todo, body: e.target.value })
  }

  render() {
    const { body } = this.state.todo

    return (
      <div className="col-8 todo-expanded">
        <textarea value={body} onChange={(e) => { this.handleBodyChange(e) }}/>
      </div>
    )
  }
}
