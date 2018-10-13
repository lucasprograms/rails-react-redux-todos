import React, { Component } from 'react'
import StepListItemContainer from './step_list_item_container'
import StepForm from './step_form'

export default class StepList extends Component {
  render() {
    return (
      <div className="container mb-2 mt-2">
        <ul className="row">
          <li className="font-weight-bold col-12 pl-0">Steps:</li>
          {this.props.steps.map(step => <StepListItemContainer key={step.id} step={step} />)}
        </ul>
        <StepForm createStep={this.props.createStep} todoId={this.props.todoId} />
      </div>
    )
  }
}
