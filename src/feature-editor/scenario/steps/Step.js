import React from 'react'
import Annotation from './Annotation'
import Text from './Text'
import GherkinAstMutator from 'lib/GherkinAstMutator'

export default function(props) {
  function editStepAnnotation(keyword) {
    const newStepAst = GherkinAstMutator.updateStep(props.step, keyword, null, props.index)
    props.onEditStep(newStepAst, props.index)
  }

  function editStepText(text) {
    const newStepAst = GherkinAstMutator.updateStep(props.step, null, text, props.index)
    props.onEditStep(newStepAst, props.index)
  }

  function updateStepAndCreateOne(text) {
    const updatedStepAst = GherkinAstMutator.updateStep(props.step, null, text, props.index)
    props.onEditAndAddStep(updatedStepAst, props.index)
  }

  return (
    <li class="step" data-index={props.index}>
      <Annotation annotation={props.step.keyword} onAnnotationChange={ editStepAnnotation } />
      <Text text={props.step.text} onTextChange={ editStepText } updateStepAndCreateOne={ updateStepAndCreateOne} />
    </li>
  )
}