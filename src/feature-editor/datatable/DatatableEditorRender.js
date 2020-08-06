import React from 'react'
import DatatableRowContainer from './DatatableRowContainer'

export default function(props) {
  const rows = props.rows.map((row) => {
    return <tr>
      <DatatableRowContainer row={ row }/>
    </tr>
  })

  return <table>
    <tbody>
      { rows }
    </tbody>
  </table>
}