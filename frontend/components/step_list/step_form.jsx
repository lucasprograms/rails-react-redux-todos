import React, { Component } from 'react'

export default class StepForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      titleText: ''
    }
  }

  updateStepTitle (e) {
    this.setState({
      titleText: e.target.value
    })
  }

  handleSubmit (e, receiveStep) {
    e.preventDefault()
    const uniqueId = () => new Date().getTime();
    receiveStep({id: uniqueId(), title: this.state.titleText, done: false, todo_id: this.props.todoId })
    this.setState({
      titleText: ''
    })
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="#step-title">Title:</label>
          <input type="text" className="form-control" onChange={(e) => this.updateStepTitle(e)} value={this.state.titleText}/>
        </div>
        <button type="submit" onClick={(e) => this.handleSubmit(e, this.props.receiveStep.bind(this))}></button>
      </form>
    )
  }
}
