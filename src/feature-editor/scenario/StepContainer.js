import React from 'react'
import GherkinAstMutator from 'lib/GherkinAstMutator'
import StepRender from './StepRender'

export default function(props) {
  const stepEditionMethods = {
    editStepAnnotation(keyword) {
      const newStepAst = GherkinAstMutator.updateStep(props.step, keyword, null, props.index)
      props.onEditStep(newStepAst, props.index)
    },

    editStepText(text) {
      const newStepAst = GherkinAstMutator.updateStep(props.step, null, text, props.index)
      props.onEditStep(newStepAst, props.index)
    },

    updateStepAndCreateOne(text) {
      const updatedStepAst = GherkinAstMutator.updateStep(props.step, null, text, props.index)
      props.onEditAndAddStep(updatedStepAst, props.index)
    }
  }

  return <>
    <StepRender index={ props.index }
                keyword={ props.step.keyword }
                text={ props.step.text }
                datatable={ props.step.dataTable }
                stepEditionMethods={ stepEditionMethods }/>
  </>
}