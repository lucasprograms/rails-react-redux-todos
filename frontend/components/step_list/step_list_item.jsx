import React, { Component } from 'react'

export default class StepListItem extends Component {
  render() {
    return (
      <li className={`col-12 ${this.props.step.done ? 'step--complete' : 'step--incomplete'}`}>
        <span className="mr-1" style={{ textDecoration: this.props.step.done ? 'line-through' : '' }}>{this.props.step.title}</span>
        <button
          className="btn btn-sm btn-outline-info mr-1 step__complete-button position-relative"
          onClick={() => this.props.toggleCompleteStep(this.props.step)}
          style={{ height: '15px', width: '13px', padding: '0px 2px' }}
        >
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          style={{ fontSize: '9px', padding: '0px 2px', marginBottom: '1px' }}
          onClick={() => this.props.removeStep(this.props.step)}
        >
          {'\u2715'}
        </button>
      </li>
    )
  }
}
