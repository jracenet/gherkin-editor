import React from 'react'
import DatatableCellContainer from './DatatableCellContainer'

export default function(props) {
  const cells = props.cells.map((cell) => {
    return <td>
      <DatatableCellContainer cell={cell} />
    </td>
  })

  return <>
    { cells }
  </>
}