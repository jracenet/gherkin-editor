import React from 'react'
import ExampleHeaderCellsRender from './ExampleHeaderCellsRender'

export default function(props) {
  const mutableRowAST = { ...props.row },
        rowIndex = props.index

  function editCellValue(newValue, index) {
    mutableRowAST.cells[index].value = newValue
    props.headerActions.editExampleHeader(mutableRowAST, rowIndex)
  }

  return <>
    <ExampleHeaderCellsRender cells={ props.row.cells } editCellValue={ editCellValue } headerActions={ props.headerActions }/>
  </>
}