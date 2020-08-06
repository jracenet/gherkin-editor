import React from 'react'
import DatatableRowRender from './DatatableRowRender'

export default function(props) {
  return <>
    <DatatableRowRender cells={ props.row.cells } />
  </>
}