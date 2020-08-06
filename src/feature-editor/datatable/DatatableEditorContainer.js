import React from 'react'
import DatatableEditorRender from './DatatableEditorRender'

export default function(props) {
  return <>
    <DatatableEditorRender rows={ props.datatable.rows }/>
  </>
}