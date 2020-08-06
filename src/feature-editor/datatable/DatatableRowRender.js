import React from 'react'
import DatatableCellContainer from './DatatableCellContainer'

export default function(props) {
  const cells = props.cells.map((cell, index) => {
    return <td>
      <DatatableCellContainer cell={cell} index={index} editCellValue={ props.editCellValue }/>
    </td>
  })

  return <>
    { cells }
  </>
}