import React from 'react'
import DatatableCellRender from './DatatableCellRender'

export default function(props) {
  function editCellValue(newValue) {
    // TODO: gherkin-utils pretty function does not support datatable for now
    // props.editCellValue(newValue, props.index)
  }

  return <>
    <DatatableCellRender cell={ props.cell } onCellValueChange={ editCellValue }/>
  </>
}