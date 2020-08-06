import React from 'react'
import DatatableRowContainer from './DatatableRowContainer'

export default function(props) {
  const rows = props.rows.map((row, index) => {
    return <tr>
      <DatatableRowContainer row={ row } index={ index } editRow={ props.editRow }/>
    </tr>
  })

  return <table>
    <tbody>
      { rows }
    </tbody>
  </table>
}