import React, { Component } from 'react'

export default class StepListItem extends Component {
  toggleStepDone (step) {
    step.done = !step.done
    return step
  }

  render() {
    return (
      <li className={`col-12 ${this.props.step.done ? 'step--complete' : 'step--incomplete'}`}>
        <span className="mr-1" style={{ textDecoration: this.props.step.done ? 'line-through' : '' }}>{this.props.step.body}</span>
        <button
          className="btn btn-sm btn-outline-info mr-1 step__complete-button position-relative"
          onClick={() => this.props.updateStep(this.toggleStepDone(this.props.step))}
          style={{ height: '15px', width: '13px', padding: '0px 2px' }}
        >
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          style={{ fontSize: '9px', padding: '0px 2px', marginBottom: '1px' }}
          onClick={() => this.props.destroyStep(this.props.step)}
        >
          {'\u2715'}
        </button>
      </li>
    )
  }
}
