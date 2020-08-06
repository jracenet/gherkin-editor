import React from 'react'
import DatatableCellRender from './DatatableCellRender'

export default function(props) {
  function editCellValue(newValue) {
    props.editCellValue(newValue, props.index)
  }

  return <>
    <DatatableCellRender cell={ props.cell } onCellValueChange={ editCellValue }/>
  </>
}