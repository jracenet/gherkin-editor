import React from 'react'
import DatatableCellContainer from '../datatable/DatatableCellContainer'

export default function(props) {
  const cells = props.cells.map((cell, index) => {
    return <td>
      <DatatableCellContainer cell={ cell } index={ index } editCellValue={ props.editCellValue }/>
      <button onClick={() => {props.headerActions.removeExampleColumn(index) }} >-</button>
    </td>
  })

  return <>
    { cells }
  </>
}