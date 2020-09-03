import React from 'react'
import DatatableEditorRender from './DatatableEditorRender'

export default function(props) {
  const mutableDatatableAST = { ...props.datatable }
  function editRow(newRowAST, index) {
    mutableDatatableAST.rows[index] = newRowAST
    props.editDatatable(mutableDatatableAST)
  }
  return <>
    <DatatableEditorRender rows={ props.datatable.rows } editRow={ editRow }/>
  </>
}