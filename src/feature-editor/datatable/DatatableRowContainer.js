import React from 'react'
import DatatableRowRender from './DatatableRowRender'

export default function(props) {
  const mutableRowAST = { ...props.row },
        rowIndex = props.index

  function editCellValue(newValue, index) {
    mutableRowAST.cells[index].value = newValue
    props.editRow(mutableRowAST, rowIndex)
  }

  return <>
    <DatatableRowRender cells={ props.row.cells } editCellValue={ editCellValue }/>
  </>
}