import React from 'react'
import DatatableRowContainer from '../datatable/DatatableRowContainer'

export default function({example}) {
  return <table>
    <thead><tr><DatatableRowContainer row={ example.tableHeader } index={ 0 } editRow={ () => {} }/></tr></thead>
    <tbody>{example.tableBody.map((row, index) => {
      return <tr><DatatableRowContainer row={ row } index={ index } editRow={ () => {} }/></tr>
    })}</tbody>
  </table>
}