import React from 'react'

const StepListItem = ({ updateStep, step, destroyStep }) => 
  <li className={`col-12 ${step.done ? 'step--complete' : 'step--incomplete'}`}>
    <span className="mr-1" style={{ textDecoration: step.done ? 'line-through' : '' }}>{step.body}</span>
    <button
      className="btn btn-sm btn-outline-info mr-1 step__complete-button position-relative"
      onClick={() => updateStep({ ...step, done: !step.done })}
      style={{ height: '15px', width: '13px', padding: '0px 2px' }}
    >
    </button>
    <button
      className="btn btn-sm btn-outline-danger"
      style={{ fontSize: '9px', padding: '0px 2px', marginBottom: '1px' }}
      onClick={() => destroyStep(step)}
    >
      {'\u2715'}
    </button>
  </li>

export default StepListItem
