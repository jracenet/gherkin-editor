import React from 'react'
import StepTextRender from './StepTextRender'
import StepKeywordContainer from './StepKeywordContainer'

export default function(props) {
  const { editStepAnnotation, editStepText, updateStepAndCreateOne } = props.stepEditionMethods

  return (
    <li class="step" data-index={props.index}>
      <StepKeywordContainer keyword={props.keyword} onAnnotationChange={ editStepAnnotation } />
      <StepTextRender text={props.text} onTextChange={ editStepText } updateStepAndCreateOne={ updateStepAndCreateOne} />
    </li>
  )
}