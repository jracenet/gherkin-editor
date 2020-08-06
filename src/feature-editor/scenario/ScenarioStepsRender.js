import React from 'react'
import StepContainer from './StepContainer'

export default function(props) {
  return <ul className="steps-list">
    { props.steps.map((step, index) =>
      <StepContainer
        key={ step.id }
        step={ step }
        index={ index }
        onEditStep={ props.actions.editStep }
        onAddStep={ props.actions.addStep }
        onEditAndAddStep={ props.actions.editAndAddStep }/>)
    }
    <button className="btn--secondary" onClick={ props.actions.addStep }>Add step</button>
  </ul>
}