import React from 'react'
import StepTextRender from './StepTextRender'
import StepKeywordContainer from './StepKeywordContainer'
import DatatableEditorContainer from '../datatable/DatatableEditorContainer'

export default function(props) {
  const { editStepAnnotation, editStepText, updateStepAndCreateOne, editStepDatatable } = props.stepEditionMethods

  let extraStepData = null

  if (props.datatable) {
    extraStepData = <div className="step-extra-data">
      <DatatableEditorContainer datatable={props.datatable} editDatatable={ editStepDatatable } />
    </div>
  }

  return (
    <li className="step" data-index={props.index}>
      <div className="step-basic-data">
        <StepKeywordContainer keyword={props.keyword} onAnnotationChange={ editStepAnnotation } />
        <StepTextRender text={props.text} onTextChange={ editStepText } updateStepAndCreateOne={ updateStepAndCreateOne} />
      </div>

      { extraStepData }
    </li>
  )
}