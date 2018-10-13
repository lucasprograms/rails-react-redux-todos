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

  handleSubmit(createStep) {
    const uniqueId = () => new Date().getTime();
    createStep({id: uniqueId(), body: this.state.titleText, done: false, todo_id: this.props.todoId })
    this.setState({
      titleText: ''
    })
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input placeholder="new step" type="text" className="form-control mt-1" onChange={(e) => this.updateStepTitle(e)} value={this.state.titleText}/>
        </div>
        <button className="d-none" type="submit" onClick={(e) => { e.preventDefault(); this.handleSubmit(this.props.createStep.bind(this)) }}></button>
      </form>
    )
  }
}
